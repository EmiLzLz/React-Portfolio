import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = ({
  showCircles = true,
  animationDelay = 0.5,
  opacity = 1,
}) => {
  if (!showCircles) return null;

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (delay) => ({
      scale: 1,
      opacity: opacity,
      transition: { duration: 2, delay },
    }),
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Large circle - top right */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] 
                   rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(174, 220, 210, 0.6) 0%, rgba(174, 220, 210, 0.2) 70%, transparent 100%)",
          border: "2px solid #b5ebd6",
          boxShadow:
            "0 12px 40px rgba(181, 235, 214, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.3), 0 0 20px rgba(181, 235, 214, 0.3)",
        }}
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        custom={animationDelay}
      />

      {/* Medium circle - bottom left */}
      <motion.div
        className="absolute -bottom-16 -left-16 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 
                   rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 162, 184, 0.5) 0%, rgba(147, 162, 184, 0.2) 70%, transparent 100%)",
          border: "2px solid #b5ebd6",
          boxShadow:
            "0 10px 32px rgba(181, 235, 214, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.25), 0 0 16px rgba(181, 235, 214, 0.25)",
        }}
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        custom={animationDelay + 0.5}
      />

      {/* Small circle - top left */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                   rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(100, 181, 199, 0.6) 0%, rgba(100, 181, 199, 0.2) 70%, transparent 100%)",
          border: "2px solid #b5ebd6",
          boxShadow:
            "0 8px 24px rgba(181, 235, 214, 0.35), inset 0 2px 0 rgba(255, 255, 255, 0.2), 0 0 12px rgba(181, 235, 214, 0.2)",
        }}
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        custom={animationDelay + 1}
      />
    </div>
  );
};

export default BackgroundCircles;
