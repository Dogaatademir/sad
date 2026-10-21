import { useEffect } from 'react';
import { getPageHead, serializeStructuredData } from '../seo/siteMetadata';

export function usePageMetadata(pathname: string) {
  useEffect(() => {
    const head = getPageHead(pathname);
    document.title = head.title;
    for (const tag of head.meta) {
      let element = document.querySelector<HTMLMetaElement>(`meta[${tag.attribute}="${tag.name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(tag.attribute, tag.name);
        document.head.appendChild(element);
      }
      element.content = tag.content;
    }
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (head.canonical) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = head.canonical;
    } else {
      canonical?.remove();
    }
    let structuredData = document.getElementById('sad-structured-data');
    if (head.structuredData) {
      if (!structuredData) {
        structuredData = document.createElement('script');
        structuredData.id = 'sad-structured-data';
        structuredData.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredData);
      }
      structuredData.textContent = serializeStructuredData(head.structuredData);
    } else {
      structuredData?.remove();
    }
  }, [pathname]);
}
