import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { pages, renderPageHead, siteOrigin } from './src/seo/siteMetadata';

const seoFiles: Record<string, string> = {
  'sitemap.xml': `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(page => page.indexable !== false).map(page => `  <url><loc>${siteOrigin}${page.path}</loc></url>`).join('\n')}\n</urlset>\n`,
  'robots.txt': `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`,
};

function siteMetadata(): Plugin {
  return {
    name: 'sad-site-metadata',
    transformIndexHtml(html, context) {
      const path = context.originalUrl?.split('?')[0] ?? '/';
      return html.replace(/<!--sad:head-->[\s\S]*?<!--\/sad:head-->/,
        () => `<!--sad:head-->\n    ${renderPageHead(path)}\n    <!--/sad:head-->`);
    },
    configureServer(server) {
      for (const [filename, content] of Object.entries(seoFiles)) {
        server.middlewares.use(`/${filename}`, (_request, response) => {
          response.setHeader('Content-Type', filename.endsWith('.xml') ? 'application/xml; charset=utf-8' : 'text/plain; charset=utf-8');
          response.end(content);
        });
      }
    },
    configurePreviewServer(server) {
      // Match the canonical addresses in local production preview as well.
      server.middlewares.use((request, response, next) => {
        const url = new URL(request.url ?? '/', 'http://localhost');
        const page = pages.find(item => url.pathname === `${item.path}index.html`
          || (item.path !== '/' && url.pathname === item.path.slice(0, -1)));
        if (!page) return next();
        response.statusCode = 301;
        response.setHeader('Location', `${page.path}${url.search}`);
        response.end();
      });
      return () => {
        server.middlewares.use(async (request, response, next) => {
          const path = (request.url ?? '/').split('?')[0];
          if (pages.some(page => path === `${page.path}index.html`)) return next();
          try {
            const html = await readFile(resolve(server.config.root, server.config.build.outDir, '404.html'));
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            response.end(request.method === 'HEAD' ? undefined : html);
          } catch (error) {
            next(error);
          }
        });
      };
    },
    generateBundle() {
      for (const [fileName, source] of Object.entries(seoFiles)) {
        this.emitFile({ type: 'asset', fileName, source });
      }
    },
  };
}

export default defineConfig(({ command, isPreview }) => ({
  appType: command === 'serve' && !isPreview ? 'spa' : 'mpa',
  plugins: [react(), siteMetadata()],
}));
