import { useStudio } from '../../context/StudioContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { DEFAULT_STUDIO } from '../../data/studio.js';
import { copyTextToClipboard } from '../../utils/clipboard.js';
import { formatINR } from '../../utils/format.js';
import { openWhatsApp } from '../../utils/whatsapp.js';

export default function QuoteSummary({ quote }) {
  const { studio } = useStudio();
  const showToast = useToast();
  const { clientName, eventDate, extraShifts, summary, buildQuoteText } = quote;

  const handleSend = () => openWhatsApp(studio.waNumber, buildQuoteText(studio));

  const handleCopy = async () => {
    await copyTextToClipboard(buildQuoteText(studio));
    showToast('Quotation summary copied to clipboard!');
  };

  return (
    <div id="printable-quote-area" className="bg-charcoal border border-gold/40 rounded-2xl p-6 sm:p-7 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div>
          <h4 className="font-serif text-xl font-bold text-white">VILAS DIGITAL'S</h4>
          <p className="text-xs text-gold">Main Road, Narasalagi • 📞 {DEFAULT_STUDIO.phone}</p>
        </div>
        <div className="text-right text-xs text-gray-400">
          <p>Client: {clientName.trim() || 'Valued Guest'}</p>
          <p>Date: {eventDate || 'Flexible Date'}</p>
        </div>
      </div>

      <div className="space-y-3 text-sm mb-6">
        <div className="flex justify-between items-start text-gray-200">
          <span className="font-medium pr-2">{summary.base.name}</span>
          <span className="font-semibold text-white whitespace-nowrap">{formatINR(summary.base.price)}</span>
        </div>

        {extraShifts > 0 && (
          <div className="flex justify-between items-start text-gray-300 text-xs">
            <span>+ {extraShifts} Extra Coverage Shift(s)</span>
            <span className="font-semibold text-white">{formatINR(summary.shiftsCost)}</span>
          </div>
        )}

        <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-gray-300">
          {summary.addons.length > 0 ? (
            summary.addons.map((a) => (
              <div key={a.id} className="flex justify-between items-center">
                <span>+ {a.name}</span>
                <span className="font-medium text-white">{formatINR(a.price)}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No optional add-ons selected.</p>
          )}
        </div>
      </div>

      <div className="border-t border-white/15 pt-4 mb-6 flex items-baseline justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-gray-400 block">Estimated Total</span>
          <span className="text-[11px] text-gray-500">Includes High-Res Soft Copies & Editing</span>
        </div>
        <span className="font-serif text-3xl font-bold gold-gradient-text">{formatINR(summary.total)}</span>
      </div>

      <div className="space-y-2.5 no-print">
        <button
          onClick={handleSend}
          className="w-full gold-gradient-bg text-obsidian font-semibold py-3.5 px-4 rounded-xl shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2 text-sm"
        >
          <i className="fa-brands fa-whatsapp text-lg" /> Send Estimate to {DEFAULT_STUDIO.phoneShort}
        </button>
        <button
          onClick={handleCopy}
          className="w-full bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 font-medium py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 text-xs"
        >
          <i className="fa-regular fa-copy text-gold" /> Copy Quotation Text for Client
        </button>
      </div>
    </div>
  );
}

