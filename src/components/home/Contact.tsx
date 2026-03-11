import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-48 px-6 lg:px-12 bg-foreground text-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20" style={{ background: 'radial-gradient(ellipse, hsl(var(--primary) / 0.4) 0%, transparent 70%)' }}></div>
      
      <div className="bg-number top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-background">06</div>
      
      <div className="container mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-bold text-primary"
          >
            Let's Build Something
          </motion.span>

          <h2 className="text-kinetic leading-none text-gradient">
            Have a<br />project?
          </h2>
          
          <p className="text-lg md:text-xl opacity-60 max-w-lg mx-auto leading-relaxed">
            I'm always open to discussing new projects, collaborations, or opportunities in the DevOps & cloud infrastructure space.
          </p>
          
          <div className="flex items-center gap-6">
            <Mail size={32} className="opacity-30 hidden md:block" />
            <MagneticButton href="mailto:hello@infiniteloophole.com">
              Let's Talk
            </MagneticButton>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="w-full mt-32">
          <div className="section-divider mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-xs font-bold uppercase tracking-[0.2em]">
            <div className="flex flex-col gap-4">
              <span className="opacity-50">Connect</span>
              <a href="https://github.com/infiniteloophole" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                <Github size={14} />
                GitHub
              </a>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="opacity-50">Legal</span>
              <span>© {new Date().getFullYear()} infiniteloophole</span>
              <span>All Rights Reserved</span>
            </div>
            
            <div className="col-span-2 flex flex-col items-end justify-end gap-2 text-right">
              <span className="text-gradient font-bold text-sm">AUTOMATE × DEPLOY × SCALE</span>
              <span className="opacity-50">Made with ♥ in London</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
