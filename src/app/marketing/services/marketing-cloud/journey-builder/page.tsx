"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const features = [
  {
    title: 'Visual journey mapping',
    description: 'Design complex customer journeys with an intuitive drag-and-drop interface.',
    icon: '🗺️'
  },
  {
    title: 'Multi-channel orchestration',
    description: 'Coordinate messaging across email, mobile, social, and web channels.',
    icon: '🔄'
  },
  {
    title: 'Behavioral triggers',
    description: 'Automatically respond to customer actions and engagement.',
    icon: '⚡'
  },
  {
    title: 'Real-time journey analytics',
    description: 'Track and optimize customer journey performance in real-time.',
    icon: '📈'
  }
]

const useCases = [
  {
    title: "Customer Onboarding",
    description: "Create welcoming experiences for new customers, guiding them through product features and best practices.",
    icon: "👋"
  },
  {
    title: "Abandoned Cart Recovery",
    description: "Automatically follow up with customers who have left items in their shopping cart, encouraging them to complete their purchase.",
    icon: "🛒"
  },
  {
    title: "Post-Purchase Engagement",
    description: "Nurture customer relationships after a purchase with product tips, cross-sell recommendations, and satisfaction surveys.",
    icon: "🎁"
  },
  {
    title: "Re-engagement Campaigns",
    description: "Win back inactive customers with personalized offers and content tailored to their past interactions.",
    icon: "🔄"
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

// For hover animations
const hoverEffect = {
  scale: 1.03,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
}

export default function JourneyBuilderPage() {
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
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [useCasesRef, useCasesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col items-center w-full">
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
                <span className="mr-2">🧭</span>
                Marketing Cloud
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl"
              >
                <span className="relative">
                  <span className="relative z-10">Journey Builder</span>
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
                Design and automate customer journeys across all channels.
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
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Overview Section */}
      <section 
        ref={overviewRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <AnimatePresence>
            {overviewInView && (
              <motion.div 
                initial="hidden"
                animate="visible"
                className="grid gap-16 md:grid-cols-2 items-center"
              >
                <motion.div
                  variants={fadeInLeft}
                >
                  <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#032D60]">
                    Create Seamless <span className="text-[#0176D3]">Customer Journeys</span>
                  </h2>
                  <p className="mb-8 text-lg text-gray-700">
                    Journey Builder enables you to create personalized, automated customer journeys that deliver the right message at the right time. Build sophisticated multi-step, multi-channel journeys that respond to customer behavior in real-time.
                  </p>
                  <p className="mb-8 text-lg text-gray-700">
                    Our expert team at Red Hibbert Group helps you design, automate, and optimize customer interactions across email, mobile, advertising, and web platforms. We&apos;ll help you create journeys that increase engagement, drive conversions, and build lasting customer relationships.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild variant="outline" className="rounded-full border-[#0176D3] text-[#0176D3] hover:bg-[#0176D3]/10">
                      <Link href="/marketing/contact">Schedule a Demo</Link>
                    </Button>
                    <Button asChild variant="link" className="text-[#0176D3]">
                      <Link href="/marketing/services/marketing-cloud">
                        <span>Back to Marketing Cloud</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </motion.div>
                <motion.div 
                  variants={fadeInRight}
                  className="relative"
                >
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#0176D3]/5 to-[#1589EE]/5 blur-xl"></div>
                  <div className="relative overflow-hidden rounded-xl border border-[#AACBFF] shadow-xl">
                    <Image
                      src="/images/jb.webp"
                      alt="Journey Builder Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0B5CAB]/10 to-transparent"></div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-20 bg-gradient-to-b from-white to-[#F8FBFF]"
      >
        <div className="container mx-auto px-4">
          <AnimatePresence>
            {featuresInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-[#032D60] mb-4">Key Features</h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Journey Builder provides powerful tools to create personalized customer experiences.
                  </p>
                </motion.div>
                
                <motion.div variants={scaleUp} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.title}
                      whileHover={hoverEffect}
                      className="bg-white p-6 rounded-xl shadow-md border border-[#AACBFF]/30 hover:border-[#0176D3]/50 transition-all duration-300"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#F2F7FF] text-2xl mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-[#032D60]">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        ref={useCasesRef}
        className="py-20 bg-[#F8FBFF]"
      >
        <div className="container mx-auto px-4">
          <AnimatePresence>
            {useCasesInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-[#032D60] mb-4">Common Use Cases</h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Journey Builder helps you create meaningful connections throughout the customer lifecycle.
                  </p>
                </motion.div>
                
                <motion.div variants={scaleUp} className="grid gap-6 md:grid-cols-2">
                  {useCases.map((useCase) => (
                    <motion.div
                      key={useCase.title}
                      whileHover={hoverEffect}
                      className="flex gap-4 bg-white p-6 rounded-xl shadow-md border border-[#AACBFF]/30 hover:border-[#0176D3]/50 transition-all duration-300"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#F2F7FF] text-2xl">
                        {useCase.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-[#032D60]">{useCase.title}</h3>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] py-16 w-full"
      >
        <div className="container mx-auto px-4">
          <AnimatePresence>
            {ctaInView && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-soft-light"></div>
                <div className="relative mx-auto max-w-3xl text-center text-white">
                  <h2 className="mb-6 text-3xl font-bold tracking-tight">Start Building Customer Journeys</h2>
                  <p className="mb-8 text-lg text-white/80">
                    Create meaningful connections with your customers across every touchpoint.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button asChild size="lg" className="rounded-full bg-white text-[#0176D3] hover:bg-white/90">
                      <Link href="/marketing/contact">Schedule a Demo</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                      <Link href="/marketing/services/marketing-cloud">Back to Marketing Cloud</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
} 