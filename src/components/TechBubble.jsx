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

  // Función para ajustar posiciones en pantallas pequeñas - MUY JUNTAS
  const getResponsivePosition = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // En pantallas muy pequeñas, agrupar las burbujas en el centro
      if (screenWidth < 640) {
        // móviles
        // Área muy compacta en el centro - solo 40% del ancho de pantalla
        const centerX = screenWidth / 2;
        const centerY = screenHeight / 2;
        const compactWidth = screenWidth * 0.4; // Solo 40% del ancho
        const compactHeight = screenHeight * 0.35; // Solo 35% del alto

        const adjustedX = centerX + (tech.x - screenWidth / 2) * 0.4; // Comprimir mucho más
        const adjustedY = centerY + (tech.y - screenHeight / 2) * 0.35;

        return {
          x: Math.max(40, Math.min(screenWidth - 40, adjustedX)),
          y: Math.max(100, Math.min(screenHeight - 100, adjustedY)),
        };
      } else if (screenWidth < 768) {
        // tablets
        const centerX = screenWidth / 2;
        const centerY = screenHeight / 2;

        const adjustedX = centerX + (tech.x - screenWidth / 2) * 0.6;
        const adjustedY = centerY + (tech.y - screenHeight / 2) * 0.6;

        return {
          x: Math.max(60, Math.min(screenWidth - 60, adjustedX)),
          y: Math.max(80, Math.min(screenHeight - 80, adjustedY)),
        };
      }
    }

    return { x: tech.x, y: tech.y };
  };

  const position = getResponsivePosition();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
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
            px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-6 xl:py-3 
            rounded-xl sm:rounded-2xl backdrop-blur-sm border cursor-default
            transition-colors duration-300
            ${
              tech.color === "emerald"
                ? "bg-white/70 border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-emerald-100/30 text-emerald-800"
                : "bg-white/70 border-cyan-200/50 hover:border-cyan-300/70 hover:shadow-cyan-100/30 text-cyan-800"
            }
          `}
        >
          <span className="font-light tracking-wide text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">
            {tech.name}
          </span>
        </motion.div>

        {/* Category label on hover */}
        <div
          className={`
            absolute -bottom-5 sm:-bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2
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

export default TechBubble;
