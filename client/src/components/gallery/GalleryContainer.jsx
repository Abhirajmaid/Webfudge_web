import React, { Suspense } from "react";
import ImageCard from "./ImageCard";
import { wait } from "@src/utils/utils";

const images = [
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/mPFSPqZOO7s",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/uyX3qAQhZVA",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/LV-NvIcA-Gg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/NTGg2rtWDwg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/hqnQWmIt3cY",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/Vc2dD4l57og",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/xoTt2fjs7d0",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/hFKZ5-OT9Ys",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/uPEnxrdSKIw",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/uPEnxrdSKIw",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/8KtqjrskUg8",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/0qnRfgnZIsI",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/qAaGXj-AOv4",
  },
];

const CardLaod = () => {
  return (
    <>
      <div className="bg-dark-gray opacity-70 h-[300px] mb-3 w-auto"></div>
      <div className="bg-dark-gray opacity-70 h-[15px] mb-3 w-[70%]"></div>
      <div className="bg-dark-gray opacity-70 h-[15px] mb-6 w-[40%]"></div>
    </>
  );
};

const GalleryContainer = async () => {
  await wait(5000);
  return (
    <>
      <h1 className="md:text-[2.5vw] text-[6vw] mb-10">
        Work That Brings Ideas To Life:
      </h1>
      <div class="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-[80PX]">
        {images?.map((item) => {
          return (
            <Suspense fallback={<CardLaod />}>
              <ImageCard text={item.text} img={item.url} />
            </Suspense>
          );
        })}
      </div>
    </>
  );
};

export default GalleryContainer;
