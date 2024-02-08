"use client";

import React, { useEffect, useRef } from "react";
import { Service } from "@src/components/common";
import { motion, useAnimation, useInView } from "framer-motion";

const ServicesList = [
  "Social Media Marketing",
  "Paid Advertising",
  "Web Design & Development",
  "Search Engine Optimization (SEO)",
  "Brand Design",
];

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
        <p className="font-Poppins md:text-[1vw] text-xs w-[50%] text-gray">
          Every ono of us loves sot-nothing different. So. exgsore the world
          through the lens of our visual capabilities, and find what you love
        </p>
      </div>
      {ServicesList.map((item, i) => {
        // console.log(i);
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: i * 0.4 }}
          >
            <Service key={i} service={item} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default OurServices;
