import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles, Trophy, Award, Users, ArrowRight } from "lucide-react";
import GalleryCarousel from "./GalleryCarousel";

export default function HomePage() {
  return (
    <div id="fsia-homepage" className="bg-[#FAFAFA] text-[#171717] font-sans overflow-hidden">
      
      {/* SECTION 1: Clear Hero with Dark Backdrop Image */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-4 md:px-8">
        
        {/* Background Image with Elegant Dark Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=90"
            alt="Awards Ceremony Runway"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.35]"
          />
          {/* Rich Radial Overlay for Premium Vignette */}
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-stone-950/70 to-stone-950" />
        </div>

        {/* Hero Core Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10 px-4">
          
          {/* Subtle crown sparkle badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-4 py-2.5"
          >
            <Sparkles className="w-4.5 h-4.5 text-[#D4AF37] animate-pulse" />
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
              Federation of Star India
            </span>
          </motion.div>

          {/* Main Massive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extralight text-white tracking-tight leading-[1.1]"
          >
            India's Premier <br />
            <span className="font-serif italic font-normal text-[#D4AF37]">Pageant & Awards</span>
          </motion.h1>

          {/* Core Sub-headline (1-2 punchy sentences) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-stone-300 text-sm md:text-lg lg:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            Step into the spotlight. Celebrate your journey. Join the nation's most respected registry of beauty and business laureates.
          </motion.p>

          {/* Side-by-Side Dual Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            {/* Gold Solid Button */}
            <Link
              to="/register?category=miss-india"
              className="w-full sm:w-auto px-8 py-4.5 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-stone-950 font-mono font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20 active:scale-95 transition-all text-center"
            >
              Apply for Pageant
            </Link>

            {/* Dark Outline Button */}
            <Link
              to="/register?category=business"
              className="w-full sm:w-auto px-8 py-4.5 border border-white hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-mono font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 active:scale-95 transition-all text-center"
            >
              Apply for Awards
            </Link>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: Quick Stats Row (Spacious, Horizontal, Highly Readable) */}
      <section className="bg-white border-y border-stone-200/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center text-center divide-y md:divide-y-0 md:divide-x divide-stone-200/80">
            
            {/* Stat Item 1 */}
            <div className="py-6 md:py-0 space-y-2">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#D4AF37]">
                10,000+
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">
                Participants
              </span>
            </div>

            {/* Stat Item 2 */}
            <div className="py-6 md:py-0 space-y-2">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#171717]">
                4,000+
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">
                Cities
              </span>
            </div>

            {/* Stat Item 3 */}
            <div className="py-6 md:py-0 space-y-2">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#D4AF37]">
                900+
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">
                Finalists
              </span>
            </div>

          </div>
        </div>
      </section>

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

              <Link
                to="/register?category=miss-india"
                className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#171717] group-hover:text-[#D4AF37] transition-colors"
              >
                <span>View Pageants</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
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

              <Link
                to="/register?category=business"
                className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#171717] group-hover:text-[#D4AF37] transition-colors"
              >
                <span>View Awards</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Gallery Carousel Section */}
      <GalleryCarousel />

    </div>
  );
}
