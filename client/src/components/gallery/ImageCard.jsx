import React from "react";

const ImageCard = async ({ img, text }) => {
  return (
    <div className="flex flex-col gap-3 mb-[70px]">
      <img src={img} alt="" className="rounded-lg " />
      <p className="w-full md:text-[1vw] text=[4vw]">{text}</p>
    </div>
  );
};

export default ImageCard;
