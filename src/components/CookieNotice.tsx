import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { COOKIE_NOTICE_KEY, LEGACY_COOKIE_NOTICE_KEY, createNoticePreference, hasValidNoticePreference } from '../data/cookieNotice';

export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(COOKIE_NOTICE_KEY);
      const remembered = hasValidNoticePreference(raw);
      if (remembered) {
        setVisible(false);
      } else {
        if (raw) window.localStorage.removeItem(COOKIE_NOTICE_KEY);
        // Preserve a dismissal made before preferences became persistent.
        const previous = window.sessionStorage.getItem(COOKIE_NOTICE_KEY);
        const migrated = hasValidNoticePreference(previous);
        if (migrated && previous) window.localStorage.setItem(COOKIE_NOTICE_KEY, previous);
        setVisible(!migrated);
      }
      window.localStorage.removeItem(LEGACY_COOKIE_NOTICE_KEY);
    } catch {
      try {
        setVisible(!hasValidNoticePreference(window.sessionStorage.getItem(COOKIE_NOTICE_KEY)));
      } catch {
        setVisible(true);
      }
    }
  }, []);

  function close(choice: 'accepted' | 'rejected') {
    const preference = JSON.stringify(createNoticePreference(choice));
    try {
      window.localStorage.setItem(COOKIE_NOTICE_KEY, preference);
    } catch {
      try {
        window.sessionStorage.setItem(COOKIE_NOTICE_KEY, preference);
      } catch {
        // Closing never depends on access to browser storage.
      }
    }
    setVisible(false);
    if (document.activeElement instanceof HTMLElement && document.activeElement.closest('.cookie-notice')) {
      document.getElementById('main')?.focus({ preventScroll: true });
    }
  }

  return visible ? createPortal(<section id="cookie-notice" className="cookie-notice" role="region" aria-labelledby="cookie-notice-heading" aria-describedby="cookie-notice-copy">
      <div className="cookie-notice-copy">
        <span className="eyebrow">SAD / GİZLİLİK</span>
        <h2 id="cookie-notice-heading">Çerezler hakkında.</h2>
        <p id="cookie-notice-copy">Reklam ve analitik çerezleri kullanmıyoruz. Bildirimin tekrar gösterilmemesi için tercihiniz bu tarayıcıda saklanır; izleme izni verilmez. <a href="/cerez-politikasi/">Çerez Politikası</a></p>
      </div>
      <div className="cookie-notice-actions">
        <button type="button" className="cookie-notice-dismiss" onClick={() => close('rejected')}>Reddet</button>
        <button type="button" className="cookie-notice-remember" onClick={() => close('accepted')}>Kabul et</button>
      </div>
    </section>, document.body) : null;
}
