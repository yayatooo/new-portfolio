"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const SubHeadingTittle = ({ children }: { children: ReactNode }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="lg:text-2xl xs:text-lg py-4 text-center w-10/12 mx-auto"
    >
      {children}
    </motion.p>
  );
};

export default SubHeadingTittle;
