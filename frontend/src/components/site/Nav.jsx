import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  ["Profiles", "#profiles"],
  ["Websites", "#websites"],
  ["Services", "#services"],
  ["Apps", "#apps"],
  ["README", "#readme"],
  ["Contact", "#contact"],
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-4">
        <nav className="glass rounded-2xl px-4 md:px-6 h-16 flex items-center justify-between">
          <Logo />
          <ul className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">
            {LINKS.map(([l, h]) => (
              <li key={h}>
                <a data-testid={`nav-link-${l.toLowerCase()}`} href={h} className="nav-link">{l}</a>
              </li>
            ))}
          </ul>
          <a data-testid="nav-cta" href="#contact" className="btn-grad text-sm max-sm:!hidden">
            Start a project <ArrowUpRight size={16} />
          </a>
          <button data-testid="nav-menu-toggle" className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div data-testid="nav-mobile-menu" className="glass rounded-2xl mt-2 p-5 lg:hidden">
            {LINKS.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 font-display text-xl border-b border-white/5 last:border-0">
                {l}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
