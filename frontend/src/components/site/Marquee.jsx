import { WEBSITES } from "../../data/content";

export const Marquee = () => {
  const row = WEBSITES.map((w) => w.domain);
  return (
    <section data-testid="marquee" className="py-10 md:py-14 border-y border-white/10 overflow-hidden bg-[#0B0B10]">
      <div className="marquee-track">
        {[...row, ...row].map((d, i) => (
          <span key={i} className="flex items-center gap-10 pr-10 font-display text-4xl md:text-6xl whitespace-nowrap">
            <span className={i % 2 ? "outline-text" : "text-white"}>{d}</span>
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};
