import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen px-[3%] md:px-[6%]">
      <img
        src="/images/fudge_1.png"
        alt="contact"
        className="absolute md:h-auto w-full h-screen left-0 top-0 object-cover"
      />
      <div className="w-full h-full relative flex flex-col justify-center items-center gap-6">
        <Image
          src="/images/404_txt2.png"
          width={300}
          height={300}
          className="md:w-[300px] w-[150px]"
        />
        <h2 className="md:text-[2.5vw] text-[6vw] text-white">
          There's Nothing Here...
        </h2>
        <p className="md:text-[1.5vw] text-[4vw] font-Poppins text-center text-white">
          So, uh, that page you were looking kinda doesn’t exist. Sorry!
          <Link href="/" className="opacity-100">
            <span className=" text-primary cursor-pointer"> Back To Home</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
