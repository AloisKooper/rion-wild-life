import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="w-full mt-[120px] mb-[100px] max-md:mt-16 max-md:mb-10 px-4">
      <div className="relative min-h-[600px] max-md:min-h-[500px] w-full flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/a72b84d0ec2fde0f735ae576a1ead90f747810482dcb7aba13b91f54f701b50a?placeholderIfAbsent=true"
            alt="Safari landscape"
            className="absolute h-full w-full object-cover inset-0 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1200px] flex flex-col md:flex-row items-center md:items-start gap-10 px-6 py-12">
          {/* Left Column with Logo and Badges */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-[220px] max-md:w-[180px] bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/193872d3372dc439446f35c16ad0ae64aeffcf964ffbd912a95f39d8848600d7?placeholderIfAbsent=true"
                alt="Safari logo"
                className="w-full aspect-square object-contain drop-shadow-lg"
              />
            </div>
            
            <div className="flex flex-col gap-3 mt-8 max-md:mt-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-[rgba(192,91,42,1)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-white text-sm font-medium">Registered Guide</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-[rgba(192,91,42,1)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-white text-sm font-medium">Trust & Safety</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-[rgba(192,91,42,1)]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
                <span className="text-white text-sm font-medium">Best Price Guarantee</span>
              </div>
            </div>
          </div>
          
          {/* Right Column with Text Content */}
          <div className="flex flex-col items-start max-w-[700px]">
            <h2 className="text-white text-4xl max-md:text-3xl font-normal leading-tight">
              <span
                className="font-['Aboreto,_-apple-system,_Roboto,_Helvetica,_sans-serif'] block mb-2"
              >
                Let's{" "}
                <span
                  className="text-[rgba(192,91,42,1)]"
                >
                  Explore
                </span>
              </span>
              <span
                className="font-['Aboreto,_-apple-system,_Roboto,_Helvetica,_sans-serif'] block"
              >
                The Beauty Of Southern Africa
              </span>
            </h2>
            
            <div className="h-[3px] w-[100px] bg-[rgba(192,91,42,1)] mt-6 max-md:mt-4"></div>
            
            <p className="text-white text-lg font-light leading-relaxed mt-8 max-md:mt-6 max-w-[600px]">
              Discover Namibia's vast deserts and Botswana's winding rivers with Rion's expertly guided
              tours. Witness the majestic Big Five wildlife, explore the wonders of Etosha National Park, 
              and experience unforgettable Walvisbay excursions. Every journey is crafted to create memories that last a lifetime.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10 max-md:mt-8">
              <a 
                href="/tours" 
                className="px-8 py-4 bg-[rgba(192,91,42,1)] hover:bg-[rgba(172,71,22,1)] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Tours
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white hover:border-[rgba(192,91,42,1)] text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
