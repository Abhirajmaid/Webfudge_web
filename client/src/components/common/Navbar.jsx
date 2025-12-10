"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import { mobileNavLinks, navLinks } from "@/src/data/navLinks";
import SingleLink from "./SingleLink";
import MobileNavLink from "./MobileNavLink";
import { useLeadForm } from "@src/context/LeadFormContext";

const Navbar = ({ isShowMode }) => {
  // Mobile Menu
  const [open, setOpen] = useState(false);
  const { openModal } = useLeadForm();
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };


  //Nav bg
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <>
      <div
        className={`md:h-[100px] fixed w-full z-[99] top-[32px] md:top-[40px] left-0 px-[2%]  md:px-[6%] flex-center-between !py-[20px] ${
          navBg
            ? "border-b backdrop-blur-sm border-dark bg-dark/60"
            : "hero-dark"
        } `}
      >
        <Link
          href="/"
          className="flex-shrink-0 flex-align-center gap-x-1 opacity-100"
        >
          <Image
            src="/images/webfudge_logo_white.png"
            width={110}
            height={100}
            alt="Webfudge"
            className="h-auto w-14 md:w-[100px]"
          />
        </Link>

        <div className="flex-align-center gap-x-4">
          {/*-------------------------------------- Desktop Menu------------------------------------- */}
          <ul className="hidden md:flex-align-center md:gap-x-10">
            {navLinks.map((link) => (
              <SingleLink {...link} key={link.id} />
            ))}
          </ul>

          {/*---------------------------------------- Mobile Menu------------------------------------- */}
          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed z-50 left-0 top-0 w-full h-screen origin-top bg-primary text-black p-10"
              >
                <div className="flex h-full flex-col">
                  <div className="flex justify-between">
                    <Link
                      href="/"
                      className="flex-align-center gap-x-1 opacity-100"
                    >
                      <Image
                        src="/images/webfudge_logo_white.png"
                        width={110}
                        height={100}
                        alt="Webfudge"
                        className="w-14 md:w-[100px] h-auto "
                      />
                    </Link>
                    <p
                      className="cursor-pointer text-md text-black"
                      onClick={toggleMenu}
                    >
                      Close
                    </p>
                  </div>
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center mb-16 font-lora items-center gap-4 "
                  >
                    {mobileNavLinks.map((link, index) => {
                      return (
                        <div className="overflow-hidden" onClick={toggleMenu}>
                          <MobileNavLink
                            key={index}
                            title={link.linkText}
                            href={link.url}
                            subLink={link.subLink}
                          />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-x-2 flex-align-center">
            <button
              className="md:block hidden md:text-sm text-xs !rounded-3xl md:font-bold md:text-inherit btn md:w-fit bg-white text-black shadow-md hover:scale-105 md:!px-7 !px-3 !py-3 hover:bg-white hover:text-black"
              onClick={openModal}
            >
              Start New Project!
            </button>

            {/*------------------------------- Mobile Menu Toogle------------------------- */}
            <div
              className="icon-box text-3xl md:hidden z-10"
              onClick={toggleMenu}
            >
              <BiMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
