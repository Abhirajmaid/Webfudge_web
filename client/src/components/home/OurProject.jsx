"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { clients } from "../../data/clients";
import { ClientCard } from "../common";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";

const ProjectFields = ["Design", "Development", "SMM", "SEO"];

const OurProject = () => {
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
        className="md:mt-[100px] mt-[60px] md:px-0 px-[3%]"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="md:text-[6vw] text-[8vw] tracking-tighter uppercase align-middle">
            Best Project <span className="text-[#D71EB9] !text-[8vw]">.</span>
          </h2>
          <p className="font-Poppins md:text-[1vw] text-xs md:w-[30%] w-[50%]">
            Croativo fuels design. design fuels creativity, be here for more,
            are you in love with a creative?
          </p>
          <div className="mt-[10px] flex gap-3 flex-wrap ">
            {ProjectFields?.map((item, i) => {
              return (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  // transition={{ type: "spring" }}
                  className="text-sm md:text-base btn border-[2px] md:!py-3 !rounded-full border-solid dark:border-[#494949] dark:text-[#5e5e5e] border-[#727272] text-[#727272] flex items-center gap-2 font-Poppins !capitalize dark:hover:text-[#8f8f8f] dark:hover:border-[#8f8f8f] hover:text-[#191919] hover:border-[#191919] "
                >
                  <Icon icon="mdi:web" width="24" />
                  {item}
                </motion.button>
              );
            })}
          </div>
        </div>
        <div className=" w-[100%] flex flex-wrap gap-10 justify-between">
          {clients?.slice(0, 6)?.map((item, i) => {
            return (
              <motion.div
                key={i}
                className="md:w-[31%] w-full"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 0,
                  },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                  ease: "easeInOut",
                  type: "tween",
                }}
                layout
              >
                <ClientCard data={item} />
              </motion.div>
            );
          })}
          <Link href="/our-work" className="opacity-100">
            <button className=" btn border-[2px] !py-3 !rounded-full border-solid dark:border-[#494949] dark:text-[#5e5e5e] border-[#727272] text-[#727272] flex items-center gap-2 font-Poppins !capitalize dark:hover:text-[#8f8f8f] dark:hover:border-[#8f8f8f] hover:text-[#191919] hover:border-[#191919] ">
              <Icon icon="mdi:web" width="24" />
              See More...
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default OurProject;
