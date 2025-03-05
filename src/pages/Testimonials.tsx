import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/Footer";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  tour: string;
  date: string;
  content: string;
  rating: number;
  image?: string;
}

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(1);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah & David Wilson",
      location: "United States",
      tour: "Namibia Highlights Safari",
      date: "April 2024",
      content: "Our safari with Professor Rion was the highlight of our trip to Africa. His knowledge of wildlife and passion for conservation made every moment educational and exciting. We saw incredible animals including lions, elephants, and rhinos, but what made it special was learning the stories behind these magnificent creatures. The accommodations were excellent and the attention to detail was impressive. We're already planning our next safari!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Hans & Greta Müller",
      location: "Germany",
      tour: "Big Five Safari",
      date: "September 2023",
      content: "Rion's ability to speak German made our safari experience so much more comfortable. His expertise in wildlife and local culture provided insights we wouldn't have gained otherwise. The lodges were excellent, and the wildlife sightings exceeded our expectations. We especially appreciated the small group size which allowed for personalized attention and flexibility in our itinerary.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Michael Johnson",
      location: "Canada",
      tour: "Namwild Safari",
      date: "January 2024",
      content: "As a wildlife photographer, I was looking for a guide who could get me in the right position for great shots, and Rion delivered beyond my expectations. His tracking skills are exceptional, and he knows exactly where to position the vehicle for optimal lighting. I captured some of my best wildlife photos ever on this trip. The Namwild Safari is perfect for photography enthusiasts!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Emma & James Taylor",
      location: "Australia",
      tour: "Namibia, Botswana & Victoria Falls",
      date: "October 2023",
      content: "The multi-country safari exceeded our expectations in every way. Rion's extensive knowledge of the different ecosystems and wildlife in each location made for an incredible learning experience. The Victoria Falls portion was breathtaking, and the Okavango Delta provided some of our most memorable wildlife encounters. Well worth every penny!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1523286877159-d9636545890c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Sophia & Thomas Schmidt",
      location: "Switzerland",
      tour: "Walvisbay Excursions",
      date: "March 2024",
      content: "Even though we only had a day for the Walvisbay Excursion, Rion made it unforgettable. His expertise in desert ecosystems and photography tips helped us capture the stunning landscapes of the pink lakes and massive sand dunes. The Welwitschia plants were fascinating, and Rion's explanation of their unique adaptation to the desert environment was eye-opening.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=2076&auto=format&fit=crop"
    },
  ];
  
  const handleNext = () => {
    setActiveTestimonial(prev => (prev === testimonials.length ? 1 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveTestimonial(prev => (prev === 1 ? testimonials.length : prev - 1));
  };
  
  return (
    <div className="bg-white flex flex-col overflow-hidden">
      {/* Hero Section with Image Background and Navigation */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop')`, 
            height: "500px"
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white max-w-4xl leading-tight font-display">Guest Testimonials</h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Hear from travelers who have experienced the magic of Rion Wildlife Safaris
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50/80 to-white/0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              Featured Testimonial
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-700 text-lg">
              Don't just take our word for it – hear from the travelers who have experienced the wonder of African safaris with Professor Rion Haraeb
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`transition-opacity duration-500 ${testimonial.id === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-12 lg:order-2">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-amber-700">{testimonial.location}</p>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative mb-8">
                        <Quote className="h-10 w-10 text-amber-200 absolute -top-4 -left-2" />
                        <p className="text-gray-700 text-lg italic relative z-10 pl-6">
                          {testimonial.content}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-800 font-medium">{testimonial.tour}</p>
                          <p className="text-gray-500 text-sm">{testimonial.date}</p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button 
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition-colors"
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft className="h-5 w-5 text-amber-700" />
                          </button>
                          <button 
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition-colors"
                            aria-label="Next testimonial"
                          >
                            <ChevronRight className="h-5 w-5 text-amber-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:order-1 h-[300px] lg:h-auto">
                      <img 
                        src={testimonial.image || "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"} 
                        alt={`${testimonial.name} on safari`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((testimonial) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(testimonial.id)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${testimonial.id === activeTestimonial ? 'bg-amber-700' : 'bg-amber-200'}`}
                    aria-label={`Go to testimonial ${testimonial.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              More Reviews
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Safari Experiences
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={testimonial.image || "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"} 
                    alt={`${testimonial.name} on safari`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-amber-700 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 line-clamp-4 mb-4 italic">
                    "{testimonial.content.substring(0, 120)}..."
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-gray-800">{testimonial.tour}</span>
                      <span className="text-gray-500">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 relative bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547970527-dc8c28ed1d53?q=80&w=2071&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Create Your Own Safari Story?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join Professor Rion for an unforgettable safari experience across the most breathtaking landscapes of southern Africa
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors text-lg"
            >
              Book Your Safari
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials; 