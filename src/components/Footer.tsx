import { Linkedin, Youtube, Phone, Mail, MapPin, ArrowUp, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ipmaLogo from "@/assets/ipma-logo.webp";

const navigation = {
  main: [
    { name: "Clinical Education", href: "/clinical-education" },
    { name: "Procedures", href: "/procedures" },
    { name: "Technologies", href: "/technologies" },
    { name: "Resources", href: "/resources" },
    { name: "About IPMA", href: "/about" },
  ],
  legal: [
    { name: "Terms", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-950 pt-20 pb-10 border-t border-blue-900">
      {/* Disclaimer */}
      <div className="section-container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 p-6 rounded-2xl bg-blue-900/50 border border-blue-800 text-blue-200"
        >
          <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm leading-relaxed opacity-90">
            Disclosures and important safety information. This website is intended for healthcare professionals only.
            All products and procedures are subject to regulatory requirements.
          </p>
        </motion.div>
      </div>

      <div className="section-container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link to="/" className="inline-block mb-8">
              <img
                src={ipmaLogo}
                alt="IPMA"
                className="h-12 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-blue-200 max-w-md mb-10 leading-relaxed text-lg font-light">
              Australia's hub for advanced interventional pain management education,
              techniques, and tools. Empowering clinicians to make a difference.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-800 flex items-center justify-center text-blue-300 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-8 tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-blue-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-8 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:0493519620"
                  className="flex items-center gap-4 text-blue-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">0493 519 620</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ipmaustralia.com.au"
                  className="flex items-center gap-4 text-blue-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">contact@ipmaustralia.com.au</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-blue-300">
                <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Brisbane, Australia</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-blue-900/50 mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-400 text-sm font-medium">
            © 2025 Interventional Pain Management Australia. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            {/* Legal Links */}
            <div className="flex gap-8">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-blue-400 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
