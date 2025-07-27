import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

function AnimatedBg() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calcular la posición del mouse relativa al contenedor
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Solo actualizar si el mouse está dentro del contenedor
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          setMousePosition({ x, y });
        }
      }
    };

    // Agregar el listener al document para un seguimiento más fluido
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: "#0a0f1c" }} // Fondo más oscuro
    >
      {/* Capa de oscuridad base para crear contraste */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(17, 25, 43, 0.8) 0%, rgba(8, 12, 22, 0.95) 100%)",
        }}
      />

      {/* Spotlight principal que sigue el cursor - MUY MEJORADO */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
          width: 800,
          height: 800,
          background: `
            radial-gradient(circle, 
              rgba(52, 209, 152, 0.35) 0%, 
              rgba(52, 209, 152, 0.25) 15%, 
              rgba(52, 209, 152, 0.15) 30%, 
              rgba(52, 209, 152, 0.08) 45%, 
              rgba(52, 209, 152, 0.04) 60%, 
              transparent 75%
            )
          `,
          borderRadius: "50%",
          filter: "blur(30px)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Spotlight secundario más intenso */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: 400,
          height: 400,
          background: `
            radial-gradient(circle, 
              rgba(52, 209, 152, 0.4) 0%, 
              rgba(52, 209, 152, 0.25) 25%, 
              rgba(52, 209, 152, 0.12) 50%, 
              transparent 70%
            )
          `,
          borderRadius: "50%",
          filter: "blur(15px)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Spotlight central más pequeño y brillante */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: 200,
          height: 200,
          background: `
            radial-gradient(circle, 
              rgba(52, 209, 152, 0.6) 0%, 
              rgba(52, 209, 152, 0.3) 30%, 
              rgba(52, 209, 152, 0.1) 60%, 
              transparent 80%
            )
          `,
          borderRadius: "50%",
          filter: "blur(8px)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Orbes flotantes con tonos verdes suaves - REDUCIDA OPACIDAD */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(52, 209, 152, 0.04)" }}
        animate={{
          scale: [1, 1.4, 1.2, 1],
          x: [0, 60, -30, 0],
          y: [0, -40, 20, 0],
          opacity: [0.15, 0.3, 0.2, 0.15],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-[28rem] h-[28rem] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(52, 209, 152, 0.03)" }}
        animate={{
          scale: [1, 1.3, 1.1, 1],
          x: [0, -80, 40, 0],
          y: [0, 50, -25, 0],
          opacity: [0.2, 0.35, 0.25, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(52, 209, 152, 0.025)" }}
        animate={{
          scale: [1, 1.2, 1.4, 1],
          x: [0, 40, -20, 0],
          y: [0, -30, 15, 0],
          opacity: [0.18, 0.25, 0.35, 0.18],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />

      {/* Orbes adicionales para más profundidad - REDUCIDA OPACIDAD */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(52, 209, 152, 0.02)" }}
        animate={{
          scale: [1, 1.5, 1.2, 1],
          x: [0, -70, 35, 0],
          y: [0, 40, -60, 0],
          opacity: [0.1, 0.2, 0.15, 0.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15,
        }}
      />

      <motion.div
        className="absolute bottom-40 right-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(52, 209, 152, 0.035)" }}
        animate={{
          scale: [1, 1.3, 1.1, 1],
          x: [0, 50, -25, 0],
          y: [0, -20, 30, 0],
          opacity: [0.12, 0.25, 0.15, 0.12],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Líneas decorativas ondulantes con tono verde - REDUCIDA OPACIDAD */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(52, 209, 152, 0.15), transparent)",
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scaleY: [1, 1.1, 1],
          x: [0, 10, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/4 w-px h-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(52, 209, 152, 0.12), transparent)",
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scaleY: [1, 1.1, 1],
          x: [0, -10, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      <motion.div
        className="absolute top-0 left-2/3 w-px h-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(52, 209, 152, 0.1), transparent)",
        }}
        animate={{
          opacity: [0.08, 0.25, 0.08],
          scaleY: [1, 1.05, 1],
          x: [0, 8, -3, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Puntos decorativos pulsantes con tono verde - REDUCIDA OPACIDAD */}
      <motion.div
        className="absolute top-32 left-1/2 w-3 h-3 rounded-full"
        style={{ backgroundColor: "rgba(52, 209, 152, 0.2)" }}
        animate={{
          scale: [1, 2, 1.5, 1],
          opacity: [0.15, 0.4, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-48 left-1/4 w-2 h-2 rounded-full"
        style={{ backgroundColor: "rgba(52, 209, 152, 0.25)" }}
        animate={{
          scale: [1, 1.8, 1.2, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-32 right-1/4 w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: "rgba(52, 209, 152, 0.2)" }}
        animate={{
          scale: [1, 1.6, 1.3, 1],
          opacity: [0.15, 0.35, 0.2, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Ondas de energía concéntricas con tono verde - REDUCIDA OPACIDAD */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ border: "1px solid rgba(52, 209, 152, 0.1)" }}
        animate={{
          scale: [1, 3, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ border: "1px solid rgba(52, 209, 152, 0.08)" }}
        animate={{
          scale: [1, 3, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ border: "1px solid rgba(52, 209, 152, 0.09)" }}
        animate={{
          scale: [1, 3, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 4,
        }}
      />

      {/* Partículas flotantes con tono verde - REDUCIDA OPACIDAD */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${5 + ((i * 4.5) % 90)}%`,
            top: `${10 + ((i * 3.7) % 80)}%`,
            backgroundColor: "rgba(52, 209, 152, 0.12)",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 40, 0],
            opacity: [0, 0.35, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 12 + (i % 8),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Líneas de conexión animadas con tono verde - REDUCIDA OPACIDAD */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1/2 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(52, 209, 152, 0.15), transparent)",
        }}
        animate={{
          opacity: [0, 0.3, 0],
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-1/3 h-px"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(52, 209, 152, 0.12), transparent)",
        }}
        animate={{
          opacity: [0, 0.3, 0],
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Textura con patrón dinámico - REDUCIDA OPACIDAD */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d198' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{
          opacity: [0.015, 0.03, 0.015],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Efecto de luz ambiental verde - REDUCIDA OPACIDAD */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(52, 209, 152, 0.04) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default AnimatedBg;