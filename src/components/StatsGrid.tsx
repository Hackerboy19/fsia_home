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
    <section id="fsia-stats-grid" className="bg-white border-y border-stone-200/60 py-5 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile: Single-column clean list stack with tiny padding; Tablet/Desktop: Horizontal Touch-Swipe Carousel */}
        <div className="grid grid-cols-1 md:flex md:overflow-x-auto md:snap-x md:snap-mandatory md:scrollbar-none md:overflow-visible gap-2.5 md:gap-6 pb-2 md:pb-4">
          
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-row md:flex-col items-center justify-between md:justify-center text-left md:text-center px-4 py-2.5 md:py-6 md:px-6 border border-stone-100 md:border-stone-200/40 bg-stone-50/40 md:bg-stone-50/20 md:min-w-[240px] md:flex-shrink-0 md:snap-center"
            >
              <span className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] tracking-tight">
                {stat.number}
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-stone-600 font-medium md:mt-2.5">
                {stat.label}
              </span>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
