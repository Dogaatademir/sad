import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { securityHeaders } from '../netlify/lib/security-headers.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const hashes = new Set();
async function visit(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, item.name);
    if (item.isDirectory()) await visit(path);
    else if (item.name.endsWith('.html')) {
      const html = await readFile(path, 'utf8');
      for (const [, attributes, content] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        if (/\bsrc\s*=/i.test(attributes)) continue;
        hashes.add(`sha256-${createHash('sha256').update(content).digest('base64')}`);
      }
    }
  }
}
await visit(dist);
const headers = securityHeaders([...hashes].sort());
await writeFile(resolve(dist, '_headers'), '/*\n' + Object.entries(headers).map(([key, value]) => `  ${key}: ${value}`).join('\n') + '\n');
console.log(`Güvenlik başlıkları hazır; ${hashes.size} sabit inline betik özeti.`);
