import React, { useEffect, useState } from "react";

const ParticlesBackground = ({ parentRef }) => {
  const [particles, setParticles] = useState([]);

  // Crear partículas al inicio (reducido de 35 a 12)
  useEffect(() => {
    const total = 12;
    
    // Crear una distribución más uniforme usando una grilla invisible
    const cols = 4;
    const rows = 3;
    const created = Array.from({ length: total }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      // Calcular posición base en la grilla
      const baseX = (col + 0.5) * (100 / cols);
      const baseY = (row + 0.5) * (100 / rows);
      
      // Añadir variación aleatoria dentro de cada celda
      const variationX = (Math.random() - 0.5) * (80 / cols); // 80% del ancho de celda
      const variationY = (Math.random() - 0.5) * (80 / rows); // 80% del alto de celda
      
      // Asegurar que no se salgan de los límites
      const finalX = Math.max(5, Math.min(95, baseX + variationX));
      const finalY = Math.max(5, Math.min(95, baseY + variationY));
      
      return {
        id: i,
        x: finalX,
        y: finalY,
        size: Math.random() * 100 + 40, // Tamaño base un poco más grande
        opacity: Math.random() * 0.25 + 0.1, // Opacidad más visible
        gradient:
          Math.random() > 0.5
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 70%, transparent 100%)"
            : "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.1) 70%, transparent 100%)",
        pulseSpeed: Math.random() * 0.02 + 0.01, // Velocidad de pulso individual
        pulseOffset: Math.random() * Math.PI * 2, // Offset para que no pulsen al mismo tiempo
        floatSpeed: Math.random() * 0.005 + 0.002, // Velocidad de flotación
        floatRange: Math.random() * 3 + 1, // Rango de flotación
        time: 0,
      };
    });

    setParticles(created);
  }, []);

  // Animación suave y continua
  useEffect(() => {
    let animationId;

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          const newTime = p.time + 1;
          
          // Efecto de pulso suave en la opacidad y tamaño
          const pulseValue = Math.sin((newTime * p.pulseSpeed) + p.pulseOffset) * 0.5 + 0.5;
          const pulsedOpacity = p.opacity * (0.7 + pulseValue * 0.3);
          const pulsedSize = p.size * (0.95 + pulseValue * 0.1);
          
          // Movimiento de flotación muy sutil
          const floatX = p.x + Math.sin(newTime * p.floatSpeed) * p.floatRange * 0.3;
          const floatY = p.y + Math.cos(newTime * p.floatSpeed * 0.8) * p.floatRange * 0.2;

          return {
            ...p,
            time: newTime,
            currentOpacity: pulsedOpacity,
            currentSize: pulsedSize,
            currentX: floatX,
            currentY: floatY,
          };
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.currentX || p.x}%`,
            top: `${p.currentY || p.y}%`,
            width: `${p.currentSize || p.size}px`,
            height: `${p.currentSize || p.size}px`,
            background: p.gradient,
            opacity: p.currentOpacity || p.opacity,
            filter: "blur(2px)",
            transform: "translate(-50%, -50%)",
            willChange: "opacity, transform", // Optimización para GPU
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;