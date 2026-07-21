import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Sparkles, ArrowRight, Search, Trophy, MapPin, FileText, ChevronRight, CornerDownLeft, Sparkle } from "lucide-react";

// Structure for Global Search Registry
interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Winner" | "City Chapter" | "News & Media";
  path: string;
  metadata: string;
}

const searchDatabase: SearchItem[] = [
  // National Crown Winners
  {
    id: "w-neeharika",
    title: "Neeharika Bethanapalli",
    subtitle: "Miss India 2025 (Hyderabad, Telangana) - National Titleholder",
    category: "Winner",
    path: "/",
    metadata: "Neeharika Bethanapalli Miss India 2025 Hyderabad Telangana National Titleholder beauty pageant crown winners circle",
  },
  {
    id: "w-bhumika",
    title: "Bhumika Songara",
    subtitle: "Mrs India 2025 (Indore, Madhya Pradesh) - Elite National Title",
    category: "Winner",
    path: "/",
    metadata: "Bhumika Songara Mrs India 2025 Indore Madhya Pradesh Elite National Title handloom revival project winners circle",
  },
  {
    id: "w-tanvi",
    title: "Tanvi Yatin Khairnar",
    subtitle: "Miss Teen India 2025 (Nashik, Maharashtra) - Youth Laurel",
    category: "Winner",
    path: "/",
    metadata: "Tanvi Yatin Khairnar Miss Teen India 2025 Nashik Maharashtra Youth Laurel classical dance public speaking winners circle",
  },
  // SubPage Laureates
  {
    id: "w-aditya",
    title: "Dr. Aditya Vardhan",
    subtitle: "Science & Clean Tech Leader (Bangalore, Karnataka)",
    category: "Winner",
    path: "/winners-2025",
    metadata: "Dr. Aditya Vardhan Science Clean Tech Leader Bangalore Karnataka clean energy environmental scholar FS-w1 Hall of Fame",
  },
  {
    id: "w-meenakshi",
    title: "Meenakshi Iyengar",
    subtitle: "Cultural Preservationist (Madurai, Tamil Nadu)",
    category: "Winner",
    path: "/winners-2025",
    metadata: "Meenakshi Iyengar Cultural Preservationist Madurai Tamil Nadu classical arts temple restoration FS-w2 Hall of Fame",
  },
  {
    id: "w-kabir-natasha",
    title: "Kabir & Natasha Malhotra",
    subtitle: "Co-founders, AgriConnect (Pune, Maharashtra)",
    category: "Winner",
    path: "/winners-2025",
    metadata: "Kabir Natasha Malhotra Co-founders AgriConnect Pune Maharashtra agriculture tech rural farming FS-w3 Hall of Fame",
  },
  {
    id: "w-rishi",
    title: "Rishi Raj Singh",
    subtitle: "Under-30 Digital Visionary (Jaipur, Rajasthan)",
    category: "Winner",
    path: "/winners-2025",
    metadata: "Rishi Raj Singh Under-30 Digital Visionary Jaipur Rajasthan startup coding machine learning FS-w4 Hall of Fame",
  },
  {
    id: "w-devendra",
    title: "Prof. Devendra Joshi",
    subtitle: "Lifetime Educational Honor (Nainital, Uttarakhand)",
    category: "Winner",
    path: "/winners-2025",
    metadata: "Prof. Devendra Joshi Lifetime Educational Honor Nainital Uttarakhand academy professor education FS-w5 Hall of Fame",
  },
  {
    id: "w-sunita",
    title: "Sunita Deshmukh",
    subtitle: "Grassroots Medical Pioneer (Nagpur, Maharashtra)",
    category: "Winner",
    path: "/winners-2025",
    metadata: "Sunita Deshmukh Grassroots Medical Pioneer Nagpur Maharashtra healthcare rural medicine clinical FS-w6 Hall of Fame",
  },

  // City & State Chapters
  {
    id: "c-bangalore",
    title: "Bangalore City Chapter",
    subtitle: "City Chapter Winner: Dr. Aditya Vardhan (Science & Clean Tech)",
    category: "City Chapter",
    path: "/winners/city-wise",
    metadata: "Bangalore City Chapter Karnataka Bangalore municipal award science clean tech winners circle",
  },
  {
    id: "c-madurai",
    title: "Madurai City Chapter",
    subtitle: "City Chapter Winner: Meenakshi Iyengar (Art & Culture)",
    category: "City Chapter",
    path: "/winners/city-wise",
    metadata: "Madurai City Chapter Tamil Nadu Madurai art culture temple town winners circle",
  },
  {
    id: "c-pune",
    title: "Pune City Chapter",
    subtitle: "City Chapter Winner: Kabir & Natasha Malhotra (Social Impact)",
    category: "City Chapter",
    path: "/winners/city-wise",
    metadata: "Pune City Chapter Maharashtra Pune municipal crown agriculture social impact winners circle",
  },
  {
    id: "c-jaipur",
    title: "Jaipur City Chapter",
    subtitle: "City Chapter Winner: Rishi Raj Singh (Youth Leadership)",
    category: "City Chapter",
    path: "/winners/city-wise",
    metadata: "Jaipur City Chapter Rajasthan Jaipur municipal crown pink city youth leadership winners circle",
  },
  {
    id: "s-karnataka",
    title: "Karnataka State Board",
    subtitle: "State Winner Chapters: Bangalore, Mysore",
    category: "City Chapter",
    path: "/winners/state-wise",
    metadata: "Karnataka State Board karnataka state board chapters Bangalore Mysore",
  },
  {
    id: "s-tamilnadu",
    title: "Tamil Nadu State Board",
    subtitle: "State Winner Chapters: Chennai, Madurai, Coimbatore",
    category: "City Chapter",
    path: "/winners/state-wise",
    metadata: "Tamil Nadu State Board tamil nadu state board Chennai Madurai Coimbatore",
  },
  {
    id: "s-maharashtra",
    title: "Maharashtra State Board",
    subtitle: "State Winner Chapters: Mumbai, Pune, Nagpur",
    category: "City Chapter",
    path: "/winners/state-wise",
    metadata: "Maharashtra State Board maharashtra state board Mumbai Pune Nagpur",
  },
  {
    id: "s-rajasthan",
    title: "Rajasthan State Board",
    subtitle: "State Winner Chapters: Jaipur, Udaipur, Jodhpur",
    category: "City Chapter",
    path: "/winners/state-wise",
    metadata: "Rajasthan State Board rajasthan state board Jaipur Udaipur Jodhpur",
  },

  // News and media articles
  {
    id: "n-portals",
    title: "FSIA 14th Edition Opens Global Portals For Indian Talent",
    subtitle: "Media coverage regarding Europe research grants and fellowships",
    category: "News & Media",
    path: "/news",
    metadata: "FSIA 14th Edition Opens Global Portals For Indian Talent national business weekly fellowships europe clean-tech news press releases",
  },
  {
    id: "n-gold-standard",
    title: "How FSIA Has Created A Gold Standard In Peer-Reviewed Awards",
    subtitle: "Analysis of blind juries and physical field audit practices",
    category: "News & Media",
    path: "/news",
    metadata: "How FSIA Has Created A Gold Standard In Peer-Reviewed Awards the chronicle express peer-reviewed blind jury regional physical audits news press",
  },
  {
    id: "n-recap",
    title: "Recap: FSIA 2025 Grand Ceremony Gathers Celebrities",
    subtitle: "Report on the grand gala ceremony held in Mumbai",
    category: "News & Media",
    path: "/news",
    metadata: "Recap FSIA 2025 Grand Ceremony Gathers Celebrities vanguard times grand ceremony mumbai celebrities 85 honorees news press",
  },
];

export default function PremiumHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Search State Variables
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const modalInputRef = useRef<HTMLInputElement>(null);

  // Suggested quick tags to populate search
  const popularSuggestions = [
    "Neeharika Bethanapalli",
    "Miss India 2025",
    "Dr. Aditya Vardhan",
    "Bangalore",
    "State Board",
    "News Coverage",
  ];

  // Close dropdown on outside click & listen to mobile menu triggers from Bottom Bar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false);
      }
    }
    
    function handleToggleMobileMenu() {
      setIsOpen((prev) => !prev);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("toggle-mobile-menu", handleToggleMobileMenu);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("toggle-mobile-menu", handleToggleMobileMenu);
    };
  }, []);

  // Handle scroll effect for sticky transparent header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu & search modal on page transition
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Handle Search Query filtering
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const filtered = searchDatabase.filter((item) =>
      item.metadata.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  // Keyboard shortcut for Esc key to close search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Autofocus the input field
      setTimeout(() => {
        modalInputRef.current?.focus();
      }, 100);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  const projectsList = [
    { name: "Social Impact Initiatives", path: "/projects#social" },
    { name: "Digital & Tech Innovation", path: "/projects#tech" },
    { name: "Art, Fashion & Culture", path: "/projects#art" },
    { name: "Youth Leadership Awards", path: "/projects#youth" },
  ];

  const leftTabs = [
    { name: "About Us", path: "/about" },
    { name: "Our Projects", path: "/projects", isDropdown: true },
    { name: "Global Awards", path: "/global-awards" },
  ];

  const rightTabs = [
    { name: "News Coverage", path: "/news" },
    { name: "Celebrities", path: "/celebrities" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header
        id="premium-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm py-3"
            : "bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-stone-200/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* DESKTOP ONLY HEADER BAR (Visible >= lg) */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center relative h-14">
            {/* LEFT GROUP (Desktop only) */}
            <nav className="flex items-center justify-start gap-6 lg:gap-8 whitespace-nowrap">
              {leftTabs.map((tab) =>
                tab.isDropdown ? (
                  <div key={tab.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                      className={`flex items-center space-x-1 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all hover:text-[#D4AF37] focus:outline-none py-2 cursor-pointer ${
                        location.pathname.startsWith(tab.path) ? "text-[#D4AF37]" : "text-stone-700"
                      }`}
                    >
                      <span>{tab.name}</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          isProjectsOpen ? "rotate-180 text-[#D4AF37]" : "text-stone-400"
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isProjectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 bg-white border border-stone-200 shadow-xl overflow-hidden py-2 rounded-none z-50"
                        >
                          {projectsList.map((project) => (
                            <Link
                              key={project.name}
                              to={project.path}
                              onClick={() => setIsProjectsOpen(false)}
                              className="block px-4 py-2.5 text-[10px] uppercase tracking-wider text-stone-700 hover:bg-stone-50 hover:text-[#D4AF37] transition-all font-sans font-medium"
                            >
                              {project.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={tab.name}
                    to={tab.path}
                    className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all hover:text-[#D4AF37] py-2 relative group ${
                      location.pathname === tab.path ? "text-[#D4AF37]" : "text-stone-700"
                    }`}
                  >
                    {tab.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D4AF37] transform origin-left transition-transform duration-300 ${
                        location.pathname === tab.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                )
              )}
            </nav>

            {/* CENTER GROUP LOGO (Desktop only) */}
            <div className="flex items-center justify-center px-6 whitespace-nowrap">
              <Link
                to="/"
                id="header-home-logo"
                className="flex items-center space-x-3 group focus:outline-none"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-[#D4AF37] flex items-center justify-center font-serif text-xl font-bold text-[#D4AF37] transition-colors group-hover:border-stone-900 group-hover:text-stone-900">
                    F
                  </div>
                  <Sparkles className="absolute -top-1.5 -right-1.5 w-4 h-4 text-[#D4AF37] animate-pulse" />
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="font-serif text-base sm:text-lg tracking-widest font-semibold text-stone-900 group-hover:text-[#D4AF37] transition-colors">
                    FOREVER STAR INDIA
                  </span>
                  <span className="text-[8px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase font-bold mt-0.5">
                    AWARDS & PAGEANT
                  </span>
                </div>
              </Link>
            </div>

            {/* RIGHT GROUP (Desktop only) */}
            <div className="flex items-center justify-end gap-6 lg:gap-8 whitespace-nowrap">
              {rightTabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all hover:text-[#D4AF37] py-2 relative group ${
                    location.pathname === tab.path ? "text-[#D4AF37]" : "text-stone-700"
                  }`}
                >
                  {tab.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D4AF37] transform origin-left transition-transform duration-300 ${
                      location.pathname === tab.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}

              {/* Desktop Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-700 hover:text-[#D4AF37] py-2 flex items-center gap-1.5 focus:outline-none cursor-pointer transition-all"
                title="Search Registry"
              >
                <Search size={14} className="text-[#D4AF37]" />
                <span>Search</span>
              </button>

              {/* Premium Gold Register Button */}
              <Link
                id="header-register-btn"
                to="/register"
                className="bg-[#D4AF37] text-black px-5 py-2.5 rounded-none font-bold text-[10px] uppercase tracking-[0.15em] hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-sm"
              >
                REGISTER NOW
              </Link>
            </div>
          </div>

          {/* COMPACT MOBILE BAR (Visible only on < lg screens) */}
          <div className="lg:hidden flex items-center justify-between relative h-14 w-full">
            {/* Clickable center/left FSIA logo */}
            <Link
              to="/"
              id="mobile-header-home-logo"
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-8 h-8 border border-[#D4AF37] flex items-center justify-center font-serif text-sm font-bold text-[#D4AF37] transition-colors">
                  F
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-serif text-xs tracking-widest font-semibold text-stone-900">
                  FOREVER STAR INDIA
                </span>
                <span className="text-[7px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                  AWARDS & PAGEANT
                </span>
              </div>
            </Link>

            {/* Mobile Actions Group on Right */}
            <div className="flex items-center space-x-1.5">
              {/* Mobile Dedicated Search Trigger Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-stone-700 hover:text-[#D4AF37] p-2 focus:outline-none transition-colors"
                aria-label="Open Search Overlay"
              >
                <Search size={20} />
              </button>

              {/* Animated Hamburger toggle button */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="text-stone-700 hover:text-stone-950 p-2 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>

        {/* MOBILE SLIDE-OUT DRAWER / BACKDROP MENU */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop Overlay with Fade transition */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-[990] lg:hidden"
              />

              {/* Drawer panel with Spring slide from right */}
              <motion.div
                id="mobile-navigation-drawer"
                initial={{ x: "100%", opacity: 0.95 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#FAF9F6] border-l border-stone-200/50 shadow-2xl z-[1000] lg:hidden flex flex-col p-6 overflow-y-auto"
              >
                {/* Drawer Top Header with 'X' Close button */}
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-4 mb-6 shrink-0">
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-semibold tracking-wider text-stone-950">
                      FSIA Menu
                    </span>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold mt-0.5">
                      National Registry Panel
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 -mr-2 text-stone-500 hover:text-stone-950 focus:outline-none transition-colors"
                    aria-label="Close menu drawer"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Vertical menu links with py-3 and minimum touch target size */}
                <nav className="flex flex-col space-y-1 flex-grow">
                  
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm uppercase tracking-widest font-semibold text-stone-800 hover:text-[#D4AF37] transition-colors border-b border-stone-200/40 flex items-center justify-between min-h-[44px]"
                  >
                    <span>Home</span>
                    <ChevronRight size={14} className="text-stone-400" />
                  </Link>

                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm uppercase tracking-widest font-semibold text-stone-800 hover:text-[#D4AF37] transition-colors border-b border-stone-200/40 flex items-center justify-between min-h-[44px]"
                  >
                    <span>About Us</span>
                    <ChevronRight size={14} className="text-stone-400" />
                  </Link>

                  {/* Expandable Accordion for "Our Projects" */}
                  <div className="border-b border-stone-200/40 py-1">
                    <button
                      onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                      className="w-full py-3 flex items-center justify-between text-sm uppercase tracking-widest font-semibold text-stone-800 hover:text-[#D4AF37] transition-colors text-left focus:outline-none min-h-[44px]"
                    >
                      <span>Our Projects</span>
                      <ChevronDown
                        size={15}
                        className={`text-stone-400 transition-transform duration-300 ${isMobileProjectsOpen ? "rotate-180 text-[#D4AF37]" : ""}`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileProjectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-4 border-l-2 border-[#D4AF37]/50 mt-1 mb-2 space-y-1 flex flex-col"
                        >
                          {[
                            { name: "Forever Miss India 2026", path: "/projects#miss-india" },
                            { name: "Mrs India 2026", path: "/projects#mrs-india" },
                            { name: "Fashion Week 2026", path: "/projects#fashion" },
                          ].map((project) => (
                            <Link
                              key={project.name}
                              to={project.path}
                              onClick={() => setIsOpen(false)}
                              className="py-2.5 text-xs uppercase tracking-wider text-stone-600 hover:text-[#D4AF37] transition-colors font-sans font-semibold min-h-[44px] flex items-center"
                            >
                              ✦ {project.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/global-awards"
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm uppercase tracking-widest font-semibold text-stone-800 hover:text-[#D4AF37] transition-colors border-b border-stone-200/40 flex items-center justify-between min-h-[44px]"
                  >
                    <span>Global Awards</span>
                    <ChevronRight size={14} className="text-stone-400" />
                  </Link>

                  <Link
                    to="/news"
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm uppercase tracking-widest font-semibold text-stone-800 hover:text-[#D4AF37] transition-colors border-b border-stone-200/40 flex items-center justify-between min-h-[44px]"
                  >
                    <span>News Coverage</span>
                    <ChevronRight size={14} className="text-stone-400" />
                  </Link>

                  <Link
                    to="/celebrities"
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm uppercase tracking-widest font-semibold text-stone-800 hover:text-[#D4AF37] transition-colors border-b border-stone-200/40 flex items-center justify-between min-h-[44px]"
                  >
                    <span>Celebrities</span>
                    <ChevronRight size={14} className="text-stone-400" />
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm uppercase tracking-widest font-semibold text-stone-800 hover:text-[#D4AF37] transition-colors border-b border-stone-200/40 flex items-center justify-between min-h-[44px]"
                  >
                    <span>Contact Us</span>
                    <ChevronRight size={14} className="text-stone-400" />
                  </Link>

                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsSearchOpen(true);
                    }}
                    className="w-full py-3 flex items-center justify-between text-sm uppercase tracking-widest font-semibold text-stone-800 hover:text-[#D4AF37] transition-colors text-left border-b border-stone-200/40 focus:outline-none min-h-[44px]"
                  >
                    <span className="flex items-center space-x-2">
                      <Search size={16} className="text-[#D4AF37]" />
                      <span>Search Registry</span>
                    </span>
                    <ChevronRight size={14} className="text-stone-400" />
                  </button>

                </nav>

                {/* Prominent full-width gold "Register Now" CTA button */}
                <div className="pt-6 border-t border-stone-200/80 mt-6 flex flex-col shrink-0">
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 bg-[#D4AF37] text-black font-bold text-center text-xs uppercase tracking-[0.15em] hover:bg-stone-900 hover:text-white transition-all duration-300"
                  >
                    REGISTER NOW
                  </Link>
                  <span className="text-[8px] text-stone-400 font-mono text-center mt-3 tracking-[0.2em] uppercase font-bold">
                    Federation of Star India
                  </span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* GLOBAL SEARCH MODAL OVERLAY (Light-themed, highly visual, matching pure luxury theme) */}
      <AnimatePresence>
        {isSearchOpen && (
          <div id="search-modal-backdrop" className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto">
            
            {/* Blurry Backdrop covering entire screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="fixed inset-0 bg-stone-900/35 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Dialog container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl w-full mx-4 bg-[#FAF9F6] border border-stone-200/80 shadow-2xl p-6 sm:p-8 rounded-none z-[110] mt-24 mb-16 overflow-visible"
            >
              
              {/* Corner branding sparkles */}
              <div className="absolute -top-3.5 -left-3.5 w-7 h-7 bg-[#D4AF37] flex items-center justify-center">
                <Sparkle size={12} className="text-black" />
              </div>

              {/* Close Button with hover effect */}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 p-2 focus:outline-none transition-colors cursor-pointer"
                aria-label="Close search overlay"
              >
                <X size={20} />
              </button>

              {/* Search Header */}
              <div className="mb-6 space-y-1 pr-8">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  Federation Star Search Gateway
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-stone-900">
                  Search National Registry
                </h3>
              </div>

              {/* Interactive Search Bar input */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-4 text-[#D4AF37]" size={20} />
                <input
                  ref={modalInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type winners, cities, states, or news articles..."
                  className="w-full bg-white border border-stone-200/80 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 rounded-none py-3.5 pl-12 pr-12 text-sm text-stone-900 placeholder-stone-400 focus:outline-none transition-all font-sans font-normal"
                />
                
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-3.5 p-1 text-stone-400 hover:text-stone-900 cursor-pointer focus:outline-none"
                    aria-label="Clear query text"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Zero-State: Show Suggestion Tags */}
              {!searchQuery && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-stone-400 font-bold block">
                      Trending / Suggested Searches
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSuggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setSearchQuery(suggestion)}
                        className="bg-white border border-stone-200 text-stone-600 hover:border-[#D4AF37] hover:text-[#D4AF37] text-[10px] font-mono tracking-wider px-3.5 py-2 transition-all cursor-pointer rounded-none uppercase"
                      >
                        ✦ {suggestion}
                      </button>
                    ))}
                  </div>
                  
                  {/* Informational help bar */}
                  <div className="pt-6 border-t border-stone-200/60 flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <CornerDownLeft size={11} className="text-[#D4AF37]" />
                      <span>Press enter or click to select records</span>
                    </span>
                    <span>ESC to exit registry</span>
                  </div>
                </div>
              )}

              {/* Matches Results Container */}
              {searchQuery && (
                <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-1">
                  
                  <div className="flex items-center justify-between border-b border-stone-200/60 pb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-stone-400 font-bold">
                      Matched Credentials ({searchResults.length})
                    </span>
                    <span className="text-[9px] text-[#D4AF37] font-mono font-bold">Live Search Active</span>
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="space-y-2.5">
                      {searchResults.map((item) => {
                        // Dynamically assign category icons
                        const Icon =
                          item.category === "Winner"
                            ? Trophy
                            : item.category === "City Chapter"
                            ? MapPin
                            : FileText;

                        return (
                          <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-start justify-between p-4 bg-white border border-stone-100 hover:border-[#D4AF37] hover:bg-stone-50 transition-all duration-200 cursor-pointer group"
                          >
                            <div className="flex items-start space-x-3.5">
                              <div className="w-10 h-10 border border-stone-200 bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-all">
                                <Icon size={16} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                              </div>
                              <div className="space-y-0.5 pr-2">
                                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                                  {item.category}
                                </span>
                                <h4 className="font-serif text-sm font-medium text-stone-900 leading-tight">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-stone-500 font-light leading-normal line-clamp-1">
                                  {item.subtitle}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all self-center shrink-0">
                              <span className="text-[9px] font-mono uppercase tracking-widest mr-1 pt-0.5">View</span>
                              <ChevronRight size={14} className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12 space-y-2">
                      <p className="text-xs text-stone-400 font-mono">
                        No matches found for "{searchQuery}" in our National Registry.
                      </p>
                      <p className="text-[10px] text-stone-400 font-light max-w-sm mx-auto leading-normal">
                        Verify names spelling or use broader criteria (such as state chapters like "Karnataka" or titles like "Mrs India").
                      </p>
                    </div>
                  )}

                  {/* Informative footer for results */}
                  <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span>Sovereign Security Encrypted</span>
                    <span>Total Index Records: {searchDatabase.length}</span>
                  </div>

                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
