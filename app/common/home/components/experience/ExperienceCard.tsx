"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ExperienceProps = {
  id: number;
  job: string;
  company: string;
  position: string;
  date: string;
  desc: string;
  skills: string[];
};

export default function ExperienceCard({
  id,
  job,
  company,
  position,
  date,
  desc,
  skills,
}: ExperienceProps): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="w-11/12 mx-auto p-8 rounded-lg shadow-xl bg-gray-200 dark:bg-dark-secondary cursor-grabbing"
      key={id}
    >
      <h1 className="text-3xl font-semibold">{job}</h1>
      <h2 className="text-lg font-semibold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
        {company}{" "}
        <span className="text-dark dark:text-white"> | {position}</span>
      </h2>
      <div className="flex gap-x-4 items-center">
        {skills.map((data, index) => (
          <Image
            src={data}
            width={35}
            height={35}
            alt="stack exp"
            className="py-3"
            key={index}
          />
        ))}
      </div>

      <p className="font-semibold text-gray-500 dark:text-gray-200 pb-3">
        {date}
      </p>
      <p className="">{desc}</p>
    </motion.div>
  );
}
