"use client";
import Link from "next/link";
import { linkTo } from "@/app/utils/data";
import { useState } from "react";
import NavMobile from "./NavMobile";
import { LuMenu } from "react-icons/lu";
import { useWindowOnEvent } from "../useWindowsOnEvent";
import classNames from "classnames";
import ThemeToggle from "../ToggleTheme";

type LinkProps = {
  name: string;
  href: string;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSide, setOpenSide] = useState(false);
  // const [activeNavigationLink, setActiveNavigationLink] = useState("home");

  const clickMenu = () => {
    setOpenSide(true);
  };

  useWindowOnEvent("scroll", (): void => {
    window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
  });

  return (
    <nav
      className={classNames(
        "container max-w-5xl mx-auto flex justify-between sticky top-0 z-40 rounded-full max-full p-6 text-dark dark:text-white xs:px-4",
        scrolled ? "bg-white/10 backdrop-blur-md" : ""
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
        <NavMobile openSide={openSide} setOpenSide={setOpenSide} />
      </div>
      <button
        className="text-3xl flex items-center lg:hidden"
        onClick={clickMenu}
      >
        <LuMenu />
      </button>
    </nav>
  );
};

export default Navbar;
