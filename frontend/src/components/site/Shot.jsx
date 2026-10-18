import { useState } from "react";

export const Shot = ({ domain, name, className = "" }) => {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`shot-fallback ${className}`}>
        <span className="font-display text-2xl md:text-3xl text-white/90 px-6 text-center leading-tight">{name}</span>
        <span className="font-mono text-xs text-zinc-300 mt-2">{domain}</span>
      </div>
    );
  }
  return (
    <img
      src={`/shots/${domain}.jpg`}
      alt={`${name} website screenshot`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover object-top ${className}`}
    />
  );
};
