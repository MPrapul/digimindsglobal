"use client";

import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
  link?: string;
}

interface ScrollingCarouselProps {
  services: Service[];
  autoScrollSpeed?: number; // Speed in pixels per second
  pauseOnHover?: boolean;
  showControls?: boolean;
}

export function ScrollingCarousel({
  services,
  autoScrollSpeed = 30,
  pauseOnHover = true,
  showControls = true,
}: ScrollingCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(300); // Default width
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [duplicatedServices, setDuplicatedServices] = useState<Service[]>([]);
  const controls = useAnimationControls();
  const x = useMotionValue(0);

  // Duplicate services for infinite scroll effect
  useEffect(() => {
    // Duplicate the services array to create a seamless loop
    const duplicated = [...services, ...services, ...services];
    setDuplicatedServices(duplicated);
  }, [services]);

  // Measure carousel dimensions
  useEffect(() => {
    if (!carouselRef.current) return;

    const updateDimensions = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth);
        // Estimate item width based on container width and visible items
        const containerWidth = carouselRef.current.clientWidth;
        const visibleItems = containerWidth >= 1280 ? 3 : containerWidth >= 768 ? 2 : 1.2;
        const estimatedItemWidth = containerWidth / visibleItems;
        setItemWidth(estimatedItemWidth);
      }
    };

    updateDimensions();
    
    // Add resize listener
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [duplicatedServices.length]);

  // Auto-scroll animation
  useEffect(() => {
    if (carouselWidth === 0 || isDragging || isPaused || !isAutoScrolling) return;

    // Calculate total duration based on speed
    const totalDuration = (carouselWidth / autoScrollSpeed) * 0.33; // Only animate 1/3 of the carousel

    const startAnimation = async () => {
      // Animate from 0 to -1/3 of the carousel width (one set of services)
      await controls.start({
        x: -(carouselWidth / 3),
        transition: {
          duration: totalDuration,
          ease: "linear",
        },
      });
      
      // Immediately reset to 0 without animation
      controls.set({ x: 0 });
      
      // Repeat the animation if auto-scrolling is still enabled
      if (isAutoScrolling) {
        startAnimation();
      }
    };

    startAnimation();
    
    return () => {
      controls.stop();
    };
  }, [controls, carouselWidth, isDragging, isPaused, autoScrollSpeed, isAutoScrolling]);

  // Handle manual navigation
  const handleNext = () => {
    // Stop auto-scrolling
    setIsAutoScrolling(false);
    
    // Get current position
    const currentX = x.get();
    
    // Calculate target position (move one card to the right)
    const targetX = currentX - itemWidth;
    
    // Animate to the new position
    controls.start({
      x: targetX,
      transition: { duration: 0.5, type: "spring", stiffness: 150, damping: 25 },
    });
  };

  const handlePrev = () => {
    // Stop auto-scrolling
    setIsAutoScrolling(false);
    
    // Get current position
    const currentX = x.get();
    
    // Calculate target position (move one card to the left)
    const targetX = currentX + itemWidth;
    
    // Animate to the new position
    controls.start({
      x: targetX,
      transition: { duration: 0.5, type: "spring", stiffness: 150, damping: 25 },
    });
  };

  // Reset auto-scrolling
  const handleResumeAutoScroll = () => {
    if (!isAutoScrolling) {
      controls.set({ x: 0 });
      setIsAutoScrolling(true);
    }
  };

  return (
    <div className="relative w-full py-16">
      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/20"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]"
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Improved navigation controls */}
      {showControls && (
        <div className="absolute top-1/2 left-0 right-0 -mt-8 flex justify-between px-4 md:px-8 z-30 pointer-events-none">
          <motion.button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full bg-white/95 shadow-xl text-blue-600 flex items-center justify-center pointer-events-auto transform -translate-x-1 border border-blue-100"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 1)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="w-14 h-14 rounded-full bg-white/95 shadow-xl text-blue-600 flex items-center justify-center pointer-events-auto transform translate-x-1 border border-blue-100"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 1)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      )}

      {/* Improved resume auto-scroll button */}
      {!isAutoScrolling && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
          <motion.button
            onClick={handleResumeAutoScroll}
            className="text-sm bg-white/95 text-blue-600 px-5 py-2 rounded-full shadow-lg border border-blue-100 font-medium"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 8px 20px -5px rgba(59, 130, 246, 0.4)" 
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Resume Auto-scroll
          </motion.button>
        </div>
      )}

      {/* Improved carousel container with better spacing */}
      <div 
        className="relative z-10 overflow-hidden mx-auto px-4 md:px-12 lg:px-16" 
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        ref={carouselRef}
      >
        <motion.div
          className="flex"
          animate={controls}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -(carouselWidth / 3) * 2, right: 0 }}
          onDragStart={() => {
            setIsDragging(true);
            setIsAutoScrolling(false);
          }}
          onDragEnd={() => {
            setIsDragging(false);
            // Snap to the nearest item
            const currentX = x.get();
            const snappedX = Math.round(currentX / itemWidth) * itemWidth;
            controls.start({
              x: snappedX,
              transition: { duration: 0.5, ease: "easeOut" },
            });
          }}
        >
          {duplicatedServices.map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              className="px-5 flex-shrink-0"
              style={{ width: itemWidth }}
              initial={{ opacity: 0.9 }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 2,
                opacity: 1,
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
            >
              <Link 
                href={service.link || "/marketing/services"} 
                className="block h-full"
              >
                <motion.div 
                  className="h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 bg-transparent"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  {/* Enhanced glass background with better contrast */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>
                  </div>

                  {/* Enhanced card content with better styling */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Top section with highlighted icon and improved title */}
                    <div className="pt-8 pb-2 px-6">
                      <div className="flex items-start justify-between mb-5">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        </div>
                        <motion.div 
                          className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center p-3 backdrop-blur-sm shadow-lg"
                          whileHover={{ 
                            rotate: [0, -5, 5, 0], 
                            scale: 1.1, 
                            transition: { duration: 0.5 } 
                          }}
                        >
                          <Image
                            src={service.icon}
                            alt={service.title}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain filter brightness-0 invert"
                          />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Description with better typography */}
                    <div className="px-6 py-4 flex-grow">
                      <p className="text-white/90 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Bottom action button with enhanced styling */}
                    <div className="px-6 pb-6">
                      <motion.div 
                        className="flex items-center text-cyan-300 font-medium"
                        initial={{ x: 0 }}
                        whileHover={{ 
                          x: 5,
                          color: "rgb(165, 243, 252)", // text-cyan-200
                          transition: { duration: 0.2 }
                        }}
                      >
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
                      </motion.div>
                    </div>
                    
                    {/* Enhanced decorative elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden opacity-20">
                      <div className="absolute -top-10 -left-10 w-20 h-20 rotate-45 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden">
                      <div className="absolute -bottom-16 -right-16 w-32 h-32 rotate-45 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20"></div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 