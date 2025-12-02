"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ProjectCard, ProjectFilter } from "@src/components/projects";
import {
  getAllProjects,
  getProjectsByCategory,
} from "@/src/data/softwareProjects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(getAllProjects());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    if (activeCategory === null) {
      setFilteredProjects(getAllProjects());
    } else {
      setFilteredProjects(getProjectsByCategory(activeCategory));
    }
  }, [activeCategory]);

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

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
          Software Projects{" "}
          <span className="text-[#D71EB9] md:!text-[8vw] !text-[10vw]">.</span>
        </motion.h1>
        <motion.p
          className="font-Poppins md:text-[1.5vw] text-lg text-gray dark:text-gray-300 max-w-3xl mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Explore our portfolio of enterprise software solutions including CRM
          systems, project management platforms, e-commerce solutions, and more.
          Built with modern technologies and best practices.
        </motion.p>
      </motion.div>

      {/* Filter Section */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <ProjectFilter
          activeCategory={activeCategory}
          onFilterChange={handleFilterChange}
        />
      </motion.div>

      {/* Projects List - Full Width Cards */}
      <motion.div
        className="flex flex-col gap-6 md:gap-8 mb-12"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-20"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
        >
          <p className="font-Poppins text-gray dark:text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
}
