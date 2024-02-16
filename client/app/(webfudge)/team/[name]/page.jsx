"use client";
import { Member } from "@src/components/SinglePages";
import { useParams } from "next/navigation";
import { teamMembers } from "@src/data/data";
import React from "react";

const page = () => {
  const params = useParams();

  console.log(params);
  const member = teamMembers.find((item) => {
    console.log(item);
    return item?.nameID == params?.name;
  });

  if (member.status === 404) {
    notFound();
  }
  return (
    <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "80px" }}>
      <Member {...member} />
    </div>
  );
};

export default page;
