"use client";
import * as React from "react";

export const BookingButton: React.FC = () => {
  return (
    <button
      className="z-0 gap-2.5 self-stretch px-8 py-4 w-full text-base font-extrabold leading-none text-center text-white bg-amber-700 min-h-[54px] rounded-[40px] shadow-[0px_8px_20px_rgba(192,91,42,1)] hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
      aria-label="Book Trip"
    >
      BOOK TRIP
    </button>
  );
};
