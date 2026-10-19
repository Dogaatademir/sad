import { ArrowIcon } from './ArrowIcon';

export function ContactForm() {
  return <form className="contact-message-form" onSubmit={event => event.preventDefault()} aria-labelledby="message-form-heading" aria-describedby="message-form-note">
    <div className="contact-message-form-heading"><h3 id="message-form-heading">Bize yazın.</h3><span className="eyebrow">İLETİŞİM FORMU</span></div>
    <div className="contact-message-fields">
      <label htmlFor="contact-name">Adınız ve soyadınız<input id="contact-name" name="name" autoComplete="name" placeholder="Ad Soyad" required maxLength={120}/></label>
      <label htmlFor="contact-company">Şirket adı <span className="field-optional">(isteğe bağlı)</span><input id="contact-company" name="company" autoComplete="organization" placeholder="Şirketiniz" maxLength={180}/></label>
    </div>
    <div className="contact-message-fields">
      <label htmlFor="contact-email">E-posta adresiniz<input id="contact-email" name="email" type="email" autoComplete="email" placeholder="siz@sirketiniz.com" required maxLength={254}/></label>
      <label htmlFor="contact-phone">Telefon <span className="field-optional">(isteğe bağlı)</span><input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="05xx xxx xx xx" maxLength={30}/></label>
    </div>
    <label htmlFor="contact-message">Mesajınız<textarea id="contact-message" name="message" placeholder="İhtiyacınızı ve görüşmek istediğiniz başlıkları paylaşın." rows={5} required maxLength={5000}/></label>
    <button className="solid-button contact-message-submit" type="submit" disabled aria-describedby="message-form-note">Mesaj gönder <ArrowIcon /></button>
    <p id="message-form-note" className="contact-message-form-note">Form gönderimi henüz aktif değil.</p>
  </form>;
}
