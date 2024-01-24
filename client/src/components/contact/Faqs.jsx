"use client";

import React, { useState } from "react";
import { faqs } from "@src/data/faqs";
import { BiMinus, BiPlus } from "react-icons/bi";

const SingleFaq = ({ question, response }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        className={`accordion flex-center-between my-7 cursor-pointer hover:text-primary  ${
          isActive && "active"
        }`}
        onClick={handleShow}
      >
        <h1 className="text-[1.5vw] font-[BelfastMedium] tracking-wide font-bold">
          {question}
        </h1>
        {isOpen ? (
          <BiMinus className="text-2xl" />
        ) : (
          <BiPlus className="text-2xl" />
        )}
      </div>
      <p
        className={`p-0 max-h-0 overflow-hidden transition-all text-[1vw] ${
          isOpen && "isOpen"
        }`}
      >
        {response}
      </p>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="w-[70%] m-auto dark:bg-dark-gray bg-gray  p-[50px] rounded-2xl mt-[100px] gap-[20px]">
      <h1 className="text-[2vw] mb-16">FAQs</h1>
      <div>
        {faqs.map((faq) => (
          <SingleFaq {...faq} key={faq.id} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
