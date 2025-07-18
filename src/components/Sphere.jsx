import React from "react";
import { motion } from "framer-motion";

function Sphere({isHovered}) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ marginTop: "-25vh" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          rotate: { duration: 2, ease: "easeInOut" },
          scale: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        {/* Outer ring - Centered */}
        <motion.div
          className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 
                       rounded-full border-2 border-cyan-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Main sphere - Centered */}
        <motion.div
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 
                       rounded-full relative overflow-hidden
                       bg-gradient-to-br from-cyan-100 via-green-50 to-cyan-200
                       shadow-2xl shadow-cyan-200/50"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.3), rgba(6, 182, 212, 0.2), rgba(165, 243, 252, 0.8))",
            boxShadow:
              "0 25px 50px -12px rgba(6, 182, 212, 0.25), inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          {/* Inner highlight */}
          <div
            className="absolute top-6 left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
                         rounded-full bg-white opacity-20 blur-sm"
          />

          {/* Scattered dot pattern in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              {/* Scattered dots with random-looking positions */}
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-60"
                style={{ top: "20%", left: "30%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-40"
                style={{ top: "45%", left: "15%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.85, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-70"
                style={{ top: "35%", left: "50%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-50"
                style={{ top: "60%", left: "35%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.95, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-60"
                style={{ top: "25%", left: "70%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-40"
                style={{ top: "50%", left: "80%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.05, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-70"
                style={{ top: "75%", left: "60%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.1, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-50"
                style={{ top: "80%", left: "25%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.15, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-60"
                style={{ top: "10%", left: "55%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-40"
                style={{ top: "65%", left: "45%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.25, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-70"
                style={{ top: "40%", left: "85%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.3, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-50"
                style={{ top: "15%", left: "80%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.35, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Floating animation */}
          <motion.div
            className="absolute inset-0"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Pulsing outer glow - Centered */}
        <motion.div
          className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 
                       rounded-full border border-cyan-300 opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Sphere;
