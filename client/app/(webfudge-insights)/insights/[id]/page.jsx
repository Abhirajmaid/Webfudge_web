"use client";

import { useParams } from "next/navigation";
import React from "react";
// import { articles } from "@/src/data/clients";

const SingleArticle = () => {
  const params = useParams();
  // const article = articles?.find((item) => {
  //   return item?.id == params?.id;
  // });
  return (
    <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "80px" }}>
      {params.id}
    </div>
  );
};

export default SingleArticle;
