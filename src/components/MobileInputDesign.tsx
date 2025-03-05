"use client";
import * as React from "react";
import { useState } from "react";

export interface MobileInputDesignProps {
  className?: string;
}

const MobileInputDesign: React.FC<MobileInputDesignProps> = ({
  className = "",
}) => {
  // State for dropdowns
  const [locationOpen, setLocationOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  
  // Options for dropdowns
  const locations = ["Namibia", "Botswana", "Etosha National Park", "Okavango Delta"];
  const guestsOptions = ["1 Person", "2 People", "3 People", "4 People", "5+ People"];
  
  return (
    <div className={`w-full max-w-[320px] md:hidden rounded-xl bg-white shadow-[0px_10px_20px_rgba(123,188,176,0.4)] ${className}`}>
      <div className="flex flex-col p-6 gap-5">
        {/* Location Section */}
        <div className="relative">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => {
              setLocationOpen(!locationOpen);
              setGuestsOpen(false);
              setDateOpen(false);
            }}
          >
            <div className="text-amber-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-amber-700 font-bold">Location</h2>
              <p className="text-gray-500 italic text-sm">Search For A Destination</p>
            </div>
            <div className="text-amber-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${locationOpen ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>
          
          {/* Location Dropdown */}
          {locationOpen && (
            <div className="absolute z-10 left-0 right-0 mt-1 bg-white rounded shadow-lg border border-gray-100">
              <ul className="py-1">
                {locations.map((location, index) => (
                  <li key={index} className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer">{location}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Guests Section */}
        <div className="relative">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => {
              setGuestsOpen(!guestsOpen);
              setLocationOpen(false);
              setDateOpen(false);
            }}
          >
            <div className="text-amber-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-amber-700 font-bold">Guests</h2>
              <p className="text-gray-500 italic text-sm">How many Guests?</p>
            </div>
            <div className="text-amber-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${guestsOpen ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>
          
          {/* Guests Dropdown */}
          {guestsOpen && (
            <div className="absolute z-10 left-0 right-0 mt-1 bg-white rounded shadow-lg border border-gray-100">
              <ul className="py-1">
                {guestsOptions.map((option, index) => (
                  <li key={index} className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer">{option}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Date Section */}
        <div className="relative">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => {
              setDateOpen(!dateOpen);
              setLocationOpen(false);
              setGuestsOpen(false);
            }}
          >
            <div className="text-amber-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-amber-700 font-bold">Date</h2>
              <p className="text-gray-500 italic text-sm">Pick a date</p>
            </div>
            <div className="text-amber-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${dateOpen ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>
          
          {/* Simple Date Selector */}
          {dateOpen && (
            <div className="absolute z-10 left-0 right-0 mt-1 p-2 bg-white rounded shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="font-medium text-amber-700 mb-1">Select a Month</div>
                <div className="grid grid-cols-3 gap-1">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => (
                    <div key={i} className="text-sm p-2 hover:bg-gray-100 cursor-pointer rounded">{month}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Book Trip Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-amber-700 text-white font-extrabold py-3.5 rounded-full shadow-[0px_6px_15px_rgba(192,91,42,0.5)] hover:bg-amber-800 transition-colors"
            aria-label="Book Trip"
          >
            BOOK TRIP
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileInputDesign;
