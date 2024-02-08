import { Loader } from "@src/components/common";
import React from "react";

const loading = () => {
  return (
    <div className="md:px-[6%]" style={{ paddingTop: "80px" }}>
      <Loader />
    </div>
  );
};

export default loading;
