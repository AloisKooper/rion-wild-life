import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/home/Footer";
import ButtonCTA from '../../components/ui/button-cta';

const WildlifeViewingDetail: React.FC = () => {
  const [reviewSource, setReviewSource] = useState<'google' | 'trustpilot'>('google');

  // CMS-friendly data structure that will later be replaced with Payload CMS data
  const activityData = {
    title: "Wildlife Viewing",
    heroImage: "/activities/etosha-wildlife.jpeg",
    introduction: "Experience unforgettable wildlife encounters across the diverse landscapes of Southern Africa. Led by expert guides with intimate knowledge of animal behavior, our wildlife viewing experiences offer unparalleled opportunities to witness Africa's iconic species in their natural habitats.",
    includedIn: [
      {
        tourName: "Full Safari Experience",
        tourSlug: "/tours",
        description: "This activity is a highlight of our comprehensive Full Safari Experience tour, which also includes desert explorations, cultural encounters, and more."
      },
      {
        tourName: "Namibia Highlights Safari",
        tourSlug: "/tours",
        description: "Wildlife viewing is a core component of our Namibia Highlights Safari, focusing on Etosha National Park's incredible biodiversity."
      }
    ],
    highlights: [
      "Spot the Big Five in Etosha National Park",
      "Track rare desert-adapted elephants in Damaraland",
      "Witness the incredible birdlife of the Okavango Delta",
      "Experience predator sightings with expert guidance",
      "Enjoy exclusive private concessions with minimal vehicle traffic"
    ],
    overview: "Rion Wildlife Safaris offers premium wildlife viewing experiences led by Professor Rion Haraeb, whose 20+ years of expertise ensures exceptional encounters with Southern Africa's most iconic species. Our intimate knowledge of wildlife behavior and movement patterns allows us to position you perfectly for incredible photographic opportunities and meaningful wildlife observations.",
    experienceDetails: [
      {
        title: "Game Drives",
        content: "Our morning and afternoon game drives are conducted in custom-designed 4x4 safari vehicles, providing comfort and unobstructed views. With a maximum of six guests per vehicle, each person has a window seat with ample space for photography equipment. Drives typically last 3-4 hours with stops for refreshments and spectacular sightings.",
        image: "/images/hero/hero-background.jpeg"
      },
      {
        title: "Walking Safaris",
        content: "Experience the African wilderness on foot with our expert guides. Walking safaris offer a completely different perspective, focusing on tracks, signs, and smaller creatures often missed from vehicles. Feel the ancient connection with nature as you follow in the footsteps of wildlife.",
        image: "/tour-images/namwild.jpeg"
      },
      {
        title: "Night Drives",
        content: "As the sun sets, a different world emerges. Our night drives reveal nocturnal species rarely seen during daylight hours, including aardvark, porcupine, and elusive predators on the hunt. Using specialized red-filtered spotlights that don't disturb wildlife, we'll introduce you to the mysteries of Africa after dark.",
        image: "/tour-images/bigfive.jpeg"
      }
    ],
    locations: [
      {
        name: "Etosha National Park",
        description: "Namibia's flagship conservation area spans over 22,000 square kilometers and centers around the vast Etosha Pan. Home to 114 mammal species and 340 bird species, Etosha offers exceptional wildlife viewing, particularly during the dry season when animals congregate around waterholes.",
        image: "/images/hero/hero-background.jpeg"
      },
      {
        name: "Okavango Delta",
        description: "This UNESCO World Heritage site is an inland delta where the Okavango River spreads over the Kalahari sands, creating a unique wetland system. The mosaic of waterways, islands, and floodplains supports an incredible diversity of wildlife including large populations of elephant, buffalo, red lechwe, and numerous predators.",
        image: "/tour-images/namwild.jpeg"
      },
      {
        name: "Chobe National Park",
        description: "Famous for hosting Africa's largest elephant population, Chobe National Park offers spectacular game viewing along the Chobe River. The park is also home to large herds of buffalo, zebra, and numerous predators including lion, leopard, and wild dog.",
        image: "/tour-images/bigfive.jpeg"
      }
    ],
    practicalInfo: {
      bestTimes: "The dry winter months (May to October) offer exceptional wildlife viewing as animals concentrate around water sources. However, each season has its unique advantages: summer brings lush landscapes and newborn animals, while winter provides clearer visibility through sparse vegetation.",
      whatToBring: "Neutral-colored clothing, sun protection (hat, sunscreen, sunglasses), binoculars, camera with telephoto lens, insect repellent, personal medications, and a warm layer for early mornings and evenings.",
      photography: "Our vehicles are designed with photographers in mind, featuring stability beanbags, charging points, and ample space for equipment. Guides are trained to position vehicles optimally for the best photographic opportunities.",
      healthSafety: "All of our safari experiences prioritize guest safety while maintaining respect for wildlife. Your guide will provide thorough safety briefings and ensure all encounters occur at appropriate distances."
    },
    testimonials: {
      google: [
        {
          quote: "Professor Rion's knowledge transformed our safari experience. His ability to track wildlife and explain behaviors made every sighting meaningful beyond just seeing animals.",
          author: "James & Sarah",
          location: "UK",
          image: "/images/hero/hero-background.jpeg",
          rating: 5
        },
        {
          quote: "The wildlife viewing opportunities exceeded our expectations. We saw all of the Big Five within two days, but more importantly, we learned so much about the ecosystem and conservation efforts.",
          author: "Thomas Family",
          location: "Germany",
          image: "/tour-images/namwild.jpeg",
          rating: 5
        }
      ],
      trustpilot: [
        {
          quote: "Our guide's expertise in animal behavior was incredible. He knew exactly where to position our vehicle for the perfect wildlife shots. We returned home with memories and photographs we'll treasure forever.",
          author: "Maria Sanchez",
          location: "Spain",
          image: "/tour-images/bigfive.jpeg",
          rating: 5
        },
        {
          quote: "The night drive was a highlight of our trip. Seeing a leopard on the hunt is something we'll never forget. Rion Wildlife Safaris delivered a truly exceptional experience.",
          author: "John & Laura",
          location: "Canada",
          image: "/images/hero/hero-background.jpeg",
          rating: 5
        }
      ]
    },
    relatedActivities: [
      {
        id: 2,
        title: "Desert Exploration",
        image: "/activities/desert-exploration.jpeg"
      },
      {
        id: 3,
        title: "Cultural Experiences",
        image: "/activities/cultural-experiences.jpeg"
      },
      {
        id: 4,
        title: "Photography Tours",
        image: "/activities/photography.jpeg"
      }
    ]
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/placeholder-image.jpg";
  };

  const testimonials = reviewSource === 'google' 
    ? activityData.testimonials.google 
    : activityData.testimonials.trustpilot;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Image Background and Navigation */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${activityData.heroImage})`, 
            height: "500px" // Standardized height to match other hero sections
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white max-w-4xl leading-tight font-['Athelas',_serif]">{activityData.title}</h1>
            <div className="mt-8">
              <ButtonCTA variant="primary">READY TO BOOK?</ButtonCTA>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Highlights Card */}
              <div className="bg-stone-50 rounded-lg p-8 border border-stone-100 shadow-sm">
                <h3 className="text-2xl font-bold text-black mb-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-[#C05B2A] after:mt-2 font-['Athelas',_serif]">Highlights</h3>
                <ul className="space-y-3">
                  {activityData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-[#C05B2A] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Information Card */}
              <div className="bg-stone-50 rounded-lg p-8 border border-stone-100 shadow-sm">
                <h3 className="text-2xl font-bold text-black mb-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-[#C05B2A] after:mt-2 font-['Athelas',_serif]">Practical Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#3D3E48] mb-2">Best Time to Visit</h4>
                    <p className="text-gray-700 text-sm">{activityData.practicalInfo.bestTimes}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-[#3D3E48] mb-2">What to Bring</h4>
                    <p className="text-gray-700 text-sm">{activityData.practicalInfo.whatToBring}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-[#3D3E48] mb-2">Photography</h4>
                    <p className="text-gray-700 text-sm">{activityData.practicalInfo.photography}</p>
                  </div>
                </div>
              </div>

              {/* Contact / Booking Call-to-Action */}
              <div className="bg-[#3D3E48] text-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4 font-['Athelas',_serif]">Ready to Book?</h3>
                <p className="mb-6">Contact our safari specialists to plan your personalized wildlife viewing experience.</p>
                <ButtonCTA variant="primary">CONTACT US</ButtonCTA>
                <p className="text-sm mt-4 text-gray-300">
                  Or call us directly: <span className="font-semibold">+264 81 123 4567</span>
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview Section */}
            <div className="mb-16">
              <div className="flex gap-2.5 items-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/84b71a0015ec61dbd5f6146d18b7020235ff3e05b76dce0afbc2e273452ad73a?placeholderIfAbsent=true"
                  alt="Icon"
                  className="w-[31px] h-[31px] object-contain"
                />
                <h2 className="text-3xl font-bold text-black font-['Athelas',_serif]">Overview</h2>
              </div>
              
              {/* Featured Activity Notice */}
              <div className="bg-stone-50 rounded-lg p-6 mb-8 border-l-4 border-[#C05B2A]">
                <p className="text-[#C05B2A] text-sm font-semibold uppercase mb-1">FEATURED ACTIVITY</p>
                <p className="text-gray-700">This premium wildlife viewing experience is included in our signature tours:</p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {activityData.includedIn.map((tour, idx) => (
                    <Link 
                      key={idx} 
                      to={tour.tourSlug} 
                      className="inline-flex items-center bg-white px-4 py-2 rounded-md border border-stone-200 text-sm font-medium text-[#3D3E48] hover:bg-stone-50 transition-colors"
                    >
                      <span>{tour.tourName}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8">{activityData.overview}</p>
                <div className="bg-stone-50 border-l-4 border-[#C05B2A] p-6 my-8">
                  <p className="italic text-gray-700">"Wildlife viewing with Rion Wildlife Safaris combines expert knowledge with a deep respect for nature, creating authentic experiences that connect you with Africa's wild places and incredible animals."</p>
                  <p className="font-medium mt-2">– Professor Rion Haraeb</p>
                </div>
              </div>
            </div>

            {/* The Experience Section */}
            <div className="mb-16">
              <div className="flex gap-2.5 items-center mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/84b71a0015ec61dbd5f6146d18b7020235ff3e05b76dce0afbc2e273452ad73a?placeholderIfAbsent=true"
                  alt="Icon"
                  className="w-[31px] h-[31px] object-contain"
                />
                <h2 className="text-3xl font-bold text-black font-['Athelas',_serif]">The Experience</h2>
              </div>
              
              <div className="space-y-12">
                {activityData.experienceDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2 order-2 md:order-1">
                      <h3 className="text-2xl font-bold text-[#3D3E48] mb-4 font-['Athelas',_serif]">{detail.title}</h3>
                      <p className="text-gray-700">{detail.content}</p>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                      <div className="rounded-lg overflow-hidden shadow-md h-64">
                        <img 
                          src={detail.image} 
                          alt={detail.title} 
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notable Locations */}
            <div className="mb-16">
              <div className="flex gap-2.5 items-center mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/84b71a0015ec61dbd5f6146d18b7020235ff3e05b76dce0afbc2e273452ad73a?placeholderIfAbsent=true"
                  alt="Icon"
                  className="w-[31px] h-[31px] object-contain"
                />
                <h2 className="text-3xl font-bold text-black font-['Athelas',_serif]">Where We Go</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {activityData.locations.map((location, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={location.image} 
                        alt={location.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#3D3E48] mb-2 font-['Athelas',_serif]">{location.name}</h3>
                      <p className="text-gray-700">{location.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <div className="flex gap-2.5 items-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/84b71a0015ec61dbd5f6146d18b7020235ff3e05b76dce0afbc2e273452ad73a?placeholderIfAbsent=true"
                  alt="Icon"
                  className="w-[31px] h-[31px] object-contain"
                />
                <h2 className="text-3xl font-bold text-black font-['Athelas',_serif]">Guest Testimonials</h2>
              </div>
              
              {/* Home Page Review Source Selector Style */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-gray-100 rounded-full p-1">
                  <button 
                    onClick={() => setReviewSource("google")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      reviewSource === "google" 
                        ? "bg-white text-[#3D3E48] shadow-sm" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <div className="flex items-center">
                      <img 
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                        alt="Google" 
                        className="h-4 mr-2" 
                      />
                      Google Reviews
                    </div>
                  </button>
                  <button 
                    onClick={() => setReviewSource("trustpilot")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      reviewSource === "trustpilot" 
                        ? "bg-white text-[#3D3E48] shadow-sm" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <div className="flex items-center">
                      <img 
                        src="/Trustpilot.png" 
                        alt="Trustpilot" 
                        className="h-4 mr-2" 
                      />
                      Trustpilot
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      </div>
                      <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                      {reviewSource === 'google' ? (
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
                          </svg>
                          Google Review
                        </div>
                      ) : (
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0l3.09 6.31 7.17 1.06-5.17 5.06 1.22 7.13L12 16.53l-6.64 3.51 1.21-7.13L1.4 7.83l7.11-1.06L12 0z" />
                          </svg>
                          Trustpilot Review
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Activities */}
            <div>
              <div className="flex gap-2.5 items-center mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/84b71a0015ec61dbd5f6146d18b7020235ff3e05b76dce0afbc2e273452ad73a?placeholderIfAbsent=true"
                  alt="Icon"
                  className="w-[31px] h-[31px] object-contain"
                />
                <h2 className="text-3xl font-bold text-black font-['Athelas',_serif]">Related Activities</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activityData.relatedActivities.map((activity) => (
                  <Link key={activity.id} to="/activities" className="group">
                    <div className="relative rounded-lg overflow-hidden shadow-md h-64">
                      <img 
                        src={activity.image} 
                        alt={activity.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={handleImageError}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                        <h3 className="text-white text-xl font-semibold p-6 font-['Athelas',_serif]">{activity.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Call to Action */}
      <div className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-['Athelas',_serif]">Experience African Wildlife With Us</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">Discover the wildlife viewing experience included in our premium safari tours, led by Professor Rion Haraeb.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonCTA variant="primary">EXPLORE OUR TOURS</ButtonCTA>
            <ButtonCTA variant="secondary">DOWNLOAD ACTIVITY GUIDE</ButtonCTA>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default WildlifeViewingDetail; 