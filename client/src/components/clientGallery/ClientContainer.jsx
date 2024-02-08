"use client";
import React from "react";
import { clients } from "../../data/clients";
import { ClientCardMain } from "@src/components/clientGallery";
import { useSearchParams } from "next/navigation";

const ClientContainer = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = clients.slice(start, end);
  return (
    <>
      <div className="mt-[60px] ">
        <div className="flex flex-wrap w-full gap-8 justify-between">
          {entries?.map((item) => {
            return <ClientCardMain id={item.id} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ClientContainer;
