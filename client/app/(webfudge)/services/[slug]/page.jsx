"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";
import { getServiceBySlug } from "@/src/data/services";
import { SingleServicePage } from "@src/components/services";

const Page = () => {
  const params = useParams();
  const service = getServiceBySlug(params?.slug);

  if (!service) {
    notFound();
  }

  return (
    <div
      className="px-[3%] md:px-[6%] overflow-x-hidden"
      style={{ paddingTop: "80px" }}
    >
      <SingleServicePage service={service} />
    </div>
  );
};

export default Page;
