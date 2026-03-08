import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cryoProcedure from "@/assets/Cryoanalgesia_procedure.png";
import balloonProcedure from "@/assets/Balloon decompression_procedure.png";
import laserProcedure from "@/assets/Percutaneous Laser Disc Decompression_procedure.png";
import orthobiologicProcedure from "@/assets/Orthobiologic Therapies_procedure.png";

const treatments = [
  {
    category: "Procedure",
    title: "Cryoanalgesia",
    description: "Targeted nerve freezing for acute and chronic pain with reversible, non-destructive nerve modulation.",
    image: cryoProcedure,
    href: "/procedures/cryoanalgesia",
    color: "bg-blue-500",
  },
  {
    category: "Procedure",
    title: "Epidural Balloon Decompression",
    description: "Catheter-based decompression and adhesiolysis for lumbar stenosis and epidural adhesions.",
    image: balloonProcedure,
    href: "/procedures/epidural-balloon-decompression",
    color: "bg-emerald-500",
  },
  {
    category: "Procedure",
    title: "Percutaneous Laser Disc Decompression",
    description: "Precision laser energy to reduce intradiscal pressure in contained disc herniations.",
    image: laserProcedure,
    href: "/procedures/pldd",
    color: "bg-violet-500",
  },
  {
    category: "Procedure",
    title: "Orthobiologic Therapies",
    description: "PRP and bone marrow-based treatments to support tissue healing and musculoskeletal repair.",
    image: orthobiologicProcedure,
    href: "/procedures/orthobiologic-therapies",
    color: "bg-amber-500",
  },
];

const TreatmentsSection = () => {
  const MotionLink = motion(Link);
  return (
    <section id="treatments" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20">
            Featured Procedures
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-6 mb-5">
            Procedural Platforms
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
            Structured training and clinical evidence support every procedure we teach.
          </p>
        </motion.div>

        {/* Treatment Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {treatments.map((treatment, index) => (
            <MotionLink
              key={treatment.title}
              to={treatment.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden relative bg-slate-50 flex items-center justify-center p-0">
                {/* Blurred Background to fill empty space elegantly */}
                <div
                  className="absolute inset-0 opacity-40 blur-2xl scale-110 bg-center bg-cover transition-transform duration-700 group-hover:scale-125"
                  style={{ backgroundImage: `url(${treatment.image})` }}
                />

                {/* Foreground Image */}
                <motion.img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-contain p-4 md:p-6 drop-shadow-2xl relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Gradient Overlay for aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent z-20 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${treatment.color}`} />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{treatment.category}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {treatment.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base mb-4 leading-relaxed line-clamp-2">
                  {treatment.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
