import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Renato transformed our entire onboarding process. What used to take our team 3 hours per client now runs completely on autopilot. Incredible work.",
    name: "Sarah M.",
    role: "Operations Manager",
  },
  {
    quote: "The social media automation he built saved us 15+ hours a week. Our content workflow is seamless now — one upload and everything distributes automatically.",
    name: "James K.",
    role: "Marketing Director",
  },
  {
    quote: "His GoHighLevel expertise is unmatched. Our sales pipeline conversion jumped 40% after he optimized our booking and follow-up automations.",
    name: "Linda P.",
    role: "Agency Owner",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-primary">Social Proof</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-3">Testimonials</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
