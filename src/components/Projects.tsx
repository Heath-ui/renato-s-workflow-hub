import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "n8n Automations",
    stack: ["n8n", "API Integrations", "Workflow Automation"],
    description:
      "Advanced workflow automations built with n8n — from data pipelines and webhook-driven processes to multi-step integrations across platforms.",
    color: "from-primary/20 to-primary/5",
    link: "https://docs.google.com/presentation/d/1HlejTO2fqqhti0l6WTuwFIbjIpFdxBV0XoLvg3YbsIs/edit?usp=sharing",
  },
  {
    title: "Make.com Automations",
    stack: ["Make.com", "Scenarios", "Multi-App Workflows"],
    description:
      "Visual automation scenarios on Make.com — connecting apps, transforming data, and orchestrating complex multi-step business processes.",
    color: "from-primary/15 to-transparent",
    link: "https://docs.google.com/presentation/d/1ykNdJPpomH8xdinVnnWQ0mQUZ9Y4u6sSX6T77fVyjJU/edit?usp=sharing",
  },
  {
    title: "Zapier Automations",
    stack: ["Zapier", "Zaps", "App Connectors"],
    description:
      "Streamlined Zapier workflows automating repetitive tasks — trigger-based actions, multi-step zaps, and seamless app-to-app data flow.",
    color: "from-primary/20 to-primary/5",
    link: "https://docs.google.com/presentation/d/17qTiD1NjUygcLDwqaOebTqgfCfl9H3DJRc2pXvz7-bE/edit?usp=sharing",
  },
  {
    title: "GoHighLevel Automations",
    stack: ["GoHighLevel", "CRM", "Marketing Automation"],
    description:
      "End-to-end GoHighLevel solutions — automated funnels, CRM workflows, appointment booking systems, and client communication pipelines.",
    color: "from-primary/15 to-transparent",
    link: "https://docs.google.com/presentation/d/1dvF_pZpvyir_HUO44jGLbpWWhQb1HIA2pJsxyTt7aLY/edit?usp=sharing",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-primary">Portfolio</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-3">Key Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-6 md:p-8 rounded-xl border border-border bg-gradient-to-br ${project.color} hover:border-primary/40 hover:glow-box transition-all duration-300 block`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-mono text-lg font-semibold pr-4">{project.title}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md border border-primary/20 text-primary bg-primary/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
