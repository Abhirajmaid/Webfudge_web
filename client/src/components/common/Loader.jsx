import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-[40vw] flex items-center justify-center">
      <Image
        src="/images/logo_svg.svg"
        width={80}
        height={80}
        className="animate-spin"
        alt="webfudge"
      />
    </div>
  );
};

export default Loader;
