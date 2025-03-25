'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-right' | 'slide-in-left' | 'scale-in';
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const animationClass = isVisible ? animation : '';
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={sectionRef}
      className={`${className} ${animationClass}`}
      style={{
        ...delayStyle,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
} 