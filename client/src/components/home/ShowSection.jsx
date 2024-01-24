import React from "react";
import Image from "next/image";

const ShowSection = () => {
  return (
    <>
      <div className="mt-[100px] w-full relative ">
        <video
          className="w-full rounded-t-[160px] card-shadow dark:border-none"
          muted
          autoplay="autoploay"
          poster=""
        >
          <source src="video/Final Comp.mp4" type="video/mp4" />
          <source src="video/Final Comp.3gpp" type="video/3gpp" />
        </video>
        <div className=" h-[230px] bg-white rounded-full w-[230px] border-solid border-[6px]  flex justify-center items-center border-gray cursor-pointer absolute -top-[70px] right-[80px] ">
          <Image
            src="/images/arrow.png"
            width={75}
            height={78}
            alt="Webfudge arrow"
          />
        </div>
      </div>
    </>
  );
};

export default ShowSection;
