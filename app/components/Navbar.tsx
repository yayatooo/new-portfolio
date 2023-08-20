"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { linkTo } from "../project/data";
import { useState, useEffect } from "react";
import NavMobile from "./NavMobile";
import { LuMenu } from "react-icons/lu";

type LinkProps = {
  name: string;
  href: string;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSide, setOpenSide] = useState(false);

  const clickMenu = () => {
    setOpenSide(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`container max-w-5xl mx-auto flex justify-between sticky top-0 z-40 rounded-full max-full p-6 text-dark dark:text-white xs:px-4 ${
        scrolled ? "bg-white/10" : ""
      }`}
    >
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
                className="bg-gray-200 dark:bg-dark rounded-full px-2 py-1"
              >
                {data.name}
              </Link>
            );
          })}
          <ThemeSwitcher />
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
