"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ImageArray = [
  "/images/ClientLogos/1.png",
  "/images/ClientLogos/2.png",
  "/images/ClientLogos/3.png",
  "/images/ClientLogos/4.png",
  "/images/ClientLogos/5.png",
  "/images/ClientLogos/6.png",
  "/images/ClientLogos/7.png",
  "/images/ClientLogos/8.png",
  "/images/ClientLogos/9.png",
  "/images/ClientLogos/10.png",
  "/images/ClientLogos/11.png",
  "/images/ClientLogos/12.png",
  "/images/ClientLogos/13.png",
  "/images/ClientLogos/14.jpg",
  "/images/ClientLogos/15.png",
  "/images/ClientLogos/16.png",
  "/images/ClientLogos/17.png",
  "/images/ClientLogos/18.png",
];

const ServiceTrustedBy = () => {
  return (
    <div className="md:my-16 my-14 px-[3%]">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="md:text-[3vw] text-[6vw] md:leading-[0.8] leading-8 tracking-tighter uppercase align-middle dark:text-white text-main-dark">
          <span className="bg-white bg-clip-text text-transparent">
            Trusted By
          </span>{" "}
          <span className="text-[#D71EB9] !text-[7vw]">.</span>
        </h2>
        <p className="font-Poppins md:text-[1.1vw] md:leading-6 leading-4 md:mt-6 mt-3 text-xs md:w-[40%] w-[80%] text-gray dark:text-gray-300">
          We're proud to work with innovative companies and brands that trust us
          to bring their vision to life.
        </p>
      </div>
      <div className="flex flex-col md:gap-12 gap-5">
        <Marquee speed={20}>
          {ImageArray.map((item, idx) => (
            <Image
              key={`client-logo-1-${idx}`}
              src={item}
              alt="Client logo"
              width={100}
              height={100}
              className="w-18 h-16 mx-4 bg-dark-light rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 object-contain"
              loading="lazy"
            />
          ))}
        </Marquee>
        <Marquee speed={50} direction="right">
          {ImageArray.map((item, idx) => (
            <Image
              key={`client-logo-2-${idx}`}
              src={item}
              alt="Client logo"
              width={100}
              height={100}
              className="w-18 h-16 mx-4 bg-dark-light rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 object-contain"
              loading="lazy"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServiceTrustedBy;
