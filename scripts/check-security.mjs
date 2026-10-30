import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const rules = await readFile(resolve(dist, '_headers'), 'utf8');
assert(rules.startsWith('/*\n'), 'Güvenlik başlıkları bütün statik yollara uygulanmalı.');
const csp = rules.match(/  Content-Security-Policy: (.+)/)?.[1];
assert(csp);
for (const directive of ["default-src 'none'", "script-src 'self'", "style-src 'self'", "connect-src 'self'", "frame-ancestors 'none'", "base-uri 'none'", "form-action 'self'"]) assert(csp.includes(directive));
assert(!/unsafe-inline|unsafe-eval|https?:|\*/.test(csp), 'CSP geniş izin içermemeli.');
for (const header of ['X-Content-Type-Options: nosniff', 'X-Frame-Options: DENY', 'Referrer-Policy: strict-origin-when-cross-origin', 'Permissions-Policy:', 'Strict-Transport-Security: max-age=31536000']) assert(rules.includes(header));
let pages = 0;
async function visit(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, item.name);
    if (item.isDirectory()) await visit(path);
    else if (item.name.endsWith('.html')) {
      const html = await readFile(path, 'utf8');
      for (const [, attributes, content] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        if (/\bsrc\s*=/i.test(attributes)) continue;
        const hash = `sha256-${createHash('sha256').update(content).digest('base64')}`;
        assert(csp.includes(`'${hash}'`), `Inline betik özeti eksik: ${item.name}`);
      }
      assert(!/\s(?:onload|onerror|onclick|style)\s*=/i.test(html), 'Inline olay/stil CSP ile uyumsuz.');
      assert(!/\b(?:re_[A-Za-z0-9_-]{20,}|sb_secret_[A-Za-z0-9_-]+)\b/.test(html), 'HTML gizli anahtar biçimi içeriyor.');
      pages++;
    } else if (item.name.endsWith('.js')) {
      assert(!/\b(?:re_[A-Za-z0-9_-]{20,}|sb_secret_[A-Za-z0-9_-]+)\b/.test(await readFile(path, 'utf8')), 'Tarayıcı betiği gizli anahtar biçimi içeriyor.');
    }
  }
}
await visit(dist);
console.log(`Güvenlik doğrulandı: ${pages} HTML dosyası, CSP özetleri, HTTP başlıkları ve anahtar taraması.`);
