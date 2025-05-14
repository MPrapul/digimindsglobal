"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface PulsingButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function PulsingButton({ href, children, className = "" }: PulsingButtonProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Enhanced outer pulsing rings */}
      <motion.span
        className="absolute inset-0 rounded-full bg-cyan-500/20"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 0.2, 0.7],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.span
        className="absolute inset-0 rounded-full bg-blue-500/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.1, 0.5],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />
      
      {/* Button wrapper */}
      <Link href={href} className="relative z-10 block">
        <motion.div
          className="relative inline-flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Button content */}
          <motion.span
            className="relative z-10 inline-flex items-center justify-center py-4 px-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-base border border-blue-400/20"
            whileTap={{ scale: 0.98 }}
          >
            {children}
          </motion.span>
        </motion.div>
      </Link>
    </div>
  );
} 