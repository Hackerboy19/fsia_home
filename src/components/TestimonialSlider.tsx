import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Trophy, Sparkles, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  category: string;
  city: string;
  state: string;
  year: string;
  quote: string;
  image: string;
  achievement: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Arushi Sen",
    category: "Forever Miss India 2025",
    city: "New Delhi",
    state: "Delhi",
    year: "2025",
    quote: "Winning Forever Miss India was not just a crowning moment; it was an absolute career transformation. The immediate Google indexing of my verified profile brought casting directors directly to my inbox, and the residential grooming camp instilled a lifelong sense of poise and purpose.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    achievement: "Crowned National Winner & Brand Ambassador"
  },
  {
    id: "t-2",
    name: "Dr. Meera Deshmukh",
    category: "Forever Mrs India 2025",
    city: "Mumbai",
    state: "Maharashtra",
    year: "2025",
    quote: "FSIA gave me a prestigious national platform to amplify my mental wellness advocacy across the country. Balancing a busy medical career and a national sash was possible only due to their highly supportive mentorship, professional coordination, and magnificent staging.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
    achievement: "Elite Category & Wellness Icon Laureate"
  },
  {
    id: "t-3",
    name: "Ria Singhal",
    category: "Forever Miss Teen India 2025",
    city: "Jaipur",
    state: "Rajasthan",
    year: "2025",
    quote: "Standing on that grand national stage in Delhi was surreal. The intensive runway coaching and media training gave me immense confidence. FSIA is truly the ultimate launching pad for young women who dream big.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&h=400&q=80",
    achievement: "Crowned Miss Teen Winner & Creative Prodigy"
  },
  {
    id: "t-4",
    name: "Vikramaditya Rathore",
    category: "Business Awards 2024",
    city: "Udaipur",
    state: "Rajasthan",
    year: "2024",
    quote: "Receiving the National Business Award by Forever Star India solidified our brand's reputation as a premium heritage preserver. The media coverage and industry networking during the Delhi grand finale were top-notch and opened countless new avenues.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    achievement: "Luxury Hospitality Pioneer & Heritage Icon"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Slide transition variants for Framer Motion
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0
    })
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="testimonial-slider-section" 
      className="bg-stone-50 border-t border-stone-200/60 py-24 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-[#D4AF37]/30 px-3 py-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
              Success Stories
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
            The Crown of <span className="italic font-normal text-[#D4AF37]">Prestige</span>
          </h2>
          <p className="font-sans text-stone-500 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
            Discover the journeys and experiences of our crowned winners and business awardees from previous seasons.
          </p>
        </div>

        {/* Slider Box */}
        <div className="relative min-h-[480px] md:min-h-[420px] bg-white border border-stone-200/80 p-8 sm:p-12 lg:p-16 shadow-xl shadow-stone-100 flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Decorative elements */}
          <div className="absolute right-0 top-0 text-stone-100 select-none pointer-events-none transform translate-x-12 -translate-y-12">
            <Quote size={220} strokeWidth={0.5} />
          </div>

          {/* Testimonial Active Slide Frame */}
          <div className="relative z-10 flex-grow">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left: Beautiful masked Portrait with gold frame */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#BF953F] to-[#FCF6BA] rounded-full scale-[1.04] shadow-md transition-transform duration-300 group-hover:scale-[1.07]"></div>
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      referrerPolicy="no-referrer"
                      className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white shadow-inner"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-neutral-950 text-[#D4AF37] border border-[#D4AF37]/30 p-2 rounded-full shadow-lg">
                      <Trophy size={14} />
                    </div>
                  </div>
                </div>

                {/* Right: Testimonial details */}
                <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center lg:justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Quote Paragraph */}
                  <p className="font-serif text-lg sm:text-xl lg:text-2xl font-light text-stone-800 leading-relaxed italic">
                    "{activeTestimonial.quote}"
                  </p>

                  {/* Laureate Profile Signature */}
                  <div className="space-y-1.5">
                    <h4 className="font-sans text-sm sm:text-base font-semibold text-stone-900 flex items-center justify-center lg:justify-start gap-2">
                      <span>{activeTestimonial.name}</span>
                      <span className="text-[10px] font-mono text-[#D4AF37] bg-amber-50 px-2 py-0.5 border border-amber-200/30 rounded font-bold">
                        {activeTestimonial.year}
                      </span>
                    </h4>
                    <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
                      {activeTestimonial.category} — {activeTestimonial.achievement}
                    </p>
                    <p className="text-[11px] text-stone-400 font-light font-sans">
                      Hometown: {activeTestimonial.city}, {activeTestimonial.state}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider controls & Indicator footer row */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 mt-8 border-t border-stone-100">
            {/* Interactive Dot indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? "w-8 bg-[#D4AF37]" 
                      : "w-2.5 bg-stone-200 hover:bg-stone-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2 border border-stone-200 hover:border-[#D4AF37] text-stone-500 hover:text-[#D4AF37] rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer bg-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 border border-stone-200 hover:border-[#D4AF37] text-stone-500 hover:text-[#D4AF37] rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer bg-white"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
