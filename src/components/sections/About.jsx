import React, { useRef } from "react";
import { Code, Palette, Lightbulb } from "lucide-react";
import ServiceCard from "../ServiceCard";
import ParticlesBackground from "../ParticlesBackground";
import { motion } from "framer-motion";
const WhatIDo = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden py-12 md:py-20"
    >
      {/* Fondo de partículas */}
      <ParticlesBackground parentRef={sectionRef} />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-10/12 mx-auto md:px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 tracking-[0.25em] mb-6">
            WHAT I DO
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            I craft digital experiences that bridge the gap between beautiful
            design and functional technology...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-0 sm:px-4 ">
          <ServiceCard
            icon={Code}
            title="FRONTEND DEVELOPMENT"
            description="Building responsive, performant web applications with React, Next.js, and TypeScript."
            delay={0}
          />
          <ServiceCard
            icon={Palette}
            title="UI/UX DESIGN"
            description="Creating intuitive, beautiful interfaces that prioritize user experience and accessibility across all devices."
            delay={200}
          />
          <ServiceCard
            icon={Lightbulb}
            title="FREELANCE CONSULTING"
            description="Helping businesses and startups transform their digital presence with strategic development and design solutions."
            delay={400}
          />
        </div>

        <div className="text-center mt-12 pt-20">
          {/* CTA Button */}
          <motion.button
            className="group relative cursor-pointer overflow-hidden px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4 
                               text-gray-700 hover:text-white transition-all duration-300 
                               border border-gray-300 hover:border-cyan-400 rounded-full bg-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-sm sm:text-base md:text-lg font-light">
              Let's Work Together
            </span>

            {/* Hover Background Animation */}
            <span
              className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 to-green-400 
                                 scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                                 duration-500 ease-out rounded-full"
            ></span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
