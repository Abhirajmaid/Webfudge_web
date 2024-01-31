"use client";

import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Model from "./Model";
import Link from "next/link";

const Footer = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOnClose = () => {
    setShowVideo(false);
  };
  return (
    <>
      <div className="mt-[120px] px-[3%] md:px-[6%]">
        <div className="relative w-full flex justify-center">
          <div className="bg-primary h-[400px] w-full rounded-b-[120px] py-11 flex flex-col items-center gap-[40px]">
            <div className="flex justify-center gap-[100px] w-full items-center">
              <hr className="h-[2px] w-[30%] bg-gray" />
              <Image
                src="/images/star.png"
                width={27}
                height={27}
                alt="Webfudge star"
              />
              <Image
                src="/images/star.png"
                width={27}
                height={27}
                alt="Webfudge star"
              />
              <Image
                src="/images/star.png"
                width={27}
                height={27}
                alt="Webfudge star"
              />
              <hr className="h-[2px] w-[30%] bg-gray" />
            </div>
            <div className="flex justify-center item-center">
              <h1 className="!text-[4vw] dark:text-white leading-[80px] tracking-tight p-0 uppercase text-center ">
                Let's Discuss <br /> Your Ideas
              </h1>
            </div>
            <div>
              <button
                className=" font-[BelfastMedium] text-sm !rounded-3xl font-bold md:text-inherit btn md:w-fit bg-white shadow-md dark:bg-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white !px-7 !py-4 text-[1.2vw]"
                onClick={() => setShowVideo(true)}
              >
                let's Talk on quote!
              </button>
            </div>
          </div>
          <div className="w-[120%] absolute -bottom-[160px]">
            <Marquee>
              <div className=" flex justify-between py-[0.2rem] text-[6vw] items-center  dark:text-[#d4c5e199] text-gray/50 ">
                <div className="flex items-center gap-8">
                  <Image
                    src="/images/star1.png"
                    width={45}
                    height={45}
                    alt="Webfudge star"
                  />
                  <span className="mr-8 mb-[20px]">WEBFUDGE</span>
                </div>
                <div className="flex items-center gap-8">
                  <Image
                    src="/images/star1.png"
                    width={45}
                    height={45}
                    alt="Webfudge star"
                  />
                  <span className="mr-8 mb-[20px]">WEBFUDGE</span>
                </div>
                <div className="flex items-center gap-8">
                  <Image
                    src="/images/star1.png"
                    width={45}
                    height={45}
                    alt="Webfudge star"
                  />
                  <span className="mr-8 mb-[20px]">WEBFUDGE</span>
                </div>
                <div className="flex items-center gap-8">
                  <Image
                    src="/images/star1.png"
                    width={45}
                    height={45}
                    alt="Webfudge star"
                  />
                  <span className="mr-8 mb-[20px]">WEBFUDGE</span>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
        <div className=" font-[BelfastMedium] flex justify-between text-[1.2vw] mt-[200px] mb-[80px]">
          <Link href="/legals/terms-and-conditions.html">
            <span>TERMS & CONDITION</span>
          </Link>
          <span>Copyright © 2024 Webfudge Agency. All rights reserved. </span>
          <Link href="/legals/privacy-policy.html">
            <span>PRIVACY POLICY</span>
          </Link>
        </div>
      </div>
      <Model onClose={handleOnClose} visible={showVideo} />
    </>
  );
};

export default Footer;
