"use client";

import { motion, Variants } from "framer-motion";

export default function BinocularScout() {
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut", delay: 0.2 }
    }
  };

  return (
    <div 
      className="w-48 h-48 md:w-64 md:h-64 border-4 border-dashed border-[#41431B] flex items-center justify-center bg-[#F8F3E1] shadow-[8px_8px_0px_0px_#AEB784]"
      aria-label="Animated Binocular Scout"
    >
      <motion.svg 
        viewBox="0 0 100 100"
        className="w-full h-full p-4"
        initial={{ rotate: 0 }}
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.5 }}
      >
        <g fill="transparent" stroke="#41431B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Tubes */}
          <motion.path d="M 20,50 L 28,15 L 42,15 L 46,50" variants={draw} initial="hidden" animate="visible" />
          <motion.path d="M 80,50 L 72,15 L 58,15 L 54,50" variants={draw} initial="hidden" animate="visible" />
          
          {/* Eyepieces */}
          <motion.rect x="25" y="10" width="20" height="5" rx="2" variants={draw} initial="hidden" animate="visible" />
          <motion.rect x="55" y="10" width="20" height="5" rx="2" variants={draw} initial="hidden" animate="visible" />
          
          {/* Bridge / Focus Wheel */}
          <motion.rect x="44" y="25" width="12" height="15" rx="2" variants={draw} initial="hidden" animate="visible" />
          <motion.line x1="50" y1="40" x2="50" y2="55" variants={draw} initial="hidden" animate="visible" />
          <motion.line x1="42" y1="20" x2="58" y2="20" variants={draw} initial="hidden" animate="visible" />

          {/* Outer Lenses */}
          <motion.circle cx="32" cy="65" r="18" variants={draw} initial="hidden" animate="visible" />
          <motion.circle cx="68" cy="65" r="18" variants={draw} initial="hidden" animate="visible" />

          {/* Inner Lenses (Animated Fill) */}
          <motion.circle 
            cx="32" cy="65" r="10" 
            initial={{ pathLength: 0, opacity: 0, fill: "transparent" }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              fill: ["transparent", "#AEB784"] 
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut", delay: 0.2 },
              opacity: { duration: 0.2, delay: 0.2 },
              fill: { delay: 2.2, duration: 0.5, ease: "easeOut" }
            }}
          />
          <motion.circle 
            cx="68" cy="65" r="10" 
            initial={{ pathLength: 0, opacity: 0, fill: "transparent" }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              fill: ["transparent", "#AEB784"] 
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut", delay: 0.2 },
              opacity: { duration: 0.2, delay: 0.2 },
              fill: { delay: 2.2, duration: 0.5, ease: "easeOut" }
            }}
          />
        </g>
      </motion.svg>
    </div>
  );
}
