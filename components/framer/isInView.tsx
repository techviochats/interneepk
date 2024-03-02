"use client";
import React, { useEffect, useRef } from "react";
import { useInView, motion, Variant, Variants } from "framer-motion";
import { ChildrenTypes } from "@/@types/children-types";
interface MotionType extends ChildrenTypes {
  className?: string;
  x1?: string;
  x2?: string;
  y1?: string;
  y2?: string;
}

const MotionDiv: React.FC<MotionType> = ({
  children,
  className,
  x1 = "0",
  x2 = "-50%",
  y1 = "0",
  y2 = "0",
}: MotionType) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
      x: x1,
      y1: y1,
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
        delay: 0.5,
      },
      x: x2,
      y: y2,
    },
  };
  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
