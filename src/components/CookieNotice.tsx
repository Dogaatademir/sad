import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { COOKIE_NOTICE_KEY, LEGACY_COOKIE_NOTICE_KEY, createNoticePreference, hasValidNoticePreference } from '../data/cookieNotice';

export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      window.localStorage.removeItem(LEGACY_COOKIE_NOTICE_KEY);
    } catch {
      // Persistent storage is used only to remove the previous notice record.
    }
    try {
      const raw = window.sessionStorage.getItem(COOKIE_NOTICE_KEY);
      const remembered = hasValidNoticePreference(raw);
      if (raw && !remembered) window.sessionStorage.removeItem(COOKIE_NOTICE_KEY);
      setVisible(!remembered);
    } catch {
      // Storage may be blocked. The notice still remains usable for this visit.
      setVisible(true);
    }
  }, []);

  function close() {
    try {
      window.sessionStorage.setItem(COOKIE_NOTICE_KEY, JSON.stringify(createNoticePreference()));
    } catch {
      // Closing never depends on access to browser storage.
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
        <p id="cookie-notice-copy">Reklam ve analitik çerezleri kullanmıyoruz. Her iki seçenekte de bildirimin kapatıldığı bilgisi yalnızca bu sekmenin oturumu boyunca tarayıcınızda hatırlanır; izleme izni verilmez. <a href="/cerez-politikasi/">Çerez Politikası</a></p>
      </div>
      <div className="cookie-notice-actions">
        <button type="button" className="cookie-notice-dismiss" onClick={close}>Reddet</button>
        <button type="button" className="cookie-notice-remember" onClick={close}>Kabul et</button>
      </div>
    </section>, document.body) : null;
}
