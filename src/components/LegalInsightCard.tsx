'use strict';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LegalInsightCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: 'default' | 'danger' | 'warning' | 'success';
}

export const LegalInsightCard: React.FC<LegalInsightCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = 'default'
}) => {
  const getBorderColor = () => {
    switch (variant) {
      case 'danger': return 'border-b-4 border-b-red-700';
      case 'warning': return 'border-b-4 border-b-amber-600';
      case 'success': return 'border-b-4 border-b-emerald-700';
      default: return 'border-b-4 border-b-[#7a5c40]';
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'danger': return 'text-red-700 bg-red-50';
      case 'warning': return 'text-amber-600 bg-amber-50';
      case 'success': return 'text-emerald-700 bg-emerald-50';
      default: return 'text-[#7a5c40] bg-[#f0f0e8]';
    }
  };

  return (
    <div className={`bg-white border border-[#d2d3c9] p-4 flex flex-col justify-between ${getBorderColor()}`}>
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-bold text-[#6b6b61] uppercase tracking-wider line-clamp-1">{title}</span>
        <div className={`p-1.5 border border-[#d2d3c9]/40 ${getIconColor()}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      
      <div className="mt-2">
        <div className="text-2xl font-black text-[#1a1a1a] tracking-tight">{value}</div>
        {subtitle && (
          <p className="text-[10px] text-[#6b6b61] mt-0.5 font-medium truncate">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
