import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blogs } from "@src/data/articles";

const CoverSection = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center mt-[80px]">
        <Image
          src="/images/universe_1.jpg"
          width={200}
          height={200}
          className="w-full h-[500px] object-fit "
        />
        <h1 className="text-[1.5vw] text-center tracking-wider">
          {blogs[1].title}
        </h1>
      </div>
    </>
  );
};

export default CoverSection;
