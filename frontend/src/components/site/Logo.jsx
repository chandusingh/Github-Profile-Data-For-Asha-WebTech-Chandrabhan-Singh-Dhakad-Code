export const LogoMark = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="lg-a" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FF3D7F" />
        <stop offset=".5" stopColor="#FF9E0B" />
        <stop offset="1" stopColor="#00D2FF" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="16" fill="#0B0B10" stroke="url(#lg-a)" strokeWidth="3" />
    <path d="M17 47 L32 15 L47 47" fill="none" stroke="url(#lg-a)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 36 H40" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    <circle cx="48" cy="16" r="5" fill="#00D2FF" />
  </svg>
);

export const Logo = () => (
  <a href="#top" data-testid="nav-logo" className="flex items-center gap-3">
    <LogoMark />
    <span className="font-display text-sm leading-none tracking-tight">
      ASHA<span className="grad-text">/</span>BUILD
      <span className="block font-mono text-[10px] tracking-[0.25em] text-zinc-400 mt-1">INDEX · 2026</span>
    </span>
  </a>
);
