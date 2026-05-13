'use strict';

import React from 'react';
import { RiskLevel } from '../store/useStore';
import { AlertOctagon, CheckCircle2, AlertTriangle } from 'lucide-react';

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({ level, className = '' }) => {
  const baseClasses = "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider border";
  
  if (level === 'Safe') {
    return (
      <span className={`${baseClasses} bg-emerald-50 text-emerald-800 border-emerald-300 ${className}`}>
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        Safe
      </span>
    );
  }

  if (level === 'Caution') {
    return (
      <span className={`${baseClasses} bg-amber-50 text-amber-800 border-amber-300 ${className}`}>
        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
        Caution
      </span>
    );
  }

  return (
    <span className={`${baseClasses} bg-rose-50 text-rose-800 border-rose-300 ${className}`}>
      <AlertOctagon className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
      Red Flag
    </span>
  );
};
