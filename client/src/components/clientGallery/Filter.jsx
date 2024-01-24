import { Icon } from "@iconify/react";
import React from "react";

const ProjectFields = ["Design", "Development", "SMM", "SEO"];

const Filter = () => {
  return (
    <div className="mt-[80px]">
      <div className="mt-[10px] flex gap-3">
        {ProjectFields?.map((item) => {
          return (
            <button className=" btn border-[2px] !py-3 !rounded-full border-solid dark:border-[#494949] dark:text-[#5e5e5e] border-[#727272] text-[#727272] flex items-center gap-2 font-Poppins !capitalize dark:hover:text-[#8f8f8f] dark:hover:border-[#8f8f8f] hover:text-[#191919] hover:border-[#191919] ">
              <Icon icon="mdi:web" width="24" />
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
