import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaTag, FaArrowRight } from 'react-icons/fa';
import { getAllTours } from '../../lib/getTourData';
import { TourData } from '../../components/tours/TourDetail';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/home/Footer';
import { Helmet } from 'react-helmet-async';

interface ToursPageProps {
  tours: TourData[];
}

const Tours = () => {
  const [tours, setTours] = React.useState<TourData[]>([]);
  
  React.useEffect(() => {
    const loadTours = async () => {
      const toursData = await getAllTours();
      setTours(toursData);
    };
    
    loadTours();
  }, []);

  const getTourRoute = (tourId: string) => {
    return `/tours/${tourId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Our Tours | Rion Wildlife Safaris</title>
        <meta name="description" content="Explore our range of premium safari experiences across Namibia, Botswana, and Victoria Falls led by Professor Rion Haraeb." />
      </Helmet>
      
      <Navbar />
      
      <div className="relative h-[40vh] w-full">
        <img
          src="/images/tours/tours-hero.jpg"
          alt="Rion Wildlife Safaris Tours"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className="brightness-75 absolute inset-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Our Safari Tours
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl drop-shadow-lg">
            Embark on an unforgettable African adventure with Professor Rion Haraeb
          </p>
        </div>
      </div>
      
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-60 w-full">
                <img
                  src={tour.image || '/placeholder.svg'}
                  alt={tour.title}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  className="brightness-90 absolute inset-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{tour.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{tour.subtitle || tour.description.substring(0, 100) + '...'}</p>
                
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2 text-amber-600" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaClock className="mr-2 text-amber-600" />
                    <span>{tour.duration} {tour.duration === 1 ? 'day' : 'days'}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaTag className="mr-2 text-amber-600" />
                    <span className="font-semibold">€{tour.price} per person</span>
                  </div>
                </div>
                
                <Link to={getTourRoute(tour.id)} className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded flex justify-center items-center transition duration-300">
                  <span className="mr-2">View Tour</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Professor Rion Haraeb can create custom safari experiences tailored to your interests, timeframe, and budget.
          </p>
          <Link to="/contact" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Contact Us for Custom Tours
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tours; 