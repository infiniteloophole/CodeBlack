import { motion, useScroll, useTransform } from "framer-motion";
import { useTextScramble } from "@/hooks/useTextScramble";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const { output: line1 } = useTextScramble("DevOps", 800, 40);
  const { output: line2 } = useTextScramble("Engineer", 1200, 40);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12 bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Radial glows */}
      <motion.div style={{ y: y1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10 opacity-25" >
        <div className="w-full h-full" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)' }}></div>
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-1/4 right-1/4 w-[400px] h-[400px] -z-10 opacity-15">
        <div className="w-full h-full" style={{ background: 'radial-gradient(circle, hsl(35, 95%, 65%, 0.4) 0%, transparent 70%)' }}></div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-12 lg:right-24 w-16 h-16 border border-primary/20 rounded-lg -z-10 hidden md:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-12 lg:left-24 w-8 h-8 bg-primary/10 rounded-full -z-10 hidden md:block"
      />
      <motion.div 
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full -z-10 hidden md:block"
      />

      <div className="bg-number top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-primary">01</div>
      
      <motion.div style={{ opacity }} className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col"
        >
          <h1 className="text-kinetic leading-none flex flex-col relative z-10">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-mono"
            >
              {line1}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-right text-gradient"
            >
              {line2}
            </motion.span>
          </h1>
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="max-w-md text-lg md:text-xl font-body text-muted-foreground leading-relaxed"
            >
              <span className="text-primary font-mono text-sm">&gt;_</span> BTech CS Student & Freelance Tech Enthusiast. Passionate about open-source, Linux systems, and building <span className="text-foreground font-medium">scalable cloud infrastructure</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-primary">Available for hire</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div style={{ opacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="uppercase tracking-widest text-[10px] font-bold opacity-50 rotate-90">Scroll</span>
        <div className="w-[1px] h-12 bg-foreground/30 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
