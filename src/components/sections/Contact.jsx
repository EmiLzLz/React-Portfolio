import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-slate-900 text-white py-20 sm:py-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.2em] mb-8">
            LET'S CONNECT
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's start a conversation about
            your next project.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8 mb-16"
        >
          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/tu-perfil" // Reemplaza con tu URL
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-blue-500 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin
              size={32}
              className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300"
            />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/tu-usuario" // Reemplaza con tu URL
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-emerald-500 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github
              size={32}
              className="text-slate-400 group-hover:text-emerald-500 transition-colors duration-300"
            />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:tu-email@gmail.com" // Reemplaza con tu email
            className="group p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-cyan-400 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(34, 211, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail
              size={32}
              className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300"
            />
          </motion.a>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-500 font-light tracking-wide">
            Always excited to discuss new opportunities and collaborations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
