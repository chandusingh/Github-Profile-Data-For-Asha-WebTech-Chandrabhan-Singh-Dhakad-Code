import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { CONTACT, TECH } from "../../data/content";
import { Reveal } from "./Reveal";
import { LogoMark } from "./Logo";

const Channel = ({ icon: Icon, label, value, href, id }) => (
  <a data-testid={id} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="channel group">
    <Icon size={20} />
    <span className="flex-1 min-w-0">
      <span className="block font-mono text-[11px] tracking-[0.2em] text-zinc-400">{label}</span>
      <span className="block font-display text-base md:text-xl break-all">{value}</span>
    </span>
    <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
  </a>
);

export const Contact = () => (
  <section id="contact" data-testid="contact-section" className="pt-24 md:pt-32 pb-10 relative overflow-hidden">
    <div className="hero-glow opacity-70" />
    <div className="mx-auto max-w-[1400px] px-5 md:px-10 relative">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 mb-6"><span className="grad-text">08</span> — CONTACT</p>
        <h2 className="font-display text-[12vw] lg:text-[8.5rem] leading-[0.9] tracking-[-0.04em]">
          Let’s build <span className="grad-text">yours.</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid lg:grid-cols-2 gap-4">
        <Channel id="contact-phone" icon={Phone} label="CALL" value={CONTACT.phone} href={CONTACT.phoneHref} />
        <Channel id="contact-whatsapp" icon={MessageCircle} label="WHATSAPP" value={CONTACT.phone} href={CONTACT.whatsapp} />
        <Channel id="contact-email-company" icon={Mail} label="COMPANY EMAIL" value={CONTACT.companyEmail} href={`mailto:${CONTACT.companyEmail}`} />
        <Channel id="contact-email-founder" icon={Mail} label="FOUNDER EMAIL" value={CONTACT.founderEmail} href={`mailto:${CONTACT.founderEmail}`} />
      </div>
      <div className="mt-4 channel cursor-default"><MapPin size={20} /><span className="font-display text-base md:text-xl">{CONTACT.address}</span></div>
      <div className="mt-10 flex flex-wrap gap-2">
        {CONTACT.socials.map((s, i) => (
          <a key={s.href} data-testid={`social-${i}`} href={s.href} target="_blank" rel="noreferrer" className="client-pill">{s.label}</a>
        ))}
      </div>
      <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-zinc-400">
        {TECH.map((t) => <span key={t}>{t}</span>)}
      </div>
      <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-sm text-zinc-400">
        <span className="flex items-center gap-3"><LogoMark size={26} /> © {new Date().getFullYear()} Asha WebTech IT Solutions Pvt Ltd</span>
        <span>Building technology + marketing systems that drive real growth.</span>
      </footer>
    </div>
  </section>
);
