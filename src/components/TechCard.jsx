import { motion } from "framer-motion";

const TechCard = ({ tech, index }) => {
  const getColorClasses = (color) => {
    const colors = {
      emerald: "border-emerald-200/50 hover:border-emerald-300/70 text-emerald-700 hover:bg-emerald-50/50",
      cyan: "border-cyan-200/50 hover:border-cyan-300/70 text-cyan-700 hover:bg-cyan-50/50",
      blue: "border-blue-200/50 hover:border-blue-300/70 text-blue-700 hover:bg-blue-50/50",
      yellow: "border-yellow-200/50 hover:border-yellow-300/70 text-yellow-700 hover:bg-yellow-50/50",
      green: "border-green-200/50 hover:border-green-300/70 text-green-700 hover:bg-green-50/50",
      gray: "border-gray-200/50 hover:border-gray-300/70 text-gray-700 hover:bg-gray-50/50",
      orange: "border-orange-200/50 hover:border-orange-300/70 text-orange-700 hover:bg-orange-50/50",
    };
    return colors[color] || colors.gray;
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`
          relative px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4
          bg-white/70 backdrop-blur-sm border rounded-2xl cursor-default
          transition-all duration-300 ease-out
          ${getColorClasses(tech.color)}
        `}
        whileHover={{ 
          y: -2,
          scale: 1.02,
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Contenido */}
        <div className="text-xs sm:text-sm font-light tracking-wide text-center">
          {tech.name}
        </div>

        {/* Línea decorativa minimalista */}
        <motion.div
          className="absolute bottom-0 left-1/2 h-0.5 bg-current rounded-full"
          initial={{ width: 0, x: "-50%" }}
          whileHover={{ width: "60%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default TechCard;