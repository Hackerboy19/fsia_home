export interface SearchWinner {
  id: string;
  type: "winner";
  name: string;
  category: string;
  city: string;
  state: string;
  achievement: string;
  year: string;
  image: string;
  link: string;
}

export interface SearchProject {
  id: string;
  type: "project";
  title: string;
  category: string;
  lead: string;
  city: string;
  status: string;
  description: string;
  year: string;
  link: string;
}

export type SearchItem = SearchWinner | SearchProject;

export const SEARCH_ITEMS: SearchItem[] = [
  // Winners (Miss India, Mrs India, Teen India, Business, Super Heroes, etc.)
  {
    id: "w-1",
    type: "winner",
    name: "Arushi Sen",
    category: "Forever Miss India",
    city: "New Delhi",
    state: "Delhi",
    achievement: "Crowned National Winner & Brand Ambassador 2025",
    year: "2025",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    link: "/winners-2025"
  },
  {
    id: "w-2",
    type: "winner",
    name: "Dr. Meera Deshmukh",
    category: "Forever Mrs India",
    city: "Mumbai",
    state: "Maharashtra",
    achievement: "Winner - Elite Category & Wellness Icon Award",
    year: "2025",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    link: "/winners-2025"
  },
  {
    id: "w-3",
    type: "winner",
    name: "Ria Singhal",
    category: "Forever Miss Teen India",
    city: "Jaipur",
    state: "Rajasthan",
    achievement: "Crowned Miss Teen Winner & Creative Prodigy Title",
    year: "2025",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    link: "/winners-2025"
  },
  {
    id: "w-4",
    type: "winner",
    name: "Nikhil Malhotra",
    category: "Super Heroes Title",
    city: "Bengaluru",
    state: "Karnataka",
    achievement: "National Social Impact Laureate for Green Energy Innovation",
    year: "2025",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    link: "/winners-2025"
  },
  {
    id: "w-5",
    type: "winner",
    name: "Pooja Hegde (Social)",
    category: "Super Women Title",
    city: "Hyderabad",
    state: "Telangana",
    achievement: "Excellence in Grassroots Education & NGO Leadership",
    year: "2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    link: "/winners-2025"
  },
  {
    id: "w-6",
    type: "winner",
    name: "Vikramaditya Rathore",
    category: "Business Awards",
    city: "Udaipur",
    state: "Rajasthan",
    achievement: "Luxury Hospitality Pioneer & Heritage Preservation Excellence",
    year: "2024",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    link: "/winners-2025"
  },
  {
    id: "w-7",
    type: "winner",
    name: "Kabir Mehta",
    category: "Mr India",
    city: "Pune",
    state: "Maharashtra",
    achievement: "Crowned Mr India - Best Physique & Fashion Icon",
    year: "2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    link: "/winners-2025"
  },
  {
    id: "w-8",
    type: "winner",
    name: "Shalini Kapoor",
    category: "Mrs World Representative",
    city: "Kolkata",
    state: "West Bengal",
    achievement: "Outstanding International Ambassador for Cultural Arts",
    year: "2025",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    link: "/winners-2025"
  },

  // Projects / Initiatives
  {
    id: "p-1",
    type: "project",
    title: "EcoWater Filtration Tech",
    category: "Business Awards / Green Innovation",
    lead: "Nikhil Malhotra",
    city: "Bengaluru",
    status: "Implemented in 24 villages",
    description: "Affordable, non-electric solar water purifiers delivering clean drinking water to underprivileged dry-arid zones.",
    year: "2025",
    link: "/winners-2025"
  },
  {
    id: "p-2",
    type: "project",
    title: "Nari Shiksha Initiative",
    category: "Super Women Title / Social Upliftment",
    lead: "Pooja Hegde",
    city: "Hyderabad",
    status: "Active - Over 1,200 girls enrolled",
    description: "Digital literacy and vocational fashion designing courses integrated with local artisans to enable financial autonomy.",
    year: "2025",
    link: "/winners-2025"
  },
  {
    id: "p-3",
    type: "project",
    title: "Heritage Weaves Preservation",
    category: "Traditional Heritage Preservation & Crafts",
    lead: "Vikramaditya Rathore",
    city: "Udaipur",
    status: "Partnered with 80 master weavers",
    description: "Reviving authentic handloom patterns of Mewar and listing them in luxury global hospitality boutiques.",
    year: "2024",
    link: "/winners-2025"
  },
  {
    id: "p-4",
    type: "project",
    title: "Mental Wellness for Youth",
    category: "Health & Medicine / Social Impact",
    lead: "Dr. Meera Deshmukh",
    city: "Mumbai",
    status: "Active clinical workshops",
    description: "Free cognitive behavioral therapy workshops and peer assistance networks for competitive exam aspirants across Maharashtra.",
    year: "2025",
    link: "/winners-2025"
  }
];
