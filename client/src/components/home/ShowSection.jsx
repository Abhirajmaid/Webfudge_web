import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const ShowSection = () => {
  return (
    <>
      <div className="mt-[100px] w-full relative ">
        <motion.video
          className="w-full rounded-t-[160px] card-shadow dark:border-none"
          muted
          autoplay="autoploay"
          poster=""
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <source src="video/Final Comp.mp4" type="video/mp4" />
          <source src="video/Final Comp.3gpp" type="video/3gpp" />
        </motion.video>
        <motion.div
          className=" h-[230px] bg-white rounded-full w-[230px] border-solid border-[6px]  flex justify-center items-center border-gray cursor-pointer absolute -top-[70px] right-[80px] "
          variants={{
            hidden: { opacity: 0, rotate: "0deg" },
            visible: { opacity: 1, rotate: "360deg" },
          }}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
        >
          <Image
            src="/images/arrow.png"
            width={75}
            height={78}
            alt="Webfudge arrow"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ShowSection;
