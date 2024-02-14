"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import {
  closeSidebar,
  openSidebar,
  uiStore,
} from "@/src/redux/features/uiSlice";

import { navLinks } from "@/src/data/navLinks";
import SingleLink from "./SingleLink";
import MobileNavLink from "./MobileNavLink";
import Modal from "./Modal";

const Navbar = ({ isShowMode }) => {
  // const { isSidebarOpen } = useSelector(uiStore);
  // const dispatch = useDispatch();

  // Mobile Menu
  const [open, setOpen] = useState(false);
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
  // const handleCloseSidebar = (e) => {
  //   if (e.target.classList.contains("mobile-modal")) dispatch(closeSidebar());
  // };

  // Theme
  const { theme, setTheme } = useTheme();

  // dark Mode btn
  const [showMode, setShowMode] = useState(true);
  useEffect(() => {
    setShowMode(isShowMode);
  }, []);

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

  // Modal
  const [showVideo, setShowVideo] = useState(false);

  const handleOnClose = () => {
    setShowVideo(false);
  };

  return (
    <>
      <div
        className={`md:h-[100px] fixed w-full z-[99] top-0 left-0 px-[2%]  md:px-[6%] flex-center-between !py-[20px] ${
          navBg
            ? "bg-white/60 border-b backdrop-blur-sm dark:border-dark dark:bg-dark/60"
            : " dark:hero-dark "
        } `}
      >
        <Link
          href="/"
          className="flex-shrink-0 flex-align-center gap-x-1 opacity-100"
        >
          {theme == "dark" ? (
            <Image
              src="/images/webfudge_logo_white.png"
              width={110}
              height={100}
              alt="Webfudge"
              className="w-14 md:w-[100px] h-auto "
            />
          ) : (
            <Image
              src="/images/webfudge_logo_black.png"
              width={100}
              height={100}
              alt="Webfudge"
              className="w-14 md:w-[120px] h-auto "
            />
          )}
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
                className="fixed left-0 top-0 w-full h-screen origin-top bg-primary text-black p-10"
              >
                <div className="flex h-full flex-col">
                  <div className="flex justify-between">
                    <h1 className="text-lg text-black">Portfolio</h1>
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
                    className="flex flex-col h-full justify-center font-lora items-center gap-4 "
                  >
                    {navLinks.map((link, index) => {
                      return (
                        <div className="overflow-hidden">
                          <MobileNavLink
                            key={index}
                            title={link.linkText}
                            href={link.url}
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
              className="md:text-sm text-xs !rounded-3xl md:font-bold md:text-inherit btn md:w-fit bg-white shadow-md dark:bg-black md:!px-7 !px-4 !py-4 dark:hover:bg-white dark:hover:text-main-dark hover:bg-main-dark hover:text-white"
              onClick={() => setShowVideo(true)}
            >
              Start New Project!
            </button>
            {/*----------------------------- Dark mode toggle-------------------------------------------------- */}
            {showMode ? (
              <div
                className="bg-white shadow-md icon-box dark:bg-black hover:shadow-lg hover:bg-transparent"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme == "dark" ? <FiSun /> : <FiMoon />}
              </div>
            ) : (
              <></>
            )}

            {/*------------------------------- Mobile Menu Toogle------------------------- */}
            <div className="icon-box md:hidden" onClick={toggleMenu}>
              <BiMenu />
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={showVideo} />
    </>
  );
};

export default Navbar;
