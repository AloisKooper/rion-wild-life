"use client";
import * as React from "react";

const InputDesign: React.FC = () => {
  return (
    <form
      className="flex relative flex-col items-center px-7 py-3.5 max-w-[298px]"
      role="form"
      aria-label="Trip Booking Form"
    >
      <div className="flex absolute right-0 bottom-0 z-0 flex-col self-start rounded-xl h-[300px] w-[298px]">
        <div className="flex w-full bg-white rounded-xl aspect-square min-h-[300px] shadow-[0px_10px_30px_rgba(123,188,176,0.5)]" />
      </div>

      <section
        className="flex z-0 gap-2.5 items-center w-full"
        role="group"
        aria-label="Location Selection"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/a3a0ae78c9f8388574029d30da45215b1a2e7d9b0b24928a042982dc2c6065f4?placeholderIfAbsent=true"
          alt=""
          role="presentation"
          className="object-contain shrink-0 self-stretch my-auto aspect-[0.81] w-[13px]"
        />
        <div
          className="flex shrink-0 self-stretch my-auto w-px h-12 bg-gray-200"
          role="separator"
        />
        <div className="flex flex-col self-stretch my-auto rounded-none w-[164px]">
          <h2 className="self-start text-base font-extrabold leading-loose text-amber-700">
            Location
          </h2>
          <p className="text-sm italic font-semibold leading-6 text-gray-500">
            Search For A Destination
          </p>
        </div>
      </section>

      <section
        className="flex z-0 gap-2.5 items-center mt-6"
        role="group"
        aria-label="Guest Selection"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/2196985dfb8374fe4d1cf424bc729b83627985d0264a1fadec7e776a06879f43?placeholderIfAbsent=true"
          alt=""
          role="presentation"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.38] w-[22px]"
        />
        <div
          className="flex shrink-0 self-stretch my-auto w-px h-12 bg-gray-200"
          role="separator"
        />
        <div className="flex flex-col self-stretch my-auto rounded-none w-[127px]">
          <h2 className="z-10 self-start text-base font-extrabold leading-loose text-amber-700">
            Guests
          </h2>
          <p className="text-sm italic font-semibold leading-6 text-gray-500">
            How many Guests?
          </p>
        </div>
      </section>

      <section
        className="flex z-0 gap-2.5 items-center mt-6"
        role="group"
        aria-label="Date Selection"
      >
        <div
          className="flex shrink-0 self-stretch my-auto w-px h-12 bg-gray-200"
          role="separator"
        />
        <div className="flex flex-col self-stretch my-auto rounded-none w-[73px]">
          <h2 className="z-10 self-start text-base font-extrabold leading-loose text-amber-700">
            Date
          </h2>
          <p className="text-sm italic font-semibold leading-6 text-gray-500">
            Pick a date
          </p>
        </div>
      </section>

      <button
        className="z-0 gap-2.5 self-stretch px-8 py-4 mt-6 w-full text-base font-extrabold leading-none text-center text-white bg-amber-700 min-h-[54px] rounded-[40px] shadow-[0px_8px_20px_rgba(192,91,42,1)] hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 transition-colors"
        type="submit"
        aria-label="Book Trip"
      >
        BOOK TRIP
      </button>
    </form>
  );
};

export default InputDesign;
