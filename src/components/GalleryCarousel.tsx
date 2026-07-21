import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1566206091558-f322e43f15cb?auto=format&fit=crop&w=1200&q=80",
    title: "Glitz & Glamour Runway",
    category: "Fashion Pageant"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    title: "National Awards Ceremony",
    category: "Awards Night"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    title: "Elite Red Carpet Arrivals",
    category: "VIP Showcase"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    title: "Forever Miss India Crowning",
    category: "Crowning Moment"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
    title: "Billionaire Luxury Banquet",
    category: "Gala Dinner"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    title: "Business Leadership Summit",
    category: "Laurels Showcase"
  }
];

export default function GalleryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="gallery-carousel-section" className="py-16 md:py-24 bg-gradient-to-b from-[#0f0f0f] to-[#050505] overflow-hidden relative">
      {/* Decorative luxury gold abstract background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                Exclusive Media Archive
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Glory in Motion — <span className="text-[#D4AF37]">The Gallery</span>
            </h2>
            <p className="mt-3 text-sm text-stone-400 font-light max-w-xl">
              Capturing the defining triumphs, pristine aesthetics, and royal crowns from previous seasons of the FSIA legacy.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-stone-800 bg-stone-900/50 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center text-stone-400 focus:outline-none cursor-pointer group"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="transform group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-stone-800 bg-stone-900/50 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center text-stone-400 focus:outline-none cursor-pointer group"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="transform group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto snap-x mandatory scrollbar-none pb-6 touch-pan-x"
          style={{ scrollbarWidth: "none" }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-[290px] sm:w-[380px] md:w-[420px] snap-start"
            >
              <div className="relative aspect-[4/3] overflow-hidden group border border-stone-800 bg-stone-900">
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />
                
                {/* Luxury Gold Border on Hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37] transition-colors duration-500 z-20 pointer-events-none" />

                {/* Real Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Caption Detail */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-1.5">
                    {image.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-tight">
                    {image.title}
                  </h3>
                </div>

                {/* Sparkling gold glow accent */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_#D4AF37]" />
              </div>
            </div>
          ))}
        </div>

        {/* Swipe Hint Indicator for Touch Screens */}
        <div className="text-center mt-4">
          <p className="text-[10px] font-mono tracking-widest text-stone-500 uppercase sm:hidden animate-pulse">
            &larr; Drag or swipe to explore archive &rarr;
          </p>
        </div>

      </div>
    </section>
  );
}
