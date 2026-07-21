import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Clock, Sparkles, ChevronDown, CheckCircle2, AlertCircle, Bookmark } from "lucide-react";

interface TimelineEvent {
  phase: string;
  title: string;
  date: string;
  description: string;
  status: "active" | "upcoming" | "completed";
  type: "deadline" | "audition" | "gala";
  location: string;
  details: string[];
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    phase: "Phase 01",
    title: "National Registration & Profile Submission",
    date: "July 1 - August 31, 2026",
    description: "Submit your prestige portfolio, heights, talent credentials, and introductory videos through our unified portal.",
    status: "active",
    type: "deadline",
    location: "Online / Official App Portal",
    details: [
      "Open for Forever Miss India, Forever Mrs India, and Forever Miss Teen India categories",
      "No physical travel required for this initial vetting round",
      "Get real-time Google indexing upon profile verification"
    ]
  },
  {
    phase: "Phase 02",
    title: "Zonal & City Auditions (4000+ Hubs)",
    date: "September 10 - October 25, 2026",
    description: "Physical walk-ins and casting calls across all major tier-1 and tier-2 state hubs. Shortlisted names enter the national pool.",
    status: "upcoming",
    type: "audition",
    location: "Regional Five-Star Partner Hotels",
    details: [
      "Judged by past beauty titleholders and industry fashion directors",
      "Interactive ramp-walk coaching during the audition day",
      "Special photo-sessions and media interviews for chosen participants"
    ]
  },
  {
    phase: "Phase 03",
    title: "State Crowning & Sash Ceremonies",
    date: "November 15 - December 20, 2026",
    description: "Crowning of the elite 'State Winners' who will represent their regions. A glamorous sash ceremony with massive media coverage.",
    status: "upcoming",
    type: "audition",
    location: "Zonal Crowning Auditoriums",
    details: [
      "Direct press-release broadcasts for every winner",
      "Official certified high-resolution digital crowning portraits",
      "Branded designer wardrobe consultations for the upcoming national rounds"
    ]
  },
  {
    phase: "Phase 04",
    title: "Pre-Finale Luxury Grooming & Runway Camp",
    date: "January 5 - January 12, 2027",
    description: "A premium 7-day fully residential boot camp covering etiquette, poise, public speaking, choreography, and physical styling.",
    status: "upcoming",
    type: "gala",
    location: "5-Star Resort & Spa, Goa",
    details: [
      "Individual physical runway analysis by international models",
      "Comprehensive media-handling training and mock press conferences",
      "Nutritional guidance and customized wellness sessions"
    ]
  },
  {
    phase: "Phase 05",
    title: "Grand Finale Gala & National Business Awards",
    date: "January 14 - January 18, 2027",
    description: "The crown jewel event of the season. Featuring live high-fashion designer runways, crowning galas, and corporate laureate handovers.",
    status: "upcoming",
    type: "gala",
    location: "Vigyan Bhawan, New Delhi",
    details: [
      "Live satellite and digital television broadcast to millions",
      "Honouring business trailblazers and creative designers alongside the pageant winners",
      "Exclusive celebrity-studded red carpet and after-party network"
    ]
  }
];

export default function AwardSeasonTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="award-season-timeline-section" className="bg-[#FAFAFA] border-t border-stone-200/60 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-[#D4AF37]/30 px-3 py-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
              Event Calendar
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
            Award Season <span className="italic font-normal text-[#D4AF37]">Timeline</span>
          </h2>
          <p className="font-sans text-stone-500 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
            Follow the journey from profile submissions to zonal castings, state crown sashes, and the historic national grand crowning.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-stone-200 ml-4 sm:ml-6 md:ml-8 space-y-12 pb-8">
          
          {TIMELINE_EVENTS.map((event, idx) => {
            const isExpanded = expandedIndex === idx;
            const isActive = event.status === "active";
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Timeline Circular Indicator Anchor */}
                <div className="absolute -left-3.5 top-0.5 z-10">
                  {isActive ? (
                    <span className="relative flex h-7 w-7 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37]/30 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D4AF37] border-2 border-white shadow-md"></span>
                    </span>
                  ) : (
                    <div className="h-7 w-7 rounded-full bg-white border border-stone-300 flex items-center justify-center shadow-sm group-hover:border-[#D4AF37] transition-colors duration-300">
                      <div className="h-2.5 w-2.5 rounded-full bg-stone-300 group-hover:bg-[#D4AF37] transition-colors duration-300" />
                    </div>
                  )}
                </div>

                {/* Event Card Content Box */}
                <div 
                  onClick={() => toggleExpand(idx)}
                  className={`p-6 sm:p-8 bg-white border cursor-pointer transition-all duration-300 select-none ${
                    isExpanded 
                      ? "border-[#D4AF37]/60 shadow-xl shadow-stone-100" 
                      : "border-stone-200/80 hover:border-stone-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                          {event.phase}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 border border-emerald-100 rounded-full animate-pulse">
                            <Clock size={8} />
                            <span>Active / Apply Now</span>
                          </span>
                        )}
                        {!isActive && (
                          <span className="inline-flex items-center gap-1 bg-stone-50 text-stone-500 text-[9px] font-mono font-semibold tracking-wider uppercase px-2 py-0.5 border border-stone-200 rounded-full">
                            <span>Upcoming</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-900 group-hover:text-[#D4AF37] transition-colors">
                        {event.title}
                      </h3>
                    </div>

                    {/* Date Tag */}
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-stone-500 bg-stone-50 px-3 py-1.5 border border-stone-100 self-start md:self-auto shrink-0 font-medium">
                      <Calendar size={12} className="text-[#D4AF37]" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-stone-400 font-mono font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-[#D4AF37]" />
                      <span>{event.location}</span>
                    </span>
                    <span className="text-stone-300">|</span>
                    <span className="capitalize text-stone-500">
                      Format: <strong className="font-semibold text-stone-700">{event.type}</strong>
                    </span>
                  </div>

                  {/* Expand / Collapse Indicator */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold flex items-center gap-1">
                      {isExpanded ? "Close details" : "View key requirements"}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-stone-400"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>

                  {/* Expandable Key Details Fold-out */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-2 space-y-4 border-t border-stone-100">
                          <h4 className="text-[10px] font-mono tracking-widest text-stone-400 uppercase font-bold flex items-center gap-1.5">
                            <Bookmark size={10} className="text-[#D4AF37]" />
                            <span>Procedures & Benchmarks</span>
                          </h4>
                          <ul className="space-y-3 pl-1">
                            {event.details.map((detail, detailIdx) => (
                              <li key={detailIdx} className="flex items-start gap-2.5 text-xs text-stone-600 font-light leading-relaxed">
                                <CheckCircle2 size={13} className="text-[#D4AF37] shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                          {isActive && (
                            <div className="bg-amber-50/50 border border-amber-200/40 p-4 flex items-start gap-3 mt-4">
                              <AlertCircle size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                              <div className="space-y-1">
                                <span className="text-[10px] font-mono tracking-wider font-bold text-[#D4AF37] uppercase block">
                                  Current Entry Deadline
                                </span>
                                <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                                  Profile submission portals close sharp at 11:59 PM IST on August 31, 2026. Avoid late submission penalties.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
