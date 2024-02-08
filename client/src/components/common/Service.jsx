"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Service = ({ service }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <motion.div
        className="group flex justify-between items-center md:p-8 p-6 border-t-4 dark:border-y-[#272727] border-y-[#C8C8C8] cursor-pointer dark:hover:bg-[#272727] hover:bg-[#C8C8C8] relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileTap={{ scale: 0.96 }}
      >
        <h3 className="group-hover:font-bold group-hover:scale-105 font-[BelfastMedium] md:text-[3vw] text-[6vw] md:-mt-3 w-[80%]">
          {service}
          <span className="text-primary md:opacity-0 opacity-100 group-hover:opacity-100 ml-2">
            .
          </span>
        </h3>
        {hover ? (
          <motion.div
            className="h-[250px] w-[250px] absolute -top-[60%] right-[20%] z-50"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, ease: "easeInOut", type: "spring" }}
          >
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
              autoPlay
              poster=""
            >
              <source src="video/Final Comp.mp4" type="video/mp4" />
              <source src="video/Final Comp.3gpp" type="video/3gpp" />
            </video> */}
          </motion.div>
        ) : (
          <></>
        )}
        <div className="flex justify-center items-center cursor-pointer group-hover:bg-primary p-5 w-[20%] md:w-auto ">
          {hover ? (
            <Image
              src="/images/arrow_dark.png"
              width={50}
              height={50}
              alt="arrow"
              className="w-[30px] md:w-[50px]"
            />
          ) : (
            <Image
              src="/images/arrow_light.png"
              width={50}
              height={50}
              alt="arrow"
              className="w-[30px] md:w-[50px]"
            />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Service;
