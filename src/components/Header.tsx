import { useState, useEffect } from "react";
import { Menu, X, Search, UserCircle2, ShoppingBag, PhoneCall, CalendarDays, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ipmaLogo from "@/assets/ipma-logo.webp";
import { Button } from "@/components/ui/button";

const topNavLinks = [
  { label: "My IPMA", href: "/auth", icon: UserCircle2 },
  { label: "Events", href: "/clinical-education", icon: CalendarDays },
  { label: "Contact Us", href: "/about#contact", icon: PhoneCall },
  { label: "Australia", href: "/about", icon: MapPin },
];

// Updated order to match screenshot
const mainNavLinks = [
  {
    label: "Clinical Education",
    href: "/clinical-education",
    children: [
      { label: "Clinical Reference Centres", href: "/clinical-education/reference-centres" },
    ],
  },
  {
    label: "Procedures",
    href: "/procedures",
    children: [
      { label: "Cryoanalgesia", href: "/procedures/cryoanalgesia" },
      { label: "Epidural Balloon Decompression", href: "/procedures/epidural-balloon-decompression" },
      { label: "Orthobiologic Therapies", href: "/procedures/orthobiologic-therapies" },
      { label: "PLDD", href: "/procedures/pldd" },
    ],
  },
  {
    label: "Technologies",
    href: "/technologies",
    children: [
      { label: "Cryotherapy", href: "/technologies/cryotherapy" },
      { label: "Balloon Technology", href: "/technologies/balloon-technology" },
      { label: "Laser Systems", href: "/technologies/laser-systems" },
      { label: "Orthobiologics", href: "/technologies/orthobiologics" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "About IPMA", href: "/about" },
];

const Header = () => {
  const MotionLink = motion(Link);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className={`w-full border-b border-white/10 text-[10px] sm:text-xs text-white/90 transition-all duration-300 ${isScrolled ? "hidden" : ""}`} style={{ backgroundColor: '#55575C' }}>
        <div className="section-container flex items-center justify-end h-8 gap-0">
          {topNavLinks.map((link, index) => (
            <span key={link.label} className="flex items-center">
              {index > 0 && <span className="mx-2 text-white/30 select-none">|</span>}
              <Link
                to={link.href}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200 py-1"
              >
                <link.icon className="w-3 h-3 text-white/70" />
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-effect shadow-sm" : "bg-background/80 backdrop-blur border-b border-border/60"
          }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <MotionLink
              to="/"
              className="flex-shrink-0 relative mr-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={ipmaLogo}
                alt="Interventional Pain Management Australia"
                className="h-9 md:h-11 w-auto"
              />
            </MotionLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-grow justify-end mr-8">
              {mainNavLinks.map((link, index) => (
                <div key={link.label} className="relative group">
                  <MotionLink
                    to={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex items-center gap-1 text-sm font-semibold text-foreground/90 hover:text-primary transition-colors duration-200 py-2"
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity ml-0.5" />}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </MotionLink>

                  {/* Dropdown */}
                  {link.children && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-background border border-border rounded-xl shadow-xl py-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-5 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors font-medium"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Icons Area simplified */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex items-center gap-5 text-foreground"
            >
              <button className="hover:text-primary transition-colors hover:scale-110 transform duration-200" aria-label="Search">
                <Search className="w-5 h-5 stroke-[2.5]" />
              </button>
              <Link to="/auth" className="hover:text-primary transition-colors hover:scale-110 transform duration-200" aria-label="Login">
                <UserCircle2 className="w-5 h-5 stroke-[2.5]" />
              </Link>
              <Link to="/cart" className="hover:text-primary transition-colors hover:scale-110 transform duration-200 relative" aria-label="Cart">
                <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 text-foreground rounded-xl hover:bg-secondary transition-colors ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden border-t border-border bg-background"
              >
                <div className="py-6 space-y-1">
                  {mainNavLinks.map((link, index) => (
                    <div key={link.label}>
                      <MotionLink
                        to={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="block px-4 py-3.5 text-lg font-bold text-foreground/80 hover:text-primary hover:bg-secondary rounded-xl transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </MotionLink>
                      {link.children && link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block pl-8 pr-4 py-2.5 text-base text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-xl transition-all duration-200 font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="pt-6 px-4 flex flex-col gap-4 border-t border-border mt-6">
                    <Link to="/auth" className="flex items-center gap-2 p-2 text-lg font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>
                      <UserCircle2 className="w-5 h-5" /> Sign In
                    </Link>
                    <Link to="/cart" className="flex items-center gap-2 p-2 text-lg font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>
                      <ShoppingBag className="w-5 h-5" /> Cart
                    </Link>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
