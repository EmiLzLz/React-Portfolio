import React from 'react';
import TiltWrapper from './TiltWrapper';


const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <TiltWrapper
    className="group p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
    delay={delay}
    style={{ 
      fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 20px 40px rgba(0, 0, 0, 0.1)'
    }}
  >
    {/* Efecto hover con gradiente radial */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.15) 60%, transparent 100%)',
        borderRadius: 'inherit'
      }}
    />
    
    <div className="relative z-10">
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
        <Icon size={32} className="text-emerald-400 drop-shadow-lg" strokeWidth={1.2} />
      </div>
      
      <h3 
        className="text-center text-gray-700 uppercase tracking-wider mb-3 drop-shadow-sm"
        style={{ 
          fontSize: '25px',
          fontWeight: '200',
          letterSpacing: '0.1em'
        }}
      >
        {title}
      </h3>
      
      <p 
        className="text-center text-gray-600 leading-relaxed"
        style={{ 
          fontSize: '16px',
          fontWeight: '200',
          lineHeight: '1.6'
        }}
      >
        {description}
      </p>
    </div>
  </TiltWrapper>
);

export default ServiceCard;