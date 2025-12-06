"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const AnniversaryMarquee = () => {
  return (
    <div className="w-full z-[100] fixed top-0 left-0 flex flex-col">
      {/* Dark gray line at the top */}
      <div className="w-full h-[1px] bg-gray-700"></div>
      
      {/* Main marquee section with vibrant magenta background */}
      <div className="w-full bg-[#D71EB9] py-2 md:py-3 min-h-[32px] md:min-h-[40px] flex items-center">
        <Marquee speed={50} pauseOnHover={false} gradient={false}>
          <div className="flex items-center gap-6 md:gap-20">
            <span className="text-white font-bold text-xs md:text-base uppercase tracking-wide whitespace-nowrap">
              CELEBRATING 3 YEARS OF EXCELLENCE!
            </span>
            <span className="text-white font-bold text-xs md:text-base uppercase tracking-wide whitespace-nowrap">
              CELEBRATING 3 YEARS OF EXCELLENCE!
            </span>
            <span className="text-white font-bold text-xs md:text-base uppercase tracking-wide whitespace-nowrap">
              CELEBRATING 3 YEARS OF EXCELLENCE!
            </span>
          </div>
        </Marquee>
      </div>
      
      {/* Dark purple/black band at the bottom */}
      <div className="w-full h-[2px] bg-[#1a0a1f]"></div>
    </div>
  );
};

export default AnniversaryMarquee;
