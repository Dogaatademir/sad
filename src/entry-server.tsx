import { renderToString } from 'react-dom/server';
import App from './App';
export { pages, renderPageHead } from './seo/siteMetadata';

export function renderPage(pathname: string) {
  return renderToString(<App pathname={pathname} />);
}
