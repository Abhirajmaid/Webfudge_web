"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { getAllServices, getServicesByCategory } from "@/src/data/services";
import { InfiniteMarquee, Testimonial } from "@src/components/common";
import { useLeadForm } from "@src/context/LeadFormContext";

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const { openModal } = useLeadForm();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const allServices = getAllServices();
  const designServices = getServicesByCategory("Design");
  const developmentServices = getServicesByCategory("Development");

  return (
    <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "80px" }}>
      {/* Hero Section */}
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
        <motion.h1
          className="md:text-[6vw] text-[8vw] tracking-tighter uppercase font-[BelfastMedium] dark:text-white text-main-dark mb-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Our Services{" "}
          <span className="text-[#D71EB9] md:!text-[8vw] !text-[10vw]">.</span>
        </motion.h1>
        <motion.p
          className="font-Poppins md:text-[1.5vw] text-lg text-gray dark:text-gray-300 max-w-3xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Transform your ideas into captivating digital experiences. From design to
          development, we deliver solutions that drive results and accelerate your
          growth.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="relative md:my-20 my-12"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <div className="bg-white dark:bg-dark-gray rounded-3xl md:rounded-[40px] p-4 md:p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* Design Section */}
            <div className="p-10 py-5 bg-[#F5F5F7] dark:bg-gray-800 rounded-[40px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-[BelfastMedium] text-black dark:text-white md:text-[4vw] text-[8vw] font-bold">
                  Design
                </h3>
                <Link
                  href="/services"
                  className="w-12 h-12 rounded-full bg-white dark:bg-dark-gray border-2 border-black dark:border-white flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon
                      icon="mdi:arrow-top-right"
                      className="text-black dark:text-white text-xl"
                    />
                  </motion.div>
                </Link>
              </div>
              <div className="space-y-0">
                {designServices.length > 0 ? (
                  designServices.map((service, index) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between py-4 md:py-5 border-b-2 border-black/20 dark:border-white/20 last:border-b-0 group cursor-pointer hover:opacity-80 transition-opacity my-2"
                    >
                      <span className="font-Poppins text-black dark:text-white md:text-[1.5vw] text-base">
                        {service.title}
                      </span>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100"
                        initial={{ x: -5, y: 5 }}
                        whileHover={{ x: 2, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Icon
                          icon="mdi:arrow-top-right"
                          className="text-black dark:text-white text-lg"
                        />
                      </motion.div>
                    </Link>
                  ))
                ) : (
                  <div className="py-4 md:py-5">
                    <span className="font-Poppins text-black dark:text-white md:text-[1.5vw] text-base">
                      UI/UX Design
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Development Section */}
            <div className="p-10 py-5 bg-[#F5F5F7] dark:bg-gray-800 rounded-[40px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-[BelfastMedium] text-black dark:text-white md:text-[4vw] text-[8vw] font-bold">
                  Development
                </h3>
                <Link
                  href="/services"
                  className="w-12 h-12 rounded-full bg-white dark:bg-dark-gray border-2 border-black dark:border-white flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon
                      icon="mdi:arrow-top-right"
                      className="text-black dark:text-white text-xl"
                    />
                  </motion.div>
                </Link>
              </div>
              <div className="space-y-0">
                {developmentServices.length > 0 ? (
                  developmentServices.map((service, index) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between py-4 md:py-5 border-b-2 border-black/20 dark:border-white/20 last:border-b-0 group cursor-pointer hover:opacity-80 transition-opacity my-2"
                    >
                      <span className="font-Poppins text-black dark:text-white md:text-[1.5vw] text-base">
                        {service.title}
                      </span>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100"
                        initial={{ x: -5, y: 5 }}
                        whileHover={{ x: 2, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Icon
                          icon="mdi:arrow-top-right"
                          className="text-black dark:text-white text-lg"
                        />
                      </motion.div>
                    </Link>
                  ))
                ) : (
                  <div className="py-4 md:py-5">
                    <span className="font-Poppins text-black dark:text-white md:text-[1.5vw] text-base">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Bar */}
        <motion.div
          className="bg-secondary rounded-2xl md:rounded-[30px] px-6 md:px-8 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Icon
                icon="mdi:refresh"
                className="text-white text-xl animate-spin-slow"
              />
            </div>
            <p className="text-white font-Poppins md:text-[1.2vw] text-sm md:text-base">
              Need bold design or reliable code or both? You&apos;re in the right
              place.
            </p>
          </div>
          <button
            onClick={openModal}
            className="bg-[#FFEB3B] hover:bg-[#FFD700] text-black font-[BelfastMedium] font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-colors uppercase text-sm md:text-base whitespace-nowrap"
          >
            BOOK A CALL
          </button>
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="md:my-20 my-12">
        <Testimonial />
      </div>

      {/* CTA Marquee */}
      <div className="md:my-20 my-12">
        <InfiniteMarquee txt="Let's Discuss" url="/contact-us" />
      </div>
    </div>
  );
}

