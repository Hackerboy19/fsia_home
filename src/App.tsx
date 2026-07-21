import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import PremiumHeader from "./components/PremiumHeader";
import InfluencerFooterTabs from "./components/InfluencerFooterTabs";
import HomePage from "./components/HomePage";
import {
  AboutPage,
  ProjectsPage,
  GlobalAwardsPage,
  NewsPage,
  CelebritiesPage,
  ContactPage,
  RegisterPage,
  Winners2025Page,
  AuditionsPage,
  SponsorshipPage,
  WinnersCityPage,
  WinnersStatePage,
  NominationGuidePage,
  LegalTermsPage,
  LegalPrivacyPage,
  LegalRefundPage,
  LegalGrievancePage,
} from "./components/SubPages";

// Auto-Scroll to Top on Page Navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#FAF9F6] min-h-screen text-stone-900 flex flex-col font-sans pt-16 lg:pt-20">
        
        {/* Requirement 1: Premium Header */}
        <PremiumHeader />

        {/* Global Page Layout with padding for fixed header and mobile bottom bar */}
        <main className="flex-grow pb-16 md:pb-0">
          <Routes>
            {/* Requirement 3: Main Assembly */}
            <Route path="/" element={<HomePage />} />
            
            {/* Nav Links Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/global-awards" element={<GlobalAwardsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/celebrities" element={<CelebritiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Registry & Auditions Pages */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/winners-2025" element={<Winners2025Page />} />
            <Route path="/auditions" element={<AuditionsPage />} />

            {/* Footer Specific Links */}
            <Route path="/winners/city-wise" element={<WinnersCityPage />} />
            <Route path="/winners/state-wise" element={<WinnersStatePage />} />
            <Route path="/sponsorship" element={<SponsorshipPage />} />
            <Route path="/nomination-guide" element={<NominationGuidePage />} />

            {/* Legal Pages */}
            <Route path="/legal/terms" element={<LegalTermsPage />} />
            <Route path="/legal/privacy" element={<LegalPrivacyPage />} />
            <Route path="/legal/refund" element={<LegalRefundPage />} />
            <Route path="/legal/grievance" element={<LegalGrievancePage />} />

            {/* Fallback routing */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Requirement 2: Influencer Footer & Bottom Tab Navigation */}
        <InfluencerFooterTabs />

      </div>
    </Router>
  );
}
