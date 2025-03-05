import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileInputDesign from "./MobileInputDesign";
import Navbar from "./common/Navbar";

const HeroSection: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "de">("de");

  return (
    <section className="relative w-full flex flex-col min-h-screen md:h-screen">
      {/* Full-width background container - flex-grow to expand with content */}
      <div className="relative w-full flex flex-col flex-grow min-h-screen md:h-screen">
        {/* Background image */}
        <img
          src="/images/hero/hero-background.jpeg"
          alt="Safari landscape background"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        
        {/* Radial gradient overlay - improved visibility */}
        <div className="absolute inset-0 bg-black/30 bg-gradient-radial from-transparent via-black/40 to-black/60"></div>
        
        {/* Content container - flex-grow to push content to bottom and auto-adjust height */}
        <div className="relative flex flex-col flex-grow z-10">
          {/* Header navigation */}
          <Navbar />
          
          {/* Main content wrapper - with reduced padding */}
          <div className="flex-grow w-full px-12 py-6 max-md:px-5">
            <div className="md:flex md:flex-row md:gap-8 flex flex-col">
              {/* Mobile-first hero image - appears first on mobile */}
              <div className="w-full md:w-5/12 md:order-2 flex items-center justify-center mb-8 md:mb-0">
                <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden">
                  <img 
                    src="/images/rion-profile.jpeg" 
                    alt="Rion Wildlife Safari" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content section */}
              <div className="w-full md:w-7/12 md:order-1">
                <div className="flex flex-col">
                  <h1 className="text-[32px] md:text-6xl leading-tight text-white font-aboreto">
                    <span className="text-white">RION WILDLIFE </span>
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">SAFARiS</span>
                  </h1>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/7ee0a493f1bb7678cce3da87b25a29a539cac003d990313797c0703f6759b51e?placeholderIfAbsent=true"
                    alt="Decorative element"
                    className="object-contain mt-6 max-w-full aspect-[71.43] w-[142px]"
                    aria-hidden="true"
                  />
                  <p className="mt-4 text-base text-[16px] font-normal font-poppins leading-7 text-white max-w-2xl">
                    Embark On A Journey Through Africa's Breathtaking Landscapes With Rion Haraeb, 
                    Your Expert Guide Fluent In English And German. With Over 20 Years Of Experience, 
                    Rion Crafts Personalized Safari Adventures That Showcase The Hidden Gems And 
                    Wildlife Wonders Of Namibia And Botswana.
                  </p>

                  {/* Rating and founder info - aligned to left on mobile */}
                  <div className="flex mt-8 items-start flex-wrap max-md:flex-col max-md:items-start">
                    <div className="flex flex-col items-start mr-4">
                      <div className="text-5xl font-bold text-white mb-2">4.0</div>
                      <div className="flex">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/0f56b73840e94320f34227f4897f81cc57ba254dbec50808f2ce22586f669e72?placeholderIfAbsent=true"
                          alt="Star"
                          className="w-5 h-5"
                        />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/0f56b73840e94320f34227f4897f81cc57ba254dbec50808f2ce22586f669e72?placeholderIfAbsent=true"
                          alt="Star"
                          className="w-5 h-5"
                        />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/0f56b73840e94320f34227f4897f81cc57ba254dbec50808f2ce22586f669e72?placeholderIfAbsent=true"
                          alt="Star"
                          className="w-5 h-5"
                        />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/0f56b73840e94320f34227f4897f81cc57ba254dbec50808f2ce22586f669e72?placeholderIfAbsent=true"
                          alt="Star"
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    <div className="hidden md:block h-24 w-0.5 bg-[#C05B2A] mx-4"></div>
                    <div className="flex items-start mt-6 md:mt-0">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/1fc69a629b29eb572c58b38983947e37da4fd3242714dd1cbff9321b7a391909?placeholderIfAbsent=true"
                        alt="Rion Haraeb profile"
                        className="w-12 h-12 rounded-full mr-3 mt-1"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-lg font-bold text-white">Rion Haraeb</h2>
                        <p className="text-base font-poppins font-normal text-stone-200">Founder</p>
                        <blockquote className="text-base font-poppins font-normal text-white mt-1 max-w-xs">
                          "Making Wild Moments Into Fun Trips With Expert Help. Your Great Safari Is Our Aim"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              {/* Right column - intentionally left empty as per design */}
            </div>
          </div>
          
          <div className="w-full max-w-[1000px] mx-auto mb-8 md:mb-10 px-4">
            {/* Mobile search form - only visible on small screens */}
            <div className="md:hidden flex justify-center">
              <MobileInputDesign className="mb-6" />
            </div>
            
            {/* Desktop search form - hidden on small screens */}
            <form
              className="hidden md:flex flex-wrap gap-4 md:gap-5 justify-between items-center px-4 md:px-8 py-5 w-full bg-white rounded-xl shadow-[0px_10px_30px_rgba(123,188,176,0.5)]"
              aria-label="Booking form"
            >
              <div className="flex flex-col gap-1 w-full md:w-auto md:flex-1 min-w-[130px] sm:min-w-[160px] text-center md:text-left">
                <label className="text-amber-700 font-bold text-sm">Location</label>
                <div className="relative flex gap-2 items-center border rounded-md p-1.5 hover:border-amber-700">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/aab3b89f1fbfeadd94fccfd190d12ef609b3147856b7108490f584715f8bfcdf?placeholderIfAbsent=true"
                    alt="Location icon"
                    className="object-contain shrink-0 aspect-[0.81] w-[12px]"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="destination"
                    placeholder="Search For A Destination"
                    className="border-none outline-none text-gray-500 italic font-poppins w-full text-xs sm:text-sm text-center md:text-left"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-700">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
              <div className="hidden md:flex shrink-0 self-stretch my-auto w-px h-8 bg-gray-200" aria-hidden="true" />
              <div className="flex flex-col gap-1 w-full md:w-auto md:flex-1 min-w-[130px] sm:min-w-[160px] text-center md:text-left">
                <label className="text-amber-700 font-bold text-sm">Guests</label>
                <div className="relative flex gap-2 items-center border rounded-md p-1.5 hover:border-amber-700">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/9dfde8f68c2ec169705a601d57f575584897a9339828522ce76b28b2cf297a07?placeholderIfAbsent=true"
                    alt="Guests icon"
                    className="object-contain shrink-0 aspect-[1.38] w-[18px]"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="guests"
                    placeholder="How many Guests?"
                    className="border-none outline-none text-gray-500 italic font-poppins w-full text-xs sm:text-sm text-center md:text-left"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-700">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
              <div className="hidden md:flex shrink-0 self-stretch my-auto w-px h-8 bg-gray-200" aria-hidden="true" />
              <div className="flex flex-col gap-1 w-full md:w-auto md:flex-1 min-w-[130px] sm:min-w-[160px] text-center md:text-left">
                <label className="text-amber-700 font-bold text-sm">Date</label>
                <div className="relative flex gap-2 items-center border rounded-md p-1.5 hover:border-amber-700">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/9c813d91dd189ccc1e7e03a6a8fbc32c5887e71759531d683abf526c7c418fde?placeholderIfAbsent=true"
                    alt="Calendar icon"
                    className="object-contain shrink-0 w-[16px]"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="date"
                    placeholder="Pick a date"
                    className="border-none outline-none text-gray-500 italic font-poppins w-full text-xs sm:text-sm text-center md:text-left"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-700">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 text-base font-extrabold leading-none text-center text-white bg-[rgba(192,91,42,1)] rounded-[40px] shadow-[0px_8px_20px_rgba(192,91,42,0.8)]"
                aria-label="Book trip"
              >
                BOOK TRIP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
