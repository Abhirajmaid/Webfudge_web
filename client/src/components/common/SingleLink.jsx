"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";

import Dropdown from "./DropDown";

const SingleLink = ({ id, linkText, url, subLinks, target }) => {
  const [open, setOpen] = useState(false);
  const showDrop = subLinks && open;

  return (
    <>
      <div
        className="relative w-fit h-fit "
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link
          key={id}
          className="relative w-full px-3 py-[0.6rem] lg:px-4 flex-align-center gap-x-1 link text-lg text-dark dark:text-white cursor-pointer opacity-100"
          href={`${url ? url : "/"}`}
          target={target}
        >
          {linkText}
          <span
            style={{
              transform: showDrop ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-1 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out"
          />
          {subLinks && (
            <Icon
              icon="fe:arrow-down"
              className="absolute -right-2 bottom-3 "
            />
          )}
        </Link>
        <AnimatePresence>
          {showDrop && (
            <motion.div
              className="absolute left-1/2  top-14"
              style={{ translateX: "-50%" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent " />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-dark-gray" />
              <Dropdown subLinks={subLinks} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SingleLink;
