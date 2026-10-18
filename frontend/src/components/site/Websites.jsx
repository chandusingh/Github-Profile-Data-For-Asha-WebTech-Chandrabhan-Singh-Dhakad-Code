import { ArrowUpRight } from "lucide-react";
import { WEBSITES } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";
import { Shot } from "./Shot";

const Site = ({ w, i }) => (
  <Reveal delay={(i % 3) * 0.08} className={i === 0 ? "sm:col-span-2" : ""}>
    <a data-testid={`website-card-${w.domain}`} href={`https://${w.domain}/`} target="_blank" rel="noreferrer" className="site-card group block">
      <div className={`relative overflow-hidden rounded-xl ${i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
        <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]">
          <Shot domain={w.domain} name={w.name} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 font-mono text-[11px] px-2 py-1 rounded-md bg-black/70 text-zinc-200">{String(i + 1).padStart(2, "0")}</span>
        <span className="absolute top-3 right-3 h-9 w-9 rounded-full grid place-items-center bg-white text-black transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="pt-4 pb-1 px-1 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg md:text-xl">{w.name}</h3>
          <p className="text-sm text-zinc-400 mt-1">{w.desc}</p>
        </div>
        <span className="font-mono text-xs text-zinc-300 shrink-0 mt-1.5 hidden sm:block">{w.domain}</span>
      </div>
    </a>
  </Reveal>
);

export const Websites = () => (
  <section id="websites" data-testid="websites-section" className="py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <SectionHead id="websites" index="03" kicker="OUR ALL WEBSITES & SOLUTIONS" title={<>Thirteen brands, <span className="grad-text">all live.</span></>}
        note="Every website we own and run — listed on both GitHub profiles too." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {WEBSITES.map((w, i) => <Site key={w.domain} w={w} i={i} />)}
      </div>
    </div>
  </section>
);
