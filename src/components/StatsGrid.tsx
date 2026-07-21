import { motion } from "motion/react";

interface StatItem {
  number: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  { number: "10,000+", label: "Participants" },
  { number: "4,000+", label: "City Auditions" },
  { number: "900+", label: "Contestants" },
  { number: "1", label: "Winner Per City" }
];

export default function StatsGrid() {
  return (
    <section id="fsia-stats-grid" className="bg-white border-y border-stone-200/60 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout on all devices (2x2 on mobile, 4 columns on desktop) with no horizontal scrolling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4 sm:p-5 md:py-4 border border-stone-100 md:border-stone-200/40 bg-stone-50/40 md:bg-stone-50/20"
            >
              <span className="block font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] tracking-tight">
                {stat.number}
              </span>
              <span className="block font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-600 font-medium mt-1.5 leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
