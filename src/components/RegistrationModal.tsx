import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  X, Crown, Trophy, Award, Sparkles, ArrowRight, Search, 
  Heart, GraduationCap, Briefcase, Users, Film, HeartHandshake, ShieldCheck, Star
} from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "pageant" | "awards";
}

interface RegistryItem {
  id: string;
  title: string;
  description: string;
  query: string;
  icon: any;
  badge: string;
  highlightColor: string;
}

const PAGEANT_REGISTRY: RegistryItem[] = [
  {
    id: "miss-india",
    title: "Forever Miss India",
    description: "The supreme crowning achievement for unmarried women, championing poised representation & social voice.",
    query: "miss-india",
    icon: Crown,
    badge: "National Crown",
    highlightColor: "#D4AF37"
  },
  {
    id: "mrs-india",
    title: "Forever Mrs India",
    description: "Celebrating married women of pristine leadership, grace, and multi-faceted family and professional triumph.",
    query: "mrs-india",
    icon: Star,
    badge: "Sovereign Grace",
    highlightColor: "#D4AF37"
  },
  {
    id: "miss-teen-india",
    title: "Forever Miss Teen India",
    description: "Nurturing and celebrating the next generation of bright, innovative, and passionate teenage stars.",
    query: "miss-teen-india",
    icon: Sparkles,
    badge: "Young Laureates",
    highlightColor: "#D4AF37"
  },
  {
    id: "mr-india",
    title: "Forever Mr India",
    description: "Honoring intellectual presence, athletic excellence, and outstanding national goodwill advocacy for men.",
    query: "mr-india",
    icon: Trophy,
    badge: "Elite Gentleman",
    highlightColor: "#D4AF37"
  },
  {
    id: "mrs-world",
    title: "Mrs World Representative",
    description: "The ultimate peak of global prestige, sending India's finest to compete on the global sovereign runway.",
    query: "mrs-world",
    icon: Crown,
    badge: "Global Zenith",
    highlightColor: "#D4AF37"
  },
  {
    id: "fashion-week",
    title: "Forever Fashion Week Runway",
    description: "Elite national fashion showcase for pioneer designers, handloom weavers, and haute couture models.",
    query: "fashion-week",
    icon: Star,
    badge: "Couture Runway",
    highlightColor: "#D4AF37"
  }
];

const AWARD_REGISTRY: RegistryItem[] = [
  {
    id: "super-heroes",
    title: "Super Heroes Title",
    description: "Honoring elite individual courage, national civil service defense, and supreme rescue operations.",
    query: "super-heroes",
    icon: Trophy,
    badge: "National Valor",
    highlightColor: "#D4AF37"
  },
  {
    id: "super-women",
    title: "Super Women Title",
    description: "Dedicated to the independent breakthroughs, startup milestones, and inspiring stories of women pioneers.",
    query: "super-women",
    icon: Award,
    badge: "Empowerment Peak",
    highlightColor: "#D4AF37"
  },
  {
    id: "business",
    title: "Business Leadership Awards",
    description: "The gold benchmark for stellar corporate strategy, exceptional brand scaling, and green tech innovation.",
    query: "business",
    icon: Briefcase,
    badge: "Industry Standard",
    highlightColor: "#D4AF37"
  },
  {
    id: "influencer",
    title: "Social Media Influencer Award",
    description: "Recognizing outstanding digital creators who lead real-world community causes and positive ethics.",
    query: "influencer",
    icon: Users,
    badge: "Digital Pioneer",
    highlightColor: "#D4AF37"
  },
  {
    id: "youth",
    title: "Outstanding Youth Icon",
    description: "Honoring change-makers under 30 driving positive cultural, science, or athletic revolutions.",
    query: "youth",
    icon: Sparkles,
    badge: "Under 30 Star",
    highlightColor: "#D4AF37"
  },
  {
    id: "scientific-innovation",
    title: "Scientific Innovation Laurels",
    description: "Validating breakthrough clinical research, green engineering patents, and academic milestones.",
    query: "scientific-innovation",
    icon: ShieldCheck,
    badge: "Scientific Honor",
    highlightColor: "#D4AF37"
  },
  {
    id: "art-music",
    title: "Star Artist, Music & Film Award",
    description: "Celebrating creative pioneers, independent film creators, classical curators, and fine art innovators.",
    query: "art-music",
    icon: Film,
    badge: "Artistic Genius",
    highlightColor: "#D4AF37"
  },
  {
    id: "health-wellness",
    title: "Health & Wellness Leadership",
    description: "Acknowledging medical frontliners, public health creators, and outstanding holistic therapy advocates.",
    query: "health-wellness",
    icon: Heart,
    badge: "Wellness Care",
    highlightColor: "#D4AF37"
  },
  {
    id: "education-excellence",
    title: "Educational Excellence Honor",
    description: "Honoring outstanding institutional developers, research deans, and pioneer classroom mentors.",
    query: "education-excellence",
    icon: GraduationCap,
    badge: "Wisdom Honor",
    highlightColor: "#D4AF37"
  },
  {
    id: "community-upliftment",
    title: "Community Upliftment & NGO Leader",
    description: "Recognizing non-profit organizations, massive CSR campaigns, and green forest conservation.",
    query: "community-upliftment",
    icon: HeartHandshake,
    badge: "Sovereign Trust",
    highlightColor: "#D4AF37"
  }
];

export default function RegistrationModal({ isOpen, onClose, initialTab = "pageant" }: RegistrationModalProps) {
  const [activeTab, setActiveTab] = useState<"pageant" | "awards">(initialTab);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSearchQuery("");
      setActiveTab(initialTab);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialTab]);

  // ESC key dismiss
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

  const activeRegistry = activeTab === "pageant" ? PAGEANT_REGISTRY : AWARD_REGISTRY;

  const filteredItems = activeRegistry.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApply = (queryParam: string) => {
    onClose();
    navigate(`/register?category=${queryParam}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Blurred Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-md"
      />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl bg-white border border-stone-200 shadow-2xl relative z-10 flex flex-col max-h-[85vh] overflow-hidden"
        id="fsia-registration-modal"
      >
        {/* Prestige Top Accent Line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] shrink-0" />

        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white relative">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                Official FSIA Applications Hub
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-[#171717] tracking-tight">
              Select Your Achievement Platform
            </h3>
            <p className="text-stone-500 text-xs font-light max-w-xl">
              Apply for India's premium beauty pageants or submit a nomination for prestigious national corporate and social honor titles.
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-50 transition-all rounded-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label="Close applications modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs Bar & Interactive Search Input */}
        <div className="border-b border-stone-200/60 bg-white px-6 md:px-8 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
          
          {/* Tabs */}
          <div className="flex space-x-2 bg-stone-100 p-1 rounded-none max-w-xs md:max-w-none">
            <button
              onClick={() => {
                setActiveTab("pageant");
                setSearchQuery("");
              }}
              className={`flex-1 py-2 px-5 font-mono text-[10px] uppercase tracking-[0.15em] font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "pageant"
                  ? "bg-white text-stone-950 shadow-sm border border-stone-200/50"
                  : "text-stone-500 hover:text-stone-950"
              }`}
            >
              👑 Beauty Pageants
            </button>
            <button
              onClick={() => {
                setActiveTab("awards");
                setSearchQuery("");
              }}
              className={`flex-1 py-2 px-5 font-mono text-[10px] uppercase tracking-[0.15em] font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "awards"
                  ? "bg-white text-stone-950 shadow-sm border border-stone-200/50"
                  : "text-stone-500 hover:text-stone-950"
              }`}
            >
              🏅 National Awards
            </button>
          </div>

          {/* Search Box */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 border border-stone-200/80 rounded-none bg-stone-50/50 max-w-sm w-full">
            <Search className="text-stone-400 w-3.5 h-3.5 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${activeTab === "pageant" ? "pageant categories" : "award titles"}...`}
              className="w-full bg-transparent text-stone-900 placeholder-stone-400 text-xs focus:outline-none font-sans font-light"
            />
          </div>

        </div>

        {/* Scrollable Categories Grid */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 bg-[#FAFAFA] scrollbar-thin scrollbar-thumb-stone-200/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -2 }}
                  onClick={() => handleApply(item.query)}
                  className="group bg-white border border-stone-200 hover:border-[#D4AF37] p-5 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 relative"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/20">
                        <Icon className="w-4.5 h-4.5 text-[#D4AF37]" />
                      </div>
                      <span className="text-[8px] font-mono uppercase tracking-[0.15em] bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-0.5 font-bold">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#171717] group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                        {item.title}
                      </h4>
                      <p className="text-stone-500 text-[11px] font-light leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#171717] pt-2 border-t border-stone-50 group-hover:text-[#D4AF37] transition-colors">
                    <span>Initiate Registry</span>
                    <ArrowRight size={11} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="col-span-1 md:col-span-2 text-center py-14">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-3">
                  <Search size={18} className="text-stone-400" />
                </div>
                <h5 className="text-xs font-mono font-bold text-stone-700">No matching registry records found</h5>
                <p className="text-stone-500 text-[11px] max-w-xs mx-auto mt-1 font-light leading-relaxed">
                  Try widening your search terms or switch tabs to check alternatives.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer helper */}
        <div className="p-4 bg-white border-t border-stone-200/80 text-[9px] font-mono text-stone-500 flex items-center justify-between px-8 shrink-0">
          <span className="flex items-center gap-1">
            <ShieldCheck size={11} className="text-[#D4AF37]" />
            <span>National Verification Framework v14.0</span>
          </span>
          <span className="hidden sm:inline-block">Press ESC to exit Hub</span>
        </div>
      </motion.div>
    </div>
  );
}
