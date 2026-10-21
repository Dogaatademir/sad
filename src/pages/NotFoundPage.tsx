import { ArrowIcon } from '../components/ArrowIcon';

export function NotFoundPage() {
  return <main id="main" tabIndex={-1} className="not-found-page">
    <section className="not-found-hero" aria-labelledby="not-found-heading">
      <span className="eyebrow">404 / SAYFA BULUNAMADI</span>
      <h1 id="not-found-heading">Bu sayfayı<br/><span>bulamadık.</span></h1>
      <p>Bağlantı değişmiş veya adres yanlış yazılmış olabilir. Ana sayfaya dönebilir ya da bizimle iletişime geçebilirsiniz.</p>
      <div className="not-found-actions">
        <a className="text-link" href="/">Ana sayfaya dön <ArrowIcon direction="left" /></a>
        <a className="text-link" href="/iletisim/">İletişime geçin <ArrowIcon /></a>
      </div>
    </section>
  </main>;
}
