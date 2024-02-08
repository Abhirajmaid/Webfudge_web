"use client";
import { notFound, useParams } from "next/navigation";
import React from "react";
import { clients } from "@/src/data/clients";
import SingleClientPage from "@src/components/singleClient/SingleClientPage";

const page = () => {
  const params = useParams();
  const client = clients.find((item) => {
    return item?.id == params?.id;
  });

  if (client.status === 404) {
    notFound();
  }

  return (
    <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "80px" }}>
      <SingleClientPage client={client} id={client.id} />
    </div>
  );
};

export default page;
