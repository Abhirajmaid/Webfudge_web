"use client";

import { BiChevronDown } from "react-icons/bi";
import { useDispatch } from "react-redux";
// import Link from "next/link";
import { openDropdown } from "../../redux/features/uiSlice";
import { useRouter } from "next/navigation";

const SingleLink = ({ id, linkText, url, subLinks }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleDropDown = (e) => {
    const linkCords = e.target.getBoundingClientRect();
    const center = (linkCords.left + linkCords.right) / 2;
    dispatch(openDropdown({ link: linkText, center }));
  };
  return (
    <div className="relative">
      <span
        key={id}
        className="relative w-full px-3 py-[0.6rem] lg:px-4 flex-align-center gap-x-1 link text-lg text-dark dark:text-white cursor-pointer "
        onMouseOver={handleDropDown}
        onClick={() => router.push(`${url}`)}
      >
        {linkText}
        {subLinks && <BiChevronDown className="link" />}
      </span>
    </div>
  );
};

export default SingleLink;
