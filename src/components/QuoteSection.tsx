import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const QuoteSection = () => {
  return (
    <section className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="surface-card p-8 md:p-12 lg:p-14 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center relative z-10">
          <div>
            <span className="pill">Clinician Insight</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-6 mb-5 leading-tight">
              Evidence-first education for better outcomes.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              IPMA provides practical knowledge, training, and tools clinicians need to transform pain care.
            </p>
            <Link to="/registration" className="btn-primary">
              Join IPMA
            </Link>
          </div>

          <blockquote className="rounded-2xl border border-border bg-white/85 p-8">
            <p className="font-display text-xl md:text-2xl font-semibold leading-relaxed text-foreground mb-6">
              "Evidence-based practice is at the heart of everything we do. IPMA equips clinicians with
              the confidence and capability to lead modern pain care."
            </p>
            <footer className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Dr. Amit Lakkaraju, IR Pain Specialist
            </footer>
          </blockquote>
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
