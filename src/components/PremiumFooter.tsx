import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Instagram, Linkedin, Youtube, Twitter, ShieldCheck, Mail, ArrowUpRight, Send } from "lucide-react";

export default function PremiumFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const [activeTab, setActiveTab] = useState<"quick" | "categories" | "legal">("quick");

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  ];

  return (
    <footer
      id="premium-footer"
      className="bg-[#F5F3ED] border-t border-stone-200/80 text-stone-600 pt-12 md:pt-16 pb-20 md:pb-8 relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 md:mb-16">
          
          {/* COLUMN 1: BRAND DETAILS & NEWSLETTER */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 border-2 border-[#D4AF37] flex items-center justify-center font-serif text-sm font-bold text-[#D4AF37]">
                F
              </div>
              <span className="font-serif text-lg tracking-widest text-stone-900 group-hover:text-[#D4AF37] transition-colors">
                FSIA
              </span>
            </Link>
            
            <p className="text-xs text-stone-500 leading-relaxed max-w-sm font-light">
              Established in 2012, FSIA represents the absolute pinnacle of national recognition, honoring visionary thinkers, game-changing projects, and top-tier influencers driving excellence across India.
            </p>

            {/* Newsletter Sign Up */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-mono font-bold block">
                Exclusive Briefings
              </span>
              <form onSubmit={handleSubscribe} className="relative max-w-xs group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your VIP email"
                  required
                  className="w-full bg-white border border-stone-200 focus:border-stone-400 rounded-none py-2.5 pl-4 pr-12 text-xs text-stone-900 placeholder-stone-400 focus:outline-none transition-all duration-300 shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 bg-[#D4AF37] text-black px-4 hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send size={12} />
                </button>
              </form>
              {isSubscribed && (
                <p className="text-[10px] text-[#D4AF37] font-mono italic">
                  ✓ Subscription confirmed. Welcome to the registry.
                </p>
              )}
            </div>
          </div>

          {/* DESKTOP ONLY: COLUMN 2 & 3 */}
          
          {/* COLUMN 2: QUICK LINKS (Winners & Sponsorships) - DESKTOP ONLY */}
          <div className="hidden md:block">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-6">
              National Honors
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/winners/city-wise"
                  className="text-stone-500 hover:text-stone-900 text-xs transition-colors flex items-center justify-between group py-1"
                >
                  <span className="font-medium">City-wise Winners</span>
                  <ArrowUpRight size={12} className="text-stone-300 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  to="/winners/state-wise"
                  className="text-stone-500 hover:text-stone-900 text-xs transition-colors flex items-center justify-between group py-1"
                >
                  <span className="font-medium">State-wise Winners</span>
                  <ArrowUpRight size={12} className="text-stone-300 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsorship"
                  className="text-stone-500 hover:text-stone-900 text-xs transition-colors flex items-center justify-between group py-1"
                >
                  <span className="font-medium">Sponsorship Opportunities</span>
                  <ArrowUpRight size={12} className="text-stone-300 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  to="/nomination-guide"
                  className="text-stone-500 hover:text-stone-900 text-xs transition-colors flex items-center justify-between group py-1"
                >
                  <span className="font-medium">Nomination Guidebook</span>
                  <ArrowUpRight size={12} className="text-stone-300 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: LEGAL & TRUST - DESKTOP ONLY */}
          <div className="hidden md:block">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-6">
              Legal & Transparency
            </h3>
            <ul className="space-y-4 text-xs">
              <li>
                <Link to="/legal/terms" className="text-stone-500 hover:text-stone-900 transition-colors block py-1 font-medium">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-stone-500 hover:text-stone-900 transition-colors block py-1 font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/refund" className="text-stone-500 hover:text-stone-900 transition-colors block py-1 font-medium">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/grievance" className="text-stone-500 hover:text-stone-900 transition-colors block py-1 font-medium">
                  Grievance Redressal
                </Link>
              </li>
            </ul>
          </div>

          {/* MOBILE ONLY: TABBED COMPACT FOOTER SWITCHER (Reduces mobile height by 60%) */}
          <div className="block md:hidden border-y border-stone-200/60 py-6 my-2">
            {/* Segmented Tab Bar */}
            <div className="grid grid-cols-3 gap-1 bg-stone-200/50 p-1 mb-6">
              {[
                { id: "quick", label: "Quick Links" },
                { id: "categories", label: "Categories" },
                { id: "legal", label: "Legal" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "quick" | "categories" | "legal")}
                  className={`py-2 text-[10px] font-mono font-bold tracking-wider uppercase transition-all min-h-[44px] cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white text-[#D4AF37] shadow-sm"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Tab Link Lists */}
            <div className="px-1 min-h-[140px]">
              {activeTab === "quick" && (
                <ul className="space-y-3">
                  <li>
                    <Link to="/winners/city-wise" className="text-stone-600 hover:text-stone-900 text-xs py-2 block border-b border-stone-200/40 font-medium">
                      ✦ City-wise Winners
                    </Link>
                  </li>
                  <li>
                    <Link to="/winners/state-wise" className="text-stone-600 hover:text-stone-900 text-xs py-2 block border-b border-stone-200/40 font-medium">
                      ✦ State-wise Winners
                    </Link>
                  </li>
                  <li>
                    <Link to="/sponsorship" className="text-stone-600 hover:text-stone-900 text-xs py-2 block border-b border-stone-200/40 font-medium">
                      ✦ Sponsorship Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link to="/nomination-guide" className="text-stone-600 hover:text-stone-900 text-xs py-2 block font-medium">
                      ✦ Nomination Guidebook
                    </Link>
                  </li>
                </ul>
              )}

              {activeTab === "categories" && (
                <ul className="space-y-3">
                  <li>
                    <Link to="/projects#miss-india" className="text-stone-600 hover:text-stone-900 text-xs py-2 block border-b border-stone-200/40 font-medium">
                      ✦ Forever Miss India 2026
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects#mrs-india" className="text-stone-600 hover:text-stone-900 text-xs py-2 block border-b border-stone-200/40 font-medium">
                      ✦ Mrs India 2026
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects#fashion" className="text-stone-600 hover:text-stone-900 text-xs py-2 block border-b border-stone-200/40 font-medium">
                      ✦ Fashion Week 2026
                    </Link>
                  </li>
                  <li>
                    <Link to="/global-awards" className="text-stone-600 hover:text-stone-900 text-xs py-2 block font-medium">
                      ✦ Global Awards Pageant
                    </Link>
                  </li>
                </ul>
              )}

              {activeTab === "legal" && (
                <ul className="space-y-3">
                  <li>
                    <Link to="/legal/terms" className="text-stone-600 hover:text-stone-900 text-xs py-2 block border-b border-stone-200/40 font-medium">
                      ✦ Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/privacy" className="text-stone-600 hover:text-stone-900 text-xs py-2 block border-b border-stone-200/40 font-medium">
                      ✦ Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/refund" className="text-stone-600 hover:text-stone-900 text-xs py-2 block border-b border-stone-200/40 font-medium">
                      ✦ Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/grievance" className="text-stone-600 hover:text-stone-900 text-xs py-2 block font-medium">
                      ✦ Grievance Redressal
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* COLUMN 4: SOCIAL MEDIA */}
          <div className="space-y-6">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-6">
              Connect With Us
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed font-light">
              Stay fully informed about grand ceremonies, celebrity guests, and live national broadcast announcements.
            </p>
            <div className="flex items-center space-x-3.5">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 border border-stone-200 text-stone-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 rounded-none bg-white shadow-xs"
                    title={social.name}
                  >
                    <IconComponent size={16} />
                  </motion.a>
                );
              })}
            </div>
            <div className="bg-white border border-stone-200 rounded-none p-3.5 flex items-start space-x-2.5 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] text-stone-900 font-bold">Authenticity Verified</span>
                <span className="text-[9px] text-stone-400">Government Registered Trust</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="border-t border-stone-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-stone-400 font-mono tracking-widest uppercase font-bold">
            &copy; {currentYear} FSIA PLATFORM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-6 text-[10px] font-mono text-stone-400 tracking-wider">
            <span className="flex items-center space-x-1">
              <Mail size={12} className="text-stone-300" />
              <span>secretariat@fsia.in</span>
            </span>
            <span>CIN: U85300RJ2012NPL038222</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
