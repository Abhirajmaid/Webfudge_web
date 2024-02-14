"use client";
import { Toast } from "@src/context/ToastContext";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const emailRegex = /^[A-Za-z0-9. _%+-]+@[A-Za-z0-9. -]\. [A-Z]{2,4}$/i;

const validateEmail = (email) => {
  return emailRegex.test(email);
};

const ContactForm = () => {
  const form = useRef();

  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [msg, setMsg] = useState("");

  const [loader, setLoader] = useState(false);
  const [thanksMsg, setThanksMsg] = useState(false);

  const { success, error } = Toast();

  const clearInput = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (
      email === "" ||
      userName === "" ||
      companyName === "" ||
      validateEmail(email) === true
    ) {
      error("Field is empty OR wrong email!!");
      setLoader(false);
      console.log(validateEmail(email));
    } else if (number.length != 10) {
      error("Wrong Mobile Number!!");
      setLoader(false);
    } else {
      emailjs
        .sendForm(
          "service_pfw4cle",
          "template_2r0898d",
          form.current,
          "jgD1dSgL1VKS1UTD5"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoader(false);
            clearInput();
            success("You Subscribe Successfuly!");
            setThanksMsg(true);
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
          {thanksMsg ? (
            <>
              <div className="h-[400px] flex-center-center flex-col gap-3">
                <h1 className="md:text-[2vw] text-[4vw]">
                  Thanks for Contacting Us!
                </h1>
                <Link href="/">
                  <button className="btn bg-white text-black">
                    Back To Home
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit} ref={form}>
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
                    name="company_name"
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
                    name="mobile_number"
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
                className={`${
                  loader ? "bg-slate-500 " : "bg-primary"
                } btn md:w-[15%] w-[50%] text-white`}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
