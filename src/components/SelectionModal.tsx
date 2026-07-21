import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, Trophy, Award, Sparkles, ArrowRight, Search, Crown, Star, ShieldCheck, Heart, GraduationCap, Briefcase, Users, Film, HeartHandshake } from "lucide-react";

interface SelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "pageant" | "awards";
}

interface ItemOption {
  id: string;
  title: string;
  description: string;
  query: string;
  icon: any;
  badge?: string;
}

const PAGEANT_ITEMS: ItemOption[] = [
  {
    id: "miss-india",
    title: "Forever Miss India",
    description: "The sovereign crowning achievement for young unmarried women of substance and national advocacy.",
    query: "miss-india",
    icon: Crown,
    badge: "Elite National Crown"
  },
  {
    id: "mrs-india",
    title: "Mrs India",
    description: "Celebrating married women of grace, leadership, and multi-faceted professional and personal triumphs.",
    query: "mrs-india",
    icon: Star,
    badge: "Sovereign Grace"
  },
  {
    id: "miss-teen-india",
    title: "Miss Teen India",
    description: "Vetting and nurturing the next generation of bright, creative, and passionate teenage visionaries.",
    query: "miss-teen-india",
    icon: Sparkles,
    badge: "Young Leaders"
  },
  {
    id: "mr-india",
    title: "Mr India",
    description: "Honoring intellectual presence, athletic discipline, and outstanding national advocacy for men.",
    query: "mr-india",
    icon: Trophy,
    badge: "Gentlemen of Honor"
  },
  {
    id: "mrs-world",
    title: "Mrs World India",
    description: "The ultimate pinnacle of prestige, representing India on the absolute sovereign international stage.",
    query: "mrs-world",
    icon: Crown,
    badge: "Global Zenith"
  },
  {
    id: "fashion-week",
    title: "Forever Fashion Week",
    description: "Premium national designer runways showcasing elite heritage textiles, sustainable crafts, and haute couture.",
    query: "fashion-week",
    icon: Star,
    badge: "Haute Couture"
  }
];

const AWARD_ITEMS: ItemOption[] = [
  {
    id: "super-heroes",
    title: "Super Heroes Title",
    description: "Honoring extraordinary individual courage, national rescue service, defense feats, and supreme civic advocacy.",
    query: "super-heroes",
    icon: Trophy,
    badge: "National Valor"
  },
  {
    id: "super-women",
    title: "Super Women Title",
    description: "Dedicated to the sovereign breakthroughs, leadership milestones, and inspiring narratives of women leaders.",
    query: "super-women",
    icon: Award,
    badge: "Empowerment Zenith"
  },
  {
    id: "business",
    title: "Business Awards",
    description: "The gold standard of commercial eminence, pioneering corporate strategy, and green startup innovation.",
    query: "business",
    icon: Briefcase,
    badge: "Industry Benchmark"
  },
  {
    id: "influencer",
    title: "Social Media Influencer Award",
    description: "Recognizing outstanding digital storytellers who drive real-world community development and ethical impact.",
    query: "influencer",
    icon: Users,
    badge: "Digital Impact"
  },
  {
    id: "youth",
    title: "Outstanding Youth Icon Award",
    description: "Celebrating pioneer change-makers under 30 who inspire positive cultural and scientific revolutions.",
    query: "youth",
    icon: Sparkles,
    badge: "Under 30 Innovators"
  },
  {
    id: "scientific-innovation",
    title: "International Laurels & Scientific Innovation",
    description: "Validating breakthrough research, clean tech engineering, clinical advances, and academic patenting.",
    query: "scientific-innovation",
    icon: ShieldCheck,
    badge: "Academic Vetting"
  },
  {
    id: "art-music",
    title: "Star Artist, Music & Film Award",
    description: "Honoring creative pioneers, classical heritage performers, independent film creators, and visual artists.",
    query: "art-music",
    icon: Film,
    badge: "Fine Arts Legacy"
  },
  {
    id: "health-wellness",
    title: "Health, Medicine & Wellness Leadership",
    description: "Celebrating frontline medical heroes, public health founders, and premium wellness advocates.",
    query: "health-wellness",
    icon: Heart,
    badge: "Sovereign Care"
  },
  {
    id: "education-excellence",
    title: "Educational & Academic Excellence Honor",
    description: "Recognizing pioneering educators, legacy school founders, and exceptional pedagogical researchers.",
    query: "education-excellence",
    icon: GraduationCap,
    badge: "Wisdom & Pedagogy"
  },
  {
    id: "community-upliftment",
    title: "Community Upliftment, CSR & NGO Leader",
    description: "Benchmarking grassroots charities, environmental conservation tasks, and outstanding corporate social responsibility.",
    query: "community-upliftment",
    icon: HeartHandshake,
    badge: "Grassroots Trust"
  },
  {
    id: "corporate-governance",
    title: "Corporate Governance & Executive of the Year",
    description: "Vetting standard-setting executive leadership, transparency, fiduciary trust, and stellar board management.",
    query: "corporate-governance",
    icon: Briefcase,
    badge: "Fiduciary Trust"
  },
  {
    id: "heritage-preservation",
    title: "Traditional Heritage Preservation & Crafts Honor",
    description: "Supporting traditional textile weavers, classical folk musicians, and curators of indigenous legacy.",
    query: "heritage-preservation",
    icon: Star,
    badge: "Heritage Guardians"
  }
];

export default function SelectionModal({ isOpen, onClose, type }: SelectionModalProps) {
  const [filterQuery, setFilterQuery] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const isPageant = type === "pageant";
  const itemsList = isPageant ? PAGEANT_ITEMS : AWARD_ITEMS;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFilterQuery("");
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC closing
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = itemsList.filter((item) =>
    item.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
    (item.badge && item.badge.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  const handleSelect = (queryParam: string) => {
    onClose();
    navigate(`/register?category=${queryParam}`);
    // Smooth scroll to top of registration page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Blurred Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-md"
      />

      {/* Main Luxury Modal Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
        className="w-full max-w-4xl bg-[#FAFAFA] border border-stone-200 shadow-2xl relative z-10 flex flex-col max-h-[85vh] rounded-none overflow-hidden"
        ref={modalRef}
        id={`${type}-selection-modal`}
      >
        {/* Top Metallic Gold Border Accent */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]" />

        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-stone-200/80 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                {isPageant ? "National Crowning Chapters" : "Independent Vetted Honors"}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-[#171717] tracking-tight">
              Select {isPageant ? "Beauty Pageant Category" : "National Award Category"}
            </h3>
            <p className="text-stone-500 text-xs font-light">
              Choose your sovereign category to launch the official profile verification.
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-stone-400 hover:text-[#171717] hover:bg-stone-50 transition-all rounded-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label="Close selection modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Real-time filtering block */}
        <div className="px-6 md:px-8 py-4 bg-white border-b border-stone-200/50 flex items-center gap-3">
          <Search className="text-stone-400 w-4 h-4 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder={`Filter ${isPageant ? "pageants" : "awards"} by title or focus keywords...`}
            className="w-full bg-transparent text-stone-900 placeholder-stone-400 text-xs focus:outline-none font-sans font-light"
          />
          {filterQuery && (
            <button
              onClick={() => setFilterQuery("")}
              className="text-stone-400 hover:text-stone-700 text-[10px] font-mono uppercase"
            >
              Clear
            </button>
          )}
        </div>

        {/* Scrollable Categories List */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 bg-[#FAFAFA] scrollbar-thin scrollbar-thumb-stone-200/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.query)}
                  className="group bg-white border border-stone-200 hover:border-[#D4AF37] p-5 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 bg-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/20">
                        <Icon className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      {item.badge && (
                        <span className="text-[8px] font-mono uppercase tracking-[0.15em] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#171717] group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-stone-500 text-[11px] font-light leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#171717] pt-2 border-t border-stone-50 group-hover:text-[#D4AF37] transition-colors">
                    <span>Select Category</span>
                    <ArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="col-span-1 md:col-span-2 text-center py-12">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-3">
                  <Search size={18} className="text-stone-400" />
                </div>
                <h5 className="text-xs font-mono font-bold text-stone-700">No categories match your search</h5>
                <p className="text-stone-500 text-[11px] max-w-xs mx-auto mt-1 font-light leading-relaxed">
                  Try clearing or search another term like "Mrs", "Business", or "Youth".
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer helper */}
        <div className="p-4 bg-white border-t border-stone-200/80 text-[9px] font-mono text-stone-500 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck size={11} className="text-[#D4AF37]" />
              <span>Verified 14th National Registry</span>
            </span>
          </div>
          <span className="hidden sm:inline-block">Press ESC to dismiss</span>
        </div>
      </motion.div>
    </div>
  );
}
