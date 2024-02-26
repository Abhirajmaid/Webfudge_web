"use client";
import { easeInOut, motion, useAnimate } from "framer-motion";
import React from "react";

const LoadingScreen = ({ setLoading }) => {
  const [scope, animate] = useAnimate();

  const hanndleAnimate = async () => {
    await animate("#parent", { y: 0 }, { duration: 0.5 });
    await animate(
      "#parent",
      { scale: 160 },
      { duration: 1.5, ease: easeInOut }
    );
    await setLoading(false);
  };

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh] bg-primary overflow-hidden">
        <div ref={scope} className="w-auto pt-8">
          <motion.div
            className="w-full md:text-[140px] text-6xl text-main-dark"
            id="parent"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            onAnimationComplete={() => hanndleAnimate()}
          >
            <motion.span variants={defaultAnimations} className="inline-block">
              W
            </motion.span>
            <motion.span variants={defaultAnimations} className="inline-block">
              E
            </motion.span>
            <motion.span variants={defaultAnimations} className="inline-block">
              B
            </motion.span>
            <motion.span variants={defaultAnimations} className="inline-block">
              F
            </motion.span>
            <motion.span variants={defaultAnimations} className="inline-block">
              U
            </motion.span>
            <motion.span variants={defaultAnimations} className="inline-block">
              D
            </motion.span>
            <motion.span variants={defaultAnimations} className="inline-block">
              G
            </motion.span>
            <motion.span variants={defaultAnimations} className="inline-block">
              E
            </motion.span>
          </motion.div>
        </div>
      </div>
    </>
    // <>LoadingScreen</>
  );
};

export const AnimateText = ({ text }) => {
  return (
    <span>
      {text.split("").map((char) => {
        console.log(char);
        <span className="text-8xl text-black">{char}</span>;
      })}
    </span>
  );
};
export default LoadingScreen;
