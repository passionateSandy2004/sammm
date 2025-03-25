"use client"

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
  type?: "heading" | "paragraph" | "button" | "default";
}

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  headingHidden: {
    opacity: 0,
    y: 50,
  },
  headingVisible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.7,
      ease: "easeOut"
    }
  }),
  paragraphHidden: {
    opacity: 0,
    y: 20,
  },
  paragraphVisible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  buttonHidden: {
    opacity: 0,
    y: 10,
    scale: 0.95,
  },
  buttonVisible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  }),
};

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  once = true,
  type = "default",
  direction = "up",
}: AnimatedTextProps) {
  // Determine which variant to use based on the type
  const getVariant = () => {
    switch (type) {
      case "heading":
        return {
          hidden: "headingHidden",
          visible: "headingVisible"
        };
      case "paragraph":
        return {
          hidden: "paragraphHidden",
          visible: "paragraphVisible"
        };
      case "button":
        return {
          hidden: "buttonHidden",
          visible: "buttonVisible"
        };
      default:
        return {
          hidden: "hidden",
          visible: "visible"
        };
    }
  };

  // Handle direction for initial state
  const getDirectionalVariant = () => {
    const baseVariant = getVariant();
    
    // Custom initial state based on direction
    const directionValues = {
      up: { y: 20 },
      down: { y: -20 },
      left: { x: 20, y: 0 },
      right: { x: -20, y: 0 }
    };
    
    return {
      hidden: {
        ...variants[baseVariant.hidden],
        ...directionValues[direction]
      },
      visible: variants[baseVariant.visible]
    };
  };

  const { hidden, visible } = getDirectionalVariant();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      custom={delay}
      variants={{
        hidden,
        visible
      }}
    >
      {children}
    </motion.div>
  );
} 