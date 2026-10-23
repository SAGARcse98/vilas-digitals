import StudioCustomizer from './StudioCustomizer.jsx';
import VisitingCard from './VisitingCard.jsx';
import MarketingTemplates from './MarketingTemplates.jsx';

function printVisitingCards() {
  document.body.classList.add('print-card-mode');
  window.print();
  setTimeout(() => document.body.classList.remove('print-card-mode'), 500);
}

/** Owner's branding, visiting card & marketing hub (rendered at #/kit). */
export default function BrandingHubSection() {
  return (
    <section id="branding-hub" className="min-h-screen pt-28 pb-20 bg-charcoal border-t border-gold/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 no-print">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gold hover:underline bg-obsidian border border-gold/30 px-4 py-2 rounded-xl"
          >
            <i className="fa-solid fa-arrow-left" /> Back to Public Studio Website
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs uppercase tracking-widest font-semibold mb-3">
              <i className="fa-solid fa-crown" /> Complete Studio Owner's Kit — Narasalagi Edition
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">Vilas Digital's Branding & Marketing Hub</h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl">
              Pre-configured with <strong className="text-white">Narasalagi</strong> and{' '}
              <strong className="text-white">+91 93800 61887</strong>! Edit any field below to live-update the{' '}
              <strong className="text-white">Front & Back Luxury Visiting Card</strong>,{' '}
              <strong className="text-white">English + Kannada WhatsApp Broadcasts</strong>,{' '}
              <strong className="text-white">Instagram Captions</strong>, and <strong className="text-white">Logo Prompts</strong>.
            </p>
          </div>
          <button
            onClick={printVisitingCards}
            className="self-start md:self-auto bg-gold/15 hover:bg-gold hover:text-obsidian text-gold border border-gold/40 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition flex items-center gap-2 no-print"
          >
            <i className="fa-solid fa-print" /> Print Visiting Card Sheet
          </button>
        </div>

        <StudioCustomizer />
        <VisitingCard />
        <MarketingTemplates />
      </div>
    </section>
  );
}
