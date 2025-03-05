import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#295943] text-white">
      {/* Top Section with Safari Grass Silhouette */}
      <div className="relative overflow-hidden">
        <div className="absolute bottom-0 w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/a0794a32f1efbbde66e06ab1785dedd0cb1c330fef8008ad74b55412a0cf1345?placeholderIfAbsent=true"
            alt="Safari grass silhouette"
            className="w-full object-cover h-20 md:h-24"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mr-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/b2ba189e696047c84e80c17d96ea7704ee1c52d85df7b6cc00d8d352ede7b7a6?placeholderIfAbsent=true"
                  alt="Safari logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h2 className="text-xl font-bold">RION WILDLIFE SAFARIS</h2>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Led by Professor Rion Haraeb with over 20 years of experience, we specialize in premium safari experiences across Namibia, Botswana, and Victoria Falls. Enjoy bilingual English and German guided tours featuring private lodging, wildlife viewing, and unforgettable cultural experiences.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Discover
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Special Deals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Safari Services */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-b border-white/20 pb-2">Safari Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Namibia Highlights Safari
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Big Five Safari
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Namwild Safari
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Victoria Falls Adventure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgba(192,91,42,1)] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Walvisbay Excursions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-b border-white/20 pb-2">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-[rgba(192,91,42,1)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="block">Windhoek</span>
                  <span className="block">Namibia</span>
                </div>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[rgba(192,91,42,1)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>532-345</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[rgba(192,91,42,1)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>rion@wildlifesafaris.com</span>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 py-2 px-3 rounded-l-lg text-sm w-full focus:outline-none focus:ring-1 focus:ring-[rgba(192,91,42,1)]"
                />
                <button className="bg-[rgba(192,91,42,1)] hover:bg-[rgba(172,81,32,1)] text-white rounded-r-lg px-3 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[rgba(192,91,42,1)] font-bold text-sm">
            2025 - ALL RIGHTS RESERVED, RION WILDLIFE SAFARIS
          </p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
