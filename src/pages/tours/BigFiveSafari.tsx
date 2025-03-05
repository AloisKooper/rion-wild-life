import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaStar, FaMapMarkerAlt, FaClock, FaTag, FaCalendarAlt, FaUserFriends, FaMapPin, FaBinoculars, FaUtensils, FaBed, FaCar, FaPlane, FaCheck, FaTimes, FaRegCalendarAlt, FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/home/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SafariMapSection from "../../components/home/SafariMapSection";
import { MapContainer, TileLayer, Marker, Popup, Polyline, ZoomControl, LayersControl, ScaleControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";
import type { LatLngTuple, LatLngExpression } from 'leaflet';
import ButtonCTA from "../../components/ui/button-cta";
import { X, Phone, Calendar, Check, MapPin, Car, Bed, Users, Clock, CalendarDays, CalendarRange } from "lucide-react";
import TourHeader from "@/components/TourHeader";
import TripDetails from "@/components/TripDetails";
import ChecklistSection from "@/components/ChecklistSection";
import TabContent from "@/components/TabContent";
import GoogleMap from "@/components/GoogleMap";
import QASection from "@/components/QASection";
import TripGallery from "@/components/TripGallery";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import GuideCard from "@/components/GuideCard";

// Initialize Leaflet icons configuration once
const iconConfig = () => {
  // Delete default icon references
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  // Configure default icons
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/images/marker-icon-2x.png",
    iconUrl: "/images/marker-icon.png",
    shadowUrl: "/images/marker-shadow.png",
  });
};

// Call the icon configuration function
iconConfig();

// Feature item with icon
const FeatureItem: React.FC<{
  icon: string;
  title: string;
  value: string;
}> = ({ icon, title, value }) => (
  <div className="flex items-start space-x-3 mb-6">
    <img src={icon} alt={title} className="w-6 h-6 mt-1" />
    <div>
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <p className="text-lg font-semibold text-[#3D3E48]">{value}</p>
    </div>
  </div>
);

// Destination interface with proper types
interface Destination {
  name: string;
  coordinates: LatLngTuple;
  description: string;
  country: string;
}

// Route interface with proper types
interface Route {
  id: number;
  name: string;
  description: string;
  color: string;
  duration: string;
  price: string;
  difficulty: string;
  highlights: string[];
  destinations: Destination[];
}

const BigFiveSafari = () => {
  const [isReady, setIsReady] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'itinerary' | 'accommodations' | 'map' | 'gallery' | 'inclusions' | 'booking'>('overview');
  const [stickyState, setStickyState] = useState<'top' | 'middle' | 'bottom'>('top');
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const tourGuideRef = useRef<HTMLDivElement>(null);
  const stickyNavRef = useRef<HTMLDivElement>(null);
  const [isNavSticky, setIsNavSticky] = useState(false);

  // Get icon component based on name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'car': return <Car className="h-5 w-5" />;
      case 'bed': return <Bed className="h-5 w-5" />;
      case 'users': return <Users className="h-5 w-5" />;
      case 'clock': return <Clock className="h-5 w-5" />;
      case 'calendar': return <CalendarDays className="h-5 w-5" />;
      default: return null;
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would connect to your booking system
    console.log("Booking request:", { name, email, date });
    // Reset form
    setName('');
    setEmail('');
    setDate('');
    // Show success message
    alert("Thank you for your booking request! We'll contact you shortly.");
  };

  // Set isReady to true after component mounts to trigger animations
  useEffect(() => {
    setIsReady(true);
  }, []);

  // Content for Big Five Safari
  const tourData = {
    name: "Big Five Safari",
    location: "Nambovic Reserve, Namibia",
    description: "Experience an unforgettable photography safari in Nambovic Reserve, focusing on capturing the iconic Big Five (lion, leopard, elephant, rhino, and buffalo) in their natural habitat.",
    heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=85&w=2940",
    price: "€2,100",
    duration: "5 days, 4 nights",
    groupSize: "2-6 people",
    details: [
      {
        icon: "car" as const,
        title: "Transportation",
        description: "Safari-equipped 4x4 vehicles with window seats for every photographer"
      },
      {
        icon: "bed" as const,
        title: "Accommodation",
        description: "Premium safari lodges with photography-focused amenities"
      },
      {
        icon: "users" as const,
        title: "Group Size",
        description: "Limited to 6 photographers for personalized attention"
      },
      {
        icon: "clock" as const,
        title: "Duration",
        description: "5 days, 4 nights with multiple photography sessions daily"
      },
      {
        icon: "calendar" as const, 
        title: "Best Time to Visit",
        description: "May-October for clear visibility and wildlife congregation around waterholes"
      }
    ],
    guide: {
      name: "Professor Rion Haraeb",
      imageSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
      description: "With over 20 years of experience guiding safaris in Namibia since 2000, I'm excited to share my knowledge of the Big Five and help you capture stunning images. As a bilingual guide (English and German), I specialize in wildlife photography and tracking."
    },
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer: "We recommend bringing a DSLR or mirrorless camera, telephoto lens (at least 200mm, ideally 400mm+), wide-angle lens, tripod, extra batteries, memory cards, and a laptop for editing sessions."
      },
      {
        question: "What is the accommodation like?",
        answer: "You'll stay in premium safari lodges within the reserve. All rooms have private bathrooms, electricity for charging equipment, and areas for reviewing your photos."
      },
      {
        question: "Are meals included in the safari?",
        answer: "Yes, all meals are included. We serve breakfast, lunch, dinner and provide snacks and drinks during game drives."
      },
      {
        question: "What is the chance of seeing all of the Big Five?",
        answer: "While we have a high success rate, wildlife sightings are never guaranteed. The Nambovic Reserve has healthy populations of all Big Five species, and our experienced guides maximize your chances of quality photography opportunities."
      },
      {
        question: "Is this safari suitable for beginner photographers?",
        answer: "Yes, photographers of all skill levels are welcome. Our guides provide personalized instruction based on your experience level, from camera settings to composition techniques."
      }
    ],
    safariImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80&w=1920",
    included: [
      "Professional bilingual guide (English/German) with wildlife tracking expertise",
      "Transportation in specialized photography safari vehicles",
      "Accommodation in premium safari lodges (4 nights)",
      "All meals and refreshments",
      "Park entrance and conservation fees",
      "Evening photography workshops and editing sessions",
      "Airport transfers from designated meeting points"
    ],
    excluded: [
      "International and domestic flights",
      "Camera equipment and accessories",
      "Travel insurance (mandatory)",
      "Personal expenses and souvenirs",
      "Gratuities for guides and lodge staff",
      "Optional pre/post safari accommodations"
    ],
    mapLocation: {
      lat: -19.7988,
      lng: 17.5368,
      name: "Nambovic Reserve, Namibia"
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Introduction",
        description: "Airport pickup, transfer to the lodge, equipment setup, and evening photography workshop on wildlife photography techniques."
      },
      {
        day: 2,
        title: "Lion & Leopard Focus",
        description: "Early morning and late afternoon game drives focused on big cat photography. Midday editing workshop and photography tips."
      },
      {
        day: 3,
        title: "Elephant & Buffalo Encounters",
        description: "Full-day exploration focusing on elephant herds and buffalo photography. Special waterhole hide session during golden hour."
      },
      {
        day: 4,
        title: "Rhino Tracking Day",
        description: "Specialized rhino tracking experience with expert rangers. Learn about conservation efforts while capturing these magnificent creatures."
      },
      {
        day: 5,
        title: "Final Safari & Departure",
        description: "Early morning game drive to capture any missing species, followed by brunch, photo sharing session, and airport transfers."
      }
    ],
    accommodation: "Premium safari lodges within the Nambovic Reserve, offering comfortable rooms with ensuite bathrooms, photography workspaces, and views of the African bush. All lodges have electricity for charging camera equipment and Wi-Fi for backing up photos.",
    tourRoute: [
      {
        time: "Day 1, 14:00",
        activity: "Airport pickup & transfer to lodge"
      },
      {
        time: "Day 1, 16:30",
        activity: "Introductory game drive"
      },
      {
        time: "Day 2, 05:30",
        activity: "Early morning game drive (lions & leopards)"
      },
      {
        time: "Day 2, 14:00",
        activity: "Photography workshop & editing session"
      },
      {
        time: "Day 2, 16:00",
        activity: "Afternoon game drive"
      },
      {
        time: "Day 3, 05:30",
        activity: "Full-day elephant & buffalo photography"
      },
      {
        time: "Day 3, 16:00",
        activity: "Waterhole hide session"
      },
      {
        time: "Day 4, 05:30",
        activity: "Rhino tracking experience"
      },
      {
        time: "Day 4, 16:00",
        activity: "Final sunset game drive"
      },
      {
        time: "Day 5, 05:30",
        activity: "Last game drive opportunity"
      },
      {
        time: "Day 5, 11:00",
        activity: "Photo sharing & departure"
      }
    ],
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1920&q=80",
        alt: "Lion in Namibia"
      },
      {
        src: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1920&q=80",
        alt: "Leopard in Tree"
      },
      {
        src: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1920&q=80",
        alt: "Elephant Herd"
      },
      {
        src: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1920&q=80",
        alt: "Rhino"
      },
      {
        src: "https://images.unsplash.com/photo-1561731157-bed83a3d9741?auto=format&fit=crop&w=1920&q=80",
        alt: "Cape Buffalo"
      },
      {
        src: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8b?auto=format&fit=crop&w=1920&q=80",
        alt: "Safari Landscape"
      }
    ]
  };

  // Handle scroll events to control sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      if (!mainContentRef.current || !sidebarRef.current || !tourGuideRef.current || !stickyNavRef.current) return;
      
      const scrollY = window.scrollY;
      const tourGuideOffset = tourGuideRef.current.offsetTop;
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // If the sidebar is taller than the viewport, we can't make it fully sticky
      if (sidebarHeight > windowHeight) {
        if (scrollY > tourGuideOffset - windowHeight) {
          setStickyState('bottom');
        } else {
          setStickyState('top');
        }
      } else {
        // Normal sticky behavior
        if (scrollY > tourGuideOffset - windowHeight) {
          setStickyState('bottom');
        } else if (scrollY > 300) {
          setStickyState('middle');
        } else {
          setStickyState('top');
        }
      }

      if (stickyNavRef.current) {
        const stickyPosition = stickyNavRef.current.offsetTop;
        if (scrollY > stickyPosition) {
          setIsNavSticky(true);
        } else {
          setIsNavSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when tab is clicked
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId as 'overview' | 'details' | 'itinerary' | 'accommodations' | 'map' | 'gallery' | 'inclusions' | 'booking');
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Adjust based on your header height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-background ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Navbar - absolutely positioned at top */}
      <header className="absolute top-0 left-0 right-0 z-50">
      <Navbar />
      </header>
      
      {/* Hero Section with two columns */}
      <section className="relative w-full h-[85vh] md:h-[65vh] mt-0 overflow-visible">
        {/* Hero content */}
        <div className="relative z-10 w-full h-full flex flex-col-reverse md:flex-row items-center">
          {/* Left column content */}
          <div className="w-full md:w-1/2 bg-amber-900 text-white flex flex-col justify-center h-full pt-20 pb-8 md:py-16 px-4 md:px-8">
            <div className="animate-fade-up animation-delay-100">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-amber-400" />
                  ))}
                </div>
                <span className="text-white/90 text-xs md:text-sm">100+ Reviews</span>
              </div>

              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="bg-amber-700/20 p-1.5 md:p-2 rounded-full">
                  <MapPin className="text-amber-400 h-4 w-4 md:h-5 md:w-5" />
                </div>
                <span className="text-white font-medium text-base md:text-lg">{tourData.location}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 text-white leading-tight">
                {tourData.name}
              </h1>
              
              <p className="text-white/90 text-base md:text-xl mb-6 md:mb-8 max-w-xl">
                {tourData.description}
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                <button className="px-6 md:px-8 py-3 md:py-4 text-base font-extrabold leading-none text-center text-white bg-[rgba(192,91,42,1)] rounded-[40px] shadow-[0px_8px_20px_rgba(192,91,42,0.8)] hover:bg-[rgba(192,91,42,0.9)] transition-all">
                  <span>Contact Us</span>
                </button>
                <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 md:px-6 py-3 md:py-4 rounded-[40px] hover:bg-white/20 transition-all shadow-lg hover:shadow-xl font-medium text-base md:text-lg">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                  <span>View Availability</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right column with image that fills the column */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-amber-100">
            <img 
              src={tourData.heroImage}
              alt={tourData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trip Details Section - Added top padding to fix overlap issues */}
      <div className="pt-20 md:pt-16 pb-12 md:pb-16 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
              Trip Details
            </h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left column - Trip Details */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {tourData.details.map((detail, index) => (
                  <div 
                    key={index} 
                    className="border border-amber-200 rounded-lg p-5 md:p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2 md:mb-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        {getIcon(detail.icon)}
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-black">
                        {detail.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-800">{detail.description}</p>
                    </div>
                  ))}
                <div className="border border-amber-600 rounded-lg p-5 md:p-6 hover:shadow-md transition-all bg-amber-700 text-white sm:col-span-2">
                  <h3 className="text-lg md:text-xl font-display font-bold mb-2">
                    From {tourData.price} per person
                  </h3>
                  <p className="text-sm md:text-base mb-4">
                    All-inclusive package with luxury accommodations, expert guides, and unforgettable experiences
                  </p>
                  <button className="py-3 px-6 bg-white text-amber-900 font-medium rounded-lg hover:bg-amber-50 transition-colors w-full">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right column - Safari Highlights */}
            <div className="flex flex-col h-full mt-8 lg:mt-0">
              <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=85&w=1200" 
                  alt="Safari highlights"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-amber-400" />
                    <span className="text-white font-medium">Wildlife Observation</span>
                </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                    Unforgettable Encounters
                  </h3>
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-display font-bold text-black mb-4">
                  Safari Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Iconic Five Mammals</h4>
                      <p className="text-sm md:text-base text-gray-800">Dedicated focus on photographing elephant, rhino, lion, leopard, and buffalo in their natural habitat.</p>
              </div>
            </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Expert Wildlife Tracking</h4>
                      <p className="text-sm md:text-base text-gray-800">Work with specialized trackers to find and photograph elusive predators in optimal conditions.</p>
          </div>
                </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Prime Photography Locations</h4>
                      <p className="text-sm md:text-base text-gray-800">Access to private reserves and photography hides designed for capturing unique wildlife moments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <TripGallery images={tourData.galleryImages} />
          </div>
        </div>
      </div>

      {/* Content Section - Changed colors from orange/red to black/white */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - narrow */}
            <div className="lg:col-span-1 space-y-8">
              {/* Booking Form */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-display font-bold mb-6 text-black">Book Your Safari</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium block">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 focus:border-black"
                      placeholder="Your full name"
                    />
            </div>
                  
                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium block">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 focus:border-black"
                      placeholder="your.email@example.com"
                    />
          </div>
                  
                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium block">Preferred Tour Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 focus:border-black"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 md:py-4 text-base font-extrabold leading-none text-center text-white bg-[rgba(192,91,42,1)] rounded-[40px] shadow-[0px_8px_20px_rgba(192,91,42,0.8)] hover:bg-[rgba(192,91,42,0.9)] transition-all"
                  >
                    Request Booking
                  </button>
                </form>
              </div>
              
              {/* Guide Card - Changed colors */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-amber-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-amber-100">
                    <img
                      src={tourData.guide.imageSrc}
                      alt={tourData.guide.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{tourData.guide.name}</h3>
                  <p className="text-gray-700 mb-4 italic">Expert Safari Guide</p>
                  <p className="text-gray-600 mb-6">"{tourData.guide.description}"</p>
                  <button 
                    onClick={() => setShowGuideModal(true)}
                    className="relative px-4 py-3 bg-white text-amber-900 rounded-lg font-medium group overflow-hidden"
                  >
                    <span className="relative z-10">Meet Your Guide</span>
                    <span className="absolute inset-0 border-2 border-amber-700 rounded-lg"></span>
                    <span className="absolute inset-0 bg-amber-700 scale-0 group-hover:scale-100 transition-transform origin-center duration-300"></span>
                    <span className="absolute inset-0 border-2 border-amber-700 rounded-lg scale-[1.01] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="absolute z-[5] inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Meet Your Guide</span>
                  </button>
                </div>
              </div>
              
              {/* Q&A Section */}
              <QASection faqs={tourData.faqs} />
            </div>
            
            {/* Right column - wide */}
            <div className="lg:col-span-2">
              {/* Checklist Section */}
              <ChecklistSection 
                imageSrc={tourData.safariImage}
                included={tourData.included}
                excluded={tourData.excluded}
              />

              {/* Tab Content */}
              <TabContent 
                tourRoute={tourData.itinerary.map(item => ({
                  day: `Day ${item.day}: ${item.title}`,
                  description: item.description
                }))}
                itinerary={tourData.tourRoute}
                accommodation={{
                  description: tourData.accommodation,
                  features: [
                    "Luxury safari lodges and tented camps in prime locations",
                    "Private viewing decks with wildlife viewing opportunities",
                    "En-suite facilities with hot showers and comfortable amenities",
                    "Electricity for charging camera equipment",
                    "Communal spaces for photography discussions and image review"
                  ]
                }}
              />
            </div>
          </div>
                </div>
            </div>

      {/* Map Section */}
      <div className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 stagger-animation">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Explore Our Safari Route</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="h-[500px] border border-amber-200 rounded-lg overflow-hidden shadow-md">
            <GoogleMap 
              zoom={5}
              markers={[
                { position: [-24.2833, 30.9938], title: "Kruger National Park", description: "Days 1-5: Wildlife viewing" },
                { position: [-23.8835, 31.2725], title: "Sabi Sands", description: "Days 6-9: Private game reserve" },
                { position: [-24.9400, 31.5900], title: "Mala Mala", description: "Days 10-14: Photography site" }
              ]}
            />
          </div>
        </div>
      </div>
      
      {/* Guide Modal - Updated colors */}
      {showGuideModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowGuideModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-display font-bold text-black">About Your Guide</h2>
              <button onClick={() => setShowGuideModal(false)} className="text-gray-400 hover:text-amber-700">
                ✕
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0 ring-4 ring-amber-100">
                <img src={tourData.guide.imageSrc} alt={tourData.guide.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{tourData.guide.name}</h3>
                <p className="text-gray-700 italic mb-4">Expert Safari Guide with 20+ Years Experience</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">English</span>
                  <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">German</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p>Professor Rion Haraeb has been leading safari adventures since 2000, specializing in bilingual tours for international travelers. His extensive knowledge of southern African ecosystems and wildlife makes every safari an educational and unforgettable experience.</p>
              <p>As a professor with deep expertise in the region's biodiversity, Rion offers insights that go beyond the typical safari experience. His personalized approach ensures that each guest receives individual attention and learns about the unique aspects of Namibia's wildlife and culture.</p>
              <p>Rion is committed to sustainable tourism practices and works closely with conservation efforts throughout Namibia. His connections with local communities also provide authentic cultural experiences that many other tours cannot offer.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-amber-100">
              <h4 className="font-bold text-black mb-4">Specialties:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-700 rounded-full"></span>
                  <span>Wildlife Photography</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-700 rounded-full"></span>
                  <span>Bird Identification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-700 rounded-full"></span>
                  <span>Conservation Education</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-700 rounded-full"></span>
                  <span>Cultural Interpretation</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setShowGuideModal(false)}
              className="mt-8 w-full px-4 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-all font-medium"
            >
              Close
            </button>
          </div>
      </div>
      )}
      
      {/* Add Footer */}
      <Footer />
    </div>
  );
};

const BigFiveSafariDetail = BigFiveSafari;
export default BigFiveSafariDetail; 