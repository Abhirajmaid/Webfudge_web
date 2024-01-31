import { ArticleHero } from "@src/components/Insights";
import React from "react";
import { blogs } from "@src/data/articles";
import CoverSection from "@src/components/Insights/CoverSection";

const Article = () => {
  return (
    <div
      className="px-[3%] md:px-[6%] w-[70%] m-auto"
      style={{ paddingTop: "80px" }}
    >
      <CoverSection />
    </div>
  );
};

export default Article;
