"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
  link?: string;
  category?: string;
}

interface ServicesGridProps {
  services: Service[];
  showViewAllButton?: boolean;
}

export function ServicesGrid({ services, showViewAllButton = true }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Extract unique categories from services
  const categories = ["All", ...new Set(services.map(service => service.category || "Other"))];

  // Filter services by active category
  const filteredServices = activeCategory && activeCategory !== "All"
    ? services.filter(service => service.category === activeCategory)
    : services;

  // Simpler animation variants with better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 10,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <div className="relative w-full py-8">
      {/* Simplified background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-800/10"></div>
      </div>

      {/* Category filters with simplified hover states */}
      {categories.length > 1 && (
        <div className="relative z-10 flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category === "All" ? null : category)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                (category === "All" && !activeCategory) || category === activeCategory
                  ? "bg-white/95 text-blue-600 shadow-md"
                  : "bg-white/8 text-white/80 backdrop-blur-sm hover:bg-white/15 hover:text-white/95"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Services grid with optimized hover effects */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory || "all"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={containerVariants}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                variants={cardVariants}
                className="group relative"
              >
                <Link 
                  href={service.link || "/marketing/services"} 
                  className="block h-full"
                >
                  <div 
                    className="h-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20"
                  >
                    {/* Simplified static background */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-800/90"></div>
                    </div>

                    {/* Card content with consistent spacing */}
                    <div className="relative z-10 h-full flex flex-col p-6 md:p-7">
                      {/* Top section with icon and title */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400/70 to-blue-400/70 rounded-full"></div>
                        </div>
                        <div 
                          className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center p-2"
                        >
                          <Image
                            src={service.icon}
                            alt={service.title}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain filter brightness-0 invert opacity-90"
                          />
                        </div>
                      </div>
                      
                      {/* Description with consistent text */}
                      <div className="py-2 flex-grow">
                        <p className="text-white/80 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Learn more link with simplified hover effect */}
                      <div className="pt-4">
                        <div className="flex items-center text-cyan-300/80 font-medium group-hover:translate-x-1 transition-transform duration-200">
                          Learn more 
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 ml-2" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Services button with simplified hover effects */}
        {showViewAllButton && (
          <div className="mt-10 md:mt-12 text-center">
            <Link 
              href="/marketing/services" 
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10 hover:border-white/20 transition-all duration-200 shadow-md"
            >
              View All Services 
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
} 