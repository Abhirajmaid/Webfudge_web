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

  const glowingTextStyle = {
    WebkitTextStroke: "1px rgba(211, 5, 177, 0.3)",
    textStroke: "1px rgba(211, 5, 177, 0.3)",
    textShadow: `
      0 0 10px rgba(211, 5, 177, 0.3),
      0 0 20px rgba(211, 5, 177, 0.3),
      0 0 30px rgba(211, 5, 177, 0.2),
      0 0 40px rgba(211, 5, 177, 0.1)
    `,
  };

  return (
    <>
      <div className="relative flex justify-center items-center w-full h-[100vh] bg-main-dark overflow-hidden">
        {/* Top Left Gradient */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary via-primary/20 to-transparent rounded-br-full blur-3xl"></div>

        {/* Bottom Left Gradient */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary via-primary/20 to-transparent rounded-tr-full blur-3xl"></div>

        <div ref={scope} className="w-auto pt-8 relative z-10">
          <motion.div
            className="w-full md:text-[140px] text-[52px] text-white"
            id="parent"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            onAnimationComplete={() => hanndleAnimate()}
            style={glowingTextStyle}
          >
            <motion.span
              variants={defaultAnimations}
              className="inline-block"
              style={glowingTextStyle}
            >
              W
            </motion.span>
            <motion.span
              variants={defaultAnimations}
              className="inline-block"
              style={glowingTextStyle}
            >
              E
            </motion.span>
            <motion.span
              variants={defaultAnimations}
              className="inline-block"
              style={glowingTextStyle}
            >
              B
            </motion.span>
            <motion.span
              variants={defaultAnimations}
              className="inline-block"
              style={glowingTextStyle}
            >
              F
            </motion.span>
            <motion.span
              variants={defaultAnimations}
              className="inline-block"
              style={glowingTextStyle}
            >
              U
            </motion.span>
            <motion.span
              variants={defaultAnimations}
              className="inline-block"
              style={glowingTextStyle}
            >
              D
            </motion.span>
            <motion.span
              variants={defaultAnimations}
              className="inline-block"
              style={glowingTextStyle}
            >
              G
            </motion.span>
            <motion.span
              variants={defaultAnimations}
              className="inline-block"
              style={glowingTextStyle}
            >
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
