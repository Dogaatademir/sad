import { contactDetails } from '../data/contactDetails';
import { fyyQuestions } from '../data/faqContent';
import { sourceLinks } from '../data/sourceLinks';

type Entity = Record<string, unknown>;

export function getStructuredData(origin: string, page: { path: string; title: string; description: string; label: string }) {
  const organizationId = `${origin}/#organization`;
  const founderId = `${origin}/hakkimizda/#sitki-arslan`;
  const serviceId = `${origin}/#fyy-danismanligi`;
  const url = `${origin}${page.path}`;
  const organization: Entity = {
    '@type': 'Organization', '@id': organizationId,
    name: 'SAD — Sıtkı Arslan Danışmanlık', alternateName: 'SAD', url: `${origin}/`,
    description: 'Finansal yeniden yapılandırma ve finansal danışmanlık.',
    telephone: contactDetails.phoneHref.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${contactDetails.street}, ${contactDetails.building}`,
      addressLocality: 'Çankaya', addressRegion: 'Ankara', addressCountry: 'TR',
    },
    founder: { '@id': founderId },
  };
  const founder: Entity = {
    '@type': 'Person', '@id': founderId, name: 'Sıtkı Arslan',
    url: `${origin}/hakkimizda/#founder-heading`, jobTitle: 'SAD Kurucusu · Finansal Danışman',
    worksFor: { '@id': organizationId },
  };
  const service: Entity = {
    '@type': 'Service', '@id': serviceId,
    name: 'Finansal yeniden yapılandırma danışmanlığı',
    serviceType: 'FYY danışmanlığı', url: `${origin}/fyy-nedir/`,
    provider: { '@id': organizationId },
    description: 'Borç analizi, yapılandırma planlaması, başvuru hazırlığı ve alacaklı kuruluşlarla görüşmelerin takibi.',
  };
  const questions = page.path === '/sik-sorulan-sorular/' ? fyyQuestions : null;
  const pageEntity: Entity = {
    '@type': questions ? ['WebPage', 'FAQPage'] : page.path === '/hakkimizda/' ? 'AboutPage' : page.path === '/iletisim/' ? 'ContactPage' : 'WebPage',
    '@id': `${url}#webpage`, url, name: page.title, description: page.description,
    inLanguage: 'tr-TR', isPartOf: { '@id': `${origin}/#website` },
    publisher: { '@id': organizationId },
    about: { '@id': page.path === '/hakkimizda/' ? founderId : questions ? serviceId : organizationId },
    ...(questions ? { mainEntity: questions.map(([question, answer]) => ({
      '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
    })), citation: [sourceLinks.tbb] } : {}),
  };
  const graph: Entity[] = [organization, founder, service, {
    '@type': 'WebSite', '@id': `${origin}/#website`, url: `${origin}/`,
    name: 'SAD — Sıtkı Arslan Danışmanlık', inLanguage: 'tr-TR', publisher: { '@id': organizationId },
  }, pageEntity];
  // Only subpages have a hierarchical breadcrumb. No invisible business claims.
  if (page.path !== '/') {
    pageEntity.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: `${origin}/` },
      { '@type': 'ListItem', position: 2, name: page.label, item: url },
    ] });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
