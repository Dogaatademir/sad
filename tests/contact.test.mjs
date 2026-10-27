import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import contact, { config } from '../netlify/functions/contact.mjs';
import { renderContactEmail } from '../netlify/lib/contact-email.mjs';

const originalFetch = globalThis.fetch;
const previousKey = process.env.RESEND_API_KEY;
const previousFrom = process.env.CONTACT_FROM_EMAIL;
afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const [key, value] of [['RESEND_API_KEY', previousKey], ['CONTACT_FROM_EMAIL', previousFrom]]) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
});
const fields = { name: 'Test Kişisi', company: '', email: 'test@example.com', phone: '',
  message: 'Bilgi almak istiyorum.', website: '', requestId: '11111111-1111-4111-8111-111111111111' };
function request(body = fields, origin = 'https://sitkiarslan.com', headers = {}) {
  return new Request('https://sitkiarslan.com/api/contact', { method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });
}
function configure() {
  process.env.RESEND_API_KEY = 'test-key-not-a-real-secret';
  process.env.CONTACT_FROM_EMAIL = 'SAD <form@example.com>';
}

test('rejects unsupported methods, cross-origin requests and invalid content types', async () => {
  assert.equal((await contact(new Request('https://sitkiarslan.com/api/contact'))).status, 405);
  assert.equal((await contact(request(fields, 'https://attacker.example'))).status, 403);
  assert.equal((await contact(request(fields, 'null'))).status, 403);
  assert.equal((await contact(request(fields, 'https://sitkiarslan.com', { 'sec-fetch-site': 'cross-site' }))).status, 403);
  assert.equal((await contact(request(fields, 'https://sitkiarslan.com', { 'Content-Type': 'text/plain' }))).status, 415);
});
test('validates fields and bounds actual request size before sending', async () => {
  globalThis.fetch = () => { throw new Error('must not call provider'); };
  for (const patch of [{ name: ' ' }, { email: 'invalid' }, { email: 'a@b.com\r\nBcc:x@y.com' },
    { company: ['wrong type'] }, { message: '' }, { message: 'x'.repeat(5001) }, { requestId: '' }]) {
    assert.equal((await contact(request({ ...fields, ...patch }))).status, 400);
  }
  assert.equal((await contact(request({ ...fields, message: 'x'.repeat(24_001) }))).status, 413);
  const invalidJson = new Request('https://sitkiarslan.com/api/contact', { method: 'POST',
    headers: { Origin: 'https://sitkiarslan.com', 'Content-Type': 'application/json' }, body: '{' });
  assert.equal((await contact(invalidJson)).status, 400);
});
test('honeypot accepts silently without contacting Resend', async () => {
  globalThis.fetch = () => { throw new Error('must not call provider'); };
  assert.equal((await contact(request({ ...fields, website: 'spam.example' }))).status, 200);
});
test('missing server configuration fails closed', async () => {
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_FROM_EMAIL;
  assert.equal((await contact(request())).status, 503);
});
test('both domains send branded HTML, plain text and visitor reply-to to the fixed recipient', async () => {
  configure();
  const keys = [];
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails');
    assert.equal(options.headers.Authorization, 'Bearer test-key-not-a-real-secret');
    keys.push(options.headers['Idempotency-Key']);
    const body = JSON.parse(options.body);
    assert.deepEqual(body.to, ['bilgi@sitkiarslan.com']);
    assert.equal(body.from, 'SAD <form@example.com>');
    assert.equal(body.reply_to, fields.email);
    assert.ok(body.html.includes('SAD / İLETİŞİM FORMU'));
    assert.ok(body.html.includes('src="cid:sad-brand-logo"'));
    assert.equal(body.attachments.length, 1);
    assert.equal(body.attachments[0].content_id, 'sad-brand-logo');
    assert.equal(body.attachments[0].content_type, 'image/png');
    const logo = Buffer.from(body.attachments[0].content, 'base64');
    assert.equal(logo.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    assert.equal(logo.readUInt32BE(16), 528);
    assert.equal(logo.readUInt32BE(20), 150);
    assert.ok(body.html.includes('&lt;script&gt;example&lt;/script&gt;'));
    assert.ok(!body.html.includes('<script>'));
    assert.ok(body.text.includes('<script>example</script>'));
    return Response.json({ id: 'mock-email-id' });
  };
  const body = { ...fields, message: '<script>example</script>', to: 'attacker@example.com' };
  for (const origin of ['https://sitkiarslan.com', 'https://fyydanismanlik.com']) {
    const response = await contact(request(body, origin));
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
  }
  assert.equal(keys[0], keys[1], 'same attempt is deduplicated across domains');
});
test('email template escapes every visitor field, preserves line breaks and handles missing optional fields', () => {
  const attack = '<img src=x onerror="alert(1)">&\'';
  const rendered = renderContactEmail({ name: attack, company: attack, email: attack, phone: attack,
    message: `${attack}\nİkinci satır\r\nÜçüncü satır` });
  assert.ok(!rendered.html.includes('<img src=x'));
  assert.equal(rendered.html.split('&lt;img').length - 1, 5);
  assert.ok(rendered.html.includes('&quot;alert(1)&quot;'));
  assert.ok(rendered.html.includes('&amp;&#39;'));
  assert.ok(rendered.html.includes('<br>İkinci satır<br>Üçüncü satır'));
  assert.ok(rendered.text.includes(attack));
  assert.ok(renderContactEmail(fields).html.includes('Belirtilmedi'));
  assert.equal(rendered.html, renderContactEmail({ name: attack, company: attack, email: attack, phone: attack,
    message: `${attack}\nİkinci satır\r\nÜçüncü satır` }).html, 'retries must keep identical content');
});
test('provider errors and network failure never report success or leak provider errors', async () => {
  configure();
  globalThis.fetch = async () => Response.json({ secret: 'private-provider-detail' }, { status: 403 });
  const response = await contact(request());
  assert.equal(response.status, 502);
  assert.ok(!(await response.text()).includes('private-provider-detail'));
  globalThis.fetch = async () => { throw new Error('network failure'); };
  assert.equal((await contact(request())).status, 502);
  globalThis.fetch = async () => Response.json({});
  assert.equal((await contact(request())).status, 502);
});
test('deployment config includes platform rate limiting', () => {
  assert.equal(config.path, '/api/contact');
  assert.deepEqual(config.rateLimit, { windowLimit: 5, windowSize: 120, aggregateBy: ['ip', 'domain'] });
});
