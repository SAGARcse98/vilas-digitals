import Reveal from './Reveal.jsx';

/** Centered eyebrow + title + description block used at the top of sections. */
export default function SectionHeading({ eyebrow, title, children, className = 'mb-12' }) {
  return (
    <Reveal className={`text-center max-w-3xl mx-auto ${className}`}>
      <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{eyebrow}</span>
      <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      {children && <p className="text-gray-400 mt-4 text-sm sm:text-base">{children}</p>}
    </Reveal>
  );
}
