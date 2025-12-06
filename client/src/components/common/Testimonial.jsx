"use client";
import React, { useState, useMemo } from "react";
import { testimonials } from "@src/data/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TestimonialCard = ({ image, reviewText, name, role, rating = 5.0 }) => {
  // Calculate full stars and half star
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="bg-card-dark border broder-white rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col shadow-lg h-[400px] md:h-[450px]">
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-white font-[BelfastMedium] text-lg font-bold">
          {rating.toFixed(1)}
        </span>
        <div className="flex items-center gap-0.5">
          {[...Array(fullStars)].map((_, i) => (
            <Icon key={i} icon="mdi:star" className="text-[#FFD700] text-xl" />
          ))}
          {hasHalfStar && (
            <Icon
              icon="mdi:star-half-full"
              className="text-[#FFD700] text-xl"
            />
          )}
          {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <Icon
              key={i}
              icon="mdi:star-outline"
              className="text-[#FFD700] text-xl opacity-50"
            />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-white font-Poppins text-sm md:text-xl leading-relaxed mb-6 flex-grow overflow-hidden">
        {reviewText}
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="object-contain w-14 h-14 md:w-16 md:h-16"
          />
        </div>
        <div>
          <h4 className="text-white font-[BelfastMedium] font-bold text-sm md:text-base">
            {name}
          </h4>
          <p className="text-gray-400 font-Poppins text-xs md:text-sm">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(3);

  const totalSlides = testimonials.length;
  const totalGroups = useMemo(
    () => Math.ceil(totalSlides / currentItemsPerView),
    [totalSlides, currentItemsPerView]
  );

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    // Update items per view based on breakpoint
    if (swiper.width >= 1024) {
      setCurrentItemsPerView(3);
    } else if (swiper.width >= 640) {
      setCurrentItemsPerView(2);
    } else {
      setCurrentItemsPerView(1);
    }
  };

  const goToSlide = (groupIndex) => {
    if (swiperInstance) {
      const targetSlide = groupIndex * currentItemsPerView;
      swiperInstance.slideTo(targetSlide);
    }
  };

  const getActiveGroupIndex = () => {
    return Math.floor(activeIndex / currentItemsPerView);
  };

  return (
    <div className="md:mt-[100px] mt-[60px] md:px-[6%] px-[3%]">
      <h2 className="md:text-[3vw] text-[7vw] tracking-tighter uppercase align-middle text-center mb-8 md:mb-12 dark:text-white text-main-dark">
        Client Reviews{" "}
        <span className="text-[#D71EB9] md:!text-[4vw] !text-[8vw]">.</span>
      </h2>
      <div className="rounded-3xl md:rounded-[40px] p-2 md:p-8">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          modules={[Autoplay]}
          className="mySwiper w-full"
        >
          {testimonials.map((item, i) => {
            // Assign ratings (you can update this based on actual data)
            const ratings = [5.0, 5.0, 4.5, 5.0, 5.0, 5.0, 5.0];
            return (
              <SwiperSlide key={item.id || i}>
                <TestimonialCard {...item} rating={ratings[i] || 5.0} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Progress Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 transition-all duration-300 ${
                getActiveGroupIndex() === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
