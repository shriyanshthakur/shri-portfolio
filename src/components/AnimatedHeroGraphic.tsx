"use client";

import { motion } from "framer-motion";

export default function AnimatedHeroGraphic() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-48 h-48 md:w-64 md:h-64 border-[6px] border-black border-dashed flex items-center justify-center bg-white shadow-[8px_8px_0px_0px_var(--color-primary)]"
      aria-label="Animated Design and Dev Graphic"
    >
      <motion.svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-black p-4"
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      >
        <motion.g
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: 4, times: [0, 0.85, 1], repeat: Infinity, ease: "linear" }}
        >
          {/* Step 1: Design Path (Bezier Curve) */}
          <motion.path
            d="M 15,65 C 35,25 65,75 85,35"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1] }}
            transition={{ duration: 4, times: [0, 0.4, 1], repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Step 2: Geometric Pop (Circle & Triangle) */}
          <motion.circle 
            cx="35" 
            cy="45" 
            r="8" 
            initial={{ scale: 0 }}
            animate={{ scale: [0, 0, 1.3, 1, 1] }}
            transition={{ duration: 4, times: [0, 0.35, 0.45, 0.5, 1], repeat: Infinity }}
            style={{ originX: "35px", originY: "45px" }}
          />
          <motion.polygon 
            points="65,35 75,55 55,55" 
            initial={{ scale: 0 }}
            animate={{ scale: [0, 0, 1.3, 1, 1] }}
            transition={{ duration: 4, times: [0, 0.35, 0.45, 0.5, 1], repeat: Infinity }}
            style={{ originX: "65px", originY: "45px" }}
          />

          {/* Step 3: Dev Snap (Code Brackets) */}
          <motion.path 
            d="M 25,40 L 15,50 L 25,60" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0, 0, 1, 1], x: [-20, -20, 0, 0] }}
            transition={{ duration: 4, times: [0, 0.45, 0.55, 1], repeat: Infinity, ease: "easeOut" }}
          />
          <motion.path 
            d="M 75,40 L 85,50 L 75,60" 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: [0, 0, 1, 1], x: [20, 20, 0, 0] }}
            transition={{ duration: 4, times: [0, 0.45, 0.55, 1], repeat: Infinity, ease: "easeOut" }}
          />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}
