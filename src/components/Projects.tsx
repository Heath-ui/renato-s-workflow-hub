import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SEO Guide Generator via AI",
    stack: ["Make.com", "OpenAI API", "SurferSEO", "Asana"],
    description:
      "Automated pipeline triggered by Asana task movement — pulls SEO data from SurferSEO, generates comprehensive AI-powered SEO guides, and pushes briefs back to the creative team automatically.",
    color: "from-primary/20 to-primary/5",
    link: "https://docs.google.com/document/d/your-seo-guide-project",
  },
  {
    title: "Automated Client Management System",
    stack: ["Stripe", "Gmail API", "Google Apps Script"],
    description:
      "Seamless onboarding system where Stripe payment triggers personalized welcome email sequences, generates custom client folders, and updates a master tracking sheet.",
    color: "from-primary/15 to-transparent",
    link: "https://docs.google.com/document/d/your-acms-project",
  },
  {
    title: "Omni-Channel Social Media Promotion",
    stack: ["YouTube API", "Facebook Graph API", "X API", "n8n"],
    description:
      '"Create Once, Post Everywhere" workflow — new YouTube uploads automatically generate formatted posts for Facebook, Instagram, and X.com with extracted thumbnails and descriptions.',
    color: "from-primary/20 to-primary/5",
    link: "https://docs.google.com/document/d/your-social-media-project",
  },
  {
    title: "AI Content Repurposing Engine",
    stack: ["OpenAI", "Make.com", "Google Drive"],
    description:
      "Transforms long-form blog posts and transcripts into 10+ social media snippets, LinkedIn carousels, and email newsletters using AI — saving hours of manual editing.",
    color: "from-primary/15 to-transparent",
    link: "https://docs.google.com/document/d/your-content-engine-project",
  },
  {
    title: "Booking Reservation Automation",
    stack: ["GoHighLevel", "Google Calendar", "Twilio"],
    description:
      "High-conversion booking system with automated SMS/email reminders, 2-way calendar syncing, and automated follow-ups for no-shows to maximize appointment attendance.",
    color: "from-primary/20 to-primary/5",
    link: "https://docs.google.com/document/d/your-booking-project",
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
              className={`group relative p-6 md:p-8 rounded-xl border border-border bg-gradient-to-br ${project.color} hover:border-primary/40 hover:glow-box transition-all duration-300 block ${
                i === projects.length - 1 ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto" : ""
              }`}
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
