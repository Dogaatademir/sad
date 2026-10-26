import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, relative } from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const sitemap = await readFile(resolve(dist, 'sitemap.xml'), 'utf8');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]));
assert.deepEqual(locations.map(location => location.pathname).sort(), ['/', '/hakkimizda/', '/fyy-nedir/', '/sik-sorulan-sorular/', '/iletisim/'].sort(), 'Sitemap beş kurumsal sayfayı içermeli.');
const origin = locations[0].origin;
const titles = new Set();
async function findHtml(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await findHtml(path));
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}
for (const output of await findHtml(dist)) {
  const path = relative(dist, output).replaceAll('\\', '/');
  const route = path === 'index.html' ? '/' : path === '404.html' ? '/404.html' : `/${path.replace(/index\.html$/, '')}`;
  const location = new URL(route, origin);
  const indexed = locations.some(item => item.href === location.href);
  const missing = location.pathname === '/404.html';
  const file = resolve(dist, missing ? '404.html' : `.${location.pathname}index.html`);
  const html = await readFile(file, 'utf8');
  const head = html.split('</head>')[0];
  const body = html.split('<body>')[1];
  const title = head.match(/<title>([^<]+)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${location.pathname}: özgün başlık gerekli.`);
  titles.add(title);
  assert.equal((body.match(/<h1[ >]/g) ?? []).length, 1, 'Sayfada bir H1 bulunmalı.');
  assert(body.includes('<main id="main"'), 'Ana içerik JavaScript olmadan HTML’de bulunmalı.');
  assert(body.includes('alt="SAD"'), 'SAD kurum kimliği HTML’de bulunmalı.');
  assert.equal((head.match(/name="description"/g) ?? []).length, 1);
  const canonical = head.match(/rel="canonical" href="([^"]+)"/)?.[1];
  const schema = head.match(/<script id="sad-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  if (missing) {
    assert.equal(canonical, undefined, '404 canonical içermemeli.');
    assert.equal(schema, undefined, '404 işletme şeması içermemeli.');
    assert(head.includes('content="noindex, follow"'));
  } else {
    assert.equal(canonical, location.href);
    assert(head.includes(`property="og:url" content="${location.href}"`));
    assert(head.includes(indexed ? 'content="index, follow, max-image-preview:large"' : 'content="noindex, follow"'));
    const data = JSON.parse(schema);
    assert.equal(data['@context'], 'https://schema.org');
    const graph = data['@graph'];
    assert(graph.some(entity => entity['@type'] === 'Organization' && entity.telephone === '+903124000562'));
    const page = graph.find(entity => entity['@id'] === `${location.href}#webpage`);
    assert.equal(page.url, canonical);
    const questions = page.mainEntity ?? [];
    assert.equal(questions.length, (body.match(/<details[ >]/g) ?? []).length);
    for (const question of questions) {
      assert(body.includes(question.name), 'Şemadaki soru görünür içerikte bulunmalı.');
      assert(body.includes(question.acceptedAnswer.text), 'Şemadaki yanıt görünür içerikle aynı olmalı.');
    }
  }
  for (const [, attribute, url] of body.matchAll(/(href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const destination = resolve(dist, `.${decodeURIComponent(url)}${url.endsWith('/') ? 'index.html' : ''}`);
    await assert.doesNotReject(access(destination), `${attribute} hedefi eksik: ${url}`);
  }
  console.log(`SEO doğrulandı: ${location.pathname}`);
}
const robots = await readFile(resolve(dist, 'robots.txt'), 'utf8');
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert(!robots.includes('Disallow: /'));
console.log('Sitemap, robots, HTML içerikleri, bağlantılar ve JSON-LD doğrulandı.');
