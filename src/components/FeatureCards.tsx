import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, Activity } from "lucide-react";
import newWorkshopImage from "@/assets/newworkshop.webp";
import educationHero from "@/assets/Education of minimally invasive procedures for pain management.png";
import proceduresHero from "@/assets/Cryoanalgesia procedure in OR (1).png";

const features = [
  {
    id: 1,
    label: "Workshop",
    title: "Australian Cryoanalgesia Workshop",
    cta: "Learn more",
    image: newWorkshopImage,
    href: "/clinical-education#workshops",
    icon: Calendar,
  },
  {
    id: 2,
    label: "Education",
    title: "Clinical Education",
    cta: "Learn more",
    image: educationHero,
    href: "/clinical-education",
    icon: BookOpen,
  },
  {
    id: 3,
    label: "Procedures",
    title: "Interventional Procedures",
    cta: "Learn more",
    image: proceduresHero,
    href: "/procedures",
    icon: Activity,
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
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3] bg-slate-50">
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-contain"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20 w-fit">
                <feature.icon className="w-3.5 h-3.5" />
                {feature.label}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-800 leading-tight group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300 mt-2">
                {feature.cta} →
              </span>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </MotionLink>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
