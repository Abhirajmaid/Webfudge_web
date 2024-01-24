"use client";

import { BiChevronDown } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { openDropdown } from "../../redux/features/uiSlice";

const SingleLink = ({ id, linkText, url, subLinks }) => {
  const dispatch = useDispatch();
  const handleDropDown = (e) => {
    const linkCords = e.target.getBoundingClientRect();
    const center = (linkCords.left + linkCords.right) / 2;
    dispatch(openDropdown({ link: linkText, center }));
  };
  return (
    <div className="relative">
      <Link
        href={url}
        end
        key={id}
        className="relative w-full px-3 py-[0.6rem] lg:px-4 flex-align-center gap-x-1 link text-lg text-dark dark:text-white"
        onMouseOver={handleDropDown}
      >
        {linkText}
        {subLinks && <BiChevronDown className="link" />}
      </Link>
    </div>
  );
};

export default SingleLink;
