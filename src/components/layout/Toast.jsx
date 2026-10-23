export default function Toast({ message, visible }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none bg-carddark border border-gold text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <i className="fa-solid fa-circle-check text-gold text-lg" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}

