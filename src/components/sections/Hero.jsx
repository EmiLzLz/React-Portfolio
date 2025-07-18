import React, { useState } from "react";
import { motion } from "framer-motion";
import Sphere from "../Sphere";
import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText";


const Hero = () => {
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
      
      
      {/* Animated Sphere */}
      <Sphere isHovered={isHovered} />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        {/* Spacer to push content to center-bottom */}
        <div className="flex-1"></div>

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
            Explore My Work
          </span>

          {/* Hover Background Animation */}
          <span
            className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 to-green-400 
                       scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                       duration-500 ease-out rounded-full"
          ></span>
        </motion.button>

        {/* Spacer for bottom spacing */}
        <div className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 
                   transform -translate-x-1/2 flex flex-col items-center space-y-2 sm:space-y-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4 }}
      >
        <span
          className="text-xs sm:text-sm tracking-widest font-light"
          style={{ color: "#93a2b8" }}
        >
          SCROLL
        </span>
        <motion.div
          className="w-px h-6 sm:h-8 md:h-10 bg-gray-400"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Subtle gradient orbs */}
        <div
          className="absolute top-20 right-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                        bg-gradient-to-br from-cyan-100 to-transparent rounded-full blur-3xl opacity-30"
        />
        <div
          className="absolute bottom-20 left-20 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
                        bg-gradient-to-br from-green-100 to-transparent rounded-full blur-3xl opacity-20"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
