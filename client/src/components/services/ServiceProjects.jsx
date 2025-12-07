"use client";

import React, { useMemo, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
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
      "Logo Design",
      "Brand Identity Design",
    ],
    "Logo Design": ["Logo Design", "Brand Identity", "Brand Identity Design"],
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
    "Custom Software Development": [
      "Software Development",
      "Full-Stack Development",
      "Custom Software",
      "Full-Stack Development",
      "API Development",
    ],
  };

  // Return all possible matches for the service, including the title itself
  const matches = serviceMapping[serviceTitle] || [serviceTitle];
  // Also add the service title itself to the matches
  if (!matches.includes(serviceTitle)) {
    matches.push(serviceTitle);
  }
  return matches;
};

// Filter projects based on service
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

// Simplified ClientCardMain without description and services offered
const ClientCardMainSimple = ({ data }) => {
  const [hide, setHide] = useState(false);
  return (
    <div className="w-full flex flex-col gap-5">
      <Link href={`/our-work/${data.id}`} className="opacity-100">
        <div
          className="relative w-full cursor-pointer"
          onMouseEnter={() => setHide(true)}
          onMouseLeave={() => setHide(false)}
        >
          <Image
            src={data?.img_url}
            width={2000}
            height={2000}
            loading="lazy"
            className="w-full md:h-[600px] h-[300px] object-cover"
            alt={`webfudge ${data?.title}`}
          />
          {hide ? (
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000099] flex items-center justify-center">
              <div className="animate-spin-slow duration-700">
                <Image
                  src="/images/curvedtext2.png"
                  width={150}
                  height={150}
                  alt="Webfudge arrow"
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex gap-4 w-full items-center cursor-pointer mt-5">
          <h1 className="md:text-[2vw] text-[5.5vw] uppercase font-[BelfastMedium] font-semibold text-gray">
            {data.title}
          </h1>
          <Image
            src="/images/Arrow 3.png"
            width={500}
            height={550}
            className="md:w-[180px] md:h-[40px] w-[25%] h-[30px]"
            alt="arrow"
          />
        </div>
      </Link>
    </div>
  );
};

// Wrapper component for software projects to work with ClientCardMain style
const ProjectCardWrapper = ({ data }) => {
  // Convert software project to client-like structure for ClientCardMain
  const clientData = {
    id: data.id,
    title: data.title,
    img_url: data.img_url,
    short_des: data.short_des,
    services_offered: data.services_offered || [],
    slug: data.slug,
    linkType: "project",
  };

  // We need to modify ClientCardMain to handle project links, or create a custom version
  // For now, let's create a custom card that matches ClientCardMain style but links to /projects
  return (
    <div className="w-full flex flex-col gap-5">
      <Link href={`/projects/${data.slug}`} className="opacity-100">
        <div className="relative w-full cursor-pointer group">
          <Image
            src={data?.img_url || "/images/placeholder.png"}
            width={2000}
            height={2000}
            loading="lazy"
            className="w-full md:h-[600px] h-[300px] object-cover"
            alt={`webfudge ${data?.title}`}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000099] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="animate-spin-slow duration-700">
              <Image
                src="/images/curvedtext2.png"
                width={150}
                height={150}
                alt="Webfudge arrow"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full items-center cursor-pointer mt-5">
          <h1 className="md:text-[2vw] text-[5.5vw] uppercase font-[BelfastMedium] font-semibold text-gray">
            {data.title}
          </h1>
          <Image
            src="/images/Arrow 3.png"
            width={500}
            height={550}
            className="md:w-[180px] md:h-[40px] w-[25%] h-[30px]"
            alt="arrow"
          />
        </div>
      </Link>
    </div>
  );
};

const ServiceProjects = ({ service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const allProjects = getAllProjects();
  const allClients = clients;

  // Filter projects and clients, then combine and get 2 random projects
  const filteredProjects = useMemo(() => {
    if (!service || !service.title) {
      return [];
    }

    // Filter both software projects and clients (which are also projects)
    const filteredSoftwareProjects = filterByService(allProjects, service);
    const filteredClients = filterByService(allClients, service);

    // Combine and format for display
    // Clients already have the right structure for ClientCardMain
    // Software projects need to be converted to match client structure
    const combined = [
      ...filteredClients.map((client) => ({
        ...client,
        // Clients link to /our-work/${id}
        linkType: "client",
      })),
      ...filteredSoftwareProjects.map((project) => ({
        ...project,
        // Software projects need to be adapted for ClientCardMain
        linkType: "project",
        slug: project.slug || `project-${project.id}`,
      })),
    ];

    // Shuffle array randomly and get 2 random projects
    const shuffled = [...combined].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }, [service, allProjects, allClients]);

  return (
    <motion.div
      ref={ref}
      className="md:my-20 my-12 px-[3%]"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7 }}
    >
      {/* Header Section */}
      {/* <motion.div
        className="mb-8 md:mb-12"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex flex-col gap-2">
          <h2 className="md:text-[4vw] text-[6vw] md:leading-[0.8] leading-8 tracking-tighter uppercase align-middle dark:text-white text-main-dark">
            <span className="bg-white bg-clip-text text-transparent">
              {service.title}
            </span>{" "}
            <br /> That drives results{" "}
            <span className="text-[#D71EB9] !text-[6vw]">.</span>
          </h2>
          <p className="font-Poppins md:text-[1.3vw] md:leading-6 leading-4 md:mt-6 mt-3 text-xs w-[65%] text-gray dark:text-gray-300">
            Explore our portfolio of successful projects where we've delivered
            exceptional results using our expertise in this service.
          </p>
        </div>
      </motion.div> */}

      {/* Projects List - Grid Layout like our-work page */}
      {filteredProjects && filteredProjects.length > 0 ? (
        <motion.div
          className="flex md:flex-row flex-col w-full gap-8 gap-y-16"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={mainControls}
        >
          {filteredProjects.map((item, index) => (
            <motion.div
              key={item.id}
              className="md:w-[calc(50%-16px)] w-full flex-1"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.linkType === "client" ? (
                <ClientCardMainSimple data={item} />
              ) : (
                <ProjectCardWrapper data={item} />
              )}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
        >
          <p className="text-gray-600 dark:text-gray-400 font-Poppins">
            No projects found for this service.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceProjects;
