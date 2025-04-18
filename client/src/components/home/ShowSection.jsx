// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// const ShowSection = () => {
//   return (
//     <>
//       <div className="mt-[100px] w-full relative ">
//         <motion.video
//           className="w-full md:rounded-t-[160px] rounded-t-[40px] card-shadow dark:border-none"
//           muted
//           autoPlay
//           poster=""
//           variants={{
//             hidden: { opacity: 0, scale: 0 },
//             visible: { opacity: 1, scale: 1 },
//           }}
//           initial="hidden"
//           animate="visible"
//           transition={{ ease: "easeInOut", duration: 0.5 }}
//         >
//           <source src="video/Final Comp.mp4" type="video/mp4" />
//           <source src="video/Final Comp.3gpp" type="video/3gpp" />
//         </motion.video>
//         <Link
//           href="/video/Final Comp.mp4"
//           target="_blank"
//           className=" opacity-100"
//         >
//           <motion.div
//             className="md:flex hidden md:h-[230px] h-[100px] bg-white rounded-full md:w-[230px] w-[100px] border-solid md:border-[6px] border-[4px] justify-center items-center border-gray cursor-pointer absolute md:-top-[70px] -top-[50px] right-[80px] "
//             variants={{
//               hidden: { opacity: 0, rotate: "0deg" },
//               visible: { opacity: 1, rotate: "360deg" },
//             }}
//             initial="hidden"
//             animate="visible"
//             transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
//           >
//             <Image
//               src="/images/arrow.png"
//               width={75}
//               height={78}
//               alt="arrow"
//               className="w-10 md:w-[75px]"
//             />
//           </motion.div>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default ShowSection;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clients } from "@src/data/clients";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";

const ClientShowcase = () => {
  return (
    <div className="mt-[100px] w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={50}
        pagination={{ clickable: false }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full !overflow-hidden"
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="relative md:h-[800px] h-[450px] rounded-t-[40px] md:rounded-t-[160px] card-shadow overflow-visible">
              <motion.div
                className="w-full relative h-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                <Image
                  src={client.img_url}
                  alt={client.title}
                  width={1920}
                  height={1080}
                  className="w-full object-cover h-full md:rounded-t-[160px] rounded-t-[40px]"
                />
              </motion.div>
              <Link
                href={`/our-work/${client.id}`}
                target="_blank"
                className="!opacity-100 !overflow-visible"
              >
                <motion.div
                  className="z-50 md:flex hidden md:h-[230px] h-[100px] bg-white rounded-full md:w-[230px] w-[100px] border-solid md:border-[6px] border-[4px] justify-center items-center border-gray cursor-pointer absolute md:top-0 top-0 right-0 drop-shadow-lg"
                  variants={{
                    hidden: { opacity: 1, rotate: "0deg" },
                    visible: { opacity: 1, rotate: "360deg" },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.6,
                  }}
                >
                  <Image
                    src="/images/arrow.png"
                    width={75}
                    height={78}
                    alt="arrow"
                    className="w-10 md:w-[75px]"
                  />
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientShowcase;
