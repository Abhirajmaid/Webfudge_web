"use client";

import { ClientContainer, Filter } from "@src/components/clientGallery";
import { PaginationControls } from "@src/components/common";
import SoftwareProjectsCarousel from "@src/components/projects/SoftwareProjectsCarousel";
import React from "react";

const Clients = () => {
  return (
    <>
      <div style={{ paddingTop: "80px" }}>
        {/* Existing Client Gallery */}
        <div className="px-[3%] md:px-[6%]">
          <Filter />
          <ClientContainer />
          <PaginationControls />
          {/* Software Projects Carousel Banner */}
          <SoftwareProjectsCarousel />
        </div>
      </div>
    </>
  );
};

export default Clients;
