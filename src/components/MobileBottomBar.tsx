import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Home, Briefcase, Trophy, Sparkles, Menu } from "lucide-react";

export default function MobileBottomBar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch a custom event to open/toggle the mobile drawer inside PremiumHeader
    window.dispatchEvent(new Event("toggle-mobile-menu"));
  };

  const tabs = [
    {
      label: "Home",
      icon: Home,
      path: "/",
      isAction: false,
    },
    {
      label: "Projects",
      icon: Briefcase,
      path: "/projects",
      isAction: false,
    },
    {
      label: "Winners",
      icon: Trophy,
      path: "/winners-2025",
      isAction: false,
    },
    {
      label: "Register",
      icon: Sparkles,
      path: "/register",
      isAction: true, // Special gold styling highlight
    },
    {
      label: "Menu",
      icon: Menu,
      path: "#menu",
      isAction: false,
      onClick: handleMenuClick,
    },
  ];

  return (
    <div
      id="mobile-bottom-navigation-bar"
      className="md:hidden fixed bottom-0 inset-x-0 h-16 bg-neutral-950/95 backdrop-blur-md border-t border-[#D4AF37]/35 z-50 flex items-center justify-around px-2 pb-safe shadow-[0_-4px_24px_rgba(0,0,0,0.5)]"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.path && !tab.onClick;
        
        const content = (
          <div className="flex flex-col items-center justify-center space-y-0.5 py-1 w-full h-full min-h-[48px]">
            <div
              className={`p-1 rounded-md transition-all duration-300 ${
                tab.isAction
                  ? "bg-gradient-to-r from-[#BF953F] to-[#B38728] text-stone-950 shadow-md shadow-[#D4AF37]/20 scale-105"
                  : isActive
                  ? "text-[#D4AF37]"
                  : "text-stone-400 group-hover:text-stone-200"
              }`}
            >
              <Icon size={tab.isAction ? 16 : 18} className={tab.isAction ? "animate-pulse" : ""} />
            </div>
            <span
              className={`text-[8.5px] font-mono tracking-wider uppercase font-semibold ${
                tab.isAction
                  ? "text-[#D4AF37] font-bold"
                  : isActive
                  ? "text-[#D4AF37] font-bold"
                  : "text-stone-500 group-hover:text-stone-300"
              }`}
            >
              {tab.label}
            </span>
          </div>
        );

        if (tab.onClick) {
          return (
            <motion.button
              key={tab.label}
              onClick={tab.onClick}
              whileTap={{ scale: 0.9 }}
              className="flex-1 flex flex-col items-center justify-center h-full focus:outline-none group cursor-pointer"
              style={{ minWidth: "48px", minHeight: "48px" }}
              aria-label={tab.label}
            >
              {content}
            </motion.button>
          );
        }

        return (
          <motion.div
            key={tab.label}
            whileTap={{ scale: 0.9 }}
            className="flex-1 h-full"
          >
            <Link
              to={tab.path}
              className="w-full h-full flex flex-col items-center justify-center focus:outline-none group"
              style={{ minWidth: "48px", minHeight: "48px" }}
              aria-label={tab.label}
            >
              {content}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
