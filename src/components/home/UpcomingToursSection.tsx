import React from "react";
import TourCard from "./TourCard";

const UpcomingToursSection: React.FC = () => {
  const tours = [
    {
      id: 1,
      imageSrc: "/tour-images/namibia-highlights.jpeg",
      location: "Namibia",
      title: "Namibia Highlights Safari",
      price: "€3,600",
      duration: "14 days"
    },
    {
      id: 2,
      imageSrc: "/tour-images/namwild.jpeg",
      location: "Namibia",
      title: "Namwild Safari",
      price: "€1,900",
      duration: "9 days"
    },
    {
      id: 3,
      imageSrc: "/tour-images/victoria-falls.jpeg",
      location: "Namibia, Botswana, Zimbabwe",
      title: "Victoria Falls Adventure",
      price: "€4,500",
      duration: "18 days"
    },
  ];

  return (
    <section className="w-full mt-[81px] px-4 sm:px-6 md:px-8 py-[5px] max-md:mt-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-base text-[rgba(192,91,42,1)] font-bold leading-[29px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/6c0d89f877af1dcc6732f857c943f6e250e8b1d1986a6a99370e80a012207347?placeholderIfAbsent=true"
                alt="Icon"
                className="aspect-[1] object-contain w-[31px] fill-[#A86747] shrink-0"
              />
              <span>Lets Explore Together</span>
            </div>
            <h2 className="text-[#3D3E48] text-[28px] max-md:text-[24px] font-normal leading-[1.2] mt-1">
              Upcoming Tours
            </h2>
          </div>
          
          <a href="#" className="text-[#C05B2A] text-base font-bold leading-[29px] flex items-center gap-2">
            See All
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C05B2A]">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="w-full px-2">
              <TourCard
                imageSrc={tour.imageSrc}
                location={tour.location}
                title={tour.title}
                price={tour.price}
                duration={tour.duration}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingToursSection;
