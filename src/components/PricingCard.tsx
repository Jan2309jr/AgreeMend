'use strict';

import React from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div className={`border bg-white relative flex flex-col justify-between p-6 transition-all ${
      plan.popular 
        ? 'border-2 border-[#7a5c40] shadow-xl ring-1 ring-[#7a5c40]/10 scale-105 z-10' 
        : 'border-[#d2d3c9] hover:border-[#7a5c40]'
    }`}>
      {plan.popular && (
        <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-[#7a5c40] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-xs">
          Most Popular
        </div>
      )}

      <div>
        <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-wider">{plan.name}</h3>
        <p className="text-xs text-[#6b6b61] mt-1 min-h-[32px]">{plan.description}</p>
        
        <div className="mt-4 pt-4 border-t border-[#d2d3c9]/60 flex items-baseline gap-1">
          <span className="text-3xl font-black tracking-tight text-[#1a1a1a]">{plan.price}</span>
          <span className="text-xs text-[#6b6b61] font-medium">{plan.period}</span>
        </div>

        <ul className="mt-6 space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1a1a1a]">
              <div className="mt-0.5 w-3.5 h-3.5 bg-[#f0f0e8] text-[#7a5c40] flex items-center justify-center shrink-0 border border-[#d2d3c9]">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="font-medium leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4 border-t border-[#d2d3c9]/40">
        <button className={`w-full py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
          plan.popular
            ? 'bg-[#7a5c40] text-white hover:bg-[#5c432d]'
            : 'bg-[#f0f0e8] text-[#1a1a1a] hover:bg-[#7a5c40] hover:text-white border border-[#d2d3c9]'
        }`}>
          {plan.ctaText}
        </button>
      </div>
    </div>
  );
};
