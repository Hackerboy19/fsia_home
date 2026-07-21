import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, Trophy, Briefcase, MapPin, ArrowRight, User, Sparkles } from "lucide-react";
import { SEARCH_ITEMS, SearchItem } from "../data/searchData";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Focus input on mount
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

  // Keyboard accessibility
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

  // Real-time dynamic search filter
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

  // Safe highlight match utility
  const highlightMatch = (text: string, search: string) => {
    if (!search.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-[#D4AF37]/30 text-stone-900 font-semibold px-0.5 rounded-sm">
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
    <div id="global-search-modal-container" className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 md:pt-28">
      {/* Dark backdrop overlay */}
      <motion.div
        id="global-search-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-md"
      />

      {/* Main interactive modal box */}
      <motion.div
        id="global-search-box"
        initial={{ opacity: 0, y: -20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="w-full max-w-2xl bg-white border border-stone-200/90 shadow-2xl relative z-10 flex flex-col rounded-lg overflow-hidden"
        ref={containerRef}
      >
        {/* Header/Input row */}
        <div id="global-search-input-wrapper" className="p-4 md:p-5 border-b border-stone-100 flex items-center justify-between gap-4 bg-stone-50/50">
          <div className="flex items-center gap-3.5 flex-grow">
            <Search className="text-[#D4AF37] w-5 h-5 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search winners, categories, city auditions, projects..."
              className="w-full bg-transparent text-stone-900 placeholder-stone-400 text-sm md:text-base focus:outline-none font-sans font-light"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline-block text-[9px] font-mono tracking-widest px-2 py-1 border border-stone-200 text-stone-400 rounded bg-white font-bold">
              ESC
            </span>
            <button
              id="close-global-search-btn"
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close search panel"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Dynamic results grid */}
        <div id="global-search-results-viewport" className="max-h-[420px] overflow-y-auto p-4 md:p-6 scrollbar-none bg-white">
          {/* Default suggestion tags when input query is empty */}
          {query.trim() === "" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mb-3">
                  Quick Search Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Forever Miss India",
                    "Forever Mrs India",
                    "Forever Miss Teen India",
                    "Business Awards",
                    "Super Women",
                    "Green Innovation",
                    "Traditional Heritage"
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setQuery(cat)}
                      className="text-[11px] font-mono font-medium text-stone-600 bg-stone-50 border border-stone-200 hover:border-[#D4AF37] hover:bg-amber-50/20 hover:text-[#D4AF37] px-3 py-1.5 transition-all duration-200 cursor-pointer rounded-full"
                    >
                      ✦ {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-[10px] font-mono tracking-widest text-stone-400 uppercase font-bold mb-3.5">
                  Featured Laureates
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SEARCH_ITEMS.slice(0, 4).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className="flex items-start gap-3 p-3 bg-stone-50/50 border border-stone-100 hover:border-stone-300 hover:bg-stone-50 transition-all text-left cursor-pointer rounded"
                    >
                      {item.type === "winner" ? (
                        <Trophy className="text-[#D4AF37] w-4.5 h-4.5 mt-0.5 shrink-0" />
                      ) : (
                        <Briefcase className="text-[#D4AF37] w-4.5 h-4.5 mt-0.5 shrink-0" />
                      )}
                      <div>
                        <span className="text-xs font-medium text-stone-800 block line-clamp-1">
                          {item.type === "winner" ? item.name : item.title}
                        </span>
                        <span className="text-[10px] font-mono text-stone-400 block mt-0.5">
                          {item.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Result cards shown when query matches items */}
          {query.trim() !== "" && results.length > 0 && (
            <div className="space-y-6">
              {/* Winners Category Group */}
              {results.filter(i => i.type === "winner").length > 0 && (
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mb-3 flex items-center gap-1.5">
                    <Trophy size={11} />
                    <span>Contestants & Winners</span>
                  </h4>
                  <div className="space-y-2">
                    {results
                      .filter(i => i.type === "winner")
                      .map((item) => {
                        const globalIdx = results.indexOf(item);
                        const isFocused = activeIndex === globalIdx;
                        const winner = item as any;

                        return (
                          <div
                            key={winner.id}
                            onClick={() => handleItemClick(winner)}
                            className={`flex items-center justify-between p-3 border transition-all cursor-pointer rounded ${
                              isFocused
                                ? "bg-amber-50/40 border-[#D4AF37] shadow-sm"
                                : "bg-stone-50/30 border-stone-150 hover:bg-stone-50 hover:border-stone-300"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={winner.image}
                                alt={winner.name}
                                referrerPolicy="no-referrer"
                                className="w-10 h-10 rounded-full object-cover border border-stone-200 shrink-0"
                              />
                              <div>
                                <h5 className="text-xs font-semibold text-stone-950 flex items-center gap-1.5">
                                  {highlightMatch(winner.name, query)}
                                  <span className="text-[9px] font-mono text-[#D4AF37] bg-amber-50 px-1.5 py-0.5 font-bold border border-amber-100">
                                    {winner.year}
                                  </span>
                                </h5>
                                <p className="text-[11px] text-stone-600 mt-0.5">
                                  {highlightMatch(winner.category, query)}
                                </p>
                                <p className="text-[10px] text-stone-400 mt-1 flex items-center gap-1">
                                  <MapPin size={9} className="text-[#D4AF37]" />
                                  <span>{highlightMatch(`${winner.city}, ${winner.state}`, query)}</span>
                                </p>
                              </div>
                            </div>
                            <ArrowRight size={13} className="text-stone-400" />
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Projects Category Group */}
              {results.filter(i => i.type === "project").length > 0 && (
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mb-3 flex items-center gap-1.5">
                    <Briefcase size={11} />
                    <span>Laurels & Projects</span>
                  </h4>
                  <div className="space-y-2">
                    {results
                      .filter(i => i.type === "project")
                      .map((item) => {
                        const globalIdx = results.indexOf(item);
                        const isFocused = activeIndex === globalIdx;
                        const project = item as any;

                        return (
                          <div
                            key={project.id}
                            onClick={() => handleItemClick(project)}
                            className={`p-3.5 border transition-all cursor-pointer rounded ${
                              isFocused
                                ? "bg-amber-50/40 border-[#D4AF37] shadow-sm"
                                : "bg-stone-50/30 border-stone-150 hover:bg-stone-50 hover:border-stone-300"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-1">
                                <span className="text-[9px] font-mono font-bold tracking-wider text-[#D4AF37] uppercase block">
                                  {project.category}
                                </span>
                                <h5 className="text-xs font-semibold text-stone-900">
                                  {highlightMatch(project.title, query)}
                                </h5>
                                <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                                  {highlightMatch(project.description, query)}
                                </p>
                                <div className="flex items-center gap-4 pt-1 text-[10px] text-stone-400">
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
                              <span className="text-[10px] font-mono text-stone-400 shrink-0">
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

          {/* Query unmatched state */}
          {query.trim() !== "" && results.length === 0 && (
            <div className="text-center py-10">
              <div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center mx-auto mb-3">
                <Search size={18} className="text-stone-300" />
              </div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-stone-800 font-bold">No results matched</h5>
              <p className="text-[11px] text-stone-400 max-w-xs mx-auto mt-1.5 font-light">
                We couldn't find any winners or projects matching "<span className="text-stone-700 font-medium">{query}</span>". Please try a different query.
              </p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div id="global-search-footer-info" className="p-3 bg-stone-50 border-t border-stone-150 text-[9px] font-mono text-stone-400 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <span><span className="font-bold text-stone-500">↑↓</span> Move</span>
            <span><span className="font-bold text-stone-500">Enter</span> Go to Page</span>
          </div>
          <span className="flex items-center gap-1 font-bold">
            <Sparkles size={10} className="text-[#D4AF37]" />
            <span>Forever Star India Registry</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
