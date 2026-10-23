import { useState } from 'react';
import { useStudio } from '../../context/StudioContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { BOOKING_SERVICES } from '../../data/services.js';
import { DEFAULT_STUDIO } from '../../data/studio.js';
import { openWhatsApp } from '../../utils/whatsapp.js';

const INITIAL_FORM = { name: '', phone: '', service: BOOKING_SERVICES[0], date: '', notes: '' };
const inputClass =
  'w-full bg-obsidian border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:border-gold focus:outline-none';

export default function BookingForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const { studio } = useStudio();
  const showToast = useToast();
  const { t } = useLanguage();

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `Hello *Vilas Digital's (Narasalagi)*! 👋\n` +
      `I would like to inquire about booking a shoot.\n\n` +
      `👤 *Name:* ${form.name.trim()}\n` +
      `📞 *Phone:* ${form.phone.trim()}\n` +
      `📸 *Service:* ${form.service}\n` +
      `📅 *Event Date:* ${form.date || 'Flexible'}\n` +
      `📝 *Location/Details:* ${form.notes.trim() || 'None'}`;

    showToast(t('booking.form.opening'));
    setTimeout(() => openWhatsApp(studio.waNumber, message), 400);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-charcoal border border-white/10 rounded-3xl p-6 sm:p-9 shadow-2xl space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-2xl font-bold text-white">{t('booking.form.title')}</h3>
        <span className="text-xs text-gold bg-gold/10 border border-gold/30 px-3 py-1 rounded-full">
          {t('booking.form.badge')} {DEFAULT_STUDIO.phoneShort}
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="book-name" className="block text-xs text-gray-400 mb-1.5">{t('booking.form.name')}</label>
          <input id="book-name" type="text" required value={form.name} onChange={update('name')} placeholder={t('booking.form.namePh')} className={inputClass} />
        </div>
        <div>
          <label htmlFor="book-phone" className="block text-xs text-gray-400 mb-1.5">{t('booking.form.phone')}</label>
          <input id="book-phone" type="tel" required value={form.phone} onChange={update('phone')} placeholder={t('booking.form.phonePh')} className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="book-service" className="block text-xs text-gray-400 mb-1.5">{t('booking.form.service')}</label>
          <select id="book-service" value={form.service} onChange={update('service')} className={inputClass}>
            {BOOKING_SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="book-date" className="block text-xs text-gray-400 mb-1.5">{t('booking.form.date')}</label>
          <input id="book-date" type="date" value={form.date} onChange={update('date')} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="book-notes" className="block text-xs text-gray-400 mb-1.5">{t('booking.form.notes')}</label>
        <textarea
          id="book-notes"
          rows={3}
          value={form.notes}
          onChange={update('notes')}
          placeholder={t('booking.form.notesPh')}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full gold-gradient-bg text-obsidian font-semibold py-4 px-6 rounded-xl shadow-xl hover:opacity-95 transition flex items-center justify-center gap-2 text-base"
      >
        <i className="fa-brands fa-whatsapp text-xl" /> {t('booking.form.submit')} {DEFAULT_STUDIO.phone}
      </button>
    </form>
  );
}
