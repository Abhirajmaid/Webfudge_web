import React from "react";

const ImageCard = async ({ img }) => {
  return (
    <div className="flex flex-col gap-3 mb-[32px]">
      <img src={img} alt="webfudge" className="rounded-lg " />
    </div>
  );
};

export default ImageCard;
