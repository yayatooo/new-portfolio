"use client";
import React from "react";
import Image from "next/image";
import HeadingTittle from "@/app/hooks/HeadingTittle";
import SubHeadingTittle from "@/app/hooks/SubHeadingTittle";
import { motion } from "framer-motion";
import IconCloud from "@/components/magicui/icon-cloud";

const Skills = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full py-20"
    >
      <div className="container max-w-5xl mx-auto flex flex-col justify-center text-center">
        <HeadingTittle>Skills</HeadingTittle>
        <SubHeadingTittle>
          List of the technologies that I&apos;ve use
        </SubHeadingTittle>
      </div>
      <div className="relative flex h-full w-full items-center justify-center">
        <IconCloud iconSlugs={slugs} />
      </div>
    </motion.section>
  );
};

export default Skills;
