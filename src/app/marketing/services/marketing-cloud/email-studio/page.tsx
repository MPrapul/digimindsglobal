"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const features = [
  {
    title: 'Drag-and-drop email builder',
    description: 'Create beautiful, responsive emails without any coding knowledge.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1" />
        <path d="M12 12V4" />
        <path d="m8 8 4-4 4 4" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: 'Dynamic content personalization',
    description: 'Deliver tailored content based on subscriber data and behavior.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    title: 'A/B testing capabilities',
    description: 'Optimize your campaigns with data-driven testing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m3 8 4.8 3.6a1 1 0 0 0 1.2 0L13.2 8a1 1 0 0 1 1.2 0l4.8 3.6" />
      </svg>
    )
  },
  {
    title: 'Automated send-time optimization',
    description: 'Deliver emails when subscribers are most likely to engage.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
]

const implementationProcess = [
  { 
    step: 1,
    title: 'Planning and Discovery',
    duration: '1-2 Weeks',
    description: 'Define goals, requirements, and develop a roadmap for implementation.'
  },
  { 
    step: 2,
    title: 'Setup and Configuration',
    duration: '2-3 Weeks',
    description: 'Configure your account, set up domains, and establish authentication protocols.'
  },
  { 
    step: 3,
    title: 'Design and Content Creation',
    duration: '2-3 Weeks',
    description: 'Develop templates, design emails, and create reusable content blocks.'
  },
  { 
    step: 4,
    title: 'Campaign Execution',
    duration: 'Ongoing',
    description: 'Launch campaigns, monitor performance, and optimize for better results.'
  },
  { 
    step: 5,
    title: 'Training and Support',
    duration: '1-2 Weeks',
    description: 'Train your team and establish ongoing support procedures.'
  }
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
}

const staggerItems = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const rotateIn = {
  hidden: { opacity: 0, rotate: -5, y: 20 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
}

// For hover animations
const hoverEffect = {
  scale: 1.03,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
}

export default function EmailStudioPage() {
  // For parallax effect
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For animations based on scroll
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [automationRef, automationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative h-[500px] w-full overflow-hidden flex items-center justify-center"
      >
        <motion.div 
          style={{ y: scrollY * 0.2 }}
          className="absolute inset-0 bg-gradient-to-r from-[#0B5CAB]/90 via-[#0176D3]/80 to-[#1589EE]/70"
        />
        <motion.div 
          style={{ y: scrollY * 0.1 }}
          className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"
        />
        
        {/* Floating elements for visual interest */}
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
          className="absolute top-[20%] right-[15%] w-16 h-16 rounded-full bg-blue-400 opacity-20 blur-xl"
        />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-[30%] left-[20%] w-24 h-24 rounded-full bg-indigo-500 opacity-20 blur-xl"
        />
        
        <AnimatePresence>
          {heroInView && (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="container relative flex h-full flex-col items-center justify-center text-center text-white mx-auto z-10"
            >
              <motion.div 
                variants={fadeIn}
                className="mb-4 inline-block rounded-full bg-[#0176D3]/30 px-6 py-2 text-sm font-medium text-white backdrop-blur-md border border-[#1589EE]/20 shadow-lg"
              >
                <span className="mr-2 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                Marketing Cloud
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl"
              >
                <span className="relative">
                  <span className="relative z-10">Email Studio</span>
                  <motion.span 
                    className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/30 rounded-full -z-0 transform"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                className="mb-8 max-w-2xl text-xl text-gray-200"
              >
                Create and send personalized, targeted email campaigns at scale.
              </motion.p>
              <motion.div
                variants={fadeIn}
                whileHover={hoverEffect}
                className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20 shadow-xl"
              >
                <Button asChild size="lg" className="rounded-full bg-white text-[#0176D3] hover:bg-white/90">
                  <Link href="/marketing/contact">Get Started <span className="ml-2">→</span></Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Animated wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-[50px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              opacity="0.8"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#ffffff"
              opacity="0.5"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section with Interactive Cards */}
      <section 
        ref={featuresRef}
        className="container py-24 mx-auto"
      >
        <AnimatePresence>
          {featuresInView && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid gap-16 md:grid-cols-2 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <motion.span 
                  variants={fadeIn}
                  className="inline-block text-sm font-semibold text-[#0176D3] uppercase tracking-wider mb-3"
                >
                  Powerful Features
                </motion.span>
                <motion.h2 
                  variants={fadeIn}
                  className="mb-6 text-4xl font-bold tracking-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE]">
                    Email Marketing Tools
                  </span>
                </motion.h2>
                <motion.p 
                  variants={fadeIn}
                  className="mb-10 text-lg text-muted-foreground"
                >
                  Email Studio provides everything you need to create, test, and deliver personalized email campaigns that drive results.
                </motion.p>
                <motion.div 
                  variants={staggerItems}
                  className="grid gap-6"
                >
                  {features.map((feature) => (
                    <motion.div
                      key={feature.title}
                      variants={scaleUp}
                      whileHover={hoverEffect}
                      className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-700/50"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#F2F7FF] dark:bg-[#0B5CAB]/20 text-3xl shadow-inner">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative"
              >
                <motion.div 
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#0176D3] to-[#1589EE] blur-xl"
                />
                <motion.div 
                  variants={rotateIn}
                  className="relative aspect-video overflow-hidden rounded-xl border border-[#AACBFF] dark:border-[#0176D3] shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#0176D3]/10" />
                  <Image
                    src="/images/sfmc.avif"
                    alt="Email Studio Dashboard"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Interactive elements */}
                  <motion.div 
                    className="absolute bottom-4 right-4 flex space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0176D3]">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0176D3]">
                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Overview Section */}
      <section 
        ref={overviewRef}
        className="w-full py-24 bg-gray-50 dark:bg-slate-900/50"
      >
        <div className="container mx-auto">
          <AnimatePresence>
            {overviewInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-4xl mx-auto"
              >
                <motion.span 
                  variants={fadeIn}
                  className="inline-block text-sm font-semibold text-[#0176D3] uppercase tracking-wider mb-3"
                >
                  About
                </motion.span>
                <motion.h2 
                  variants={fadeIn}
                  className="mb-6 text-4xl font-bold tracking-tight"
                >
                  Email Studio Overview
                </motion.h2>
                <motion.div
                  variants={scaleUp}
                  className="p-8 bg-white dark:bg-slate-800/90 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/50"
                >
                  <motion.p 
                    variants={fadeIn}
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    Email Studio, a powerful component of Salesforce Marketing Cloud, empowers businesses to create, manage, and automate sophisticated email marketing campaigns. Our comprehensive email marketing solution enables marketers to deliver personalized, targeted, and timely communications that resonate with your audience.
                  </motion.p>
                  
                  <motion.div
                    variants={fadeIn}
                    className="mt-10 grid grid-cols-2 gap-6"
                  >
                    <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-3xl mb-2">📧</span>
                      <span className="font-medium text-center">Create Engaging Emails</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-3xl mb-2">🔍</span>
                      <span className="font-medium text-center">Analyze Performance</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-3xl mb-2">👥</span>
                      <span className="font-medium text-center">Segment Audiences</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-3xl mb-2">🔄</span>
                      <span className="font-medium text-center">Automate Workflows</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Implementation Process Section - Timeline */}
      <section 
        ref={processRef}
        className="container py-24 mx-auto"
      >
        <AnimatePresence>
          {processInView && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeIn}
                className="inline-block text-sm font-semibold text-[#0176D3] uppercase tracking-wider mb-3"
              >
                How It Works
              </motion.span>
              <motion.h2 
                variants={fadeIn}
                className="mb-12 text-4xl font-bold tracking-tight"
              >
                Implementation Process
              </motion.h2>
              
              <motion.div
                variants={staggerItems}
                className="relative"
              >
                {/* Timeline line */}
                <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0B5CAB] to-[#1589EE] rounded-full"></div>
                
                {implementationProcess.map((item, index) => (
                  <motion.div
                    key={item.step}
                    variants={fadeIn}
                    className={`relative mb-12 md:mb-24 flex flex-col ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/3 w-10 h-10 rounded-full bg-white border-4 border-[#0176D3] z-10"></div>
                    
                    <div className={`pl-16 md:pl-0 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right md:w-1/2' : 'md:pl-12 md:w-1/2'
                    }`}>
                      <motion.div
                        whileHover={hoverEffect}
                        className="p-6 bg-white dark:bg-slate-800/90 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700/50"
                      >
                        <div className="flex items-center mb-3">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#0176D3] font-bold mr-3">
                            {item.step}
                          </div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mb-3">{item.description}</p>
                        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[#0176D3] text-sm font-medium rounded-full">
                          {item.duration}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Automation Section */}
      <section 
        ref={automationRef}
        className="w-full py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/90 dark:to-blue-900/10"
      >
        <div className="container mx-auto">
          <AnimatePresence>
            {automationInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <motion.div variants={fadeInLeft}>
                  <motion.div 
                    className="relative aspect-square max-w-md"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, 1, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 8,
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B5CAB] to-[#1589EE] rounded-full opacity-20 blur-3xl"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-72 h-72 rounded-full bg-white dark:bg-slate-800 shadow-2xl flex items-center justify-center border-8 border-blue-100 dark:border-blue-900/30">
                        <div className="text-8xl">⚙️</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={fadeInRight}>
                  <motion.span 
                    variants={fadeIn}
                    className="inline-block text-sm font-semibold text-[#0176D3] uppercase tracking-wider mb-3"
                  >
                    Work Smarter
                  </motion.span>
                  <motion.h2 
                    variants={fadeIn}
                    className="mb-6 text-4xl font-bold tracking-tight"
                  >
                    Email Automation
                  </motion.h2>
                  <motion.p 
                    variants={fadeIn}
                    className="mb-8 text-lg text-gray-700 dark:text-gray-300"
                  >
                    Journey Builder allows you to create personalized customer journeys across multiple channels, automate repetitive tasks, and send triggered emails based on customer actions.
                  </motion.p>
                  
                  <motion.div variants={fadeIn} className="space-y-4">
                    <motion.div 
                      whileHover={hoverEffect}
                      className="p-4 bg-white dark:bg-slate-800/80 rounded-lg shadow-md border border-gray-100 dark:border-slate-700/50"
                    >
                      <h4 className="text-lg font-semibold mb-2 flex items-center text-[#0176D3]">
                        <span className="mr-2">🔄</span> Triggered Emails
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">Send automated emails based on subscriber behavior or data changes.</p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={hoverEffect}
                      className="p-4 bg-white dark:bg-slate-800/80 rounded-lg shadow-md border border-gray-100 dark:border-slate-700/50"
                    >
                      <h4 className="text-lg font-semibold mb-2 flex items-center text-[#0176D3]">
                        <span className="mr-2">🔀</span> Customer Journeys
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">Create multi-step, cross-channel customer journeys that deliver the right message at the right time.</p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={hoverEffect}
                      className="p-4 bg-white dark:bg-slate-800/80 rounded-lg shadow-md border border-gray-100 dark:border-slate-700/50"
                    >
                      <h4 className="text-lg font-semibold mb-2 flex items-center text-[#0176D3]">
                        <span className="mr-2">⏱️</span> Time-Based Triggers
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">Schedule campaigns based on date fields, anniversaries, or other time-based criteria.</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="relative overflow-hidden py-24 w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B5CAB] to-[#1589EE]" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 8 + 2,
                height: Math.random() * 8 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -200 - 50],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto">
          <AnimatePresence>
            {ctaInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-soft-light"></div>
                <motion.div 
                  variants={scaleUp}
                  className="relative mx-auto max-w-3xl text-center text-white p-10 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl"
                >
                  <motion.h2 
                    variants={fadeIn}
                    className="mb-6 text-4xl font-bold tracking-tight"
                  >
                    Ready to Get Started?
                  </motion.h2>
                  <motion.p 
                    variants={fadeIn}
                    className="mb-8 text-xl text-white/90"
                  >
                    Transform your email marketing with Email Studio&apos;s powerful features.
                  </motion.p>
                  <motion.div 
                    variants={fadeIn}
                    className="flex flex-wrap gap-6 justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button asChild size="lg" className="rounded-full bg-white text-[#0176D3] hover:bg-white/90 px-8 shadow-lg">
                        <Link href="/marketing/contact">Schedule a Demo</Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 px-8">
                        <Link href="/marketing/services/marketing-cloud">Back to Marketing Cloud</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
} 