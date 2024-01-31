"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import useMousePosition from "@src/utils/useMousePosition";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        className="p-[160px] text-justify leading-[100px] tracking-tight dark:bg-dark-light bg-gray  mt-[100px] font-[BelfastMedium] text-[5vw] relative"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="absolute top-0 left-0 p-[160px] uppercase mask bg-white cursor-default"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <h3
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ver
            veritatis voluptatem dolorem rem rem laboriosam voluptate
          </h3>
        </motion.div>
        <h3>
          A CREATIVE{" "}
          <Image
            src="/images/abstract.png"
            width={120}
            height={10}
            className="w-[27%] h-[75px] rounded-full inline mb-[15px]"
          />{" "}
          MIND KNOWS{" "}
          <Image
            src="/images/abstract_1.png"
            width={120}
            height={10}
            className="w-[14%] h-[75px] rounded-full inline mb-[10px]"
          />{" "}
          HOW TO DO THE{" "}
          <Image
            src="/images/arrow_img.svg"
            width={12}
            height={75}
            className="w-[13%] h-[95px] rounded-full inline mb-[10px]"
          />{" "}
          RIGHT THING AT THE RIGHT PLACE{" "}
          <Image
            src="/images/abstract_1.png"
            width={125}
            height={75}
            className="w-[15%] h-[75px] rounded-full inline mb-[20px]"
          />{" "}
          AND AT THE RIGHT TIME
        </h3>
      </motion.div>
    </>
  );
};

export default About;
