"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

const ServiceReasons = ({ reasons }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

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
      <motion.h2
        className="md:text-[4vw] text-[7vw] tracking-tighter uppercase font-[BelfastMedium] mb-12 dark:text-white text-main-dark"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        6 Reasons to Work With Us
      </motion.h2>

      <div className=" rounded-3xl md:rounded-[40px] p-6 md:p-8">
        <div className="grid md:grid-cols-2">
          {reasons.map((reason, index) => {
            const isOdd = (index + 1) % 2 === 1;
            const isInFirstTwoRows = index < 4;

            return (
              <motion.div
                key={reason.id}
                className={`flex flex-col gap-4 p-6 md:p-8 ${
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
                {reason.icon && (
                  <div className="mb-2">
                    <Icon
                      icon={reason.icon}
                      className="text-white text-4xl md:text-5xl"
                    />
                  </div>
                )}
                <h3 className="font-[BelfastMedium] text-xl md:text-2xl font-bold text-white">
                  {reason.title}
                </h3>
                <p className="font-Poppins text-white/90 md:text-base text-sm leading-relaxed">
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
