import { DEFAULT_STUDIO } from '../data/studio.js';

/**
 * Converts a free-form phone string into a wa.me compatible number.
 * 10 digits -> prefixed with 91; >10 digits -> used as-is; otherwise default studio number.
 */
export function toWhatsAppNumber(rawPhone = '') {
  const digits = rawPhone.replace(/[^0-9]/g, '');
  if (digits.length === 10) return `91${digits}`;
  if (digits.length > 10) return digits;
  return DEFAULT_STUDIO.waNumber;
}

export function buildWhatsAppUrl(number, text) {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function openWhatsApp(number, text) {
  window.open(buildWhatsAppUrl(number, text), '_blank', 'noopener,noreferrer');
}

