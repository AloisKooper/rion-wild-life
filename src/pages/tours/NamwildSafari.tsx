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

const NamwildSafari = () => {
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

  // Content for Namwild Safari
  const tourData = {
    name: "Namwild Safari",
    location: "Central & Northern Namibia",
    description: "An immersive wildlife photography safari through Namibia's diverse ecosystems, focusing on capturing unique species adaptations, behaviors, and habitats in stunning light conditions.",
    heroImage: "https://images.unsplash.com/photo-1547970817-6bfb689d917c?auto=format&fit=crop&q=85&w=2940",
    price: "€1,800",
    duration: "7 days, 6 nights",
    groupSize: "2-8 people",
    details: [
      {
        icon: "car" as const,
        title: "Transportation",
        description: "Comfortable 4x4 safari vehicles with pop-up roof for optimal photography"
      },
      {
        icon: "bed" as const,
        title: "Accommodation",
        description: "Mix of safari lodges, tented camps, and unique wilderness accommodations"
      },
      {
        icon: "users" as const,
        title: "Group Size",
        description: "Small groups of maximum 8 photographers to ensure personalized guidance"
      },
      {
        icon: "clock" as const,
        title: "Duration",
        description: "7 days of immersive wildlife photography across multiple locations"
      },
      {
        icon: "calendar" as const, 
        title: "Best Time to Visit",
        description: "April-October for dry season with best wildlife viewing and clear skies"
      }
    ],
    guide: {
      name: "Professor Rion Haraeb",
      imageSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
      description: "With over 20 years of experience guiding safaris in Namibia since 2000, I'm passionate about wildlife photography and conservation. As a bilingual guide (English and German), I specialize in finding unique wildlife photography opportunities and teaching techniques to capture animal behavior."
    },
    faqs: [
      {
        question: "What makes Namwild different from other wildlife safaris?",
        answer: "Namwild focuses specifically on diverse wildlife photography opportunities across multiple ecosystems in Namibia. We emphasize quality time with subjects, understanding animal behavior for better photos, and accessing unique vantage points not available on standard tours."
      },
      {
        question: "What wildlife species can I expect to photograph?",
        answer: "You'll have opportunities to photograph elephants, giraffes, zebras, various antelope species, predators including lions and cheetahs, diverse birdlife, and unique desert-adapted species. We also focus on smaller creatures and their interesting adaptations."
      },
      {
        question: "How much photography experience do I need?",
        answer: "This safari accommodates all skill levels. Beginners receive foundational guidance, while advanced photographers benefit from specialized techniques for wildlife and our expert knowledge of animal behavior for anticipating key moments."
      },
      {
        question: "What type of accommodation can I expect?",
        answer: "We stay in a mix of comfortable safari lodges, tented camps, and unique wilderness accommodations. All provide private facilities, electricity for charging camera equipment, and are strategically located for optimal wildlife photography."
      },
      {
        question: "Do you provide specialized photography instruction?",
        answer: "Yes, throughout the safari you'll receive personalized guidance on wildlife photography techniques, including subject tracking, behavior anticipation, composition, and optimal camera settings for different scenarios and lighting conditions."
      }
    ],
    safariImage: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&q=80&w=1920",
    included: [
      "Professional bilingual wildlife photography guide (English/German)",
      "Transportation in specialized 4x4 safari vehicles",
      "All accommodation (6 nights) as specified in the itinerary",
      "All meals and non-alcoholic beverages during the safari",
      "Park entrance and conservation fees",
      "Daily photography instruction and image review sessions",
      "Airport transfers from Windhoek International Airport"
    ],
    excluded: [
      "International flights to and from Namibia",
      "Camera equipment and accessories",
      "Travel insurance (mandatory)",
      "Alcoholic beverages",
      "Gratuities for guides and lodge staff",
      "Optional activities not specified in the itinerary"
    ],
    mapLocation: {
      lat: -22.5609,
      lng: 17.0658,
      name: "Windhoek, Namibia"
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Introduction",
        description: "Windhoek airport pickup, transfer to your first lodge, equipment check, and evening photography workshop focused on African wildlife photography techniques."
      },
      {
        day: 2,
        title: "Waterhole Photography",
        description: "Full day at a premium wildlife reserve with exceptional waterhole setups for photography. Focus on action shots as animals interact around water sources."
      },
      {
        day: 3,
        title: "Desert-Adapted Wildlife",
        description: "Travel to the northwestern regions to photograph unique desert-adapted elephants, giraffes, and other species in stunning arid landscapes."
      },
      {
        day: 4,
        title: "Savanna & Plains Game",
        description: "Explore classic African savanna landscapes, focusing on herds of zebra, giraffe, and various antelope species in golden light conditions."
      },
      {
        day: 5,
        title: "Predator Day",
        description: "Visit areas known for predator sightings, with opportunities to photograph lions, cheetahs, and smaller predators like jackals and foxes."
      },
      {
        day: 6,
        title: "Bird & Macro Photography",
        description: "Focus on the smaller but equally fascinating subjects, including colorful birds, reptiles, and insects, with specialized macro photography techniques."
      },
      {
        day: 7,
        title: "Final Safari & Departure",
        description: "Early morning photography session, image review and editing workshop, final lunch, and transfers to Windhoek airport for departure."
      }
    ],
    accommodation: "A carefully selected mix of comfortable safari lodges, luxury tented camps, and unique wilderness accommodations, each chosen for their proximity to wildlife photography opportunities. All accommodations offer private facilities, electricity for charging camera equipment, and communal areas for image review sessions.",
    tourRoute: [
      {
        time: "Day 1, 14:00",
        activity: "Windhoek airport pickup & transfer to lodge"
      },
      {
        time: "Day 1, 17:00",
        activity: "Welcome dinner & photography briefing"
      },
      {
        time: "Day 2, 05:30",
        activity: "Early morning waterhole photography"
      },
      {
        time: "Day 2, 16:00",
        activity: "Afternoon & sunset photography session"
      },
      {
        time: "Day 3, 06:00",
        activity: "Travel to northwestern Namibia"
      },
      {
        time: "Day 3, 16:00",
        activity: "Desert-adapted wildlife photography"
      },
      {
        time: "Day 4, 05:30",
        activity: "Full-day savanna photography"
      },
      {
        time: "Day 5, 05:00",
        activity: "Predator tracking and photography"
      },
      {
        time: "Day 6, 06:00",
        activity: "Bird & macro photography sessions"
      },
      {
        time: "Day 7, 05:30",
        activity: "Final morning photography session"
      },
      {
        time: "Day 7, 14:00",
        activity: "Transfer to Windhoek airport for departure"
      }
    ],
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1920&q=80",
        alt: "Elephant in Namibia"
      },
      {
        src: "https://images.unsplash.com/photo-1624821558130-b325d7946fc4?auto=format&fit=crop&w=1920&q=80",
        alt: "Giraffe at Sunset"
      },
      {
        src: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=1920&q=80",
        alt: "Desert Landscape"
      },
      {
        src: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1920&q=80",
        alt: "Namibian Birds"
      },
      {
        src: "https://images.unsplash.com/photo-1547970817-5edbd5e3e7f2?auto=format&fit=crop&w=1920&q=80",
        alt: "Zebras in Savanna"
      },
      {
        src: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=1920&q=80",
        alt: "Wildlife Waterhole"
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
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Expert Naturalist Guides</h4>
                      <p className="text-sm md:text-base text-gray-800">Knowledgeable guides with years of experience in tracking wildlife</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Premium Safari Vehicles</h4>
                      <p className="text-sm md:text-base text-gray-800">Custom 4x4 vehicles with popup roofs for unobstructed wildlife viewing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-black mb-1">Luxury Accommodations</h4>
                      <p className="text-sm md:text-base text-gray-800">Stay in exclusive lodges and tented camps with stunning views</p>
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
                    "Premium lodges throughout the safari",
                    "En-suite bathrooms with hot water",
                    "Comfortable beds with quality linens",
                    "Delicious meals prepared by skilled chefs",
                    "Stunning views of the surrounding wilderness",
                    "Swimming pools at select accommodations"
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
                { position: [-22.5609, 17.0658], title: "Windhoek", description: "Day 1: Capital city and starting point" },
                { position: [-23.3444, 18.0725], title: "Okapuka Ranch", description: "Day 1: Welcome dinner and safari briefing" },
                { position: [-24.0878, 17.6606], title: "Kalahari Desert", description: "Day 2: Desert landscapes and wildlife" },
                { position: [-24.7291, 15.9819], title: "Namib Desert Lodge", description: "Day 3-4: Base for Sossusvlei exploration" },
                { position: [-24.7275, 15.3356], title: "Sossusvlei", description: "Day 4: UNESCO World Heritage red sand dunes" },
                { position: [-22.6467, 14.5052], title: "Swakopmund", description: "Day 5-6: Coastal town adventures" },
                { position: [-21.8956, 15.4035], title: "Spitzkoppe", description: "Day 7: Granite peaks and desert elephants" }
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
  )
}

const NamwildSafariDetail = NamwildSafari;
export default NamwildSafariDetail; 