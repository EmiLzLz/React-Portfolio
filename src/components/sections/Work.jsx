import WorkCard from "../WorkCard";
import { motion } from "framer-motion";
import AnimatedBg from "../AnimatedBg";
import TiltWrapper from "../TiltWrapper";
import { useMousePosition } from "../../hooks/useMousePosition";
import { projects } from "../../data/projects";
import AnimatedLine from "../AnimatedLine";

// Componente principal de la sección de trabajo
const WorkSection = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen overflow-hidden py-20 px-4 relative ">
      {/* Background inmersivo animado */}
      <AnimatedBg mousePosition={mousePosition} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header con animación de entrada */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-7xl text-white mb-4 font-extralight tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FEATURED PROJECTS
          </motion.h2>

          {/* Línea verde con efecto de luz animado */}
          <AnimatedLine />
          <motion.p
            className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Projects that showcase my approach to solving real business
            challenges. From interactive dashboards to e-commerce solutions,
            here's what I've built using modern web technologies.
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout optimizado */}
        <motion.div
          className="space-y-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Primera fila - Solo la primera tarjeta principal */}
          <div className="grid grid-cols-1">
            <TiltWrapper>
              <WorkCard
                {...projects[0]}
                className="h-full xl:h-[520px] [&_img]:h-56"
              />
            </TiltWrapper>
          </div>

          {/* Segunda fila - 3 proyectos secundarios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TiltWrapper>
              <WorkCard {...projects[1]} className="h-full" />
            </TiltWrapper>
            <TiltWrapper>
              <WorkCard {...projects[2]} className="h-full" />
            </TiltWrapper>
            <TiltWrapper>
              <WorkCard {...projects[3]} className="h-full" />
            </TiltWrapper>
          </div>

          {/* Tercera fila - 2 proyectos medianos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TiltWrapper>
              <WorkCard {...projects[4]} className="h-full" />
            </TiltWrapper>
            <TiltWrapper>
              <WorkCard {...projects[5]} className="h-full" />
            </TiltWrapper>
          </div>

          {/* Cuarta fila - Solo la segunda tarjeta principal */}
          {projects[6] && (
            <div className="grid grid-cols-1">
              <TiltWrapper>
                <WorkCard
                  {...projects[6]}
                  className="h-full xl:h-[520px] [&_img]:h-56"
                />
              </TiltWrapper>
            </div>
          )}

          {/* Resto de proyectos en formato estándar */}
          {projects.slice(7).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(7).map((project, index) => (
                <TiltWrapper key={index + 7}>
                  <WorkCard {...project} className="h-full" />
                </TiltWrapper>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkSection;
