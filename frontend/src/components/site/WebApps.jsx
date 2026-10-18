import { ArrowUpRight } from "lucide-react";
import { WEB_APPS, CLIENTS } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

export const WebApps = () => (
  <section id="webapps" data-testid="webapps-section" className="py-24 md:py-32 bg-[#0B0B10] border-y border-white/10">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <SectionHead id="webapps" index="06" kicker="CUSTOM WEB APPS · CRMS · ADMIN PANELS" title={<>Software that runs <span className="outline-text">businesses.</span></>}
        note="Dashboards, CRMs and admin systems we designed and engineered for clients." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
        {WEB_APPS.map((a, i) => (
          <a key={a.href} data-testid={`webapp-${i}`} href={a.href} target="_blank" rel="noreferrer" className="webapp-cell group">
            <span className="font-mono text-[11px] tracking-[0.2em] text-zinc-400 uppercase">{a.type}</span>
            <span className="mt-3 font-display text-lg md:text-xl flex items-start justify-between gap-3">
              {a.name}
              <ArrowUpRight size={18} className="shrink-0 mt-1 transition-transform group-hover:rotate-45" />
            </span>
          </a>
        ))}
        <a data-testid="webapp-cta" href="#contact" className="webapp-cell lg:col-span-2 !bg-[var(--c-amber)] text-black group">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/70">Your business next</span>
          <span className="mt-3 font-display text-lg md:text-2xl flex items-start justify-between gap-3">
            Need a custom CRM, ERP or admin panel? Let’s talk.
            <ArrowUpRight size={20} className="shrink-0 mt-1 transition-transform group-hover:rotate-45" />
          </span>
        </a>
      </div>
      <Reveal className="mt-20">
        <p className="font-mono text-xs tracking-[0.25em] text-zinc-400 mb-6">SELECTED CLIENT WEBSITES · A FEW OF 100+</p>
        <div className="flex flex-wrap gap-3">
          {CLIENTS.map((c, i) => (
            <a key={c.href} data-testid={`client-${i}`} href={c.href} target="_blank" rel="noreferrer" className="client-pill">
              {c.name}<span className="font-mono text-[10px] text-zinc-400">{c.where}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
