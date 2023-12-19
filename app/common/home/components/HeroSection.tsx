"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/hooks/Button";
import { FaGithub } from "react-icons/fa6";
import { PiFileArrowDownBold } from "react-icons/pi";
import { AiFillMessage } from "react-icons/ai";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ filter: "blur(4px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1 }}
      className="dark:text-white w-10/12 mx-auto"
    >
      <div className="items-center flex xs:gap-y-3 xs:flex-col lg:flex-row">
        <div className="w-16">
          <Image
            src="/profile.png"
            width={50}
            height={50}
            alt="profile"
            className=" bg-gradient-to-r from-blue-700 to-sky-500 rounded-full"
          />
        </div>
        <p className=" text-white bg-dark dark:bg-white dark:text-dark rounded-full p-2 w-[18rem] text-center xs:text-base lg:text-xl">
          Hi, I&apos;m Rahmat Hidayat 🙌
        </p>
      </div>
      <h1 className="font-semibold bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent py-4 xs:text-5xl lg:text-6xl">
        Softwere Engineer
      </h1>
      <h2 className="lg:text-2xl xs:text-lg xs:text-start text-justify">
        I&apos;m interested with the modern web development. I build app using
        on demand technologies such as MERN Stack, Specially Next.js and
        Tailwind.css. Feel free to contact me :)
      </h2>
      <div className="flex gap-x-6 justify-center mt-8">
        <Button href="/about">
          {" "}
          <span className="mr-1">Get in Touch</span>
          <AiFillMessage />
        </Button>
        {/* <Button>
          <FaGithub />
          <span className="ml-1">Github</span>
        </Button> */}
      </div>
    </motion.section>
  );
};

export default HeroSection;
