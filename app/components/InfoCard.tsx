'use client';

import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
  hoverEffect?: boolean;
}

export default function InfoCard({
  title,
  description,
  icon,
  className = '',
  children,
  hoverEffect = true
}: InfoCardProps) {
  const hoverClass = hoverEffect ? 'hover-lift' : '';
  
  return (
    <div className={`bg-[#0e1623] rounded-lg p-6 shadow-xl transition-all duration-300 ${hoverClass} ${className}`}>
      {icon && (
        <div className="text-blue-400 text-3xl mb-4">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      {description && (
        <p className="text-gray-300 text-sm mb-4">{description}</p>
      )}
      
      {children}
    </div>
  );
} 