import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, Trophy } from "lucide-react";

export default function PremiumHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleToggleMenu = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("toggle-mobile-menu", handleToggleMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("toggle-mobile-menu", handleToggleMenu);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Pageants", path: "/register?category=miss-india" },
    { label: "Awards", path: "/global-awards" },
    { label: "Gallery", path: "/#gallery-carousel-section" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header
      id="premium-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-3"
          : "bg-[#FAFAFA]/80 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Left: Text Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <Trophy className="w-5 h-5 text-[#D4AF37] transition-transform duration-500 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm md:text-base font-bold tracking-[0.2em] text-[#171717] uppercase">
                Forever Star India
              </span>
              <span className="text-[7.5px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                Elite National Registry
              </span>
            </div>
          </Link>

          {/* Center: Tabs */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => {
              const isHash = item.path.startsWith("/#");
              const isCurrent = isHash
                ? location.pathname === "/" && location.hash === item.path.substring(1)
                : location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-[11px] font-mono uppercase tracking-[0.2em] font-semibold transition-colors duration-300 relative py-2 ${
                    isCurrent 
                      ? "text-[#D4AF37]" 
                      : "text-stone-600 hover:text-[#D4AF37]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isCurrent && (
                    <motion.span
                      layoutId="activeHeaderTab"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Gold CTA Button & Mobile Trigger */}
          <div className="flex items-center space-x-4">
            <Link
              to="/register"
              className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-stone-950 font-mono font-bold text-[10px] uppercase tracking-[0.2em] px-6 py-3 shadow-md shadow-amber-500/10 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all duration-300"
            >
              <Sparkles size={11} className="animate-pulse" />
              <span>Register Now</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-[#D4AF37] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-stone-950/70 backdrop-blur-md z-[99] md:hidden"
            />

            {/* Content Drawer: 100% Solid Opaque Background at z-[100] */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-[100] p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div className="space-y-6">
                {/* Top cohesive brand bar without dividing lines */}
                <div className="flex items-center justify-between pb-2 bg-white">
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-bold tracking-[0.15em] text-[#171717] uppercase">
                      FSIA
                    </span>
                    <span className="text-[7px] font-mono tracking-widest text-[#D4AF37] font-bold">
                      National Gateway
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-stone-500 hover:text-[#171717] cursor-pointer focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Navigation List with clean, spacious py-4 flex spacing and no border-b */}
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-stone-700 hover:text-[#D4AF37] transition-colors focus:outline-none"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer CTA */}
              <div className="space-y-4">
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-stone-950 font-mono font-bold text-center text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-2 shadow-md"
                >
                  <Sparkles size={12} />
                  <span>Register Now</span>
                </Link>
                <p className="text-[8px] font-mono tracking-[0.2em] text-stone-400 text-center uppercase">
                  Federation of Star India
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
