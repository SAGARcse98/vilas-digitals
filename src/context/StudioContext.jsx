import { createContext, useContext, useMemo, useState } from 'react';
import { DEFAULT_STUDIO } from '../data/studio.js';
import { toWhatsAppNumber } from '../utils/whatsapp.js';

const StudioContext = createContext(null);

/**
 * Holds the editable studio details (owner, phone, address, instagram) used by
 * the visiting card, marketing templates, footer, quote and booking flows.
 */
export function StudioProvider({ children }) {
  // Raw input values (what the user is typing in the customizer)
  const [inputs, setInputs] = useState({
    owner: DEFAULT_STUDIO.owner,
    phone: DEFAULT_STUDIO.phone,
    address: DEFAULT_STUDIO.address,
    insta: DEFAULT_STUDIO.insta,
  });

  const updateField = (field, value) => setInputs((prev) => ({ ...prev, [field]: value }));

  // Resolved values with fallbacks to defaults when a field is left empty
  const studio = useMemo(() => {
    const owner = inputs.owner.trim() || DEFAULT_STUDIO.owner;
    const phone = inputs.phone.trim() || DEFAULT_STUDIO.phone;
    const address = inputs.address.trim() || DEFAULT_STUDIO.address;
    const insta = inputs.insta.trim() || DEFAULT_STUDIO.insta;
    return { owner, phone, address, insta, waNumber: toWhatsAppNumber(inputs.phone) };
  }, [inputs]);

  const value = useMemo(() => ({ inputs, updateField, studio }), [inputs, studio]);

  return <StudioContext.Provider value={value}>{children}</StudioContext.Provider>;
}

export function useStudio() {
  const ctx = useContext(StudioContext);
  if (!ctx) throw new Error('useStudio must be used within a StudioProvider');
  return ctx;
}

