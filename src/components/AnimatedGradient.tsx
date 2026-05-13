'use strict';

import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedGradient: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {/* Decorative architectural grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#7a5c40_1px,transparent_1px),linear-gradient(to_bottom,#7a5c40_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Soft warm brown glowing background blob */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#9c7c5c]/10 blur-[120px]"
      />

      {/* Lighter beige secondary ambient shadow */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -10, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-[#7a5c40]/5 blur-[140px]"
      />
    </div>
  );
};
