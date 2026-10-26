import { usePageMotion } from '../hooks/usePageMotion';
import { ArrowIcon } from '../components/ArrowIcon';
import { ContactForm } from '../components/ContactForm';
import { contactDetails, contactMapUrl } from '../data/contactDetails';

export function ContactPage() {
  usePageMotion('.contact-phone-panel, .contact-address-panel, .contact-message-form');
  return <main id="main" tabIndex={-1} className="contact-page contact-page-direct">
    <section className="contact-page-hero" aria-labelledby="contact-heading">
      <div className="hero-top"><span className="eyebrow">SAD / İLETİŞİM</span></div>
      <h1 id="contact-heading">Bir görüşmeyle<br/><span>başlayalım.</span></h1>
    </section>
    <section className="contact-layout" aria-label="İletişim bilgileri ve formu">
      <div className="contact-details-column">
      <div className="contact-phone-panel">
        <span className="eyebrow">01 / İLETİŞİM</span>
        <div className="contact-phone-content"><h2>Bizi arayın.</h2><a className="contact-phone-number" href={contactDetails.phoneHref} aria-label={`SAD’ı arayın: ${contactDetails.phone}`}>{contactDetails.phone}<ArrowIcon /></a><h2 className="contact-email-heading">Bize yazın.</h2><a className="contact-email" href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></div>
        <p>İlk görüşmede ihtiyaçlarınızı analiz edelim,<br className="contact-desktop-break"/>{' '}bir sonraki adımı birlikte netleştirelim.</p>
      </div>
      <div className="contact-address-panel">
        <span className="eyebrow">02 / ADRES</span>
        <h2 className="contact-location-heading">Ankara,<br/><span>Çankaya.</span></h2>
        <address>{contactDetails.street}<br/>{contactDetails.building}<br/>{contactDetails.district}</address>
        <a className="text-link" href={contactMapUrl} target="_blank" rel="noreferrer">Haritada görüntüle <ArrowIcon /></a>
        <p className="contact-service-note">Yerinde ziyaretler ve online toplantılar ile tüm illerimize hizmet sunulmaktadır.</p>
      </div>
      </div>
      <ContactForm />
    </section>
  </main>;
}
