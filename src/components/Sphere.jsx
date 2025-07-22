import React from "react";
import { motion } from "framer-motion";

function Sphere({isHovered}) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ 
        marginTop: window.innerWidth > 768 ? "-15vh" : "0"
      }}
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
        {/* Outer ring - Más grande en móviles */}
        <motion.div
          className="absolute rounded-full border-2 border-cyan-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: window.innerWidth <= 768 ? '120vw' : '20rem',
            height: window.innerWidth <= 768 ? '120vw' : '20rem',
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Main sphere - Más grande en móviles */}
        <motion.div
          className="rounded-full relative overflow-hidden
                       bg-gradient-to-br from-cyan-100 via-green-50 to-cyan-200
                       shadow-2xl shadow-cyan-200/50"
          style={{
            width: window.innerWidth <= 768 ? '100vw' : '18rem',
            height: window.innerWidth <= 768 ? '100vw' : '18rem',
            background:
              "radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.3), rgba(6, 182, 212, 0.2), rgba(165, 243, 252, 0.8))",
            boxShadow:
              "0 25px 50px -12px rgba(6, 182, 212, 0.25), inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          {/* Inner highlight - Responsivo */}
          <div
            className="absolute rounded-full bg-white opacity-20 blur-sm"
            style={{
              top: window.innerWidth <= 768 ? '2rem' : '1.5rem',
              left: window.innerWidth <= 768 ? '2rem' : '1.5rem',
              width: window.innerWidth <= 768 ? '10vw' : '3rem',
              height: window.innerWidth <= 768 ? '10vw' : '3rem',
            }}
          />

          {/* Scattered dot pattern in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="relative"
              style={{
                width: window.innerWidth <= 768 ? '15vw' : '6rem',
                height: window.innerWidth <= 768 ? '15vw' : '6rem',
              }}
            >
              {/* Scattered dots - Más grandes en móviles */}
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-60"
                style={{ 
                  top: "20%", 
                  left: "30%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-40"
                style={{ 
                  top: "45%", 
                  left: "15%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.85, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-70"
                style={{ 
                  top: "35%", 
                  left: "50%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-50"
                style={{ 
                  top: "60%", 
                  left: "35%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.95, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-60"
                style={{ 
                  top: "25%", 
                  left: "70%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-40"
                style={{ 
                  top: "50%", 
                  left: "80%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.05, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-70"
                style={{ 
                  top: "75%", 
                  left: "60%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.1, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-50"
                style={{ 
                  top: "80%", 
                  left: "25%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.15, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-60"
                style={{ 
                  top: "10%", 
                  left: "55%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-40"
                style={{ 
                  top: "65%", 
                  left: "45%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.25, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-70"
                style={{ 
                  top: "40%", 
                  left: "85%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.3, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bg-cyan-400 rounded-full opacity-50"
                style={{ 
                  top: "15%", 
                  left: "80%",
                  width: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                  height: window.innerWidth <= 768 ? '1.5vw' : '0.5rem',
                }}
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

        {/* Pulsing outer glow - Más grande en móviles */}
        <motion.div
          className="absolute rounded-full border border-cyan-300 opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: window.innerWidth <= 768 ? '120vw' : '20rem',
            height: window.innerWidth <= 768 ? '120vw' : '20rem',
          }}
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