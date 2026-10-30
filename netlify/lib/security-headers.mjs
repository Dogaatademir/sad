/** Shared by static deployment output and serverless JSON responses. */
export function securityHeaders(scriptHashes = []) {
  return {
    'Content-Security-Policy': [
      "default-src 'none'",
      ["script-src 'self'", ...scriptHashes.map(hash => `'${hash}'`)].join(' '),
      "style-src 'self'", "img-src 'self'", "font-src 'self'", "connect-src 'self'",
      "base-uri 'none'", "form-action 'self'", "frame-ancestors 'none'", "object-src 'none'",
    ].join('; '),
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
    'Strict-Transport-Security': 'max-age=31536000',
  };
}
