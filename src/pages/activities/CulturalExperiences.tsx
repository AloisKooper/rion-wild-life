import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/home/Footer";
import ButtonCTA from '../../components/ui/button-cta';

const CulturalExperiencesDetail: React.FC = () => {
  const [reviewSource, setReviewSource] = useState<'google' | 'trustpilot'>('google');

  // CMS-friendly data structure that will later be replaced with Payload CMS data
  const activityData = {
    title: "Cultural Experiences",
    heroImage: "/activities/cultural-experiences.jpeg",
    introduction: "Immerse yourself in local traditions with Bushman encounters, heritage tours in Swakopmund, and visits to traditional villages. Learn about the rich cultural tapestry of Southern Africa with Professor Rion Haraeb's bilingual expertise enhancing your authentic cultural experiences.",
    includedIn: [
      {
        tourName: "Namibia Highlights Safari",
        tourSlug: "/tours",
        description: "Cultural experiences are integrated throughout this tour, with highlights including Bushman visits in the Kalahari and Swakopmund heritage tours."
      },
      {
        tourName: "Namibia, Botswana, Victoria Falls",
        tourSlug: "/tours",
        description: "This comprehensive multi-country tour includes diverse cultural encounters across three countries, offering unique insights into local traditions."
      }
    ],
    highlights: [
      "Meet with indigenous San (Bushman) communities in the Kalahari",
      "Explore Twyfelfontein's UNESCO World Heritage rock art site",
      "Discover German colonial architecture and history in Swakopmund",
      "Visit traditional Himba and Herero villages with local guides",
      "Learn about local crafts, music, and culinary traditions"
    ],
    overview: "Rion Wildlife Safaris believes that understanding the local cultures is essential to truly appreciating Southern Africa. Our cultural experiences are respectful, authentic, and deeply engaging, moving beyond superficial tourist encounters to create meaningful connections with the diverse peoples of the region. Professor Rion Haraeb's bilingual expertise in both English and German ensures nuanced cultural interpretation.",
    experienceDetails: [
      {
        title: "Bushman Cultural Encounters",
        content: "Spend time with indigenous San communities in the Kalahari Desert, learning about their traditional hunter-gatherer lifestyle, tracking skills, and ancient knowledge of medicinal plants. These respectful encounters are arranged with communities that have chosen to share aspects of their culture with visitors, with fair compensation ensured.",
        image: "/activities/bushman-cultural.jpeg"
      },
      {
        title: "Historic Swakopmund",
        content: "Explore the German colonial architecture and fascinating history of coastal Swakopmund. Your guided walking tour includes the historic jetty, landmark buildings, and local museums. Learn about the complex colonial history and how it has shaped modern Namibia, with time to enjoy the town's charming cafés and craft markets.",
        image: "/tour-images/namibia-highlights.jpeg"
      },
      {
        title: "Traditional Village Visits",
        content: "Visit authentic Himba and Herero villages with respectful guidance from local community members. Learn about these communities' distinctive cultural practices, traditional dress, and lifestyles. These visits are arranged with communities that welcome visitors and benefit directly from tourism, supporting sustainable cultural preservation.",
        image: "/tour-images/namwild.jpeg"
      }
    ],
    locations: [
      {
        name: "Twyfelfontein Rock Art Site",
        description: "This UNESCO World Heritage site contains over 2,500 rock engravings dating back thousands of years. Created by San hunter-gatherers, these petroglyphs provide fascinating insights into ancient belief systems and cultural practices. Local guides explain the significance of the various engravings and their cultural context.",
        image: "/tour-images/bigfive.jpeg"
      },
      {
        name: "Damara Living Museum",
        description: "Experience traditional Damara culture at this authentic living museum. Local community members demonstrate traditional practices including fire-making, leather tanning, blacksmithing, and traditional games. The museum was created by the community to preserve and share their cultural heritage.",
        image: "/activities/desert-exploration.jpeg"
      },
      {
        name: "Mondesa Township",
        description: "Visit Swakopmund's vibrant township of Mondesa to experience contemporary Namibian culture. Meet local families, sample traditional food, enjoy musical performances, and learn about daily life in modern Namibia. This tour provides important insights into both historical and present-day cultural dynamics.",
        image: "/activities/etosha-wildlife.jpeg"
      }
    ],
    practicalInfo: {
      bestTimes: "Cultural experiences are available year-round, though specific seasonal festivals may be of interest to cultural enthusiasts. Please inquire about any special cultural events that might coincide with your visit.",
      whatToBring: "Respectful, modest clothing (shoulders and knees covered when visiting traditional communities), small gifts if visiting villages (school supplies are appreciated rather than candy), camera (ask permission before photographing people), and an open mind.",
      photography: "Photography is welcomed in many contexts, but always ask permission before photographing individuals. Some traditional communities may request a small fee for photography privileges. Our guides will advise on appropriate photography etiquette in each situation.",
      healthSafety: "Cultural experiences are generally safe and accessible for all travelers. When visiting rural communities, be prepared for basic facilities. Some cultural sites may involve moderate walking. Our guides ensure appropriate cultural protocols are followed."
    },
    testimonials: {
      google: [
        {
          quote: "The Bushman cultural experience was the highlight of our Namibia trip. Far more authentic and respectful than we expected. Professor Rion's deep knowledge of local cultures made for fascinating conversations throughout our journey.",
          author: "Thomas & Hannah",
          location: "Australia",
          image: "/images/rion-profile.jpeg",
          rating: 5
        },
        {
          quote: "We particularly enjoyed the village visits and learning about the different ethnic groups in Namibia. It's rare to find cultural experiences that feel this genuine and not staged for tourists.",
          author: "Marie C.",
          location: "Germany",
          image: "/activities/photography.jpeg",
          rating: 5
        }
      ],
      trustpilot: [
        {
          quote: "The Twyfelfontein rock art tour was incredible - one of the best archaeological sites I've visited worldwide. The guide's interpretation added so much depth to the experience.",
          author: "David & Patrice",
          location: "Canada",
          image: "/tour-images/victoria-falls.jpeg",
          rating: 5
        },
        {
          quote: "As an anthropologist, I was impressed by the sensitive approach to cultural tourism. The experiences felt mutual and respectful rather than exploitative. Highly recommended for those interested in authentic cultural exchange.",
          author: "Dr. James W.",
          location: "UK",
          image: "/activities/okavango-delta.jpeg",
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
                <p className="mb-6">Contact our safari specialists to plan your personalized cultural experience.</p>
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
                <p className="text-gray-700">These authentic cultural experiences are included in our signature tours:</p>
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
                  <p className="italic text-gray-700">"To understand a country, you must understand its people. Our cultural experiences provide a window into the soul of Southern Africa through meaningful human connections."</p>
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
                <h2 className="text-3xl font-bold text-black font-['Athelas',_serif]">Cultural Sites</h2>
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
                        src="/images/activities/cultural-experiences/google-logo.svg" 
                        alt="Google" 
                        className="w-4 h-4 mr-2"
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
                        src="/images/activities/cultural-experiences/trustpilot-logo.svg" 
                        alt="Trustpilot" 
                        className="w-4 h-4 mr-2"
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-['Athelas',_serif]">Experience Authentic Cultural Encounters</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">Discover the rich cultural tapestry of Southern Africa with our authentic and respectful cultural experiences led by Professor Rion Haraeb.</p>
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

export default CulturalExperiencesDetail; 