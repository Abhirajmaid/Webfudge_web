"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLeadForm } from "@src/context/LeadFormContext";
import { getServicesByCategory } from "@src/data/services";

const OurServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const { openModal } = useLeadForm();

  // Get services from centralized data
  const designServices = getServicesByCategory("Design");
  const developmentServices = getServicesByCategory("Development");

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      className="relative md:mt-[250px] mt-[100px] overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {/* Header Section */}
      <div className="flex flex-col gap-2 mb-6 relative z-10">
        <h2 className="md:text-[4.5vw] text-[6vw] tracking-tighter uppercase align-middle dark:text-white text-main-dark">
          Our Services <span className="text-[#D71EB9] !text-[6vw]">.</span>
        </h2>
        <p className="font-Poppins md:text-[0.9vw] leading-4 text-xs w-[65%] text-gray dark:text-gray-300">
          Every one of us loves something unique. So, explore the world through{" "}
          <br />
          the lens of our visual capabilities and discover what you love.
        </p>
      </div>

      {/* White Card with Design and Development Sections */}
      <motion.div
        className="bg-white rounded-3xl md:rounded-[40px] p-3 md:p-4 mb-6 relative z-10"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="grid md:grid-cols-2 gap-3 md:gap-4 relative">
          {/* Design Section */}
          <div className="p-4 py-4 bg-[#F5F5F7] rounded-[30px] ">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-[BelfastMedium] text-black md:text-[3vw] text-[6vw] font-bold">
                Design
              </h3>
              <Link
                href="/services"
                className="w-16 h-16 rounded-full bg-white border-[1.5px] border-black/50 flex items-center justify-center hover:bg-gray-100 transition-colors hover:bg-black"
              >
                <motion.div
                  whileHover={{ x: 3, y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon
                    icon="mdi:arrow-top-right"
                    className="text-primary text-3xl hover:text-white"
                  />
                </motion.div>
              </Link>
            </div>
            <div className="space-y-0">
              {designServices.map((service) => {
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between py-4 px-4 md:py-6 border-b-2 border-black/20 last:border-b-0 group cursor-pointer group hover:opacity-80 transition-opacity hover:bg-[#dadada]"
                  >
                    <span className="font-Poppins text-black md:text-[1.5vw] text-xl group-hover:scale-[1.02] transition-all duration-300">
                      {service.title}
                    </span>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100"
                      initial={{ x: -8, y: 8, scale: 0.8 }}
                      animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                      }}
                      whileHover={{
                        x: 5,
                        y: -5,
                        scale: 1.15,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        mass: 0.8,
                      }}
                    >
                      <Icon
                        icon="mdi:arrow-top-right"
                        className="text-primary text-4xl"
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Development Section */}
          <div className="p-4 py-4 bg-[#F5F5F7] rounded-[30px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-[BelfastMedium] text-black md:text-[3vw] text-[6vw] font-bold">
                Development
              </h3>
              <Link
                href="/services"
                className="w-16 h-16 rounded-full bg-white border-[1.5px] border-black/50 flex items-center justify-center hover:bg-gray-100 transition-colors hover:bg-black"
              >
                <motion.div
                  whileHover={{ x: 3, y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon
                    icon="mdi:arrow-top-right"
                    className="text-primary text-3xl hover:text-white"
                  />
                </motion.div>
              </Link>
            </div>
            <div className="space-y-0">
              {developmentServices.map((service) => {
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between py-4 px-4 md:py-6 border-b-2 border-black/20 last:border-b-0 group cursor-pointer group hover:opacity-80 transition-opacity hover:bg-[#dadada]"
                  >
                    <span className="font-Poppins text-black md:text-[1.5vw] text-xl group-hover:scale-[1.02] transition-all duration-300">
                      {service.title}
                    </span>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100"
                      initial={{ x: -8, y: 8, scale: 0.8 }}
                      animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                      }}
                      whileHover={{
                        x: 5,
                        y: -5,
                        scale: 1.15,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        mass: 0.8,
                      }}
                    >
                      <Icon
                        icon="mdi:arrow-top-right"
                        className="text-primary text-4xl"
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call-to-Action Bar */}
      <motion.div
        className="bg-dark-gray rounded-2xl md:rounded-[30px] px-5 md:px-6 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-3 relative z-10"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <p className="text-white text-center md:text-left font-Poppins md:text-[1vw] text-xs md:text-sm">
            Need bold design or reliable code or both? You&apos;re in the right
            place.
          </p>
        </div>
        <button
          onClick={openModal}
          className="bg-white hover:bg-primary text-black font-[BelfastMedium] font-bold px-5 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl transition-colors uppercase text-xs md:text-sm whitespace-nowrap"
        >
          BOOK A CALL
        </button>
      </motion.div>
    </motion.div>
  );
};

export default OurServices;
