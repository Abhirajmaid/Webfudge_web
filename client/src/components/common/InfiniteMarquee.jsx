"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteMarquee = ({ txt, url }) => {
  const router = useRouter();
  return (
    <>
      <div className="relative w-full flex justify-center z-50">
        <div
          className="md:w-[120%] w-[99%] rotate-3 md:mt-10 absolute cursor-pointer"
          onClick={() => router.push(`${url}`)}
        >
          <Marquee pauseOnHover>
            <div className=" flex justify-between py-[0.5rem] md:!text-[60px] text-[40px] items-center dark:bg-[#FBF5FF] dark:text-[#493956] bg-black text-[#E1C3FA]">
              <div className="flex items-center gap-8">
                <Image
                  src="/images/star1.png"
                  width={45}
                  height={45}
                  alt="Webfudge star"
                  className="w-[30px] md:w-[45px]"
                />
                <span className="mr-8 md:mb-[20px]">{txt}</span>
              </div>
              <div className="flex items-center gap-8">
                <Image
                  src="/images/star1.png"
                  width={45}
                  height={45}
                  alt="Webfudge star"
                  className="w-[30px] md:w-[45px]"
                />
                <span className="mr-8 md:mb-[20px]">{txt}</span>
              </div>
              <div className="flex items-center gap-8">
                <Image
                  src="/images/star1.png"
                  width={45}
                  height={45}
                  alt="Webfudge star"
                  className="w-[30px] md:w-[45px]"
                />
                <span className="mr-8 md:mb-[20px]">{txt}</span>
              </div>
              <div className="flex items-center gap-8">
                <Image
                  src="/images/star1.png"
                  width={45}
                  height={45}
                  alt="Webfudge star"
                  className="w-[30px] md:w-[45px]"
                />
                <span className="mr-8 md:mb-[20px]">{txt}</span>
              </div>
            </div>
          </Marquee>
        </div>
        <div
          className="md:w-[120%] w-[99%] md:mt-10 absolute -rotate-3 cursor-pointer"
          onClick={() => router.push(`${url}`)}
        >
          <Marquee pauseOnHover>
            <div className=" flex justify-between md:py-[0.2rem]  md:!text-[60px] text-[40px] items-center dark:bg-[#FBF5FF] dark:text-[#493956] bg-black text-[#E1C3FA]">
              <div className="flex items-center gap-8">
                <Image
                  src="/images/star1.png"
                  width={45}
                  height={45}
                  alt="Webfudge star"
                  className="w-[30px] md:w-[45px]"
                />
                <span className="mr-8 md:mb-[20px]">{txt}</span>
              </div>
              <div className="flex items-center gap-8">
                <Image
                  src="/images/star1.png"
                  width={45}
                  height={45}
                  alt="Webfudge star"
                  className="w-[30px] md:w-[45px]"
                />
                <span className="mr-8 md:mb-[20px]">{txt}</span>
              </div>
              <div className="flex items-center gap-8">
                <Image
                  src="/images/star1.png"
                  width={45}
                  height={45}
                  alt="Webfudge star"
                  className="w-[30px] md:w-[45px]"
                />
                <span className="mr-8 md:mb-[20px]">{txt}</span>
              </div>
              <div className="flex items-center gap-8">
                <Image
                  src="/images/star1.png"
                  width={45}
                  height={45}
                  alt="Webfudge star"
                  className="w-[30px] md:w-[45px]"
                />
                <span className="mr-8 md:mb-[20px]">{txt}</span>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default InfiniteMarquee;
