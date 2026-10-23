import { getStructuredData } from './structuredData';
import { legalDocuments } from '../data/legalContent';

export const siteOrigin = 'https://noir-studio-doga-191026.handedemir320.chatgpt.site';
export const socialImage = `${siteOrigin}/social/sad-share.png`;

type PageMetadata = { path: string; label: string; title: string; description: string; indexable?: boolean };

export const pages: PageMetadata[] = [
  {
    path: '/',
    label: 'Anasayfa',
    title: 'SAD | Finansal Yeniden Yapılandırma',
    description: 'SAD, kredi geri ödemelerinde güçlük yaşayan işletmelere finansal yeniden yapılandırma danışmanlığı sunar. Borç analizi, planlama ve müzakere desteği.',
  },
  {
    path: '/hakkimizda/',
    label: 'Hakkımızda',
    title: 'Hakkımızda | SAD',
    description: 'Sıtkı Arslan tarafından kurulan SAD; bankacılık deneyimini finansal danışmanlık ve finansal yeniden yapılandırma süreçlerine taşır. Kurucumuz ve çalışma yaklaşımımız.',
  },
  {
    path: '/fyy-nedir/',
    label: 'FYY Nedir?',
    title: 'FYY Nedir? | SAD',
    description: 'Finansal Yeniden Yapılandırma (FYY) nedir? Kapsamı, uygunluk değerlendirmesi, süreç ve başvuruya hazırlık hakkında SAD ile bilgi edinin.',
  },
  {
    path: '/iletisim/',
    label: 'İletişim',
    title: 'İletişim | SAD ',
    description: 'SAD ile iletişime geçin. Telefon: 0312 400 05 62. Konutkent Mahallesi, 3028. Cadde, Kule Evo No: 109, Çankaya / Ankara.',
  },
  ...legalDocuments.map(document => ({
    path: document.path, label: document.label, title: `${document.label} | SAD`,
    description: document.description, indexable: false,
  })),
];

type MetaTag = { attribute: 'name' | 'property'; name: string; content: string };

export function getPageHead(pathname: string) {
  const path = `${pathname.replace(/\/+$/, '')}/`;
  const page = pages.find(item => item.path === path);
  const title = page?.title ?? 'Sayfa bulunamadı — SAD';
  const description = page?.description ?? 'Aradığınız sayfa bulunamadı. SAD ana sayfasına dönün veya bizimle iletişime geçin.';
  const meta: MetaTag[] = [
    { attribute: 'name', name: 'description', content: description },
    { attribute: 'name', name: 'robots', content: page && page.indexable !== false ? 'index, follow, max-image-preview:large' : 'noindex, follow' },
    { attribute: 'property', name: 'og:type', content: 'website' },
    { attribute: 'property', name: 'og:site_name', content: 'SAD — Sıtkı Arslan Danışmanlık' },
    { attribute: 'property', name: 'og:locale', content: 'tr_TR' },
    { attribute: 'property', name: 'og:url', content: `${siteOrigin}${path}` },
    { attribute: 'property', name: 'og:title', content: title },
    { attribute: 'property', name: 'og:description', content: description },
    { attribute: 'property', name: 'og:image', content: socialImage },
    { attribute: 'property', name: 'og:image:secure_url', content: socialImage },
    { attribute: 'property', name: 'og:image:type', content: 'image/png' },
    { attribute: 'property', name: 'og:image:width', content: '1200' },
    { attribute: 'property', name: 'og:image:height', content: '630' },
    { attribute: 'property', name: 'og:image:alt', content: 'SAD — Finansal yeniden yapılandırma. Borç analizi, yapılandırma planı ve müzakere desteği.' },
    { attribute: 'name', name: 'twitter:card', content: 'summary_large_image' },
    { attribute: 'name', name: 'twitter:title', content: title },
    { attribute: 'name', name: 'twitter:description', content: description },
    { attribute: 'name', name: 'twitter:image', content: socialImage },
    { attribute: 'name', name: 'twitter:image:alt', content: 'SAD — Finansal yeniden yapılandırma' },
  ];
  return { title, canonical: page ? `${siteOrigin}${page.path}` : null, meta, structuredData: page ? getStructuredData(siteOrigin, page) : null };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
}

export function serializeStructuredData(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export function renderPageHead(pathname: string) {
  const head = getPageHead(pathname);
  return [
    `<title>${escapeHtml(head.title)}</title>`,
    ...head.meta.map(tag => `<meta ${tag.attribute}="${tag.name}" content="${escapeHtml(tag.content)}"/>`),
    ...(head.canonical ? [`<link rel="canonical" href="${escapeHtml(head.canonical)}"/>`] : []),
    ...(head.structuredData ? [`<script id="sad-structured-data" type="application/ld+json">${serializeStructuredData(head.structuredData)}</script>`] : []),
  ].join('\n    ');
}
