"use client";

import Image from "next/image";
import {
  About,
  Hero,
  OurProject,
  OurServices,
  ShowSection,
} from "@src/components/home";
import { InfiniteMarquee } from "@src/components/common";

const Home = () => {
  return (
    <>
      <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "80px" }}>
        <Hero />
        <ShowSection />
        <InfiniteMarquee />
        <OurServices />
        <About />
        <OurProject />
      </div>
    </>
  );
};

export default Home;
