import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const SingleClientPage = ({ client }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-[50px] mt-[80px]">
        <h1 className=" uppercase text-[3vw] font-[BelfastMedium] underline underline-offset-8 ">
          {client.title}
        </h1>
        <p>{client?.date}</p>
        <button className="text-[1vw] py-2 px-4 w-[10%] dark:bg-white bg-black text-white dark:text-black font-bold font-Poppins tracking-widest uppercase">
          LIVE
        </button>
      </div>
      <Image
        src={client?.img_url}
        width={1920}
        height={1080}
        className="w-full h-[700px] object-cover mb-[50px]"
      />
      <div className="flex gap-10 justify-between">
        <div className="w-[40%] text-[1.5vw] flex flex-col gap-[50px] ">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-4xl">Key Highlights:</h2>
            <div className="flex flex-wrap gap-5 justify-between">
              {client.key_highlights.map((item) => {
                return (
                  <div className="w-[48%] bg-primary p-[20px] font-[BelfastMedium] uppercase text-center text-base text-white">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-4xl">Services:</h2>
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
            <h2 className="text-4xl">Introduction:</h2>
            <p className="text-xl tracking-wide font-[BelfastMedium] opacity-100 text-justify">
              {client.introduction}
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-4xl ">Solution:</h2>
            <p className="text-xl tracking-wide font-[BelfastMedium] opacity-100 text-justify">
              {client.solution_offered}
            </p>
          </div>
        </div>
        <div className="w-[57%]">
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
