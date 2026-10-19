import { ArrowIcon } from './ArrowIcon';

export function ContactCallout() {
  return <section className="fyy-page-next contact-callout" aria-labelledby="next-heading">
    <div>
      <span className="eyebrow">SAD / BİRLİKTE DEĞERLENDİRELİM</span>
      <h2 id="next-heading">İlk adım,<br/><span>durumu anlamak.</span></h2>
    </div>
    <a className="text-link" href="/iletisim/">Bizimle iletişime geçin <ArrowIcon /></a>
  </section>;
}
