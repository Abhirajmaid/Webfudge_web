"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { BiMenu, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import {
  closeDropdown,
  closeSidebar,
  openSidebar,
  toggleDarkMode,
  uiStore,
} from "../../redux/features/uiSlice";

import { navLinks } from "../../data/navLinks";
import SingleLink from "./SingleLink";
import Model from "./Model";

const Navbar = ({ isShowMode }) => {
  const rootDoc = document.querySelector(":root");
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const dispatch = useDispatch();

  // dark Mode
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

  // Dark mode toggle
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  // Store darkmode value to localStorage;
  useEffect(() => {
    if (darkMode) rootDoc.classList.add("dark");
    else rootDoc.classList.remove("dark");
    localStorage.setItem("Martvilla-theme-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleClose = (e) => {
    if (!e.target.classList.contains("link")) {
      dispatch(closeDropdown());
    }
  };

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("mobile-modal")) dispatch(closeSidebar());
  };

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
        onMouseOver={handleClose}
      >
        <Link
          href="/"
          className="flex-shrink-0 flex-align-center gap-x-1 opacity-100"
        >
          {darkMode ? (
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
          <ul className={`hidden md:flex-align-center md:gap-x-10`}>
            {navLinks.map((link) => (
              <SingleLink {...link} key={link.id} />
            ))}
          </ul>

          {/*---------------------------------------- Mobile Menu------------------------------------- */}
          <div
            className={`lg:hidden mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-a  ${
              isSidebarOpen && "open"
            }`}
            onClick={handleCloseSidebar}
          >
            <ul
              className={`mobile-dialog overflow-auto absolute flex flex-col space-y-4 p-3 bg-white dark:bg-dark h-screen max-w-[300px] w-full -translate-x-[500px] transition-a ${
                isSidebarOpen && "open"
              }`}
            >
              <div className="border-b flex-center-between dark:border-slate-800">
                <p className="uppercase">menu</p>
                <div
                  className="icon-box md:hidden"
                  onClick={() => dispatch(closeSidebar())}
                >
                  <FiDelete />
                </div>
              </div>
              {navLinks?.map(({ id, linkText, url, subLinks }) => (
                <ul key={id}>
                  <Link
                    href={url}
                    end
                    className="w-fit before:!hidden"
                    onClick={() => dispatch(closeSidebar())}
                  >
                    {linkText}
                  </Link>
                  {subLinks?.map(({ id, linkText, url }) => (
                    <ul key={id} className="mt-2">
                      <Link
                        href={url}
                        end
                        className="relative ml-8 text-sm before:hidden w-fit after:absolute after:w-2 after:h-2 after:rounded-full after:border-2 after:top-1/2 after:-translate-y-1/2 after:-left-4 dark:after:opacity-50"
                        onClick={() => dispatch(closeSidebar())}
                      >
                        {linkText}
                      </Link>
                    </ul>
                  ))}
                </ul>
              ))}
            </ul>
          </div>

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
                onClick={handleDarkMode}
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </div>
            ) : (
              <></>
            )}
            {/*----------------------------- Profile Icon-------------------------------------------------- */}
            {/* {user ? (
            <Link to="/user-profile">
            <div className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent">
            <BiUser />
            </div>
            </Link>
            ) : (
              <Link to="/signin">
              <button className=" text-sm md:text-inherit btn md:w-fit bg-white shadow-md dark:bg-dark-light hover:shadow-lg hover:bg-transparent">
              Sign In
              </button>
              </Link>
            )} */}

            {/*------------------------------- Mobile Menu Toogle------------------------- */}
            <div
              className="icon-box md:hidden"
              onClick={() => dispatch(openSidebar())}
            >
              <BiMenu />
            </div>
          </div>
        </div>
      </div>
      <Model onClose={handleOnClose} visible={showVideo} />
    </>
  );
};

export default Navbar;
