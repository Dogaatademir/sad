import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { createContactResponder } from '../netlify/lib/contact-diagnostics.mjs';

const originalFetch = globalThis.fetch;
const originalInfo = console.info;
const originalError = console.error;
const originalDestination = process.env.SECURITY_ALERT_WEBHOOK_URL;
let records;
beforeEach(() => {
  records = [];
  delete process.env.SECURITY_ALERT_WEBHOOK_URL;
  console.info = console.error = value => records.push(JSON.parse(value));
  globalThis.fetch = async () => { throw new Error('NETWORK FORBIDDEN IN TESTS'); };
});
afterEach(() => {
  globalThis.fetch = originalFetch;
  console.info = originalInfo;
  console.error = originalError;
  if (originalDestination === undefined) delete process.env.SECURITY_ALERT_WEBHOOK_URL;
  else process.env.SECURITY_ALERT_WEBHOOK_URL = originalDestination;
});

test('response and structured log share a server-generated request ID', async () => {
  const response = await createContactResponder()(200, 'ok');
  const data = await response.json();
  assert.match(data.requestId, /^[a-f0-9-]{36}$/);
  assert.equal(response.headers.get('X-Request-ID'), data.requestId);
  assert.equal(records[0].requestId, data.requestId);
  assert.equal(records[0].event, 'contact.completed');
  assert.equal(records[0].alert, undefined);
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
  assert.ok(response.headers.get('Content-Security-Policy').includes("frame-ancestors 'none'"));
});
test('failure logging uses an allowlist and never includes arbitrary sensitive fields', async () => {
  await createContactResponder()(502, 'public message', { errorType: 'timeout',
    email: 'private@example.com', message: 'PRIVATE MESSAGE', apiKey: 'PRIVATE KEY',
    providerBody: 'PRIVATE BODY', providerStatus: 503 });
  assert.equal(records[0].errorType, 'timeout');
  assert.equal(records[0].alert, true);
  assert.equal(records[0].providerStatus, 503);
  assert.ok(!JSON.stringify(records).includes('PRIVATE'));
  assert.ok(!JSON.stringify(records).includes('private@example.com'));
});
test('alerts are disabled when destination is absent; responses remain usable', async () => {
  let calls = 0;
  globalThis.fetch = async () => { calls++; throw new Error('forbidden'); };
  const response = await createContactResponder()(503, 'unavailable', { errorType: 'configuration_missing' });
  assert.equal(response.status, 503);
  assert.equal(calls, 0);
});
test('configured webhook receives only bounded technical event text; no redirects are followed', async () => {
  process.env.SECURITY_ALERT_WEBHOOK_URL = 'https://alerts.example.test/private-token';
  let calls = 0;
  globalThis.fetch = async (url, options) => {
    calls++;
    assert.equal(String(url), process.env.SECURITY_ALERT_WEBHOOK_URL);
    assert.equal(options.redirect, 'error');
    assert.ok(options.signal);
    const data = JSON.parse(options.body);
    assert.deepEqual(Object.keys(data), ['text']);
    assert.ok(data.text.includes('provider_http_error'));
    assert.ok(!data.text.includes('private-token'));
    return new Response('', { status: 200 });
  };
  await createContactResponder()(502, 'failed', { errorType: 'provider_http_error', providerStatus: 429 });
  assert.equal(calls, 1);
});
test('invalid destinations do not cause network requests and webhook errors do not break the API', async () => {
  let calls = 0;
  globalThis.fetch = async () => { calls++; throw new Error('sensitive-url-token'); };
  for (const destination of ['http://insecure.example.test', 'https://user:password@example.test', 'invalid']) {
    process.env.SECURITY_ALERT_WEBHOOK_URL = destination;
    assert.equal((await createContactResponder()(502, 'failed')).status, 502);
  }
  assert.equal(calls, 0);
  process.env.SECURITY_ALERT_WEBHOOK_URL = 'https://alerts.example.test/private-token';
  assert.equal((await createContactResponder()(502, 'failed')).status, 502);
  assert.equal(calls, 1);
  assert.ok(records.some(record => record.event === 'contact.alert_delivery_failed'));
  assert.ok(!JSON.stringify(records).includes('sensitive-url-token'));
  assert.ok(!JSON.stringify(records).includes('private-token'));
});
