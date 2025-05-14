"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    title: 'Drag-and-drop interface',
    description: 'Create beautiful, responsive emails without any coding knowledge.',
    icon: '🎨'
  },
  {
    title: 'Reusable content blocks',
    description: 'Create and reuse content components across multiple campaigns.',
    icon: '🔄'
  },
  {
    title: 'Dynamic content personalization',
    description: 'Deliver tailored content based on subscriber data and behavior.',
    icon: '🎯'
  },
  {
    title: 'Content approval workflows',
    description: 'Streamline content creation with built-in approval processes.',
    icon: '✅'
  },
  {
    title: 'Asset performance analytics',
    description: 'Track and analyze content performance across channels.',
    icon: '📊'
  },
  {
    title: 'Mobile-optimized templates',
    description: 'Ensure your content looks great on any device or screen size.',
    icon: '📱'
  }
]

const contentBuilderTools = [
  {
    title: 'Responsive Email Templates',
    description: 'Pre-built templates that automatically adjust to every device and email service.',
    icon: '📧'
  },
  {
    title: 'Content Block Library',
    description: 'Create a library of customized, reusable content for consistent branding.',
    icon: '📚'
  },
  {
    title: 'Einstein Content Selection',
    description: 'AI-powered asset selection to increase engagement and conversion rates.',
    icon: '🤖'
  },
  {
    title: 'Content Builder Approvals',
    description: 'Automate approval workflows for content before sending to audiences.',
    icon: '👍'
  },
  {
    title: 'Interactive Email Forms',
    description: 'Gather customer data directly within your emails for enhanced engagement.',
    icon: '📝'
  }
]

// Simple animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ContentBuilderPage() {
  // For animations based on scroll
  const [heroRef] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [toolsRef, toolsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [integrationRef, integrationInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm mb-6">
              Marketing Cloud
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Content Builder
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Create and manage reusable content for all your marketing channels.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-[#0176D3] hover:bg-white/90">
              <Link href="/marketing/contact">Get Started</Link>
            </Button>
          </div>
        </div>
        
        {/* Simple wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-[30px] md:h-[50px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="text-[#0176D3] font-medium mb-2">Powerful Features</div>
              <h2 className="text-3xl font-bold mb-6">Streamlined Content Creation</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Content Builder provides a powerful platform for creating, managing, and optimizing your marketing content across all channels.
              </p>
              <div className="grid gap-6">
                {features.slice(0, 4).map((feature) => (
                  <motion.div
                    key={feature.title}
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                    className="flex gap-4 p-4 rounded-lg border border-gray-100 dark:border-gray-800"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#F2F7FF] dark:bg-[#0B5CAB]/20 text-2xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.7 }}
                className="relative rounded-xl border border-[#AACBFF] dark:border-[#0176D3] shadow-md overflow-hidden"
              >
                <Image
                  src="/images/contentBuilder.avif"
                  alt="Content Builder Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 600px"
                  quality={90}
                />
                <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <p className="text-sm font-medium">Content Ready for Review</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Builder Tools Section */}
      <section ref={toolsRef} className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-[#0176D3] font-medium mb-2">Powerful Toolset</div>
            <h2 className="text-3xl font-bold mb-6">Content Builder Tools</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Create a library of customized, reusable content with these powerful Content Builder tools.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentBuilderTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial="hidden"
                  animate={toolsInView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 h-full"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F2F7FF] dark:bg-[#0B5CAB]/20 text-3xl">
                    {tool.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{tool.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration with Marketing Cloud Section */}
      <section ref={integrationRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div 
              initial="hidden"
              animate={integrationInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1 grid grid-cols-2 gap-4"
            >
              {['📧', '📱', '🤖', '📊'].map((icon, index) => (
                <div 
                  key={index}
                  className="aspect-square bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="h-full flex items-center justify-center text-5xl bg-[#F2F7FF] dark:bg-[#0B5CAB]/20 rounded-lg">
                    {icon}
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="order-1 md:order-2">
              <div className="text-[#0176D3] font-medium mb-2">Seamless Integration</div>
              <h2 className="text-3xl font-bold mb-6">Integrated With Marketing Cloud</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Content created in Content Builder can be used across all Marketing Cloud applications, including Email Studio, Journey Builder, Mobile Studio, and more.
              </p>
              <div className="mb-8 space-y-4">
                {[
                  'Seamless integration with Email Studio',
                  'Use content blocks in Journey Builder',
                  'Integrate with Einstein for AI-powered content selection',
                  'Mobile-optimized content for Mobile Studio'
                ].map((text, index) => (
                  <motion.div 
                    key={index}
                    initial="hidden"
                    animate={integrationInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p>{text}</p>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="rounded-full bg-[#0176D3] hover:bg-[#0B5CAB] text-white">
                <Link href="/marketing/services/marketing-cloud/email-studio">
                  Explore Email Studio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2 
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Elevate Your Content Strategy
            </motion.h2>
            <motion.p 
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg mb-8 text-white/90"
            >
              Create, manage, and optimize your marketing content with powerful tools and analytics.
            </motion.p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-white text-[#0176D3] hover:bg-white/90">
                <Link href="/marketing/contact">Schedule a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                <Link href="/marketing/services/marketing-cloud">Back to Marketing Cloud</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 