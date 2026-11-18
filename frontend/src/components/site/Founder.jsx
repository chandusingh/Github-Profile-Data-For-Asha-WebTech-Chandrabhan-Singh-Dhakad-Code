import { ExternalLink, Github } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

const FOUNDER = {
  name: "Chandrabhan Singh Dhakad",
  role: "Founder & Full Stack Developer",
  url: "https://chandrabhansingh.in/",
  github: "https://github.com/chandusingh",
  facts: [["8+", "Years building"], ["650+", "Projects engineered"], ["13", "Android apps"], ["15+", "Countries served"]],
  skills: ["React / Next.js", "Node.js", "PHP / Laravel", "Flutter", "Shopify & WooCommerce", "SaaS, ERP & CRM", "AI / ML integration"],
};

export const Founder = () => (
  <section id="founder" data-testid="founder-section" className="py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <SectionHead id="founder" index="03" kicker="ABOUT THE FOUNDER" title={<>Built by a developer who <span className="grad-text">still ships.</span></>}
        note="More details on chandrabhansingh.in." />
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-4">
          <div className="profile-card">
            <img src="/img/chandrabhan-singh-dhakad.webp" alt={`${FOUNDER.name}, founder`} width="900" height="1200" loading="lazy" data-testid="founder-photo" className="w-full aspect-[3/4] object-cover object-top" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <h3 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">{FOUNDER.name}</h3>
          <p className="mt-3 font-mono text-xs tracking-[0.2em] text-zinc-400">{FOUNDER.role.toUpperCase()} · BHOPAL, INDIA</p>
          <div className="mt-6 space-y-4 text-zinc-300 leading-relaxed md:text-lg">
            <p>Chandrabhan Singh Dhakad is a full stack developer with over eight years of experience building web and mobile applications, e-commerce stores, SaaS products, and ERP and CRM systems for businesses around the world.</p>
            <p>He leads Asha WebTech IT Solutions, serving clients across 15+ countries including Canada, Australia, the UK, the UAE, and the US. His hands-on engineering approach shapes how we plan, build and support every project.</p>
          </div>
          <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {FOUNDER.facts.map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 p-4">
                <dt className="font-display text-3xl md:text-4xl grad-text">{n}</dt>
                <dd className="mt-1 text-xs text-zinc-400">{l}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core expertise">
            {FOUNDER.skills.map((k) => <li key={k} className="chip">{k}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a data-testid="founder-link" href={FOUNDER.url} target="_blank" rel="noopener noreferrer" className="btn-grad text-sm">Know more about Chandrabhan <ExternalLink size={14} aria-hidden="true" /></a>
            <a href={FOUNDER.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm"><Github size={16} aria-hidden="true" /> GitHub</a>
          </div>
        </Reveal>
      </div>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "Person", name: FOUNDER.name, jobTitle: FOUNDER.role, url: FOUNDER.url,
      sameAs: [FOUNDER.url, FOUNDER.github], address: { "@type": "PostalAddress", addressLocality: "Bhopal", addressCountry: "IN" },
    }) }} />
  </section>
);
