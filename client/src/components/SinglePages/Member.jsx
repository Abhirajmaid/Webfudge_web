"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Member = ({ name, about, image, socials, role }) => {
  return (
    <div className="md:h-[50vw] flex md:flex-row items-center justify-center flex-col mt-9 md:mt-0">
      <div className="flex-col flex md:gap-5 gap-3">
        <motion.h1
          className="md:text-[2.7vw] text-[7vw]"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          {name}
        </motion.h1>
        <motion.span
          className="font-[BelfastMedium] md:text-[1.2vw] text-[3.3vw] "
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          {role}
        </motion.span>
        <motion.p
          className="md:text-[1vw] text-[2.5vw] font-Poppins md:w-[60%] w-[80%]"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          {about}
        </motion.p>
        <motion.div
          className="flex gap-5 mt-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          {socials.map((item) => {
            return (
              <Link href={item.url} target="_blank">
                <Icon
                  icon={`bi:${item.platform}`}
                  width={30}
                  height={30}
                  className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
                />
              </Link>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        className="w-fit h-fit card-shadow rounded-xl overflow-hidden mt-8 md:mt-0"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <Image
          src={image}
          width={1080}
          height={1080}
          className=" md:w-[800px] md:h-[700px] w-full h-[500px] object-cover card-shadow "
        />
      </motion.div>
    </div>
  );
};

export default Member;
