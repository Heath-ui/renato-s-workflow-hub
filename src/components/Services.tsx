import { motion } from "framer-motion";
import { Workflow, Plug, Bot, Mail, Database, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end business process automation using Zapier, Make.com, n8n, and Google Cloud Workflow to eliminate manual tasks.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Custom REST & webhook integrations connecting your SaaS stack — CRMs, payment systems, marketing tools, and more.",
  },
  {
    icon: Bot,
    title: "AI-Powered Workflows",
    description: "Leverage OpenAI and AI APIs to build intelligent content generation, repurposing, and data processing pipelines.",
  },
  {
    icon: Database,
    title: "CRM & Pipeline Setup",
    description: "GoHighLevel and Lead Connector ecosystem management — sales pipelines, lead nurturing, and appointment scheduling.",
  },
  {
    icon: Mail,
    title: "Communication Automation",
    description: "Email sequences, SMS reminders, Slack/Discord bots, and omni-channel notification systems that run on autopilot.",
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    description: "Google Sheets automation, Airtable databases, and custom reporting dashboards with automated data pipelines.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-primary">What I Do</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-3">Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:glow-box transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
