import { useState } from "react";
import "./App.css";
import WhatIDo from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Stack from "./components/sections/Stack";
import WorkSection from "./components/sections/Work";
import Navigation from "./components/Navigation";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    <Hero />, 
    <WhatIDo />, 
    <WorkSection />, 
    <Stack />, 
    <Contact />
  ];

  const handleSectionChange = (index) => {
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

      <Navigation 
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />
    </div>
  );
}

export default App;