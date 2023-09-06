"use client";
import { motion } from "framer-motion";

type Tittle = {
  children: string;
};

const HeadingTittle = ({ children }: Tittle) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="text-center lg:text-6xl xs:text-5xl font-semibold "
    >
      {children}
    </motion.h1>
  );
};

export default HeadingTittle;
