'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface AdvancedButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  animate?: boolean;
  icon?: ReactNode;
}

export default function AdvancedButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  animate = true,
  icon
}: AdvancedButtonProps) {
  const variants = {
    primary: 'bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.4)]',
    secondary: 'bg-[#1e293b] hover:bg-[#273549] text-white border border-gray-700',
    outline: 'bg-transparent hover:bg-[rgba(59,130,246,0.1)] text-[#3b82f6] border border-[#3b82f6] hover:border-[#2563eb]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const animationClass = animate ? 'transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0' : '';
  const commonClasses = `rounded-md font-medium flex items-center justify-center gap-2 ${sizes[size]} ${variants[variant]} ${animationClass} ${className}`;

  // Position the icon with appropriate spacing
  const buttonContent = (
    <>
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </>
  );
  
  // Return as Link component if href is provided, otherwise as button
  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button className={commonClasses} onClick={onClick}>
      {buttonContent}
    </button>
  );
} 