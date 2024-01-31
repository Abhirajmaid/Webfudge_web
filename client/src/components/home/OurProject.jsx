import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { clients } from "../../data/clients";
import { ClientCard } from "../common";
import { useAnimation, useInView, motion } from "framer-motion";

const ProjectFields = ["Design", "Development", "SMM", "SEO"];

const OurProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <motion.div
        className="mt-[100px]"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="!text-[6vw] tracking-tighter uppercase align-middle">
            Best Project <span className="text-[#D71EB9] !text-[8vw]">.</span>
          </h2>
          <p className="font-Poppins text-[1vw] w-[30%]">
            Croativo fuels design. design fuels creativity, be here for more,
            are you in love with a creative?
          </p>
          <div className="mt-[10px] flex gap-3">
            {ProjectFields?.map((item) => {
              return (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  // transition={{ type: "spring" }}
                  className=" btn border-[2px] !py-3 !rounded-full border-solid dark:border-[#494949] dark:text-[#5e5e5e] border-[#727272] text-[#727272] flex items-center gap-2 font-Poppins !capitalize dark:hover:text-[#8f8f8f] dark:hover:border-[#8f8f8f] hover:text-[#191919] hover:border-[#191919] "
                >
                  <Icon icon="mdi:web" width="24" />
                  {item}
                </motion.button>
              );
            })}
          </div>
        </div>
        <div className=" w-[100%] flex flex-wrap gap-10 justify-between">
          {clients?.slice(0, 6)?.map((item, i) => {
            return (
              <motion.div
                className="w-[31%]"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 0,
                  },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                  ease: "easeInOut",
                  type: "tween",
                }}
                layout
              >
                <ClientCard data={item} />
              </motion.div>
            );
          })}
          <button className=" btn border-[2px] !py-3 !rounded-full border-solid dark:border-[#494949] dark:text-[#5e5e5e] border-[#727272] text-[#727272] flex items-center gap-2 font-Poppins !capitalize dark:hover:text-[#8f8f8f] dark:hover:border-[#8f8f8f] hover:text-[#191919] hover:border-[#191919] ">
            <Icon icon="mdi:web" width="24" />
            See More...
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default OurProject;
