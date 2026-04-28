"use client";

import { motion } from "framer-motion";
import AnimatedVision from "./AnimatedVision";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 mx-auto max-w-7xl mt-12 md:mt-24 space-y-8 relative z-10">
      <AnimatedVision />

      {/* Text Content */}
      <div className="flex flex-col items-center space-y-6 pt-4">
        <motion.p 
          initial={{ opacity: 0, rotate: -2 }}
          animate={{ opacity: 1, rotate: -3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-caveat text-2xl sm:text-3xl md:text-5xl text-primary font-bold px-4"
        >
          Hello, I'm Shriyansh.
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-anton text-[4rem] sm:text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] uppercase tracking-tighter"
        >
          Designer 
        </motion.h1>

        {/* <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-lg sm:text-xl md:text-3xl font-bold uppercase tracking-widest mt-8 bg-black text-white px-4 sm:px-6 py-2"
        >
          Shriyansh <span className="text-primary hidden sm:inline mx-2">|</span> 
          <MapPin size={24} className="text-primary sm:w-7 sm:h-7" /> Bilaspur
        </motion.div> */} 
      </div>

      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-5 bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-widest px-6 sm:px-8 md:px-16 py-4 md:py-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] md:hover:translate-x-[8px] md:hover:translate-y-[8px] transition-all"
        onClick={() => {
          document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        View Portfolio
      </motion.button>
    </section>
  );
}
