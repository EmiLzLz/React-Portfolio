import React, { useRef } from "react";

const TiltWrapper = ({ children, className = "", style = {}, delay = 0 }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const maxTilt = 15;
    const tiltX = deltaY * maxTilt;
    const tiltY = -deltaX * maxTilt;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out will-change-transform h-full w-full ${className}`}
      style={{
        ...style,
        animationDelay: `${delay}ms`,
        transformStyle: "preserve-3d",
        // CLAVE: Asegurar que no interfiera con grid
        position: "relative",
        zIndex: 1
      }}
    >
      {children}
    </div>
  );
};

export default TiltWrapper;
