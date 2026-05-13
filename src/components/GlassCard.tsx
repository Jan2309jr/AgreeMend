'use strict';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'accent';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'light',
  onClick 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'dark':
        return 'glass-panel-dark shadow-xl';
      case 'accent':
        return 'bg-[#7a5c40] text-white border-[#9c7c5c] shadow-lg';
      default:
        return 'glass-panel shadow-sm hover:shadow-md transition-shadow';
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`border ${getVariantStyles()} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
