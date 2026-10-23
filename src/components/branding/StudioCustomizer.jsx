import { useStudio } from '../../context/StudioContext.jsx';

const FIELDS = [
  { key: 'owner', label: 'Photographer / Owner Name' },
  { key: 'phone', label: 'Phone / WhatsApp Number' },
  { key: 'address', label: 'Studio City / Address' },
  { key: 'insta', label: 'Instagram Handle' },
];

export default function StudioCustomizer() {
  const { inputs, updateField } = useStudio();

  return (
    <div className="bg-obsidian border border-gold/40 rounded-2xl p-5 sm:p-6 mb-10 shadow-xl">
      <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
        <i className="fa-solid fa-pen-to-square" /> Live Studio Customizer (Pre-Loaded for Narasalagi • 93800 61887)
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FIELDS.map((f) => (
          <div key={f.key}>
            <label htmlFor={`kit-${f.key}`} className="text-xs text-gray-400 block mb-1">
              {f.label}
            </label>
            <input
              id={`kit-${f.key}`}
              type="text"
              value={inputs[f.key]}
              onChange={(e) => updateField(f.key, e.target.value)}
              className="w-full bg-charcoal border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-gold focus:outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

