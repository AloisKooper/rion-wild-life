import React from "react";

interface ActivityCardProps {
  imageSrc: string;
  title: string;
  price: string;
  days: number;
  iconSrc: string;
  description?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  imageSrc,
  title,
  price,
  days,
  iconSrc,
  description = "Experience the beauty of Southern Africa with Professor Rion Haraeb", // Default description
}) => {
  return (
    <div className="bg-white shadow-[1px_2px_12px_1px_rgba(0,0,0,0.25)] flex w-full flex-col items-stretch pt-2.5 pb-5 px-2.5 rounded-[10px] max-md:mt-5 hover:shadow-[1px_2px_20px_1px_rgba(0,0,0,0.35)] transition-shadow duration-300">
      <div className="w-full aspect-[1.58] rounded-[10px] overflow-hidden relative">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-12"></div>
      </div>
      <h3 className="text-[#3D3E48] text-[19px] max-md:text-[17px] font-bold leading-tight mt-5">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {description}
      </p>
      <div className="flex w-full items-center justify-between flex-wrap gap-2 font-normal mt-[22px] max-md:mt-3">
        <div className="text-[#C05B2A] text-base max-md:text-sm leading-normal font-semibold">
          {price}
        </div>
        <div className="flex items-center gap-1.5 text-sm max-md:text-xs text-[#3D3E48]">
          <img
            src={iconSrc}
            alt="Calendar icon"
            className="aspect-[1] object-contain w-5 max-md:w-4 shrink-0"
          />
          <span>{days} {days === 1 ? 'day' : 'days'}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
