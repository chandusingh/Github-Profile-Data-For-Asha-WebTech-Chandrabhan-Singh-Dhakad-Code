import { useState } from "react";
import { Github, Mail, Globe, ArrowUpRight } from "lucide-react";
import { PROFILES } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

const StatImg = ({ src, alt }) => {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} className="w-full h-auto rounded-xl" />;
};

const Card = ({ p, i }) => (
  <Reveal delay={i * 0.12} className="profile-card group" >
    <div data-testid={`profile-card-${p.key}`} className="relative h-full p-6 md:p-10 flex flex-col">
      <div className="flex items-center justify-between mb-10">
        <span className="font-mono text-xs tracking-[0.3em] px-3 py-1.5 rounded-full border" style={{ color: p.accent, borderColor: p.accent }}>{p.tag.toUpperCase()}</span>
        <span className="font-mono text-xs text-zinc-400">@{p.user}</span>
      </div>
      <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-tight">{p.name}</h3>
      <p className="mt-3 text-zinc-300">{p.role}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {p.facts.map((f) => <span key={f} className="chip">{f}</span>)}
      </div>
      <div className="mt-8 grid gap-3">
        {p.org && (
          <p className="text-sm text-zinc-300 leading-relaxed">
            Web development, Android apps, SaaS, CRMs, SEO and performance marketing for startups, agencies and global businesses —
            run across 13 in-house brands.
          </p>
        )}
        {p.org ? (
          <div className="flex flex-wrap gap-2">
            <img alt="Organisation followers" src={`https://img.shields.io/github/followers/${p.user}?label=Followers&style=for-the-badge&color=ff3d7f&logo=github`} />
            <img alt="Organisation stars" src={`https://img.shields.io/github/stars/${p.user}?label=Stars&style=for-the-badge&color=ff9e0b&logo=github`} />
            <img alt="Own websites" src="https://img.shields.io/badge/Own%20Websites-13-00D2FF?style=for-the-badge" />
            <img alt="Apps" src="https://img.shields.io/badge/Play%20Store-13%20Apps-10B981?style=for-the-badge&logo=googleplay&logoColor=white" />
          </div>
        ) : (
          <>
            <StatImg alt={`${p.user} GitHub stats`} src={`https://github-readme-stats.vercel.app/api?username=${p.user}&show_icons=true&theme=radical&hide_border=true&bg_color=00000000`} />
            <StatImg alt={`${p.user} streak`} src={`https://streak-stats.demolab.com?user=${p.user}&theme=radical&hide_border=true&background=00000000`} />
          </>
        )}
      </div>
      <div className="mt-auto pt-10 flex flex-wrap gap-3">
        <a data-testid={`profile-github-${p.key}`} href={p.github} target="_blank" rel="noreferrer" className="btn-grad text-sm"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
        <a data-testid={`profile-site-${p.key}`} href={p.site} target="_blank" rel="noreferrer" className="btn-ghost text-sm"><Globe size={16} /> Website</a>
        <a data-testid={`profile-email-${p.key}`} href={`mailto:${p.email}`} className="btn-ghost text-sm"><Mail size={16} /> {p.email}</a>
      </div>
    </div>
  </Reveal>
);

export const Profiles = () => (
  <section id="profiles" data-testid="profiles-section" className="py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <SectionHead id="profiles" index="02" kicker="TWO GITHUB PROFILES" title={<>One company. <span className="outline-text">One founder.</span></>}
        note="Live GitHub stats pulled straight from both profiles." />
      <div className="grid lg:grid-cols-2 gap-6">
        {PROFILES.map((p, i) => <Card key={p.key} p={p} i={i} />)}
      </div>
    </div>
  </section>
);
