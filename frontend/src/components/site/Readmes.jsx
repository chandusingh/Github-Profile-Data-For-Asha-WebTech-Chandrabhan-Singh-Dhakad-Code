import { useEffect, useState } from "react";
import { Copy, Download, Check, Github } from "lucide-react";
import { toast } from "sonner";
import { README_FILES } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

export const Readmes = () => {
  const [active, setActive] = useState(README_FILES[0]);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(active.file).then((r) => (r.ok ? r.text() : "")).then((t) => { if (alive) setText(t); }).catch(() => { if (alive) setText(""); });
    return () => { alive = false; };
  }, [active]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(`README for @${active.label} copied`);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error("Copy failed — use Download instead");
    }
  };

  return (
    <section id="readme" data-testid="readme-section" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHead id="readme" index="08" kicker="GITHUB PROFILE README CODE" title={<>Your two READMEs, <span className="grad-text">redesigned.</span></>}
          note="Colorful, vibrant markdown with stats, all 13 websites, services, apps and contact. Paste into the README.md of a repo named exactly like your username." />
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {README_FILES.map((f) => (
              <button key={f.key} data-testid={`readme-tab-${f.key}`} onClick={() => setActive(f)} className={`tab ${active.key === f.key ? "tab-on" : ""}`}>
                @{f.label}
              </button>
            ))}
            <div className="flex gap-2 sm:ml-auto">
              <button data-testid="readme-copy-btn" onClick={copy} className="btn-grad text-sm">{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied" : "Copy code"}</button>
              <a data-testid="readme-download-btn" href={active.file} download="README.md" className="btn-ghost text-sm"><Download size={16} /> Download</a>
              <a data-testid="readme-repo-link" href={active.repo} target="_blank" rel="noreferrer" className="btn-ghost text-sm hidden sm:inline-flex"><Github size={16} /> Repo</a>
            </div>
          </div>
          <pre data-testid="readme-code" className="code-box" data-lenis-prevent>{text || "Loading…"}</pre>
        </Reveal>
      </div>
    </section>
  );
};
