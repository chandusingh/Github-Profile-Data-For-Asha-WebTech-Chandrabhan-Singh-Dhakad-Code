import { motion } from "framer-motion";
import { SERVICES } from "../../data/content";
import { SectionHead } from "./Reveal";

export const Services = () => (
  <section id="services" data-testid="services-section" className="py-24 md:py-32 bg-[#0B0B10] border-y border-white/10">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <SectionHead id="services" index="04" kicker="EVERYTHING WE PROVIDE" title={<>Services, end to end.</>}
        note="From the first wireframe to the hundredth lead — design, build, launch and grow." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(220px,auto)] gap-4">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            data-testid={`service-${i}`}
            initial={{ opacity: 0.001, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className={`bento flex flex-col ${s.span}`}
            style={{ "--accent": s.color }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color, boxShadow: `0 0 18px ${s.color}` }} />
            </div>
            <h3 className={`font-display mt-6 tracking-tight ${i === 0 ? "text-3xl md:text-5xl" : "text-2xl"}`}>{s.title}</h3>
            <ul className={`mt-5 grid gap-2 text-sm text-zinc-300 ${i === 0 ? "sm:grid-cols-2" : ""}`}>
              {s.items.map((it) => <li key={it} className="flex gap-2"><span style={{ color: s.color }}>→</span>{it}</li>)}
            </ul>
            {i === 0 && (
              <div className="mt-auto pt-10 flex items-end justify-between gap-4 border-t border-white/10">
                <span className="font-display text-6xl md:text-8xl grad-text leading-none">500+</span>
                <span className="text-sm text-zinc-300 text-right max-w-[12rem]">projects shipped for clients in 6+ countries</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
