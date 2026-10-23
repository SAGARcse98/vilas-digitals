import FallbackImage from '../common/FallbackImage.jsx';

export default function PortfolioCard({ item, onOpen }) {
  return (
    <div
      onClick={() => onOpen(item)}
      className="group cursor-pointer bg-obsidian border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-gold/50 transition duration-300 flex flex-col"
    >
      <div className="relative h-64 overflow-hidden bg-black">
        <FallbackImage
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
        <span className="absolute top-3 left-3 text-[11px] font-medium px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-gold border border-gold/30">
          {item.badge}
        </span>
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-gold text-obsidian flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition">
          <i className="fa-solid fa-expand text-xs" />
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition">{item.title}</h3>
          <p className="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">{item.desc}</p>
        </div>
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
          <span>
            <i className="fa-solid fa-camera text-gold mr-1.5" />
            {item.gear}
          </span>
          <span className="text-gold font-medium">View Shot →</span>
        </div>
      </div>
    </div>
  );
}

