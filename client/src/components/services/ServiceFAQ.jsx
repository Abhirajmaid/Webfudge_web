"use client";

import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const ServiceFAQ = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="md:my-20 my-12 md:px-[6%] px-[3%]">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="md:text-[4vw] text-[7vw] md:leading-[0.8] leading-8 tracking-tighter uppercase align-middle dark:text-white text-main-dark">
          <span className="bg-white bg-clip-text text-transparent">FAQ</span>{" "}
          <span className="text-[#D71EB9] !text-[7vw]">.</span>
        </h2>
        <p className="font-Poppins md:text-[1.3vw] md:leading-6 leading-4 md:mt-6 mt-3 text-xs md:w-[65%] w-[80%] text-gray dark:text-gray-300">
          Find answers to the most commonly asked questions about our services,
          process, and how we can help bring your vision to life.
        </p>
      </div>

      <div className="w-full m-auto md:p-[20px] p-[10px] rounded-2xl gap-[20px] bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border border-primary/20">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <div className="border-b-2 border-gray/25 pb-2">
      <div
        className={`accordion flex-center-between md:my-7 my-4 cursor-pointer hover:opacity-80 ${
          isActive && "active"
        }`}
        onClick={handleShow}
      >
        <h3 className="md:text-[1.4vw] text-lg font-[BelfastMedium] tracking-wide font-bold md:pl-2">
          {question}
        </h3>
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
        {answer}
      </p>
    </div>
  );
};

export default ServiceFAQ;
