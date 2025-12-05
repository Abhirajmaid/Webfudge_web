"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { getAllCategories } from "@/src/data/softwareProjects";

const ProjectFilter = ({ activeCategory, onFilterChange }) => {
  const categories = ["All", ...getAllCategories()];

  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="flex items-center gap-3 flex-wrap">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(category === "All" ? null : category)}
            className={`
              px-4 md:px-6 py-2 md:py-3 rounded-full font-Poppins text-sm md:text-base
              transition-all duration-300
              ${
                (activeCategory === null && category === "All") ||
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/50"
                  : "bg-white dark:bg-dark-gray border-2 border-gray/30 dark:border-gray/50 text-gray dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:text-primary"
              }
            `}
          >
            <div className="flex items-center gap-2">
              <Icon
                icon={
                  category === "All"
                    ? "mdi:view-grid"
                    : category === "CRM"
                    ? "mdi:account-group"
                    : category === "Project Management"
                    ? "mdi:clipboard-list"
                    : category === "E-Commerce"
                    ? "mdi:cart"
                    : category === "HR Management"
                    ? "mdi:account-tie"
                    : category === "Analytics"
                    ? "mdi:chart-line"
                    : category === "Education"
                    ? "mdi:school"
                    : "mdi:code-braces"
                }
                className="text-lg"
              />
              {category}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;



