import { darkMode } from "@tailwind.config";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen px-[3%] md:px-[6%]">
      <img
        src="/images/fudge_1.png"
        alt="contact"
        className="absolute left-0 top-0 object-cover"
      />
      <div className="w-full h-full mt-[100px] relative flex flex-col justify-center items-center gap-6">
        <Image src="/images/404_txt2.png" width={300} height={300} />
        <h2 className="text-[2.5vw] text-white">There's Nothing Here...</h2>
        <p className="text-[1.5vw] font-Poppins text-white">
          So, uh, that page you were looking kinda doesn’t exist. Sorry!
          <span className=" text-primary cursor-pointer"> Back To Home</span>
        </p>
        {console.log(darkMode)}
      </div>
    </div>
  );
};

export default NotFound;
