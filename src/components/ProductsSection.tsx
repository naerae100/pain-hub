import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cryoTech from "@/assets/Cryotherapy_technology.png";
import laserTech from "@/assets/Percutaneous Laser Disc Decompression_technology2.png";
import balloonTech from "@/assets/Balloon decompression_technology.png";
import orthobiologicsTech from "@/assets/Orthobiologics_technology.png";

const products = [
  {
    title: "Cryotherapy",
    description: "Precision cryoanalgesia systems",
    image: cryoTech,
    href: "/technologies/cryotherapy",
    accent: "from-blue-500/20",
  },
  {
    title: "Laser Systems",
    description: "Disc decompression lasers",
    image: laserTech,
    href: "/technologies/laser-systems",
    accent: "from-amber-500/20",
  },
  {
    title: "Balloon Decompression",
    description: "Epidural catheter systems",
    image: balloonTech,
    href: "/technologies/balloon-technology",
    accent: "from-violet-500/20",
  },
  {
    title: "Orthobiologics",
    description: "PRP & regenerative tools",
    image: orthobiologicsTech,
    href: "/technologies/orthobiologics",
    accent: "from-emerald-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const ProductsSection = () => {
  const MotionLink = motion(Link);
  return (
    <section id="products" className="section-container section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mb-12 md:mb-16"
      >
        <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20">
          Technology
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-6 mb-5">
          Advanced Technology Platforms
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
          IPMA evaluates and introduces technologies that align with modern minimally invasive care pathways.
        </p>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {products.map((product) => (
          <MotionLink
            key={product.title}
            to={product.href}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
          >
            {/* Image */}
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${product.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>

            {/* Content */}
            <div className="p-4 md:p-5">
              <h3 className="font-display text-base md:text-lg font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mb-3">
                {product.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                View details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductsSection;
