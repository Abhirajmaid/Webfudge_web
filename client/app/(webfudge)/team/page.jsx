import { InfiniteMarquee, TeamCard } from "@src/components/common";
import { teamMembers } from "@src/data/TeamData";
import React from "react";
export const metadata = {
  title: "Team Webfudge",
  description: "Meet Our Team of Experts!",
};
const Page = () => {
  return (
    <div className="md:px-[6%]" style={{ paddingTop: "120px" }}>
      <div className="flex flex-wrap md:justify-between gap-10  justify-center items-center">
        {teamMembers?.map((item) => {
          return <TeamCard data={item} />;
        })}
      </div>
      <div className="mt-10">
        <InfiniteMarquee
          txt="Get Personalize Project Quote"
          url="/contact-us"
        />
      </div>
    </div>
  );
};

export default Page;
