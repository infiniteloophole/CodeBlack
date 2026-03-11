import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Soractik",
    category: "Project",
    description: "Open-source experimental project",
    year: "2026",
    number: "01",
    link: "https://github.com/infiniteloophole/soractik"
  },
  {
    id: "02",
    title: "Kinetic Portfolio",
    category: "TypeScript",
    description: "Animated portfolio landing page built with React & Framer Motion",
    year: "2026",
    number: "02",
    link: "https://github.com/infiniteloophole/kinetic-portfolio-landing-remix"
  },
  {
    id: "03",
    title: "Taskman",
    category: "PowerShell",
    description: "Terminal-based task management utility",
    year: "2025",
    number: "03",
    link: "https://github.com/infiniteloophole/taskman"
  },
  {
    id: "04",
    title: "Portfolio Website",
    category: "JavaScript",
    description: "Personal portfolio website",
    year: "2026",
    number: "04",
    link: "https://github.com/infiniteloophole/Portfolio-website-"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 lg:px-12 relative">
      <div className="container mx-auto">
        {/* Header with animated counter */}
        <div className="flex justify-between items-end mb-24">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest font-bold text-primary mb-4 block"
            >
              ({String(projects.length).padStart(2, '0')}) Projects
            </motion.span>
            <h2 className="text-kinetic">Selected<br />Works</h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-4">
            <div className="max-w-xs text-right text-muted-foreground uppercase tracking-widest text-xs font-bold">
              A curation of projects focused on meaningful interactions and technical excellence.
            </div>
            <a 
              href="https://github.com/infiniteloophole" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary hover:opacity-70 transition-opacity"
            >
              <Github size={14} />
              View All on GitHub
            </a>
          </div>
        </div>

        {/* Animated divider */}
        <div className="section-divider mb-0"></div>

        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>

        {/* Mobile GitHub link */}
        <motion.a
          href="https://github.com/infiniteloophole"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:hidden mt-12 inline-flex items-center gap-3 text-sm uppercase tracking-widest font-bold text-primary hover:opacity-70 transition-opacity"
        >
          <Github size={18} />
          View All Projects on GitHub
        </motion.a>
      </div>
    </section>
  );
}

function ProjectItem({ title, category, description, year, number, link }: { title: string; category: string; description: string; year: string; number: string; link?: string }) {
  return (
    <motion.a
      href={link || "#"}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 px-4 border-b border-foreground/20 hover:border-primary/50 overflow-hidden transition-colors duration-500"
    >
      {/* Hover background sweep */}
      <div className="absolute inset-0 bg-foreground/[0.03] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
      
      <div className="bg-number right-0 bottom-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
        {number}
      </div>
      
      <div className="flex flex-col gap-2 relative z-10">
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest font-bold text-primary">{year}</span>
          <span className="text-xs uppercase tracking-widest font-bold opacity-30">—</span>
          <span className="text-xs uppercase tracking-widest font-bold opacity-50">{category}</span>
        </div>
        <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-md">{description}</p>
      </div>
      
      <div className="flex items-center gap-4 mt-6 md:mt-0 relative z-10">
        <span className="text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">View Project</span>
        <div className="p-4 border border-current rounded-full transition-all duration-500 group-hover:bg-primary group-hover:text-foreground group-hover:border-primary group-hover:rotate-45">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </motion.a>
  );
}
