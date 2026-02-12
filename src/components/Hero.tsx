import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding grid-bg overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-mono tracking-widest uppercase text-primary border border-primary/30 rounded-full">
            Workflow Automation Specialist
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-mono text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient glow-text">Renato Balbutin II</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I design, build, and optimize complex business workflows — connecting 
          disparate systems through API integrations and low-code platforms to 
          eliminate manual tasks and drive operational efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors glow-box"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { value: "90%", label: "Manual Tasks Reduced" },
            { value: "5+", label: "Certifications" },
            { value: "10+", label: "Platforms Mastered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-mono font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
