"use client";
import React from "react";
import { careerList } from "@/app/utils/data";
import { fadeUpVariants } from "@/app/utils/fadeUpVariants";
import { motion } from "framer-motion";

const CareerPage = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeUpVariants}
      transition={{ duration: 0.5 }}
      className="container max-w-5xl pt-10"
    >
      <h1 className="text-4xl font-semibold py-8 text-center lg:text-start">
        My Career So Far
      </h1>
      <div className="flex justify-between items-center xs:flex-col lg:flex-row gap-4">
        <p className=" xs:mx-auto xs:w-10/12 xs:text-center lg:text-start lg:mx-0 lg:w-8/12">
          I started my career as a designer when I was in high school then I
          switched to the world of videography to become an editor for a short
          film and was invited several times to document an event at a
          government agency. after a long career in videography I quit the job I
          liked. then I started my college in the information systems department
          at the beginning of my introduction to the IT world I felt that I was
          not suitable to be a programmer. it turns out that I was wrong in
          looking at the IT world. once I found out that programmers are divided
          into several parts that's where I got to know frontend development.
          and after a year of learning and everything that has been passed I
          began to love everything about frontend development and began to get
          my career goals again :)
        </p>
        <ul className="flex flex-wrap justify-center xs:w-11/12 lg:w-3/12 gap-2 lg:justify-start">
          {careerList.map((item, index) => (
            <li
              className="font-semibold bg-gray-200 dark:bg-dark-secondary rounded-md p-1"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default CareerPage;
