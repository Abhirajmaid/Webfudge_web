"use client";

import React, { useState } from "react";
import { faqs } from "@src/data/data";
import { BiMinus, BiPlus } from "react-icons/bi";
import Link from "next/link";

const SingleFaq = ({ question, response, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <div className=" border-b-2 border-gray/25  pb-2 ">
      <div
        className={`accordion flex-center-between md:my-7 my-4 cursor-pointer hover:text-primary ${
          isActive && "active"
        }`}
        onClick={handleShow}
      >
        <h1 className="md:text-[1.7vw] text-lg font-[BelfastMedium] tracking-wide font-bold">
          {question}
        </h1>
        {isOpen ? (
          <BiMinus className="text-2xl" />
        ) : (
          <BiPlus className="text-2xl" />
        )}
      </div>
      <p
        className={`p-0 max-h-0 overflow-hidden font-Poppins font-normal transition-all md:text-[1.3vw] text-base ${
          isOpen && "isOpen"
        }`}
      >
        {response}
      </p>

      {url && (
        <Link href={`${url}`} target="_black" className="opacity-100">
          <div className="text-[1.6vw] text-white font-[BelfastMedium] cursor-pointer hover:opacity-70">
            Learn more
          </div>
        </Link>
      )}
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="md:w-[70%] w-full m-auto dark:bg-dark-gray bg-gray  md:p-[50px] p-[40px] rounded-2xl md:mt-[200px] mt-[80px] gap-[20px]">
      <h1 className="md:text-[2vw] text-[4vw] md:mb-16">FAQs</h1>
      <div>
        {faqs.map((faq) => (
          <SingleFaq {...faq} key={faq.id} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
