"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SalesforceCharacter() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Static version for SSR
  if (!isClient) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Static character elements */}
          <circle cx="150" cy="120" r="80" fill="#1589EE" stroke="#032D60" strokeWidth="4" />
          <circle cx="150" cy="130" r="65" fill="white" />
          <g>
            <circle cx="125" cy="115" r="12" fill="#032D60" />
            <circle cx="175" cy="115" r="12" fill="#032D60" />
            <circle cx="130" cy="110" r="4" fill="white" />
            <circle cx="180" cy="110" r="4" fill="white" />
          </g>
          <path d="M125 145 Q150 165 175 145" stroke="#032D60" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M150 40 L150 10" stroke="#032D60" strokeWidth="4" />
          <circle cx="150" cy="10" r="8" fill="#FF9A3C" />
          <path d="M110 200 L110 250 Q150 270 190 250 L190 200" fill="#1589EE" stroke="#032D60" strokeWidth="4" />
          <path d="M110 210 C90 220 70 210 60 190" stroke="#1589EE" strokeWidth="12" strokeLinecap="round" />
          <path d="M190 210 C210 220 230 210 240 190" stroke="#1589EE" strokeWidth="12" strokeLinecap="round" />
          <path d="M240 190 C260 180 270 160 260 140 C280 130 280 100 260 90 C270 70 260 40 240 30 C230 10 200 0 180 20 C160 0 130 10 120 30 C100 20 70 40 70 70 C50 80 40 110 60 130 C40 150 50 180 70 190" fill="#0176D3" stroke="#032D60" strokeWidth="2" />
          <text x="150" y="110" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#0176D3">SF</text>
        </svg>
      </div>
    );
  }
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background glow effect */}
      <motion.div 
        className="absolute w-[300px] h-[300px] rounded-full bg-[#1589ee]/30 blur-xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(21,137,238,0.3) 0%, rgba(21,137,238,0) 70%)'
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
      
      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          y: [0, -10, 0],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{ 
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" }
        }}
      >
        {/* Head with subtle pulsing */}
        <motion.circle 
          cx="150" 
          cy="120" 
          r="80" 
          fill="#1589EE"
          stroke="#032D60"
          strokeWidth="4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{ transformOrigin: '150px 120px' }}
        />
        
        {/* Face */}
        <motion.circle 
          cx="150" 
          cy="130" 
          r="65" 
          fill="white"
          animate={{ y: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        
        {/* Eyes with blinking */}
        <g>
          <motion.circle 
            cx="125" 
            cy="115" 
            r="12" 
            fill="#032D60"
            animate={{ 
              scaleY: [1, 0.1, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 0.2, 
              repeatDelay: 5,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            style={{ transformOrigin: '125px 115px' }}
          />
          <motion.circle 
            cx="175" 
            cy="115" 
            r="12" 
            fill="#032D60"
            animate={{ 
              scaleY: [1, 0.1, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 0.2, 
              repeatDelay: 5,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            style={{ transformOrigin: '175px 115px' }}
          />
          
          {/* Eye shine with subtle movement */}
          <motion.circle 
            cx="130" 
            cy="110" 
            r="4" 
            fill="white"
            animate={{ x: [0, 1, 0, -1, 0], y: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="180" 
            cy="110" 
            r="4" 
            fill="white"
            animate={{ x: [0, 1, 0, -1, 0], y: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </g>
        
        {/* Smile with subtle animation */}
        <motion.path 
          d="M125 145 Q150 165 175 145" 
          stroke="#032D60" 
          strokeWidth="5" 
          strokeLinecap="round"
          fill="none"
          animate={{ 
            d: [
              "M125 145 Q150 165 175 145", 
              "M125 145 Q150 168 175 145", 
              "M125 145 Q150 165 175 145"
            ] 
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        
        {/* Antenna with bouncy animation */}
        <motion.g>
          <motion.path 
            d="M150 40 L150 10" 
            stroke="#032D60" 
            strokeWidth="4"
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: '150px 40px' }}
          />
          <motion.circle 
            cx="150" 
            cy="10" 
            r="8" 
            fill="#FF9A3C"
            animate={{ 
              scale: [1, 1.2, 1],
              fill: ["#FF9A3C", "#FFB74D", "#FF9A3C"]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.g>
        
        {/* Body with breathing animation */}
        <motion.path 
          d="M110 200 L110 250 Q150 270 190 250 L190 200"
          fill="#1589EE"
          stroke="#032D60"
          strokeWidth="4"
          animate={{ y: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        
        {/* Arms with waving animation */}
        <motion.path 
          d="M110 210 C90 220 70 210 60 190"
          stroke="#1589EE"
          strokeWidth="12"
          strokeLinecap="round"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: '110px 210px' }}
        />
        
        <motion.path 
          d="M190 210 C210 220 230 210 240 190"
          stroke="#1589EE"
          strokeWidth="12"
          strokeLinecap="round"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: '190px 210px' }}
        />
        
        {/* Salesforce Cloud with subtle floating */}
        <motion.path 
          d="M240 190 C260 180 270 160 260 140 C280 130 280 100 260 90 C270 70 260 40 240 30 C230 10 200 0 180 20 C160 0 130 10 120 30 C100 20 70 40 70 70 C50 80 40 110 60 130 C40 150 50 180 70 190"
          fill="#0176D3"
          stroke="#032D60"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
          }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 1 },
            y: { duration: 1 },
          }}
          style={{ transformOrigin: 'center' }}
        />
        
        {/* Salesforce Logo with glow effect */}
        <motion.text 
          x="150" 
          y="110" 
          textAnchor="middle" 
          fontSize="24" 
          fontWeight="bold" 
          fill="#0176D3"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            fill: ["#0176D3", "#1589ee", "#0176D3"]
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.5 },
            fill: { repeat: Infinity, duration: 3, ease: "easeInOut" }
          }}
        >
          SF
        </motion.text>
      </motion.svg>
      
      {/* Particle effects around the character */}
      {[...Array(8)].map((_, i) => {
        const size = 3 + (i % 3) * 2;
        const angle = (i / 8) * Math.PI * 2;
        const radius = 160 + (i % 3) * 20;
        const x = Math.cos(angle) * radius + 150;
        const y = Math.sin(angle) * radius + 150;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/80 backdrop-blur-sm"
            style={{
              width: size,
              height: size,
              left: x,
              top: y,
            }}
            animate={{
              x: [0, Math.cos(angle + Math.PI/4) * 20, 0],
              y: [0, Math.sin(angle + Math.PI/4) * 20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + (i % 3),
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
} 