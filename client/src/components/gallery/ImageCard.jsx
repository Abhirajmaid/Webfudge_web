import React from "react";
import Image from "next/image";

const ImageCard = async ({ img }) => {
  return (
    <div className="flex flex-col gap-3 mb-[32px]">
      <Image
        src={img}
        alt="webfudge"
        width={600}
        height={400}
        className="rounded-lg"
      />
    </div>
  );
};

export default ImageCard;
