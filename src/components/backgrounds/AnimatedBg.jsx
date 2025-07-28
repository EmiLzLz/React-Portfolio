import { motion } from "framer-motion";
import React, { useState, useEffect, useRef, useCallback } from "react";

function AnimatedBg() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef(null);

  // Detectar dispositivos móviles y preferencias de movimiento
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        window.innerWidth <= 768 ||
        "ontouchstart" in window;
      setIsMobile(isMobileDevice);
    };

    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Throttle para optimizar rendimiento
  const throttle = useCallback((func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }, []);

  // Manejar movimiento del mouse/touch optimizado
  const handleMovement = useCallback(
    throttle(
      (e) => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          let x, y;

          // Manejar tanto mouse como touch
          if (e.touches && e.touches[0]) {
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
          } else {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
          }

          // Solo actualizar si está dentro del contenedor
          if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            setMousePosition({ x, y });
          }
        }
      },
      isMobile ? 50 : 16
    ),
    [isMobile]
  ); // Throttle más agresivo en móviles

  useEffect(() => {
    // Agregar listeners para mouse y touch
    document.addEventListener("mousemove", handleMovement);
    document.addEventListener("touchmove", handleMovement, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMovement);
      document.removeEventListener("touchmove", handleMovement);
    };
  }, [handleMovement]);

  // Configuraciones optimizadas según el dispositivo
  const config = {
    // Reducir elementos en móviles
    particleCount: isMobile ? 8 : 20,
    orbCount: isMobile ? 3 : 6,
    blurAmount: isMobile ? "blur(15px)" : "blur(30px)",
    // Reducir animaciones si el usuario prefiere menos movimiento
    animationDuration: prefersReducedMotion ? 8 : isMobile ? 6 : 4,
    spotlightSize: isMobile ? 300 : 800,
    opacity: isMobile ? 0.6 : 0.8,
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        backgroundColor: "#0a0f1c",
        // Optimización GPU
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      {/* Capa de oscuridad base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(17, 25, 43, 0.8) 0%, rgba(8, 12, 22, 0.95) 100%)",
        }}
      />

      {/* Spotlight principal optimizado */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          left: mousePosition.x - config.spotlightSize / 2,
          top: mousePosition.y - config.spotlightSize / 2,
          width: config.spotlightSize,
          height: config.spotlightSize,
          background: `
            radial-gradient(circle, 
              rgba(52, 209, 152, ${isMobile ? 0.25 : 0.35}) 0%, 
              rgba(52, 209, 152, ${isMobile ? 0.15 : 0.25}) 15%, 
              rgba(52, 209, 152, ${isMobile ? 0.08 : 0.15}) 30%, 
              transparent 60%
            )
          `,
          borderRadius: "50%",
          filter: config.blurAmount,
          mixBlendMode: "screen",
          willChange: "transform, opacity",
        }}
        animate={
          !prefersReducedMotion
            ? {
                scale: [1, 1.1, 1],
                opacity: [
                  config.opacity * 0.8,
                  config.opacity,
                  config.opacity * 0.8,
                ],
              }
            : {}
        }
        transition={{
          duration: config.animationDuration,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Spotlight secundario - solo en desktop o si no hay reducción de movimiento */}
      {(!isMobile || !prefersReducedMotion) && (
        <motion.div
          className="absolute pointer-events-none z-10"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            width: 400,
            height: 400,
            background: `
              radial-gradient(circle, 
                rgba(52, 209, 152, ${isMobile ? 0.3 : 0.4}) 0%, 
                rgba(52, 209, 152, ${isMobile ? 0.15 : 0.25}) 25%, 
                transparent 60%
              )
            `,
            borderRadius: "50%",
            filter: isMobile ? "blur(8px)" : "blur(15px)",
            mixBlendMode: "screen",
            willChange: "transform, opacity",
          }}
          animate={
            !prefersReducedMotion
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }
              : {}
          }
          transition={{
            duration: config.animationDuration - 1,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      )}

      {/* Orbes flotantes optimizados */}
      {Array.from({ length: config.orbCount }, (_, i) => {
        const positions = [
          { top: "20%", left: "10%" },
          { top: "40%", right: "20%" },
          { bottom: "20%", left: "25%" },
          { top: "50%", left: "50%" },
          { bottom: "40%", right: "25%" },
          { top: "30%", left: "70%" },
        ];

        const pos = positions[i] || positions[0];

        return (
          <motion.div
            key={i}
            className={`absolute w-${isMobile ? "64" : "96"} h-${
              isMobile ? "64" : "96"
            } rounded-full`}
            style={{
              ...pos,
              backgroundColor: `rgba(52, 209, 152, ${isMobile ? 0.02 : 0.04})`,
              filter: isMobile ? "blur(20px)" : "blur(40px)",
              willChange: "transform, opacity",
            }}
            animate={
              !prefersReducedMotion
                ? {
                    scale: [1, 1.3, 1.1, 1],
                    x: [0, 30, -15, 0],
                    y: [0, -20, 10, 0],
                    opacity: [0.1, 0.25, 0.15, 0.1],
                  }
                : {}
            }
            transition={{
              duration: 15 + i * 2,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        );
      })}

      {/* Líneas decorativas - solo en desktop */}
      {!isMobile && !prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-0 left-1/4 w-px h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(52, 209, 152, 0.15), transparent)",
              willChange: "transform, opacity",
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [1, 1.1, 1],
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
              willChange: "transform, opacity",
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6,
            }}
          />
        </>
      )}

      {/* Partículas flotantes optimizadas */}
      {Array.from({ length: config.particleCount }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${5 + ((i * 4.5) % 90)}%`,
            top: `${10 + ((i * 3.7) % 80)}%`,
            backgroundColor: `rgba(52, 209, 152, ${isMobile ? 0.08 : 0.12})`,
            willChange: "transform, opacity",
          }}
          animate={
            !prefersReducedMotion
              ? {
                  y: [0, -60, 0],
                  x: [0, Math.sin(i) * (isMobile ? 20 : 40), 0],
                  opacity: [0, 0.3, 0],
                  scale: [0.5, 1.2, 0.5],
                }
              : {}
          }
          transition={{
            duration: (isMobile ? 8 : 12) + (i % 6),
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Ondas de energía - solo si no hay reducción de movimiento */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              border: "1px solid rgba(52, 209, 152, 0.1)",
              willChange: "transform, opacity",
            }}
            animate={{
              scale: [1, isMobile ? 2 : 3, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: isMobile ? 6 : 8,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              border: "1px solid rgba(52, 209, 152, 0.08)",
              willChange: "transform, opacity",
            }}
            animate={{
              scale: [1, isMobile ? 2 : 3, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: isMobile ? 6 : 8,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Efecto de luz ambiental optimizado */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(52, 209, 152, 0.04) 0%, transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={
          !prefersReducedMotion
            ? {
                opacity: [0.1, 0.2, 0.1],
                scale: [0.9, 1.1, 0.9],
              }
            : {}
        }
        transition={{
          duration: isMobile ? 15 : 20,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Textura de fondo - solo en desktop */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: 0.01,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d198' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={
            !prefersReducedMotion
              ? {
                  opacity: [0.01, 0.02, 0.01],
                }
              : {}
          }
          transition={{
            duration: 10,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

export default AnimatedBg;
