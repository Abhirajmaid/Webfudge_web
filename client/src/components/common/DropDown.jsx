"use client";

import Link from "next/link";
import { clients } from "@src/data/clients";
import { ClientCard } from ".";
import { motion } from "framer-motion";
const Dropdown = ({ subLinks }) => {
  const randomClients = clients
    ?.sort(() => Math.random() - 0.5) // Shuffle the array
    ?.slice(0, 2); // Pick first 2 after shuffle

  return (
    <motion.div
      className="z-[99] !bg-dark-gray p-6 rounded-lg shadow-lg w-[70vw] flex "
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div className="w-[25%]">
        <ul className="gap-[20px] flex flex-col">
          {subLinks?.map(({ id, linkText, url }) => (
            <Link
              key={id}
              end
              href={url}
              className="text-white opacity-100 font-[BelfastMedium] text-[25px] hover:opacity-70"
            >
              {linkText}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 w-[75%]">
        {randomClients?.slice(0, 2)?.map((item, i) => {
          return (
            <div key={i} className="md:w-fit w-full">
              <ClientCard data={item} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Dropdown;
