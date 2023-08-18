// "use client";
import React from "react";
import Image from "next/image";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
// import { useTheme } from "next-themes";

type LinkProps = {
  name: string;
  href: string;
};

const linkTo: LinkProps[] = [
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Project",
    href: "/project",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  // const { theme, setTheme } = useTheme();

  return (
    <nav className="container flex justify-between max-w-5xl mt-8 text-dark dark:text-white mx-auto xs:px-4 lg:px-0">
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
      </div>
    </nav>
  );
};

export default Navbar;
