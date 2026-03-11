import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 16, suffix: "+", label: "GitHub Repos" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "+", label: "Years Learning" },
  { value: 100, suffix: "%", label: "Open Source" },
];

const timeline = [
  {
    period: "2024 — Present",
    title: "Freelance Developer & DevOps Learner",
    description: "Building portfolio projects, learning containerization, CI/CD pipelines, and cloud infrastructure. Contributing to open-source.",
    tech: ["Docker", "Linux", "GitHub Actions", "AWS"],
  },
  {
    period: "2023 — 2024",
    title: "BTech Computer Science",
    description: "Deep-diving into systems programming, networking fundamentals, and operating systems. Started experimenting with Android custom ROMs.",
    tech: ["Python", "Java", "Networking", "OS Concepts"],
  },
  {
    period: "2022 — 2023",
    title: "Self-Taught Developer",
    description: "Began the coding journey with web development. Learning HTML, CSS, JavaScript and building first projects. Fell in love with Linux.",
    tech: ["HTML/CSS", "JavaScript", "Linux", "Git"],
  },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center group"
    >
      <span ref={ref} className="text-5xl md:text-7xl font-bold text-gradient font-mono tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-xs uppercase tracking-widest font-bold mt-2 opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all duration-300">{label}</span>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto">

        {/* Stats Counter Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-xs uppercase tracking-widest font-bold text-primary mb-16 text-center">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        <div className="section-divider mb-32"></div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-lg">
            From curious self-learner to aspiring DevOps Engineer — here's how I've been building my path.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-foreground/10"></div>
          
          <div className="flex flex-col gap-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-20 py-12 group border-b border-foreground/5 last:border-b-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-14 w-2 h-2 -translate-x-[3.5px] rounded-full bg-foreground/30 group-hover:bg-primary group-hover:scale-150 transition-all duration-300">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-0 group-hover:opacity-40"></div>
                </div>
                
                <span className="text-xs font-mono text-primary font-bold tracking-wider">{item.period}</span>
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mt-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-mono font-bold border border-foreground/10 rounded-full hover:border-primary/50 hover:text-primary transition-colors duration-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
