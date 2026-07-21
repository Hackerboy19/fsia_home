import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Award, Home, UserPlus, Image, Newspaper, PhoneCall, HelpCircle, ShieldCheck, FileText, ArrowUp } from "lucide-react";

export default function InfluencerFooterTabs() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"registration" | "registry" | "legal">("registration");

  // Scroll to top of window smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fixed mobile bottom bar navigation config
  const mobileTabs = [
    { label: "Home", path: "/", icon: Home },
    { label: "Registration", path: "/register", icon: UserPlus },
    { label: "Gallery", path: "/global-awards", icon: Image },
    { label: "Media Coverage", path: "/news", icon: Newspaper },
    { label: "Contact", path: "/contact", icon: PhoneCall }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Comprehensive Standard Desktop/Tablet Footer */}
      <footer id="influencer-footer" className="bg-stone-950 text-stone-300 pt-16 pb-24 md:pb-16 border-t border-stone-800 relative overflow-hidden">
        
        {/* Subtle glowing gold background orb */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#BF953F]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-stone-800">
            
            {/* 1. Brand Profile */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <Award className="w-8 h-8 text-[#D4AF37]" />
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-tight text-white leading-tight">Forever Star India</span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">Influencer Portal</span>
                </div>
              </Link>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                FSIA is India's preeminent peer-reviewed awards and pageant platform, celebrated for pristine evaluation standards and global incubator partnerships.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center space-x-1 text-[10px] font-mono tracking-wider uppercase text-stone-500">
                  <ShieldCheck size={12} className="text-[#D4AF37]" />
                  <span>ISO 9001:2015 CERTIFIED</span>
                </span>
              </div>
            </div>

            {/* 2. Portal Registration Links - Hidden on Mobile */}
            <div className="space-y-4 hidden md:block">
              <h3 className="font-serif text-sm font-semibold tracking-wide text-white uppercase border-l-2 border-[#D4AF37] pl-3">
                REGISTRATION HUB
              </h3>
              <ul className="space-y-2.5 text-xs font-light">
                {[
                  { name: "Super Heroes Title", href: "/register?category=super-heroes" },
                  { name: "Super Women Title", href: "/register?category=super-women" },
                  { name: "Business Awards", href: "/register?category=business" },
                  { name: "Forever Miss India", href: "/register?category=miss-india" },
                  { name: "Forever Mrs India", href: "/register?category=mrs-india" },
                  { name: "Forever Miss Teen India", href: "/register?category=miss-teen-india" }
                ].map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-stone-400 hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5">
                      <span className="text-[#D4AF37]">&bull;</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Global & Regional Directories - Hidden on Mobile */}
            <div className="space-y-4 hidden md:block">
              <h3 className="font-serif text-sm font-semibold tracking-wide text-white uppercase border-l-2 border-[#D4AF37] pl-3">
                HONOR REGISTRY
              </h3>
              <ul className="space-y-2.5 text-xs font-light">
                {[
                  { name: "2025 National Winners", href: "/winners-2025" },
                  { name: "City-wise Chapters", href: "/winners/city-wise" },
                  { name: "State-wise Chapters", href: "/winners/state-wise" },
                  { name: "Sponsorship Alliances", href: "/sponsorship" },
                  { name: "Official Nomination Guide", href: "/nomination-guide" }
                ].map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-stone-400 hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5">
                      <span className="text-[#D4AF37]">&bull;</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Legal & Regulatory - Hidden on Mobile */}
            <div className="space-y-4 hidden md:block">
              <h3 className="font-serif text-sm font-semibold tracking-wide text-white uppercase border-l-2 border-[#D4AF37] pl-3">
                COMPLIANCE & LEGAL
              </h3>
              <ul className="space-y-2.5 text-xs font-light">
                {[
                  { name: "Terms & Conditions", href: "/legal/terms" },
                  { name: "Privacy & Data Policy", href: "/legal/privacy" },
                  { name: "Refund & Registration Policy", href: "/legal/refund" },
                  { name: "Grievance Redressal Board", href: "/legal/grievance" }
                ].map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-stone-400 hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5">
                      <FileText size={12} className="text-stone-500" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* MOBILE ONLY: TABBED COMPACT FOOTER SWITCHER (Reduces mobile height by 60%) */}
            <div className="block md:hidden border-t border-stone-800/80 pt-6 mt-2">
              {/* Segmented Tab Bar */}
              <div className="grid grid-cols-3 gap-1 bg-stone-900/60 p-1 mb-6 border border-stone-800">
                {[
                  { id: "registration", label: "Registration" },
                  { id: "registry", label: "Registry" },
                  { id: "legal", label: "Legal" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as "registration" | "registry" | "legal")}
                    className={`py-2 text-[10px] font-mono font-bold tracking-wider uppercase transition-all min-h-[44px] cursor-pointer text-center ${
                      activeTab === tab.id
                        ? "bg-stone-800 text-[#D4AF37] shadow-sm border border-stone-700 font-bold"
                        : "text-stone-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Link Lists */}
              <div className="px-1 min-h-[140px]">
                {activeTab === "registration" && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xs font-semibold tracking-wide text-white uppercase border-l-2 border-[#D4AF37] pl-3 mb-4">
                      REGISTRATION HUB
                    </h3>
                    <ul className="grid grid-cols-1 gap-3 text-xs font-light">
                      {[
                        { name: "Super Heroes Title", href: "/register?category=super-heroes" },
                        { name: "Super Women Title", href: "/register?category=super-women" },
                        { name: "Business Awards", href: "/register?category=business" },
                        { name: "Forever Miss India", href: "/register?category=miss-india" },
                        { name: "Forever Mrs India", href: "/register?category=mrs-india" },
                        { name: "Forever Miss Teen India", href: "/register?category=miss-teen-india" }
                      ].map((link, i) => (
                        <li key={i}>
                          <Link to={link.href} className="text-stone-400 hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5 py-1">
                            <span className="text-[#D4AF37]">&bull;</span>
                            <span>{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "registry" && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xs font-semibold tracking-wide text-white uppercase border-l-2 border-[#D4AF37] pl-3 mb-4">
                      HONOR REGISTRY
                    </h3>
                    <ul className="grid grid-cols-1 gap-3 text-xs font-light">
                      {[
                        { name: "2025 National Winners", href: "/winners-2025" },
                        { name: "City-wise Chapters", href: "/winners/city-wise" },
                        { name: "State-wise Chapters", href: "/winners/state-wise" },
                        { name: "Sponsorship Alliances", href: "/sponsorship" },
                        { name: "Official Nomination Guide", href: "/nomination-guide" }
                      ].map((link, i) => (
                        <li key={i}>
                          <Link to={link.href} className="text-stone-400 hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5 py-1">
                            <span className="text-[#D4AF37]">&bull;</span>
                            <span>{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "legal" && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xs font-semibold tracking-wide text-white uppercase border-l-2 border-[#D4AF37] pl-3 mb-4">
                      COMPLIANCE & LEGAL
                    </h3>
                    <ul className="grid grid-cols-1 gap-3 text-xs font-light">
                      {[
                        { name: "Terms & Conditions", href: "/legal/terms" },
                        { name: "Privacy & Data Policy", href: "/legal/privacy" },
                        { name: "Refund & Registration Policy", href: "/legal/refund" },
                        { name: "Grievance Redressal Board", href: "/legal/grievance" }
                      ].map((link, i) => (
                        <li key={i}>
                          <Link to={link.href} className="text-stone-400 hover:text-[#D4AF37] transition-colors flex items-center space-x-1.5 py-1">
                            <FileText size={12} className="text-stone-500" />
                            <span>{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Footer Bottom Credentials */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-[11px] font-mono text-stone-500 border-t border-stone-800">
            <div className="space-y-1 text-center sm:text-left">
              <p>
                &copy; {currentYear} Forever Star India Awards (FSIA). All Rights Reserved.
              </p>
              <p className="text-[10px] text-stone-400">
                Designed and maintained by Forever star india. Inquiries: secretariat@fsia.in
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={scrollToTop} 
                className="flex items-center space-x-1.5 text-stone-400 hover:text-[#D4AF37] transition-colors group cursor-pointer"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp size={12} className="transform group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Fixed Mobile Bottom Tab Bar (Requirement 2 - visible only on screens < md) */}
      <nav 
        id="influencer-footer-tabs" 
        className="md:hidden fixed bottom-0 inset-x-0 z-45 bg-stone-950/85 backdrop-blur-md border-t border-white/10 shadow-2xl pb-safe"
      >
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
          {mobileTabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = location.pathname === tab.path;

            return (
              <Link
                key={tab.label}
                to={tab.path}
                className="flex flex-col items-center justify-center flex-1 h-full relative group min-h-[44px]"
              >
                {/* Glowing light indicator on active */}
                {isActive && (
                  <div className="absolute top-0 w-12 h-[3px] bg-[#D4AF37] rounded-full shadow-[0_-2px_12px_rgba(212,175,55,0.8)]" />
                )}

                <div className={`transition-all duration-300 flex flex-col items-center justify-center ${isActive ? "scale-105" : "hover:text-white"}`}>
                  <IconComponent 
                    size={18} 
                    className={`mb-1 transition-colors duration-300 ${
                      isActive 
                        ? "text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" 
                        : "text-stone-400"
                    }`} 
                  />
                  <span 
                    className={`text-[9px] font-mono tracking-wider font-bold transition-colors duration-300 ${
                      isActive ? "text-[#D4AF37]" : "text-stone-400"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
