import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Award, Menu, X, ChevronDown, Sparkles, UserPlus, HelpCircle, Users, Newspaper, Trophy, Image, ArrowUpRight } from "lucide-react";

export default function InfluencerHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegDropdownOpen, setIsRegDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsRegDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsRegDropdownOpen(false);
  }, [location.pathname]);

  const navTabs = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { 
      label: "Registration", 
      path: "/register",
      isDropdown: true,
      dropdownItems: [
        { label: "Super Heroes Title", path: "/register?category=super-heroes" },
        { label: "Super Women Title", path: "/register?category=super-women" },
        { label: "Business Awards", path: "/register?category=business" },
        { label: "Forever Miss India", path: "/register?category=miss-india" },
        { label: "Forever Mrs India", path: "/register?category=mrs-india" },
        { label: "Forever Miss Teen India", path: "/register?category=miss-teen-india" }
      ]
    },
    { label: "FAQ", path: "/nomination-guide" },
    { label: "Our Team", path: "/celebrities" },
    { label: "Media Coverage", path: "/news" },
    { label: "Contestant", path: "/winners-2025" },
    { label: "Gallery", path: "/global-awards" }
  ];

  return (
    <>
      <header
        id="influencer-header"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md border-stone-200/80 py-3" 
            : "bg-white border-stone-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <Award className="w-8 h-8 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-stone-900 leading-tight">
                Forever Star India
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                Influencer Portal
              </span>
            </div>
          </Link>

          {/* Center: Desktop Tabs (Visible on >= lg) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navTabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              
              if (tab.isDropdown) {
                return (
                  <div key={tab.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsRegDropdownOpen(!isRegDropdownOpen)}
                      className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest flex items-center space-x-1 transition-colors min-h-[44px] cursor-pointer ${
                        location.pathname.startsWith(tab.path)
                          ? "text-[#D4AF37]"
                          : "text-stone-700 hover:text-[#D4AF37]"
                      }`}
                      aria-expanded={isRegDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{tab.label}</span>
                      <ChevronDown size={14} className={`transform transition-transform duration-300 ${isRegDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isRegDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-2 w-64 bg-white border border-stone-200 shadow-xl py-2 z-50 rounded-none"
                        >
                          {tab.dropdownItems?.map((item) => (
                            <Link
                              key={item.label}
                              to={item.path}
                              onClick={() => setIsRegDropdownOpen(false)}
                              className="block px-4 py-2.5 text-xs font-sans text-stone-700 hover:bg-[#FAF8F2] hover:text-[#D4AF37] border-b border-stone-100 last:border-0 transition-colors"
                            >
                              ✦ {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={tab.label}
                  to={tab.path}
                  className={`relative px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest transition-colors min-h-[44px] flex items-center ${
                    isActive ? "text-stone-900" : "text-stone-700 hover:text-[#D4AF37]"
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeHeaderPill"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#D4AF37]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA button & Mobile Hamburger trigger */}
          <div className="flex items-center space-x-4">
            <Link
              to="/register"
              className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-stone-950 font-mono font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 shadow-md shadow-amber-500/10 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles size={12} className="text-stone-950" />
              <span>Register Now!</span>
            </Link>

            {/* Hamburger Button (< lg) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-stone-800 hover:text-[#D4AF37] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer (< lg) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />

            {/* Menu Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 w-80 max-w-full bg-white z-50 lg:hidden flex flex-col shadow-2xl border-l border-stone-200"
            >
              {/* Header inside drawer */}
              <div className="p-4 border-b border-stone-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                  <span className="font-serif text-sm font-bold text-stone-900 tracking-tight">Navigation</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-stone-500 hover:text-stone-800 focus:outline-none min-h-[44px]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation list */}
              <div className="flex-grow overflow-y-auto py-4 px-6 space-y-6">
                <div className="flex flex-col space-y-1">
                  {navTabs.map((tab) => {
                    if (tab.isDropdown) {
                      return (
                        <div key={tab.label} className="py-2 border-b border-stone-100">
                          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-400 block mb-2">
                            {tab.label} CATEGORIES
                          </span>
                          <div className="pl-2 space-y-2.5">
                            {tab.dropdownItems?.map((item) => (
                              <Link
                                key={item.label}
                                to={item.path}
                                className="block text-xs font-sans text-stone-700 hover:text-[#D4AF37] transition-colors py-1.5"
                              >
                                ✦ {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={tab.label}
                        to={tab.path}
                        className="block text-sm font-sans font-medium text-stone-800 hover:text-[#D4AF37] border-b border-stone-500/10 py-3.5 transition-colors"
                      >
                        {tab.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Requirement 3: Special Mobile Action "Online franchise application" link */}
                <div className="bg-[#FAF8F2] border border-[#D4AF37]/30 p-4 space-y-3">
                  <h4 className="font-serif text-xs font-bold text-stone-900 flex items-center space-x-1">
                    <Sparkles size={14} className="text-[#D4AF37]" />
                    <span>Partnership & Alliances</span>
                  </h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed font-light">
                    Apply as a city franchise manager or auditing chapter head for our 2026 Season.
                  </p>
                  <Link
                    to="/sponsorship"
                    className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37] hover:text-stone-900 transition-colors"
                  >
                    <span>Online franchise application</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Bottom Drawer CTA */}
              <div className="p-4 border-t border-stone-100 bg-stone-50">
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-stone-950 font-mono font-bold text-xs uppercase tracking-widest py-3 shadow-md"
                >
                  <Sparkles size={14} className="text-stone-950" />
                  <span>Register yourself now!</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
