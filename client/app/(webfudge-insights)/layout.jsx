"use client";
import "../globals.css";

import { ToastContextProvider } from "@/src/context/ToastContext";
import { Navbar } from "@src/components/common";
import { ToastContainer } from "react-toastify";

export default function InsightsLayout({ children }) {
  return (
    <>
      <ToastContextProvider>
        <ToastContainer />
        <Navbar isShowMode={false} />
        {children}
      </ToastContextProvider>
    </>
  );
}
