"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TeamCard = ({ data }) => {
  const router = useRouter();
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative md:h-[650px] md:w-[30%] w-[80%] h-[400px] rounded-xl bg-gradient-to-br from-primary to-blue-400 cursor-pointer md:mt-20 mt-10"
      onClick={() => router.push(`/team/${data.nameID}`)}
    >
      <Image
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        width={1000}
        height={500}
        src={data.image}
        className="absolute inset-4 grid rounded-xl bg-white shadow-lg h-full object-cover grayscale"
      />
      <div
        className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-black bg-opacity-50 text-white z-10 backdrop-blur-sm"
        style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
      >
        <h3 className="text-lg font-semibold">{data.name}</h3>
        <p className="text-sm">{data.position}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
