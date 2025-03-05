import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/home/Footer";
import ButtonCTA from '../../components/ui/button-cta';

const PhotographyToursDetail: React.FC = () => {
  const [reviewSource, setReviewSource] = useState<'google' | 'trustpilot'>('google');

  // CMS-friendly data structure that will later be replaced with Payload CMS data
  const activityData = {
    title: "Photography Tours",
    heroImage: "/activities/photography.jpeg",
    introduction: "Join our specialized photography excursions focused on capturing Namibia's dramatic landscapes and diverse wildlife. Our photography tours are suitable for all enthusiasts from novice to professional, with expert guides who know the perfect lighting and positioning for capturing the magic of Southern Africa.",
    includedIn: [
      {
        tourName: "Namibian Photographer's Dream",
        tourSlug: "/tours",
        description: "A dedicated 12-day photography-focused expedition through Namibia's most photogenic locations."
      },
      {
        tourName: "Wildlife Photography Special",
        tourSlug: "/tours",
        description: "An extended stay in prime wildlife areas with specialized photography vehicles and expert guidance."
      }
    ],
    highlights: [
      "Capture the iconic dunes of Sossusvlei in perfect morning light",
      "Photograph the abandoned diamond mining town of Kolmanskop at sunrise",
      "Receive guidance from professional wildlife photographers",
      "Use specialized photography vehicles with bean bag supports and adjustable mounts",
      "Explore the Walvis Bay coastline with its rich birdlife and marine fauna"
    ],
    overview: "Our photography tours are specifically designed for photo enthusiasts looking to capture the extraordinary beauty of Southern Africa. With expert guidance, carefully planned itineraries centered around optimal lighting conditions, and special attention to technical needs, these tours offer unparalleled opportunities to photograph some of the world's most striking landscapes and wildlife. Professor Rion Haraeb works with professional photographers to ensure these specialized tours cater to photographers of all skill levels.",
    experienceDetails: [
      {
        title: "Wildlife Photography",
        content: "Experience the thrill of capturing Africa's iconic wildlife in their natural habitat. Our specially-modified vehicles feature camera supports, cut-out windows, and flexible positioning options to help you get the perfect shot. Our guides are trained to position vehicles optimally for lighting and composition, anticipating animal behavior to help you capture defining moments. Sessions in both early morning and late afternoon golden light are prioritized.",
        image: "/activities/wildlife-photography.jpeg"
      },
      {
        title: "Landscape Photography",
        content: "Namibia offers some of the world's most dramatic and photogenic landscapes, from the towering red dunes of Sossusvlei to the otherworldly vistas of Deadvlei. Our tours visit these iconic locations at optimal times for photography, with ample time allocated for setup and capturing changing light conditions. Technical advice on panoramic techniques, long exposures, and creative composition is available from our photography guides.",
        image: "/activities/desert-exploration.jpeg"
      },
      {
        title: "Specialized Workshops",
        content: "For dedicated photographers, we offer specialized workshop components that can be added to any tour. These include night sky photography in Namibia's designated Dark Sky Reserve, macro photography of desert-adapted flora and insects, and specialized bird photography sessions. These workshops are led by professional photographers with specific expertise in these technical areas.",
        image: "/tour-images/namibia-highlights.jpeg"
      }
    ],
    locations: [
      {
        name: "Sossusvlei & Deadvlei",
        description: "Capture the world-famous red dunes of Sossusvlei, particularly at sunrise and sunset when the interplay of light and shadow creates dramatic contrasts. We arrange early access to reach locations before other tourists arrive. Nearby Deadvlei, with its clay pan and dead camel thorn trees against the backdrop of red dunes and blue skies, offers one of photography's most iconic compositions.",
        image: "/tour-images/namwild.jpeg"
      },
      {
        name: "Walvis Bay Lagoon",
        description: "This coastal location offers exceptional opportunities for bird photography, including thousands of flamingos and pelicans. Special boat tours provide close approaches to photogenic colonies of Cape fur seals and marine birds. The adjacency to Sandwich Harbour, where massive dunes meet the Atlantic Ocean, creates unique compositional opportunities.",
        image: "/activities/okavango-delta.jpeg"
      },
      {
        name: "Etosha National Park",
        description: "Etosha's waterholes provide predictable wildlife gatherings, ideal for photography. The stark white calcrete background creates a natural 'studio' setting for wildlife portraits. Game drives are timed to coincide with peak activity periods, with specialized vehicles offering stable photography platforms and expert positioning by guides familiar with animal behavior patterns.",
        image: "/tour-images/bigfive.jpeg"
      }
    ],
    practicalInfo: {
      bestTimes: "Year-round, though the dry winter months (May-October) offer clearer skies and better wildlife viewing as animals concentrate at waterholes. The rainy season (November-April) brings dramatic skies and lush landscapes.",
      whatToBring: "DSLR or mirrorless camera, variety of lenses (wide-angle, telephoto zoom (at least 300mm for wildlife), and mid-range zoom), sturdy tripod, plenty of memory cards, extra batteries, polarizing filter, neutral density filters, laptop for downloads, dust protection for equipment.",
      photography: "Our vehicles are specially configured for photographers, with sliding windows, roof hatches, and camera supports. Power outlets for charging are available in vehicles. We allow ample time at each location and position for optimal lighting conditions.",
      vehicleConfig: "Our photography vehicles feature fold-down armrests, bean bag supports, and gimbal mounts. Each photographer has access to a window and roof hatch. We limit passengers to ensure ample space for equipment."
    },
    testimonials: {
      google: [
        {
          quote: "As a semi-professional photographer, I've been on many photography tours worldwide, but none compare to the opportunities in Namibia with Rion Wildlife Safaris. Their vehicles are perfectly set up for photography, and the guides know exactly where to position for the best light.",
          author: "Richard K.",
          location: "United States",
          image: "/images/rion-profile.jpeg",
          rating: 5
        },
        {
          quote: "The specialized photography vehicles made all the difference - bean bags, swivel mounts, and plenty of space for equipment. Our guide was always thinking about the light and composition, not just spotting wildlife.",
          author: "Annika S.",
          location: "Sweden",
          image: "/tour-images/victoria-falls.jpeg",
          rating: 5
        }
      ],
      trustpilot: [
        {
          quote: "The predawn start to reach Deadvlei was absolutely worth it. We had the place virtually to ourselves for over an hour of perfect photography conditions. I got shots that won awards back home!",
          author: "Martin & Julia",
          location: "Germany",
          image: "/activities/cultural-experiences.jpeg",
          rating: 5
        },
        {
          quote: "Their knowledge of specialized photography locations was impressive. They took us to hidden gems I'd never have found on my own, including a secret spot for capturing the Milky Way over quiver trees. Beyond expectations!",
          author: "Sophia L.",
          location: "Canada",
          image: "/tour-images/namibia-highlights.jpeg",
          rating: 5
        }
      ]
    },
    relatedActivities: [
      {
        id: 1,
        title: "Wildlife Viewing",
        image: "/activities/etosha-wildlife.jpeg"
      },
      {
        id: 2,
        title: "Desert Exploration",
        image: "/activities/desert-exploration.jpeg"
      },
      {
        id: 3,
        title: "Cultural Experiences",
        image: "/activities/cultural-experiences.jpeg"
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
                    <h4 className="text-lg font-semibold text-[#3D3E48] mb-2">Vehicle Configuration</h4>
                    <p className="text-gray-700 text-sm">{activityData.practicalInfo.vehicleConfig}</p>
                  </div>
                </div>
              </div>

              {/* Contact / Booking Call-to-Action */}
              <div className="bg-[#3D3E48] text-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4 font-['Athelas',_serif]">Ready to Book?</h3>
                <p className="mb-6">Contact our photography specialists to plan your perfect photographic safari.</p>
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
                <p className="text-gray-700">These specialized photography experiences are available on:</p>
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
                  <p className="italic text-gray-700">"The unique light and dramatic landscapes of Namibia offer photographers unparalleled creative possibilities. Our specially designed tours ensure you have the right position, right light, and right equipment to capture images that will stand out in your portfolio."</p>
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
                <h2 className="text-3xl font-bold text-black font-['Athelas',_serif]">Photographic Locations</h2>
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
                <h2 className="text-3xl font-bold text-black font-['Athelas',_serif]">Photographer Testimonials</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-['Athelas',_serif]">Capture the Beauty of Southern Africa</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">Join our specialized photography tours designed to help you capture stunning images in some of Africa's most photogenic landscapes and wildlife habitats.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonCTA variant="primary">EXPLORE OUR TOURS</ButtonCTA>
            <ButtonCTA variant="secondary">DOWNLOAD PHOTOGRAPHY GUIDE</ButtonCTA>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default PhotographyToursDetail; 