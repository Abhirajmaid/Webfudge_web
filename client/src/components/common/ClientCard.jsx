"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ClientCard = ({ data }) => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <Link href={`/our-work/${data.id}`}>
        <motion.div
          className="group relative w-full h-[350px] cursor-pointer overflow-hidden hover:rounded-br-[90px] transition-a"
          onMouseEnter={() => setHide(true)}
          onMouseLeave={() => setHide(false)}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={data.img_url}
            blurDataURL={data.img_url.blurhashDataUrl}
            width={852}
            height={569}
            className="w-full h-full object-cover"
          />
          {hide ? (
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000099] flex justify-between ">
              <div className="flex flex-col gap-3 text-gray ">
                <h3 className="font-[BelfastMedium] text-[2.5vw] capitalize w-[50%] leading-[50px] text-[#e6e4e4] pl-8 pt-3">
                  {data.title}
                </h3>
                <span className="font-[BelfastMedium] pl-8 text-[1vw]">
                  2022
                </span>
              </div>
              <div className="w-[80px] h-[80px] bg-primary flex items-center justify-center">
                <Image
                  src="/images/arrow_dark.png"
                  width={50}
                  height={50}
                  alt="Webfudge arrow"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </motion.div>
      </Link>
    </>
  );
};

export default ClientCard;
