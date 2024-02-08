import { GalleryContainer } from "@src/components/gallery";
import React from "react";

export const metadata = {
  title: "Daily Creatives - Webfudge",
  description: "Let's be creative with webfudge",
};

const page = () => {
  return (
    <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "120px" }}>
      <GalleryContainer />
    </div>
  );
};

export default page;
