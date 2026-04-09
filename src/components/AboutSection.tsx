import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import workshopImg from "@/assets/Ultrasound-guided cryoanalgesia workshop Sydney_3.png.png";

const focusPoints = [
  "Improve patient outcomes",
  "Support safe adoption",
  "Enable procedural excellence",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/5 to-blue-400/5 rounded-full blur-3xl" />

      <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20">
            Who We Are
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6 leading-tight">
            A National Hub for Interventional Practice
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5">
            <strong className="text-foreground">Interventional Pain Management Australia (IPMA)</strong> brings
            clinicians together to advance procedural medicine through structured education, clinical evidence, and carefully selected technologies.
          </p>

          {/* Our Focus */}
          <div className="mb-6">
            <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Our focus:</p>
            <ul className="space-y-2">
              {focusPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-base md:text-lg text-foreground/90">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Whether it's workshops, new procedures, or shared insights, IPMA is all about supporting the people who make a difference in pain care.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/clinical-education#workshops" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
              Explore workshops
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-foreground font-semibold text-sm border border-slate-200 hover:border-primary/50 hover:text-primary transition-all duration-300">
              Our mission
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { value: "2025", label: "Founded" },
              { value: "Australia", label: "Clinician network" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 px-5 py-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="text-xl md:text-2xl font-bold text-foreground">{item.value}</div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-foreground/80 font-semibold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Imagery */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src={workshopImg}
              alt="Interventional training session"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
