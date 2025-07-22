import { motion } from "framer-motion";

const TechBubble = ({ tech, index, mousePosition }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: tech.delay / 1000,
        ease: "easeOut",
      },
    },
  };

  const bubbleVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="absolute"
      style={{
        left: tech.x,
        top: tech.y,
        transform: `translate(-50%, -50%) translate(${
          mousePosition.x * (0.01 + index * 0.001)
        }px, ${mousePosition.y * (0.008 + index * 0.001)}px)`,
      }}
    >
      <div className="group relative">
        <motion.div
          variants={bubbleVariants}
          whileHover="hover"
          className={`
            px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-2xl backdrop-blur-sm border cursor-default
            transition-colors duration-300
            ${
              tech.color === "emerald"
                ? "bg-white/70 border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-emerald-100/30 text-emerald-800"
                : "bg-white/70 border-cyan-200/50 hover:border-cyan-300/70 hover:shadow-cyan-100/30 text-cyan-800"
            }
          `}
        >
          <span className="font-light tracking-wide text-xs sm:text-sm md:text-base whitespace-nowrap">
            {tech.name}
          </span>
        </motion.div>

        {/* Category label on hover */}
        <div
          className={`
            absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2
            px-2 py-1 rounded-lg text-xs font-light tracking-wider
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${
              tech.color === "emerald"
                ? "bg-emerald-100/80 text-emerald-700"
                : "bg-cyan-100/80 text-cyan-700"
            }
          `}
        >
          {tech.category}
        </div>
      </div>
    </motion.div>
  );
};

export default TechBubble