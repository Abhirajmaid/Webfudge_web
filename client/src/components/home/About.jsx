import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className=" p-[160px] text-justify leading-[100px] tracking-tight dark:bg-dark-light bg-gray  mt-[100px] font-[BelfastMedium] text-[5vw] ">
        <h3>
          A CREATIVE{" "}
          <Image
            src="/images/abstract.png"
            width={120}
            height={10}
            className="w-[27%] h-[75px] rounded-full inline mb-[15px]"
          />{" "}
          MIND KNOWS{" "}
          <Image
            src="/images/abstract_1.png"
            width={120}
            height={10}
            className="w-[14%] h-[75px] rounded-full inline mb-[10px]"
          />{" "}
          HOW TO DO THE{" "}
          <Image
            src="/images/arrow_img.svg"
            width={12}
            height={75}
            className="w-[13%] h-[95px] rounded-full inline mb-[10px]"
          />{" "}
          RIGHT THING AT THE RIGHT PLACE{" "}
          <Image
            src="/images/abstract_1.png"
            width={125}
            height={75}
            className="w-[15%] h-[75px] rounded-full inline mb-[20px]"
          />{" "}
          AND AT THE RIGHT TIME
        </h3>
      </div>
    </>
  );
};

export default About;
