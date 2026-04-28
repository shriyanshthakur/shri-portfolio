"use client";

import { motion } from "framer-motion";

import { PenTool, TabletSmartphone, Code2 } from "lucide-react";

const skills = [
  {
    category: "BRAND & IDENTITY",
    description: "Crafting memorable logos, visual systems, and editorial layouts that cut through the noise.",
    colSpan: "md:col-span-7",
    tags: ["AFFINITY", "ILLUSTRATOR", "INDESIGN", "CANVA"],
    icon: PenTool
  },
  {
    category: "UI / UX DESIGN",
    description: "Architecting intuitive user flows and pixel-perfect interfaces that engage and convert.",
    colSpan: "md:col-span-5",
    tags: ["WIREFRAMING", "PROTOTYPING", "USER RESEARCH"],
    icon: TabletSmartphone
  },
  {
    category: "DIGITAL ENGINEERING",
    description: "Building robust, scalable applications. From lightning-fast web platforms to cross-platform mobile experiences.",
    colSpan: "md:col-span-12",
    tags: ["NEXT.JS", "REACT", "FLUTTER", "REACT NATIVE"],
    icon: Code2
  }
];

export default function AboutServices() {
  return (
    <section id="about" className="mt-20 md:mt-48 w-full max-w-7xl px-4 sm:px-6 md:px-12 mx-auto border-t-12 border-black pt-12 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
      >
        <h2 className="font-anton text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase mb-6 md:mb-0 leading-[0.85] tracking-tighter">
          My<br /><span className="text-primary">Weaponry</span>
        </h2>
        <p className="max-w-md text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed border-l-4 border-primary pl-4 sm:pl-6">
          I don't just make things look good; I build systems that work. Blending high-end visual design with deep technical expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
              className={`border-[6px] border-black bg-white p-8 md:p-12 relative flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden ${skill.colSpan}`}
            >
              {/* Translucent background icon */}
              <Icon 
                className="absolute -right-8 -bottom-8 w-48 h-48 md:w-64 md:h-64 text-gray-200 opacity-40 group-hover:text-primary group-hover:opacity-20 transition-all duration-500 z-0 -rotate-12 group-hover:-rotate-6 pointer-events-none" 
              />
              
              <div className="relative z-10">
              <h3 className="font-bold text-3xl md:text-5xl mb-6 font-anton tracking-wide uppercase group-hover:text-primary transition-colors">
                {skill.category}
              </h3>
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl">
                {skill.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10 mt-auto pt-6">
              {skill.tags.map(tag => (
                <span key={tag} className="border-[3px] border-black px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-widest bg-gray-50 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}
