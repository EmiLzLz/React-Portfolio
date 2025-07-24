import { motion } from "framer-motion";
import { useRef } from "react";
import TechCard from "../TechCard";
import ParticlesBackground from "../ParticlesBackground";
import { getTechsByCategory } from "../../data/techData"; // Ajusta la ruta según tu estructura

const Stack = () => {
  const sectionRef = useRef(null);
  
  // Obtener tecnologías filtradas
  const { frontend: frontendTechs, backend: backendTechs, tools: toolsTechs } = getTechsByCategory();

  return (
    <section
      ref={sectionRef}
      id="stack-container"
      className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <ParticlesBackground parentRef={sectionRef} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl text-gray-800 mb-4 font-extralight tracking-widest">
            TECH STACK
          </h2>
          
          {/* Línea decorativa animada */}
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
          
          <p className="text-lg sm:text-xl text-slate-600 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            The carefully curated tools that transform ideas into digital reality.
          </p>
        </motion.div>

        {/* Secciones de tecnologías */}
        <div className="space-y-16">
          {/* FRONTEND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-sm sm:text-base font-light text-gray-500 mb-6 text-center tracking-wider">
              FRONTEND
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {frontendTechs.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-sm sm:text-base font-light text-gray-500 mb-6 text-center tracking-wider">
              BACKEND
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {backendTechs.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>

          {/* TOOLS & SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-sm sm:text-base font-light text-gray-500 mb-6 text-center tracking-wider">
              TOOLS & SERVICES
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {toolsTechs.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-slate-600 font-light leading-relaxed tracking-wide">
              Each technology chosen for its purpose, creating a harmonious
              ecosystem of development excellence.
            </p>
          </div>

          {/* Botón */}
          <button className="group px-8 py-3 bg-transparent border border-slate-300 rounded-full text-slate-700 font-light tracking-wide hover:border-emerald-400 hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;