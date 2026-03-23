import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Snowflake, Minimize2, Zap, Dna } from "lucide-react";
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
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    icon: Snowflake,
  },
  {
    category: "Procedure",
    title: "Epidural Balloon Decompression",
    description: "Catheter-based decompression and adhesiolysis for lumbar stenosis and epidural adhesions.",
    image: balloonProcedure,
    href: "/procedures/epidural-balloon-decompression",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    icon: Minimize2,
  },
  {
    category: "Procedure",
    title: "Percutaneous Laser Disc Decompression",
    description: "Precision laser energy to reduce intradiscal pressure in contained disc herniations.",
    image: laserProcedure,
    href: "/procedures/pldd",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    icon: Zap,
  },
  {
    category: "Procedure",
    title: "Orthobiologic Therapies",
    description: "PRP and bone marrow-based treatments to support tissue healing and musculoskeletal repair.",
    image: orthobiologicProcedure,
    href: "/procedures/orthobiologic-therapies",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    icon: Dna,
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
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              {/* Image Container */}
              <div className="h-80 overflow-hidden relative bg-white flex items-center justify-center p-3">
                {index === 3 ? (
                  /* 4th image is landscape — crop into portrait frame */
                  <div className="w-[70%] h-full rounded-md overflow-hidden">
                    <motion.img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                ) : (
                  <motion.img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-contain"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`w-8 h-8 rounded-full ${treatment.bg} flex items-center justify-center`}>
                    <treatment.icon className={`w-4 h-4 ${treatment.color}`} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{treatment.category}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {treatment.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base mb-4 leading-relaxed line-clamp-2">
                  {treatment.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                  Read more →
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
