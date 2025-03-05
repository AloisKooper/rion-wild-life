import React from "react";
import TripDetails from "@/components/TripDetails";
import { Link } from "react-router-dom";
import { Check, Calendar, MapPin, Trophy, Heart, Book, Globe, User, FileText, Star } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/Footer";

const About: React.FC = () => {
  const aboutDetails = [
    {
      icon: "calendar" as const,
      title: "20+ Years Experience",
      description: "Leading safaris across Namibia, Botswana, and Victoria Falls since 2000."
    },
    {
      icon: "users" as const,
      title: "Bilingual Expertise",
      description: "Fluent in English and German for international travelers."
    },
    {
      icon: "bed" as const,
      title: "Premium Accommodations",
      description: "Carefully selected lodges for comfort and authentic experiences."
    }
  ];

  return (
    <div className="bg-white flex flex-col overflow-hidden">
      {/* Hero Section with Image Background and Navigation */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1691894861546-39897d8839b0?q=80&w=2070&auto=format&fit=crop')`, 
            height: "500px"
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white max-w-4xl leading-tight font-display">About Rion Wildlife Safaris</h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Experience the majesty of southern Africa with our expert-guided safari adventures
            </p>
          </div>
        </div>
      </div>
      
      {/* Subpages Cards Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Explore More About Us
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Learn more about our team, our philosophy, and what our guests have to say
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Our Guides Card */}
              <Link to="/about/our-guides" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop" 
                      alt="Our Expert Safari Guides" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <User className="h-5 w-5" />
                        <span className="font-medium">Meet Our Team</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                      Our Expert Safari Guides
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Meet the passionate experts who will lead your African adventure and make your safari experience unforgettable.
                    </p>
                    <div className="flex items-center text-amber-700 font-medium mt-auto">
                      <span>Learn more</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Our Philosophy Card */}
              <Link to="/about/philosophy" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop" 
                      alt="Our Safari Philosophy" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <FileText className="h-5 w-5" />
                        <span className="font-medium">Our Approach</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                      Our Safari Philosophy
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover how conservation, education, and authentic experiences form the foundation of everything we do.
                    </p>
                    <div className="flex items-center text-amber-700 font-medium mt-auto">
                      <span>Learn more</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Testimonials Card */}
              <Link to="/testimonials" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=2070&auto=format&fit=crop" 
                      alt="Guest Testimonials" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <Star className="h-5 w-5" />
                        <span className="font-medium">Guest Reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                      Guest Testimonials
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Hear from travelers who have experienced the magic of Rion Wildlife Safaris across southern Africa.
                    </p>
                    <div className="flex items-center text-amber-700 font-medium mt-auto">
                      <span>Learn more</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50/80 to-white/0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Meet Professor Rion Haraeb
              </h2>
              <div className="w-24 h-1 bg-amber-500 rounded-full mb-8"></div>
              
              <div className="prose prose-lg text-gray-700 max-w-none mb-10">
                <p className="mb-4">
                  <strong>Rion Wildlife Safaris</strong> offers premium safari experiences across Namibia, Botswana, and Victoria Falls, led by Professor Rion Haraeb. With over 20 years of experience, Rion specializes in bilingual (English and German) guided tours, targeting German and American travelers.
                </p>
                <p className="mb-4">
                  What sets our safaris apart is not just the destinations we visit, but the depth of knowledge and personal connection that Professor Rion brings to each journey. As a passionate conservationist and educator, Rion transforms each safari into an immersive learning experience.
                </p>
                <p>
                  All our tours feature premium lodging, expert wildlife viewing, and cultural highlights designed to showcase the best of southern Africa's natural beauty and heritage.
                </p>
              </div>
              
              <Link 
                to="/about/our-guides" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
              >
                Meet Your Guide
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1545111499-a466c40c083e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professor Rion Haraeb"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute bottom-10 right-10 bg-white rounded-xl p-5 shadow-xl max-w-xs z-20">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span className="font-medium text-gray-900">Safari Expert</span>
                </div>
                <p className="text-gray-700">
                  "My mission is to share the wonders of African wildlife while promoting conservation and cultural understanding."
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="font-display font-bold text-amber-800">— Prof. Rion Haraeb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TripDetails details={aboutDetails} />
      
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-amber-700" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Local Expertise
              </h3>
              <p className="text-gray-700">
                Born and raised in Namibia, Rion brings authentic insights and access to locations off the beaten path.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Book className="h-7 w-7 text-amber-700" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Educational Focus
              </h3>
              <p className="text-gray-700">
                Learn about ecosystems, conservation efforts, and wildlife behavior from an experienced professor.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-amber-700" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Personalized Service
              </h3>
              <p className="text-gray-700">
                Small group sizes ensure personalized attention and a safari experience tailored to your interests.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/about/philosophy" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
            >
              Discover Our Philosophy
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529697216570-d90848638658?q=80&w=2069&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-700/30 text-amber-300 text-sm font-medium mb-4">
              Guest Experiences
            </span>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white/95 p-8 rounded-2xl max-w-md">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Sarah & David</h4>
                  <p className="text-amber-700">United States</p>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-500 fill-amber-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Our safari with Professor Rion was the highlight of our trip to Africa. His knowledge of wildlife and passion for conservation made every moment educational and exciting."
              </p>
              <p className="text-gray-500 text-sm">Namibia Highlights Safari, April 2024</p>
            </div>
            
            <div className="bg-white/95 p-8 rounded-2xl max-w-md">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Hans & Greta</h4>
                  <p className="text-amber-700">Germany</p>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-500 fill-amber-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Rion's ability to speak German made our safari experience so much more comfortable. His expertise in wildlife and local culture provided insights we wouldn't have gained otherwise."
              </p>
              <p className="text-gray-500 text-sm">Big Five Safari, September 2023</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
            >
              View All Testimonials
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Conservation Through Education
              </h2>
              <div className="w-24 h-1 bg-amber-500 rounded-full mb-8"></div>
              
              <div className="prose prose-lg text-gray-700 max-w-none mb-10">
                <p>
                  At Rion Wildlife Safaris, we believe that education is key to conservation. Every safari is an opportunity to learn about the delicate ecosystems of southern Africa and the importance of preserving them for future generations.
                </p>
                <p>
                  A portion of all safari proceeds goes directly to local conservation efforts and community development programs that support wildlife protection and sustainable tourism in the region.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Supporting Local Communities</h4>
                    <p className="text-gray-700">We work closely with local villages and conservation groups to ensure sustainable tourism practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Wildlife Conservation</h4>
                    <p className="text-gray-700">We contribute to anti-poaching efforts and habitat preservation programs throughout Namibia and Botswana.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Eco-Friendly Practices</h4>
                    <p className="text-gray-700">Our tours minimize environmental impact while maximizing educational and conservation value.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1999&auto=format&fit=crop" 
                  alt="Wildlife conservation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1603207112711-a5f97b67e357?q=80&w=2036&auto=format&fit=crop" 
                  alt="Local community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop" 
                  alt="Education programs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1490716961549-5dbd18f53101?q=80&w=2069&auto=format&fit=crop" 
                  alt="Safari guides"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About; 