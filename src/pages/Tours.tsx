import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/home/Footer";
import Navbar from "../components/common/Navbar";
import SidebarMap from "../components/SidebarMap";

const Tours: React.FC = () => {
  // Rion's safari tours data based on client documentation
  const safariTours = [
    {
      id: 1,
      title: "Namibia Highlights Safari",
      location: "Namibia",
      duration: "14 days",
      price: "€3,600",
      imageSrc: "/tour-images/namibia-highlights.jpeg",
      highlights: "Windhoek, Kalahari Desert, Sossusvlei UNESCO dunes, Swakopmund, Etosha National Park",
      route: "/tours/namibia-highlights" // This links to our newly created page
    },
    {
      id: 2,
      title: "Walvisbay Excursions",
      location: "Namibia",
      duration: "6+ hours",
      price: "€80",
      imageSrc: "/tour-images/namibia-highlights.jpeg",
      highlights: "Pink Lake, Dune 7, Welwitschia, Moonlandscape (Photography focused)",
      route: "/tours/walvisbay-excursion" // Link to our new page
    },
    {
      id: 3,
      title: "Namwild Safari",
      location: "Namibia",
      duration: "9 days",
      price: "€1,900",
      imageSrc: "/tour-images/namwild.jpeg",
      highlights: "Windhoek, Swakopmund, Etosha (South and North), Monte Etjo",
      route: "/tours/namwild-safari" // This links to our newly created page
    },
    {
      id: 4,
      title: "Namibia, Botswana, Victoria Falls",
      location: "Multi-country",
      duration: "18 days",
      price: "€4,500",
      imageSrc: "/tour-images/victoria-falls.jpeg",
      highlights: "Chobe, Okavango Delta, and Victoria Falls highlights",
      route: "/tours/namibia-botswana-victoria-falls" // Updated to match the App.tsx route
    },
    {
      id: 5,
      title: "Big Five Safari (Nambovic)",
      location: "Namibia & Botswana",
      duration: "19 days",
      price: "€4,800",
      imageSrc: "/tour-images/bigfive.jpeg",
      highlights: "Etosha, Chobe, Big Five wildlife spotting",
      route: "/tours/big-five-safari" // This links to our newly created page
    }
  ];

  // We'll display this featured tour in the main content area
  const featuredTour = safariTours.find(tour => tour.id === 5); // Big Five Safari

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Safari Tours</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">Experience the best of African wildlife with our premium safari packages.</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content - Takes 2/3 of the width on large screens */}
          <div className="lg:col-span-2">
            {/* Heading Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-normal text-[#3D3E48] uppercase mb-4">
                PREMIUM SAFARI EXPERIENCES
              </h1>
              <div className="flex items-center text-[#3D3E48] mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-base">Namibia, Botswana & Victoria Falls</span>
              </div>
              <div className="ml-7 text-[#3D3E48]">
                <p className="text-base">
                  <span className="font-bold">Big Five Safari (Nambovic)</span> | 19 days | €4,800 | Etosha, Chobe, Big Five wildlife spotting
                </p>
              </div>
            </div>

            {/* Featured Image - Big Five Safari with rhino remains here */}
            <div className="mb-8 relative h-96 rounded-lg overflow-hidden">
              <img 
                src="/tour-images/bigfive.jpeg" 
                alt="African Safari Wildlife" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-5">
                <div className="text-white text-sm font-bold">
                  Namibia & Botswana | 19 days | €4,800
                </div>
                <div className="space-y-3">
                  <h3 className="text-white text-2xl font-bold">
                    Big Five Safari (Nambovic)
                  </h3>
                  <p className="text-white">Etosha, Chobe, Big Five wildlife spotting</p>
                  <Link to="/tours/big-five-safari" className="inline-block px-6 py-3 text-base font-extrabold leading-none text-white bg-[rgba(192,91,42,1)] rounded-[40px] shadow-[0px_8px_20px_rgba(192,91,42,0.8)]">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Sections - Updated with Big Five Safari info */}
            <div className="space-y-6 text-black">
              <p className="text-base leading-7">
                Rion Wildlife Safaris offers premium safari experiences across Namibia, Botswana, and Victoria Falls, led by Professor Rion Haraeb. With 20+ years of experience, Rion specializes in bilingual (English and German) guided tours, targeting German and American travelers. All tours feature lodging, wildlife viewing, and cultural highlights.
              </p>
              
              <div className="relative">
                <p className="text-base leading-7">
                  <span className="float-left text-7xl font-bold mr-2 mt-1 leading-none">E</span>
                  xperience the breathtaking landscapes and magnificent wildlife of southern Africa with our expertly crafted safari packages. Each journey is designed to showcase the region's natural beauty while ensuring comfort, safety, and unforgettable encounters with Africa's most iconic animals. Our premier offering, the Big Five Safari (Nambovic), is a comprehensive 19-day adventure spanning Namibia and Botswana for €4,800 per person.
                </p>
              </div>
              
              <p className="text-base leading-7">
                Our Big Five Safari takes you from Namibia to Botswana, featuring exceptional wildlife viewing in Etosha National Park and Chobe. This journey is specifically designed for spotting the legendary Big Five: lion, leopard, elephant, buffalo, and rhino. Key stops include the stunning landscapes of Sossusvlei, the coastal charm of Swakopmund, and the wildlife-rich areas around Kasane at the magnificent Chobe River Lodge.
              </p>
              
              <p className="text-base leading-7">
                What sets our safaris apart is the personalized guidance of Professor Rion Haraeb, whose bilingual expertise (English and German) and deep knowledge of southern African ecosystems ensure an educational and enriching experience. All of our tours include premium accommodations at carefully selected lodges, transportation in comfortable safari vehicles, guided game drives, and cultural encounters with local communities.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-5 my-8">
              <div className="rounded-md overflow-hidden">
                <img 
                  src="/tour-images/namibia-highlights.jpeg" 
                  alt="Namibia Desert" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-md overflow-hidden">
                <img 
                  src="/tour-images/namwild.jpeg" 
                  alt="Safari Wildlife" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Final Paragraph */}
            <p className="text-base leading-7 text-black">
              Booking is simple – contact Professor Rion directly to discuss your preferred dates and tour options. A 70% deposit secures your adventure, with the remaining 30% due upon completion. Join us for an African journey that combines luxury, education, and unforgettable wildlife encounters.
            </p>
          </div>

          {/* Sidebar - Takes 1/3 of the width on large screens */}
          <div className="space-y-8 lg:pt-16">
            {/* Map Section */}
            <SidebarMap />
            
            {/* Tour Packages Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl text-[#3D3E48]">Safari Tour Packages</h2>
                <a href="/tours" className="text-[#C05B2A]">See all</a>
              </div>
              
              <div className="space-y-5">
                {safariTours.filter(tour => tour.id !== 5).map(tour => (
                  <div key={tour.id} className="relative h-64 rounded-lg overflow-hidden group">
                    <img 
                      src={tour.imageSrc} 
                      alt={tour.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-5">
                      <div className="text-white text-xs font-bold">
                        {tour.location} | {tour.duration} | {tour.price}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-white text-lg font-bold">
                          {tour.title}
                        </h3>
                        <Link to={tour.route} className="inline-block px-6 py-3 text-base font-extrabold leading-none text-white bg-[rgba(192,91,42,1)] rounded-[40px] shadow-[0px_8px_20px_rgba(192,91,42,0.8)]">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Tours; 