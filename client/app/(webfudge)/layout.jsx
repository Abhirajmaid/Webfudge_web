"use client";
import { useState } from "react";
import "../globals.css";
import {
  DropDown,
  Footer,
  LoadingScreen,
  Navbar,
} from "@/src/components/common";

export const metadata = {
  title: "Webfudge",
  description:
    "Build Brand Fast! Leading creative, media, and technology-driven digital agency based in Pune. Specializing in brand strategy and marketing, Web-design, transforming ideas into captivating online experiences.",
  twitter: {
    card: "summary_large_image",
  },
};

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
