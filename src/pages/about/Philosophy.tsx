import React from "react";
import { Link } from "react-router-dom";
import { Check, Heart, Leaf, Camera, Users, Shield } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/Footer";

const Philosophy: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden">
      {/* Hero Section with Image Background and Navigation */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop')`, 
            height: "500px"
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white max-w-4xl leading-tight font-display">Our Safari Philosophy</h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Conservation, education, and unforgettable experiences at the heart of everything we do
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50/80 to-white/0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              More Than Just Safari Tours
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                At Rion Wildlife Safaris, we believe that a great safari goes far beyond simply viewing animals. Our philosophy is built on three core pillars that guide every experience we offer: <strong>conservation through education</strong>, <strong>authentic cultural connections</strong>, and <strong>responsible luxury</strong>.
              </p>
              <p>
                Led by Professor Rion Haraeb, our safaris blend breathtaking wildlife encounters with deep educational insights, comfortable accommodations, and meaningful cultural experiences that benefit local communities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Conservation First
              </h3>
              <p className="text-gray-700 mb-6">
                We believe that sustainable tourism is a powerful tool for conservation. A portion of all safari proceeds directly supports local conservation initiatives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Partnering with wildlife protection programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Minimizing environmental footprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Educating guests on conservation challenges</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Cultural Respect
              </h3>
              <p className="text-gray-700 mb-6">
                We connect travelers with local communities in ways that preserve cultural heritage and provide economic benefits to these communities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Authentic cultural encounters</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Supporting local artisans and businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Respecting and preserving traditions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Personalized Experience
              </h3>
              <p className="text-gray-700 mb-6">
                We believe that smaller groups and personalized attention create more meaningful connections with the landscapes and wildlife we visit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Small group sizes for intimate experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Tailored itineraries based on interests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">Luxury accommodations with local character</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
                Our Approach
              </span>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Education Through Experience
              </h2>
              <div className="w-24 h-1 bg-amber-500 rounded-full mb-8"></div>
              
              <div className="prose prose-lg text-gray-700 max-w-none mb-10">
                <p>
                  As a professor and lifelong student of African wildlife, Rion believes that the most powerful conservation tool is education. On our safaris, learning happens naturally through immersive experiences and expert narration.
                </p>
                <p>
                  Whether tracking lions across the savanna or watching elephants at a waterhole, our guests gain insights into animal behavior, ecosystem dynamics, and conservation challenges facing these magnificent creatures.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Camera className="h-6 w-6 text-amber-700" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-gray-900">Photography Guidance</h4>
                  </div>
                  <p className="text-gray-700">
                    Learn how to capture stunning wildlife photos with expert tips from your guide, regardless of your camera equipment or experience level.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-amber-700" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-gray-900">Conservation Insights</h4>
                  </div>
                  <p className="text-gray-700">
                    Understand the complex challenges facing African wildlife and learn about innovative conservation approaches making a difference on the ground.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516246913683-69c106d72997?q=80&w=2070&auto=format&fit=crop" 
                    alt="Educational safari experience"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-2xl overflow-hidden shadow-xl z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1593467699245-08b613bef43b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Safari guide teaching"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-44 h-44 rounded-full overflow-hidden shadow-xl z-20 border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1574984755794-8b8d209b3e84?q=80&w=2069&auto=format&fit=crop" 
                    alt="Wildlife closeup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518369698151-de4de3172190?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-700/30 text-amber-300 text-sm font-medium mb-4">
              Our Promise
            </span>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              The Rion Safari Difference
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl text-white/90 mb-12">
              When you travel with us, we promise not just to show you Africa, but to help you feel it, understand it, and connect with it in ways that will transform your perspective long after you return home.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Expert Knowledge
                </h3>
                <p className="text-white/80">
                  Professor Rion brings academic expertise and lifelong experience to every safari.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Bilingual Guidance
                </h3>
                <p className="text-white/80">
                  Fluent English and German ensures nothing is lost in translation.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Authentic Access
                </h3>
                <p className="text-white/80">
                  Local connections open doors to experiences most travelers never discover.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Premium Comfort
                </h3>
                <p className="text-white/80">
                  Carefully selected accommodations blend luxury with authentic local character.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Conservation Focus
                </h3>
                <p className="text-white/80">
                  Every safari supports local conservation efforts and sustainable tourism.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Personalized Experience
                </h3>
                <p className="text-white/80">
                  Small groups allow for flexibility and tailored experiences based on your interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              Join Us
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Experience Our Philosophy in Action
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-10">
              The best way to understand our philosophy is to experience it firsthand. Join Professor Rion on a safari journey that will change the way you see the natural world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/tours"
                className="px-8 py-4 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
              >
                Browse Our Safaris
              </Link>
              <Link 
                to="/about"
                className="px-8 py-4 border-2 border-amber-700 text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Philosophy; 