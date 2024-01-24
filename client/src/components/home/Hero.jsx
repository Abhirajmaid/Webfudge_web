import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative h-[550px]">
        <div className="w-full flex justify-between z-50 absolute ">
          <div>
            <Image
              src="/images/balls.png"
              width={80}
              height={80}
              alt="Webfudge star"
              className="-mb-[30px] mt-[40px]"
            />
            <h1 className="!text-[10vw] dark:text-white leading-[180px] tracking-tight p-0">
              CREATIVE <br /> AGENCY
            </h1>
          </div>
          <div className="flex-col gap-7 flex-align-center">
            <div className=" w-[80%] max-h-[100px]  rounded-full bg-[#D9D9D9] mt-[85px] p-3 py-[20px] flex items-center overflow-hidden relative">
              <div className=" h-[85px] bg-white rounded-full w-[85px] border-solid border-[6px] border-gray cursor-pointer absolute ">
                <Icon icon="mdi:play" width="75" className=" text-primary " />
              </div>
              <video
                className="videobackground"
                muted
                controls
                autoplay="true"
                loop="true"
                poster=""
              >
                <source src="video/abstract.mp4" type="video/mp4" />
                <source src="video/abstract.3gpp" type="video/3gpp" />
              </video>
            </div>
            <div className="flex justify-center items-center gap-[100px] ">
              <Image
                src="/images/star.png"
                width={27}
                height={27}
                alt="Webfudge star"
              />
              <Image
                src="/images/star.png"
                width={27}
                height={27}
                alt="Webfudge star"
              />
              <Image
                src="/images/star.png"
                width={27}
                height={27}
                alt="Webfudge star"
              />
            </div>
          </div>
          <p className="w-[35%] text-justify font-[BelfastMedium] absolute -bottom-2 right-0 text-[1vw] ">
            Welcome to{" "}
            <span className=" font-[BelfastGrotesk] text-[1.2vw] ">
              Webfudge
            </span>{" "}
            , the ultimate web design solution. Unleash your imagination and
            build captivating websites with ease. Join our community of creators
            and transform your online presence today !
          </p>
        </div>
        <div className="w-full flex justify-between items-center absolute bottom-0 z-50">
          <button className=" btn border-[2px] !py-5 !rounded-full border-solid dark:border-white w-[25%] ">
            2 Years of Experience
          </button>
          <button className=" btn border-[2px] !py-5 !rounded-full border-solid dark:border-white w-[18%] ">
            20+ Happy Clients
          </button>
          <div className=" h-[1px] w-[50%] bg-dark dark:bg-gray opacity-70 "></div>
          <Image
            src="/images/rings.png"
            width={60}
            height={60}
            alt="Webfudge star"
          />
        </div>
        <div className="z-0">
          <div className="gradient-bg !opacity-70">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <div className="gradients-container">
              <div class="g2"></div>
              <div class="g1"></div>
              <div class="g3"></div>
              <div class="g4"></div>
              {/* <div class="interactive"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
