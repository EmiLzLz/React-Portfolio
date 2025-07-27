import React, { useRef } from "react";
import { Code, Palette, Lightbulb } from "lucide-react";
import ServiceCard from "../ServiceCard";
import ParticlesBackground from "../ParticlesBackground";
import { motion } from "framer-motion";

const WhatIDo = ({ onSectionChange }) => {
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
          {/* Línea verde con efecto de luz animado */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-16 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 w-16 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm"></div>
              <div className="absolute inset-0 w-16 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent blur-md opacity-70"></div>
            </div>
          </motion.div>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            I build modern, functional websites that help local businesses grow
            digitally. From design to implementation, I focus on creating
            solutions that actually work for your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-0 sm:px-4 ">
          <ServiceCard
            icon={Code}
            title="FRONTEND DEVELOPMENT"
            description="Responsive websites with React and modern technologies. From landing pages to online stores with integrated payment gateways."
            delay={0}
          />
          <ServiceCard
            icon={Palette}
            title="RESULTS-FOCUSED DESIGN"
            description="Interfaces that turn visitors into customers. Responsive design that looks perfect on any device."
            delay={200}
          />
          <ServiceCard
            icon={Lightbulb}
            title="CUSTOM PROJECTS"
            description="I work directly with you to understand your business and create the digital solution you need, with ongoing support included.."
            delay={400}
          />
        </div>

        <div className="text-center mt-12 pt-20">
          {/* CTA Button */}
          <motion.div
            onClick={() => onSectionChange(4)} // 2 es el índice de WorkSection
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onSectionChange(4);
              }
            }}
            className="group relative cursor-pointer overflow-hidden px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4 
                       text-gray-700 hover:text-white transition-all duration-300 
                       border border-gray-300 hover:border-cyan-400 rounded-full bg-transparent
                       inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-sm sm:text-base md:text-lg font-light">
              Let's work together
            </span>

            <span
              className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 to-green-400 
                         scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                         duration-500 ease-out rounded-full"
            ></span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
