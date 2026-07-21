import { useRef, useEffect } from "react";
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
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
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
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    title: "Billionaire Luxury Banquet",
    category: "Gala Dinner"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1566206091558-f322e43f15cb?auto=format&fit=crop&w=1200&q=80",
    title: "Business Leadership Summit",
    category: "Laurels Showcase"
  }
];

export default function GalleryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Sleek auto-playing logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // If we reached the end, scroll back to start, otherwise scroll right
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery-carousel-section" className="py-24 bg-[#FAFAFA] border-t border-stone-200/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Controls Header block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                Exclusive Media Archive
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#171717] tracking-tight">
              Glory in Motion — <span className="text-[#D4AF37]">The Gallery</span>
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-xl">
              Capturing the defining triumphs, pristine aesthetics, and royal crowns from previous seasons.
            </p>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center space-x-2 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable image list */}
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto snap-x mandatory scrollbar-none pb-4 touch-pan-x"
          style={{ scrollbarWidth: "none" }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] snap-start"
            >
              <div className="relative aspect-[3/2] overflow-hidden group border border-stone-200/80 bg-white">
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500 z-10" />
                
                {/* Gold frame overlay */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37]/80 transition-colors duration-500 z-20 pointer-events-none" />

                <img
                  src={image.url}
                  alt={image.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                <div className="absolute bottom-0 inset-x-0 p-5 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-1">
                    {image.category}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white tracking-tight">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
