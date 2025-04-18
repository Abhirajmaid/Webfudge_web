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
          {ImageArray.map((item) => {
            return (
              <Image
                src={item}
                width={200}
                height={250}
                className="md:min-w-[150px] md:min-h-[150px] min-h-[100px] w-[100px] md:mr-[50px] mr-[20px] p-4 rounded-md bg-white object-contain !opacity-100"
              />
            );
          })}
        </Marquee>
        <Marquee speed={50} direction="right">
          {ImageArray.map((item) => {
            return (
              <Image
                src={item}
                width={220}
                height={250}
                className="md:min-w-[150px] md:min-h-[150px] min-h-[100px] w-[100px] md:mr-[50px] mr-[20px] !opacity-100 p-4 rounded-md bg-white object-contain"
              />
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default OurClients;
