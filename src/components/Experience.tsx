import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    title: "Custom API Integrations",
    description: "Designed and deployed custom API connections between SaaS platforms using Make.com and n8n.",
  },
  {
    title: "GoHighLevel Ecosystem Management",
    description: "Built end-to-end sales pipelines and snapshots including automated appointment scheduling and lead nurturing.",
  },
  {
    title: "Enterprise Google Workspace Automation",
    description: "Developed Google Apps Script solutions to transform Google Sheets into automated databases with custom email reporting.",
  },
  {
    title: "Workflow Optimization",
    description: "Reduced manual data entry by up to 90% for clients by auditing processes and implementing logic via Zapier and Google Workflow.",
  },
];

const certifications = [
  "Zapier Certified Expert",
  "Make.com Academy Certification",
  "GoHighLevel Certified Administrator",
  "n8n Automation Engineering Certification",
  "Google Cloud Workflow Specialist Badge",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-primary">Background</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-3">Work Experience</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience timeline */}
          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-xl font-semibold">Workflow Automation Specialist</h3>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-8">Freelance / Contract</p>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
                >
                  <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-medium text-foreground mb-1">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-8">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-xl font-semibold">Certifications</h3>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="w-3 h-3 rounded-full bg-primary/60 shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech stack badges */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.5 }} className="mt-10">
              <h4 className="font-mono text-sm text-muted-foreground mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Zapier", "Make.com", "n8n", "GoHighLevel", "Google Apps Script",
                  "JavaScript", "REST APIs", "Webhooks", "Airtable", "OpenAI",
                  "Stripe", "Twilio", "Google Sheets",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary text-secondary-foreground hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
