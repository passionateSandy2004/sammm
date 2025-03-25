"use client"

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}

export default function AnimatedItem({
  children,
  className = "",
  direction = "up",
  distance = 20,
  duration = 0.5,
}: AnimatedItemProps) {
  
  // Set initial position based on direction
  const getDirectionalVariant = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { y: distance };
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getDirectionalVariant(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
} 