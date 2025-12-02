"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLeadForm } from "@src/context/LeadFormContext";

const ServicesHero = ({ hero }) => {
  const { openModal } = useLeadForm();
  
  return (
    <motion.div
      className="relative md:mt-[80px] mt-[50px] mb-16"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <motion.h1
          className="md:text-[5vw] text-[8vw] tracking-tighter uppercase font-[BelfastMedium] dark:text-white text-main-dark leading-tight"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {hero.headline}
        </motion.h1>
        
        <motion.p
          className="font-Poppins md:text-[1.5vw] text-lg text-gray dark:text-gray-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {hero.subheadline}
        </motion.p>
        
        {hero.supportingText && (
          <motion.p
            className="font-Poppins md:text-[1.2vw] text-base text-gray dark:text-gray-400"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {hero.supportingText}
          </motion.p>
        )}

        <motion.div
          className="mt-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button
            onClick={openModal}
            className="bg-[#FFEB3B] hover:bg-[#FFD700] text-black font-[BelfastMedium] font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl transition-colors uppercase text-sm md:text-base"
          >
            {hero.ctaText || "BOOK A CALL"}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesHero;

