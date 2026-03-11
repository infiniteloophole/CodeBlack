import { motion } from "framer-motion";
import { Terminal, Container, Cloud, Smartphone, Film, Music } from "lucide-react";

const techStack = [
  { category: "Systems & OS", items: ["Linux", "Bash", "Shell Scripting", "System Administration"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Nginx"] },
  { category: "Languages & Web", items: ["Python", "TypeScript", "JavaScript", "React", "Node.js"] },
  { category: "Tools & Workflow", items: ["Git", "GitHub Actions", "VS Code", "Vim"] },
];

const interests = [
  { icon: Terminal, label: "Linux Systems", description: "Tinkering with distros, kernel configs, and system internals" },
  { icon: Container, label: "Containerization", description: "Building reproducible, portable dev environments with Docker" },
  { icon: Cloud, label: "Cloud Infra", description: "Designing scalable, automated cloud architectures" },
  { icon: Smartphone, label: "Android ROMs", description: "Flashing, customizing, and experimenting with custom ROMs" },
  { icon: Film, label: "Movies", description: "Cinema lover — always up for a good thriller or sci-fi" },
  { icon: Music, label: "Rock Music", description: "Fueled by guitar riffs and drum solos" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 relative overflow-hidden bg-foreground text-background">
      <div className="bg-number top-1/2 left-0 -translate-y-1/2 opacity-[0.03] text-background">02</div>
      
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-primary mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary"></div>
        </motion.div>

        {/* Bio + Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-6">The Short Version</h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
              I'm a <span className="text-primary font-medium">BTech Computer Science student</span> and freelance tech enthusiast with a deep passion for open-source technologies and systems infrastructure. I don't just write code — I build environments where code thrives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-6">My Philosophy</h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
              I believe the best software isn't just well-written — it's <span className="text-primary font-medium">well-deployed</span>. My goal is to bridge the gap between development and operations, making systems that are automated, resilient, and effortlessly scalable.
            </p>
          </motion.div>
        </div>

        {/* Expanded Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-32 max-w-4xl"
        >
          <h3 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-6">The Longer Story</h3>
          <div className="text-lg md:text-xl font-light leading-relaxed opacity-80 space-y-6">
            <p>
              My journey into tech started with curiosity — taking apart systems, flashing custom Android ROMs, and wondering how everything connects beneath the surface. That curiosity evolved into a career path: <span className="text-primary font-medium">DevOps Engineering</span>.
            </p>
            <p>
              Today, I spend my time working with Linux servers, containerizing applications with Docker, orchestrating with Kubernetes, and automating CI/CD pipelines. I'm passionate about infrastructure-as-code and making deployment feel like magic.
            </p>
            <p>
              Beyond the terminal, I'm a movie lover who enjoys a good thriller or sci-fi film, and a rock music fan — there's something about guitar riffs that keeps the creative energy flowing while debugging at 2 AM.
            </p>
            <p>
              I actively contribute to open-source and share my experiments on <a href="https://github.com/infiniteloophole" target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline underline-offset-4 hover:opacity-80 transition-opacity">GitHub</a>, where I have 16+ repositories spanning web apps, DevOps tools, and experimental projects.
            </p>
          </div>
        </motion.div>

        {/* What I'm Into — Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-32"
        >
          <h3 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-12">What I'm Into</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 border border-background/10 rounded-lg hover:border-primary/40 transition-colors duration-300 group"
              >
                <item.icon size={28} className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-bold mb-2">{item.label}</h4>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack — Categorized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-12">Tech Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {techStack.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: groupIndex * 0.1 }}
              >
                <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">{group.category}</h4>
                <div className="flex flex-col gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
