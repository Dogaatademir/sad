import { randomUUID } from 'node:crypto';
import { securityHeaders } from './security-headers.mjs';

const failureTypes = new Set(['configuration_missing', 'provider_http_error', 'provider_invalid_response', 'timeout', 'network_error']);

async function notifyFailure(record) {
  const destination = process.env.SECURITY_ALERT_WEBHOOK_URL;
  if (!destination) return; // No destination means no outbound alert request.
  try {
    const url = new URL(destination);
    if (url.protocol !== 'https:' || url.username || url.password) throw new Error('invalid-alert-destination');
    // Slack-compatible incoming webhook: no visitor data, message content, keys or URLs.
    const text = `SAD iletişim formu hatası | ${record.errorType} | HTTP ${record.status} | Referans: ${record.requestId} | UTC: ${record.timestamp}`;
    const result = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }), redirect: 'error', signal: AbortSignal.timeout(2_000),
    });
    if (!result.ok) throw new Error('alert-rejected');
  } catch {
    // Never print webhook URLs or exception messages; these may contain credentials.
    console.error(JSON.stringify({ event: 'contact.alert_delivery_failed', severity: 'error',
      timestamp: new Date().toISOString(), requestId: record.requestId }));
  }
}

export function createContactResponder() {
  const requestId = randomUUID();
  const started = performance.now();
  return async (status, message, details = {}) => {
    const failed = status >= 500;
    const record = {
      timestamp: new Date().toISOString(), service: 'sad-contact',
      event: failed ? 'contact.failed' : 'contact.completed',
      severity: failed ? 'error' : 'info', requestId, status,
      durationMs: Math.round(performance.now() - started),
      ...(failed ? { alert: true, errorType: failureTypes.has(details.errorType) ? details.errorType : 'network_error' } : {}),
      ...(Number.isInteger(details.providerStatus) ? { providerStatus: details.providerStatus } : {}),
    };
    if (failed) console.error(JSON.stringify(record));
    else console.info(JSON.stringify(record));
    if (failed) await notifyFailure(record);
    return Response.json({ message, requestId }, { status, headers: {
      ...securityHeaders(), 'Cache-Control': 'no-store', 'X-Request-ID': requestId,
    } });
  };
}
