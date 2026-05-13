'use strict';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Cpu, CheckCircle } from 'lucide-react';

interface AIThinkingLoaderProps {
  step: number;
}

export const AIThinkingLoader: React.FC<AIThinkingLoaderProps> = ({ step }) => {
  const steps = [
    { title: "Extracting contract clauses...", icon: FileText },
    { title: "Running global AI legal risk analysis...", icon: Cpu },
    { title: "Detecting hidden penalty & liabilities...", icon: Scale },
    { title: "Cross-referencing regional compliance...", icon: CheckCircle },
    { title: "Generating plain-English explanations...", icon: FileText }
  ];

  return (
    <div className="p-8 border bg-white max-w-md w-full mx-auto shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex items-center justify-center w-10 h-10 bg-[#7a5c40] text-white">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-[#9c7c5c] border-t-transparent"
          />
          <Cpu className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#1a1a1a]">AgreeMend AI Processing</h4>
          <p className="text-xs text-[#6b6b61]">Multi-domain Legal Engine Active</p>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isDone = idx < step;
          const isCurrent = idx === step;
          
          return (
            <div key={idx} className="flex items-center gap-3">
              <div className={`w-6 h-6 flex items-center justify-center border text-xs font-bold transition-colors ${
                isDone ? 'bg-[#7a5c40] text-white border-[#7a5c40]' :
                isCurrent ? 'border-[#9c7c5c] text-[#7a5c40] bg-[#9c7c5c]/10' :
                'border-[#d2d3c9] text-[#d2d3c9]'
              }`}>
                {isDone ? '✓' : idx + 1}
              </div>
              <span className={`text-xs font-medium ${
                isDone ? 'text-[#1a1a1a] line-through opacity-60' :
                isCurrent ? 'text-[#7a5c40] font-bold' :
                'text-[#6b6b61]'
              }`}>
                {item.title}
              </span>
              {isCurrent && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-[#7a5c40] ml-auto"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-[#d2d3c9]/60 flex items-center justify-between text-[10px] text-[#6b6b61]">
        <span>MODEL: AgreeMend Legal-v4.2</span>
        <span>LATENCY: ~1.2s</span>
      </div>
    </div>
  );
};
