'use client';

import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';

interface ParallaxBackgroundProps {
  children: ReactNode;
  imageSrc: string;
  height?: string;
  overlayColor?: string;
  className?: string;
}

export default function ParallaxBackground({
  children,
  imageSrc,
  height = '600px',
  overlayColor = 'rgba(10,10,10,0.7)',
  className = '',
}: ParallaxBackgroundProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add smooth scroll behavior
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Transform image based on scroll position
  const transformValue = `translateY(${scrollPosition * 0.15}px)`;

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ height }}
    >
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{ transform: transformValue }}
      >
        <Image
          src={imageSrc}
          alt="Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(to bottom, rgba(10,10,10,0.5), ${overlayColor} 70%, #0a0a0a)`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
} 