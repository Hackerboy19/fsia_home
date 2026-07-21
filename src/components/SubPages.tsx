import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Award, Compass, Star, ChevronRight, CheckCircle2, Shield, Calendar, Phone, Mail, MapPin, Send, HelpCircle, ArrowRight, User, Briefcase, FileText, Globe } from "lucide-react";

// Standard Header for Subpages
function SubpageHero({ title, category, description }: { title: string; category: string; description: string }) {
  return (
    <div className="relative pt-36 pb-20 bg-[#0a0a0a] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block mb-3">
          {category}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-tight">
          {title}
        </h1>
        <p className="font-sans text-white/50 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-light">
          {description}
        </p>
        <div className="flex items-center space-x-2 text-[10px] font-mono text-white/30 mt-8 uppercase tracking-wider">
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-white/60">{title}</span>
        </div>
      </div>
    </div>
  );
}

// 1. ABOUT US PAGE
export function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Our Legacy & Foundation"
        title="Decades of Recognizing Excellence"
        description="The Federation of Star India Awards was founded to provide a sovereign, completely independent seal of validation for extraordinary individuals and projects across the nation."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">Our Genesis</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            In 2012, our founders noticed a structural gap in how talent, research, and leadership were validated in India. The majority of award platforms relied heavily on corporate sponsorships influencing selection, leaving true, quiet change-makers unrecognized. FSIA was birthed under a rigid constitutional charter: to establish a supreme bench of honors evaluated entirely by independent industry councils, peer reviews, and academic juries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="bg-transparent border border-white/10 rounded-none p-8 space-y-4">
            <h3 className="font-serif text-xl font-light text-[#D4AF37]">The Jury Council</h3>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
              Our grand council consists of retired judicial members, pioneering research scientists, cultural historians, and corporate governance advocates. They do not know the identity of applicants during initial evaluations, preventing any bias.
            </p>
          </div>
          <div className="bg-transparent border border-white/10 rounded-none p-8 space-y-4">
            <h3 className="font-serif text-xl font-light text-[#D4AF37]">Global Standards</h3>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
              We operate under ISO 9001:2015-aligned auditing principles for award platform credibility. Every selection dossier is securely preserved in our public registry archives.
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-8 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-light text-white">Become Part of the Story</h2>
          <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
            Whether you are a researcher in a regional laboratory, an artisan preserving native crafts, or an entrepreneur scaling a green startup, we invite you to have your work validated.
          </p>
          <div className="pt-4">
            <Link to="/register" className="inline-flex bg-[#D4AF37] hover:bg-[#c19b2e] text-black font-bold px-8 py-4 rounded-none text-xs uppercase tracking-[0.15em] transition-colors">
              Submit Your Profile
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 2. PROJECTS PAGE
export function ProjectsPage() {
  const projects = [
    {
      id: "social",
      title: "Social Impact Initiatives",
      tagline: "Empowering Underrepresented Communities",
      description: "FSIA supports and highlights grassroots foundations that build sustainable community kitchens, digitize regional artisan trade, and establish educational resources in remote tribal settlements.",
      highlights: ["Over 45 grassroots NGOs certified", "Direct digital integration support for artisans", "120,000+ citizens impacted annually"]
    },
    {
      id: "tech",
      title: "Digital & Tech Innovation",
      tagline: "Shaping the Future of Indian Industry",
      description: "A specialized tech board within FSIA verifies breakthroughs in green energy storage, localized AI bots for primary agriculture, and low-latency digital payment protocols for offline zones.",
      highlights: ["Scientific jury validation from top tech institutes", "Assisted IP and patenting pathways for honorees", "Incubation access with premium partners"]
    },
    {
      id: "art",
      title: "Art, Fashion & Culture",
      tagline: "Reviving Ancient Legacies",
      description: "Celebrating traditional textile weavers, heritage dancers, classical culinary scholars, and filmmakers telling deep-rooted stories that represent Indian culture globally.",
      highlights: ["National classical preservation grants", "Exhibition opportunities at the annual gala", "Cross-disciplinary mentorship programs"]
    },
    {
      id: "youth",
      title: "Youth Leadership Awards",
      tagline: "Inspiring the Next Generation",
      description: "Identifying and training dynamic change-makers under the age of 30 who are actively running climate action tasks, school-level mental health initiatives, or regional coding camps.",
      highlights: ["Fully funded invitations to global leadership summits", "Specialized mentor matching with industry titans", "Broad-spectrum media exposure and national profiling"]
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Incubating Excellence"
        title="Our Recognized Projects"
        description="We don't just hand out trophies. FSIA actively highlights, mentors, and funds specialized national projects that solve critical regional challenges."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            id={proj.id}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border-b border-white/10 pb-16 last:border-0 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block mb-1">
                Category #{idx + 1}
              </span>
              <h2 className="font-serif text-3xl font-light text-white">{proj.title}</h2>
              <p className="font-sans text-[#D4AF37] text-xs font-medium uppercase tracking-wider">{proj.tagline}</p>
              <p className="text-white/60 text-sm leading-relaxed font-light">{proj.description}</p>
              
              <div className="space-y-2.5 pt-2">
                {proj.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center space-x-2">
                    <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0" />
                    <span className="text-white/80 text-xs font-light">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-transparent border border-white/10 rounded-none p-8 sm:p-12 relative overflow-hidden">
              <Award className="w-16 h-16 text-white/5 mb-6" />
              <h3 className="font-serif text-lg font-light text-white mb-3">Impact Metrics</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-6 font-light">
                Each project in this category undergoes physical audit, stakeholder feedback interviews, and transparent environmental/social benefit ratio calculation.
              </p>
              <Link to="/register" className="inline-flex items-center space-x-1.5 text-xs text-[#D4AF37] hover:text-white font-mono tracking-widest uppercase font-semibold">
                <span>Submit a project for audit</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// 3. GLOBAL AWARDS PAGE
export function GlobalAwardsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="International Benchmarks"
        title="Global Laurels & Alignments"
        description="Connecting India's premier visionaries with international think-tanks, global summits, and foreign business councils to expand impact globally."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">Bilateral Recognition</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Through agreements signed with bilateral commerce associations in Europe, Singapore, and North America, FSIA-certified awardees receive expedited nominations to international fellowships, global climate conventions, and prominent world-wide braintrusts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {[
            { title: "Euro-India Fellowship", desc: "Allows chosen science laureates to collaborate at premium research institutions in Germany and France with full sponsorship." },
            { title: "Asean Pioneer Circle", desc: "A prominent tech platform connecting South-East Asian innovators with venture capital in Singapore and Vietnam." },
            { title: "Pan-Atlantic Civic Honor", desc: "Recognizes grassroot social workers, facilitating speaker slots at major global human rights frameworks." }
          ].map((item) => (
            <div key={item.title} className="bg-transparent border border-white/10 rounded-none p-6 space-y-3">
              <Globe className="w-8 h-8 text-[#D4AF37] mb-2" />
              <h3 className="font-serif text-md font-light text-[#D4AF37]">{item.title}</h3>
              <p className="text-white/50 text-[11px] leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// 4. NEWS COVERAGE PAGE
export function NewsPage() {
  const newsList = [
    {
      date: "May 14, 2026",
      source: "National Business Weekly",
      title: "FSIA 14th Edition Opens Global Portals For Local Indian Talent",
      summary: "This year, the Selection Council announces full-spectrum fellowships for select science and clean-tech honorees with major academic centers across Europe."
    },
    {
      date: "April 02, 2026",
      source: "The Chronicle Express",
      title: "How FSIA Has Created A Gold Standard In Peer-Reviewed Awards",
      summary: "By implementing blind jury review mechanisms and on-field physical audits, FSIA breaks away from typical commercial award platforms to honor actual regional champions."
    },
    {
      date: "Jan 18, 2026",
      source: "Vanguard Times",
      title: "Recap: FSIA 2025 Grand Ceremony Gathers Celebrities, Innovators",
      summary: "Under the theme of 'Ancestral Roots & Modern Tech', the grand stage in Mumbai celebrated 85 honorees across arts, digital innovation, and climate action."
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Media & Press Relations"
        title="News Coverage & Press Releases"
        description="Latest announcements, media mentions, and official statements from the FSIA Secretariat."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        {newsList.map((news) => (
          <div key={news.title} className="bg-transparent border border-white/10 rounded-none p-8 space-y-4 transition-all duration-300">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-[#D4AF37] uppercase tracking-wider">{news.source}</span>
              <span className="text-white/40">{news.date}</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-light text-white">{news.title}</h2>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">{news.summary}</p>
            <div className="pt-2">
              <button className="text-[10px] font-mono text-[#D4AF37] hover:text-white flex items-center space-x-1.5 uppercase tracking-widest font-semibold">
                <span>Read press release</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// 5. CELEBRITIES PAGE
export function CelebritiesPage() {
  const celebrities = [
    { name: "Siddharth Kapoor", role: "Eminent Cine Icon & Chief Guest 2025", quote: "Seeing the profound level of verification behind every award makes FSIA the most prestigious stage to support." },
    { name: "Dr. Vasundhara Sen", role: "Renowned Classical Dancer & Council Chair", quote: "FSIA honors the roots of our art form with the same vigor it celebrates high-end digital sciences. Exceptional." },
    { name: "Amitav Ghosh", role: "Acclaimed Author & Social Patron", quote: "The true star is always the one working quietly in regional corners. FSIA does the hard work of finding them." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Patronage & Support"
        title="Eminent Patrons & Celebrities"
        description="Eminent cultural figures, state leaders, and artistic icons who actively chair, present, and endorse the Federation of Star India Awards."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <p className="text-white/60 text-center text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
          Over 150+ actors, classical masters, legal professionals, and policy researchers have graced the FSIA stage as presenters. They stand in solidarity with our constitutional refusal to commercialize honors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {celebrities.map((cel) => (
            <div key={cel.name} className="bg-transparent border border-white/10 rounded-none p-6 text-center space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#D4AF37] font-serif text-lg font-light rounded-none">
                  {cel.name.charAt(0)}
                </div>
                <h3 className="font-serif text-md font-light text-white">{cel.name}</h3>
                <p className="text-[#D4AF37] text-[10px] font-mono uppercase tracking-widest">{cel.role}</p>
              </div>
              <p className="text-white/50 text-xs italic leading-relaxed pt-4 border-t border-white/10 font-light">
                "{cel.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// 6. CONTACT US PAGE
export function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Secretariat Communications"
        title="Contact Our Offices"
        description="For nomination queries, validation archives, corporate sponsorships, and media alignments, reach out directly to the Secretariat of FSIA."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Office Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-light text-white">The Secretariat</h2>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">
                Our main offices handle all physical file submissions and scheduling of on-site audits. Juries meet at scheduled centers across Bangalore, Mumbai, and Delhi.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40">Headquarters</h4>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    FSIA Trust Building, Phase III, Malviya Nagar,<br /> Jaipur, Rajasthan, 302017
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40">Call Secretariat</h4>
                  <p className="text-xs text-white/80 font-light">
                    +91 141-270-8541 <br />
                    <span className="text-white/40">(Mon - Fri, 10 AM - 5 PM)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40">Official Correspondence</h4>
                  <p className="text-xs text-white/80 font-light">
                    secretariat@fsia.in <br />
                    nominations@fsia.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-2 bg-transparent border border-white/10 rounded-none p-8 sm:p-10">
            <h2 className="font-serif text-xl sm:text-2xl font-light text-white mb-6">Send Diplomatic Communication</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 px-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                    placeholder="E.g. Dr. Ramesh Sharma"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 px-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Subject / Query Area</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 px-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                  placeholder="E.g. Sponsorship inquiry for 2026 Chapter"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Message Narrative</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 px-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                  placeholder="Elaborate on your inquiry in detail..."
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="bg-[#D4AF37] hover:bg-[#c19b2e] text-black font-bold text-xs uppercase tracking-[0.15em] px-8 py-4 rounded-none flex items-center space-x-2 cursor-pointer transition-colors"
                >
                  <span>Transmit Query</span>
                  <Send size={12} />
                </button>
                {isSent && (
                  <span className="text-[10px] text-[#D4AF37] font-mono italic animate-pulse">
                    ✓ Transmitted successfully. Our Secretariat will respond shortly.
                  </span>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// 7. REGISTER PAGE (PROMINENT GOLD REGISTER BUTTON TARGET)
export function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", category: "Social Impact Initiatives", location: "", narrative: "", links: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    // Reset
    setFormData({ name: "", email: "", phone: "", category: "Social Impact Initiatives", location: "", narrative: "", links: "" });
    setTimeout(() => setIsSuccess(false), 8000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="14th Annual Chapter"
        title="Official Registry & Nomination Portal"
        description="Apply or nominate an outstanding visionary for national recognition in the 2026 Chapter. Follow our strict verification guidelines."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-transparent border border-white/10 rounded-none p-8 sm:p-12 space-y-10 relative">
          
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-light text-white flex items-center space-x-2">
              <Award className="text-[#D4AF37] w-6 h-6 shrink-0" />
              <span>Register Profile Dossier</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">
              We accept self-nominations and third-party nominations. Please ensure all details are factual and verifiable. False claims will result in permanent blacklisting from our national registry.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Candidate Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 text-white/20" size={14} />
                  <input
                    type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                    placeholder="Full legal name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 text-white/20" size={14} />
                  <input
                    type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                    placeholder="email@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 text-white/20" size={14} />
                  <input
                    type="tel" required value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                    placeholder="E.g. +91 98765-43210"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Award Category</label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-3.5 text-white/20" size={14} />
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white/70 font-sans font-light"
                  >
                    <option>Social Impact Initiatives</option>
                    <option>Digital & Tech Innovation</option>
                    <option>Art, Fashion & Culture</option>
                    <option>Youth Leadership Awards</option>
                    <option>Global Business Honors</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Candidate City & State</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 text-white/20" size={14} />
                  <input
                    type="text" required value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                    placeholder="E.g. Pune, Maharashtra"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Achievement Narrative (Summary of Accomplishments)</label>
              <div className="relative">
                <FileText className="absolute left-3.5 top-3.5 text-white/20" size={14} />
                <textarea
                  required rows={4} value={formData.narrative}
                  onChange={(e) => setFormData({ ...formData, narrative: e.target.value })}
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                  placeholder="Elaborate on why this nominee meets the standard of national eminence... Highlight concrete data or achievements."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 block">Supporting Documents Link (Google Drive / DropBox / Website)</label>
              <input
                type="url" value={formData.links}
                onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-2.5 px-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
                placeholder="https://drive.google.com/..."
              />
            </div>

            <div className="pt-4 flex flex-col items-center">
              <button
                type="submit"
                className="w-full py-4 rounded-none bg-[#D4AF37] hover:bg-[#c19b2e] text-black font-bold text-center text-xs uppercase tracking-[0.15em] transition-colors cursor-pointer"
              >
                Submit Official Nomination
              </button>
              
              {isSuccess && (
                <div className="mt-6 bg-white/5 border border-[#D4AF37]/30 rounded-none p-4 w-full text-center text-xs text-[#D4AF37] font-mono italic">
                  ✓ Profile Dossier logged under temporary ID: <strong>FSIA-2026-{Math.floor(Math.random() * 9000) + 1000}</strong>. Our screening committee will send confirmation emails to both candidate and nominators within 7 business days. Thank you for maintaining the prestige of our national legacy.
                </div>
              )}
            </div>
          </form>

        </div>
      </div>
    </motion.div>
  );
}

// 8. WINNERS 2025 PAGE (DEDICATED ROUTE TARGET)
export function Winners2025Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const winners = [
    { name: "Dr. Aditya Vardhan", cat: "Science & Clean Tech Leader", loc: "Bangalore", ID: "FS-w1" },
    { name: "Meenakshi Iyengar", cat: "Cultural Preservationist", loc: "Madurai", ID: "FS-w2" },
    { name: "Kabir & Natasha Malhotra", cat: "Co-founders, AgriConnect", loc: "Pune", ID: "FS-w3" },
    { name: "Rishi Raj Singh", cat: "Under-30 Digital Visionary", loc: "Jaipur", ID: "FS-w4" },
    { name: "Prof. Devendra Joshi", cat: "Lifetime Educational Honor", loc: "Nainital", ID: "FS-w5" },
    { name: "Sunita Deshmukh", cat: "Grassroots Medical Pioneer", loc: "Nagpur", ID: "FS-w6" },
  ];

  const filteredWinners = winners.filter(w =>
    w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.cat.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.loc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="National Achievements"
        title="Hall of Fame — 2025 Chapter"
        description="The exhaustive list of verified award winners and project laureates who received honors at the Grand Ballroom Ceremony in Mumbai."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, category, or region..."
            className="w-full bg-[#0d0d0d] border border-white/10 rounded-none py-3 px-4 text-xs focus:outline-none focus:border-[#D4AF37] text-white font-sans font-light"
          />
        </div>

        <div className="space-y-4">
          {filteredWinners.length > 0 ? (
            filteredWinners.map((winner) => (
              <div key={winner.ID} className="bg-transparent border border-white/10 rounded-none p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest block">{winner.cat}</span>
                  <h3 className="font-serif text-lg font-light text-white">{winner.name}</h3>
                  <p className="font-sans text-xs text-white/50 font-light">{winner.loc}, India</p>
                </div>
                <div className="flex items-center space-x-3 self-stretch sm:self-auto justify-between sm:justify-end border-t border-white/10 sm:border-0 pt-3 sm:pt-0">
                  <span className="font-mono text-[10px] text-white/30">Registry ID: {winner.ID}</span>
                  <span className="bg-white/5 border border-[#D4AF37]/20 text-[#D4AF37] font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-none">
                    Verified Honoree
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xs text-white/40 py-10 font-mono">No verified honorees matched your search.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// 9. AUDITIONS & SELECTION PAGE (STATS SECTION GATEWAY TARGET)
export function AuditionsPage() {
  const steps = [
    { num: "01", name: "Dossier Submission", desc: "Submit your comprehensive profile narrative, verified certifications, and third-party references through our secured online portal." },
    { num: "02", name: "Jury Screening", desc: "Our blind Jury Council independently scores all submissions based on absolute impact metrics, local sustainability, and long-term viability." },
    { num: "03", name: "Field Physical Audit", desc: "For chosen finalists, local physical verification teams visit on-site to interview stakeholders and authenticate claimed metrics." },
    { num: "04", name: "Gala Presentation", desc: "Laureates receive direct invites to the supreme national gala, where honors are handed by key political and cultural leaders." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="How It Works"
        title="Selection & Audition Protocols"
        description="We follow a rigorous, peer-reviewed, multi-stage vetting process to guarantee the absolute sovereignty and value of our national honors."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        
        <div className="bg-transparent border border-white/10 rounded-none p-8 space-y-4">
          <h2 className="font-serif text-xl font-light text-white">The 4-Stage Vetting Council</h2>
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">
            Unlike commercial entities where awards can be purchased or influenced via corporate alignment, FSIA enforces a strictly scientific evaluation loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="bg-transparent border border-white/10 rounded-none p-8 relative space-y-3">
              <span className="font-serif text-3xl font-light text-[#D4AF37]/20 absolute top-4 right-6">{step.num}</span>
              <h3 className="font-serif text-lg font-light text-white">{step.name}</h3>
              <p className="text-white/50 text-xs leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link to="/register" className="inline-flex bg-[#D4AF37] hover:bg-[#c19b2e] text-black font-bold px-8 py-4 rounded-none text-xs uppercase tracking-[0.15em] transition-colors">
            Register for 2026 Auditions Now
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

// 10. SPONSORSHIP OPPORTUNITIES PAGE (FOOTER & HOME COLLAGE TARGET)
export function SponsorshipPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Corporate Alignments"
        title="Sponsorship Opportunities"
        description="Align your premium brand with national recognition, media broadcasts, and extensive public trust. Co-create a landmark chapter of merit."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">Why Partner With FSIA?</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            The Federation of Star India Awards maintains absolute independence in winner selection. This uncompromising stance has elevated the brand value of our partners. Supporting FSIA means actively funding national scientific fellowships, classical art grants, and grassroot NGO audits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {[
            { title: "National Broadcast Sponsor", desc: "Gain massive television and digital coverage on top prime-time networks during our multi-day gala broadcast, reaching 85M+ impressions." },
            { title: "Sovereign Category Patron", desc: "Fund the physical auditing and subsequent funding grants for a dedicated award category like 'Digital Innovation' or 'Social Impact'." }
          ].map((tier) => (
            <div key={tier.title} className="bg-transparent border border-white/10 rounded-none p-8 space-y-3">
              <h3 className="font-serif text-lg font-light text-[#D4AF37]">{tier.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed font-light">{tier.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-none p-8 text-center space-y-4">
          <h3 className="font-serif text-xl font-light text-white">Request Partnership Catalogue</h3>
          <p className="text-white/50 text-xs max-w-lg mx-auto font-light">
            Contact our Corporate Alignment team at <strong className="text-[#D4AF37]">secretariat@fsia.in</strong> or fill out our official correspondence form.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="inline-flex bg-transparent hover:bg-white/5 text-white border border-white/10 hover:border-white px-6 py-3 rounded-none text-[10px] uppercase tracking-widest font-mono font-semibold transition-all">
              Go to Contact Office
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 11. CITY-WISE WINNERS PAGE
export function WinnersCityPage() {
  const cities = [
    { city: "Bangalore", winner: "Dr. Aditya Vardhan", category: "Science & Clean Tech" },
    { city: "Madurai", winner: "Meenakshi Iyengar", category: "Art & Culture" },
    { city: "Pune", winner: "Kabir & Natasha Malhotra", category: "Social Impact" },
    { city: "Jaipur", winner: "Rishi Raj Singh", category: "Youth Leadership" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Regional Honors"
        title="City-wise Winners Circle"
        description="Discover how municipal champions are recognized across individual cities, fueling localized progress and municipal pride."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
        {cities.map((item) => (
          <div key={item.city} className="bg-transparent border border-white/10 rounded-none p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest">{item.city} City Chapter</span>
              <h3 className="font-serif text-lg font-light text-white">{item.winner}</h3>
              <p className="text-white/60 text-xs font-light">{item.category}</p>
            </div>
            <Link to="/winners-2025" className="text-xs font-mono text-white/50 hover:text-[#D4AF37] flex items-center space-x-1 self-end sm:self-auto transition-colors">
              <span>View Dossier</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// 12. STATE-WISE WINNERS PAGE
export function WinnersStatePage() {
  const states = [
    { state: "Karnataka", winner: "Dr. Aditya Vardhan", chapters: "Bangalore, Mysore" },
    { state: "Tamil Nadu", winner: "Meenakshi Iyengar", chapters: "Chennai, Madurai, Coimbatore" },
    { state: "Maharashtra", winner: "Kabir & Natasha Malhotra", chapters: "Mumbai, Pune, Nagpur" },
    { state: "Rajasthan", winner: "Rishi Raj Singh", chapters: "Jaipur, Udaipur, Jodhpur" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Regional Honors"
        title="State-wise Winners Circle"
        description="Highlighting provincial accomplishments across participating states. Celebrating local leadership that strengthens the union."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
        {states.map((item) => (
          <div key={item.state} className="bg-transparent border border-white/10 rounded-none p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-widest">{item.state} State Board</span>
              <h3 className="font-serif text-lg font-light text-white">{item.winner}</h3>
              <p className="text-white/60 text-xs font-light">Active Chapters: {item.chapters}</p>
            </div>
            <Link to="/winners-2025" className="text-xs font-mono text-white/50 hover:text-[#D4AF37] flex items-center space-x-1 self-end sm:self-auto transition-colors">
              <span>View Board Archives</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// 13. NOMINATION GUIDEBOOK PAGE
export function NominationGuidePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Dossier Instructions"
        title="Nomination Guidebook"
        description="Comprehensive guidelines on preparing, documenting, and submitting your candidate file for peer review councils."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
        <div className="bg-transparent border border-white/10 rounded-none p-8 space-y-4">
          <h2 className="font-serif text-xl font-light text-white">Requirements Checkbox</h2>
          <ul className="space-y-3 text-white/60 text-xs sm:text-sm font-light">
            <li className="flex items-start space-x-2">
              <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Full legal identification of nominator and candidate.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Dossier summary of accomplishments (Max 1,200 words).</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span>At least 3 verifiable references from independent domain specialists.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Supporting press materials, journals, links, or patent registries.</span>
            </li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <Link to="/register" className="inline-flex bg-[#D4AF37] hover:bg-[#c19b2e] text-black font-bold px-8 py-4 rounded-none text-xs uppercase tracking-[0.15em] transition-colors">
            Go to Submission Form
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// 14. LEGAL PAGES (TERMS, PRIVACY, REFUND, GRIEVANCE)
export function LegalTermsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Trust & Compliance"
        title="Terms & Conditions"
        description="The sovereign charter rules governing applications, registry listing, and physical file submissions."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white/70 text-xs sm:text-sm leading-relaxed space-y-6 font-light">
        <h3 className="font-serif text-lg font-light text-white">1. Submissions & Verifications</h3>
        <p>By logging a profile on the FSIA platform, the applicant confirms that all stated data, metrics, and references are factual. FSIA reserves the absolute right to verify these details via physical on-site audit teams at any point prior to final jury meetings.</p>
        <h3 className="font-serif text-lg font-light text-white">2. Non-Commercial Stance</h3>
        <p>The screening and final jury scoring of nominees cannot be purchased. Sponsorships are separate from selection, and sponsoring partners understand that their backing carries zero weight in final winner scorecards.</p>
      </div>
    </motion.div>
  );
}

export function LegalPrivacyPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Trust & Compliance"
        title="Privacy Policy"
        description="How we encrypt and protect your candidate dossier data, research materials, and contact registries."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white/70 text-xs sm:text-sm leading-relaxed space-y-6 font-light">
        <h3 className="font-serif text-lg font-light text-white">Dossier Confidentiality</h3>
        <p>Your submitted achievements, patent materials, and reference contact numbers are kept highly secure using server-side encryption. We never rent, share, or sell applicant databases to marketing agencies. Only authorized members of our screening jury have access to blind candidate files.</p>
      </div>
    </motion.div>
  );
}

export function LegalRefundPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Trust & Compliance"
        title="Refund Policy"
        description="Understanding rules governing audit filings and grand ballroom invitation registrations."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white/70 text-xs sm:text-sm leading-relaxed space-y-6 font-light">
        <h3 className="font-serif text-lg font-light text-white">Filings Fee</h3>
        <p>Nomination logging is free of cost. However, certain specialized project-level physical audits that require regional on-field surveyors may carry an administration filing fee. These fees are fully spent on logistics and are completely non-refundable once an auditor has commenced on-field surveys.</p>
      </div>
    </motion.div>
  );
}

export function LegalGrievancePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#0a0a0a] min-h-screen text-white">
      <SubpageHero
        category="Trust & Compliance"
        title="Grievance Redressal"
        description="Dedicated system to appeal council decisions or report misrepresentation of FSIA honors."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white/70 text-xs sm:text-sm leading-relaxed space-y-6 font-light">
        <h3 className="font-serif text-lg font-light text-white">Official Appeals</h3>
        <p>If a candidate believes that their dossier was not processed in alignment with our screen standards, they can register an appeal within 15 calendar days of official winner announcements. Please mail a verified document file to the Grievance Officer at <strong className="text-[#D4AF37]">secretariat@fsia.in</strong>.</p>
      </div>
    </motion.div>
  );
}
