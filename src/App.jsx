import { useState } from "react";
import "./App.css";
import WhatIDo from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Stack from "./components/sections/Stack";
import WorkSection from "./components/sections/Work";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Code2, Home, Mail, User } from "lucide-react";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    <Hero />, 
    <WhatIDo />, 
    <WorkSection />, 
    <Stack />, 
    <Contact />
  ];
  
  const navigationItems = [
    { icon: Home, label: 'Inicio' },
    { icon: User, label: 'Sobre Mí' },
    { icon: Briefcase, label: 'Proyectos' },
    { icon: Code2, label: 'Stack' },
    { icon: Mail, label: 'Contacto' }
  ];

  const goToSection = (index) => {
    setCurrentSection(index);
  };

  return (
    <div className="h-screen overflow-hidden relative bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 overflow-y-auto"
        >
          {sections[currentSection]}
        </motion.div>
      </AnimatePresence>

      {/* Navegación inferior con iconos */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-3 border border-white/10">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                onClick={() => goToSection(index)}
                className={`p-3 rounded-full transition-all duration-300 group relative ${
                  index === currentSection 
                    ? 'bg-white text-black scale-110' 
                    : 'text-white hover:bg-white/20 hover:scale-105'
                }`}
                title={item.label}
              >
                <IconComponent size={20} />
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
