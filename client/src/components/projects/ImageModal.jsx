"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useLeadForm } from "@src/context/LeadFormContext";

const ImageModal = ({ visible, onClose, images, currentIndex, onNavigate }) => {
  const { openModal: openContactModal } = useLeadForm();
  
  // Only show first 2 images, then add contact slide
  const MAX_VISIBLE_IMAGES = 2;
  const visibleImages = images?.slice(0, MAX_VISIBLE_IMAGES) || [];
  const hasMoreImages = images && images.length > MAX_VISIBLE_IMAGES;
  const totalSlides = hasMoreImages ? visibleImages.length + 1 : visibleImages.length;
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!visible) return;
      const clampedIndex = Math.min(currentIndex, totalSlides - 1);
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && clampedIndex > 0) {
        onNavigate(clampedIndex - 1);
      } else if (e.key === "ArrowRight" && clampedIndex < totalSlides - 1) {
        onNavigate(clampedIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, currentIndex, totalSlides, onClose, onNavigate]);

  if (!visible || !images || images.length === 0) return null;

  // Clamp currentIndex to valid range
  const clampedIndex = Math.min(currentIndex, totalSlides - 1);
  const isContactSlide = hasMoreImages && clampedIndex === visibleImages.length;
  const currentImage = isContactSlide ? null : visibleImages[clampedIndex];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <Icon icon="mdi:close" className="text-white text-2xl" />
            </button>

            {/* Previous Button */}
            {clampedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(clampedIndex - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <Icon icon="mdi:chevron-left" className="text-white text-3xl" />
              </button>
            )}

            {/* Next Button */}
            {clampedIndex < totalSlides - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(clampedIndex + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <Icon
                  icon="mdi:chevron-right"
                  className="text-white text-3xl"
                />
              </button>
            )}

            {/* Image or Contact Slide */}
            <div className="relative w-full h-full flex items-center justify-center">
              {isContactSlide ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 border-2 border-primary/50 dark:border-primary/70 rounded-lg p-8 md:p-12 flex flex-col items-center justify-center gap-4 max-w-md w-full mx-4"
                >
                  <Icon
                    icon="mdi:lock"
                    className="text-primary text-5xl md:text-6xl mb-2"
                  />
                  <h3 className="text-xl md:text-2xl font-[BelfastMedium] text-primary dark:text-white uppercase tracking-wider text-center">
                    Contact us for full overview
                  </h3>
                  <p className="text-sm md:text-base font-Poppins text-gray dark:text-gray-300 text-center">
                    Get access to all project images and detailed information
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onClose();
                      openContactModal();
                    }}
                    className="mt-2 px-6 py-3 bg-primary text-white font-Poppins font-semibold rounded-lg uppercase tracking-wider hover:bg-primary/90 transition-colors"
                  >
                    Get in Touch
                  </motion.button>
                </motion.div>
              ) : (
                <Image
                  src={currentImage}
                  alt={`Project image ${currentIndex + 1}`}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                  priority
                />
              )}
            </div>

            {/* Image Counter */}
            {totalSlides > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-Poppins text-sm">
                  {clampedIndex + 1} / {totalSlides}
                </span>
              </div>
            )}

            {/* Thumbnail Navigation */}
            {totalSlides > 1 && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
                {visibleImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(index);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === clampedIndex
                        ? "border-primary scale-110"
                        : "border-white/30 hover:border-white/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                {hasMoreImages && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(visibleImages.length);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 ${
                      isContactSlide
                        ? "border-primary scale-110"
                        : "border-white/30 hover:border-white/50"
                    }`}
                  >
                    <Icon
                      icon="mdi:lock"
                      className="text-primary text-2xl"
                    />
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;


