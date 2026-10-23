export default function ServiceGroup({ eyebrow, title, icon, services }) {
  return (
    <div className="bg-charcoal border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
        <div>
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">{eyebrow}</span>
          <h3 className="font-serif text-2xl font-bold text-white mt-1">{title}</h3>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold text-xl">
          <i className={`fa-solid ${icon}`} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className={`p-4 rounded-2xl bg-carddark border border-white/5 hover:border-gold/40 transition ${s.wide ? 'sm:col-span-2' : ''}`}
          >
            <i className={`fa-solid ${s.icon} text-gold text-lg mb-2`} />
            <h4 className="font-semibold text-white text-base">{s.title}</h4>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

