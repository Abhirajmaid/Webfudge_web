"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ClientCard = ({ data }) => {
  const [hide, setHide] = useState(false);

  const router = useRouter();

  return (
    <>
      <motion.div
        className="group relative w-full h-[350px] cursor-pointer overflow-hidden hover:rounded-br-[90px] transition-a"
        onMouseEnter={() => setHide(true)}
        onMouseLeave={() => setHide(false)}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push(`/our-work/${data.id}`)}
        key={data.id}
      >
        <Image
          src={data.img_url}
          width={852}
          height={569}
          className="w-full h-full object-cover"
          alt="Webfudge"
        />
        {hide ? (
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000099] flex justify-between ">
            <div className="flex flex-col gap-3 text-gray ">
              <h3 className="font-[BelfastMedium] md:text-[2.5vw] text-[7vw] capitalize w-[50%] md:leading-[50px] leading-[30px] text-[#e6e4e4] pl-8 pt-3">
                {data.title}
              </h3>
              <span className="font-[BelfastMedium] pl-8 md:text-[1vw]">
                2022
              </span>
            </div>
            <div className="w-[80px] h-[80px] bg-primary flex items-center justify-center">
              <Image
                src="/images/arrow_dark.png"
                width={50}
                height={50}
                alt="arrow"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </motion.div>
    </>
  );
};

export default ClientCard;
