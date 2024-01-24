"use client";

import { ClientContainer, Filter } from "@src/components/clientGallery";
import { PaginationControls } from "@src/components/common";
import React from "react";

const Clients = () => {
  return (
    <>
      <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "80px" }}>
        <Filter />
        <ClientContainer />
        <PaginationControls />
      </div>
    </>
  );
};

export default Clients;
