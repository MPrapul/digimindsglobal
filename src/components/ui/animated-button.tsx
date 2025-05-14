"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) {
  // Base styles
  const baseStyles = "relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden";
  
  // Variant specific styles
  const variantStyles = {
    primary: "bg-white text-[#0176D3] border border-black shadow-md",
    secondary: "bg-transparent border-2 border-white text-white shadow-md",
  };
  
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: variant === "primary" ? 0.2 : 0.4
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Button glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          variant === "primary" 
            ? "bg-[#0176D3]/20" 
            : "bg-white/20"
        } blur-md -z-10`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ 
          scale: 1.2,
          opacity: 0.7,
        }}
      />
      
      <Link 
        href={href} 
        className={`${baseStyles} ${variantStyles[variant]} ${className} group`}
      >
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ translateX: "-100%" }}
          whileHover={{ translateX: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        
        {/* Button content with subtle animation */}
        <motion.span 
          className="relative z-10 flex items-center justify-center gap-2"
          whileHover={{ letterSpacing: "0.02em" }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>
      </Link>
    </motion.div>
  );
} 