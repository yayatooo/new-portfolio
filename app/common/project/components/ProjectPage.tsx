"use client";
import React from "react";
import Image from "next/image";
import { allProject } from "@/app/utils/data";
import { GrCirclePlay } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { fadeUpVariants } from "@/app/utils/fadeUpVariants";
import { motion } from "framer-motion";

const ProjectPage = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeUpVariants}
      transition={{ duration: 0.5 }}
      className="container max-w-5xl mx-auto grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 mt-8 xs:px-6 lg:px-0"
    >
      {allProject.map((item, index) => (
        <div
          className="dark:bg-dark-secondary bg-gray-200 rounded-lg shadow-xl z-30"
          key={index}
        >
          <motion.div
            initial={{ filter: "blur(4px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={item.image}
              width={383}
              height={192}
              alt="project"
              className="rounded-t-lg"
            />
          </motion.div>
          <div className="p-4 space-y-2">
            <h1 className="font-semibold">{item.name}</h1>
            <p className="text-sm font-light text-gray-700 dark:text-white">
              {item.desc}
            </p>
            <div className="flex gap-x-3">
              {item.tech.map((techItem, index) => (
                <Image
                  key={index}
                  src={techItem}
                  width={24}
                  height={24}
                  alt=""
                />
              ))}
            </div>
            <div className="flex gap-x-4 w-full pt-4">
              <a
                href={item.repository}
                className="flex gap-x-1 items-center bg-white text-dark px-3 py-1 rounded-lg hover:bg-gray-200"
              >
                Repository
                <span>
                  <FaGithub />
                </span>
              </a>
              <a
                href={item.href}
                className="flex gap-x-1 items-center bg-white text-dark px-3 py-1 rounded-lg hover:bg-gray-300"
              >
                Demo{" "}
                <span>
                  <GrCirclePlay />
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default ProjectPage;
