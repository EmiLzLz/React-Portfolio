// techData.js
export const techStack = [
  // Frontend
  { name: "React", category: "React", color: "cyan" },
  { name: "TailwindCSS", category: "TailwindCSS", color: "blue" },
  { name: "Framer Motion", category: "Framer Motion", color: "emerald" },
  
  // Backend
  { name: "SpringBoot", category: "SpringBoot", color: "green" },
  { name: "MySQL", category: "MySQL", color: "orange" },
  
  // Tools & Services
  { name: "WordPress", category: "Wordpress", color: "blue" },
  { name: "Shopify", category: "Shopify", color: "green" },
  { name: "Figma", category: "Figma", color: "orange" },
  { name: "React Three Fiber", category: "React Three Fiber", color: "cyan" },
  { name: "React Three Drei", category: "React Three Drei", color: "emerald" },
];

// Función para filtrar tecnologías por categoría
export const getTechsByCategory = () => {
  const frontendTechs = techStack.filter((tech) =>
    ["React", "TailwindCSS", "Framer Motion"].includes(tech.category)
  );
  
  const backendTechs = techStack.filter((tech) =>
    ["SpringBoot", "MySQL"].includes(tech.category)
  );
  
  const toolsTechs = techStack.filter((tech) =>
    ["Wordpress", "Shopify", "Figma", "React Three Fiber", "React Three Drei"].includes(tech.category)
  );

  return {
    frontend: frontendTechs,
    backend: backendTechs,
    tools: toolsTechs
  };
};