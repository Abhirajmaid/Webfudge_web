"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Toast } from "@src/context/ToastContext";
import emailjs from "@emailjs/browser";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,4}$/i;

const validateEmail = (email) => {
  return emailRegex.test(email);
};

const LeadFormModal = ({ visible, onClose }) => {
  const form = useRef();
  const { success, error } = Toast();

  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    user_email: "",
    mobile_number: "",
    message: "",
    budget: "",
  });

  const [loader, setLoader] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setLoader(true);
    setErrors({}); // Clear previous errors

    // Validation with specific error messages
    const newErrors = {};

    if (!formData.name || formData.name.trim() === "") {
      newErrors.name = "Full name is required";
    }

    if (!formData.company_name || formData.company_name.trim() === "") {
      newErrors.company_name = "Company name is required";
    }

    if (!formData.user_email || formData.user_email.trim() === "") {
      newErrors.user_email = "Email is required";
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email address";
    }

    // Phone number validation - accept international formats (7-15 digits)
    // This covers most international phone number formats including country codes
    if (formData.mobile_number && formData.mobile_number.trim() !== "") {
      const phoneDigits = formData.mobile_number.replace(/\D/g, "");
      // Accept phone numbers with 7-15 digits (international standard: E.164 format)
      if (phoneDigits.length < 7 || phoneDigits.length > 15) {
        newErrors.mobile_number =
          "Please enter a valid phone number (7-15 digits)";
      }
    }

    // If there are errors, show them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      // Show a general error notification
      const firstError = Object.values(newErrors)[0];
      error(firstError);

      setLoader(false);
      return;
    }

    try {
      // Send form data to EmailJS
      // The template will use form field names: {{name}}, {{company_name}}, {{user_email}}, {{mobile_number}}, {{message}}
      // Recipient email (abhiraj@webfudge.in) should be configured in EmailJS template settings
      await emailjs.sendForm(
        "service_06f5zjp",
        "template_2r0898d",
        form.current,
        "jgD1dSgL1VKS1UTD5"
      );

      setLoader(false);
      setSubmitted(true);
      success("Thank you! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        company_name: "",
        user_email: "",
        mobile_number: "",
        message: "",
        budget: "",
      });

      // Close modal after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      setLoader(false);
      error("Something went wrong! Please try again.");
    }
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-gray bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center z-[99] p-2"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "tween",
            }}
            onClick={(e) => e.stopPropagation()}
            className="md:p-[50px] md:pt-[15px]  p-6 bg-[#161616] rounded-2xl flex flex-col relative md:w-[60vw] w-[90%] max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={onClose}
            >
              <Icon icon="mdi:close" className="text-2xl" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-6 py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Icon
                    icon="mdi:check-circle"
                    className="text-6xl text-primary"
                  />
                </motion.div>
                <h2 className="md:text-4xl text-2xl text-white text-center font-[BelfastMedium]">
                  Thank You!
                </h2>
                <p className="text-white/80 text-center font-Poppins md:text-lg">
                  We've received your information and will get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <h1 className="md:text-[2.5vw] text-[6vw] text-white tracking-tight text-center mb-2 font-[BelfastMedium]">
                  Let's Start Your Project!
                </h1>
                <p className="md:text-lg text-base font-Poppins tracking-wider text-center text-white/80 mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-white font-Poppins text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`bg-white/10 border rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/20 focus:border-primary"
                        }`}
                        required
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-white font-Poppins text-sm">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder="ABC Limited"
                        className={`bg-white/10 border rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none transition-colors ${
                          errors.company_name
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/20 focus:border-primary"
                        }`}
                        required
                      />
                      {errors.company_name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.company_name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-white font-Poppins text-sm">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`bg-white/10 border rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none transition-colors ${
                          errors.user_email
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/20 focus:border-primary"
                        }`}
                        required
                      />
                      {errors.user_email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.user_email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-white font-Poppins text-sm">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className={`bg-white/10 border rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none transition-colors ${
                          errors.mobile_number
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/20 focus:border-primary"
                        }`}
                      />
                      {errors.mobile_number && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.mobile_number}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* <div className="flex flex-col gap-2">
                    <label className="text-white font-Poppins text-sm">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="" className="bg-[#161616]">
                        Select Budget Range
                      </option>
                      <option value="under-10k" className="bg-[#161616]">
                        Under $10,000
                      </option>
                      <option value="10k-50k" className="bg-[#161616]">
                        $10,000 - $50,000
                      </option>
                      <option value="50k-100k" className="bg-[#161616]">
                        $50,000 - $100,000
                      </option>
                      <option value="100k-plus" className="bg-[#161616]">
                        $100,000+
                      </option>
                    </select>
                  </div> */}

                  <div className="flex flex-col gap-2">
                    <label className="text-white font-Poppins text-sm">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project requirements..."
                      rows="4"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <button
                      type="submit"
                      disabled={loader}
                      className={`flex-1 font-[BelfastMedium] text-sm !rounded-3xl font-bold btn shadow-md bg-white hover:bg-primary dark:text-black text-black hover:dark:text-white hover:text-white !px-7 !py-4 transition-all ${
                        loader ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      style={{ pointerEvents: loader ? "none" : "auto" }}
                    >
                      {loader ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadFormModal;
