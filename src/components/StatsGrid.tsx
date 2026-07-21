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
        
        {/* Horizontal Touch-Swipe Carousel on Mobile & Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none md:overflow-visible pb-4 md:pb-0">
          
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[240px] md:min-w-0 flex-shrink-0 snap-center flex flex-col items-center justify-center text-center px-6 py-6 md:py-2 border border-stone-100 md:border-0 bg-stone-50/40 md:bg-transparent rounded-none"
            >
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AF37] tracking-tight">
                {stat.number}
              </span>
              <span className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-stone-600 font-medium mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
