const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

export function renderContactEmail(fields) {
  const row = (label, value, last = false) => `<tr><td style="padding:18px 0;${last ? '' : 'border-bottom:1px solid #dedfd9;'}">
    <p style="margin:0 0 7px;font-size:11px;line-height:16px;letter-spacing:1.3px;color:#60645f;font-weight:600;">${label}</p>
    <p style="margin:0;font-size:16px;line-height:25px;color:#1c1d1b;overflow-wrap:anywhere;word-break:break-word;">${escapeHtml(value || 'Belirtilmedi')}</p>
  </td></tr>`;
  const text = [
    'SAD web sitesinden yeni iletişim talebi', '',
    `Ad Soyad: ${fields.name}`, `Şirket: ${fields.company || 'Belirtilmedi'}`,
    `E-posta: ${fields.email}`, `Telefon: ${fields.phone || 'Belirtilmedi'}`,
    '', 'Mesaj:', fields.message,
  ].join('\n');
  const html = `<!doctype html>
<html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SAD | Yeni iletişim talebi</title></head>
<body style="margin:0;padding:0;background-color:#f0f1ed;color:#1c1d1b;font-family:Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;">
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">SAD web sitesi üzerinden yeni bir iletişim talebi aldınız.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f1ed;"><tr><td align="center" style="padding:28px 12px;">
    <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;border-collapse:collapse;">
      <tr><td bgcolor="#1c1d1b" style="padding:32px;background-color:#1c1d1b;border-top:4px solid #89abc0;">
        <img src="cid:sad-brand-logo" width="264" height="75" alt="SAD — Finansal Yönetim Danışmanlığı" style="display:block;width:264px;max-width:100%;height:auto;border:0;color:#89abc0;font-size:16px;">
      </td></tr>
      <tr><td bgcolor="#fcfcfb" style="padding:34px 32px 0;background-color:#fcfcfb;">
        <p style="margin:0 0 16px;font-size:10px;line-height:16px;letter-spacing:2px;color:#526e7e;font-weight:600;">SAD / İLETİŞİM FORMU</p>
        <h1 style="margin:0 0 12px;font-size:32px;line-height:39px;letter-spacing:-1px;font-weight:400;color:#1c1d1b;">Yeni bir <span style="color:#526e7e;">görüşme.</span></h1>
        <p style="margin:0 0 26px;font-size:14px;line-height:23px;color:#60645f;">Web siteniz üzerinden bir iletişim talebi aldınız.<br>Gönderenin bilgileri ve mesajı aşağıda yer alıyor.</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-top:1px solid #dedfd9;border-collapse:collapse;">
          ${row('AD SOYAD', fields.name)}
          ${row('ŞİRKET', fields.company)}
          ${row('E-POSTA', fields.email)}
          ${row('TELEFON', fields.phone, true)}
        </table>
      </td></tr>
      <tr><td bgcolor="#fcfcfb" style="padding:8px 32px 32px;background-color:#fcfcfb;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;table-layout:fixed;border-collapse:collapse;"><tr>
          <td bgcolor="#edf2f4" style="padding:24px;border-left:3px solid #89abc0;background-color:#edf2f4;">
            <p style="margin:0 0 12px;font-size:11px;line-height:16px;letter-spacing:1.3px;color:#526e7e;font-weight:600;">MESAJ</p>
            <p style="margin:0;font-size:15px;line-height:26px;color:#1c1d1b;overflow-wrap:anywhere;word-break:break-word;">${escapeHtml(fields.message).replace(/\r\n|\r|\n/g, '<br>')}</p>
          </td>
        </tr></table>
        <p style="margin:24px 0 0;font-size:12px;line-height:21px;color:#60645f;">Bu talebe dönüş yapmak için e-posta uygulamanızdaki <strong style="color:#1c1d1b;">Yanıtla</strong> seçeneğini kullanabilirsiniz. Yanıtınız doğrudan gönderene ulaşır.</p>
      </td></tr>
      <tr><td bgcolor="#1c1d1b" style="padding:24px 32px;background-color:#1c1d1b;">
        <p style="margin:0 0 8px;font-size:11px;line-height:18px;letter-spacing:1.2px;color:#89abc0;">SITKI ARSLAN DANIŞMANLIK</p>
        <p style="margin:0;font-size:11px;line-height:19px;color:#c5c8bf;">Bu e-posta SAD iletişim formu tarafından otomatik oluşturulmuştur. İletişim bilgilerini yalnızca talebin değerlendirilmesi amacıyla kullanın.</p>
      </td></tr>
    </table>
    <!--[if mso]></td></tr></table><![endif]-->
  </td></tr></table>
</body></html>`;
  return { html, text, attachments: [{ ...contactEmailLogo }] };
}
import { contactEmailLogo } from './email-logo.mjs';

