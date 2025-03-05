import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/home/Footer";
import ButtonCTA from '../../components/ui/button-cta';

const VictoriaFallsDetail: React.FC = () => {
  const [reviewSource, setReviewSource] = useState<'google' | 'trustpilot'>('google');

  // CMS-friendly data structure that will later be replaced with Payload CMS data
  const activityData = {
    title: "Victoria Falls",
    heroImage: "/tour-images/victoria-falls.jpeg",
    introduction: "Experience the awe-inspiring Victoria Falls, one of the Seven Natural Wonders of the World. Known locally as 'Mosi-oa-Tunya' or 'The Smoke that Thunders', this spectacular waterfall on the Zambezi River creates a natural border between Zambia and Zimbabwe and offers a range of thrilling activities beyond the stunning views.",
    includedIn: [
      {
        tourName: "Namibia, Botswana, Victoria Falls",
        tourSlug: "/tours",
        description: "Our signature multi-country safari that concludes with the spectacular Victoria Falls experience."
      },
      {
        tourName: "Falls & Wildlife Combo",
        tourSlug: "/tours",
        description: "A focused tour combining Victoria Falls with nearby national parks for a perfect week-long safari."
      }
    ],
    highlights: [
      "Witness the largest sheet of falling water in the world at peak flow",
      "Experience the spray and thunder of the falls up close on walking trails",
      "Enjoy optional adventure activities including helicopter flights, white water rafting, and bungee jumping",
      "Cruise the Zambezi River at sunset for wildlife viewing",
      "Explore the rich cultural heritage of the surrounding area"
    ],
    overview: "Victoria Falls represents not just a spectacular natural wonder, but the centerpiece of an adventure destination offering activities for every type of traveler. The falls themselves span nearly two kilometers, with a drop of more than 100 meters, creating a spectacular display as the Zambezi River cascades over the basalt cliff. Our carefully crafted Victoria Falls experiences include both the essential viewing points of the falls and optional adventure activities tailored to your interests. The surrounding area offers wildlife viewing, historical exploration, and cultural experiences, making this a multifaceted destination beyond the primary attraction of the falls themselves.",
    experienceDetails: [
      {
        title: "Falls Viewing",
        content: "Walk the network of paths on both the Zimbabwe and Zambia sides of the falls for diverse perspectives of this natural wonder. The Main Falls and Horseshoe Falls offer the most dramatic views, while the Knife Edge Bridge provides an exhilarating close-up experience with the spray. During full moon periods, special evening visits allow you to witness the rare lunar rainbow (moonbow) – a magical experience few travelers ever encounter. We time our visits strategically to balance optimal viewing with manageable spray conditions.",
        image: "/activities/falls-viewing.jpeg"
      },
      {
        title: "Adventure Activities",
        content: "Victoria Falls has earned its reputation as Africa's adventure capital. Options range from mild to wild, including the spectacular Flight of Angels helicopter ride over the falls, adrenaline-pumping white water rafting on the Zambezi River's Grade 5 rapids, and the famous Victoria Falls bungee jump from the bridge connecting Zimbabwe and Zambia. For those seeking less extreme options, sunset river cruises, canopy tours, and guided rainforest walks offer accessible excitement.",
        image: "/activities/photography.jpeg"
      },
      {
        title: "Cultural & Historical Tours",
        content: "Explore the rich heritage surrounding the falls. Visit a local village for authentic cultural interactions, tour the historic Victoria Falls Hotel with its colonial architecture and fascinating history, or explore the vibrant markets of nearby towns. For a uniquely local experience, the Livingstone Museum offers insights into the region's discovery by European explorers and its natural and cultural history. These activities offer a deeper understanding of the falls beyond their natural splendor.",
        image: "/activities/cultural-experiences.jpeg"
      }
    ],
    locations: [
      {
        name: "Zimbabwe Side",
        description: "The Zimbabwe viewpoint offers the most comprehensive views of the falls, with numerous vantage points along a well-maintained walking trail. This side provides the classic frontal views of the Main Falls and allows visitors to see approximately 75% of the falls face. The viewing areas are accessible year-round, though prepare to get soaked during high water (April to July) from the considerable spray.",
        image: "/tour-images/namwild.jpeg"
      },
      {
        name: "Zambia Side",
        description: "The Zambian perspective provides more intimate, close-up experiences with the falls, particularly at the Knife Edge Bridge which brings visitors thrillingly close to the Eastern Cataract. During low water season (October to November), the Zambian side allows access to Devil's Pool – a natural infinity pool at the edge of the falls where brave swimmers can safely peer over the precipice.",
        image: "/activities/etosha-wildlife.jpeg"
      },
      {
        name: "Zambezi River",
        description: "The mighty Zambezi River offers numerous activities both above and below the falls. Upstream, sunset cruises provide wildlife viewing and spectacular scenery in the golden light of late afternoon. Below the falls, the river's dramatic passage through the narrow Batoka Gorge creates some of the world's most challenging white water rapids, attracting adventure seekers from around the globe.",
        image: "/activities/desert-exploration.jpeg"
      }
    ],
    practicalInfo: {
      bestTimes: "The falls are spectacular year-round, though their character changes dramatically with the seasons. February to May sees the highest water volume with the most dramatic views but intense spray that can limit visibility. June to August offers balanced water levels with good visibility. September to December shows the geological features more clearly with less spray, but the falls may be reduced to separate channels during the driest months.",
      whatToBring: "Waterproof protection for cameras and phones, quick-dry clothing (you will get wet during peak flow months), good walking shoes with grip, sun protection, passport (for crossing between Zimbabwe and Zambia), and insect repellent. During peak flow months (March-April), renting a poncho is advised as the spray can feel like heavy rainfall.",
      accommodations: "We offer accommodations ranging from the historic luxury of Victoria Falls Hotel and Royal Livingstone to comfortable mid-range options and more economical lodges. All our recommended properties provide easy access to the falls and activities. Some accommodations offer falls views or river views for an enhanced experience.",
      healthSafety: "Both Zambia and Zimbabwe sides are generally safe for tourists. This is a malaria area, so prophylaxis is recommended. Stay on designated paths when viewing the falls - barriers are minimal in some areas. Be aware of wildlife, particularly baboons, who are habituated to humans and may attempt to snatch food or belongings."
    },
    testimonials: {
      google: [
        {
          quote: "The Victoria Falls portion of our safari was simply mind-blowing. I've seen many waterfalls, but nothing compares to the scale and power of these falls. Our guide timed our visits perfectly to avoid crowds and showed us viewpoints I would never have found on my own. The sunset cruise was magical as well.",
          author: "William & Emily",
          location: "Canada",
          image: "/images/rion-profile.jpeg",
          rating: 5
        },
        {
          quote: "I was initially hesitant about the adventure activities, but taking the helicopter flight over the falls was the best decision! The perspective from above makes you truly appreciate the scale of this natural wonder. The organization was flawless, with someone taking care of every detail.",
          author: "Hans Mueller",
          location: "Germany",
          image: "/activities/okavango-delta.jpeg",
          rating: 5
        }
      ],
      trustpilot: [
        {
          quote: "Victoria Falls exceeded all expectations. The team arranged for us to view the falls from both countries, and the contrast in perspectives was worth it. They also helped us secure a last-minute dinner at the Royal Livingstone with a falls view that became the highlight of our anniversary trip.",
          author: "Rebecca & John",
          location: "USA",
          image: "/tour-images/bigfive.jpeg",
          rating: 5
        },
        {
          quote: "After two weeks of wildlife viewing, I wasn't sure how Victoria Falls would compare, but it was the perfect conclusion to our African adventure. The lunar rainbow viewing they arranged was a once-in-a-lifetime experience I didn't even know was possible until our consultant suggested it.",
          author: "François Dubois",
          location: "France",
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
        id: 4,
        title: "Photography Tours",
        image: "/activities/photography.jpeg"
      },
      {
        id: 5,
        title: "Okavango Delta",
        image: "/activities/okavango-delta.jpeg"
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
                    <h4 className="text-lg font-semibold text-[#3D3E48] mb-2">Health & Safety</h4>
                    <p className="text-gray-700 text-sm">{activityData.practicalInfo.healthSafety}</p>
                  </div>
                </div>
              </div>

              {/* Contact / Booking Call-to-Action */}
              <div className="bg-[#3D3E48] text-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4 font-['Athelas',_serif]">Ready to Book?</h3>
                <p className="mb-6">Contact our specialists to plan your Victoria Falls adventure.</p>
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
                <p className="text-gray-700">Victoria Falls is featured in these signature tours:</p>
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
                  <p className="italic text-gray-700">"Victoria Falls defies adequate description. From the immense thunder that can be heard miles away to the gossamer rainbow mists that rise hundreds of feet into the air, it is a natural spectacle that both humbles and exhilarates the human spirit."</p>
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
                <h2 className="text-3xl font-bold text-black font-['Athelas',_serif]">Key Viewpoints</h2>
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
                        src="/images/activities/victoria-falls/google-logo.svg" 
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
                        src="/images/activities/victoria-falls/trustpilot-logo.svg" 
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-['Athelas',_serif]">Experience the Majesty of Victoria Falls</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">Witness one of the world's great natural wonders and complete your Southern African adventure with the unforgettable "Smoke that Thunders."</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonCTA variant="primary">EXPLORE OUR TOURS</ButtonCTA>
            <ButtonCTA variant="secondary">DOWNLOAD BROCHURE</ButtonCTA>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default VictoriaFallsDetail; 