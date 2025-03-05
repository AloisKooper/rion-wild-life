import { useState, useEffect } from "react"
import { X, Phone, Calendar, Check, MapPin, Car, Bed, Users, Clock, CalendarDays, CalendarRange } from "lucide-react"

import Navbar from "@/components/common/Navbar"
import Footer from "@/components/home/Footer"
import TourHeader from "@/components/TourHeader"
import TripDetails from "@/components/TripDetails"
import ChecklistSection from "@/components/ChecklistSection"
import TabContent from "@/components/TabContent"
import GoogleMap from "@/components/GoogleMap"
import QASection from "@/components/QASection"
import TripGallery from "@/components/TripGallery"
import SafariMapSection from "@/components/SafariMapSection"
import GuideCard from "@/components/GuideCard"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

const WalvisbayExcursion = () => {
  const [isReady, setIsReady] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [showGuideModal, setShowGuideModal] = useState(false)
  
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
    e.preventDefault()
    // Here you would connect to your booking system
    console.log("Booking request:", { name, email, date })
    // Reset form
    setName('')
    setEmail('')
    setDate('')
    // Show success message
    alert("Thank you for your booking request! We'll contact you shortly.")
  }

  // Set isReady to true after component mounts to trigger animations
  useEffect(() => {
    setIsReady(true)
  }, [])

  // This is real content from Rion Wildlife Safaris for Walvisbay Excursion
  const tourData = {
    name: "Walvisbay Excursion",
    location: "Walvis Bay, Namibia",
    description: "Discover the natural wonders of Walvis Bay with our photography-focused day excursions, exploring the Pink Lake, Dune 7, Welwitschia plants, and the surreal Moonlandscape.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=85&w=2940",
    price: "€80",
    duration: "6+ hours (Half/Full day)",
    groupSize: "2-8 people",
    details: [
      {
        icon: "car" as const,
        title: "Transportation",
        description: "Private vehicle with experienced driver for your photography excursion"
      },
      {
        icon: "clock" as const,
        title: "Duration",
        description: "Half-day or full-day excursions available (6+ hours)"
      },
      {
        icon: "users" as const,
        title: "Group Size",
        description: "Small groups for a more personalized experience"
      },
      {
        icon: "calendar" as const, 
        title: "Best Time to Visit",
        description: "Year-round, with different lighting conditions offering unique photography opportunities"
      },
      {
        icon: "bed" as const,
        title: "Extras",
        description: "Photography guidance, refreshments, and local insights included"
      }
    ],
    guide: {
      name: "Professor Rion Haraeb",
      imageSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
      description: "With over 20 years of experience guiding safaris in Namibia since 2000, I'm excited to share my knowledge and passion for photography in these unique landscapes. As a bilingual guide (English and German), I specialize in creating unforgettable experiences."
    },
    faqs: [
      {
        question: "What should I bring for the photography excursion?",
        answer: "Bring your camera equipment, extra batteries, memory cards, lightweight clothing, hat, sunscreen, water bottle, and comfortable walking shoes."
      },
      {
        question: "Are meals included in the excursion price?",
        answer: "Light refreshments are included. For full-day excursions, we arrange a lunch stop (cost not included) or you can bring a packed lunch."
      },
      {
        question: "Is this tour suitable for beginners in photography?",
        answer: "Yes, absolutely! The tour is designed for all skill levels. Professor Rion will provide guidance based on your experience level."
      },
      {
        question: "How far in advance should we book?",
        answer: "We recommend booking at least 2-3 days in advance, though last-minute bookings may be accommodated based on availability."
      },
      {
        question: "What is the payment structure?",
        answer: "We accept full payment at the time of booking. Payments are accepted in Euros."
      }
    ],
    safariImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1920",
    included: [
      "Professional bilingual guide (English/German)",
      "Transportation in private vehicle",
      "Hotel pickup and drop-off in Walvis Bay area",
      "Light refreshments and water",
      "Photography guidance",
      "All entrance fees to attractions"
    ],
    excluded: [
      "Meals (unless specified)",
      "Personal photography equipment",
      "Gratuities for guide and driver",
      "Personal expenses and souvenirs"
    ],
    mapLocation: {
      lat: -22.9576,
      lng: 14.5052,
      name: "Walvis Bay, Namibia"
    },
    itinerary: [
      {
        day: 1,
        title: "Pink Lake",
        description: "Visit the stunning Pink Lake (Flamingo Lagoon) for remarkable photography opportunities of the pink waters and flamingos."
      },
      {
        day: 1,
        title: "Dune 7",
        description: "Explore Dune 7, one of the highest sand dunes in the world, offering panoramic views of the surrounding landscape."
      },
      {
        day: 1,
        title: "Welwitschia Plants",
        description: "Discover and photograph the ancient Welwitschia plants, unique to the Namib Desert and known to live for over 1000 years."
      },
      {
        day: 1,
        title: "Moonlandscape",
        description: "Experience the surreal Moonlandscape, an eroded valley formed by the Swakop River, perfect for photography."
      }
    ],
    accommodation: "No accommodation is included in this day excursion. However, we can recommend hotels in Walvis Bay and Swakopmund for your stay in the area.",
    tourRoute: [
      {
        time: "08:00",
        activity: "Hotel pickup"
      },
      {
        time: "08:30",
        activity: "Pink Lake photography session"
      },
      {
        time: "10:30",
        activity: "Dune 7 exploration"
      },
      {
        time: "12:30",
        activity: "Lunch break (for full-day tour)"
      },
      {
        time: "13:30",
        activity: "Welwitschia plants visit"
      },
      {
        time: "15:00",
        activity: "Moonlandscape photography"
      },
      {
        time: "17:00",
        activity: "Return to Walvis Bay"
      }
    ],
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1575423790646-48597602da12?auto=format&fit=crop&w=1920&q=80",
        alt: "Pink Lake"
      },
      {
        src: "https://images.unsplash.com/photo-1517950710081-4536a2587182?auto=format&fit=crop&w=1920&q=80",
        alt: "Dune Landscape"
      },
      {
        src: "https://images.unsplash.com/photo-1500531254829-93534c87252b?auto=format&fit=crop&w=1920&q=80",
        alt: "Desert Photography"
      },
      {
        src: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=1920&q=80",
        alt: "Moonlandscape"
      },
      {
        src: "https://images.unsplash.com/photo-1573165663148-eb8bb835e3fd?auto=format&fit=crop&w=1920&q=80",
        alt: "Welwitschia Plant"
      },
      {
        src: "https://images.unsplash.com/photo-1528220765911-183cfc0cc6bc?auto=format&fit=crop&w=1920&q=80",
        alt: "Flamingos at Pink Lake"
      }
    ]
  }

  return (
    <div className={`min-h-screen bg-background ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Navbar - absolutely positioned at top */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </header>
      
      {/* Hero Section - Remove top margin to connect with navbar */}
      <TourHeader 
        tourName={tourData.name} 
        location={tourData.location} 
        description={tourData.description}
        imageSrc={tourData.heroImage}
      />

      {/* Trip Details Section - Added top padding on mobile */}
      <div className="pt-20 md:pt-16 pb-12 md:pb-16 bg-white relative">
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
                    All-inclusive photography excursion with professional guide, transportation, and unique photo opportunities
                  </p>
                  <button className="py-3 px-6 bg-white text-amber-900 font-medium rounded-lg hover:bg-amber-50 transition-colors w-full">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right column - Photography Highlights */}
            <div className="flex flex-col h-full mt-8 lg:mt-0">
              <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1595152458760-2aced0f9d5d8?auto=format&fit=crop&q=85&w=1200" 
                  alt="Photography highlights"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-bold text-white">Photography Paradise</h3>
                  <p className="text-white/90">Capture the unique beauty of Walvis Bay</p>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-display font-bold text-black mb-4">Why Choose This Tour:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Professional Photography Guidance</h4>
                      <p className="text-sm md:text-base text-gray-800">Expert instruction for photographers of all skill levels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Optimal Lighting Conditions</h4>
                      <p className="text-sm md:text-base text-gray-800">Carefully timed visits to capture the best light for stunning photography</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Diverse Landscapes</h4>
                      <p className="text-sm md:text-base text-gray-800">Access to unique and photogenic natural environments in one excursion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Small Group Experience</h4>
                      <p className="text-sm md:text-base text-gray-800">Limited group sizes ensuring personalized attention and guidance</p>
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
                <h3 className="text-2xl font-display font-bold mb-6 text-black">Book Your Excursion</h3>
                
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
                  <p className="text-gray-700 mb-4 italic">Photography Guide & Safari Expert</p>
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
                  day: `Stop ${item.day}: ${item.title}`,
                  description: item.description
                }))}
                itinerary={tourData.tourRoute}
                accommodation={{
                  description: tourData.accommodation,
                  features: [
                    "Recommended accommodations in Walvis Bay",
                    "Luxury options in Swakopmund",
                    "Budget-friendly guesthouses",
                    "Assistance with hotel bookings if needed",
                    "Transportation to/from major hotels"
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Explore Our Excursion Route</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-8"></div>
          </div>
          <div className="h-[500px] border border-amber-200 rounded-lg overflow-hidden shadow-md">
            <GoogleMap 
              zoom={10}
              markers={[
                { position: [-22.9576, 14.5052], title: "Walvis Bay", description: "Starting point" },
                { position: [-23.0566, 14.4676], title: "Pink Lake", description: "Flamingo photography" },
                { position: [-22.9769, 14.5550], title: "Dune 7", description: "Panoramic views" },
                { position: [-22.7975, 14.5589], title: "Welwitschia Plains", description: "Ancient desert plants" },
                { position: [-22.7300, 14.5200], title: "Moonlandscape", description: "Surreal photography location" },
                { position: [-22.9576, 14.5052], title: "Return to Walvis Bay", description: "Tour conclusion" }
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
                <p className="text-gray-700 italic mb-4">Expert Photography & Safari Guide with 20+ Years Experience</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">English</span>
                  <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">German</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p>Professor Rion Haraeb has been leading tours since 2000, specializing in photography-focused excursions for international travelers. His extensive knowledge of Namibia's unique landscapes makes every tour an educational and unforgettable experience.</p>
              <p>As a professor with deep expertise in the region's natural features, Rion offers insights that go beyond the typical tour. His personalized approach ensures that each guest receives individual attention and learns photography techniques suited to Namibia's distinctive environments.</p>
              <p>Rion is committed to sustainable tourism practices and works closely with conservation efforts throughout Namibia. His connections with local communities also provide authentic cultural experiences that many other tours cannot offer.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-amber-100">
              <h4 className="font-bold text-black mb-4">Specialties:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-700 rounded-full"></span>
                  <span>Landscape Photography</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-700 rounded-full"></span>
                  <span>Wildlife Photography</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-700 rounded-full"></span>
                  <span>Desert Ecosystems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-700 rounded-full"></span>
                  <span>Local Cultural Knowledge</span>
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

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default WalvisbayExcursion 