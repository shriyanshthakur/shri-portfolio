"use client";

import { motion } from "framer-motion";

export default function CruProjectCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="border-[6px] border-black bg-white flex flex-col group cursor-pointer hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden"
    >
      {/* Interactive Hero Area (16:9 Aspect Ratio) */}
      <div className="w-full aspect-video border-b-[6px] border-black relative bg-[#111111] overflow-hidden">
        
        {/* Animated Dashboard UI Container */}
        <div className="w-full h-full flex group-hover:scale-105 transition-transform duration-500 ease-out relative z-0">
          {/* Sidebar */}
          <div className="w-[25%] h-full bg-[#1A1A1A] border-r border-[#333] flex flex-col gap-3 p-3 md:p-4">
            <div className="w-full h-3 md:h-4 bg-[#333] rounded-md animate-pulse" />
            <div className="w-3/4 h-2 md:h-3 bg-[#222] rounded-md mt-4 md:mt-6" />
            <div className="w-full h-2 md:h-3 bg-[#222] rounded-md" />
            <div className="w-2/3 h-2 md:h-3 bg-[#222] rounded-md" />
            <div className="w-5/6 h-2 md:h-3 bg-[#222] rounded-md" />
          </div>
          
          {/* Main Content */}
          <div className="w-[75%] h-full bg-[#111] flex flex-col p-4 md:p-5 gap-4 md:gap-5">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="w-1/3 h-4 md:h-6 bg-[#222] rounded-md animate-pulse" />
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#AEB784] opacity-20 animate-pulse" />
            </div>
            
            {/* Data Cards */}
            <div className="flex gap-3 md:gap-4 h-20 md:h-24">
              <div className="flex-1 bg-[#1A1A1A] rounded-lg border border-[#333] p-2 md:p-3 flex flex-col justify-between">
                <div className="w-1/2 h-2 md:h-3 bg-[#333] rounded" />
                <div className="w-3/4 h-6 md:h-8 bg-[#AEB784]/20 rounded animate-pulse" />
              </div>
              <div className="flex-1 bg-[#1A1A1A] rounded-lg border border-[#333] p-2 md:p-3 flex flex-col justify-between">
                <div className="w-1/2 h-2 md:h-3 bg-[#333] rounded" />
                <div className="w-3/4 h-6 md:h-8 bg-[#A78BFA]/20 rounded animate-pulse" />
              </div>
            </div>
            
            {/* Chart Area */}
            <div className="flex-1 bg-[#1A1A1A] rounded-lg border border-[#333] relative overflow-hidden" />
          </div>
        </div>

        {/* The EKG Animation Overlay */}
        <motion.svg 
          viewBox="0 0 160 90" 
          className="absolute inset-0 w-full h-full z-10 pointer-events-none" 
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path 
            d="M 0 45 L 40 45 L 48 30 L 55 75 L 65 15 L 75 60 L 82 45 L 160 45"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-white group-hover:stroke-[#AEB784] transition-colors duration-500"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.svg>
      </div>

      {/* Content Wrapper */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
        <h3 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider mb-4 leading-none text-black group-hover:text-primary transition-colors duration-300">
          CRU HEALTH PLATFORM
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {["UI/UX Design", "Next.js", "Frontend Architecture"].map((tag) => (
            <span key={tag} className="border-2 border-black px-2 py-1 text-xs font-bold uppercase tracking-widest text-black group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 bg-gray-50">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="font-medium text-lg leading-relaxed text-black mb-2">
          Led the creative direction and frontend architecture for a comprehensive health screening platform. Built scalable React components with a focus on accessible, data-dense interfaces.
        </p>
      </div>
    </motion.div>
  );
}
