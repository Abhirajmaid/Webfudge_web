"use client";
import { useState } from "react";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [msg, setMsg] = useState("");
  // const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  };
  return (
    <>
      <div className="mt-[100px] flex md:flex-row flex-col md:w-[80%] m-auto gap-[30px]">
        <div className="md:w-[35%] w-full flex flex-col justify-center gap-2.5">
          <span className=" text-[22px] font-[700] text-primary ">
            CONTACT US
          </span>
          <h1 className="text-[45px]">LET'S GET IN TOUCH!</h1>
          <p style={{ lineHeight: "21px" }}>
            For any enquiries, please email us or complete our contact form.
          </p>
          <span className="text-xl mt-[15px]">info@webfudge.com</span>
        </div>
        <div className="flex flex-col md:w-[65%] w-full bg-purple-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 px-[25px] py-[70px]">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex md:flex-row flex-col gap-[35px] mb-[40px]">
              <div className="flex flex-col md:w-6/12 w-full gap-2">
                <label htmlFor="name">
                  Name<span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  className="text-dark-gray text-base font-Poppins font-bold placeholder:text-[#5a5a5a] bg-[#fff] rounded-lg p-3 "
                  type="text"
                  placeholder="First Name Last Name"
                  name="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="flex flex-col md:w-6/12 w-full gap-2">
                <label htmlFor="company name">
                  Company Name<span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  className="text-dark-gray text-base font-Poppins font-bold placeholder:text-[#5a5a5a] bg-[#fff] rounded-lg p-3 "
                  type="text"
                  placeholder="ABC Limited "
                  name="company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-[35px] mb-[40px] ">
              <div className="flex flex-col md:w-6/12 w-full gap-2">
                <label htmlFor="email">
                  Your Email<span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  className="text-dark-gray text-base font-Poppins font-bold placeholder:text-[#5a5a5a] bg-[#fff] rounded-lg p-3"
                  type="text"
                  placeholder="your@email.com"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col md:w-6/12 w-full gap-2">
                <label htmlFor="number">
                  Your Contact Number
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  className="text-dark-gray text-base font-Poppins font-bold placeholder:text-[#5a5a5a] bg-[#fff] rounded-lg p-3"
                  type="number"
                  placeholder="+91"
                  name="mobile number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="msg">Your Message</label>
              <textarea
                className="resize-none min-h-[130px] mb-10 text-dark-gray text-base font-Poppins font-bold placeholder:text-[#5a5a5a] bg-[#fff] rounded-lg p-3"
                type="text"
                placeholder="Message"
                name="message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>

            <button
              className="btn bg-primary md:w-[15%] w-[50%] text-white"
              type="submit"
            >
              Submit
            </button>
            {/* <p className="error">{error}</p> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
