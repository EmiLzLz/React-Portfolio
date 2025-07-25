import WorkCard from "../WorkCard";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedBg from "../AnimatedBg";
import TiltWrapper from "../TiltWrapper";
import { useMousePosition } from "../../hooks/useMousePosition";

// Componente principal de la sección de trabajo
const WorkSection = () => {
  const mousePosition = useMousePosition();

  // Datos de ejemplo para los proyectos
  const projects = [
    {
      stack: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind", "AWS"],
      title: "E-Commerce Platform",
      description:
        "A comprehensive, modern e-commerce solution built with Next.js and TypeScript. Features include real-time inventory management, secure payment processing with Stripe, advanced analytics dashboard, and AI-powered product recommendations. The platform handles over 10,000 daily transactions with 99.9% uptime.",
      repoUrl: "https://github.com/user/ecommerce",
      viewUrl: "https://ecommerce-demo.com",
      image: "/images/ecommerce-project.jpg",
    },
    {
      stack: ["React", "Storybook", "Tailwind", "Figma", "Jest", "Chromatic"],
      title: "Design System & UI Kit",
      description:
        "Comprehensive design system with 150+ components, extensive documentation, and seamless Figma integration. Built for enterprise scalability with full accessibility compliance (WCAG 2.1 AA) and multi-framework support. Features automated testing, visual regression testing, and supports React, Vue, and Angular implementations.",
      repoUrl: "https://github.com/user/design-system",
      viewUrl: "https://design-system-demo.com",
      image: "/images/design-system-project.jpg",
    },
    {
      stack: ["Vue.js", "Node.js", "Express", "MongoDB", "Socket.io"],
      title: "Real-time Chat Application",
      description:
        "Modern chat application with real-time messaging, file sharing, and video calls. Built with Vue.js frontend and Node.js backend, featuring user authentication, group chats, and message encryption.",
      repoUrl: "https://github.com/user/chat-app",
      viewUrl: "https://chat-demo.com",
      image: "/images/chat-app-project.jpg",
    },
    {
      stack: ["React Native", "Firebase", "Redux", "TypeScript"],
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Includes offline functionality and health kit integration.",
      repoUrl: "https://github.com/user/fitness-app",
      viewUrl: "https://fitness-demo.com",
      image: "/images/fitness-app-project.jpg",
    },
    {
      stack: ["React Native", "Firebase", "Redux", "TypeScript"],
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Includes offline functionality and health kit integration.",
      repoUrl: "https://github.com/user/fitness-app",
      viewUrl: "https://fitness-demo.com",
      image: "/images/fitness-app-project.jpg",
    },
    {
      stack: ["React Native", "Firebase", "Redux", "TypeScript"],
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Includes offline functionality and health kit integration.",
      repoUrl: "https://github.com/user/fitness-app",
      viewUrl: "https://fitness-demo.com",
      image: "/images/fitness-app-project.jpg",
    },
    {
      stack: ["React Native", "Firebase", "Redux", "TypeScript"],
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Includes offline functionality and health kit integration.",
      repoUrl: "https://github.com/user/fitness-app",
      viewUrl: "https://fitness-demo.com",
      image: "/images/fitness-app-project.jpg",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden py-20 px-4 relative ">
      {/* Background inmersivo animado */}
      <AnimatedBg mousePosition={mousePosition} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header con animación de entrada */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-7xl text-white mb-4 font-extralight tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FEATURED PROJECTS
          </motion.h1>

          {/* Línea verde con efecto de luz animado */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-16 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 w-16 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm"></div>
              <div className="absolute inset-0 w-16 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent blur-md opacity-70"></div>
            </div>
          </motion.div>

          <motion.p
            className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A curated selection of projects that showcase the intersection of
            creative design, technical excellence, and user-centered thinking.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-sm text-slate-400 tracking-wider uppercase">
              Featured Work
            </span>
          </motion.div>
        </motion.div>

        {/* Bento Grid Layout con animación staggered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Primera tarjeta destacada - Mismo tamaño que la segunda */}
          <TiltWrapper className="md:col-span-3 lg:col-span-3">
            <WorkCard {...projects[0]} className=" h-full" />
          </TiltWrapper>

          {/* Dos tarjetas pequeñas a la derecha */}
          <TiltWrapper className="md:col-span-2 lg:col-span-2">
            <WorkCard {...projects[1]} className=" h-full" />
          </TiltWrapper>
          <TiltWrapper className="md:col-span-2 lg:col-span-2">
            <WorkCard {...projects[2]} className=" h-full" />
          </TiltWrapper>

          {/* Tres tarjetas medianas en fila */}
          <TiltWrapper className="md:col-span-2 lg:col-span-2">
            <WorkCard {...projects[3]} className=" h-full" />
          </TiltWrapper>
          <TiltWrapper className="md:col-span-2 lg:col-span-2">
            <WorkCard {...projects[4]} className=" h-full" />
          </TiltWrapper>
          <TiltWrapper className="md:col-span-2 lg:col-span-2">
            <WorkCard {...projects[5]} className=" h-full" />
          </TiltWrapper>

          {/* Segunda tarjeta destacada - Mismo tamaño que la primera */}
          <TiltWrapper className="md:col-span-3 lg:col-span-3">
            <WorkCard {...projects[6]} className=" h-full" />
          </TiltWrapper>

          {/* Resto de proyectos en formato estándar - Solo si hay más de 7 */}
          {projects.slice(7).map((project, index) => (
            <TiltWrapper
              key={index + 7}
              className="md:col-span-2 lg:col-span-2"
            >
              <WorkCard {...project} />
            </TiltWrapper>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkSection;
