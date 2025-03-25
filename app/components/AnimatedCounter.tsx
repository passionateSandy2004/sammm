'use client';

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  once?: boolean;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className = "",
  suffix = "",
  once = true,
}: AnimatedCounterProps) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once, margin: "-10% 0px" });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0.1,
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [displayValue, setDisplayValue] = useState(from);
  
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(to);
      }, delay * 1000);
    }
  }, [isInView, motionValue, to, delay]);
  
  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      // For large numbers, round more aggressively as the value gets higher
      if (to > 100) {
        const precision = latest > to * 0.9 ? 0 : latest > to * 0.5 ? 0 : 0;
        setDisplayValue(Number(latest.toFixed(precision)));
      } else {
        setDisplayValue(Math.round(latest));
      }
    });
    
    return unsubscribe;
  }, [springValue, to]);
  
  return (
    <motion.span 
      ref={nodeRef} 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {displayValue}{suffix}
    </motion.span>
  );
} 