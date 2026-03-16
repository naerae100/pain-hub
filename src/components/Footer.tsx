import { ArrowUp } from "lucide-react";
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

            {/* Social Links simplified */}
            <div className="flex gap-4">
              {[
                { label: "LinkedIn", href: "#", text: "in" },
                { label: "YouTube", href: "#", text: "YT" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-800 flex items-center justify-center text-blue-300 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 font-bold"
                  aria-label={social.label}
                >
                  {social.text}
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

          {/* Contact simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-8 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-6">
              <li>
                <a
                  href="tel:+61493519620"
                  className="flex flex-col gap-1 text-blue-300 hover:text-white transition-colors duration-200"
                >
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Phone</span>
                  <span className="text-lg font-medium">+61 493 519 620</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ipmaaustralia.com.au"
                  className="flex flex-col gap-1 text-blue-300 hover:text-white transition-colors duration-200 break-all"
                >
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Email</span>
                  <span className="text-lg font-medium">contact@ipmaaustralia.com.au</span>
                </a>
              </li>
              <li className="flex flex-col gap-1 text-blue-300">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Location</span>
                <span className="text-lg font-medium">Sydney, Australia</span>
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
        <p className="text-blue-400/40 text-[10px] mt-12 text-center leading-relaxed">
          Disclosures and important safety information. This website is intended for healthcare professionals only.
          All products and procedures are subject to regulatory requirements.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
