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
          Transform your ideas into captivating digital experiences. From design
          to development, we deliver solutions that drive results and accelerate
          your growth.
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
        <div className="bg-white dark:bg-dark-gray rounded-3xl md:rounded-[40px] p-3 md:p-4 mb-6">
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {/* Design Section */}
            <div className="p-4 py-4 bg-[#F5F5F7] dark:bg-gray-800 rounded-[30px]">
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
                      className="text-primary text-3xl"
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
                      className="flex items-center justify-between py-4 px-4 md:py-6 border-b-2 dark:border-black last:border-b-0 group cursor-pointer group hover:opacity-80 transition-opacity hover:bg-[#dadada] dark:hover:bg-gray-700"
                    >
                      <span className="font-Poppins text-gray-600 dark:text-black md:text-[1.5vw] text-sm group-hover:scale-[1.02] transition-all duration-300">
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
                  ))
                ) : (
                  <div className="py-4 px-4 md:py-6">
                    <span className="font-Poppins text-gray-600 dark:text-black md:text-[1.5vw] text-sm">
                      UI/UX Design
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Development Section */}
            <div className="p-4 py-4 bg-[#F5F5F7] dark:bg-gray-800 rounded-[30px]">
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
                      className="text-primary text-3xl"
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
                      className="flex items-center justify-between py-4 px-4 md:py-6 border-b-2 border-gray-300 dark:border-black last:border-b-0 group cursor-pointer group hover:opacity-80 transition-opacity hover:bg-[#dadada] dark:hover:bg-gray-700"
                    >
                      <span className="font-Poppins text-gray-600 dark:text-black md:text-[1.5vw] text-sm group-hover:scale-[1.02] transition-all duration-300">
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
                  ))
                ) : (
                  <div className="py-4 px-4 md:py-6">
                    <span className="font-Poppins text-gray-600 dark:text-black md:text-[1.5vw] text-sm">
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
          className="bg-secondary rounded-2xl md:rounded-[30px] px-5 md:px-6 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-3"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Icon
                icon="mdi:refresh"
                className="text-white text-lg animate-spin-slow"
              />
            </div>
            <p className="text-white font-Poppins md:text-[1vw] text-xs md:text-sm">
              Need bold design or reliable code or both? You&apos;re in the
              right place.
            </p>
          </div>
          <button
            onClick={openModal}
            className="bg-[#FFEB3B] hover:bg-[#FFD700] text-black font-[BelfastMedium] font-bold px-5 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl transition-colors uppercase text-xs md:text-sm whitespace-nowrap"
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
