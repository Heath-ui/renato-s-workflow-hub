import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-primary">Get Started</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-3">Let's Work Together</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ready to automate your workflows and save hours every week? Let's connect and discuss how I can help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href="mailto:renatobalbutinii@gmail.com"
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:glow-box transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <p className="text-sm font-medium">renatobalbutinii@gmail.com</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>

          <motion.a
            href="tel:+639244472502"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:glow-box transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-1">Phone</p>
              <p className="text-sm font-medium">0924 447 2502</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Location</p>
              <p className="text-sm font-medium">Calamba City, Philippines</p>
            </div>
          </motion.div>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:glow-box transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-1">LinkedIn</p>
              <p className="text-sm font-medium">Connect with me</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
