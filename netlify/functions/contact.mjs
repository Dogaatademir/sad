import { createHash } from 'node:crypto';
import { renderContactEmail } from '../lib/contact-email.mjs';

const recipient = 'bilgi@sitkiarslan.com';
const allowedOrigins = new Set([
  'https://sitkiarslan.com', 'https://www.sitkiarslan.com',
  'https://fyydanismanlik.com', 'https://www.fyydanismanlik.com',
  'https://sitkiarslan.netlify.app',
]);
const maxBytes = 24_000;
const emailPattern = /^[^\s@<>\x00-\x1f]+@[^\s@<>\x00-\x1f]+\.[^\s@<>\x00-\x1f]+$/;
const reply = (status, message) => Response.json({ message }, {
  status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
});

async function readBody(request) {
  if (Number(request.headers.get('content-length')) > maxBytes) throw new Error('too-large');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('invalid');
  const chunks = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxBytes) {
      await reader.cancel();
      throw new Error('too-large');
    }
    chunks.push(value);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export default async function contact(request) {
  if (request.method !== 'POST') return reply(405, 'Bu işlem desteklenmiyor.');
  const origin = request.headers.get('origin');
  const local = process.env.NETLIFY_DEV === 'true' && origin === 'http://localhost:8888';
  if (!origin || (!allowedOrigins.has(origin) && !local)
    || request.headers.get('sec-fetch-site') === 'cross-site') {
    return reply(403, 'Formu web sitemiz üzerinden gönderin.');
  }
  if (request.headers.get('content-type')?.split(';')[0].trim() !== 'application/json') {
    return reply(415, 'Geçersiz istek biçimi.');
  }
  let body;
  try { body = await readBody(request); }
  catch (error) {
    return reply(error.message === 'too-large' ? 413 : 400, 'Form bilgileri okunamadı. Mesajınızı kontrol edin.');
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return reply(400, 'Geçersiz form.');
  if (typeof body.website !== 'string') return reply(400, 'Geçersiz form.');
  if (body.website.trim()) return reply(200, 'Mesajınız alındı.');
  const limits = { name: 120, company: 180, email: 254, phone: 30, message: 5000 };
  const fields = {};
  for (const [key, limit] of Object.entries(limits)) {
    if (typeof body[key] !== 'string' || body[key].length > limit) return reply(400, 'Form alanlarını kontrol edin.');
    fields[key] = body[key].trim();
    if (key !== 'message' && /[\r\n\x00-\x1f\x7f]/.test(fields[key])) return reply(400, 'Form alanlarını kontrol edin.');
  }
  if (!fields.name || !fields.message || !emailPattern.test(fields.email)
    || /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(fields.message)
    || typeof body.requestId !== 'string'
    || !/^[a-f0-9-]{36}$/i.test(body.requestId)) {
    return reply(400, 'Adınızı, geçerli e-posta adresinizi ve mesajınızı girin.');
  }
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from || /[\r\n]/.test(from)) {
    return reply(503, 'Form şu anda kullanılamıyor. Lütfen telefon veya e-posta ile ulaşın.');
  }
  // User content is escaped in HTML; text remains available as a fallback.
  const { html, text, attachments } = renderContactEmail(fields);
  const fingerprint = createHash('sha256').update(JSON.stringify(fields)).digest('hex');
  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json',
        'Idempotency-Key': `sad-contact/${body.requestId}/${fingerprint}`,
      },
      body: JSON.stringify({ from, to: [recipient], reply_to: fields.email,
        subject: 'SAD | Yeni iletişim talebi', html, text, attachments }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!result.ok) {
      // Do not log message content, visitor details, API keys or provider response bodies.
      console.error('contact: Resend request failed', result.status);
      return reply(502, 'Mesaj gönderilemedi. Lütfen biraz sonra yeniden deneyin veya bizi arayın.');
    }
    const data = await result.json();
    if (typeof data.id !== 'string' || !data.id) throw new Error('invalid-provider-response');
    return reply(200, 'Mesajınız iletildi. En kısa sürede sizinle iletişime geçeceğiz.');
  } catch {
    return reply(502, 'Gönderim doğrulanamadı. Lütfen yeniden deneyin veya bizi arayın.');
  }
}

export const config = {
  path: '/api/contact',
  rateLimit: { windowLimit: 5, windowSize: 120, aggregateBy: ['ip', 'domain'] },
};
