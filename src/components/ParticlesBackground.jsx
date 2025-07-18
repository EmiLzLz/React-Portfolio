import React, { useEffect, useState } from "react";

const ParticlesBackground = ({ parentRef }) => {
  const [particles, setParticles] = useState([]);

  // Crear partículas al inicio
  useEffect(() => {
    const total = 35;
    const created = Array.from({ length: total }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      originalX: Math.random() * 100,
      originalY: Math.random() * 100,
      size: Math.random() * 120 + 30,
      opacity: Math.random() * 0.35 + 0.05,
      gradient:
        Math.random() > 0.5
          ? "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.08) 70%, transparent 100%)"
          : "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.08) 70%, transparent 100%)",
      isMoving: false,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      animationProgress: 0,
    }));

    created.forEach((p) => {
      p.originalX = p.x;
      p.originalY = p.y;
      p.targetX = p.x;
      p.targetY = p.y;
    });

    setParticles(created);
  }, []);

  // Movimiento de partículas cuando se mueve el mouse
  useEffect(() => {
    let animationId;

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          if (p.isMoving) {
            // Animar hacia el objetivo
            const progress = p.animationProgress + 0.02; // Velocidad de animación

            if (progress >= 1) {
              // Movimiento completado, generar nuevo objetivo o regresar
              const shouldContinue = Math.random() > 0.3; // 70% chance de continuar moviéndose

              if (shouldContinue) {
                // Generar nuevo objetivo aleatorio
                const newTargetX = Math.max(
                  5,
                  Math.min(95, p.x + (Math.random() - 0.5) * 40)
                );
                const newTargetY = Math.max(
                  5,
                  Math.min(95, p.y + (Math.random() - 0.5) * 40)
                );

                return {
                  ...p,
                  targetX: newTargetX,
                  targetY: newTargetY,
                  animationProgress: 0,
                };
              } else {
                // Regresar a posición original
                return {
                  ...p,
                  isMoving: false,
                  targetX: p.originalX,
                  targetY: p.originalY,
                  animationProgress: 0,
                };
              }
            }

            // Interpolación suave hacia el objetivo
            const easeProgress = 1 - Math.pow(1 - progress, 3); // Easing out cubic
            const newX = p.x + (p.targetX - p.x) * easeProgress * 0.1;
            const newY = p.y + (p.targetY - p.y) * easeProgress * 0.1;

            return {
              ...p,
              x: newX,
              y: newY,
              animationProgress: progress,
            };
          } else {
            // Regresar lentamente a la posición original
            const returnSpeed = 0.02;
            const newX = p.x + (p.originalX - p.x) * returnSpeed;
            const newY = p.y + (p.originalY - p.y) * returnSpeed;

            return {
              ...p,
              x: newX,
              y: newY,
            };
          }
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseMove = (e) => {
      if (!parentRef.current) return;

      const rect = parentRef.current.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

      setParticles((prev) =>
        prev.map((p) => {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 50 && !p.isMoving) {
            // Activar partícula con movimiento aleatorio
            const randomAngle = Math.random() * Math.PI * 2;
            const randomDistance = Math.random() * 25 + 15; // Entre 15 y 40 unidades

            const targetX = Math.max(
              5,
              Math.min(95, p.x + Math.cos(randomAngle) * randomDistance)
            );
            const targetY = Math.max(
              5,
              Math.min(95, p.y + Math.sin(randomAngle) * randomDistance)
            );

            return {
              ...p,
              isMoving: true,
              targetX,
              targetY,
              animationProgress: 0,
            };
          }

          return p;
        })
      );
    };

    const section = parentRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [parentRef]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full transition-all duration-100 ease-out"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.gradient,
            opacity: p.opacity,
            filter: "blur(3px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
