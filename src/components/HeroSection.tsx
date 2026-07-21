import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="fsia-hero-section" 
      className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Image with Elegant Dark Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=90"
          alt="Prestige Awards Runway Ceremony"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.35]"
        />
        {/* Deep linear gradient for absolute contrast and 100% legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/70 to-stone-950" />
      </div>

      {/* Main Core Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 px-4">
        {/* Sparkle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-4 py-2"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
            Federation of Star India
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extralight text-white tracking-tight leading-[1.15]"
        >
          India's Premier <br />
          <span className="font-serif italic font-normal text-[#D4AF37]">Pageant & Awards</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-sans text-stone-300 text-sm md:text-lg lg:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
        >
          Step into the spotlight. Get global Google recognition.
        </motion.p>

        {/* CTA Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 w-full px-4"
        >
          {/* Gold Solid Button */}
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="https://www.fsia.in/top-beauty-pageant-sites.php"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4.5 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-stone-950 font-mono font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20 active:scale-95 transition-all text-center cursor-pointer min-h-[48px] flex items-center justify-center border border-transparent"
          >
            Apply for Pageant
          </motion.a>

          {/* Dark Outline Button */}
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="https://www.fsia.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4.5 border border-white hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-mono font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 active:scale-95 transition-all text-center cursor-pointer min-h-[48px] flex items-center justify-center"
          >
            Apply for Awards
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
