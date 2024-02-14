import React from "react";
import { ToastContainer } from "react-toastify";

const ContactLayout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default ContactLayout;
