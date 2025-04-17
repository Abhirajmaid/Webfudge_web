"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const ServicesList = [
  {
    text: "Graphic Design",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/source/c65a3d221875125.67dbf0b74f297.png",
  },
  {
    text: "UI/UX Design",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/fdbff9214086227.67518caa785c7.png",
  },
  { text: "Web Development", img: "/images/clients/planto/1.png" },
  { text: "Social Media Management", img: "/images/clients/rk/smm.png" },
  { text: "Brand Identity", img: "/images/clients/sahayata/sahayata.png" },
  { text: "Logo Design", img: "/images/clients/mmj/mmj2.png" },
];

const Service = ({ service }) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <>
      <motion.div
        className="group flex justify-between items-center md:p-8 p-6 border-t-4 dark:border-y-[#272727] border-y-[#C8C8C8] cursor-pointer dark:hover:bg-[#272727] hover:bg-[#C8C8C8] relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileTap={{ scale: 0.96 }}
        onClick={() => router.push("/our-work")}
      >
        <h3 className="group-hover:font-bold group-hover:scale-105 font-[BelfastMedium] md:text-[3vw] text-[6vw] md:-mt-3 w-[80%]">
          {service.text}
          <span className="text-primary md:opacity-0 opacity-100 group-hover:opacity-100 ml-2">
            .
          </span>
        </h3>
        {hover ? (
          <motion.div
            className="md:h-[250px] md:w-[350px] h-[150px] w-[150px] absolute md:-top-[60%] -top-[40%] right-[20%] z-50"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, ease: "easeInOut", type: "spring" }}
          >
            <Image
              src={`${service.img}`}
              width={650}
              height={650}
              className="w-[100%] h-[100%] shadow-[11px_11px_0px_0px_#d305b1] md:rounded-t-[60px] rounded-t-[40px]"
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

const OurServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="md:mt-[275px] mt-[150px] border-y-4 border-[#252525] md:px-0 px-[3%]"
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="md:text-[6vw] text-[8vw] tracking-tighter uppercase align-middle">
          Our Services <span className="text-[#D71EB9] !text-[8vw]">.</span>
        </h2>
        <p className="font-Poppins md:text-[1.1vw] leading-5 text-sm w-[65%] text-gray">
          Every one of us loves something unique. So, explore the world through{" "}
          <br />
          the lens of our visual capabilities and discover what you love.
        </p>
      </div>
      {ServicesList.map((item, i) => {
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: i * 0.4 }}
            key={i}
          >
            <Service service={item} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default OurServices;
