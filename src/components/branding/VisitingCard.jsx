import { useStudio } from '../../context/StudioContext.jsx';

function CardFront() {
  return (
    <div className="visiting-card-pattern border-2 border-gold/50 rounded-2xl p-7 sm:p-9 aspect-[1.75/1] flex flex-col justify-between relative overflow-hidden shadow-2xl">
      <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full border border-gold/15 pointer-events-none" />
      <div className="flex justify-between items-start">
        <span className="text-[10px] uppercase tracking-[0.25em] text-gold/80">Narasalagi • Dist. Vijayapura</span>
        <span className="text-xs text-gold font-semibold">
          <i className="fa-solid fa-phone mr-1" />
          93800 61887
        </span>
      </div>

      <div className="my-auto text-center py-4">
        <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-obsidian border border-gold flex items-center justify-center shadow-lg">
          <span className="font-serif text-xl font-bold gold-gradient-text">VD</span>
        </div>
        <h4 className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-white">
          VILAS <span className="gold-gradient-text">DIGITAL'S</span>
        </h4>
        <p className="text-[11px] uppercase tracking-[0.25em] text-gray-300 mt-1">Complete Photography & Videography Studio</p>
      </div>

      <div className="text-center border-t border-gold/20 pt-2.5">
        <p className="text-xs italic text-gold/90 font-serif">"Every Moment, Masterfully Framed."</p>
      </div>
    </div>
  );
}

function CardBack({ studio }) {
  return (
    <div className="visiting-card-pattern border-2 border-gold/50 rounded-2xl p-6 sm:p-8 aspect-[1.75/1] flex flex-col justify-between relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between border-b border-gold/30 pb-3">
        <div>
          <h4 className="font-serif text-xl font-bold text-white">{studio.owner}</h4>
          <p className="text-xs text-gold">Chief Photographer & Studio Director</p>
        </div>
        <div className="text-right">
          <span className="font-serif text-sm font-bold text-white block">VILAS DIGITAL'S</span>
          <span className="text-[11px] text-gray-400">{studio.insta}</span>
        </div>
      </div>

      {/* Services Bar */}
      <div className="my-2 bg-obsidian/90 border border-white/10 rounded-xl px-3.5 py-2 text-[11px] text-gold text-center tracking-wide">
        Weddings • Pre-Wedding • Candid • Portraits • 4K Drone • Instant Passport • Frames & Albums
      </div>

      {/* Contact Details */}
      <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-200 pt-1">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-phone text-gold w-4" />
          <span>{studio.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-brands fa-whatsapp text-gold w-4" />
          <span>{studio.phone}</span>
        </div>
        <div className="flex items-center gap-2 sm:col-span-2">
          <i className="fa-solid fa-location-dot text-gold w-4" />
          <span>{studio.address}</span>
        </div>
      </div>
    </div>
  );
}

/** Front & back luxury visiting card preview (printable). */
export default function VisitingCard() {
  const { studio } = useStudio();

  return (
    <div id="printable-cards-area" className="mb-12">
      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2.5">
        <i className="fa-solid fa-id-card text-gold" /> 1. Luxury Visiting Card Preview (Front & Back — Ready for Print)
      </h3>
      <div className="grid lg:grid-cols-2 gap-8">
        <CardFront />
        <CardBack studio={studio} />
      </div>
    </div>
  );
}

