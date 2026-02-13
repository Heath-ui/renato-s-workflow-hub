import { motion } from "framer-motion";

import openaiLogo from "@/assets/tools/openai.png";
import zapierLogo from "@/assets/tools/zapier.png";
import airtableLogo from "@/assets/tools/airtable.png";
import asanaLogo from "@/assets/tools/asana.png";
import gasLogo from "@/assets/tools/google-apps-script.png";
import gworkspaceLogo from "@/assets/tools/google-workspace.png";
import highlevelLogo from "@/assets/tools/highlevel.jpg";
import hubspotLogo from "@/assets/tools/hubspot.jpg";
import makeLogo from "@/assets/tools/make.png";
import n8nLogo from "@/assets/tools/n8n.png";

const tools = [
  { name: "OpenAI", logo: openaiLogo },
  { name: "Zapier", logo: zapierLogo },
  { name: "Make.com", logo: makeLogo },
  { name: "n8n", logo: n8nLogo },
  { name: "GoHighLevel", logo: highlevelLogo },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Airtable", logo: airtableLogo },
  { name: "Asana", logo: asanaLogo },
  { name: "Google Apps Script", logo: gasLogo },
  { name: "Google Workspace", logo: gworkspaceLogo },
];

const Tools = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-primary">Tech Stack</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-3">Tools & Platforms</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The automation platforms, APIs, and tools I use daily to build powerful workflows.
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Row 1 - scrolls left */}
        <div className="marquee-row mb-6">
          <div className="marquee-track">
            {[...tools, ...tools].map((tool, i) => (
              <motion.div
                key={`${tool.name}-${i}`}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex-shrink-0 mx-4 flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] transition-all duration-300 cursor-pointer"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 w-10 object-contain rounded-md transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-mono text-sm font-medium whitespace-nowrap">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="marquee-row-reverse">
          <div className="marquee-track-reverse">
            {[...tools, ...tools].map((tool, i) => (
              <motion.div
                key={`${tool.name}-rev-${i}`}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex-shrink-0 mx-4 flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] transition-all duration-300 cursor-pointer"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 w-10 object-contain rounded-md transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-mono text-sm font-medium whitespace-nowrap">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
