import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
      className="md:hidden fixed bottom-0 inset-x-0 h-16 bg-neutral-950/90 backdrop-blur-md border-t border-[#D4AF37]/35 z-50 flex items-center justify-around px-2 pb-safe shadow-[0_-4px_24px_rgba(0,0,0,0.5)]"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.path && !tab.onClick;
        
        const content = (
          <div className="flex flex-col items-center justify-center space-y-1 py-1 w-full h-full min-h-[44px]">
            <div
              className={`p-1.5 rounded-sm transition-all duration-300 ${
                tab.isAction
                  ? "bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105"
                  : isActive
                  ? "text-[#D4AF37]"
                  : "text-stone-400 group-hover:text-stone-200"
              }`}
            >
              <Icon size={tab.isAction ? 18 : 20} className={tab.isAction ? "animate-pulse" : ""} />
            </div>
            <span
              className={`text-[9px] font-medium tracking-wider uppercase ${
                tab.isAction
                  ? "text-[#D4AF37] font-bold"
                  : isActive
                  ? "text-[#D4AF37] font-semibold"
                  : "text-stone-400 group-hover:text-stone-200"
              }`}
            >
              {tab.label}
            </span>
          </div>
        );

        if (tab.onClick) {
          return (
            <button
              key={tab.label}
              onClick={tab.onClick}
              className="flex-1 flex flex-col items-center justify-center focus:outline-none group cursor-pointer"
              aria-label={tab.label}
            >
              {content}
            </button>
          );
        }

        return (
          <Link
            key={tab.label}
            to={tab.path}
            className="flex-1 flex flex-col items-center justify-center focus:outline-none group"
            aria-label={tab.label}
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}
