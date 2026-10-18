import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowDownRight, Github } from "lucide-react";
import { MaskLine } from "./Reveal";
import { Shot } from "./Shot";

const STACK = [
  { domain: "ashawebtechitsolutions.com", name: "Asha WebTech" },
  { domain: "codelumeitsolution.com", name: "Codelume" },
  { domain: "leadmappo.com", name: "LeadMappo" },
];

const HeroStack = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 18 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <div onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }} className="relative h-[360px] sm:h-[460px] lg:h-[560px]" style={{ perspective: 1400 }}>
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="absolute inset-0">
        {STACK.map((s, i) => (
          <motion.div
            key={s.domain}
            initial={{ opacity: 0, y: 80, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: [-7, 4, -2][i] }}
            transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-card absolute"
            style={{ top: `${i * 14}%`, left: `${[2, 22, 10][i]}%`, width: "78%", transform: `translateZ(${i * 60}px)`, zIndex: i }}
          >
            <div className="flex items-center gap-1.5 px-3 h-7 bg-black/70 border-b border-white/10">
              <i className="dot bg-[#FF3D7F]" /><i className="dot bg-[#FF9E0B]" /><i className="dot bg-[#00D2FF]" />
              <span className="ml-2 font-mono text-[10px] text-zinc-400 truncate">{s.domain}</span>
            </div>
            <div className="aspect-[16/10] overflow-hidden"><Shot domain={s.domain} name={s.name} /></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 140]);
  return (
    <section id="top" data-testid="hero-section" className="relative min-h-screen pt-32 md:pt-40 pb-16 overflow-hidden">
      <div className="hero-glow" />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-mono text-xs tracking-[0.3em] text-zinc-400 mb-8 flex items-center gap-3">
            <span className="pulse-dot" /> BHOPAL, INDIA — SHIPPING SINCE DAY ONE
          </motion.p>
          <h1 data-testid="hero-title" className="font-display text-[11vw] sm:text-6xl lg:text-[5.4rem] leading-[0.95] tracking-[-0.04em]">
            <MaskLine delay={0.1}>We build</MaskLine>
            <MaskLine delay={0.22} className="grad-text">websites,</MaskLine>
            <MaskLine delay={0.34}>apps &amp; growth</MaskLine>
            <MaskLine delay={0.46} className="outline-text">systems.</MaskLine>
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-8 max-w-xl text-zinc-300 text-base md:text-lg leading-relaxed">
            Asha WebTech IT Solutions Pvt Ltd and founder Chandrabhan Singh Dhakad — 13 own brands, 13 Android apps,
            3 Chrome extensions and 500+ client projects across India, Australia, the UK and North America.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-10 flex flex-wrap gap-3">
            <a data-testid="hero-cta-websites" href="#websites" className="btn-grad">See all 13 websites <ArrowDownRight size={18} /></a>
            <a data-testid="hero-cta-github" href="#readme" className="btn-ghost"><Github size={18} /> Get the README files</a>
          </motion.div>
        </div>
        <motion.div style={{ y }} className="lg:col-span-5 relative">
          <HeroStack />
          <div className="spin-badge hidden sm:flex" aria-hidden="true">
            <svg viewBox="0 0 100 100"><defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <text><textPath href="#circ">WEB • APPS • SEO • SAAS • CRM • GROWTH • </textPath></text></svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
