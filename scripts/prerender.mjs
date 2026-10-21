import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = fileURLToPath(new URL('../', import.meta.url));
const server = await createServer({ root, server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
try {
  const { pages, renderPage, renderPageHead } = await server.ssrLoadModule('/src/entry-server.tsx');
  const template = await readFile(resolve(root, 'dist/index.html'), 'utf8');
  if (!template.includes('<div id="root"></div>') || !template.includes('<!--sad:head-->')) {
    throw new Error('Ön işleme için gereken HTML şablonu bulunamadı.');
  }
  for (const path of [...pages.map(page => page.path), '/404.html']) {
    const html = template
      .replace(/<!--sad:head-->[\s\S]*?<!--\/sad:head-->/, () => `<!--sad:head-->\n    ${renderPageHead(path)}\n    <!--/sad:head-->`)
      .replace('<div id="root"></div>', () => `<div id="root">${renderPage(path)}</div>`);
    const destination = resolve(root, 'dist', path === '/404.html' ? '404.html' : `.${path}index.html`);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, html);
    console.log(`HTML hazır: ${path}`);
  }
} finally {
  await server.close();
}
