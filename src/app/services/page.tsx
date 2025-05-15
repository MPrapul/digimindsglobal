"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const mainServices = [
  {
    title: "Web Design & Development",
    description: "Create beautiful, responsive websites that convert visitors into customers and elevate your brand online.",
    icon: <span className="flex items-center justify-center w-full h-full text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M8 16l2-4 2 4"></path>
        <path d="M16 16h.01"></path>
      </svg>
    </span>,
    features: [
      "Custom Website Development",
      "WordPress, Wix, Shopify, and E-commerce Solutions",
      "Landing Page & Business Website Creation",
      "SEO Optimization for Better Ranking",
      "Responsive Design for All Devices",
      "Website Maintenance & Support"
    ],
    href: "/services/web-design",
    bgColor: "bg-gradient-to-br from-[#0176D3] to-[#1589ee]"
  },
  {
    title: "B2B Lead Generation",
    description: "Attract high-quality business leads through targeted marketing campaigns and strategic outreach.",
    icon: <span className="flex items-center justify-center w-full h-full text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        <path d="M21 15l-2-2"></path>
        <path d="M19 13v4h4"></path>
      </svg>
    </span>,
    features: [
      "Targeted Lead Acquisition Strategies",
      "Email & LinkedIn Outreach Campaigns",
      "Data-Driven Lead Scoring",
      "Maximizing Conversions with Smart Engagement",
      "CRM Integration & Management",
      "Lead Nurturing & Follow-up Automation"
    ],
    href: "/services/lead-generation",
    bgColor: "bg-gradient-to-br from-[#032D60] to-[#0176D3]"
  },
  {
    title: "Software Development",
    description: "Build custom software solutions with comprehensive testing and quality assurance for reliable results.",
    icon: <span className="flex items-center justify-center w-full h-full text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    </span>,
    features: [
      "Custom Software Solutions",
      "Mobile App Development (Android & iOS)",
      "Enterprise Software & Automation Tools",
      "Web Application Development",
      "Quality Assurance & Testing",
      "Software Maintenance & Support"
    ],
    href: "/services/software-development",
    bgColor: "bg-gradient-to-br from-[#1589ee] to-[#0176D3]"
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences that delight your customers and increase conversion rates.",
    icon: <span className="flex items-center justify-center w-full h-full text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <path d="M6 8h.01"></path>
        <path d="M9 8h.01"></path>
        <path d="M12 8h.01"></path>
        <rect x="7" y="12" width="10" height="2" rx="1"></rect>
      </svg>
    </span>,
    features: [
      "User-Friendly Website & App Designs",
      "Wireframing & Prototyping",
      "Interactive UI Elements",
      "Enhancing User Experience with Modern Trends",
      "Design Systems & Style Guides",
      "Usability Testing & Optimization"
    ],
    href: "/services/ux-design",
    bgColor: "bg-gradient-to-br from-[#032D60] to-[#0176D3]"
  },
  {
    title: "Social Media Management",
    description: "Build brand awareness and engagement through strategic social media presence and content.",
    icon: <span className="flex items-center justify-center w-full h-full text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    </span>,
    features: [
      "Content Creation & Strategy",
      "Social Media Advertising (Facebook, Instagram, LinkedIn, Twitter)",
      "Brand Engagement & Growth",
      "Influencer & Community Management",
      "Social Media Analytics & Reporting",
      "Platform-Specific Content Optimization"
    ],
    href: "/services/social-media",
    bgColor: "bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]"
  },
  {
    title: "Digital Marketing",
    description: "Drive business growth through comprehensive digital marketing strategies and campaigns.",
    icon: <span className="flex items-center justify-center w-full h-full text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
        <circle cx="17" cy="7" r="5"></circle>
      </svg>
    </span>,
    features: [
      "SEO & Content Optimization",
      "Social Media Marketing Strategies",
      "PPC & Paid Advertising Campaigns",
      "Analytics-Driven Performance Growth",
      "Email Marketing Campaigns",
      "Marketing Automation & Integration"
    ],
    href: "/services/digital-marketing",
    bgColor: "bg-gradient-to-br from-[#EA580C] to-[#E11D48]"
  }
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }
}

const iconHover = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: 5, transition: { duration: 0.4, type: "spring", stiffness: 200 } }
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: { 
    y: [0, -10, 0], 
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    } 
  }
}

const pulseAnimation = {
  initial: { opacity: 0.7, scale: 1 },
  animate: { 
    opacity: [0.7, 1, 0.7], 
    scale: [1, 1.05, 1],
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    } 
  }
}

export default function ServicesPage() {
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-advance logic if needed
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[700px] w-full overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Salesforce Services"
            fill
            className="object-cover transition-transform duration-10000 hover:scale-105 brightness-[0.6]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B5CAB]/95 via-[#0176D3]/85 to-[#1589EE]/75 backdrop-blur-[2px]" />
          
          {/* Enhanced Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30 mix-blend-soft-light pointer-events-none"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#AACBFF]/30 to-[#1589EE]/30 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#0176D3]/10 to-[#AACBFF]/10 rounded-full blur-3xl"
          />
          
          {/* Enhanced Floating Elements */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-[#1589EE]/40 to-[#AACBFF]/40 blur-2xl"
          />
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-[#AACBFF]/40 to-[#1589EE]/40 blur-2xl"
          />
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-white/30 to-white/10 blur-2xl"
          />
        </div>
        
        {/* Enhanced Hero Content */}
        <div className="container relative z-10 flex min-h-[700px] flex-col items-center justify-center text-center text-white mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-block rounded-full bg-gradient-to-r from-[#0176D3]/40 to-[#1589EE]/40 px-6 py-2 text-sm font-medium text-white backdrop-blur-md border border-[#1589EE]/30 shadow-lg shadow-[#0176D3]/10"
          >
            <span className="drop-shadow-lg">Web & Marketing Experts</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-4xl mx-auto leading-[1.1] drop-shadow-2xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#AACBFF] to-[#1589EE] font-extrabold"
            >
              DigiMindsGlobal Services
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="inline-block text-white drop-shadow-2xl mt-2"
            >
              Elevating Your Digital Presence
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mb-12 max-w-2xl text-lg sm:text-xl text-white/90 text-center mx-auto leading-relaxed drop-shadow-lg backdrop-blur-[2px] rounded-2xl px-4 py-2"
          >
            We offer B2B Marketing, Web Design & Development, Social Media
            Marketing, UI/UX Design, B2B Lead Generation, and Digital Marketing to
            help businesses grow and succeed online.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex flex-wrap gap-5 justify-center"
          >
            <motion.div variants={buttonHover} initial="rest" whileHover="hover">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-[#0176D3] to-[#1589EE] hover:from-[#0B5CAB] hover:to-[#0176D3] shadow-lg hover:shadow-2xl hover:shadow-[#0176D3]/30 transition-all duration-300 text-base py-6 px-8 sm:text-lg sm:py-7 sm:px-10 border border-white/20">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started
                  <motion.span 
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div variants={buttonHover} initial="rest" whileHover="hover">
              <Button size="lg" variant="outline" className="rounded-full bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 transition-all duration-300 text-base py-6 px-8 sm:text-lg sm:py-7 sm:px-10 hover:border-white/50 shadow-lg hover:shadow-2xl hover:shadow-white/20">
                <Link href="#services" className="flex items-center gap-2">
                  Explore Services
                  <motion.span 
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 lg:py-24 overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 inline-block rounded-full bg-gradient-to-r from-white to-[#AACBFF] px-4 py-1 text-sm font-medium text-[#0B5CAB]"
            >
              Comprehensive Solutions
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE]">
                Our Services
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg sm:text-xl leading-relaxed"
            >
              DigiMindsGlobal offers a complete suite of digital services to boost your online presence, generate quality leads, and create exceptional user experiences. From web design to digital marketing, we provide end-to-end solutions tailored to your business needs.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mainServices.map((service, index) => (
              <motion.div 
                key={service.title}
                variants={fadeIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-[#AACBFF]/20 hover:border-[#0176D3]/40 flex flex-col h-full"
              >
                <div className={`${service.bgColor} p-8 flex items-center justify-between relative overflow-hidden`}>
                  <div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-bl-full z-0 backdrop-blur-sm"></div>
                  <div className="absolute left-0 bottom-0 w-16 h-16 bg-black/5 rounded-tr-full z-0"></div>
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                  
                  <h3 className="text-2xl font-bold text-white relative z-10 max-w-[70%]">{service.title}</h3>
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center relative z-10 backdrop-blur-sm border border-white/30 shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <div className="flex-grow p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div>
                    <h4 className="text-[#0B5CAB] font-semibold mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#0176D3] mr-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <Link href={service.href} className="inline-flex items-center text-[#0176D3] font-medium hover:text-[#0B5CAB] transition-colors">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose DigiMindsGlobal - New Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#F2F7FF] to-white dark:from-[#0B5CAB]/20 dark:to-transparent w-full overflow-hidden">
        {/* Background decorative elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#AACBFF]/30 to-[#1589EE]/30 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#0176D3]/10 to-[#AACBFF]/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-soft-light pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 text-center mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#AACBFF] to-[#0176D3]/30 px-6 py-2 text-sm font-medium text-[#0B5CAB] dark:text-[#AACBFF] shadow-lg shadow-[#0176D3]/5"
            >
              Our Strengths
            </motion.div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] dark:from-[#1589EE] dark:to-[#AACBFF]">
                Why Choose DigiMindsGlobal
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Discover how our expertise, collaborative approach, and commitment to excellence deliver exceptional results for our clients.
            </p>
          </motion.div>
          
          {/* Core Strengths Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#0B5CAB]">Unified Approach to Digital Excellence</h3>
              <p className="text-gray-700 mb-6 text-lg">
                At DigiMindsGlobal, we bring together expertise across web design, lead generation, software development, and digital marketing to deliver cohesive solutions that drive measurable business results.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Collaborative Expertise",
                    description: "Our multidisciplinary team works together seamlessly to ensure all aspects of your digital presence are optimized and aligned with your business goals."
                  },
                  {
                    title: "Results-Driven Strategy",
                    description: "We focus on delivering measurable outcomes through data-driven approaches tailored specifically to your business objectives and market positioning."
                  },
                  {
                    title: "Timely Delivery",
                    description: "We pride ourselves on meeting deadlines without compromising quality, ensuring your projects launch on schedule and within budget parameters."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0176D3] to-[#1589ee] flex items-center justify-center text-white shadow-lg mt-1">
                      {index === 0 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      ) : index === 1 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      )}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-[#0B5CAB] mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-4 aspect-h-3">
                  <Image 
                    src="/images/team-collaboration.jpg"
                    alt="DigiMindsGlobal Team Collaboration"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#032D60]/60 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Strength in Unity</h3>
                  <p className="text-white/90">Our collaborative approach ensures seamless integration across all digital services.</p>
                </div>
                
                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                >
                  <span className="text-[#0B5CAB] font-semibold">99% Client Satisfaction</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/50 w-full overflow-hidden relative">
        {/* Background decorative elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#AACBFF]/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#AACBFF]/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-soft-light pointer-events-none"></div>
        
        <div className="container mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 text-center mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block rounded-full bg-[#AACBFF] dark:bg-[#0176D3]/30 px-4 py-1 text-sm font-medium text-[#0B5CAB] dark:text-[#AACBFF]"
            >
              Why Choose Us
            </motion.div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-center">
              <span className="relative">
                Why Choose Our Services
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0176D3] to-transparent rounded-full"
                ></motion.span>
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg text-center">
              We deliver exceptional value through our expertise and commitment to your success
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-6xl"
          >
            {[
              { 
                icon: <span className="flex items-center justify-center w-full h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2 13.8 22a2 2 0 0 1-3.6 0L2 2" />
                  </svg>
                </span>, 
                title: "Fast Implementation", 
                description: "Get up and running quickly with our streamlined approach", 
                color: "bg-[#AACBFF] dark:bg-[#0176D3]/30 text-[#0176D3] dark:text-[#AACBFF]",
                delay: 0
              },
              { 
                icon: <span className="flex items-center justify-center w-full h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>, 
                title: "Secure & Reliable", 
                description: "Enterprise-grade security for your critical business data", 
                color: "bg-[#AACBFF] dark:bg-[#0176D3]/30 text-[#0176D3] dark:text-[#AACBFF]",
                delay: 0.1
              },
              { 
                icon: <span className="flex items-center justify-center w-full h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                    <path d="M12 14H9a4 4 0 0 0-4 4v3h14v-3a4 4 0 0 0-4-4h-3Z" />
                  </svg>
                </span>, 
                title: "Industry Expertise", 
                description: "Specialized knowledge across multiple business sectors", 
                color: "bg-[#AACBFF] dark:bg-[#0176D3]/30 text-[#0176D3] dark:text-[#AACBFF]",
                delay: 0.2
              },
              { 
                icon: <span className="flex items-center justify-center w-full h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                    <path d="M16 16h5v5" />
                  </svg>
                </span>, 
                title: "Ongoing Support", 
                description: "Continuous assistance to ensure long-term success", 
                color: "bg-[#AACBFF] dark:bg-[#0176D3]/30 text-[#0176D3] dark:text-[#AACBFF]",
                delay: 0.3
              },
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeIn}
                initial="rest"
                whileHover="hover"
                animate="rest"
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.5, 
                    delay: benefit.delay 
                  } 
                }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-8 shadow-md dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group hover:border-[#0176D3]/20 dark:hover:border-[#0176D3]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: benefit.delay + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${benefit.color} text-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {benefit.icon}
                  </motion.div>
                </div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: benefit.delay + 0.3 }}
                  viewport={{ once: true }}
                  className="mb-3 text-xl font-semibold group-hover:text-[#0176D3] transition-colors duration-300"
                >
                  {benefit.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: benefit.delay + 0.4 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground"
                >
                  {benefit.description}
                </motion.p>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "30%" }}
                    transition={{ duration: 0.5, delay: benefit.delay + 0.5 }}
                    viewport={{ once: true }}
                    className="h-0.5 bg-gradient-to-r from-[#0176D3] to-transparent rounded-full mt-4"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] mx-auto relative max-w-6xl"
        >
          {/* Animated background elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-soft-light"></div>
          
          {/* Floating elements */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/10 blur-xl"
          />
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full bg-white/10 blur-xl"
          />
          
          <div className="relative px-8 py-16 sm:px-16 sm:py-20">
            <div className="relative text-center text-white">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold sm:text-4xl text-center"
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto mb-8 max-w-2xl text-lg text-white/80 text-center"
              >
                Let&apos;s discuss how our integrated digital solutions can transform your business operations and accelerate your growth journey.
              </motion.p>
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <Button asChild size="lg" variant="secondary" className="rounded-full bg-white text-[#0176D3] hover:bg-white/90 shadow-lg hover:shadow-white/20 transition-all duration-300 text-base py-6 px-8">
                    <Link href="/contact" className="flex items-center">
                      Schedule a Consultation
                      <motion.span 
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        className="ml-2"
                      >
                        →
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 