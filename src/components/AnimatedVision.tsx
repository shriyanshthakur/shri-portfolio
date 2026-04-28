"use client";

import { motion } from "framer-motion";

export default function AnimatedVision() {
  const TOTAL_DUR = 6;

  // Nodes for the graphic design wireframe effect
  const nodes = [
    { x: 14, y: 50 }, { x: 46, y: 50 }, { x: 30, y: 34 }, { x: 30, y: 66 },
    { x: 54, y: 50 }, { x: 86, y: 50 }, { x: 70, y: 34 }, { x: 70, y: 66 },
  ];

  return (
    <div 
      className="w-48 h-48 md:w-64 md:h-64 border-4 border-dashed border-[#0F0F0F] flex items-center justify-center bg-white shadow-[6px_6px_0px_0px_#A78BFA] relative overflow-hidden"
      aria-label="Animated Graphic Design Interface"
    >
      <motion.svg 
        viewBox="0 0 100 100"
        className="w-full h-full absolute inset-0"
        style={{ zIndex: 10 }}
      >
        {/* GD Bounding Boxes */}
        <motion.rect x="14" y="34" width="32" height="32" fill="none" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="2 2"
          animate={{ opacity: [0, 1, 1, 0, 0] }}
          transition={{ duration: TOTAL_DUR, times: [0, 0.05, 0.333, 0.366, 1], repeat: Infinity }}
        />
        <motion.rect x="54" y="34" width="32" height="32" fill="none" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="2 2"
          animate={{ opacity: [0, 1, 1, 0, 0] }}
          transition={{ duration: TOTAL_DUR, times: [0, 0.05, 0.333, 0.366, 1], repeat: Infinity }}
        />

        {/* GD Nodes / Anchor Points */}
        {nodes.map((node, i) => (
          <motion.rect 
            key={i}
            x={node.x - 1.5} y={node.y - 1.5} width="3" height="3" 
            fill="#FFFFFF" stroke="#3B82F6" strokeWidth="0.5"
            animate={{ scale: [0, 1, 1, 0, 0] }}
            transition={{ duration: TOTAL_DUR, times: [0, 0.08, 0.916, 0.95, 1], repeat: Infinity }}
            style={{ originX: `${node.x}px`, originY: `${node.y}px` }}
          />
        ))}

        {/* Main Artwork Geometry */}
        <g stroke="#0F0F0F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Lenses & Bridge */}
          <motion.circle cx="30" cy="50" r="16" 
            animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 1, 1, 1, 0] }}
            transition={{ duration: TOTAL_DUR, times: [0, 0.083, 0.333, 0.916, 0.95], repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle cx="70" cy="50" r="16" 
            animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 1, 1, 1, 0] }}
            transition={{ duration: TOTAL_DUR, times: [0, 0.083, 0.333, 0.916, 0.95], repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line x1="46" y1="50" x2="54" y2="50" 
            animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 1, 1, 1, 0] }}
            transition={{ duration: TOTAL_DUR, times: [0, 0.083, 0.333, 0.916, 0.95], repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Pupils */}
          <motion.g
            animate={{ x: [0, 0, 4, -4, 0, 0] }}
            transition={{ duration: TOTAL_DUR, times: [0, 0.583, 0.65, 0.75, 0.85, 1], repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.circle 
              cx="30" cy="50" r="4" 
              fill="#0F0F0F" stroke="none" 
              animate={{ scale: [0, 0, 1.3, 1, 1, 0], opacity: [0, 0, 1, 1, 1, 0] }}
              transition={{ duration: TOTAL_DUR, times: [0, 0.43, 0.45, 0.48, 0.916, 0.95], repeat: Infinity }}
              style={{ originX: "30px", originY: "50px" }}
            />
            <motion.circle 
              cx="70" cy="50" r="4" 
              fill="#0F0F0F" stroke="none" 
              animate={{ scale: [0, 0, 1.3, 1, 1, 0], opacity: [0, 0, 1, 1, 1, 0] }}
              transition={{ duration: TOTAL_DUR, times: [0, 0.55, 0.57, 0.6, 0.916, 0.95], repeat: Infinity }}
              style={{ originX: "70px", originY: "50px" }}
            />
          </motion.g>
        </g>
      </motion.svg>

      {/* Simulated Mouse Cursor Layer */}
      <motion.div
        className="absolute w-5 h-5 z-20 pointer-events-none"
        animate={{ 
          left: ["50%", "50%", "30%", "30%", "30%", "70%", "70%", "70%", "120%", "120%"],
          top: ["120%", "120%", "50%", "50%", "50%", "50%", "50%", "50%", "120%", "120%"],
          scale: [1, 1, 1, 0.8, 1, 1, 0.8, 1, 1, 1]
        }}
        transition={{ 
          duration: TOTAL_DUR, 
          times: [0, 0.333, 0.4, 0.416, 0.433, 0.516, 0.533, 0.55, 0.666, 1], 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 16 24" className="w-full h-full drop-shadow-md">
          <path d="M0,0 L0,15 L4,12 L8,20 L11,19 L7,11 L12,11 Z" fill="#0F0F0F" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}
