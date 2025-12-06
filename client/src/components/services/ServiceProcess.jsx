"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

const ServiceProcess = ({ process, serviceTitle = "UI/UX DESIGN" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Gradient colors for each step - matching reference image
  const stepGradients = [
    "from-slate-400 to-blue-500", // Step 1: Light blue-gray to medium blue
    "from-blue-400 to-emerald-400", // Step 2: Light blue to vibrant light green
    "from-emerald-400 to-lime-300", // Step 3: Vibrant light green to yellow-green
    "from-lime-300 to-amber-300", // Step 4: Light yellow-green to soft orange-yellow
    "from-amber-300 to-orange-500", // Step 5: Soft orange-yellow to reddish-orange
  ];

  return (
    <motion.div
      ref={ref}
      className="md:my-20 my-12 relative"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7 }}
    >
      {/* Dark background */}
      <div className="rounded-3xl md:rounded-[40px] px-[3%] py-6 md:p-12 relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30">
        {/* Title Section */}
        <motion.div
          className="mb-8 md:mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col gap-2">
            <h2 className="md:text-[4vw] text-[6vw] md:leading-[0.8] leading-8 tracking-tighter uppercase align-middle text-white">
              <span className="bg-white bg-clip-text text-transparent">
                Our Innovative {serviceTitle} Process
              </span>{" "}
              <span className="text-[#D71EB9] !text-[6vw]">.</span>
            </h2>
            <p className="font-Poppins md:text-[1.3vw] md:leading-6 leading-4 md:mt-6 mt-3 text-xs md:w-[65%] w-[80%] text-white/80 dark:text-gray-300">
              From start to finish, our process transforms your ideas into
              intuitive user experiences that achieve your business goals and
              set your product apart in the market.
            </p>
          </div>
        </motion.div>

        {/* Horizontal Process Steps */}
        <div className="relative mt-12 md:mt-16">
          {/* Mobile: Horizontal Scroll Container */}
          <div className="md:hidden overflow-x-auto overflow-y-visible pb-4 scrollbar-hide -mx-8 px-8 md:mx-0 md:px-0">
            <div className="flex gap-6 min-w-max">
              {process.map((step, index) => {
                const gradient = stepGradients[index] || stepGradients[0];

                return (
                  <motion.div
                    key={step.step}
                    className="flex flex-col items-center w-[200px] flex-shrink-0 relative"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  >
                    {/* Step Number */}
                    <div className="mb-4">
                      <span className="text-white font-[BelfastMedium] font-bold text-sm uppercase">
                        STEP #{step.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <div className="mb-6 text-center px-3">
                      <h3 className="font-[BelfastMedium] text-white font-bold text-sm">
                        {step.title}
                      </h3>
                    </div>

                    {/* Gradient Bar with Plus Icon */}
                    <div className="relative w-full px-3">
                      <div
                        className={`h-10 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center relative shadow-lg cursor-pointer transition-transform duration-300 active:scale-105`}
                      >
                        <Icon icon="mdi:plus" className="text-white text-3xl" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden md:flex flex-row items-stretch gap-0 relative">
            {process.map((step, index) => {
              const isLast = index === process.length - 1;
              const gradient = stepGradients[index] || stepGradients[0];

              return (
                <React.Fragment key={step.step}>
                  <motion.div
                    className="flex flex-col items-center flex-1 relative border-r border-white/10 last:border-r-0"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  >
                    {/* Step Number */}
                    <div className="mb-4 md:mb-6">
                      <span className="text-white font-[BelfastMedium] font-bold md:text-lg text-sm uppercase">
                        STEP #{step.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <div className="mb-6 md:mb-8 text-center px-3 md:px-4">
                      <h3 className="font-[BelfastMedium] text-white font-bold md:text-lg text-sm">
                        {step.title}
                      </h3>
                    </div>

                    {/* Gradient Bar with Plus Icon - Group for hover */}
                    <div className="relative w-full px-3 md:px-4 group">
                      <div
                        className={`h-10 md:h-10 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center relative shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105`}
                      >
                        <Icon
                          icon="mdi:plus"
                          className="text-white text-3xl md:text-4xl"
                        />
                      </div>

                      {/* Description - shown on hover */}
                      <div className="mt-4 md:mt-6 hidden md:block px-3 md:px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                        <p className="font-Poppins text-white/70 text-sm leading-relaxed text-center">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceProcess;
