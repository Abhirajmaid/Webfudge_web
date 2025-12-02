"use client";

import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const ServiceFAQ = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="md:my-20 my-12 md:px-[6%] px-[3%]">
      <h2 className="md:text-[4vw] text-[7vw] tracking-tighter uppercase font-[BelfastMedium] mb-8 dark:text-white text-main-dark">
        FAQ
      </h2>

      <div className="w-full m-auto md:p-[20px] p-[10px] rounded-2xl gap-[20px]">
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
