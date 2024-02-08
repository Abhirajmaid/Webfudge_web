"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const SingleClientPage = ({ client }) => {
  return (
    <>
      <div className="flex items-center justify-between md:mb-[50px] mb-[30px] md:mt-[80px] mt-[50px]">
        <h1 className=" uppercase md:text-[3vw] text-[6vw] font-[BelfastMedium] underline underline-offset-8 ">
          {client.title}
        </h1>
        <p>{client?.date}</p>
        <button className="btn w-[20%] !rounded-none md:text-[1vw] text-sm py-2 px-2  md:px-4 md:w-[10%] dark:bg-white bg-black text-white dark:text-black font-bold font-Poppins tracking-widest uppercase">
          LIVE
        </button>
      </div>
      <Image
        src={client?.img_url}
        width={1920}
        height={1080}
        className="w-full md:h-[700px] h-[400px] object-cover mb-[50px]"
      />
      <div className="flex md:flex-row flex-col gap-10 justify-between">
        <div className="md:w-[40%] text-[1.5vw] flex flex-col gap-[50px] ">
          <div className="flex flex-col gap-[20px]">
            <h2 className="md:text-4xl text-[5.4vw]">Key Highlights:</h2>
            <div className="flex flex-wrap md:gap-5 gap-3 justify-between">
              {client.key_highlights.map((item) => {
                return (
                  <div className="w-[48%] bg-primary md:p-[20px] p-[15px] flex items-center font-[BelfastMedium] uppercase text-center justify-center md:text-base text-xs text-white">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="md:text-4xl text-[5.4vw]">Services:</h2>
            <div className="flex gap-[2px] flex-wrap w-full">
              {client.services_offered?.map((item) => {
                return (
                  <>
                    <span className="font-Poppins text-xl tracking-wide">
                      {item}
                    </span>
                    <Icon icon="ci:line-l" width="24" />
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="md:text-4xl text-[5.4vw]">Introduction:</h2>
            <p className="md:text-xl text-base tracking-wide font-[BelfastMedium] opacity-100 text-justify">
              {client.introduction}
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="md:text-4xl text-[5.4vw] ">Solution:</h2>
            <p className="md:text-xl text-base tracking-wide font-[BelfastMedium] opacity-100 text-justify">
              {client.solution_offered}
            </p>
          </div>
        </div>
        <div className="md:w-[57%]">
          <div className="flex gap-10 flex-col w-full">
            {client?.project_imgs?.map((item) => {
              return (
                <Image
                  className="w-full object-cover"
                  src={item}
                  width={1920}
                  height={1080}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClientPage;
