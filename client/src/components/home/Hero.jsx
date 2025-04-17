"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.div
        className="relative md:h-[550px] h-[400px] mt-[20px] "
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="w-full md:flex-row flex flex-col md:justify-between z-50 absolute overflow-hidden">
          <div>
            <Image
              src="/images/balls.svg"
              height={0}
              width={0}
              alt="Webfudge star"
              className="md:-mb-[30px] mt-[40px] w-[30px] md:w-[80px] h-auto hidden md:block dark:fill-black "
            />
            <motion.h1
              className="md:!text-[10vw] !text-[15vw]  dark:text-white md:leading-[180px] leading-[60px] tracking-tight py-2 text-center md:text-left"
              variants={{
                hidden: { opacity: 1, y: 200 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              CREATIVE
              <br /> AGENCY
            </motion.h1>
          </div>
          <div className="flex-col md:gap-7 gap-3 flex-align-center">
            <div className=" md:w-[80%] w-[60%] md:max-h-[100px] max-h-10  rounded-full bg-[#D9D9D9] md:mt-[85px] p-3 py-[20px] flex items-center overflow-hidden relative">
              <div className=" md:h-[85px] h-10 bg-white rounded-full md:w-[85px] w-10 border-solid md:border-[6px] border-[3px] border-gray cursor-pointer absolute md:block hidden">
                <Icon icon="mdi:play" width="75" className=" text-primary " />
              </div>
              <video
                className="videobackground"
                muted
                autoPlay
                loop={true}
                poster=""
              >
                <source src="video/Final Comp.mp4" type="video/mp4" />
                <source src="video/Final Comp.3gpp" type="video/3gpp" />
              </video>
            </div>
            <div className="flex justify-center items-center md:gap-[100px] gap-[40px] ">
              <Image
                src="/images/star.png"
                height={100}
                width={100}
                alt="Webfudge star"
                className=" w-4 md:w-[27px] h-auto"
              />
              <Image
                src="/images/star.png"
                width={100}
                height={100}
                alt="Webfudge star"
                className=" w-4 md:w-[27px] h-auto"
              />
              <Image
                src="/images/star.png"
                width={100}
                height={100}
                alt="Webfudge star"
                className="w-4 md:w-[27px] h-auto"
              />
            </div>
          </div>
          <p className="md:w-[35%] w-[80%] mx-auto md:text-justify font-[BelfastMedium] md:absolute md:-bottom-2 right-0 md:text-[1vw] text-center text-[0.9rem] py-2">
            Welcome to{" "}
            <span className=" font-[BelfastGrotesk] md:text-[1.2vw] text-[1.2rem] ">
              Webfudge
            </span>{" "}
            , the ultimate web design solution. Unleash your imagination and
            build captivating websites with ease. Join our community of creators
            and transform your online presence today !
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-3 justify-center items-center absolute -bottom-[50px] md:bottom-0 z-50">
          <Link
            href="/contact-us"
            className="btn text-center !font-light w-[60%] border-[1px] text-[13px] md:text-xl md:!py-5 !py-3 !rounded-full border-solid dark:border-primary bg-primary text-white md:max-w-[25%]  hover:scale-110"
          >
            <button>Start New Project! &rarr;</button>
          </Link>
          <Link
            href="/our-work"
            className="btn text-center w-[60%] border-[1px] text-[13px] md:text-xl md:!py-5 !py-3 !rounded-full border-solid dark:border-black bg-white text-black md:max-w-[25%]  hover:scale-110"
          >
            <button>Our Work</button>
          </Link>
          <div className="hidden md:block h-[1px] w-[65%] bg-dark dark:bg-gray opacity-70 "></div>
          <Image
            src="/images/rings.png"
            width={100}
            height={100}
            alt="Webfudge rings"
            className="hidden md:block w-[60px] h-auto "
          />
        </div>
        <div className="z-0">
          <div className="gradient-bg !opacity-70">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <motion.div
              className="gradients-container"
              variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="g2"></div>
              <div className="g1"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              {/* <div className="interactive"></div> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
