import React from 'react';
import { FaMapMarkerAlt, FaClock, FaTag, FaBed, FaCheck } from 'react-icons/fa';
import Navbar from '../common/Navbar';
import Footer from '../home/Footer';

// Interface for the Tour data
export interface TourData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: { title: string; description: string }[];
  itinerary: { day: number; title: string; description: string }[];
  duration: number;
  price: number;
  image: string;
  location: string;
}

interface TourDetailProps {
  tourData: TourData;
}

const TourDetail: React.FC<TourDetailProps> = ({ tourData }) => {
  const {
    title,
    subtitle,
    description,
    highlights,
    itinerary,
    duration,
    price,
    image,
    location
  } = tourData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover brightness-75"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white max-w-3xl drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Tour Info Header */}
      <div className="bg-amber-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-xl" />
              <span className="text-lg font-semibold">{location}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-xl" />
              <span className="text-lg font-semibold">{duration} days</span>
            </div>
            <div className="flex items-center">
              <FaBed className="mr-2 text-xl" />
              <span className="text-lg font-semibold">Various Accommodations</span>
            </div>
            <div className="flex items-center">
              <FaTag className="mr-2 text-xl" />
              <span className="text-lg font-semibold">€{price} per person</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Tour Overview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-8">
                {description}
              </p>
              
              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-amber-800">Tour Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">{highlight.title}</h4>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Tour Details</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{duration} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium">€{price} per person</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Group Size:</span>
                  <span className="font-medium">2-12 people</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 w-full">
                  Book This Tour
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Itinerary Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Detailed Itinerary</h2>
          
          <div className="space-y-8">
            {itinerary.map((day, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-amber-600 text-white p-4">
                  <h3 className="text-xl font-semibold">
                    Day {day.day}: {day.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Booking CTA */}
        <section className="mb-16">
          <div className="bg-amber-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready for Your African Adventure?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Contact us today to book this tour or to customize it to your specific preferences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Book Now
              </button>
              <button className="border border-amber-600 text-amber-600 font-bold py-3 px-8 rounded-full hover:bg-amber-50 transition duration-300">
                Request Custom Tour
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TourDetail; 