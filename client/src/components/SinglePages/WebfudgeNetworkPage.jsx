import React from "react";
import { Accordion } from "@src/components/common";
import Image from "next/image";

const WebfudgeNetworkPage = ({ WebfudgeNetworkData }) => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="md:text-[2vw] text-[7vw] tracking-tight capitalize align-middle">
            Webfudge Network & Partnerships
          </h1>
          <p className=" font-Poppins md:text-[1vw] text-[2.5vw] w-[70%] ">
            Our partner companies like SchbangQ, 88GB, Spek Digital and Django
            Digital cater to unique market needs.
          </p>
          <div className="flex flex-wrap md:gap-3 justify-between my-7">
            {WebfudgeNetworkData.map((item) => {
              return (
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={320}
                  className="object-cover dark:grayscale md:w-[200px] w-[150px]"
                />
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Accordion title="Networks Detail" data={WebfudgeNetworkData} />
        </div>
      </div>
    </>
  );
};

export default WebfudgeNetworkPage;
