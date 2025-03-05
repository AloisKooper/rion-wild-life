import React from "react";
import { GuideCard } from "@/components/GuideCard";
import { Check, Star, MapPin, Globe, Book } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/Footer";

const OurGuides: React.FC = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white max-w-4xl leading-tight font-display">Our Expert Safari Guides</h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Meet the passionate experts who will lead your African adventure
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50/80 to-white/0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              Lead Guide
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Professor Rion Haraeb
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-700 text-lg">
              Founder of Rion Wildlife Safaris and your personal guide to the wonders of southern Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-amber-50 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Expertise & Qualifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">20+ Years Experience</h4>
                      <p className="text-gray-700">Leading safari expeditions since 2000 across the region</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Multilingual Guide</h4>
                      <p className="text-gray-700">Fluent in English and German, making your experience comfortable</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Book className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Academic Background</h4>
                      <p className="text-gray-700">Professor with extensive wildlife and conservation knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Local Knowledge</h4>
                      <p className="text-gray-700">Intimate understanding of Namibian wildlife, landscapes and cultures</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Personal Message
                </h3>
                <p className="text-gray-700 italic mb-6">
                  "I founded Rion Wildlife Safaris with a vision to share the natural wonders of my homeland with travelers from around the world. Each safari is more than just a tour – it's an educational journey into the heart of Africa's most pristine ecosystems.
                  <br /><br />
                  As your guide, I promise not only to show you incredible wildlife, but to help you understand the delicate balance of our ecosystems and the importance of conservation efforts in preserving these treasures for generations to come."
                </p>
                <div className="flex justify-end">
                  <span className="font-display font-bold text-amber-800">— Professor Rion Haraeb</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop" 
                    alt="Professor Rion Haraeb"
                    className="w-full h-[500px] object-cover object-center"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                      Wildlife Expertise
                    </h3>
                    <p className="text-gray-700 mb-6">
                      With decades spent observing and studying the diverse wildlife of southern Africa, Rion knows where to find elusive species and can explain their behaviors in fascinating detail.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Big Five</span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Bird Watching</span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Conservation</span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Tracking</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                      Tour Specialties
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Rion leads all of our premium safari experiences, with particular expertise in the Namibian desert landscapes and Etosha National Park wildlife encounters.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Namibia Highlights</span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Big Five Safari</span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Sossusvlei</span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Victoria Falls</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              Experience & Education
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Rion's Journey
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-200"></div>
            
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                      Founding Rion Wildlife Safaris
                    </h3>
                    <p className="text-amber-700 font-medium mb-4">2005 - Present</p>
                    <p className="text-gray-700">
                      After years of working with larger safari companies, Rion established his own boutique safari company focused on educational, conservation-minded tours with premium accommodations and personalized service.
                    </p>
                  </div>
                </div>
                
                <div className="relative md:order-2">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center z-10 relative mx-auto">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="md:w-1/2 order-1 md:order-3">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-100 mx-auto md:mx-0">
                    <img 
                      src="https://images.unsplash.com/photo-1532883130016-f3d311140aa8?q=80&w=2070&auto=format&fit=crop" 
                      alt="Founding the company"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/2 order-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-100 mx-auto md:ml-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1447522200268-a0378dac3fba?q=80&w=2070&auto=format&fit=crop" 
                      alt="Lead Safari Guide"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="relative order-2">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center z-10 relative mx-auto">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="md:w-1/2 md:text-left order-3">
                  <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                      Lead Safari Guide
                    </h3>
                    <p className="text-amber-700 font-medium mb-4">2000 - 2005</p>
                    <p className="text-gray-700">
                      Served as lead guide for premium wildlife safaris throughout Namibia and Botswana, developing expertise in tracking and wildlife photography while building relationships with lodge owners and conservation groups.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                      Wildlife Conservation Work
                    </h3>
                    <p className="text-amber-700 font-medium mb-4">1995 - 2000</p>
                    <p className="text-gray-700">
                      Participated in wildlife conservation projects focused on desert elephants and black rhinos in Namibia, developing deep understanding of these iconic species and their habitats.
                    </p>
                  </div>
                </div>
                
                <div className="relative md:order-2">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center z-10 relative mx-auto">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="md:w-1/2 order-1 md:order-3">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-100 mx-auto md:mx-0">
                    <img 
                      src="https://images.unsplash.com/photo-1619948543233-cfd3196d38a6?q=80&w=2070&auto=format&fit=crop" 
                      alt="Conservation work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              Book Your Safari
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Ready for an Unforgettable Journey?
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
              Join Professor Rion on an adventure of a lifetime through the breathtaking landscapes and diverse wildlife of southern Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/tours"
                className="px-8 py-4 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
              >
                Explore Our Tours
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 border-2 border-amber-700 text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurGuides; 