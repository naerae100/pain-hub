import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import workshopImage from "@/assets/Ultrasound-guided cryoanalgesia workshop Brisbane.png.png";
import cryoDevice from "@/assets/Cryo-S-Painless_1.jpg";
import procedureHands from "@/assets/Cryoanalgesia procedure in OR.png";

const features = [
  {
    id: 1,
    label: "Workshops",
    title: "Hands-on Training",
    cta: "Explore workshops",
    image: workshopImage,
    href: "/clinical-education",
    accent: "from-blue-600/20 to-indigo-600/10",
  },
  {
    id: 2,
    label: "Technologies",
    title: "Precision Equipment",
    cta: "View technologies",
    image: cryoDevice,
    href: "/technologies",
    accent: "from-emerald-600/20 to-teal-600/10",
  },
  {
    id: 3,
    label: "Procedures",
    title: "Minimally Invasive Care",
    cta: "View procedures",
    image: procedureHands,
    href: "/procedures",
    accent: "from-violet-600/20 to-purple-600/10",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
};

const FeatureCards = () => {
  const MotionLink = motion(Link);
  return (
    <section className="section-container py-10">
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {features.map((feature, index) => (
          <MotionLink
            key={feature.id}
            to={feature.href}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
          >
            {/* Image with gradient overlay */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              />
              {/* Subtle gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20 w-fit">
                {feature.label}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-800 leading-tight group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                {feature.cta} <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </MotionLink>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;

