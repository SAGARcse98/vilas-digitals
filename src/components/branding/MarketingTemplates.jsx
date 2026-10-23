import { useStudio } from '../../context/StudioContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { copyTextToClipboard } from '../../utils/clipboard.js';
import { MARKETING_TEMPLATES } from '../../utils/templates.js';

function TemplateCard({ template, text, onCopy }) {
  return (
    <div
      className={`bg-obsidian border rounded-2xl p-5 flex flex-col justify-between ${
        template.highlighted ? 'border-gold/30' : 'border-white/10'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${template.titleClass}`}>
            <i className={template.icon} /> {template.title}
          </span>
          <button
            onClick={() => onCopy(text)}
            className="text-xs bg-gold/15 hover:bg-gold hover:text-obsidian text-gold px-3 py-1.5 rounded-lg font-medium transition"
          >
            <i className="fa-regular fa-copy mr-1" /> Copy
          </button>
        </div>
        <pre className="text-xs text-gray-300 whitespace-pre-wrap font-sans bg-charcoal p-3.5 rounded-xl border border-white/5 leading-relaxed max-h-72 overflow-y-auto">
          {text}
        </pre>
      </div>
      <p className="text-[11px] text-gray-500 mt-3">{template.footnote}</p>
    </div>
  );
}

export default function MarketingTemplates() {
  const { studio } = useStudio();
  const showToast = useToast();

  const handleCopy = async (text) => {
    await copyTextToClipboard(text);
    showToast('Template copied! Ready to paste on WhatsApp or Instagram.');
  };

  return (
    <>
      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2.5">
        <i className="fa-solid fa-bullhorn text-gold" /> 2. One-Click Copy Promotional Templates (English & Kannada)
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MARKETING_TEMPLATES.map((t) => (
          <TemplateCard key={t.id} template={t} text={t.build(studio)} onCopy={handleCopy} />
        ))}
      </div>
    </>
  );
}

