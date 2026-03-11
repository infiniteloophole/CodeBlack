import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import MarqueeSection from "@/components/home/Marquee";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Intro from "@/components/ui/Intro";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <Intro />
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground grain-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MarqueeSection />
        <Projects />
        <Contact />
      </main>
      <Toaster />
    </div>
    </>
  );
}

export default App;