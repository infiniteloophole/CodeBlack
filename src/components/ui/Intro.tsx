import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 2500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-foreground text-background flex flex-col items-center justify-center select-none"
    >
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-tighter"
        >
          infiniteloophole
        </motion.h1>
      </div>
      
      <div className="overflow-hidden mt-4">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-background"></div>
          <span className="uppercase tracking-widest text-xs font-bold text-primary">Aspiring DevOps Engineer</span>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
