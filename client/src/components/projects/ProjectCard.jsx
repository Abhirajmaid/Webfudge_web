"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="opacity-100">
      <motion.div
        className="group relative w-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer h-[400px] md:h-[500px]"
        whileTap={{ scale: 0.98 }}
      >
        <div className="grid md:grid-cols-2 gap-10 h-full">
          {/* Left Section - Content */}
          <div className="p-6 md:p-10 bg-gray-50 rounded-r-2xl dark:bg-dark-gray flex flex-col justify-between">
            <div>
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-primary text-white text-xs md:text-sm font-Poppins font-semibold rounded-full uppercase">
                  {project.category}
                </span>
                <span className="px-4 py-1.5 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white text-xs md:text-sm font-Poppins rounded-full">
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-5xl font-[BelfastMedium] text-main-dark dark:text-white mb-4 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 font-Poppins text-sm md:text-base mb-6 line-clamp-3">
                {project.short_des}
              </p>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies?.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 dark:bg-white/10 text-primary dark:text-white text-xs rounded-full font-Poppins"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies?.length > 4 && (
                  <span className="px-3 py-1 bg-primary/10 dark:bg-white/10 text-primary dark:text-white text-xs rounded-full font-Poppins">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* View Project Link */}
            <div className="flex items-center gap-2 text-primary font-[BelfastMedium] text-sm md:text-base group-hover:gap-4 transition-all">
              View Project
              <Icon
                icon="mdi:arrow-right"
                className="text-xl group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative h-[300px] !rounded-2xl md:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
            {project.img_url ? (
              <Image
                src={project.img_url}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Icon
                  icon="mdi:code-braces"
                  className="text-6xl text-primary/50"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
