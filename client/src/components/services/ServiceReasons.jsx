"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { BiMinus, BiPlus } from "react-icons/bi";

const ServiceReasons = ({ reasons }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  const [openReasons, setOpenReasons] = useState({});

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const toggleReason = (reasonId) => {
    setOpenReasons((prev) => ({
      ...prev,
      [reasonId]: !prev[reasonId],
    }));
  };

  return (
    <motion.div
      ref={ref}
      className="md:my-20 my-12"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="mb-8 md:mb-12 px-[3%]"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex flex-col gap-2">
          <h2 className="md:text-[4vw] text-[7vw] md:leading-[0.8] leading-8 tracking-tighter uppercase align-middle dark:text-white text-main-dark">
            <span className="bg-white bg-clip-text text-transparent">
              6 Reasons to Work With Us
            </span>{" "}
            <span className="text-[#D71EB9] !text-[7vw]">.</span>
          </h2>
          <p className="font-Poppins md:text-[1.3vw] md:leading-6 leading-4 md:mt-6 mt-3 text-xs w-[65%] text-gray dark:text-gray-300">
            Discover what makes us the perfect partner for your next project. We
            combine expertise, innovation, and dedication to deliver exceptional
            results.
          </p>
        </div>
      </motion.div>

      <div className="rounded-3xl md:rounded-[40px] p-[3%] md:p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
        <div className="grid md:grid-cols-2">
          {reasons.map((reason, index) => {
            const isOdd = (index + 1) % 2 === 1;
            const isInFirstTwoRows = index < 4;

            const isOpen = openReasons[reason.id] || false;

            return (
              <motion.div
                key={reason.id}
                className={`flex flex-col gap-4 py-4 md:p-8 ${
                  isInFirstTwoRows ? "border-b border-white/10" : ""
                } ${isOdd ? "md:border-r border-white/10" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {/* Mobile: Clickable Header with Icon and Title in Row */}
                <div
                  className="md:hidden flex items-center justify-between cursor-pointer gap-3"
                  onClick={() => toggleReason(reason.id)}
                >
                  <div className="flex items-center gap-3 flex-1">
                    {reason.icon && (
                      <Icon
                        icon={reason.icon}
                        className="text-white text-3xl flex-shrink-0"
                      />
                    )}
                    <h3 className="font-[BelfastMedium] text-xl font-bold text-white">
                      {reason.title}
                    </h3>
                  </div>
                  {isOpen ? (
                    <BiMinus className="text-2xl text-white flex-shrink-0" />
                  ) : (
                    <BiPlus className="text-2xl text-white flex-shrink-0" />
                  )}
                </div>

                {/* Desktop: Icon and Static Header */}
                {reason.icon && (
                  <div className="hidden md:block mb-2">
                    <Icon
                      icon={reason.icon}
                      className="text-white text-4xl md:text-5xl"
                    />
                  </div>
                )}
                <h3 className="hidden md:block font-[BelfastMedium] text-xl md:text-2xl font-bold text-white">
                  {reason.title}
                </h3>

                {/* Mobile: Collapsible Description */}
                <p
                  className={`md:hidden p-0 max-h-0 overflow-hidden font-Poppins text-white/90 text-sm leading-relaxed transition-all ${
                    isOpen && "isOpen"
                  }`}
                >
                  {reason.description}
                </p>

                {/* Desktop: Always Visible Description */}
                <p className="hidden md:block font-Poppins text-white/90 md:text-base text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceReasons;
