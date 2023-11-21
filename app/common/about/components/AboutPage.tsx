"use client";
import React from "react";
import Image from "next/image";
import SocialMediaAbout from "./SocialMediaAbout";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/app/utils/fadeUpVariants";

const AboutPage = () => {
  return (
    <section className="container flex justify-between items-center max-w-5xl gap-x-8 mx-auto py-6 xs:flex-col xs:text-center lg:flex-row lg:text-justify">
      <motion.div
        initial={{ filter: "blur(4px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/media/profilepicture.jpg"
          width={300}
          height={250}
          alt="Profile"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeUpVariants}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center w-10/12 gap-y-6"
      >
        <h1 className="text-3xl font-semibold">Rahmat Hidayat</h1>
        <p className="">
          {" "}
          Hi! my name is Rahmat Hidayat u can call me yayat too. i&apos;m
          frontend developer who love to create beautiful and attractive web
          design, since i learn about frontend i really enjoyed my development
          skills, struggle to solve code, confusing and the error specially.
          when i enjoy that stuff it just make me curious about tech for future
          and ready to explore new technologies and staying up-to-date in
          frontend development.
        </p>
        <SocialMediaAbout />
      </motion.div>
    </section>
  );
};

export default AboutPage;
