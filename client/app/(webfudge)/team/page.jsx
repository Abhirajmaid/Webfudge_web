"use client";

import { InfiniteMarquee, TeamCard } from "@src/components/common";
import { teamMembers } from "@src/data/data";
import React from "react";

const page = () => {
  // Separate Co-Founders from other team members
  const coFounders = teamMembers.filter(
    (member) => member.role === "Co-Founder"
  );
  const otherMembers = teamMembers.filter(
    (member) => member.role !== "Co-Founder"
  );

  return (
    <div className="md:px-[6%]" style={{ paddingTop: "120px" }}>
      {/* Co-Founders Row */}
      {coFounders.length > 0 && (
        <div className="flex flex-wrap gap-10 justify-center items-center mb-20">
          {coFounders.map((item) => {
            return <TeamCard key={item.id} data={item} />;
          })}
        </div>
      )}

      {/* Other Team Members Row */}
      {otherMembers.length > 0 && (
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {otherMembers.map((item) => {
            return <TeamCard key={item.id} data={item} />;
          })}
        </div>
      )}

      <div className="mt-[150px]">
        <InfiniteMarquee
          txt="Get Personalize Project Quote"
          url="/contact-us"
        />
      </div>
    </div>
  );
};

export default page;
