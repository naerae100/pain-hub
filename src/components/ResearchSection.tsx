import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroSurgery from "@/assets/hero-surgery.jpg";
import procedureHands from "@/assets/procedure-hands.jpg";
import cryoDevice from "@/assets/cryo-device.jpg";
import medicalTraining from "@/assets/medical-training.jpg";

const articles = [
  {
    category: "Research",
    title: "Ultrasound-guided Percutaneous Cryoneurolysis for Rib Fracture Pain",
    image: procedureHands,
    href: "/resources/research-papers-and-articles",
  },
  {
    category: "Article",
    title: "Bedside percutaneous cryoneurolysis technique for acute pain",
    image: heroSurgery,
    href: "/resources/research-papers-and-articles",
  },
  {
    category: "Research",
    title: "Cryoneurolysis for Pain Control in Older Adults",
    image: medicalTraining,
    href: "/resources/research-papers-and-articles",
  },
  {
    category: "Clinical Study",
    title: "The value of cryoanalgesia in modern pain management",
    image: cryoDevice,
    href: "/resources/research-papers-and-articles",
  },
];

const ResearchSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const MotionLink = motion(Link);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="research" className="py-20 overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="pill">Research</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 mb-4">
              Research and articles.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              Evidence-based practice is central to interventional pain management.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:flex gap-3"
          >
            <button
              onClick={() => scroll("left")}
              className="nav-arrow-dark"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="nav-arrow-dark"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scrollable Articles */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-5 sm:px-8 lg:px-12 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {articles.map((article, index) => (
          <MotionLink
            key={index}
            to={article.href}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group flex-shrink-0 w-[300px] md:w-[340px] surface-card p-5"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Image */}
            <div className="aspect-[4/3] rounded-[1.25rem] overflow-hidden bg-secondary mb-5">
              <motion.img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Content */}
            <span className="tag-primary">{article.category}</span>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300 mt-2">
              {article.title}
            </h3>
            <span className="link-arrow text-sm font-semibold">
              Read more <ArrowRight className="w-4 h-4" />
            </span>
          </MotionLink>
        ))}
      </div>
    </section>
  );
};

export default ResearchSection;
