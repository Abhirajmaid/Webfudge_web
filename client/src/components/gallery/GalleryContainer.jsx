import React, { Suspense } from "react";
import ImageCard from "./ImageCard";
import { wait } from "@src/utils/utils";

const images = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/08cef6215917017.6776df9a44a4c.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/425514221875125.67f692735a772.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1748f3221875125.67dbf0b29cd5e.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/acea34221875125.67dbf0b428888.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b98e7c221875125.67dbf0b562a59.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/adcebc221875125.67dbf0b636879.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1e4976221875125.67dbf0b29dc0d.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/689b91221875125.67dbf0b29d586.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/41b265221875125.67dbf0b428f94.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a5efb7215917017.6776df9a44537.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/source/d575da215917017.6776df9bc0042.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ffc828221875125.67f692735b8e8.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/194e14221875125.67dbf1b63fd6f.png",
  "/images/clients/rk.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6f2844221875125.67dbf0b429809.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd/2e5e7a221875125.67dbf1b6403f3.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b84463214084681.675187ff0014e.png",
  "/images/clients/mmj/7.png",
  "/images/clients/mmj/1.png",
  "/images/clients/mmj/2.png",
  "/images/clients/sahayata/sahayata.png",
  "/images/clients/mmj/3.png",
  "/images/clients/mmj/4.png",
  "/images/clients/mmj/5.png",
  "/images/clients/mmj/mmj2.png",
  "/images/clients/sahayata/1.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4ea980208135813.66e9b2674000b.png",
];

const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

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
  const shuffledImages = shuffleArray(images);

  return (
    <>
      <h1 className="md:text-[2.5vw] text-[6vw] mb-10">
        Work That Brings Ideas To Life:
      </h1>
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-[80PX]">
        {shuffledImages.map((item, idx) => (
          <Suspense key={idx} fallback={<CardLaod />}>
            <ImageCard img={item} />
          </Suspense>
        ))}
      </div>
    </>
  );
};

export default GalleryContainer;
