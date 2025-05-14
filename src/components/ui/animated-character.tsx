"use client";

import { motion } from "framer-motion";
import { SalesforceCharacter } from "./salesforce-character";
import { useEffect, useState } from "react";

export function AnimatedCharacter() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Don't render random particles during SSR
  if (!isClient) {
    return (
      <div className="relative w-full h-full">
        <div className="absolute bottom-0 right-0 md:right-10 lg:right-20 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <SalesforceCharacter />
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative w-full h-full">
      {/* Character container with floating animation */}
      <motion.div
        className="absolute bottom-0 right-0 md:right-10 lg:right-20 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        initial={{ y: 0 }}
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
      >
        {/* Character SVG */}
        <SalesforceCharacter />
        
        {/* Animated glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-[#0176D3]/20 blur-2xl -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => {
        // Use deterministic values based on index instead of random
        const size = 5 + (i % 3) * 3;
        const left = (i * 15) % 100;
        const top = (i * 12) % 100;
        const duration = 2 + (i % 3) * 1;
        const delay = i * 0.5;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/80 backdrop-blur-sm"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: duration,
              delay: delay,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
} 