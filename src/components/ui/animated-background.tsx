"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  // Generate animated particles for the background
  useEffect(() => {
    if (!isClient) {
      setIsClient(true);
      return;
    }
    
    // Salesforce blue color palette
    const colors = [
      "rgba(1, 118, 211, 0.3)",    // Primary Salesforce Blue (#0176D3)
      "rgba(3, 45, 96, 0.3)",      // Darker blue (#032D60)
      "rgba(21, 137, 238, 0.3)",   // Lighter blue (#1589ee)
      "rgba(180, 200, 225, 0.2)"   // Very light blue (#b4c8e1)
    ];
    
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = window.innerWidth < 768 ? 40 : 60;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1.5,
          opacity: Math.random() * 0.4 + 0.1,
          duration: Math.random() * 25 + 15,
          delay: Math.random() * 12,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced gradient background with Salesforce colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef5fc] to-[#e6f0fa] opacity-95"></div>
      
      {/* Animated particles */}
      {isClient && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
          animate={{
            y: ["0%", "100%"],
            x: [`${particle.x}%`, `${particle.x + (Math.random() * 15 - 7.5)}%`],
            scale: [1, Math.random() * 0.5 + 1, 1]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Enhanced light effects with Salesforce colors */}
      <motion.div 
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#0176D3] rounded-full filter blur-[150px] opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#1589ee] rounded-full filter blur-[150px] opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-[#032D60] rounded-full filter blur-[120px] opacity-5"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 2 
        }}
      />
    </div>
  );
} 