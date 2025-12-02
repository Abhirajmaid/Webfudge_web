"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const AnniversaryMarquee = () => {
  return (
    <div className="w-full bg-primary py-2 md:py-3 z-[100] fixed top-0 left-0 h-[32px] md:h-[40px] flex items-center">
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
  );
};

export default AnniversaryMarquee;
