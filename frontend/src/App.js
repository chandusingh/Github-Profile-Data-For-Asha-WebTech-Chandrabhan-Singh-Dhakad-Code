import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "./components/ui/sonner";
import { Nav } from "./components/site/Nav";
import { Hero } from "./components/site/Hero";
import { Marquee } from "./components/site/Marquee";
import { Stats } from "./components/site/Stats";
import { Profiles } from "./components/site/Profiles";
import { Websites } from "./components/site/Websites";
import { Services } from "./components/site/Services";
import { Apps } from "./components/site/Apps";
import { WebApps } from "./components/site/WebApps";
import { Readmes } from "./components/site/Readmes";
import { Contact } from "./components/site/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: { offset: -90 } });
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  return (
    <div className="site grain">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Profiles />
        <Websites />
        <Services />
        <Apps />
        <WebApps />
        <Readmes />
        <Contact />
      </main>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
