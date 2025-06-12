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
];

const CompanyImages = () => {
  return <Image></Image>;
};

const OurClients = () => {
  return (
    <div className="md:mt-[100px] mt-[60px] md:px-0 px-[3%]">
      <h2 className="md:text-[5vw] text-[8vw] tracking-tighter uppercase align-middle text-center mb-5">
        Our Clients <span className="text-[#D71EB9] !text-[8vw]">.</span>
      </h2>
      <div className="flex flex-col md:gap-12 gap-5">
        <Marquee speed={20}>
          {ImageArray.map((item, idx) => (
            <Image
              key={`client-logo-1-${idx}`}
              src={item}
              alt="Client logo"
              width={100}
              height={100}
              className="w-28 h-24 mx-4 bg-dark-light rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 object-contain"
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
              className="w-28 h-24 mx-4 bg-dark-light rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 object-contain"
              loading="lazy"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default OurClients;
