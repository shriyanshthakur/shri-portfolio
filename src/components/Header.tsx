"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b-[4px] border-black py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-anton text-3xl uppercase tracking-widest hover:text-primary transition-colors">
          Shri
        </a>
        <nav className="hidden md:flex items-center gap-8 font-bold uppercase tracking-widest text-sm">
          <a href="#about" className="hover:text-primary transition-colors">Weaponry</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Works</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        {/* Mobile Nav Button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="w-8 h-1 bg-black block"></span>
          <span className="w-8 h-1 bg-black block"></span>
          <span className="w-8 h-1 bg-black block"></span>
        </button>
      </div>
    </motion.header>
  );
}
