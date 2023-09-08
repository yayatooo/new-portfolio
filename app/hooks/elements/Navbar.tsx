"use client";
import Link from "next/link";
import { linkTo } from "@/app/utils/data";
import { useState } from "react";
import NavMobile from "./NavMobile";
import { LuMenu } from "react-icons/lu";
import classNames from "classnames";
import ThemeToggle from "../ToggleTheme";
import { motion } from "framer-motion";
// import Image from "next/image";
import useScroll from "../useScroll";

// type LinkProps = {
//   name: string;
//   href: string;
// };

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSide, setOpenSide] = useState(false);
  const scroll = useScroll(20);

  const clickMenu = () => {
    setOpenSide(true);
  };

  return (
    <>
      <NavMobile openSide={openSide} setOpenSide={setOpenSide} />
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={classNames(
          "container max-w-5xl mx-auto flex justify-between sticky top-0 z-40 rounded-full max-full p-6 text-dark dark:text-white xs:px-4",
          scrolled ? "sm:bg-white/10 backdrop-blur-md" : scroll
        )}
      >
        {/* <nav className="container max-w-5xl mx-auto flex justify-end"> */}
        {/* <Image src="/logo.png" width={50} height={50} alt="logo" /> */}
        <Link href="/" className="text-2xl font-semibold">
          Yato
          <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
            Dev
          </span>
        </Link>
        <div>
          <div className=" gap-x-8 text-lg items-center xs:hidden lg:flex">
            {linkTo.map((data, i) => {
              return (
                <Link
                  key={i}
                  href={data.href}
                  className="bg-gray-200 dark:bg-dark rounded-full px-2 py-1 text-base"
                >
                  {data.name}
                </Link>
              );
            })}
            {/* <ThemeSwitcher /> */}
            <ThemeToggle />
          </div>
        </div>
        <button
          className="text-3xl flex items-center lg:hidden"
          onClick={clickMenu}
        >
          <LuMenu />
        </button>
      </motion.nav>
    </>
  );
};

export default Navbar;
