import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactCTASection = () => {
  return (
    <section id="contact" className="section-container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="surface-card text-center max-w-4xl mx-auto p-8 md:p-12 lg:p-14 relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 w-56 h-56 rounded-full bg-accent/10 blur-3xl" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8"
        >
          Partner with IPMA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          Whether you are expanding your procedural scope or establishing a new service, IPMA provides the clinical framework to support your journey.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex"
          >
            <Link to="/contact" className="btn-primary text-base md:text-lg px-9 py-4">
              Speak with our team →
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactCTASection;
