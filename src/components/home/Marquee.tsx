import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function MarqueeSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 border-y border-foreground/10 overflow-hidden"
    >
      <div className="flex flex-col gap-8 md:gap-12">
        <Marquee speed={100} gradient={false} className="overflow-hidden">
          <div className="flex items-center gap-12 px-6">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-8xl md:text-[12rem] font-bold uppercase tracking-tighter flex items-center gap-12">
                DevOps <span className="text-primary">×</span> Linux <span className="text-primary">×</span> Docker
              </span>
            ))}
          </div>
        </Marquee>
        
        <Marquee speed={80} direction="right" gradient={false} className="overflow-hidden">
          <div className="flex items-center gap-12 px-6 opacity-30">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-8xl md:text-[12rem] font-bold uppercase tracking-tighter flex items-center gap-12" style={{ WebkitTextStroke: '2px currentColor', WebkitTextFillColor: 'transparent' }}>
                Movies <span className="text-primary" style={{ WebkitTextFillColor: 'hsl(var(--primary))' }}>×</span> Rock Music <span className="text-primary" style={{ WebkitTextFillColor: 'hsl(var(--primary))' }}>×</span> Open Source
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </motion.section>
  );
}
