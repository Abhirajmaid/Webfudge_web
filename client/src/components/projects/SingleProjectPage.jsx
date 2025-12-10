"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";
import { useLeadForm } from "@src/context/LeadFormContext";

const SingleProjectPage = ({ project }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { openModal: openContactModal } = useLeadForm();

  // Number of images to show (first 2)
  const MAX_VISIBLE_IMAGES = 2;

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const navigateImage = (index) => {
    setSelectedImageIndex(index);
  };

  function FadeImage({ src, alt, className, onClick }) {
    const [loaded, setLoaded] = useState(false);

    return (
      <div
        className={`w-full ${className} cursor-pointer group relative overflow-hidden rounded-md`}
        onClick={onClick}
      >
        <Image
          src={src}
          width={2000}
          height={2000}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover rounded-md shadow-sm transition-all duration-300 ease-in group-hover:scale-105 group-hover:shadow-lg ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-md flex items-center justify-center pointer-events-none">
          <Icon
            icon="mdi:fullscreen"
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-3xl"
          />
        </div>
      </div>
    );
  }

  if (!project) return null;

  return (
    <>
      <div
        className="flex items-center justify-between md:mb-[50px] mb-[30px] md:mt-[80px] mt-[50px]"
        key={project.id}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 bg-primary text-white text-sm font-Poppins rounded-full">
              {project.category}
            </span>
            <span className="px-4 py-2 bg-dark-gray text-white text-sm font-Poppins rounded-full">
              {project.type}
            </span>
          </div>
          <h1 className="uppercase md:text-[3vw] text-[6vw] font-[BelfastMedium] underline underline-offset-8 text-white">
            {project.title}
          </h1>
        </div>
        <p className="text-gray-400">{project?.date}</p>
        {project?.link && (
          <Link
            href={project.link}
            target="_blank"
            className="btn w-[20%] !rounded-none md:text-[1vw] text-sm py-2 px-2 md:px-4 md:w-[10%] bg-white text-black font-bold font-Poppins tracking-widest uppercase"
          >
            <button className="w-full">LIVE</button>
          </Link>
        )}
      </div>

      {project.img_url && (
        <Image
          src={project?.img_url}
          width={1920}
          height={1080}
          className="w-full md:w-full aspect-16/9 object-cover mb-[50px] rounded-lg"
          alt={`webfudge - ${project.title}`}
        />
      )}

      <div className="flex md:flex-row flex-col gap-10 justify-between">
        <div className="md:w-[40%] text-[1.5vw] flex flex-col gap-[50px] md:sticky md:top-[100px] h-fit">
          {/* Key Highlights */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="md:text-4xl text-[5.4vw] font-[BelfastMedium] text-white">
              Key Highlights:
            </h2>
            <div className="flex flex-wrap md:gap-5 gap-3 justify-between">
              {project.key_highlights.map((item, i) => {
                return (
                  <div
                    className="w-[48%] bg-primary md:p-[15px] p-[15px] flex items-center font-[BelfastMedium] uppercase text-center justify-center md:text-sm text-xs text-white rounded-lg"
                    key={i}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-col gap-[20px]">
              <h2 className="md:text-4xl text-[5.4vw] font-[BelfastMedium] text-white">
                Technologies:
              </h2>
              <div className="flex gap-[2px] flex-wrap w-full">
                {project.technologies.map((tech, i) => {
                  return (
                    <React.Fragment key={tech}>
                      <span className="font-Poppins text-lg tracking-wide text-white">
                        {tech}
                      </span>
                      {i < project.technologies.length - 1 && (
                        <Icon icon="ci:line-l" width="24" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}

          {/* Services */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="md:text-4xl text-[5.4vw] font-[BelfastMedium] text-white">
              Services:
            </h2>
            <div className="flex gap-[2px] flex-wrap w-full">
              {project.services_offered?.map((item, i) => {
                return (
                  <React.Fragment key={item}>
                    <span className="font-Poppins text-lg tracking-wide text-white">
                      {item}
                    </span>
                    {i < project.services_offered.length - 1 && (
                      <Icon icon="ci:line-l" width="24" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          {project.stats && (
            <div className="flex flex-col gap-[20px]">
              <h2 className="md:text-4xl text-[5.4vw] font-[BelfastMedium] text-white">
                Project Stats:
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-dark-gray p-4 rounded-lg"
                  >
                    <div className="text-2xl md:text-3xl font-[BelfastMedium] font-bold text-primary mb-1">
                      {value}
                    </div>
                    <div className="text-sm font-Poppins text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Introduction */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="md:text-4xl text-[5.4vw] font-[BelfastMedium] text-white">
              Introduction:
            </h2>
            <p className="md:text-lg text-base tracking-wide font-Poppins opacity-100 text-justify text-gray-300">
              {project.introduction}
            </p>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="md:text-4xl text-[5.4vw] font-[BelfastMedium] text-white">
              Solution:
            </h2>
            <p className="md:text-lg text-base tracking-wide font-Poppins opacity-100 text-justify text-gray-300">
              {project.solution_offered}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="flex flex-col gap-[20px]">
              <h2 className="md:text-4xl text-[5.4vw] font-[BelfastMedium] text-white">
                Key Features:
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-dark-gray rounded-lg"
                  >
                    <Icon
                      icon="mdi:check-circle"
                      className="text-primary text-xl flex-shrink-0"
                    />
                    <span className="font-Poppins text-base text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Project Images */}
        <div className="md:w-[57%] w-full">
          <div
            className={`w-full grid grid-cols-2 ${
              project?.singleColumnDesktop ? "lg:grid-cols-1" : "lg:grid-cols-6"
            } gap-4`}
          >
            {/* Show only first 2 images */}
            {project?.project_imgs
              ?.slice(0, MAX_VISIBLE_IMAGES)
              .map((item, i) => {
                const total = project.project_imgs.length;
                const isSingleImage = total === 1;
                const isLastEvenImage = total % 2 === 0 && i === total - 1;

                const getColSpan = () => {
                  if (isSingleImage) return "col-span-2 lg:col-span-6";
                  if (isLastEvenImage) return "col-span-2 lg:col-span-6";
                  if (project?.singleColumnDesktop)
                    return "col-span-2 lg:col-span-6";
                  if (i % 7 === 0) return "col-span-2 lg:col-span-6";
                  if (i % 7 === 1 || i % 7 === 2) return "lg:col-span-6";
                  return "lg:col-span-6";
                };

                return (
                  <div key={i} className={`relative ${getColSpan()}`}>
                    <FadeImage
                      src={item}
                      alt={`${project.title} - ${i}`}
                      className=""
                      onClick={() => openModal(i)}
                    />
                  </div>
                );
              })}

            {/* Contact Button - Show only if there are more than 2 images */}
            {project?.project_imgs &&
              project.project_imgs.length > MAX_VISIBLE_IMAGES && (
                <div className="col-span-2 lg:col-span-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={openContactModal}
                    className="w-full cursor-pointer bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/70 rounded-md p-8 md:p-12 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Icon
                      icon="mdi:lock"
                      className="text-primary text-5xl md:text-6xl mb-2"
                    />
                    <h3 className="text-xl md:text-2xl font-[BelfastMedium] text-white uppercase tracking-wider text-center">
                      Contact us for full overview
                    </h3>
                    <p className="text-sm md:text-base font-Poppins text-gray-300 text-center">
                      Get access to all project images and detailed information
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 px-6 py-3 bg-primary text-white font-Poppins font-semibold rounded-lg uppercase tracking-wider hover:bg-primary/90 transition-colors"
                    >
                      Get in Touch
                    </motion.button>
                  </motion.div>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        visible={modalVisible}
        onClose={closeModal}
        images={project.project_imgs || []}
        currentIndex={selectedImageIndex}
        onNavigate={navigateImage}
      />
    </>
  );
};

export default SingleProjectPage;
