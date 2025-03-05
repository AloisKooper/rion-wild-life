import React from "react";

interface TourCardProps {
  imageSrc: string;
  location: string;
  title: string;
  price: string;
  duration?: string;
}

const TourCard: React.FC<TourCardProps> = ({
  imageSrc,
  location,
  title,
  price,
  duration,
}) => {
  return (
    <div className="bg-[rgba(196,196,196,1)] shadow-[9px_9px_38px_rgba(0,0,0,0.05)] w-full rounded-[23px] max-md:mt-6">
      <div className="w-full aspect-[0.91] rounded-t-[23px] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="bg-white flex w-full flex-col pl-[17px] pr-10 py-[17px] rounded-b-[23px] max-md:pl-4 max-md:pr-4">
        <div className="text-[rgba(148,148,148,1)] text-[11px] font-medium leading-none">
          {location}
        </div>
        <div className="text-[#3D3E48] text-[19px] max-md:text-[17px] font-bold leading-tight mt-[11px]">
          {title}
          {duration && (
            <span className="text-[rgba(192,91,42,1)] text-[15px] font-medium ml-1">
              {duration}
            </span>
          )}
        </div>
        <div className="flex pt-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star}
                xmlns="http://www.w3.org/2000/svg" 
                width="19" 
                height="19" 
                viewBox="0 0 24 24" 
                fill="#FFB800" 
                className="max-md:w-[15px]"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[15px] max-md:text-[13px] text-[rgba(67,67,67,1)] font-medium leading-none mt-[19px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/ae7b2ce95c3f4a88129d2936675cbc24b5721870766a9059df77e2ef61ffad79?placeholderIfAbsent=true"
            alt="Price icon"
            className="aspect-[0.94] object-contain w-[17px] max-md:w-[15px] shrink-0"
          />
          <div className="basis-auto">
            from <span style={{ fontWeight: 700 }}>{price}</span> per person
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
