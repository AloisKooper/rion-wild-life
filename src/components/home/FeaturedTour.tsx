import React from "react";

const FeaturedTour: React.FC = () => {
  return (
    <section className="w-full mt-24 md:mt-32">
      {/* Section heading - centered */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <div className="inline-flex items-center gap-2.5 mb-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/6c0d89f877af1dcc6732f857c943f6e250e8b1d1986a6a99370e80a012207347?placeholderIfAbsent=true"
            alt="Safari icon"
            className="w-[31px] aspect-square object-contain"
          />
          <span className="text-[rgba(192,91,42,1)] font-bold text-base">Featured Experience</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#1C2B38]">
          Discover Our Most Popular Safari
        </h2>
      </div>

      {/* Main content container - NO BACKGROUND */}
      <div className="overflow-hidden bg-transparent shadow-none">
        <div className="flex flex-col md:flex-row">
          {/* Left column - Image - EXPLICITLY NO BACKGROUND */}
          <div className="relative w-full md:w-1/2 bg-transparent p-0 flex items-center justify-center h-[300px] md:h-auto">
            {/* Image container with padding for mobile - REMOVED PADDING AND MADE CONTAINER FULL SIZE */}
            <div className="w-full h-full bg-transparent overflow-hidden">
              <img
                src="/tour-images/bigfive.jpeg"
                alt="Big Five Safari - Rhinos in Namibia"
                className="w-full h-full object-cover bg-transparent rounded-md md:rounded-lg" 
                style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Trending badge */}
            <div className="absolute top-3 left-6 md:top-7 md:left-[8%]">
              <div className="bg-[rgba(175,255,240,0.9)] text-xs text-[#1C2B38] text-center uppercase px-4 py-2 rounded-full font-bold backdrop-blur-sm">
                Trending Now
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-[#1C2B38] to-[#2A3F50] text-white">
            {/* Tour title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Big Five Safari <span className="text-[rgba(192,91,42,1)]">- 19 days</span>
            </h2>
            
            {/* Location and ratings row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
              <div className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[rgba(192,91,42,1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium">Namibia & Botswana</span>
              </div>
              
              <div className="hidden md:block w-px h-5 bg-white/30" />
              
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold ml-1">4.9</span>
                <span className="text-sm text-white/80">(16 reviews)</span>
              </div>
            </div>
            
            {/* Tour highlights */}
            <div className="mb-5">
              <h3 className="text-sm uppercase tracking-wider text-[rgba(192,91,42,1)] mb-2 font-semibold">Tour Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1.5 text-sm">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-1.5 text-[rgba(192,91,42,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Etosha National Park
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-1.5 text-[rgba(192,91,42,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Chobe River
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-1.5 text-[rgba(192,91,42,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Sossusvlei
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-1.5 text-[rgba(192,91,42,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Swakopmund
                </li>
              </ul>
            </div>
            
            {/* Description */}
            <p className="text-sm md:text-base text-white/90 mb-6 flex-grow">
              Experience the ultimate wildlife adventure with Professor Rion Haraeb on this 19-day journey through Namibia and Botswana. Track the Big Five (lion, leopard, elephant, buffalo, rhino) while exploring diverse landscapes from Sossusvlei's dunes to Chobe's riverbanks.
            </p>
            
            {/* Price and CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto">
              <div className="flex flex-col">
                <span className="text-xs text-white/70">From</span>
                <span className="text-2xl font-bold text-white">€4,800</span>
              </div>
              
              <div className="flex gap-3 w-full sm:w-auto ml-auto">
                <a 
                  href="/tour-details" 
                  className="text-white border border-white hover:bg-white/10 transition-colors py-2.5 px-4 rounded-lg text-center text-sm font-medium flex-1 sm:flex-initial"
                >
                  View Details
                </a>
                <a 
                  href="/booking" 
                  className="bg-[rgba(192,91,42,1)] shadow-[0px_8px_15px_rgba(192,91,42,0.4)] hover:bg-[rgba(172,71,22,1)] transition-all duration-300 text-white py-2.5 px-6 rounded-lg text-center text-sm font-bold transform hover:-translate-y-0.5 flex-1 sm:flex-initial"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTour;
