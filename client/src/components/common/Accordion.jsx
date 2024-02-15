"use client";

import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import Link from "next/link";

const Single = ({ name, response, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <div className=" border-b-2 border-gray/25  pb-2 ">
      <div
        className={`accordion flex-center-between md:my-7 my-4 cursor-pointer hover:opacity-80 ${
          isActive && "active"
        }`}
        onClick={handleShow}
      >
        <h1 className="md:text-[1.4vw] text-lg font-[BelfastMedium] tracking-wide font-bold md:pl-2">
          {name}
        </h1>
        {isOpen ? (
          <BiMinus className="text-2xl" />
        ) : (
          <BiPlus className="text-2xl" />
        )}
      </div>
      <p
        className={`p-0 max-h-0 overflow-hidden font-Poppins transition-all md:text-[1.1vw] text-base text-full-opacity ${
          isOpen && "isOpen"
        }`}
      >
        {response}
        {url && (
          <Link href={`${url}`} target="_black" className="opacity-100">
            <div className="md:text-2xl text-xl text-primary font-[BelfastMedium] cursor-pointer hover:opacity-70 ">
              Learn more about their Work
            </div>
          </Link>
        )}
      </p>
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    <div className="w-full m-auto md:p-[20px] p-[10px] rounded-2xl gap-[20px]">
      <div>
        {data?.map((item) => (
          <Single {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
