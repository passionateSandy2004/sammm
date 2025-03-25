"use client"

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
}

export default function StaggeredText({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.1,
  once = true,
}: StaggeredTextProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
} 