import { useEffect } from 'react';

/** Reveal editorial groups once; leave content visible when motion is reduced. */
export function usePageMotion(selector: string, revealClass = 'page-reveal', visibleClass = 'is-visible') {
  useEffect(() => {
    const root = document.getElementById('main');
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!root || preference.matches || !('IntersectionObserver' in window)) return;

    const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    elements.forEach(element => {
      element.classList.add(revealClass);
      observer.observe(element);
    });
    const showAll = () => {
      if (preference.matches) {
        observer.disconnect();
        elements.forEach(element => element.classList.add(visibleClass));
      }
    };
    preference.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', showAll);
      elements.forEach(element => element.classList.remove(revealClass, visibleClass));
    };
  }, [selector, revealClass, visibleClass]);
}
