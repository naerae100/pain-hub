import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import workshopHero from "@/assets/IPMA_Hands-On Clinical Workshop.png";
import proceduresHero from "@/assets/Cryoanalgesia procedure in OR.png";
import cryoProcedure from "@/assets/Cryoanalgesia_procedure.png";

const slides = [
  {
    id: 1,
    eyebrow: "Workshops",
    title: "Hands-On Clinical Workshops",
    subtitle: "Structured procedural training across pain, spine, orthopaedics, vascular, and colorectal care.",
    cta: "Explore workshops",
    ctaSecondary: "View schedule",
    href: "/clinical-education",
    secondaryHref: "/clinical-education?filter=past",
    image: workshopHero,
  },
  {
    id: 2,
    eyebrow: "Procedures",
    title: "Cryoanalgesia",
    subtitle: "Targeted nerve modulation for durable pain relief using controlled low temperatures — a minimally invasive alternative.",
    cta: "Learn more",
    ctaSecondary: "Clinical evidence",
    href: "/procedures/cryoanalgesia",
    secondaryHref: "/resources",
    image: cryoProcedure,
  },
  {
    id: 3,
    eyebrow: "Procedures",
    title: "Minimally Invasive Procedures",
    subtitle: "Explore our procedural platforms — Cryoanalgesia, Epidural Balloon Decompression, PLDD, and Orthobiologics.",
    cta: "View Procedures",
    ctaSecondary: "Clinical evidence",
    href: "/procedures",
    secondaryHref: "/resources",
    image: proceduresHero,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="section-container pt-10 pb-12">
      <div className="relative">
        {/* Main Carousel */}
        <div className="relative hero-slide min-h-[800px] lg:min-h-[600px]">
          <div className="absolute inset-0 pattern-grid opacity-30" />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <div className="flex flex-col h-full lg:grid lg:grid-cols-[1.1fr_1fr]">
                {/* Image - Order 1 on Mobile */}
                <div className="relative h-[40%] lg:h-full order-1 lg:order-2">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 lg:from-[hsl(222,32%,12%)/0.6] via-transparent to-transparent" />
                  <div className="hidden lg:block absolute bottom-6 left-6 glass-effect rounded-2xl px-4 py-3">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      IPMA
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      Interventional Pain Management Australia
                    </div>
                  </div>
                </div>

                {/* Content - Order 2 on Mobile */}
                <div className="relative px-6 py-8 md:p-12 lg:p-14 flex flex-col justify-center lg:justify-between h-[60%] lg:h-full order-2 lg:order-1">
                  <div className="hidden lg:block absolute -top-24 -left-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative z-10 text-center lg:text-left">
                    <span className="pill mx-auto lg:mx-0">{slides[currentSlide].eyebrow}</span>
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="mt-4 lg:mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05]"
                    >
                      {slides[currentSlide].title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-4 lg:mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-6 lg:mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
                  >
                    <Link to={slides[currentSlide].href} className="btn-primary w-full sm:w-auto">
                      {slides[currentSlide].cta}
                    </Link>
                    <Link to={slides[currentSlide].secondaryHref} className="btn-outline w-full sm:w-auto">
                      {slides[currentSlide].ctaSecondary}
                    </Link>
                  </motion.div>

                  {/* Stats Capsules - Hidden on small mobile, visible on md+ */}
                  <div className="mt-8 hidden md:grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                    {[
                      { value: "30+ yrs", label: "clinical leadership" },
                      { value: "50+", label: "trained clinicians" },
                      { value: "Evidence", label: "driven practice" },
                    ].map((item) => (
                      <div
                        key={item.value}
                        className="rounded-xl border border-slate-100 bg-white/80 px-4 py-3"
                      >
                        <div className="text-base font-semibold text-foreground">
                          {item.value}
                        </div>
                        <div>{item.label}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute bottom-5 right-5 z-10 flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="nav-arrow"
              aria-label="Previous slide"
            >
              <span className="text-lg">‹</span>
            </button>
            <button
              onClick={nextSlide}
              className="nav-arrow"
              aria-label="Next slide"
            >
              <span className="text-lg">›</span>
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
