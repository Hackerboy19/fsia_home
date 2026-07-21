import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Search, X, Trophy, Briefcase, MapPin, ArrowRight, User, Calendar, Sparkles } from "lucide-react";
import { SEARCH_ITEMS, SearchItem } from "../data/searchData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      setQuery("");
      setResults([]);
      setActiveIndex(-1);
    }
  }, [isOpen]);

  // Handle keyboard shortcuts and closing
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1 < results.length ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : results.length - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (activeIndex >= 0 && results[activeIndex]) {
          handleItemClick(results[activeIndex]);
        }
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, activeIndex]);

  // Real-time filtering
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = SEARCH_ITEMS.filter((item) => {
      if (item.type === "winner") {
        return (
          item.name.toLowerCase().includes(lowerQuery) ||
          item.category.toLowerCase().includes(lowerQuery) ||
          item.city.toLowerCase().includes(lowerQuery) ||
          item.state.toLowerCase().includes(lowerQuery) ||
          item.achievement.toLowerCase().includes(lowerQuery)
        );
      } else {
        return (
          item.title.toLowerCase().includes(lowerQuery) ||
          item.category.toLowerCase().includes(lowerQuery) ||
          item.lead.toLowerCase().includes(lowerQuery) ||
          item.city.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery)
        );
      }
    });

    setResults(filtered);
    setActiveIndex(-1);
  }, [query]);

  const handleItemClick = (item: SearchItem) => {
    onClose();
    navigate(item.link);
  };

  // Helper to highlight match
  const highlightMatch = (text: string, search: string) => {
    if (!search.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-[#D4AF37]/30 text-white font-medium px-0.5 rounded-sm">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 md:pt-28">
      {/* Blurred overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-md"
      />

      {/* Modal Main container */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="w-full max-w-2xl bg-stone-900 border border-stone-800 shadow-2xl relative z-10 flex flex-col"
        ref={modalRef}
        id="global-search-modal"
      >
        {/* Search Input Area */}
        <div className="p-4 md:p-6 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 flex-grow">
            <Search className="text-[#D4AF37] w-5 h-5 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search winners, pageants, projects or innovators..."
              className="w-full bg-transparent text-white placeholder-stone-500 text-sm md:text-base focus:outline-none font-sans font-light"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-block text-[10px] font-mono tracking-wider px-2 py-1 border border-stone-800 text-stone-500 rounded bg-stone-950">
              ESC
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800/60 rounded transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close search"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Results / Navigation suggestions */}
        <div className="max-h-[400px] overflow-y-auto p-4 md:p-6 scrollbar-thin scrollbar-thumb-stone-800">
          
          {/* Query state empty: suggestions */}
          {query.trim() === "" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mb-3">
                  Quick Search Categories
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Forever Miss India",
                    "Forever Mrs India",
                    "Miss Teen India",
                    "Business Awards",
                    "Super Heroes",
                    "Super Women",
                    "Green Innovation"
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setQuery(cat)}
                      className="text-xs font-mono font-medium text-stone-300 bg-stone-950 border border-stone-800 hover:border-[#D4AF37] hover:text-[#D4AF37] px-3 py-1.5 transition-colors cursor-pointer"
                    >
                      ✦ {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-[10px] font-mono tracking-widest text-stone-500 uppercase font-bold mb-3">
                  Featured Legacy Stories
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {SEARCH_ITEMS.slice(0, 4).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className="flex items-start gap-3 p-3 bg-stone-950/50 border border-stone-800 hover:border-stone-700 hover:bg-stone-950 transition-all text-left cursor-pointer group"
                    >
                      {item.type === "winner" ? (
                        <Trophy className="text-[#D4AF37] w-4.5 h-4.5 mt-0.5 shrink-0" />
                      ) : (
                        <Briefcase className="text-[#D4AF37] w-4.5 h-4.5 mt-0.5 shrink-0" />
                      )}
                      <div>
                        <span className="text-xs font-medium text-stone-200 group-hover:text-white transition-colors block line-clamp-1">
                          {item.type === "winner" ? item.name : item.title}
                        </span>
                        <span className="text-[10px] font-mono text-stone-500 block">
                          {item.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results matching query */}
          {query.trim() !== "" && results.length > 0 && (
            <div className="space-y-6">
              {/* Group: Contestants & Winners */}
              {results.filter(i => i.type === "winner").length > 0 && (
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mb-3.5 flex items-center space-x-1.5">
                    <Trophy size={12} />
                    <span>Contestants & National Winners</span>
                  </h4>
                  <div className="space-y-2">
                    {results
                      .filter(i => i.type === "winner")
                      .map((item, idx) => {
                        const globalIndex = results.indexOf(item);
                        const isFocused = activeIndex === globalIndex;
                        const winner = item as any;

                        return (
                          <div
                            key={winner.id}
                            onClick={() => handleItemClick(winner)}
                            className={`flex items-center justify-between p-3.5 border transition-all cursor-pointer ${
                              isFocused
                                ? "bg-stone-800/80 border-[#D4AF37]"
                                : "bg-stone-950/55 border-stone-800/60 hover:bg-stone-800/40 hover:border-stone-700"
                            }`}
                          >
                            <div className="flex items-center gap-3.5">
                              <img
                                src={winner.image}
                                alt={winner.name}
                                referrerPolicy="no-referrer"
                                className="w-10 h-10 rounded-full object-cover border border-stone-800 shrink-0"
                              />
                              <div>
                                <h5 className="text-xs font-medium text-white flex items-center gap-2">
                                  {highlightMatch(winner.name, query)}
                                  <span className="text-[9px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-1.5 py-0.5">
                                    {winner.year}
                                  </span>
                                </h5>
                                <p className="text-[11px] text-stone-400 mt-0.5 font-light">
                                  {highlightMatch(winner.category, query)}
                                </p>
                                <p className="text-[10px] text-stone-500 mt-1 flex items-center gap-1">
                                  <MapPin size={10} className="text-stone-600" />
                                  <span>{highlightMatch(`${winner.city}, ${winner.state}`, query)}</span>
                                </p>
                              </div>
                            </div>
                            <ArrowRight size={14} className="text-[#D4AF37]/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Group: Projects & Initiatives */}
              {results.filter(i => i.type === "project").length > 0 && (
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mb-3.5 flex items-center space-x-1.5">
                    <Briefcase size={12} />
                    <span>Laurels & Innovation Projects</span>
                  </h4>
                  <div className="space-y-2">
                    {results
                      .filter(i => i.type === "project")
                      .map((item, idx) => {
                        const globalIndex = results.indexOf(item);
                        const isFocused = activeIndex === globalIndex;
                        const project = item as any;

                        return (
                          <div
                            key={project.id}
                            onClick={() => handleItemClick(project)}
                            className={`p-3.5 border transition-all cursor-pointer ${
                              isFocused
                                ? "bg-stone-800/80 border-[#D4AF37]"
                                : "bg-stone-950/55 border-stone-800/60 hover:bg-stone-800/40 hover:border-stone-700"
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <span className="text-[9px] font-mono font-bold tracking-wider text-[#D4AF37] uppercase block">
                                  {project.category}
                                </span>
                                <h5 className="text-xs font-semibold text-white">
                                  {highlightMatch(project.title, query)}
                                </h5>
                                <p className="text-[11px] text-stone-400 font-light leading-relaxed">
                                  {highlightMatch(project.description, query)}
                                </p>
                                <div className="flex items-center gap-4 pt-1.5 text-[10px] text-stone-500">
                                  <span className="flex items-center gap-1">
                                    <User size={10} />
                                    <span>Lead: {highlightMatch(project.lead, query)}</span>
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MapPin size={10} />
                                    <span>{highlightMatch(project.city, query)}</span>
                                  </span>
                                </div>
                              </div>
                              <span className="text-[9px] font-mono text-stone-500 shrink-0 self-start">
                                {project.year}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Empty search matches */}
          {query.trim() !== "" && results.length === 0 && (
            <div className="text-center py-10">
              <div className="w-12 h-12 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center mx-auto mb-4">
                <Search size={18} className="text-stone-600" />
              </div>
              <h5 className="text-sm font-serif font-bold text-white tracking-tight">No records matched</h5>
              <p className="text-xs text-stone-500 max-w-sm mx-auto mt-2 font-light leading-relaxed">
                We couldn't find any registered winners, categories, or innovation projects matching "<span className="text-white font-medium">{query}</span>". Try another term.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer helper */}
        <div className="p-3 bg-stone-950 border-t border-stone-800 text-[10px] font-mono text-stone-500 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="font-bold text-stone-400">↑↓</span> Move
            </span>
            <span className="flex items-center gap-1">
              <span className="font-bold text-stone-400">Enter</span> Select
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Sparkles size={11} className="text-[#D4AF37]" />
            <span>Forever Star India Awards Registry</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
