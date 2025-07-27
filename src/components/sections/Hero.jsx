import React, { useState } from "react";
import { motion } from "framer-motion";
import Sphere from "../effectsAndObjects/Sphere";
import BackgroundCircles from "../backgrounds/BackgroundCircles";

const Hero = ({ onSectionChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className="relative w-screen h-screen overflow-hidden"
      initial={{ opacity: 0, backgroundColor: "#dfeff7" }}
      animate={{
        opacity: 1,
        backgroundColor: isHovered ? "#d3ede6" : "#dfeff7",
      }}
      transition={{
        opacity: { duration: 1, ease: "easeOut" },
        backgroundColor: { duration: 0.8, ease: "easeInOut" },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background decorative circles */}
      <BackgroundCircles
        showCircles={true}
        animationDelay={0.5}
        opacity={0.5}
      />

      {/* Animated Sphere */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%]">
        <Sphere isHovered={isHovered} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center sm:justify-start px-4 sm:px-6 md:px-8">
        {/* Dynamic spacer that adapts to screen size */}
        <div className="hidden sm:block flex-1 min-h-[15vh] md:min-h-[20vh] lg:min-h-[25vh]"></div>

        {/* Main Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                     font-light text-gray-800 tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] 
                     mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          EMILIANO LOPEZ
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 
                     text-sm sm:text-base md:text-lg lg:text-xl 
                     mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          style={{ color: "#93a2b8" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <span className="font-light">FREELANCER</span>
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full"></span>
          <span className="font-light">DESIGNER</span>
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full"></span>
          <span className="font-light">DEVELOPER</span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          onClick={() => onSectionChange(2)} // 2 es el índice de WorkSection
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onSectionChange(2);
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
            Explore My Work
          </span>

          <span
            className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 to-green-400 
               scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
               duration-500 ease-out rounded-full"
          ></span>
        </motion.div>

        {/* Adaptive bottom spacer */}
        <div className="hidden sm:block h-24 md:h-28 lg:h-32 xl:h-36"></div>
      </div>
    </motion.section>
  );
};

export default Hero;
