"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLeadForm } from "@src/context/LeadFormContext";

const CareersPage = () => {
  const { openModal } = useLeadForm();

  return (
    <div
      className="px-[3%] md:px-[6%] overflow-x-hidden min-h-screen flex items-center justify-center"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <motion.div
        className="w-full max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Icon */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon
              icon="mdi:briefcase-variant"
              className="text-primary text-5xl md:text-6xl"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="md:text-[6vw] text-[10vw] tracking-tighter uppercase font-[BelfastMedium] dark:text-white text-main-dark mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Careers{" "}
          <span className="text-[#D71EB9] md:!text-[8vw] !text-[12vw]">.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="font-Poppins md:text-[2vw] text-xl text-gray dark:text-gray-300 mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          We're Building Something Amazing
        </motion.p>

        {/* Description */}
        <motion.p
          className="font-Poppins md:text-[1.2vw] text-base text-gray dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          We're looking for talented individuals who are passionate about design,
          development, and creating digital experiences that make a difference.
          Our careers page is coming soon, but we'd love to hear from you!
        </motion.p>

        {/* Coming Soon Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Icon icon="mdi:clock-outline" className="text-primary text-xl" />
          <span className="font-Poppins font-semibold text-primary uppercase tracking-wide text-sm md:text-base">
            Coming Soon
          </span>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <button
            onClick={openModal}
            className="bg-primary hover:bg-primary/90 text-white font-[BelfastMedium] font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl transition-colors uppercase text-sm md:text-base"
          >
            Get in Touch
          </button>
          <a
            href="mailto:careers@webfudge.com"
            className="font-Poppins text-gray dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm md:text-base underline"
          >
            Or email us directly
          </a>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon icon="mdi:account-group" className="text-primary text-3xl" />
            </div>
            <h3 className="font-[BelfastMedium] text-lg font-bold dark:text-white text-main-dark">
              Great Team
            </h3>
            <p className="font-Poppins text-sm text-gray dark:text-gray-400 text-center">
              Work with passionate and creative professionals
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon icon="mdi:rocket-launch" className="text-primary text-3xl" />
            </div>
            <h3 className="font-[BelfastMedium] text-lg font-bold dark:text-white text-main-dark">
              Growth Opportunities
            </h3>
            <p className="font-Poppins text-sm text-gray dark:text-gray-400 text-center">
              Learn and grow with exciting projects
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon icon="mdi:heart" className="text-primary text-3xl" />
            </div>
            <h3 className="font-[BelfastMedium] text-lg font-bold dark:text-white text-main-dark">
              Creative Culture
            </h3>
            <p className="font-Poppins text-sm text-gray dark:text-gray-400 text-center">
              Be part of a culture that values innovation
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CareersPage;

