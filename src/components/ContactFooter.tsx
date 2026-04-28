"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export default function ContactFooter() {
  const contactLines = Array(8).fill(null);

  return (
    <footer id="contact" className="mt-20 md:mt-48 w-full border-t-12 border-black bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32 md:px-12">
        <h2 className="font-anton text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] uppercase text-center md:text-left leading-[0.85] tracking-tighter mb-12 md:mb-24">
          Let's Make <br className="hidden md:block" />
          <span className="text-primary italic">Something</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-12 mt-12 md:mt-16">
          <div className="flex-1 space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl font-bold tracking-widest">
            <p className="flex items-center gap-4 md:gap-6">
              <Phone className="text-primary w-8 h-8 md:w-9 md:h-9" /> +91 9302983006
            </p>
            <p className="flex items-center gap-4 md:gap-6">
              <Mail className="text-primary w-8 h-8 md:w-9 md:h-9" /> shriyanshthakur12@gmail.com
            </p>
            <p className="flex items-center gap-4 md:gap-6">
              <MapPin className="text-primary w-8 h-8 md:w-9 md:h-9" /> Bilaspur, India
            </p>
            
            <a
              href="https://wa.me/919302983006"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 md:gap-4 mt-8 md:mt-12 bg-[#25D366] text-white px-6 sm:px-10 py-4 md:py-5 border-[6px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] md:hover:translate-x-[8px] md:hover:translate-y-[8px] transition-all"
            >
              <MessageSquare className="w-8 h-8 md:w-9 md:h-9" /> WhatsApp Me
            </a>
          </div>
          
          <div className="flex-1 flex flex-col justify-end mt-12 md:mt-0">
            <p className="font-caveat text-4xl sm:text-5xl md:text-6xl text-center md:text-right mb-4 md:mb-6 text-primary font-bold">
              Waiting for your brief.
            </p>
            <p className="font-bold text-center md:text-right tracking-widest text-sm sm:text-base md:text-xl">
              © 2026 shri. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Tear-off fringes at the bottom */}
      <div className="w-full flex overflow-x-auto overflow-y-hidden border-t-8 border-black h-32 sm:h-48 md:h-64 no-scrollbar">
        {contactLines.map((_, i) => (
          <div key={i} className="flex-1 min-w-[60px] sm:min-w-[80px] border-r-[4px] md:border-r-[6px] border-black border-dashed flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
            <div className="rotate-90 whitespace-nowrap font-anton text-xl sm:text-2xl md:text-4xl uppercase tracking-widest pt-1 md:pt-2 group-hover:text-white transition-colors flex items-center gap-2 md:gap-4">
              Call Shri <Phone className="-rotate-90 w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>
        ))}
        {/* last edge piece to avoid trailing border */}
        <div className="flex-1 min-w-[60px] sm:min-w-[80px] flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
          <div className="rotate-90 whitespace-nowrap font-anton text-xl sm:text-2xl md:text-4xl uppercase tracking-widest pt-1 md:pt-2 group-hover:text-white transition-colors flex items-center gap-2 md:gap-4">
            Call Shri <Phone className="-rotate-90 w-4 h-4 md:w-6 md:h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
