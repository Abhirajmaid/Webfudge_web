"use client";
import { useState } from "react";
import "../globals.css";
import {
  DropDown,
  Footer,
  LoadingScreen,
  Navbar,
} from "@/src/components/common";

export default function WebfudgeLayout({ children }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <DropDown />
          <Navbar isShowMode={true} />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
