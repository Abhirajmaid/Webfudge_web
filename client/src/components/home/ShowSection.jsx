"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const ShowSection = () => {
  return (
    <>
      <div className="mt-[100px] w-full relative ">
        <motion.video
          className="w-full md:rounded-t-[160px] rounded-t-[40px] card-shadow dark:border-none"
          muted
          autoPlay
          poster=""
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <source src="video/Final Comp.mp4" type="video/mp4" />
          <source src="video/Final Comp.3gpp" type="video/3gpp" />
        </motion.video>
        <motion.div
          className=" md:h-[230px] h-[100px] bg-white rounded-full md:w-[230px] w-[100px] border-solid md:border-[6px] border-[4px]  flex justify-center items-center border-gray cursor-pointer absolute md:-top-[70px] -top-[50px] right-[80px] "
          variants={{
            hidden: { opacity: 0, rotate: "0deg" },
            visible: { opacity: 1, rotate: "360deg" },
          }}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
        >
          <Image
            src="/images/arrow.png"
            width={75}
            height={78}
            alt="arrow"
            className="w-10 md:w-[75px]"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ShowSection;
