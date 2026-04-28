"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { 
    title: "COSMIC LOG", 
    tags: ["Founder", "Brand Identity", "Logo Construction"],
    description: "Engineered a comprehensive identity system rooted in geometric grids. The project involved full vectorization, custom typography selection, and defining a visual language for high-end digital output.",
    imageUrl: "/cosmic-log-hero.png"
  },
  { 
    title: "CRU HEALTH PLATFORM", 
    tags: ["Frontend Architecture", "State Management", "UI/UX Design"],
    description: "Architected and developed a comprehensive health screening application. Built scalable React components focusing on data-dense, accessible interfaces and real-time state mutation.",
    imageUrl: "/cru-health-hero.png"
  },
  {
    title: "TRAVIKS EXPEDITIONS",
    tags: ["Campaign Design", "Print & Digital Routing", "Event Branding"],
    description: "End-to-end promotional design and content strategy for the Traviks Himachal Pradesh expedition. Crafted immersive marketing assets bridging digital itineraries with high-altitude visual storytelling.",
    imageUrl: "/traviks-himachal.png"
  }
];

type Project = typeof projects[0];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.1 }}
    className={`border-[6px] border-black bg-white flex flex-col group cursor-pointer hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden ${index === 2 ? 'md:col-span-2' : ''}`}
  >
    {/* Image Wrapper (16:9 Aspect Ratio for 1920x1080) */}
    <div className="w-full aspect-video border-b-[6px] border-black relative bg-gray-100 overflow-hidden">
      {project.imageUrl ? (
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          priority={index === 0}
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <span className="font-anton text-2xl md:text-3xl text-gray-400 uppercase tracking-widest text-center px-4">Image Placeholder</span>
        </div>
      )}
    </div>

    {/* Content Wrapper */}
    <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
      <h3 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider mb-4 leading-none text-black group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <span key={tag} className="border-2 border-black px-2 py-1 text-xs font-bold uppercase tracking-widest text-black group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 bg-gray-50">
            {tag}
          </span>
        ))}
      </div>
      
      <p className="font-medium text-lg leading-relaxed text-black mb-2">
        {project.description}
      </p>
    </div>
  </motion.div>
);

export default function SelectedWork() {
  return (
    <section id="portfolio" className="mt-20 md:mt-48 w-full max-w-7xl px-4 sm:px-6 md:px-12 mx-auto border-t-12 border-black pt-12 md:pt-16">
      <div className="flex justify-between items-end mb-12 md:mb-16">
        <h2 className="font-anton text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter text-black">
          Selected<br />Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
