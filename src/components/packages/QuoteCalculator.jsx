import { forwardRef } from 'react';
import QuoteSummary from './QuoteSummary.jsx';
import { ADDONS, BASE_OPTIONS, EXTRA_SHIFT_PRICE, MAX_EXTRA_SHIFTS } from '../../data/packages.js';
import { formatINR } from '../../utils/format.js';

const inputClass =
  'w-full bg-charcoal border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold';
const labelClass = 'block text-xs uppercase tracking-wider text-gray-400 mb-2';

const QuoteCalculator = forwardRef(function QuoteCalculator({ quote }, ref) {
  const { clientName, setClientName, eventDate, setEventDate, baseType, setBaseType, extraShifts, setExtraShifts, selectedAddons, toggleAddon, summary } =
    quote;

  const shiftsLabel =
    extraShifts === 0
      ? '1 Standard Session'
      : `Standard + ${extraShifts} Extra Shift${extraShifts > 1 ? 's' : ''} (+${formatINR(summary.shiftsCost)})`;

  return (
    <div id="quote-calculator" ref={ref} className="bg-obsidian border border-gold/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
        <div>
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            <i className="fa-solid fa-sliders mr-1.5" />
            Interactive Estimator & Rate Card Generator
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">Build Your Custom Shoot Quotation</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => window.print()}
            className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl border border-white/15 flex items-center gap-2 transition"
          >
            <i className="fa-solid fa-print text-gold" /> Print / Save PDF Quote
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Calculator Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Client Name (Optional for Quote)</label>
              <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="e.g., Rahul & Priya" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Event Date</label>
              <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className={inputClass} />
            </div>
          </div>

          {/* Select Base Occasion */}
          <div>
            <label className={labelClass}>1. Select Occasion / Base Coverage</label>
            <select value={baseType} onChange={(e) => setBaseType(e.target.value)} className={`${inputClass} py-3.5`}>
              {BASE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label} — {formatINR(o.price)}
                </option>
              ))}
            </select>
          </div>

          {/* Coverage Duration / Sessions */}
          <div>
            <div className="flex justify-between text-xs uppercase tracking-wider text-gray-400 mb-2">
              <span>2. Additional Sessions / Extra Shifts ({formatINR(EXTRA_SHIFT_PRICE)} per extra shift)</span>
              <span className="text-gold font-bold">{shiftsLabel}</span>
            </div>
            <input
              type="range"
              min="0"
              max={MAX_EXTRA_SHIFTS}
              value={extraShifts}
              onChange={(e) => setExtraShifts(parseInt(e.target.value, 10))}
              className="w-full accent-gold cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1">
              {Array.from({ length: MAX_EXTRA_SHIFTS + 1 }, (_, i) => (
                <span key={i}>{i === 0 ? 'Standard' : `+${i} Shift${i > 1 ? 's' : ''}`}</span>
              ))}
            </div>
          </div>

          {/* Add-Ons Checkboxes */}
          <div>
            <label className={`${labelClass} mb-3`}>3. Select Custom Add-Ons & Deliverables</label>
            <div className="grid sm:grid-cols-2 gap-3">
              {ADDONS.map((addon) => (
                <label
                  key={addon.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-charcoal border border-white/10 cursor-pointer hover:border-gold/50 transition"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="accent-gold w-4 h-4"
                      checked={selectedAddons.includes(addon.id)}
                      onChange={() => toggleAddon(addon.id)}
                    />
                    <span className="text-xs sm:text-sm text-gray-200">{addon.label}</span>
                  </div>
                  <span className="text-xs font-semibold text-gold">+{formatINR(addon.price)}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Printable / Live Estimate Summary Card */}
        <div className="lg:col-span-5">
          <QuoteSummary quote={quote} />
        </div>
      </div>
    </div>
  );
});

export default QuoteCalculator;

