import Layout from './layout';
import { HomePage } from './HomePage';
import { ContactPage } from './ContactPage';
import { AboutPage } from './AboutPage';
import { FyyPage } from './FyyPage';

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const page = currentPath === '/iletisim' ? <ContactPage />
    : currentPath === '/hakkimizda' ? <AboutPage />
    : currentPath === '/fyy-nedir' ? <FyyPage />
    : <HomePage />;

  return <Layout currentPath={currentPath}>{page}</Layout>;
}
