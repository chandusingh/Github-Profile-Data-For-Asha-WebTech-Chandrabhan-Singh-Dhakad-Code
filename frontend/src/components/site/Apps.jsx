import { Smartphone, Puzzle, ArrowUpRight } from "lucide-react";
import { APPS, EXTENSIONS } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

const Row = ({ item, i, icon: Icon, prefix }) => (
  <a data-testid={`${prefix}-${i}`} href={item.href} target="_blank" rel="noreferrer" className="list-row group">
    <span className="font-mono text-xs text-zinc-400 w-8">{String(i + 1).padStart(2, "0")}</span>
    <Icon size={18} className="text-zinc-300 shrink-0" />
    <span className="flex-1 min-w-0">
      <span className="font-display text-base md:text-lg block truncate">{item.name}</span>
      <span className="text-xs text-zinc-400">{item.sub}</span>
    </span>
    <ArrowUpRight size={18} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
  </a>
);

export const Apps = () => (
  <section id="apps" data-testid="apps-section" className="py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <SectionHead id="apps" index="06" kicker="ANDROID APPS & CHROME EXTENSIONS" title={<>In your pocket. <span className="grad-text">In your browser.</span></>}
        note="13 apps live on Google Play and 3 extensions on the Chrome Web Store." />
      <div className="grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-7">
          <p className="font-mono text-xs tracking-[0.25em] text-zinc-400 mb-4">GOOGLE PLAY · 13</p>
          <div className="border-t border-white/10">
            {APPS.map((a, i) => <Row key={a.href} item={a} i={i} icon={Smartphone} prefix="app" />)}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="font-mono text-xs tracking-[0.25em] text-zinc-400 mb-4">CHROME WEB STORE · 3</p>
          <div className="grid gap-4">
            {EXTENSIONS.map((e, i) => (
              <a key={e.href} data-testid={`extension-${i}`} href={e.href} target="_blank" rel="noreferrer" className="ext-card group">
                <Puzzle size={22} />
                <h3 className="font-display text-2xl mt-8">{e.name}</h3>
                <p className="text-sm text-zinc-300 mt-1">{e.sub}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">Add to Chrome <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" /></span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
