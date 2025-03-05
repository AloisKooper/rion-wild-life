"use client";
import * as React from "react";

interface BookingFormSectionProps {
  icon?: string;
  title: string;
  subtitle: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  icon,
  title,
  subtitle,
}) => {
  return (
    <div className="flex z-0 gap-2.5 justify-center items-center w-full">
      {icon && (
        <img
          src={icon}
          alt=""
          role="presentation"
          className="object-contain shrink-0 self-stretch my-auto w-[22px]"
        />
      )}
      <div className="flex shrink-0 self-stretch my-auto w-px h-12 bg-gray-200" />
      <div className="flex flex-col self-stretch my-auto rounded-none">
        <h2 className="self-start text-base font-extrabold leading-loose text-amber-700">
          {title}
        </h2>
        <p className="text-sm italic font-semibold leading-6 text-gray-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
