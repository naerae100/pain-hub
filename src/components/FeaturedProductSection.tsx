import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cryoDevice from "@/assets/cryo-device.jpg";

const benefits = [
  "Minimally invasive procedure",
  "Immediate pain relief",
  "Outpatient-friendly",
  "Low-risk, high-benefit profile",
];

const FeaturedProductSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="surface-card p-0 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="pill w-fit mb-4"
              >
                Featured Equipment
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight"
              >
                Why Choose the CRYO-S Painless?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
              >
                The CRYO-S Painless represents the latest advancement in cryoanalgesia
                technology, designed for precision and patient comfort.
              </motion.p>

              {/* Benefits */}
              <ul className="space-y-4 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <Link to="/technologies/cryotherapy" className="btn-primary group">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-auto"
            >
              <img
                src={cryoDevice}
                alt="CRYO-S Painless Device"
                className="w-full h-full object-cover"
              />
              {/* Overlay with Temperature */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,32%,12%)/0.6] to-transparent flex items-end justify-start p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <div className="text-5xl md:text-6xl font-display font-semibold mb-2">-70°C</div>
                  <p className="text-white/80 font-medium">Precise temperature control</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProductSection;
