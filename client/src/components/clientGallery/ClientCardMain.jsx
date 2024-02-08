"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ClientCardMain = ({ data }) => {
  const [hide, setHide] = useState(false);
  return (
    <div className="md:w-[48%] w-full flex flex-col gap-5">
      <Link href={`/our-work/${data.id}`} className="opacity-100">
        <div
          className="relative w-full  cursor-pointer"
          onMouseEnter={() => setHide(true)}
          onMouseLeave={() => setHide(false)}
        >
          <Image
            src={data?.img_url}
            width={500}
            height={500}
            loading="lazy"
            className="w-full md:h-[600px] h-[300px] object-cover"
          />
          {/* <video
          className="w-full h-[600px] object-cover"
          muted
          autoplay="autoploay"
          poster=""
          >
          <source src="video/Final Comp.mp4" type="video/mp4" />
          <source src="video/Final Comp.3gpp" type="video/3gpp" />
        </video> */}
          {hide ? (
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000099] flex items-center justify-center ">
              <div className="animate-spin-slow duration-700">
                <Image
                  src="/images/curvedtext2.png"
                  width={150}
                  height={150}
                  alt="Webfudge arrow"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex gap-4 w-full items-center cursor-pointer mt-5">
          <h1 className="md:text-[2vw] text-[5.5vw] uppercase font-[BelfastMedium] font-semibold text-gray">
            {data.title}
          </h1>
          <Image
            src="/images/Arrow 3.png"
            width={500}
            height={550}
            className="md:w-[180px] md:h-[40px] w-[25%] h-[30px]"
          />
        </div>
        <p className="font-Poppins md:text-[1vw] text-[3.5vw] w-full">
          {data.short_des}
        </p>
        <div className="flex gap-[2px] flex-wrap w-full items-center text-primary">
          {data.services_offered?.map((item) => {
            return (
              <>
                <span className="font-Poppins md:text-[1vw] text-[3vw]">
                  {item}
                </span>
                <Icon icon="ci:line-l" width="24" />
              </>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default ClientCardMain;
