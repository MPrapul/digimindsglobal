"use client";

import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export function AnimatedHero() {
  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  // Enhanced parallax values for smoother effect
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Features with icons and descriptions
  const features = [
    {
      icon: "/images/icons/web-design.svg",
      label: "Web Design",
      description: "Create beautiful, responsive websites that convert visitors into customers",
      color: "from-[#0176D3] to-[#1589ee]"
    },
    {
      icon: "/images/icons/lead-generation.svg",
      label: "B2B Lead Generation",
      description: "Attract high-quality business leads through targeted marketing campaigns",
      color: "from-[#032D60] to-[#0176D3]"
    },
    {
      icon: "/images/icons/software-dev.svg",
      label: "Software Development",
      description: "Build custom software solutions with comprehensive testing and quality assurance",
      color: "from-[#1589ee] to-[#0176D3]"
    },
    {
      icon: "/images/icons/ux-design.svg",
      label: "UI/UX Design",
      description: "Create intuitive and engaging user experiences that delight your customers",
      color: "from-[#032D60] to-[#0176D3]"
    }
  ];

  // Marketing Cloud Studios - updated with Salesforce branding
  const studios = [
    {
      name: "Web Design",
      icon: "/images/icons/web-design.svg",
      color: "bg-[#eef5fc] border-[#b4c8e1]",
      hoverColor: "hover:bg-[#e6f0fa] hover:border-[#0176D3]",
      link: "/marketing/services/web-design"
    },
    {
      name: "B2B Lead Generation & Social Media",
      icon: "/images/icons/lead-generation.svg",
      color: "bg-[#eef5fc] border-[#b4c8e1]",
      hoverColor: "hover:bg-[#e6f0fa] hover:border-[#0176D3]",
      link: "/marketing/services/lead-generation"
    },
    {
      name: "Software Development & Testing",
      icon: "/images/icons/software-dev.svg",
      color: "bg-[#eef5fc] border-[#b4c8e1]",
      hoverColor: "hover:bg-[#e6f0fa] hover:border-[#0176D3]",
      link: "/marketing/services/software-development"
    },
    {
      name: "UI/UX Design",
      icon: "/images/icons/ux-design.svg",
      color: "bg-[#eef5fc] border-[#b4c8e1]",
      hoverColor: "hover:bg-[#e6f0fa] hover:border-[#0176D3]",
      link: "/marketing/services/ux-design"
    }
  ];

  // Rotate through features automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Check if component is visible in viewport
  useEffect(() => {
    // setIsVisible(true);
    
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      // setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-start pt-14 sm:pt-0 sm:items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24 mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl pt-0"
            style={{ y: y1, opacity, scale }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-block mb-6 bg-gradient-to-r from-[#0176D3] to-[#1589ee] px-4 py-2 rounded-full shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-white text-sm font-medium">Web & Marketing Experts</span>
            </motion.div>
            
            {/* Main heading - enhanced typography */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-[#032D60] to-[#0176D3] bg-clip-text text-transparent">DigiMindsGlobal</span> - <span className="bg-gradient-to-r from-[#0176D3] to-[#1589ee] bg-clip-text text-transparent">Elevating your digital presence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Expert marketing and web solutions to grow your business.
            </motion.p>
            
            {/* CTA Buttons - enhanced with gradients and shadows */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-[#0176D3] to-[#1589ee] hover:from-[#0176D3] hover:to-[#0176D3] text-white shadow-md hover:shadow-lg transition-all duration-300 border border-transparent"
              >
                <Link href="/marketing/services">
                  Our Services
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-[#0176D3] text-[#0176D3] hover:bg-[#f0f8ff] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Link href="/marketing/contact">
                  Contact Us
                </Link>
              </Button>
            </motion.div>
            
            {/* Feature showcase - enhanced with animations and styling */}
            <motion.div 
              className="bg-white/90 backdrop-blur-md rounded-xl p-6 border border-[#b4c8e1] shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center p-3 shadow-md`}>
                    <Image
                      src={features[activeFeature].icon}
                      alt={features[activeFeature].label}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#032D60]">{features[activeFeature].label}</h3>
                    <p className="text-sm text-gray-600 mt-1">{features[activeFeature].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Feature indicator dots - enhanced styling */}
              <div className="mt-5 flex gap-2 justify-center">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeFeature ? 'bg-[#0176D3] w-6' : 'bg-[#b4c8e1]'}`}
                    aria-label={`View feature ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Marketing Cloud Studios - enhanced with animations and styling */}
          <motion.div 
            className="hidden lg:block"
            style={{ y: y2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#0176D3]/10 rounded-full blur-3xl"></div>
              
              {/* Marketing Cloud Studios Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-6">
                {studios.map((studio, index) => (
                  <Link 
                    href={studio.link} 
                    key={studio.name}
                  >
                    <motion.div
                      className={`p-6 rounded-xl ${studio.color} ${studio.hoverColor} border shadow-lg backdrop-blur-sm transition-all duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.03,
                        boxShadow: "0 20px 25px -5px rgba(1, 118, 211, 0.1), 0 10px 10px -5px rgba(1, 118, 211, 0.04)"
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0176D3] to-[#1589ee] flex items-center justify-center p-3 shadow-md">
                          <Image
                            src={studio.icon}
                            alt={studio.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain filter brightness-0 invert"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-[#032D60]">{studio.name}</h3>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
              
              {/* Decorative elements - enhanced animations */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0176D3] rounded-full opacity-10 z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 bg-[#1589ee] rounded-full opacity-20 z-0"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: 1 
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Mobile Studios Display - enhanced styling */}
        <motion.div 
          className="mt-12 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-[#032D60] mb-4 text-center">Our Services</h3>
          <div className="grid grid-cols-2 gap-4">
            {studios.map((studio, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl ${studio.color} ${studio.hoverColor} border shadow-md transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0176D3] to-[#1589ee] flex items-center justify-center p-2 shadow-md">
                    <Image
                      src={studio.icon}
                      alt={studio.name}
                      width={24}
                      height={24}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-[#032D60]">{studio.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 