"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getAllProjects } from "@/src/data/softwareProjects";

const SoftwareProjectsCarousel = () => {
  const projects = getAllProjects();
  const [activeIndex, setActiveIndex] = useState(0);

  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full py-12 md:py-20 to-transparent relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-10 relative z-10">
          <h2 className="md:text-[6vw] text-[8vw] tracking-tighter uppercase align-middle dark:text-white text-white">
            Custom Softwares{" "}
            <span className="text-[#D71EB9] !text-[8vw]">.</span>
          </h2>
          <p className="font-Poppins md:text-[1.1vw] leading-5 text-sm w-[65%] text-white/70 dark:text-gray-300">
            Explore our latest software development projects and discover <br />
            innovative solutions that drive business growth and success.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={projects.length > 1}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="opacity-100"
                >
                  <motion.div className="rounded-2xl overflow-hidden shadow-2xl cursor-pointer group h-[500px]">
                    <div className="grid md:grid-cols-2 gap-10 h-full">
                      {/* Left Section - Content */}
                      <div className="p-6 md:p-10 bg-gray-50 rounded-r-2xl dark:bg-dark-gray flex flex-col justify-between">
                        <div>
                          {/* Category Badge */}
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-4 py-1.5 bg-primary text-white text-xs md:text-sm font-Poppins font-semibold rounded-full uppercase">
                              {project.category}
                            </span>
                            <span className="px-4 py-1.5 bg-white/20 dark:bg-white/10 text-white text-xs md:text-sm font-Poppins rounded-full">
                              {project.type}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl md:text-4xl font-[BelfastMedium] text-main-dark dark:text-white mb-4 leading-tight">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-300 font-Poppins text-sm md:text-base mb-6 line-clamp-3">
                            {project.short_des}
                          </p>

                          {/* Technologies Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies
                              ?.slice(0, 4)
                              .map((tech, i) => (
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {projects.length > 1 && (
            <>
              <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                <Icon icon="mdi:chevron-left" className="text-white text-2xl" />
              </button>
              <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                <Icon
                  icon="mdi:chevron-right"
                  className="text-white text-2xl"
                />
              </button>
            </>
          )}

          {/* Custom Pagination */}
          {projects.length > 1 && (
            <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
          )}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-6 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-[BelfastMedium] transition-colors"
          >
            View All Projects
            <Icon icon="mdi:arrow-right" className="text-xl" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 40px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          opacity: 1;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active-custom {
          background: #d71eb9;
          width: 60px;
        }
      `}</style>
    </div>
  );
};

export default SoftwareProjectsCarousel;
