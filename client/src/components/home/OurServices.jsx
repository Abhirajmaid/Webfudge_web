import React from "react";
import { Service } from "@src/components/common";

const ServicesList = [
  "Social Media Marketing",
  "Paid Advertising",
  "Web Design & Development",
  "Search Engine Optimization (SEO)",
  "Brand Design",
];

const OurServices = () => {
  return (
    <div className="mt-[275px] border-y-4 border-[#252525]">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="!text-[6vw] tracking-tighter uppercase align-middle">
          Our Services <span className="text-[#D71EB9] !text-[8vw]">.</span>
        </h2>
        <p className="font-Poppins text-[1vw] w-[50%] text-gray">
          Every ono of us loves sot-nothing different. So. exgsore the world
          through the lens of our visual capabilities, and find what you love
        </p>
      </div>
      {ServicesList.map((item) => {
        return <Service service={item} />;
      })}
    </div>
  );
};

export default OurServices;
