"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string | ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: "heading" | "paragraph" | "highlight";
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  type = "paragraph",
}: AnimatedTextProps) {
  // For string text, split into words for animation
  const words = typeof text === "string" ? text.split(" ") : null;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  };

  // For heading type, add a gradient animation
  const gradientAnimation = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // If text is a React node, just animate the container
  if (typeof text !== "string") {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={child}
      >
        {text}
      </motion.div>
    );
  }

  // For text strings, animate each word
  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {type === "heading" ? (
        <motion.span
          className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-[#b4c8e1] to-white bg-[length:200%_auto]"
          animate="animate"
          variants={gradientAnimation}
        >
          {words?.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={child}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      ) : type === "highlight" ? (
        <motion.span
          className="inline-block text-[#1589ee]"
          whileHover={{ scale: 1.05 }}
        >
          {words?.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={child}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      ) : (
        words?.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={child}
          >
            {word}
          </motion.span>
        ))
      )}
    </motion.div>
  );
} 