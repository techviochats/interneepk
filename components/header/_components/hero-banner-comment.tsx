"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroBannerComment = () => {
  return (
    <div className="flex flex-wrap gap-x-2 capitalize overflow-hidden">
      {"Looking for dream internship?".split(" ").map((val, index) => (
        <motion.h1
          key={index}
          className="text-5xl font-semibold tracking-tighter leading-[3.5rem]"
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          transition={{ delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
        >
          {val}
        </motion.h1>
      ))}
    </div>
  );
};

export default HeroBannerComment;
