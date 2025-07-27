import { motion } from "framer-motion";

const AnimatedLine = ({ delay = 0.4 }) => {
  return (
    <motion.div
      className="flex justify-center mb-6"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
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
  );
};

export default AnimatedLine;
