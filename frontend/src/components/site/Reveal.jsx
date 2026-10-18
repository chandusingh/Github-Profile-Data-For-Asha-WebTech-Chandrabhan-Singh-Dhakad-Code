import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 28 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0.001, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "105%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const SectionHead = ({ index, kicker, title, note, id }) => (
  <Reveal className="mb-12 md:mb-16 grid md:grid-cols-12 gap-6 items-end">
    <div className="md:col-span-8">
      <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 mb-4">
        <span className="grad-text">{index}</span> — {kicker}
      </p>
      <h2 data-testid={`${id}-title`} className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
        {title}
      </h2>
    </div>
    {note && <p className="md:col-span-4 text-zinc-400 text-sm md:text-base leading-relaxed">{note}</p>}
  </Reveal>
);
