import React, { useRef, useState } from "react";

import { Toast } from "../../context/ToastContext";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const emailRegex = /^[A-Za-z0-9. _%+-]+@[A-Za-z0-9. -]\. [A-Z]{2,4}$/i;

const validateEmail = (email) => {
  return emailRegex.test(email);
};

const ComingSoon = () => {
  const form = useRef();

  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");

  const { success, error } = Toast();

  const clearInput = () => {
    setEmail("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    if (email === "" || validateEmail(email) === true) {
      error("Field is empty OR wrong email!!");
      setLoader(false);
      console.log(validateEmail(email));
    } else {
      emailjs
        .sendForm(
          "service_gdm10ak",
          "template_2v70m7c",
          form.current,
          "jgD1dSgL1VKS1UTD5"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoader(false);
            clearInput();
            success("You Subscribe Successfuly!");
          },
          (err) => {
            console.log(err.text);
            setLoader(false);
            error("Something went wrong!");
          }
        );
    }
  };
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center md:gap-[30px] gap-5 w-[70%] md:w-auto ">
      <Image
        src="/images/webfudge_logo_white.png"
        width={250}
        height={250}
        alt="Webfudge logo"
        className="w-[50%] md:w-[30%] "
      />
      <h1 className=" text-slate-200 font-medium text-[8vw] text-center leading-[40px] md:text-5xl pointer-events-none tracking-widest">
        LAUNCHING SOON . . .
      </h1>
      <div className="w-full  ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex justify-center items-center gap-0 w-full  "
        >
          <input
            id="eamil"
            type="text"
            className="text-dark-gray text-base font-Poppins font-bold placeholder:text-[#5a5a5a] bg-[#fff] rounded-l-lg p-3 "
            placeholder="Email"
            name="from_email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={sendEmail}
            className={` ${
              loader ? "bg-slate-500 " : "bg-primary"
            } text-white p-3 px-4 rounded-r-lg text-base bg-primary `}
          >
            Subscribe
          </button>
        </form>
      </div>
      <p className="text-white text-xs md:-mt-5 md:text-base ">
        *Subscribe to get freebies after launch{" "}
      </p>
    </div>
  );
};

export default ComingSoon;
