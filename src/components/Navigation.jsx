import { motion } from "framer-motion";
import { Briefcase, Code2, Home, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = ({ currentSection, onSectionChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  const navigationItems = [
    { icon: Home, label: 'Inicio' },
    { icon: User, label: 'Sobre Mí' },
    { icon: Briefcase, label: 'Proyectos' },
    { icon: Code2, label: 'Stack' },
    { icon: Mail, label: 'Contacto' }
  ];

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToSection = (index) => {
    onSectionChange(index);
  };

  // Estilos y clases condicionales
  const containerClasses = isMobile 
    ? "fixed right-4 top-2/3 transform -translate-y-1/2 z-50"
    : "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50";

  const navClasses = isMobile
    ? "flex flex-col gap-2 px-3 py-4"
    : "flex flex-row gap-2 px-4 py-3";

  return (
    <div className={containerClasses}>
      <motion.div 
        className={`${navClasses} border border-white/30 select-none`}
        style={{
          backgroundColor: 'rgba(250, 252, 251, 0.15)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
        initial={{ 
          opacity: 0, 
          y: isMobile ? 0 : 20,
          x: isMobile ? 20 : 0
        }}
        animate={{ 
          opacity: 1, 
          y: 0,
          x: 0
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ 
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
        }}
      >
        {navigationItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = index === currentSection;
          
          return (
            <motion.button
              key={index}
              onClick={() => goToSection(index)}
              className={`group relative cursor-pointer overflow-hidden p-3 transition-all duration-300 
                         border border-transparent hover:border-blue-400/30 rounded-xl bg-transparent
                         ${isActive 
                           ? 'text-blue-100 border-blue-400/50' 
                           : 'text-gray-600 hover:text-gray-600'
                         }`}
              title={item.label}
              whileHover={{ y: -1, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Icono */}
              <IconComponent size={18} className="relative z-10 transition-all duration-300" />
              
              {/* Fondo animado suave - similar al botón de referencia */}
              <motion.span
                className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl
                          transition-transform duration-500 ease-out origin-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0 
                }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut" 
                }}
              />
              
              {/* Tooltip adaptativo con estilo minimalista */}
              <motion.div 
                className={`absolute ${
                  isMobile 
                    ? 'right-full top-1/2 transform -translate-y-1/2 mr-3' 
                    : 'bottom-full left-1/2 transform -translate-x-1/2 mb-3'
                } px-3 py-1.5 bg-gray-800/90 text-white text-xs rounded-lg 
                  opacity-0 group-hover:opacity-100 transition-all duration-300 
                  whitespace-nowrap pointer-events-none z-20 backdrop-blur-sm`}
                initial={{ y: isMobile ? 0 : 5, x: isMobile ? 5 : 0 }}
                whileHover={{ y: 0, x: 0 }}
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
              >
                {item.label}
                {/* Flecha del tooltip */}
                <div 
                  className={`absolute ${
                    isMobile 
                      ? 'left-full top-1/2 transform -translate-y-1/2' 
                      : 'top-full left-1/2 transform -translate-x-1/2'
                  } w-0 h-0`}
                  style={{
                    borderStyle: 'solid',
                    borderWidth: isMobile ? '4px 0 4px 4px' : '4px 4px 0 4px',
                    borderColor: isMobile 
                      ? 'transparent transparent transparent rgba(31, 41, 55, 0.9)' 
                      : 'rgba(31, 41, 55, 0.9) transparent transparent transparent'
                  }}
                />
              </motion.div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Navigation;