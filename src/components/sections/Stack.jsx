import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TechBubble from "../TechBubble";

// Componente principal Stack
const Stack = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // Datos de las tecnologías - más dispersas por todo el canvas
  const techStack = [
    {
      name: "Framer Motion",
      category: "Animation",
      x: "18%",
      y: "25%",
      delay: 200,
      color: "emerald",
    },
    {
      name: "React",
      category: "Frontend",
      x: "8%",
      y: "45%",
      delay: 300,
      color: "emerald",
    },
    {
      name: "React Three Fiber",
      category: "3D",
      x: "32%",
      y: "15%",
      delay: 400,
      color: "emerald",
    },
    {
      name: "React Three Drei",
      category: "3D",
      x: "72%",
      y: "20%",
      delay: 500,
      color: "emerald",
    },
    {
      name: "Tailwind",
      category: "Styling",
      x: "88%",
      y: "35%",
      delay: 600,
      color: "emerald",
    },
    {
      name: "Spring Boot",
      category: "Backend",
      x: "25%",
      y: "55%",
      delay: 700,
      color: "cyan",
    },
    {
      name: "MySQL",
      category: "Database",
      x: "55%",
      y: "35%",
      delay: 800,
      color: "cyan",
    },
    {
      name: "WordPress",
      category: "CMS",
      x: "15%",
      y: "75%",
      delay: 900,
      color: "cyan",
    },
    {
      name: "Shopify",
      category: "E-commerce",
      x: "68%",
      y: "65%",
      delay: 1000,
      color: "cyan",
    },
    {
      name: "Figma",
      category: "Design",
      x: "45%",
      y: "70%",
      delay: 1100,
      color: "emerald",
    },
  ];

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };

    const container = document.getElementById("stack-container");
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Variantes de animación para el header
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Variantes para el botón
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.8, ease: "easeOut" },
    },
  };

  return (
    <div id="stack-container" className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-7xl text-dark mb-4 font-extralight tracking-widest">
            TECH STACK
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            The carefully curated tools that transform ideas into digital
            reality.
          </p>
        </motion.div>

        {/* Scattered Minimalist Tech Layout */}
        <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-6 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
          {/* Tech bubbles */}
          {techStack.map((tech, index) => (
            <TechBubble
              key={tech.name}
              tech={tech}
              index={index}
              mousePosition={mousePosition}
            />
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-slate-600 font-light leading-relaxed tracking-wide">
              Each technology chosen for its purpose, creating a harmonious
              ecosystem of development excellence.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-transparent border border-slate-300 rounded-full text-slate-700 font-light tracking-wide hover:border-emerald-400 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Stack;
