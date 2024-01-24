"use client";

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { uiStore } from "../../redux/features/uiSlice";
const Dropdown = () => {
  const { currentLink, isDropdownOpen, position } = useSelector(uiStore);
  const { subLinks } = currentLink;
  const container = useRef(null);

  useEffect(() => {
    const dropdown = container.current;
    dropdown.style.left = `${position}px`;
  }, [position]);

  return (
    <>
      {currentLink && (
        <div
          className={`dropdown hidden z-[55] transition-a fixed top-11 left-1/2 -translate-x-1/2 !rounded-xl w-52 bg-white dark:bg-dark-light card-shadow dark:shadow-none ${
            isDropdownOpen && subLinks && "show before:w-4 before:h-4"
          }`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          ref={container}
        >
          <div className={`${subLinks && "p-2"}`}>
            {subLinks?.map(({ id, linkText, url }) => (
              <Link
                key={id}
                end
                href={url}
                className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark before:!hidden"
              >
                {linkText}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
