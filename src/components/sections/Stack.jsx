import { motion } from "framer-motion";
import TechCard from "../TechCard";
import ParticlesBackground from "../ParticlesBackground";
import { getTechsByCategory } from "../../data/techData"; // Ajusta la ruta según tu estructura
import AnimatedLine from "../AnimatedLine";

const Stack = () => {

  // Obtener tecnologías filtradas
  const {
    frontend: frontendTechs,
    backend: backendTechs,
    tools: toolsTechs,
  } = getTechsByCategory();

  return (
    <section
      className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <ParticlesBackground />
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
          <AnimatedLine/>

          <p className="text-lg sm:text-xl text-slate-600 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            The carefully curated tools that transform ideas into digital
            reality.
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
              The tools I use to bring ideas to life. Each technology selected
              to build reliable, scalable solutions that perform well and last.
            </p>
          </div>

          {/* Botón */}
          <motion.a
            href="https://www.linkedin.com/in/emiliano-lopez-lopez" // o la URL que necesites
            className="group relative cursor-pointer overflow-hidden px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4 
                       text-gray-700 hover:text-white transition-all duration-300 
                       border border-gray-300 hover:border-cyan-400 rounded-full bg-transparent
                       inline-block" // añadido para que se comporte como botón visualmente
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-sm sm:text-base md:text-lg font-light">
              Start a project
            </span>

            <span
              className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 to-green-400 
                         scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                         duration-500 ease-out rounded-full"
            ></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;
