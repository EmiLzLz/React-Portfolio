import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const WorkCard = ({
  stack,
  title,
  description,
  repoUrl,
  viewUrl,
  image,
  className = "",
}) => {
  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 ${className}`}
    >
      {/* Imagen del proyecto */}
      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Título */}
      <h3 className="text-2xl font-extralight uppercase text-white mb-3">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-slate-100 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Stack de tecnologías */}
      <div className="flex flex-wrap gap-2 mb-6">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-200 rounded-full border border-slate-600/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col md:flex-row gap-3">
        {viewUrl && (
          <motion.button
            className="group relative cursor-pointer overflow-hidden px-6 py-2 
             text-slate-100 hover:text-white transition-all duration-500 ease-out
             border border-slate-400 hover:border-cyan-400 rounded-full bg-transparent flex-1"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(viewUrl, "_blank")}
          >
            <span className="relative z-10 text-sm font-medium">
              View Project
            </span>

            <span
              className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 to-green-400 
                   scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                   duration-500 ease-out rounded-full"
            ></span>

            <ExternalLink className="inline-block w-4 h-4 ml-2 relative z-10" />
          </motion.button>
        )}

        {repoUrl && (
          <motion.button
            className="group relative cursor-pointer overflow-hidden px-6 py-2 
             text-slate-300 hover:text-white transition-all duration-500 ease-out
             border border-slate-500 hover:border-slate-400 rounded-full bg-transparent"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(repoUrl, "_blank")}
          >
            <span className="relative z-10 text-sm font-medium">GitHub</span>

            <span
              className="absolute inset-0 z-0 bg-gradient-to-r from-slate-600 to-slate-500 
                   scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                   duration-500 ease-out rounded-full"
            ></span>

            <Github className="inline-block w-4 h-4 ml-2 relative z-10" />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
