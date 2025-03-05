import { useState, useEffect } from "react"
import { MapPin, Check, Car, Bed, Users, Clock, CalendarDays } from "lucide-react"

import Navbar from "@/components/common/Navbar"
import Footer from "@/components/home/Footer"
import TourHeader from "@/components/TourHeader"
import TripDetails from "@/components/TripDetails"
import ChecklistSection from "@/components/ChecklistSection"
import TabContent from "@/components/TabContent"
import GoogleMap from "@/components/GoogleMap"
import QASection from "@/components/QASection"
import TripGallery from "@/components/TripGallery"

const NamibiaBotswanaVictoriaFalls = () => {
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

  // Content for the tri-country safari tour
  const tourData = {
    name: "Three Countries Photography Safari",
    location: "Namibia, Botswana & Victoria Falls (Zimbabwe)",
    description: "An epic photographic journey across three countries, capturing the diverse landscapes, wildlife, and natural wonders of Southern Africa, including the majestic Victoria Falls.",
    heroImage: "https://images.unsplash.com/photo-1547046647-15b5b148cec3?auto=format&fit=crop&q=85&w=2940",
    price: "€3,200",
    duration: "14 days, 13 nights",
    groupSize: "4-8 people",
    details: [
      {
        icon: "car" as const,
        title: "Transportation",
        description: "Specialized photography safari vehicles, plus charter flights between key locations"
      },
      {
        icon: "bed" as const,
        title: "Accommodation",
        description: "Premium lodges and tented camps with ideal photography locations"
      },
      {
        icon: "users" as const,
        title: "Group Size",
        description: "Intimate groups of maximum 8 photographers for personalized attention"
      },
      {
        icon: "clock" as const,
        title: "Duration",
        description: "Comprehensive 14-day itinerary across three diverse countries"
      },
      {
        icon: "calendar" as const, 
        title: "Best Time to Visit",
        description: "June-October for optimal wildlife viewing and Victoria Falls photography"
      }
    ],
    guide: {
      name: "Professor Rion Haraeb",
      imageSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
      description: "With over 20 years of experience guiding safaris in Southern Africa since 2000, I've developed extensive knowledge of the region's diverse ecosystems. As a bilingual guide (English and German), I specialize in creating extraordinary multi-country photographic adventures."
    },
    faqs: [
      {
        question: "How do we travel between the three countries?",
        answer: "We use a combination of specialized safari vehicles for game drives and photography sessions, plus charter flights between key destinations to maximize your time experiencing each location rather than traveling."
      },
      {
        question: "What are the highlights of each country?",
        answer: "In Namibia, we'll photograph desert landscapes and wildlife. Botswana offers exceptional wildlife photography in the Okavango Delta. At Victoria Falls (Zimbabwe), you'll capture one of the world's most spectacular waterfalls with specialized techniques for water photography."
      },
      {
        question: "What type of accommodation can I expect?",
        answer: "Throughout the safari, you'll stay in a carefully selected mix of premium lodges and luxury tented camps, all chosen for their proximity to photography opportunities, comfort, and authentic wilderness experience."
      },
      {
        question: "What photography skill level is this safari designed for?",
        answer: "This safari accommodates all skill levels. We provide specialized guidance for beginners and technical challenges for advanced photographers. Each location offers unique photographic opportunities regardless of your experience."
      },
      {
        question: "Do I need any special visas for the three countries?",
        answer: "Yes, you'll need appropriate visas for Namibia, Botswana, and Zimbabwe. We provide detailed guidance on visa requirements and assistance with applications as part of our pre-trip preparation service."
      }
    ],
    safariImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1920",
    included: [
      "Professional bilingual photography guide (English/German)",
      "All accommodation (13 nights) in premium lodges and camps",
      "All ground transportation in specialized safari vehicles",
      "Charter flights between key destinations",
      "All meals and non-alcoholic beverages",
      "Park entrance and conservation fees for all three countries",
      "Daily photography instruction and image review sessions",
      "Victoria Falls guided photography experience",
      "Okavango Delta water-based photography excursions",
      "Airport transfers at start and end of safari"
    ],
    excluded: [
      "International flights to Namibia and from Zimbabwe",
      "Visas for Namibia, Botswana, and Zimbabwe",
      "Camera equipment and accessories",
      "Travel insurance (mandatory)",
      "Alcoholic beverages",
      "Gratuities for guides and lodge staff",
      "Personal expenses and souvenirs"
    ],
    itinerary: [
      {
        day: 1,
        title: "Namibia Arrival",
        description: "Arrive in Windhoek, Namibia. Transfer to your first accommodation for equipment setup and welcome dinner with orientation session on the photographic journey ahead."
      },
      {
        day: 2,
        title: "Namibian Desert Landscapes",
        description: "Full day photographing the iconic red dunes of Sossusvlei and the surreal landscape of Deadvlei, focusing on composition and light techniques."
      },
      {
        day: 3,
        title: "Desert Wildlife",
        description: "Exploration of desert-adapted wildlife unique to Namibia, including opportunities to photograph oryx, springbok, and desert elephants."
      },
      {
        day: 4,
        title: "Namibia to Botswana",
        description: "Charter flight to Botswana's Okavango Delta. Afternoon photography session capturing the lush delta landscapes from above during the transfer."
      },
      {
        day: 5,
        title: "Okavango Delta Exploration",
        description: "Full day of water-based photography in traditional mokoro canoes, capturing reflections, bird life, and aquatic species in the delta."
      },
      {
        day: 6,
        title: "Botswana Wildlife Day 1",
        description: "Morning and afternoon game drives in prime wildlife areas focusing on predator photography (lions, leopards, wild dogs)."
      },
      {
        day: 7,
        title: "Botswana Wildlife Day 2",
        description: "Full day dedicated to elephant and buffalo photography, including waterhole setups for interaction shots and dramatic herd movements."
      },
      {
        day: 8,
        title: "Botswana Wildlife Day 3",
        description: "Specialized bird and micro photography day, focusing on the abundant and colorful birdlife of the Okavango Delta."
      },
      {
        day: 9,
        title: "Chobe River Expedition",
        description: "Travel to Chobe National Park for a boat-based photography safari on the Chobe River, capturing elephants, hippos, and crocodiles from unique water perspectives."
      },
      {
        day: 10,
        title: "Transfer to Victoria Falls",
        description: "Journey to Victoria Falls, Zimbabwe. Evening photography session of the African sunset over the Zambezi River."
      },
      {
        day: 11,
        title: "Victoria Falls Photography",
        description: "Full day dedicated to photographing Victoria Falls from multiple vantage points, including specialized techniques for capturing water movement and rainbow formations."
      },
      {
        day: 12,
        title: "Victoria Falls Wildlife",
        description: "Photography expedition in the game-rich areas surrounding Victoria Falls, focusing on unique species found in this transitional ecosystem."
      },
      {
        day: 13,
        title: "Cultural Photography Day",
        description: "Ethical cultural photography opportunities with local communities (with proper permissions), capturing portraits and traditional activities."
      },
      {
        day: 14,
        title: "Final Review & Departure",
        description: "Morning photo review session, sharing of images, final editing workshop, and transfers to Victoria Falls Airport for departure."
      }
    ],
    accommodation: "Throughout this epic journey, you'll stay in premium lodges and luxury tented camps, each selected for their exceptional locations and photography opportunities. In Namibia, enjoy desert lodges with views of the dunes. In Botswana, experience luxury safari camps in prime wildlife areas. At Victoria Falls, stay in colonial-style accommodations with views of the Zambezi River.",
    tourRoute: [
      {
        time: "Day 1",
        activity: "Windhoek arrival & welcome dinner"
      },
      {
        time: "Days 2-3",
        activity: "Namibian desert landscapes & wildlife"
      },
      {
        time: "Day 4",
        activity: "Charter flight to Okavango Delta, Botswana"
      },
      {
        time: "Days 5-8",
        activity: "Okavango Delta photography experiences"
      },
      {
        time: "Day 9",
        activity: "Chobe River photography expedition"
      },
      {
        time: "Days 10-13",
        activity: "Victoria Falls and surroundings, Zimbabwe"
      },
      {
        time: "Day 14",
        activity: "Final review and departure from Victoria Falls"
      }
    ],
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1518739745383-0ef26e9dd7fd?auto=format&fit=crop&w=1920&q=80",
        alt: "Victoria Falls"
      },
      {
        src: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1920&q=80",
        alt: "Elephant Herd in Botswana"
      },
      {
        src: "https://images.unsplash.com/photo-1509219411165-3d426aeebac8?auto=format&fit=crop&w=1920&q=80",
        alt: "Namibian Desert"
      },
      {
        src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1920&q=80",
        alt: "Lion in Southern Africa"
      },
      {
        src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80",
        alt: "Okavango Delta"
      },
      {
        src: "https://images.unsplash.com/photo-1502989642968-94fbdc57eef8?auto=format&fit=crop&w=1920&q=80",
        alt: "Zambezi River Sunset"
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
                { position: [-22.5609, 17.0658], title: "Windhoek", description: "Day 1: Namibia arrival point" },
                { position: [-24.7275, 15.3356], title: "Sossusvlei", description: "Day 2: Namibian desert landscapes" },
                { position: [-20.4633, 14.9456], title: "Damaraland", description: "Day 3: Desert wildlife" },
                { position: [-19.0154, 22.3336], title: "Okavango Delta", description: "Day 4-5: Botswana water explorations" },
                { position: [-18.6333, 24.3833], title: "Chobe", description: "Days 6-9: Botswana wildlife" },
                { position: [-17.9244, 25.8567], title: "Victoria Falls", description: "Days 10-14: Zimbabwe & falls" }
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

export default NamibiaBotswanaVictoriaFalls 