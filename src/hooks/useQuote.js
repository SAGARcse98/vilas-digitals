import { useCallback, useMemo, useState } from 'react';
import { ADDONS, BASE_OPTIONS, DEFAULT_BASE, EXTRA_SHIFT_PRICE } from '../data/packages.js';
import { formatINR } from '../utils/format.js';

/** State + derived totals for the interactive quote calculator. */
export function useQuote() {
  const [clientName, setClientName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [baseType, setBaseType] = useState(DEFAULT_BASE);
  const [extraShifts, setExtraShifts] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = useCallback((id) => {
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  }, []);

  /** Loads a preset base package and resets add-ons & shifts. */
  const selectPreset = useCallback((type) => {
    setBaseType(type);
    setSelectedAddons([]);
    setExtraShifts(0);
  }, []);

  const summary = useMemo(() => {
    const base = BASE_OPTIONS.find((o) => o.value === baseType) ?? BASE_OPTIONS[0];
    const addons = ADDONS.filter((a) => selectedAddons.includes(a.id));
    const shiftsCost = extraShifts * EXTRA_SHIFT_PRICE;
    const addonsTotal = addons.reduce((sum, a) => sum + a.price, 0);
    return { base, addons, shiftsCost, total: base.price + shiftsCost + addonsTotal };
  }, [baseType, selectedAddons, extraShifts]);

  /** Plain-text quote for WhatsApp / clipboard. */
  const buildQuoteText = useCallback(
    (studio) => {
      const addonNames = summary.addons.map((a) => a.name);
      if (extraShifts > 0) addonNames.push(`${extraShifts} Extra Shift(s)`);

      return (
        `📸 *VILAS DIGITAL'S (NARASALAGI) - SHOOT ESTIMATE*\n` +
        `📍 Studio: ${studio.address}\n` +
        `📞 Contact: ${studio.phone}\n` +
        `----------------------------------\n` +
        `👤 Client: ${clientName.trim() || 'Valued Client'}\n` +
        `📅 Event Date: ${eventDate || 'TBD'}\n` +
        `✨ Base Package: ${summary.base.name}\n` +
        `➕ Add-Ons: ${addonNames.length ? addonNames.join(', ') : 'Standard Deliverables'}\n` +
        `💰 *Estimated Total: ${formatINR(summary.total)}*\n\n` +
        `Please let us know how we can finalize this booking!`
      );
    },
    [summary, extraShifts, clientName, eventDate]
  );

  return {
    clientName, setClientName,
    eventDate, setEventDate,
    baseType, setBaseType,
    extraShifts, setExtraShifts,
    selectedAddons, toggleAddon,
    selectPreset,
    summary,
    buildQuoteText,
  };
}

