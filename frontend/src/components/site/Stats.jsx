import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

const Counter = ({ to }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / 1600, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}</span>;
};

export const Stats = () => (
  <section id="stats" data-testid="stats-section" className="py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <SectionHead id="stats" index="01" kicker="BY THE NUMBERS" title={<>Numbers that took <span className="grad-text">years</span> to earn.</>}
        note="Figures from ashawebtechitsolutions.com, chandrabhansingh.in and our project index." />
      <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05} className="stat-cell">
            <div data-testid={`stat-${i}`} className="font-display text-5xl md:text-7xl tracking-tight" style={{ color: s.color }}>
              <Counter to={s.value} />{s.suffix}
            </div>
            <p className="mt-3 text-sm text-zinc-300">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
