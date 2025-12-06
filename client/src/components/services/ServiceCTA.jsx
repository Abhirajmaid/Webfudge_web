"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLeadForm } from "@src/context/LeadFormContext";

const ServiceCTA = ({
  variant = "primary",
  title,
  description,
  ctaText,
  ctaLink,
  icon,
}) => {
  const isPrimary = variant === "primary";
  const { openModal } = useLeadForm();

  return (
    <motion.div
      className={`rounded-2xl md:rounded-[30px] px-6 md:px-8 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 ${
        isPrimary ? "bg-secondary" : "bg-white dark:bg-dark-gray shadow-md"
      }`}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center gap-4">
        <div>
          {title && (
            <h3
              className={`font-[BelfastMedium] font-bold md:text-xl text-lg mb-2 ${
                isPrimary ? "text-white" : "dark:text-white text-main-dark"
              }`}
            >
              {title}
            </h3>
          )}
          {description && (
            <p
              className={`font-Poppins md:text-[1.2vw] text-sm md:text-base ${
                isPrimary ? "text-white" : "text-gray dark:text-gray-300"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={openModal}
        className={`font-[BelfastMedium] font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-colors uppercase text-sm md:text-base whitespace-nowrap ${
          isPrimary
            ? "bg-primary hover:bg-primary/90 text-white"
            : "bg-[#FFEB3B] hover:bg-[#FFD700] text-black"
        }`}
      >
        {ctaText || "BOOK A CALL"}
      </button>
    </motion.div>
  );
};

export default ServiceCTA;
