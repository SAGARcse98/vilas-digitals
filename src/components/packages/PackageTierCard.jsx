export default function PackageTierCard({ tier, onSelect }) {
  const { highlighted } = tier;

  return (
    <div
      className={`bg-obsidian rounded-3xl p-7 flex flex-col justify-between transition ${
        highlighted
          ? 'border-2 border-gold relative gold-border-glow transform lg:-translate-y-2'
          : 'border border-white/10 hover:border-gold/40'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gold-gradient-bg text-obsidian text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow">
          {tier.ribbon}
        </div>
      )}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">{tier.tier}</span>
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              highlighted ? 'bg-gold/15 border border-gold/30 text-gold' : 'bg-white/5 border border-white/10 text-gray-300'
            }`}
          >
            {tier.duration}
          </span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-white mt-3">{tier.title}</h3>
        <p className="text-xs text-gray-400 mt-1">{tier.subtitle}</p>
        <div className="my-6 pb-6 border-b border-white/10">
          <span className={`text-3xl font-bold ${highlighted ? 'gold-gradient-text' : 'text-white'}`}>{tier.price}</span>
          <span className="text-xs text-gray-400"> / starting package</span>
        </div>
        <ul className="space-y-3 text-sm text-gray-300">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <i className="fa-solid fa-check text-gold mt-1" /> <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => onSelect(tier.id)}
        className={`mt-8 w-full py-3.5 rounded-xl font-semibold text-sm transition ${
          highlighted
            ? 'gold-gradient-bg text-obsidian shadow-lg hover:opacity-95'
            : 'bg-white/10 hover:bg-gold hover:text-obsidian text-white'
        }`}
      >
        {tier.cta}
      </button>
    </div>
  );
}

