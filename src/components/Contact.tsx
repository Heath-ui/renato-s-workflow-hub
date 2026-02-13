import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Calendar, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const CALENDLY_URL = "https://calendly.com/renatobalbutinii/30min";
const EMAIL = "renatobalbutinii@gmail.com";

const Contact = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-primary">Get Started</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-3">Let's Work Together</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ready to automate your workflows and save hours every week? Book a meeting or send me a message directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Contact Details */}
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="space-y-5">
            <h3 className="font-mono text-xl font-semibold mb-6">Contact Details</h3>

            <a
              href="mailto:renatobalbutinii@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:glow-box transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="text-sm font-medium">renatobalbutinii@gmail.com</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="tel:+639244472502"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:glow-box transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                <p className="text-sm font-medium">0924 447 2502</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                <p className="text-sm font-medium">Calamba City, Philippines</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/renato-balbutinii/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:glow-box transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium">Connect with me</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>

          {/* Right - Action Buttons */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col justify-center gap-6">
            <button
              onClick={() => setShowCalendly(true)}
              className="group flex items-center gap-5 p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/40 hover:glow-box transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-mono text-lg font-semibold mb-1">Book a Meeting</h3>
                <p className="text-sm text-muted-foreground">Schedule a 30-minute call via Calendly to discuss your automation needs.</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </button>

            <a
              href={`mailto:${EMAIL}?subject=Automation%20Inquiry`}
              className="group flex items-center gap-5 p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/40 hover:glow-box transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-mono text-lg font-semibold mb-1">Send a Message</h3>
                <p className="text-sm text-muted-foreground">Email me directly at {EMAIL} and I'll respond within 24 hours.</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Calendly Dialog */}
      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="max-w-3xl h-[80vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-mono">Schedule a Meeting</DialogTitle>
          </DialogHeader>
          <iframe
            src={CALENDLY_URL}
            className="w-full flex-1 border-0"
            style={{ height: "calc(80vh - 60px)" }}
            title="Calendly Scheduling"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
