import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Trophy, Award, Users, ArrowRight } from "lucide-react";
import GalleryCarousel from "./GalleryCarousel";
import RegistrationModal from "./RegistrationModal";
import HeroSection from "./HeroSection";
import StatsGrid from "./StatsGrid";
import AwardSeasonTimeline from "./AwardSeasonTimeline";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"pageant" | "awards">("pageant");

  const openSelection = (type: "pageant" | "awards") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  return (
    <div id="fsia-homepage" className="bg-[#FAFAFA] text-[#171717] font-sans overflow-hidden">
      
      {/* Subtle Prestige Live Announcement Marquee */}
      <div className="relative w-full overflow-hidden bg-stone-950 text-white border-b border-stone-800/80 z-20 py-2.5 sm:py-3 select-none">
        {/* Left & Right Elegant Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />

        <div className="flex">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 hover:[animation-play-state:paused] cursor-pointer">
            {/* Set 1 */}
            <span className="inline-flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              <span className="font-bold text-[#D4AF37]">Live Update:</span> Registrations for <span className="text-white font-semibold">Forever Miss India 2026</span> and <span className="text-white font-semibold">Forever Mrs India 2026</span> are now open.
            </span>
            <span className="inline-flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              <span className="font-bold text-[#D4AF37]">Breaking News:</span> Submit Nominations for <span className="text-white font-semibold">National Business Awards 2026</span>.
            </span>
            <span className="inline-flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              <span className="font-bold text-[#D4AF37]">Auditions Live:</span> <span className="text-white font-semibold">Forever Fashion Week 2026</span> Delhi castings underway. Register to walk.
            </span>
            <span className="inline-flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              <span className="font-bold text-[#D4AF37]">Prestige Milestone:</span> Over <span className="text-white font-semibold">12,000+ Profiles</span> verified for the 2026 State Crowns.
            </span>

            {/* Set 2 (Duplicate for Seamless Endless Looping) */}
            <span className="inline-flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              <span className="font-bold text-[#D4AF37]">Live Update:</span> Registrations for <span className="text-white font-semibold">Forever Miss India 2026</span> and <span className="text-white font-semibold">Forever Mrs India 2026</span> are now open.
            </span>
            <span className="inline-flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              <span className="font-bold text-[#D4AF37]">Breaking News:</span> Submit Nominations for <span className="text-white font-semibold">National Business Awards 2026</span>.
            </span>
            <span className="inline-flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              <span className="font-bold text-[#D4AF37]">Auditions Live:</span> <span className="text-white font-semibold">Forever Fashion Week 2026</span> Delhi castings underway. Register to walk.
            </span>
            <span className="inline-flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              <span className="font-bold text-[#D4AF37]">Prestige Milestone:</span> Over <span className="text-white font-semibold">12,000+ Profiles</span> verified for the 2026 State Crowns.
            </span>
          </div>
        </div>
      </div>
      
      {/* SECTION 1: Professional Hero Area */}
      <HeroSection />

      {/* SECTION 2: Horizontal Metrics Grid */}
      <StatsGrid />

      {/* SECTION 3: The Two Paths (Two Large, Pristine, Balanced Cards Side-by-Side) */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAFAFA] to-white">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Path Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
              Choose Your Platform
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#171717] tracking-tight">
              Two Paths to Historic Glory
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light">
              Submit your nominations for national crowning pageants or peer-vetted business honors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card 1: Pageants */}
            <div className="group bg-white border border-stone-200/80 p-8 sm:p-12 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-between space-y-12 relative">
              <div className="absolute top-0 left-0 w-12 h-[1px] bg-[#D4AF37]" />
              <div className="absolute top-0 left-0 w-[1px] h-12 bg-[#D4AF37]" />

              <div className="space-y-6">
                <div className="w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30">
                  <Trophy className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#171717] tracking-tight">
                    Beauty Pageants
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-light">
                    Miss India, Mrs India & Miss Teen India. Showcase poise, purpose, and cultural representation on the sovereign runway.
                  </p>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => openSelection("pageant")}
                className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#171717] group-hover:text-[#D4AF37] transition-colors cursor-pointer text-left min-h-[44px]"
              >
                <span>View Pageants</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Card 2: Awards */}
            <div className="group bg-white border border-stone-200/80 p-8 sm:p-12 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-between space-y-12 relative">
              <div className="absolute top-0 left-0 w-12 h-[1px] bg-[#D4AF37]" />
              <div className="absolute top-0 left-0 w-[1px] h-12 bg-[#D4AF37]" />

              <div className="space-y-6">
                <div className="w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#171717] tracking-tight">
                    National Awards
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-light">
                    Super Hero, Super Woman & Business Awards. Honouring pioneering entrepreneurs, cultural champions, and social stars.
                  </p>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => openSelection("awards")}
                className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#171717] group-hover:text-[#D4AF37] transition-colors cursor-pointer text-left min-h-[44px]"
              >
                <span>View Awards</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Interactive Award Season Timeline */}
      <AwardSeasonTimeline />

      {/* SECTION 5: Gallery Carousel Section */}
      <GalleryCarousel />

      {/* Unified Registration & Applications Hub Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <RegistrationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            initialTab={modalType}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
