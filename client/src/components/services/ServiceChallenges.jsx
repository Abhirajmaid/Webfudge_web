"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

const ServiceChallenges = ({ challenges, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, challenges.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

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
      {/* Gradient Background */}
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
                {title || "The Most Popular Issues"}
              </span>{" "}
              <span className="text-[#D71EB9] !text-[6vw]">.</span>
            </h2>
            <p className="font-Poppins md:text-[1.3vw] md:leading-6 leading-4 md:mt-6 mt-3 text-xs md:w-[65%] w-[80%] text-white/80">
              {description || "Understanding common challenges helps us create better solutions. Explore the issues we help businesses overcome every day."}
            </p>
          </div>
        </motion.div>

        {/* Challenges Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  className="flex-shrink-0"
                  style={{
                    width: `${100 / itemsPerView}%`,
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="bg-transparent border-2 border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 h-full flex flex-col relative group hover:border-white/40 transition-all duration-300 w-full">
                    {/* Animated Icon */}
                    <div className="mb-4 md:mb-6 flex justify-center">
                      <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                        <Icon
                          icon={challenge.icon || "mdi:alert-circle"}
                          className="text-white"
                          style={{ fontSize: "clamp(2.5rem, 4vw, 5rem)" }}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-[BelfastMedium] text-base md:text-lg font-bold text-white mb-3 md:mb-4 text-center line-clamp-2">
                      {challenge.title}
                    </h3>

                    {/* Description */}
                    <p className="font-Poppins text-white/80 text-xs md:text-sm leading-relaxed text-center flex-grow line-clamp-4 md:line-clamp-5">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-white hover:bg-white/10 cursor-pointer"
            }`}
          >
            <Icon icon="mdi:chevron-left" className="text-white text-xl" />
          </button>

          {/* Progress Indicator */}
          <div className="flex gap-2 items-center">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-white hover:bg-white/10 cursor-pointer"
            }`}
          >
            <Icon icon="mdi:chevron-right" className="text-white text-xl" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceChallenges;
