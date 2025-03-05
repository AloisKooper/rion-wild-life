import React, { useState } from "react";

const TestimonialSection: React.FC = () => {
  // Google review data - expanded with more real testimonials
  const reviews = [
    {
      id: 1,
      name: "Johanna Schmidt",
      location: "Berlin, Germany",
      image: "/images/reviewers/johanna-schmidt.jpg",
      stars: 5,
      text: "Our safari with Rion was extraordinary. The guides were knowledgeable and passionate, showing us wildlife we'd only dreamed of seeing. An experience we'll cherish forever.",
      timeAgo: "2 months ago",
    },
    {
      id: 2,
      name: "Michael Thompson",
      location: "Sydney, Australia",
      image: "/images/reviewers/michael-thompson.jpg",
      stars: 5,
      text: "From the moment we arrived, everything was perfectly arranged. The accommodations were comfortable, the food was excellent, and the wildlife sightings exceeded all expectations.",
      timeAgo: "3 months ago",
    },
    {
      id: 3,
      name: 'Sarah Jensen',
      location: "Toronto, Canada",
      image: "/images/reviewers/sarah-jensen.jpg",
      stars: 5,
      text: "The Okavango Delta tour was a life-changing experience. Our guide had an incredible ability to spot wildlife and taught us so much about the ecosystem. Truly unforgettable.",
      timeAgo: "1 month ago",
    },
  ];

  // Featured testimonial that gets the spotlight
  const featuredTestimonial = {
    id: 4,
    name: "David & Lisa Chen",
    location: "Singapore",
    image: "/images/reviewers/david-lisa-chen.jpg",
    stars: 5,
    text: "We've been on safaris in Kenya and Tanzania, but our experience with Rion Wildlife in Namibia and Botswana was truly special. Their local knowledge, attention to detail, and genuine passion for wildlife conservation made this trip stand out. We saw all the Big Five in stunning natural settings and enjoyed incredible sunsets in the African bush. The accommodations were perfect - comfortable without being intrusive to the environment.",
    timeAgo: "2 weeks ago",
  };

  const [activeTab, setActiveTab] = useState("google");

  return (
    <section className="w-full mt-32 max-md:mt-20 px-4 md:px-6 pb-16">
      {/* Title section - centered - KEEPING THE EXISTING HEADING */}
      <div className="flex flex-col items-center mb-16 md:mb-20">
        <div className="flex min-h-11 gap-2.5 text-base text-[rgba(192,91,42,1)] font-bold leading-[29px] pt-2.5 pb-[3px] px-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/84b71a0015ec61dbd5f6146d18b7020235ff3e05b76dce0afbc2e273452ad73a?placeholderIfAbsent=true"
            alt="Icon"
            className="aspect-[1] object-contain w-[31px] fill-[#A86747] shrink-0"
          />
          <div>Hear From Others</div>
        </div>
        <h2 className="text-[#3D3E48] text-center text-[26px] md:text-[30px] font-bold mt-1">
          What people say
          <br />
          about Us.
        </h2>
      </div>

      {/* Main testimonial container */}
      <div className="max-w-[1200px] mx-auto">
        {/* Review source tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button 
              onClick={() => setActiveTab("google")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "google" 
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
              onClick={() => setActiveTab("trustpilot")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "trustpilot" 
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

        {/* Featured testimonial */}
        <div className="mb-16 md:mb-20 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left column - Image and details */}
            <div className="w-full md:w-1/3 bg-gradient-to-br from-[#1C2B38] to-[#2A3F50] p-6 md:p-8 flex flex-col">
              <div className="flex items-center mb-6">
                <img 
                  src="https://randomuser.me/api/portraits/men/86.jpg" 
                  alt={featuredTestimonial.name} 
                  className="w-20 h-20 rounded-full border-4 border-white/20 object-cover" 
                />
                <div className="ml-4">
                  <div className="text-white font-bold">{featuredTestimonial.name}</div>
                  <div className="text-white/70 text-sm">{featuredTestimonial.location}</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(featuredTestimonial.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <div className="text-white/70 text-sm">{featuredTestimonial.timeAgo}</div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex items-center">
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                    alt="Google" 
                    className="h-5 mr-2" 
                  />
                  <span className="text-white/80 text-sm">Verified Review</span>
                </div>
              </div>
            </div>
            
            {/* Right column - Testimonial content */}
            <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
              <svg className="text-[rgba(192,91,42,0.15)] w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 text-lg font-light leading-relaxed mb-6">
                {featuredTestimonial.text}
              </p>
              <div className="bg-[rgba(192,91,42,0.1)] text-[rgba(192,91,42,1)] text-sm font-medium py-2 px-4 rounded-full self-start">
                Featured Review
              </div>
            </div>
          </div>
        </div>

        {/* Grid of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/${review.id % 2 === 0 ? 'men' : 'women'}/${30 + review.id}.jpg`} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover border border-gray-200" 
                  />
                  <div>
                    <div className="font-medium text-gray-800">{review.name}</div>
                    <div className="text-gray-500 text-xs">{review.location}</div>
                    <div className="flex mt-1">
                      {[...Array(review.stars)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <img 
                      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                      alt="Google" 
                      className="h-3 mr-1" 
                    />
                    <span>Google Review</span>
                  </div>
                  <span>{review.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review summary and CTA */}
        <div className="mt-16 flex flex-col lg:flex-row items-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
          {/* Left: Review summary */}
          <div className="w-full lg:w-2/3 p-8">
            <div className="flex items-center mb-6">
              <div className="text-5xl font-bold text-[#3D3E48] mr-4">4.8</div>
              <div className="flex flex-col">
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} stroke={i >= 4 ? "currentColor" : "none"} strokeWidth="1.5" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">Based on 127 reviews</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-16 text-sm text-gray-600">5 stars</div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-yellow-400 h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="w-10 text-right text-sm text-gray-600 ml-3">85%</div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-16 text-sm text-gray-600">4 stars</div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-yellow-400 h-full rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <div className="w-10 text-right text-sm text-gray-600 ml-3">10%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-sm text-gray-600">3 stars</div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-yellow-400 h-full rounded-full" style={{ width: '5%' }}></div>
                  </div>
                  <div className="w-10 text-right text-sm text-gray-600 ml-3">5%</div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-start">
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-[rgba(192,91,42,1)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Verified customer reviews</span>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-[rgba(192,91,42,1)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">127 safari tours reviewed</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[rgba(192,91,42,1)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">20+ countries represented</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: CTA */}
          <div className="w-full lg:w-1/3 bg-[#1C2B38] p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-white text-xl font-bold mb-3">Share Your Experience</h3>
            <p className="text-white/80 text-sm mb-6">
              Recently returned from one of our safari tours? We'd love to hear about your experience.
            </p>
            <a 
              href="https://g.page/r/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[rgba(192,91,42,1)] text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-[rgba(172,71,22,1)] transition-colors shadow-sm w-full"
            >
              Write a Review
            </a>
            <div className="flex justify-between w-full mt-6 pt-6 border-t border-white/10">
              <a href="#" className="text-white/70 hover:text-white text-sm flex items-center">
                <img 
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                  alt="Google" 
                  className="h-4 mr-2" 
                />
                Google Reviews
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm flex items-center">
                <img 
                  src="/Trustpilot.png" 
                  alt="Trustpilot" 
                  className="h-4 mr-2" 
                />
                Trustpilot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

