import { useRef, useState, type FormEvent } from 'react';
import { ArrowIcon } from './ArrowIcon';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [notice, setNotice] = useState('');
  const sending = useRef(false);
  const attempt = useRef({ payload: '', id: '' });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = Object.fromEntries(['name', 'company', 'email', 'phone', 'message', 'website']
      .map(key => [key, String(data.get(key) ?? '')]));
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setStatus('error');
      setNotice('Adınızı, e-posta adresinizi ve mesajınızı girin.');
      return;
    }
    sending.current = true;
    setStatus('sending');
    setNotice('Mesajınız gönderiliyor…');
    try {
      const payload = JSON.stringify(fields);
      if (attempt.current.payload !== payload || !attempt.current.id) {
        attempt.current = { payload, id: crypto.randomUUID() };
      }
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, requestId: attempt.current.id }),
        signal: AbortSignal.timeout(20_000),
      });
      if (response.status === 429) throw new Error('Çok sayıda deneme yaptınız. Lütfen iki dakika sonra yeniden deneyin.');
      const result = await response.json();
      if (!response.ok) throw new Error(typeof result.message === 'string' ? result.message : 'Mesaj gönderilemedi. Lütfen yeniden deneyin.');
      setStatus('success');
      setNotice('Mesajınız iletildi. En kısa sürede sizinle iletişime geçeceğiz.');
      form.reset();
      attempt.current = { payload: '', id: '' };
    } catch (error) {
      setStatus('error');
      setNotice(error instanceof Error && !['TypeError', 'TimeoutError', 'SyntaxError'].includes(error.name)
        ? error.message : 'Gönderim doğrulanamadı. Lütfen yeniden deneyin veya telefon ile ulaşın.');
    } finally {
      sending.current = false;
    }
  }

  return <form className="contact-message-form" onSubmit={submit} aria-labelledby="message-form-heading" aria-describedby="message-form-note" aria-busy={status === 'sending'}>
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
    <div className="contact-form-trap" aria-hidden="true"><label htmlFor="contact-website">Web sitesi<input id="contact-website" name="website" autoComplete="off" tabIndex={-1}/></label></div>
    <p className="contact-privacy-note">Kişisel verileriniz hakkında <a href="/kvkk-aydinlatma-metni/">KVKK Aydınlatma Metni</a> ve <a href="/gizlilik-politikasi/">Gizlilik Politikası</a> üzerinden bilgi alabilirsiniz. İlk iletişimde kimlik belgesi, şifre veya hassas mali belge paylaşmayın.</p>
    <button className="solid-button contact-message-submit" type="submit" disabled={status === 'sending'} aria-describedby="message-form-note">{status === 'sending' ? 'Gönderiliyor…' : 'Mesaj gönder'} <ArrowIcon /></button>
    <p id="message-form-note" className="contact-message-form-note" role="status" aria-live="polite" aria-atomic="true" data-status={status}>{notice}</p>
  </form>;
}
