import Layout from './layouts/layout';
import { usePageMetadata } from './hooks/usePageMetadata';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { FyyPage } from './pages/FyyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LegalPage } from './pages/LegalPage';
import { legalDocuments } from './data/legalContent';

export default function App({ pathname = window.location.pathname }: { pathname?: string }) {
  const currentPath = pathname.replace(/\/+$/, '') || '/';
  usePageMetadata(currentPath);
  const legalDocument = legalDocuments.find(document => document.path === `${currentPath}/`);
  const page = currentPath === '/iletisim' ? <ContactPage />
    : currentPath === '/hakkimizda' ? <AboutPage />
    : currentPath === '/fyy-nedir' ? <FyyPage />
    : currentPath === '/' ? <HomePage />
    : legalDocument ? <LegalPage document={legalDocument} />
    : <NotFoundPage />;

  return <Layout currentPath={currentPath}>{page}</Layout>;
}
