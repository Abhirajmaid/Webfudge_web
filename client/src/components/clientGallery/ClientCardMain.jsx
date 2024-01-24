"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ClientCardMain = ({ data }) => {
  const [hide, setHide] = useState(false);
  return (
    <div className="w-[48%] flex flex-col gap-3">
      <div
        className="relative w-full  cursor-pointer"
        onMouseEnter={() => setHide(true)}
        onMouseLeave={() => setHide(false)}
      >
        <Image
          src={data.img_url}
          width={500}
          height={500}
          className="w-full h-[600px]"
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
      <div className="flex gap-4 w-full items-center cursor-pointer">
        <h1 className="text-[2vw] uppercase font-[BelfastMedium] font-semibold text-gray">
          {data.title}
        </h1>
        <Image
          src="/images/Arrow 3.png"
          width={500}
          height={550}
          className="w-[180px] h-[40px]"
        />
      </div>
      <p className="font-Poppins text-[1vw] w-full">{data.short_des}</p>
      <div className="flex gap-[2px] flex-wrap w-full text-primary">
        {data.services_offered?.map((item) => {
          return (
            <>
              <span className="font-Poppins text-[1vw]">{item}</span>
              <Icon icon="ci:line-l" width="24" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ClientCardMain;
