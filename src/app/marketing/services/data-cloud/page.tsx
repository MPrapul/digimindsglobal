"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowUpDown, Search, BarChart3, ShieldCheck, Eye, Zap, Target, Puzzle, Shield, TrendingUp, Check } from 'lucide-react'

const dataCloudServices = [
  {
    title: 'Data Integration',
    description: 'Connect and integrate data from multiple sources to create a unified customer profile.',
    icon: <ArrowUpDown className="w-8 h-8" />,
    color: 'from-[#0176D3] to-[#1589EE]',
    bgColor: 'bg-[#F2F7FF] dark:bg-[#0B5CAB]/20',
    borderColor: 'border-[#AACBFF] dark:border-[#0176D3]',
    features: [
      'Cross-cloud data integration',
      'API-based connectors',
      'Batch and real-time processing',
      'Custom data mapping',
    ],
    id: 'data-integration',
    link: '/marketing/services/data-cloud#data-integration'
  },
  {
    title: 'Identity Resolution',
    description: 'Resolve customer identities across different channels and touchpoints for a complete view.',
    icon: <Search className="w-8 h-8" />,
    color: 'from-[#0B5CAB] to-[#1589EE]',
    bgColor: 'bg-[#F2F7FF] dark:bg-[#0B5CAB]/20',
    borderColor: 'border-[#AACBFF] dark:border-[#0176D3]',
    features: [
      'Cross-device identity matching',
      'Probabilistic & deterministic matching',
      'Customer profile unification',
      'Privacy-compliant identity resolution',
    ],
    id: 'identity-resolution',
  },
  {
    title: 'Real-time Analytics',
    description: 'Access real-time insights and analytics to make data-driven decisions quickly.',
    icon: <BarChart3 className="w-8 h-8" />,
    color: 'from-[#1589EE] to-[#0B5CAB]',
    bgColor: 'bg-[#F2F7FF] dark:bg-[#0B5CAB]/20',
    borderColor: 'border-[#AACBFF] dark:border-[#0176D3]',
    features: [
      'Real-time dashboards',
      'Predictive analytics',
      'Custom reporting',
      'Trend analysis',
    ],
    id: 'real-time-analytics',
  },
  {
    title: 'Privacy Compliance',
    description: 'Ensure data privacy compliance with built-in governance and security features.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'from-[#0176D3] to-[#1589EE]',
    bgColor: 'bg-[#F2F7FF] dark:bg-[#0B5CAB]/20',
    borderColor: 'border-[#AACBFF] dark:border-[#0176D3]',
    features: [
      'GDPR & CCPA compliance',
      'Consent management',
      'Data retention policies',
      'Audit trails',
    ],
    id: 'privacy-compliance',
  },
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function DataCloudPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto-advance carousel with pause on hover
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const startInterval = () => {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % dataCloudServices.length);
      }, 5000);
    };

    startInterval();

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section with Enhanced Background */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/data-cloud.jpg"
          alt="Data Cloud"
          fill
          className="object-cover transition-transform duration-10000 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B5CAB]/90 via-[#0176D3]/80 to-[#1589EE]/70" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="container relative flex h-full flex-col items-center justify-center text-center text-white mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 inline-block rounded-full bg-[#0176D3]/30 px-6 py-2 text-sm font-medium text-white backdrop-blur-md border border-[#1589EE]/20"
          >
            Salesforce Solution
          </motion.div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1589EE] via-[#AACBFF] to-white">Data Cloud</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200">
            Unify customer data across systems for a complete view of your customers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/marketing/contact" 
              className="inline-flex items-center bg-white text-[#0176D3] px-8 py-4 rounded-full font-bold text-lg border border-transparent shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              href="#features" 
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Explore Features
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-3.293-3.293a1 1 0 111.414-1.414l4 4z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="container py-24 mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-xl"></div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-blue-200 dark:border-blue-800 shadow-xl">
              <Image
                src="/images/data-cloud.webp"
                alt="Data Cloud Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-4 inline-block rounded-full bg-[#AACBFF] dark:bg-[#0176D3]/30 px-4 py-1 text-sm font-medium text-[#0B5CAB] dark:text-[#AACBFF]">
              Overview
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] dark:from-[#1589EE] dark:to-[#AACBFF]">
                Unlock the Power of Your Data
              </span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Salesforce Data Cloud is a unified customer data platform that helps you connect, harmonize, and analyze data from any source to create a single, comprehensive view of your customers.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              With Data Cloud, you can break down data silos, create personalized experiences, and make data-driven decisions in real-time.
            </p>
            <ul className="space-y-3">
              {[
                'Unify data from multiple sources',
                'Create a 360-degree customer view',
                'Activate data across all touchpoints',
                'Ensure privacy and compliance',
              ].map((item) => (
                <li key={item} className="flex items-center text-muted-foreground">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#AACBFF]/30 text-[#0176D3] dark:text-[#AACBFF]">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Services Carousel */}
      <section id="features" className="bg-gradient-to-b from-[#F2F7FF] to-white dark:from-[#0B5CAB]/20 dark:to-transparent py-24 w-full">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 text-center mx-auto"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
              <span className="relative">
                Data Cloud Features
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0176D3] to-transparent rounded-full"></span>
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Discover how our Data Cloud solutions can help you unify customer data and gain valuable insights.
            </p>
          </motion.div>
          
          {/* Carousel */}
          <div className="relative mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-xl">
              <div className="relative">
                {dataCloudServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeSlide === index ? 1 : 0,
                      x: `${(index - activeSlide) * 100}%`,
                      scale: activeSlide === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ${activeSlide === index ? 'z-10' : 'z-0'}`}
                    style={{ display: Math.abs(activeSlide - index) <= 1 ? 'block' : 'none' }}
                  >
                    <Card className={`h-full overflow-hidden border-2 ${service.borderColor} ${service.bgColor} shadow-lg transition-all duration-300 group hover:shadow-xl`}>
                      <div className={`p-8 bg-gradient-to-br ${service.color} text-white`}>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl backdrop-blur-sm border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <div className="text-xs font-medium uppercase tracking-wider bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm">
                            Data Cloud
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                        <p className="text-white/80 text-lg">{service.description}</p>
                      </div>
                      <CardContent className="p-8">
                        <h4 className="text-sm font-medium text-[#0176D3] dark:text-[#AACBFF] mb-4 uppercase tracking-wider">KEY FEATURES</h4>
                        <ul className="mb-6 space-y-4">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-base">
                              <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#AACBFF]/30 text-[#0176D3] dark:text-[#AACBFF]">
                                <Check className="h-4 w-4" />
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 z-20">
              <button 
                onClick={() => setActiveSlide((prev) => (prev - 1 + dataCloudServices.length) % dataCloudServices.length)}
                className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="Previous slide"
              >
                <span className="text-[#0176D3] dark:text-[#AACBFF]">←</span>
              </button>
              <button 
                onClick={() => setActiveSlide((prev) => (prev + 1) % dataCloudServices.length)}
                className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="Next slide"
              >
                <span className="text-[#0176D3] dark:text-[#AACBFF]">→</span>
              </button>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {dataCloudServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index 
                      ? 'bg-[#0176D3] dark:bg-[#AACBFF] w-8' 
                      : 'bg-[#AACBFF]/30 dark:bg-[#0176D3]/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <Link href="/training">Learn More About Data Cloud</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-24 mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 text-center mx-auto"
        >
          <div className="mb-4 inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1 text-sm font-medium text-blue-800 dark:text-blue-300">
            Benefits
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Why Choose Data Cloud
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover the transformative benefits of implementing Salesforce Data Cloud for your business.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3 mx-auto"
        >
          {[
            { 
              title: 'Unified Customer View', 
              description: 'Break down data silos and create a complete, 360-degree view of your customers across all touchpoints.',
              icon: <Eye className="w-6 h-6" />,
              color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300'
            },
            { 
              title: 'Real-time Insights', 
              description: 'Access and analyze customer data in real-time to make informed decisions and respond quickly to changing needs.',
              icon: <Zap className="w-6 h-6" />,
              color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300'
            },
            { 
              title: 'Personalized Experiences', 
              description: 'Deliver highly personalized customer experiences across all channels based on comprehensive data insights.',
              icon: <Target className="w-6 h-6" />,
              color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300'
            },
            { 
              title: 'Enhanced Segmentation', 
              description: 'Create more precise customer segments based on a richer set of data points and behaviors.',
              icon: <Puzzle className="w-6 h-6" />,
              color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300'
            },
            { 
              title: 'Improved Compliance', 
              description: 'Maintain data privacy compliance with built-in governance tools and security features.',
              icon: <Shield className="w-6 h-6" />,
              color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300'
            },
            { 
              title: 'Scalable Architecture', 
              description: 'Leverage a cloud-based platform that scales with your business and adapts to changing data needs.',
              icon: <TrendingUp className="w-6 h-6" />,
              color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300'
            },
          ].map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 opacity-10 blur-sm"></div>
              <div className="relative rounded-lg border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-800 p-6 shadow-md h-full">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${benefit.color} text-2xl`}>
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24 w-full">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-soft-light"></div>
            <div className="relative mx-auto max-w-3xl text-center text-white">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Unlock Your Data Potential?</h2>
              <p className="mb-8 text-lg text-white/80">
                Contact us today to learn how our Data Cloud solutions can help you unify your customer data and drive business growth.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-white/20 transition-all duration-300">
                  <Link href="/marketing/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 transition-all duration-300">
                  <Link href="/marketing/services/data-cloud">Explore Other Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 