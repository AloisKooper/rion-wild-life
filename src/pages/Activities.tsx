import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/home/Footer";
import Navbar from "../components/common/Navbar";
import SidebarMap from "../components/SidebarMap";

const Activities: React.FC = () => {
  // Activities data based on client documentation and Figma design
  const activities = [
    {
      id: 1,
      title: "Wildlife Viewing",
      icon: "wildlife",
      imageSrc: "/activities/etosha-wildlife.jpeg",
      description: "Experience breathtaking wildlife encounters across Namibia, Botswana, and Victoria Falls with expert-guided game drives. Spot the Big Five, desert elephants, cheetahs, and rare black rhinos in Etosha National Park in their natural habitat.",
    },
    {
      id: 2,
      title: "Desert Exploration",
      icon: "desert",
      imageSrc: "/activities/desert-exploration.jpeg",
      description: "Discover the ancient Namib Desert and the breathtaking red sand dunes of Sossusvlei. Experience the UNESCO World Heritage site with guided tours that reveal the unique adaptations of desert wildlife and spectacular landscapes.",
    },
    {
      id: 3,
      title: "Cultural Experiences",
      icon: "culture",
      imageSrc: "/activities/cultural-experiences.jpeg",
      description: "Immerse yourself in local traditions with Bushman encounters, heritage tours in Swakopmund, and visits to traditional villages. Learn about the rich cultural tapestry of Southern Africa from Professor Rion Haraeb's bilingual expertise.",
    },
    {
      id: 4,
      title: "Photography Tours",
      icon: "camera",
      imageSrc: "/activities/photography.jpeg",
      description: "Capture stunning landscapes and wildlife with specialized photography excursions. From the Pink Lake and Dune 7 to iconic wildlife moments at Walvisbay, these tours are perfect for photography enthusiasts of all levels.",
    },
    {
      id: 5,
      title: "Okavango Delta",
      icon: "river",
      imageSrc: "/activities/okavango-delta.jpeg",
      description: "Explore the unique Okavango Delta ecosystem by traditional mokoro canoe. Encounter hippos, crocodiles, and abundant birdlife in one of Africa's most pristine wilderness areas during multi-country safari adventures.",
    },
    {
      id: 6,
      title: "Victoria Falls",
      icon: "waterfall",
      imageSrc: "/tour-images/victoria-falls.jpeg",
      description: "Marvel at the spectacular Victoria Falls, known locally as 'The Smoke That Thunders' - one of the Seven Natural Wonders of the World. Available as part of our comprehensive Namibia, Botswana, Victoria Falls tour package.",
    }
  ];

  // Facilities data based on Figma design and client documentation
  const facilities = [
    {
      id: 1,
      title: "Lodging",
      subtitle: "PREMIUM STAYS",
      icon: "accommodation"
    },
    {
      id: 2,
      title: "Transport",
      subtitle: "INCLUDED",
      icon: "safari-vehicle"
    },
    {
      id: 3,
      title: "Guides",
      subtitle: "BILINGUAL",
      icon: "guide"
    },
    {
      id: 4,
      title: "Meals",
      subtitle: "INCLUDED",
      icon: "food"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Navigation */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center h-80"
          style={{ 
            backgroundImage: "url('/images/hero/hero-background.jpeg')", 
            height: "500px"
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative">
          <Navbar />
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Safari Activities</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">Discover Southern Africa's natural wonders with Professor Rion Haraeb's expertly guided safari experiences.</p>
          </div>
        </div>
      </div>

      {/* Our Service Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-base font-normal text-[#C05B2A] uppercase">EXPERIENCES</p>
          <h2 className="text-3xl md:text-[33.18px] font-bold text-[#3D3E48] mt-2">SAFARI ACTIVITIES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="relative rounded-lg overflow-hidden shadow-lg h-[450px] group">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${activity.imageSrc})` }}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
              
              {/* Content Container */}
              <div className="relative h-full flex flex-col p-6 justify-between z-10">
                {/* Icon and Title */}
                <div>
                  <div className="bg-white/90 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {activity.icon === "wildlife" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-6 h-6">
                        <path d="M12,3C8.69,3 6,5.69 6,9C6,11.1 7.06,12.96 8.66,14H6L3.43,16.84C3.16,17.11 3,17.5 3,17.91V20C3,21.03 3.97,22 5,22H19C20.03,22 21,21.03 21,20V17.91C21,17.5 20.84,17.11 20.57,16.84L18,14H15.34C16.94,12.96 18,11.1 18,9C18,5.69 15.31,3 12,3M12,5C14.21,5 16,6.79 16,9C16,11.21 14.21,13 12,13C9.79,13 8,11.21 8,9C8,6.79 9.79,5 12,5M18,18V20H6V18H18Z" />
                      </svg>
                    )}
                    {activity.icon === "desert" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-6 h-6">
                        <path d="M2,2V4H7V8H2V10H7C8.1,10 9,9.1 9,8V4C9,2.9 8.1,2 7,2H2M22,15C22,17.76 19.76,20 17,20H15V18H17C18.66,18 20,16.66 20,15C20,13.34 18.66,12 17,12H8V10H17C19.76,10 22,12.24 22,15M2,12V14H12V19H14V14C14,12.9 13.1,12 12,12H2M2,16V18H7C8.1,18 9,18.9 9,20V22H11V20C11,17.79 9.21,16 7,16H2Z" />
                    </svg>
                    )}
                    {activity.icon === "culture" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-6 h-6">
                        <path d="M4,3C2.89,3 2,3.89 2,5V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V5C22,3.89 21.11,3 20,3H4M4,5H20V19H4V5M17,7V9H19V7H17M17,11V13H19V11H17M5,7H15V9H5V7M5,11H15V13H5V11M5,15H15V17H5V15Z" />
                    </svg>
                    )}
                    {activity.icon === "camera" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-6 h-6">
                        <path d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z" />
                    </svg>
                    )}
                    {activity.icon === "river" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-6 h-6">
                        <path d="M20,20C18.61,20 17.22,19.53 16,18.67C13.56,20.38 10.44,20.38 8,18.67C6.78,19.53 5.39,20 4,20H2V22H4C5.37,22 6.74,21.65 8,21C10.5,22.3 13.5,22.3 16,21C17.26,21.65 18.62,22 20,22H22V20H20M20,16C18.61,16 17.22,15.53 16,14.67C13.56,16.38 10.44,16.38 8,14.67C6.78,15.53 5.39,16 4,16H2V18H4C5.37,18 6.74,17.65 8,17C10.5,18.3 13.5,18.3 16,17C17.26,17.65 18.62,18 20,18H22V16H20M22,2H2V4H6V6H2V8H6V10H2V12H6V14H2V16H4C5.37,16 6.74,15.65 8,15C10.5,16.3 13.5,16.3 16,15C17.26,15.65 18.62,16 20,16H22V14H18V12H22V10H18V8H22V6H18V4H22V2Z" />
                    </svg>
                    )}
                    {activity.icon === "waterfall" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-6 h-6">
                        <path d="M20 20C18.61 20 17.22 19.53 16 18.67C13.56 20.38 10.44 20.38 8 18.67C6.78 19.53 5.39 20 4 20H2V22H4C5.37 22 6.74 21.65 8 21C10.5 22.3 13.5 22.3 16 21C17.26 21.65 18.62 22 20 22H22V20H20M20 16C18.61 16 17.22 15.53 16 14.67C13.56 16.38 10.44 16.38 8 14.67C6.78 15.53 5.39 16 4 16H2V18H4C5.37 18 6.74 17.65 8 17C10.5 18.3 13.5 18.3 16 17C17.26 17.65 18.62 18 20 18H22V16H20M4 7L20 3L19.6 1L3.6 5H3.59C2.7 5 2 5.7 2 6.59V17H4V7Z" />
                    </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{activity.title}</h3>
                  <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-white text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
                
                {/* Button */}
                {activity.id === 1 ? (
                  <Link to="/activities/wildlife-viewing" className="bg-[#C05B2A] text-white px-5 py-2 rounded text-base font-bold w-fit hover:bg-[#A34A21] transition-colors mt-4 block">
                    Read More
                  </Link>
                ) : activity.id === 2 ? (
                  <Link to="/activities/desert-exploration" className="bg-[#C05B2A] text-white px-5 py-2 rounded text-base font-bold w-fit hover:bg-[#A34A21] transition-colors mt-4 block">
                    Read More
                  </Link>
                ) : activity.id === 3 ? (
                  <Link to="/activities/cultural-experiences" className="bg-[#C05B2A] text-white px-5 py-2 rounded text-base font-bold w-fit hover:bg-[#A34A21] transition-colors mt-4 block">
                    Read More
                  </Link>
                ) : activity.id === 4 ? (
                  <Link to="/activities/photography-tours" className="bg-[#C05B2A] text-white px-5 py-2 rounded text-base font-bold w-fit hover:bg-[#A34A21] transition-colors mt-4 block">
                    Read More
                  </Link>
                ) : activity.id === 5 ? (
                  <Link to="/activities/okavango-delta" className="bg-[#C05B2A] text-white px-5 py-2 rounded text-base font-bold w-fit hover:bg-[#A34A21] transition-colors mt-4 block">
                    Read More
                  </Link>
                ) : activity.id === 6 ? (
                  <Link to="/activities/victoria-falls" className="bg-[#C05B2A] text-white px-5 py-2 rounded text-base font-bold w-fit hover:bg-[#A34A21] transition-colors mt-4 block">
                    Read More
                  </Link>
                ) : (
                  <button className="bg-[#C05B2A] text-white px-5 py-2 rounded text-base font-bold w-fit hover:bg-[#A34A21] transition-colors mt-4 self-start">
                    Read More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 relative">
        <div className="relative">
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/tour-images/bigfive.jpeg')" }}>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Text content */}
              <div className="text-white space-y-6">
                <h2 className="text-4xl font-bold uppercase mb-4">Safari Facilities</h2>
                <p className="text-base leading-7">
                  All Rion Wildlife Safaris tours feature premium facilities to ensure your comfort and satisfaction throughout your African adventure. From luxury lodging at renowned safari camps to comfortable transportation and expert bilingual guides, we provide everything you need for an unforgettable experience.
                </p>
                <button className="bg-[#C05B2A] text-white px-5 py-3 rounded text-base font-bold mt-4 hover:bg-[#A34A21] transition-colors">
                  Learn More
                </button>
              </div>

              {/* Right side - Facility cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {facilities.map((facility) => (
                  <div key={facility.id} className="bg-white rounded-lg p-6 flex flex-col items-center">
                    <div className="mb-3">
                      {facility.icon === "accommodation" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-12 h-12">
                          <path d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z" />
                        </svg>
                      )}
                      {facility.icon === "safari-vehicle" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-12 h-12">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01M6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16M17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16M5 11L6.5 6.5H17.5L19 11H5Z" />
                        </svg>
                      )}
                      {facility.icon === "guide" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-12 h-12">
                          <path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,9.7C11,9.7 10.2,10.5 10.2,11.5C10.2,12.5 11,13.3 12,13.3C13,13.3 13.8,12.5 13.8,11.5C13.8,10.5 13,9.7 12,9.7Z" />
                        </svg>
                      )}
                      {facility.icon === "food" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C05B2A" className="w-12 h-12">
                          <path d="M15.5,21L14,8H16.23L15.1,3.46L16.84,3L18.09,8H22L20.5,21H15.5M5,11H10A3,3 0 0,1 13,14H2A3,3 0 0,1 5,11M13,18A3,3 0 0,1 10,21H5A3,3 0 0,1 2,18H13M3,15H8L9.5,16.5L11,15H12A1,1 0 0,1 13,16A1,1 0 0,1 12,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15Z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-[#3D3E48] text-3xl font-bold">{facility.title}</h3>
                    <p className="text-[#3D3E48] text-base font-medium">{facility.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-[#C05B2A] mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" />
              </svg>
              <h3 className="text-[#3D3E48] text-xl font-bold">Premium Packages</h3>
            </div>
            <p className="text-[#3D3E48] text-base mb-6">
              Rion Wildlife Safaris offers exceptional value with all-inclusive safari packages ranging from €1,900 to €4,800. Enjoy premium lodging, expert guides, and unforgettable wildlife experiences with flexible payment options.
            </p>
            <button className="bg-[#C05B2A] text-white px-4 py-2 rounded text-base hover:bg-[#A34A21] transition-colors">
              VIEW PRICING
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-[#C05B2A] mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
              <h3 className="text-[#3D3E48] text-xl font-bold">Unique Destinations</h3>
            </div>
            <p className="text-[#3D3E48] text-base mb-6">
              Explore diverse destinations across Namibia, Botswana, and Victoria Falls. From the iconic dunes of Sossusvlei to the elephant-rich plains of Chobe and the majestic Victoria Falls, our tours showcase Africa's most stunning landscapes.
            </p>
            <button className="bg-[#C05B2A] text-white px-4 py-2 rounded text-base hover:bg-[#A34A21] transition-colors">
              EXPLORE TOURS
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Activities; 