import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import { Award, Sparkles, ArrowRight, Star, Compass, ShieldCheck, CheckCircle2, ArrowUpRight, Users, Trophy, ChevronRight, ChevronLeft, Quote } from "lucide-react";

// Standard, high-performance 3D Parallax Tilt Card Component using Framer Motion (safely compatible with React 19)
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Maps coordinates to degrees of rotation
  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate mouse position relative to card center
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={`relative select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}

const successStories = [
  {
    id: 1,
    name: "Ishani Sen",
    title: "Miss India 2024 Winner",
    city: "Kolkata, West Bengal",
    quote: "FSIA didn't just give me a crown; it created an international launchpad for my sustainable couture collection. The national press and prestige associated with the award helped me secure collaborations with luxury textile houses across Europe.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    impact: "Launched Global Fashion Line & Raised ₹1.2Cr for handloom weavers"
  },
  {
    id: 2,
    name: "Karan Adani",
    title: "Tech Innovation Honor 2024",
    city: "Ahmedabad, Gujarat",
    quote: "The physically audited credential vetting process of FSIA gave my clean-tech venture unmatched institutional trust and investor visibility. Being peer-reviewed by an eminent board of experts changed how stakeholders view our environmental models.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    impact: "Secured Series A funding and deployed solar microgrids in 80+ rural chapters"
  },
  {
    id: 3,
    name: "Dr. Preeti Ahluwalia",
    title: "Lifetime Medical Honor 2024",
    city: "Chandigarh, Punjab",
    quote: "FSIA is a pure celebration of grassroot impact. This peer-reviewed platform proved that true laureates belong to all corners of India. The recognition has bolstered our rural medicine clinics, allowing us to expand healthcare access to over 50,000 residents.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    impact: "Established 5 new rural primary clinics and treated 50,000+ patients"
  }
];

function SuccessStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 220, damping: 25 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 220, damping: 25 },
        opacity: { duration: 0.25 }
      }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const story = successStories[currentIndex];

  return (
    <section id="success-stories-section" className="py-12 sm:py-24 bg-[#FAF8F2] border-t border-stone-200/80 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
            Laureate Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 leading-tight">
            Success Stories & Impact
          </h2>
          <p className="font-sans text-stone-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-light">
            Read inspiring testimonials from previous year winners whose initiatives scaled nationally after the grand coronation.
          </p>
        </div>

        {/* Carousel Slider Card */}
        <div className="relative min-h-[460px] sm:min-h-[380px] bg-white border border-stone-200 p-6 sm:p-10 lg:p-12 shadow-md flex flex-col justify-between">
          
          {/* Top Sparkling Decorator */}
          <div className="absolute top-4 right-4 flex items-center space-x-1.5 text-[#D4AF37]">
            <Sparkles size={16} />
            <span className="text-[9px] font-mono tracking-widest uppercase font-bold">FSIA ALUMNI NETWORK</span>
          </div>

          <div className="relative flex-grow flex items-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-6 sm:gap-10 items-center w-full"
              >
                {/* Winner Image with Golden Border */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mx-auto md:mx-0 shrink-0 border border-stone-200 p-2 bg-[#FAF9F6]">
                  <div className="absolute inset-0 border border-[#D4AF37]/40 m-3 pointer-events-none" />
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="space-y-4 text-center md:text-left">
                  {/* Quote Icon */}
                  <Quote size={32} className="text-[#D4AF37]/35 mx-auto md:mx-0" />
                  
                  {/* Actual Quote text */}
                  <p className="font-serif text-sm sm:text-base lg:text-lg text-stone-800 italic font-light leading-relaxed">
                    "{story.quote}"
                  </p>

                  <div className="space-y-1">
                    <h4 className="font-serif text-base sm:text-lg font-medium text-stone-900">{story.name}</h4>
                    <p className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                      {story.title} &bull; {story.city}
                    </p>
                  </div>

                  {/* Impact Tag */}
                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-left">
                    <span className="text-[8px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold px-2 py-0.5 border border-[#D4AF37]/30 bg-amber-50 shrink-0 text-center sm:text-left">
                      REAL WORLD IMPACT
                    </span>
                    <span className="text-xs text-stone-600 font-sans font-light italic leading-normal text-center sm:text-left">
                      {story.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Controls Panel */}
          <div className="flex items-center justify-between border-t border-stone-100 pt-6 mt-6 shrink-0">
            {/* Dots Indicators */}
            <div className="flex space-x-1.5">
              {successStories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 transition-all duration-300 rounded-none cursor-pointer ${
                    idx === currentIndex ? "bg-[#D4AF37] w-5" : "bg-stone-200 hover:bg-stone-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons (Touch Targets >= 44px) */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 border border-stone-200 bg-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 flex items-center justify-center text-stone-700 cursor-pointer focus:outline-none"
                aria-label="Previous Success Story"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 border border-stone-200 bg-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 flex items-center justify-center text-stone-700 cursor-pointer focus:outline-none"
                aria-label="Next Success Story"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default function HomePage() {
  const [activeWinnersTab, setActiveWinnersTab] = useState<"Miss India" | "Mrs India" | "Miss Teen India" | "Global Awards">("Miss India");
  const [isMissionExpanded, setIsMissionExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 70, damping: 15 } },
  };

  const showcaseWinners = {
    "Miss India": [
      {
        id: "w1",
        name: "Neeharika Bethanapalli",
        title: "Miss India 2025",
        location: "Hyderabad, Telangana",
        desc: "Crowned as the national face of grace and intelligence, representing India with distinction in her social development initiatives.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
        badge: "National Titleholder",
        year: "2025 Winners Circle",
      },
      {
        id: "w1-alumni",
        name: "Ishani Sen",
        title: "Miss India 2024 Winner",
        location: "Kolkata, West Bengal",
        desc: "An international model and advocate for sustainable handloom weavers, scaling heritage crafts on global runways.",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
        badge: "Alumni Titleholder",
        year: "2024 Winners Circle",
      }
    ],
    "Mrs India": [
      {
        id: "w2",
        name: "Bhumika Songara",
        title: "Mrs India 2025",
        location: "Indore, Madhya Pradesh",
        desc: "Celebrating modern womanhood, leadership, and professional excellence while actively piloting regional handloom revival projects.",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
        badge: "Elite National Title",
        year: "2025 Winners Circle",
      },
      {
        id: "w2-alumni",
        name: "Meenakshi Sharma",
        title: "Mrs India 2024 Runner-Up",
        location: "Jaipur, Rajasthan",
        desc: "Driving vocational micro-credits for small craft startups run by female artisans and home-makers across rural hubs.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
        badge: "Alumni Runner-Up",
        year: "2024 Winners Circle",
      }
    ],
    "Miss Teen India": [
      {
        id: "w3",
        name: "Tanvi Yatin Khairnar",
        title: "Miss Teen India 2025",
        location: "Nashik, Maharashtra",
        desc: "An inspiration for the next generation, honored for her exceptional public speaking prowess and classical dance accolades.",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
        badge: "Youth Laurel Title",
        year: "2025 Winners Circle",
      },
      {
        id: "w3-alumni",
        name: "Ananya Panday",
        title: "Teen Pioneer 2024",
        location: "Mumbai, Maharashtra",
        desc: "Recognized for her digital-safety initiatives, leading cyber-bullying awareness programs in schools nationally.",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600",
        badge: "Alumni Pioneer",
        year: "2024 Winners Circle",
      }
    ],
    "Global Awards": [
      {
        id: "w4",
        name: "Dr. Aditya Vardhan",
        title: "Global Science Laureate 2025",
        location: "Bangalore, Karnataka",
        desc: "Pioneering bio-enzyme catalysts for cost-efficient water filtration, bringing clean health standards to rural settlements.",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
        badge: "Global Achievement",
        year: "2025 Winners Circle",
      },
      {
        id: "w4-alumni",
        name: "Karan Adani",
        title: "Tech Innovation Honor 2024",
        location: "Ahmedabad, Gujarat",
        desc: "Recognized for solar microgrid systems, providing off-grid electricity to remote mountain classrooms and local health centers.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
        badge: "Global Tech Honor",
        year: "2024 Winners Circle",
      }
    ]
  };

  return (
    <div id="homepage-root" className="bg-[#FAF9F6] text-stone-900 min-h-screen overflow-x-hidden w-full max-w-full font-sans">
      
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-[92vh] flex items-center justify-center overflow-visible pt-32 pb-20"
      >
        {/* Soft grid/dot background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
        
        {/* Diagonal soft cream accent lights */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FAF4E8]/60 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FAF4E8]/60 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8 max-w-4xl mx-auto"
          >
            {/* Top Elite Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white border border-stone-200/80 rounded-none px-4 py-1.5 shadow-sm"
            >
              <Star className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-600 font-bold">
                14th National Annual Pageant & Award Chapter
              </span>
            </motion.div>

            {/* High Contrast Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-stone-900 leading-[1.12]"
            >
              India's Biggest <br />
              <span className="font-semibold text-stone-900">
                Beauty Pageant & <span className="text-[#D4AF37] relative inline-block font-light">Award Show</span>
              </span>
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              Establishing the supreme national benchmark for elegance, talent, and professional achievement. We seek out, certify, and elevate India’s stellar dreamers and visionary creators.
            </motion.p>

            {/* Dual Luxurious Calls-to-Action */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link
                id="hero-primary-cta"
                to="/register"
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-stone-900 text-black hover:text-white font-bold px-8 py-4.5 rounded-none text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
              >
                <span>Register for 2026</span>
                <ArrowRight size={14} />
              </Link>
              
              <Link
                id="hero-secondary-cta"
                to="/projects"
                className="w-full sm:w-auto bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 font-bold px-8 py-4.5 rounded-none text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <span>Explore Categories</span>
                <ArrowUpRight size={14} className="text-[#D4AF37]" />
              </Link>
            </motion.div>

            {/* Credibility Ribbon */}
            <motion.div
              variants={itemVariants}
              className="pt-12 border-t border-stone-200 max-w-xl mx-auto"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-400 block mb-4 font-bold">
                Recognized & Authenticated Across
              </span>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-stone-500 font-serif text-xs italic tracking-widest font-medium">
                <span>✦ All Major States</span>
                <span>✦ Ministry Registries</span>
                <span>✦ Elite Media Partnerships</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SCALE & IMPACT GRID (STATS) */}
      <section
        id="stats-section"
        className="py-12 sm:py-24 bg-[#FAF8F2] border-y border-stone-200/80 relative overflow-visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
              Audition Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 leading-tight">
              A National Footprint of Absolute Scale
            </h2>
            <p className="font-sans text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
              Our vetting protocol spans all territories, evaluating talent with absolute integrity, scientific matrices, and uncompromised objectivity.
            </p>
          </div>

          {/* Scale Grid: 4-card grid on desktop, horizontal snap carousel on mobile */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { value: "10,000+", label: "Participants", desc: "Annual physical dossiers logged and screened by national boards." },
              { value: "4,000+", label: "City Auditions", desc: "Local chapters actively organizing multi-tier casting arrays." },
              { value: "900+", label: "Finalists", desc: "Eminent candidates advanced to regional board juries." },
              { value: "1 Winner", label: "Per City", desc: "Strictly one title awarded per municipality to ensure prestige." },
            ].map((card, idx) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white border border-stone-200 p-8 flex flex-col justify-between text-center transition-all duration-300 hover:shadow-md h-full relative group shrink-0 w-[85vw] sm:w-[45vw] md:w-auto snap-center md:shrink-1"
              >
                {/* Visual accent top line */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div className="space-y-4">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-[#D4AF37] block">
                    {card.value}
                  </span>
                  <h3 className="font-sans text-[11px] font-bold text-stone-900 tracking-[0.2em] uppercase">
                    {card.label}
                  </h3>
                  <div className="w-8 h-[1px] bg-stone-200 mx-auto" />
                  <p className="text-xs text-stone-500 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Audition Routing Link */}
          <div className="flex justify-center">
            <Link
              to="/auditions"
              id="stats-audition-cta"
              className="inline-flex items-center space-x-3 bg-white hover:bg-stone-50 border border-stone-200 hover:border-stone-400 px-6 sm:px-8 py-3.5 transition-all duration-300 shadow-sm"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-sans text-xs font-semibold tracking-wide text-stone-800 uppercase">
                View Official Selection Auditions Process
              </span>
              <ArrowRight size={14} className="text-[#D4AF37]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 2.5. AWARD SEASON TIMELINE (VERTICAL VISUAL TRACKER) */}
      <section
        id="award-season-timeline-section"
        className="py-12 sm:py-24 bg-white border-b border-stone-200/80 relative overflow-visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
              Sovereign Calendar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 leading-tight">
              Award Season Timeline & Milestones
            </h2>
            <p className="font-sans text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
              Track key filing deadlines, regional physical auditing calendars, jury evaluation chapters, and the final grand coronation broadcast dates.
            </p>
          </div>

          {/* Interactive Timeline Layout */}
          <div className="max-w-4xl mx-auto relative overflow-visible">
            
            {/* Main Vertical Center Connecting Line */}
            <div className="absolute left-4 md:left-1/2 top-1.5 bottom-1.5 w-[2px] bg-stone-100 transform -translate-x-1/2 pointer-events-none hidden md:block" />
            <div className="absolute left-4 top-1.5 bottom-1.5 w-[2px] bg-stone-100 pointer-events-none md:hidden" />

            <div className="space-y-12 relative overflow-visible">
              {[
                {
                  phase: "Phase 01",
                  title: "Nomination Registry & Profile Logging",
                  date: "August 1 – September 30, 2026",
                  status: "ACTIVE NOW",
                  statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
                  badgeColor: "bg-emerald-500 ring-emerald-100",
                  desc: "Interested nominators and candidates must complete their official profile registry. Submit a premium biographical dossier, state-level accomplishments, and verified media press links.",
                  actionText: "Log Nomination Profile",
                  actionPath: "/register"
                },
                {
                  phase: "Phase 02",
                  title: "Regional Physical Audition Arrays",
                  date: "October 15 – November 30, 2026",
                  status: "UPCOMING",
                  statusColor: "text-amber-700 bg-amber-50 border-amber-200",
                  badgeColor: "bg-amber-500 ring-amber-100",
                  desc: "On-ground regional casting calls and municipality audit teams conduct local verification screening. Candidate talent arrays are checked physically by designated domain experts.",
                  actionText: "View Audition Protocols",
                  actionPath: "/winners/city-wise"
                },
                {
                  phase: "Phase 03",
                  title: "Eminent Board Portfolio Vetting",
                  date: "December 10 – December 28, 2026",
                  status: "SCHEDULED",
                  statusColor: "text-stone-600 bg-stone-100 border-stone-200",
                  badgeColor: "bg-stone-400 ring-stone-100",
                  desc: "Blind jury chapters assemble to review regional winner portfolios. All selection indices are evaluated using our non-commercial, peer-reviewed evaluation framework.",
                  actionText: "Review Board Standards",
                  actionPath: "/about"
                },
                {
                  phase: "Phase 04",
                  title: "National Finalist Declarations",
                  date: "January 15, 2027",
                  status: "SCHEDULED",
                  statusColor: "text-stone-600 bg-stone-100 border-stone-200",
                  badgeColor: "bg-stone-400 ring-stone-100",
                  desc: "Announcement of the official top 900 finalists representing all municipalities. Finalist rosters are permanently registered on the national database search directory.",
                  actionText: "Search Finalist Directory",
                  actionPath: "/"
                },
                {
                  phase: "Phase 05",
                  title: "Grand Annual Coronation Gala",
                  date: "February 20, 2027",
                  status: "GRAND FINALE",
                  statusColor: "text-stone-900 bg-amber-100 border-[#D4AF37]/50",
                  badgeColor: "bg-[#D4AF37] ring-amber-200",
                  desc: "The pinnacle ceremony gathering celebrities, industrialists, and state delegates in Mumbai. Broadcasters stream the coronation crown awards live globally with 85M+ expected impressions.",
                  actionText: "Sponsorship Deck 2027",
                  actionPath: "/sponsorship"
                }
              ].map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start overflow-visible ${
                      isEven ? "" : "md:rtl"
                    }`}
                  >
                    
                    {/* Visual Status Indicator Node with Pulse Ring */}
                    <div className="absolute left-4 md:left-1/2 top-4 w-5 h-5 -translate-x-1/2 z-20 pointer-events-none">
                      <div className={`w-full h-full rounded-full ${item.badgeColor} ring-4 transition-all duration-500`} />
                      {item.status === "ACTIVE NOW" && (
                        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                      )}
                    </div>

                    {/* Timeline Content Block */}
                    <div className={`pl-10 md:pl-0 ${isEven ? "md:pr-12 text-left" : "md:pl-12 text-left md:ltr"}`}>
                      <div className="bg-[#FAF9F6] border border-stone-200 p-6 sm:p-8 transition-all hover:border-[#D4AF37] hover:shadow-md relative overflow-visible group">
                        
                        {/* Decorative background number */}
                        <span className="absolute right-4 top-4 font-serif text-3xl font-extralight text-stone-200/60 pointer-events-none group-hover:text-[#D4AF37]/20 transition-colors select-none">
                          {item.phase}
                        </span>

                        <div className="space-y-4">
                          {/* Date & Status Ribbon */}
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="font-mono text-[10px] tracking-wider text-stone-500 font-bold block uppercase">
                              {item.date}
                            </span>
                            <span className={`text-[8px] font-mono font-bold px-2 py-0.5 border uppercase tracking-wider rounded-none ${item.statusColor}`}>
                              {item.status}
                            </span>
                          </div>

                          {/* Phase Title */}
                          <h3 className="font-serif text-lg sm:text-xl font-light text-stone-900 leading-snug group-hover:text-[#D4AF37] transition-colors">
                            {item.title}
                          </h3>

                          {/* Phase Description */}
                          <p className="text-xs text-stone-500 leading-relaxed font-light">
                            {item.desc}
                          </p>

                          {/* Action CTA Trigger */}
                          <div className="pt-2">
                            <Link
                              to={item.actionPath}
                              className="inline-flex items-center space-x-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#D4AF37] hover:text-stone-950 transition-colors group/link"
                            >
                              <span>{item.actionText}</span>
                              <ChevronRight size={12} className="transform group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Invisible counterpart block to balance layout on desktop */}
                    <div className="hidden md:block" />

                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Interactive timeline bottom summary card */}
          <div className="mt-16 bg-[#FAF8F2] border border-stone-200 p-8 max-w-2xl mx-auto text-center space-y-4">
            <h4 className="font-serif text-base text-stone-900 font-medium">Have queries regarding your city-level filing window?</h4>
            <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed font-light">
              Reach out immediately to our central helpdesk secretariat for priority slot processing, candidate credentials audit assistance, and schedule alignments.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex bg-stone-900 hover:bg-[#D4AF37] text-white hover:text-black px-6 py-3 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300"
              >
                Connect with Audits Desk
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SEGMENTED WINNERS SHOWCASE */}
      <section
        id="winners-showcase"
        className="py-12 sm:py-24 bg-[#FAF9F6] relative overflow-visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                Eminent Titleholders
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 leading-tight">
                National Winners Chapter 2025
              </h2>
              <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                Celebrating the official crowning of our major 2025 titleholders, evaluated without prejudice, and showcased with absolute prestige.
              </p>
            </div>
            
            <div className="shrink-0">
              <Link
                to="/winners-2025"
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] hover:text-stone-900 border-b border-stone-200 pb-1"
              >
                <span>Winners Register Archives</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Segmented Tab Switcher with Framer Motion Layout Pill */}
          <div className="mb-12 border-b border-stone-200 pb-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex space-x-2 md:space-x-4 min-w-max">
              {(["Miss India", "Mrs India", "Miss Teen India", "Global Awards"] as const).map((tab) => {
                const isActive = activeWinnersTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveWinnersTab(tab)}
                    className={`relative px-5 py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer min-h-[44px] ${
                      isActive ? "text-stone-900" : "text-stone-400 hover:text-stone-700"
                    }`}
                  >
                    <span className="relative z-10">{tab}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeWinnersPill"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Showcase of Selected Category Winners (Maximum 2-3 cards per tab to reduce scroll length) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto overflow-visible">
            {showcaseWinners[activeWinnersTab].map((winner) => (
              <TiltCard key={winner.id} className="h-full overflow-visible">
                <div className="bg-white border border-stone-200/80 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-visible relative group">
                  
                  {/* Outer container is overflow-visible so the glowing card elements don't get cropped */}
                  
                  {/* Image wrapper */}
                  <div className="relative h-80 overflow-hidden bg-stone-100 shrink-0">
                    <img
                      src={winner.img}
                      alt={winner.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating elite badging */}
                    <div className="absolute top-4 left-4 bg-white border border-stone-200 shadow-sm px-3 py-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#D4AF37] font-bold">
                        {winner.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5">
                        {winner.year}
                      </span>
                    </div>
                  </div>

                  {/* Winner credentials & description */}
                  <div className="p-8 flex flex-col flex-grow space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                        Verified Crown
                      </span>
                      <h3 className="font-serif text-2xl font-light text-stone-900 group-hover:text-[#D4AF37] transition-colors leading-tight">
                        {winner.name}
                      </h3>
                      <p className="font-sans text-xs font-semibold text-stone-800 tracking-wider uppercase">
                        {winner.title}
                      </p>
                      <p className="font-mono text-[9px] text-stone-400 uppercase tracking-widest pt-0.5">
                        {winner.location}
                      </p>
                    </div>

                    <p className="text-xs text-stone-500 leading-relaxed font-light flex-grow">
                      {winner.desc}
                    </p>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[9px] text-stone-400 font-mono tracking-wider">Official Registry ID: FS-2025-{winner.id}</span>
                      <Trophy className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Bottom archive link */}
          <div className="text-center pt-16">
            <Link
              to="/winners-2025"
              className="inline-flex bg-stone-900 hover:bg-[#D4AF37] text-white hover:text-black font-bold px-8 py-4 rounded-none text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-md"
            >
              Explore Full Hall of Fame
            </Link>
          </div>

        </div>
      </section>

      {/* SUCCESS STORIES CAROUSEL SECTION */}
      <SuccessStoriesCarousel />

      {/* 4. BRAND CORE VALUES / TRUST */}
      <section
        id="creed-section"
        className="py-12 sm:py-24 bg-[#FAF8F2] border-t border-stone-200 relative overflow-visible"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-white flex items-center justify-center border border-stone-200 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
            The Non-Commercial Pact
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-3xl font-light text-stone-900 leading-relaxed italic">
            "The screen audits of our nominees are completely independent. Selection cannot be bought or influenced. This is our eternal constitution."
          </h2>

          <div className="w-16 h-[1.5px] bg-stone-200 mx-auto" />

          {/* Collapsible Mission / About Block (Requirement 3: Collapsible Mission/About Section) */}
          <div className="bg-white border border-stone-200 p-6 sm:p-10 text-left max-w-3xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 bg-[#FAF8F2] border border-stone-200 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-stone-900">Founding Mission & Heritage</h3>
                <p className="text-[10px] font-mono text-[#D4AF37] tracking-wider uppercase">ESTABLISHED 2012 &bull; NATIONAL CHARTER</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              FSIA represents the ultimate standard of national peer-reviewed validation. Our core foundation is to find and highlight uncorrupted talent, innovative research, and magnificent leadership from all corners of India, elevating them to international platforms.
            </p>

            {/* Accordion Content */}
            <div className={`transition-all duration-500 overflow-hidden ${isMissionExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 md:max-h-[500px] md:opacity-100 md:mt-4"}`}>
              <div className="space-y-4 pt-4 border-t border-stone-100 text-xs text-stone-500 leading-relaxed font-light">
                <p>
                  Since our inception, our mission has been anchored on transparency and academic rigor. Unlike modern commercial pageants, every applicant profile is indexed securely within our physical and digital national registries and evaluated blindly by a supreme jury.
                </p>
                <p>
                  Today, FSIA partners with premier international chambers, offering selected science and digital laureates fully-funded fellowships and direct incubation slots. We believe true stars reside not only in tier-1 metropolises but also in quiet, rural municipal chapters.
                </p>
              </div>
            </div>

            {/* Toggle Button for Mobile Only */}
            <div className="block md:hidden mt-4 pt-2 border-t border-stone-100 text-center">
              <button
                onClick={() => setIsMissionExpanded(!isMissionExpanded)}
                className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37] hover:text-stone-950 flex items-center justify-center space-x-1.5 mx-auto min-h-[44px]"
              >
                <span>{isMissionExpanded ? "Collapse Details" : "Read Full Story"}</span>
                <ChevronRight size={12} className={`transform transition-transform duration-300 ${isMissionExpanded ? "-rotate-90" : "rotate-90"}`} />
              </button>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-transparent hover:bg-stone-100 border border-stone-200 text-stone-800 font-bold text-xs uppercase tracking-[0.15em] px-6 py-3 transition-all duration-300"
            >
              <span>Our Constitutional History</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* EMINENT NEWS & MEDIA COVERAGE SECTION (Requirement 2: Horizontal snap carousel on mobile) */}
      <section id="news-coverage" className="py-12 sm:py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
              National Press Room
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 leading-tight">
              Eminent Media Coverage & Journals
            </h2>
            <p className="font-sans text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
              Read verified press accounts, editorial reviews, and broadcast summaries capturing the massive impact of our national coronation.
            </p>
          </div>

          {/* News Cards: horizontal snap carousel on mobile, 3-column grid on desktop */}
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {[
              {
                source: "National Business Weekly",
                date: "May 14, 2026",
                title: "FSIA 14th Edition Opens Global Portals For Local Indian Talent",
                desc: "This year, the Selection Council announces full-spectrum fellowships for select science and clean-tech honorees with major academic centers across Europe."
              },
              {
                source: "The Chronicle Express",
                date: "April 02, 2026",
                title: "How FSIA Has Created A Gold Standard In Peer-Reviewed Awards",
                desc: "By implementing blind jury review mechanisms and on-field physical audits, FSIA breaks away from typical commercial award platforms to honor actual regional champions."
              },
              {
                source: "Vanguard Times",
                date: "Jan 18, 2026",
                title: "Recap: FSIA 2025 Grand Ceremony Gathers Celebrities & Innovators",
                desc: "Under the theme of 'Ancestral Roots & Modern Tech', the grand stage in Mumbai celebrated 85 honorees across arts, digital innovation, and climate action."
              }
            ].map((article, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-stone-200 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37] hover:shadow-md shrink-0 w-[85vw] sm:w-[45vw] md:w-auto snap-center md:shrink-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[9px] font-mono font-bold text-stone-400">
                    <span className="text-[#D4AF37] uppercase tracking-widest">{article.source}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-serif text-base font-light text-stone-900 leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed font-light">
                    {article.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-200/40">
                  <Link to="/news" className="inline-flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#D4AF37] hover:text-stone-950 transition-colors">
                    <span>Read Press Briefing</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPONSORSHIP ALLIANCE CALLOUT */}
      <section id="partnership-callout" className="py-12 sm:py-20 bg-white border-t border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
            National Alliances
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 leading-tight">
            Align Your Prestige With Elite Honors
          </h2>
          <p className="font-sans text-stone-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light">
            Sponsors gain immense national exposure across top prime networks, digital channels, and highly publicized live broadcasts reaching 85 million+ impressions.
          </p>
          <div className="pt-4">
            <Link
              to="/sponsorship"
              className="inline-flex items-center space-x-2 bg-[#D4AF37] text-black hover:bg-stone-900 hover:text-white font-bold text-xs uppercase tracking-[0.15em] px-8 py-4 transition-all duration-300 shadow-sm"
            >
              <span>Explore Partnership Assets</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
