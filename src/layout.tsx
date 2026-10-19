import { useEffect, useRef, useState, type ReactNode } from 'react';
import { contactDetails, contactMapUrl } from './contactDetails';

const navigationLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimizda/', label: 'Hakkımızda' },
  { href: '/fyy-nedir/', label: 'FYY Nedir ?' },
  { href: '/iletisim/', label: 'İletişim' },
];


type LayoutProps = {
  children: ReactNode;
  currentPath: string;
};

export default function Layout({ children, currentPath }: LayoutProps) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 0);
  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 0);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('pageshow', updateScrollState);
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('pageshow', updateScrollState);
    };
  }, []);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menu) return;
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenu(false);
        menuToggleRef.current?.focus();
      }
    };
    const dismissOutside = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest('.header')) setMenu(false);
    };
    const desktopQuery = window.matchMedia('(min-width: 601px)');
    const dismissOnDesktop = () => { if (desktopQuery.matches) setMenu(false); };
    document.addEventListener('keydown', dismissOnEscape);
    document.addEventListener('pointerdown', dismissOutside);
    desktopQuery.addEventListener('change', dismissOnDesktop);
    return () => {
      document.removeEventListener('keydown', dismissOnEscape);
      document.removeEventListener('pointerdown', dismissOutside);
      desktopQuery.removeEventListener('change', dismissOnDesktop);
    };
  }, [menu]);
  return <>
    <a className="skip-link" href="#main">İçeriğe geç</a>
    <header className={scrolled ? 'header is-scrolled' : 'header'}>
      <a href="/" className="wordmark sad-wordmark" aria-label="SAD ana sayfa">SAD<span>FİNANSAL<br/>YENİDEN YAPILANDIRMA</span></a>
      <nav id="mobile-navigation" aria-label="Ana gezinme" className={menu ? 'navigation open' : 'navigation'}>
        {navigationLinks.map(({ href, label }) => <a
          key={href}
          href={href}
          aria-current={currentPath === (href.replace(/\/+$/, '') || '/') ? 'page' : undefined}
        >{label}</a>)}
      </nav>
      <button ref={menuToggleRef} className="menu-toggle" aria-expanded={menu} aria-controls="mobile-navigation" aria-label={menu ? 'Menüyü kapat' : 'Menüyü aç'} onClick={() => setMenu(!menu)}><svg className="menu-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="M3 6h18M3 12h18M3 18h18" /></svg></button>
    </header>
    {children}
    <footer className="site-footer premium-footer">
      <div className="footer-body">
        <div className="footer-identity">
          <a className="footer-wordmark" href="/" aria-label="SAD ana sayfa">SAD</a>
          <div className="footer-identity-copy">
            <p>Sıtkı Arslan Danışmanlık</p>
            <span>Finansal yeniden yapılandırma</span>
          </div>
        </div>
        <nav className="footer-links" aria-label="Alt menü">
          <h2 className="footer-eyebrow">SAYFALAR</h2>
          {navigationLinks.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="footer-reach">
          <h2 className="footer-eyebrow">İLETİŞİM</h2>
          <a className="footer-telephone" href={contactDetails.phoneHref}>{contactDetails.phone}</a>
          <div className="footer-office">
            <h2 className="footer-eyebrow">ADRES</h2>
            <address>{contactDetails.street}<br/>{contactDetails.building}<br/>{contactDetails.district}</address>
            <a className="footer-detail-link" href={contactMapUrl} target="_blank" rel="noreferrer">Haritada görüntüle</a>
          </div>
        </div>
      </div>
      <div className="footer-utility">
        <p>© {new Date().getFullYear()} SAD. Tüm hakları saklıdır.</p>
        <p className="footer-credit">Designed and developed by <a href="https://opsiron.com" target="_blank" rel="noreferrer">Opsiron</a></p>
      </div>
    </footer>
  </>;
}
