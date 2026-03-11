import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: boolean;
}

export default function MagneticButton({ href, children, icon = true }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouse = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative inline-flex items-center gap-6 text-2xl md:text-5xl font-bold uppercase tracking-tighter transition-[transform] duration-300 ease-out"
      style={{ willChange: 'transform' }}
    >
      {/* Background pill that expands */}
      <span className="absolute -inset-x-8 -inset-y-4 bg-primary/0 group-hover:bg-primary/10 rounded-full transition-colors duration-500"></span>
      
      <span className="relative border-b-2 border-primary pb-2 group-hover:text-primary transition-colors duration-300">
        {children}
      </span>
      {icon && (
        <span className="relative">
          <ArrowRight size={48} className="group-hover:translate-x-4 group-hover:text-primary transition-all duration-300" />
        </span>
      )}
    </motion.a>
  );
}
