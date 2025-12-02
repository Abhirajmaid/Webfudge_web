"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";
import { getProjectBySlug } from "@/src/data/softwareProjects";
import SingleProjectPage from "@src/components/projects/SingleProjectPage";

const Page = () => {
  const params = useParams();
  const project = getProjectBySlug(params?.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "80px" }}>
      <SingleProjectPage project={project} />
    </div>
  );
};

export default Page;



