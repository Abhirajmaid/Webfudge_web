"use client";

import Image from "next/image";
import React, { useState } from "react";

const Service = ({ service }) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div
        className="group flex justify-between p-8 border-t-4 dark:border-y-[#272727] border-y-[#C8C8C8] cursor-pointer dark:hover:bg-[#272727] hover:bg-[#C8C8C8] relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h3 className="group-hover:font-bold group-hover:scale-105 font-[BelfastMedium] text-[3vw] -mt-3">
          {service}
          <span className="text-primary opacity-0 group-hover:opacity-100 ml-2">
            .
          </span>
        </h3>
        {hover ? (
          <div className="h-[250px] w-[250px] absolute -top-[60%] right-[20%] z-50">
            <Image
              src="/images/dummy.jpg"
              width={250}
              height={250}
              className="w-[100%] h-[100%] shadow-[11px_11px_0px_0px_#d305b1] rounded-t-[60px]"
              alt="webfudge"
            />
            {/* <video
              className="w-[100%] h-[100%] shadow-[11px_11px_0px_0px_#d305b1] rounded-t-[60px]"
              muted
              autoplay="autoploay"
              poster=""
            >
              <source src="video/Final Comp.mp4" type="video/mp4" />
              <source src="video/Final Comp.3gpp" type="video/3gpp" />
            </video> */}
          </div>
        ) : (
          <></>
        )}
        <div className="flex justify-center items-center cursor-pointer group-hover:bg-primary p-5">
          {hover ? (
            <Image
              src="/images/arrow_dark.png"
              width={50}
              height={50}
              alt="Webfudge arrow"
            />
          ) : (
            <Image
              src="/images/arrow_light.png"
              width={50}
              height={50}
              alt="Webfudge arrow"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
