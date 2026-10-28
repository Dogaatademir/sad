export const COOKIE_NOTICE_KEY = 'sad:cookie-notice:v2';
export const LEGACY_COOKIE_NOTICE_KEY = 'sad:cookie-notice:v1';

export function createNoticePreference(choice: 'accepted' | 'rejected') {
  return { version: 2, remembered: true, choice };
}

export function hasValidNoticePreference(raw: string | null) {
  if (!raw) return false;
  try {
    const preference = JSON.parse(raw);
    return preference !== null && typeof preference === 'object'
      && preference.version === 2 && preference.remembered === true;
  } catch {
    return false;
  }
}
