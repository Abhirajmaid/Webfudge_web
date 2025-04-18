import React from "react";
import { AboutPage } from "@src/components/SinglePages";

export const metadata = {
  title: "About",
  description:
    "Webfudge's aim is to simplify the client experience by acting as a one-stop shop that can meet all of a client's marketing needs. Rather than specialising in one narrow area, we incorporate strategies that span across all mediums.",
};

const AboutUs = () => {
  return (
    <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "110px" }}>
      <AboutPage />
    </div>
  );
};

export default AboutUs;
