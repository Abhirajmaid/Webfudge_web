"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getAllProjects } from "@/src/data/softwareProjects";
import { clients } from "@/src/data/clients";

// Helper function to map service titles to services_offered strings
const getServiceMatches = (serviceTitle) => {
  const serviceMapping = {
    "UI/UX Design": [
      "UI/UX Design",
      "Website UI/UX Design",
      "UI/UX",
      "UI/UX Design",
      "Wireframing & Prototyping",
    ],
    "Web Design": [
      "Web Design",
      "Website Design",
      "Website UI/UX Design",
      "Responsive Design",
    ],
    "Website & Landing Page Design": [
      "Website Design",
      "Landing Page Design",
      "Website UI/UX Design",
      "Responsive Website Development",
    ],
    "Brand Identity Design": [
      "Brand Identity",
      "Branding",
      "Brand Identity Design",
    ],
    "Logo Design": ["Logo Design"],
    "Graphic & Creative Design": [
      "Graphic Design",
      "Creative Design",
      "Event Collateral Design",
      "Social Growth Strategy",
    ],
    "Website Development": [
      "Website Development",
      "Responsive Website Development",
      "Web Development",
      "Website UI/UX Design",
    ],
    "Mobile App Development": [
      "Mobile App Development",
      "Mobile Development",
      "Mobile-First Responsive Design",
    ],
    "E-commerce Development": [
      "E-commerce Integration",
      "E-commerce Development",
      "E-commerce",
    ],
    "CMS Development": [
      "CMS Setup",
      "CMS Development",
      "WordPress",
      "Webflow",
      "CMS",
    ],
    "Custom Software Development": ["Software Development", "Custom Software"],
  };

  // Return all possible matches for the service, including the title itself
  const matches = serviceMapping[serviceTitle] || [serviceTitle];
  // Also add the service title itself to the matches
  if (!matches.includes(serviceTitle)) {
    matches.push(serviceTitle);
  }
  return matches;
};

// Filter clients/projects based on service - strict matching only
const filterByService = (items, service) => {
  if (!service || !items || !Array.isArray(items)) return [];

  const serviceMatches = getServiceMatches(service.title);

  return items.filter((item) => {
    // Only include items that have services_offered array
    if (!item.services_offered || !Array.isArray(item.services_offered)) {
      return false;
    }

    // Check if any service in services_offered matches the service title
    const hasMatchingService = item.services_offered.some((offeredService) => {
      const offeredLower = offeredService.toLowerCase().trim();
      return serviceMatches.some((match) => {
        const matchLower = match.toLowerCase().trim();
        // Exact match or contains match
        return (
          offeredLower === matchLower ||
          offeredLower.includes(matchLower) ||
          matchLower.includes(offeredLower)
        );
      });
    });

    return hasMatchingService;
  });
};

const ServiceProjectsCarousel = ({ service, showAll = false }) => {
  const allProjects = getAllProjects();
  const allClients = clients;

  // Filter projects and clients based on service
  const filteredItems = useMemo(() => {
    // If showAll is true, return all projects and clients
    if (showAll) {
      const combined = [
        ...allProjects.map((project) => ({
          ...project,
          type: "project",
          link: `/projects/${project.slug}`,
        })),
        ...allClients.map((client) => ({
          ...client,
          type: "client",
          link: `/our-work/${client.id}`,
          slug: client.title.toLowerCase().replace(/\s+/g, "-"),
        })),
      ];
      return combined;
    }

    // Otherwise, filter by service
    const filteredProjects = filterByService(allProjects, service);
    const filteredClients = filterByService(allClients, service);

    // Combine and format for display
    const combined = [
      ...filteredProjects.map((project) => ({
        ...project,
        type: "project",
        link: `/projects/${project.slug}`,
      })),
      ...filteredClients.map((client) => ({
        ...client,
        type: "client",
        link: `/our-work/${client.id}`,
        slug: client.title.toLowerCase().replace(/\s+/g, "-"),
      })),
    ];

    return combined;
  }, [service, allProjects, allClients, showAll]);

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!filteredItems || filteredItems.length === 0) return null;

  return (
    <motion.div
      className="md:my-20 my-12 relative px-[3%]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Header Section */}
      <div className="flex flex-col gap-2 mb-8 md:mb-12">
        <h2 className="md:text-[4vw] text-[6vw] md:leading-[0.8] leading-8 tracking-tighter uppercase align-middle dark:text-white text-main-dark">
          <span className="bg-white bg-clip-text text-transparent">
            Our Work
          </span>{" "}
          <span className="text-[#D71EB9] !text-[6vw]">.</span>
        </h2>
        <p className="font-Poppins md:text-[1.3vw] md:leading-6 leading-4 md:mt-6 mt-3 text-xs md:w-[65%] w-[80%] text-gray dark:text-gray-300">
          Explore our portfolio of successful projects and see how we've helped
          businesses achieve their goals through innovative design and
          development.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white dark:bg-dark-gray border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Previous slide"
        >
          <Icon
            icon="mdi:chevron-left"
            className="text-gray-700 dark:text-white text-2xl md:text-3xl"
          />
        </button>

        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white dark:bg-dark-gray border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Next slide"
        >
          <Icon
            icon="mdi:chevron-right"
            className="text-gray-700 dark:text-white text-2xl md:text-3xl"
          />
        </button>

        {/* White Card Background */}
        <div className="bg-white dark:bg-dark-gray rounded-3xl md:rounded-[40px] p-4 md:p-8 shadow-xl border border-primary/20 bg-gradient-to-br from-white via-primary/5 to-white dark:from-dark-gray dark:via-primary/10 dark:to-dark-gray">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={filteredItems.length > 1}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full"
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={`${item.type}-${item.id}`}>
                <Link href={item.link || "#"} className="opacity-100">
                  <motion.div className="rounded-2xl overflow-hidden cursor-pointer group">
                    <div className="grid md:grid-cols-1 gap-6 md:gap-10">
                      <div className="flex flex-col justify-center items-center">
                        {/* Title */}
                        <h3 className="text-2xl md:text-4xl font-[BelfastMedium] text-main-dark dark:text-white mb-4 leading-tight">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-center dark:text-gray-300 font-Poppins text-sm md:text-base mb-6">
                          {item.short_des}
                        </p>
                      </div>

                      {/* Image Section */}
                      <div className="relative md:aspect-[16/9] md:w-[70%] aspect-[4/3] w-full mx-auto rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={item.img_url}
                          alt={item.title}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (swiperInstance) {
                    swiperInstance.slideToLoop(index);
                  }
                }}
                className={`h-1 transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? "w-8 bg-primary dark:bg-primary"
                    : "w-2 bg-gray-300 dark:bg-white/40 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceProjectsCarousel;
