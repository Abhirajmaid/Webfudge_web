import React from "react";
import { WebfudgeNetworkData } from "@src/data/accordionData";
import { WebfudgeNetworkPage } from "@src/components/SinglePages";

export const metadata = {
  title: "Networks",
};
const WebfudgeNetwork = () => {
  return (
    <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "100px" }}>
      <WebfudgeNetworkPage WebfudgeNetworkData={WebfudgeNetworkData} />
    </div>
  );
};

export default WebfudgeNetwork;
