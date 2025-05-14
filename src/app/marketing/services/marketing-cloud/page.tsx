"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

const marketingCloudServices = [
  {
    title: 'Email Studio',
    description: 'Create and send personalized, targeted email campaigns at scale.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    color: 'from-[#0176D3] to-[#1589EE]',
    bgColor: 'bg-[#F2F7FF] dark:bg-[#0B5CAB]/20',
    borderColor: 'border-[#AACBFF] dark:border-[#0176D3]',
    features: [
      'Drag-and-drop email builder',
      'Dynamic content personalization',
      'A/B testing capabilities',
      'Automated send-time optimization',
    ],
    id: 'email-studio',
    link: '/marketing/services/marketing-cloud/email-studio'
  },
  {
    title: 'Journey Builder',
    description: 'Design and automate customer journeys across all channels.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
        <path d="M12 13v8" />
        <path d="M5 13v2a2 2 0 0 0 2 2h3" />
      </svg>
    ),
    color: 'from-[#0176D3] to-[#0B5CAB]',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    features: [
      'Visual journey mapping',
      'Multi-channel orchestration',
      'Behavioral triggers',
      'Real-time journey analytics',
    ],
    id: 'journey-builder',
    link: '/marketing/services/marketing-cloud/journey-builder'
  },
  {
    title: 'Mobile Studio',
    description: 'Engage customers with personalized mobile messaging and push notifications.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    color: 'from-[#1589EE] to-[#0B5CAB]',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    features: [
      'SMS messaging campaigns',
      'Push notifications',
      'Mobile app messaging',
      'Location-based targeting',
    ],
    id: 'mobile-studio',
    link: '/marketing/services/marketing-cloud/mobile-studio'
  },
  {
    title: 'Advertising Studio',
    description: 'Create and manage targeted digital advertising campaigns.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 3 8.09 12 3 21 21 12 3 3" />
      </svg>
    ),
    color: 'from-[#0176D3] to-[#1589EE]',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    features: [
      'Audience segmentation',
      'Cross-channel ad campaigns',
      'Lookalike audience creation',
      'Campaign performance tracking',
    ],
    id: 'advertising-studio',
    link: '/marketing/services/marketing-cloud/advertising-studio'
  },
  {
    title: 'Interaction Studio',
    description: 'Deliver real-time personalization across all customer touchpoints.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    color: 'from-[#0176D3] to-[#1589EE]',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    features: [
      'Real-time interaction management',
      'Next-best-action recommendations',
      'Omnichannel personalization',
      'Customer journey visualization',
    ],
    id: 'interaction-studio',
    link: '/marketing/services/marketing-cloud/interaction-studio'
  },
  {
    title: 'Content Builder',
    description: 'Create and manage reusable content for all your marketing channels.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M8 13h8" />
        <path d="M8 17h8" />
        <path d="M8 9h1" />
      </svg>
    ),
    color: 'from-[#0176D3] to-[#1589EE]',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    features: [
      'Centralized content repository',
      'Reusable content blocks',
      'Content approval workflows',
      'Asset performance analytics',
    ],
    id: 'content-builder',
    link: '/marketing/services/marketing-cloud/content-builder'
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

export default function MarketingCloudPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section with Enhanced Background */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/marketing-cloud.jpg"
          alt="Marketing Cloud"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1589EE] via-[#AACBFF] to-white">Marketing Cloud</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200">
            Create personalized customer experiences with AI-powered marketing automation.
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
          <div>
            <div className="mb-4 inline-block rounded-full bg-[#AACBFF] dark:bg-[#0176D3]/30 px-4 py-1 text-sm font-medium text-[#0B5CAB] dark:text-[#AACBFF]">
              Overview
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] dark:from-[#1589EE] dark:to-[#AACBFF]">
                Transform Your Customer Engagement
              </span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Salesforce Marketing Cloud is a powerful digital marketing platform that enables businesses to create personalized customer experiences across email, mobile, social, web, and more.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              With Marketing Cloud, you can build and manage customer journeys, automate marketing campaigns, and deliver personalized content at scale.
            </p>
            <ul className="space-y-3">
              {[
                'Create unified customer profiles',
                'Design automated marketing journeys',
                'Deliver personalized content across channels',
                'Analyze campaign performance in real-time',
              ].map((item) => (
                <li key={item} className="flex items-center text-muted-foreground">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#AACBFF] dark:bg-[#0176D3]/50 text-[#0176D3] dark:text-[#AACBFF]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#0176D3] to-[#1589EE] opacity-20 blur-xl"></div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-[#AACBFF] dark:border-[#0176D3] shadow-xl">
              <Image
                src="/images/sfmc.avif"
                alt="Salesforce Marketing Cloud Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="features" className="bg-gradient-to-b from-[#F2F7FF] to-white dark:from-[#0B5CAB]/10 dark:to-transparent py-24 w-full">
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
                Marketing Cloud Features
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0176D3] to-transparent rounded-full"></span>
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Discover how our Marketing Cloud solutions can help you create personalized customer experiences.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto"
          >
            {marketingCloudServices.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                initial="rest"
                whileHover="hover"
                animate="rest"
                id={service.id}
              >
                <Card className={`h-full overflow-hidden border-2 ${service.borderColor} ${service.bgColor} shadow-lg transition-all duration-300 group hover:shadow-xl`}>
                  <div className={`p-6 bg-gradient-to-br ${service.color} text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl backdrop-blur-sm border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="text-xs font-medium uppercase tracking-wider bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm">
                        Marketing Cloud
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/80">{service.description}</p>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-sm font-medium text-[#0176D3] dark:text-[#AACBFF] mb-4">KEY FEATURES</h4>
                    <ul className="mb-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#AACBFF] dark:bg-[#0176D3]/50 text-[#0176D3] dark:text-[#AACBFF]">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {service.link && (
                      <Button asChild variant="outline" className="w-full rounded-full">
                        <Link href={service.link}>Learn More</Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="container py-24 mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 text-center mx-auto"
        >
          <div className="mb-4 inline-block rounded-full bg-[#AACBFF] dark:bg-[#0176D3]/30 px-4 py-1 text-sm font-medium text-[#0B5CAB] dark:text-[#AACBFF]">
            Our Process
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] dark:from-[#1589EE] dark:to-[#AACBFF]">
              Implementation Approach
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our proven implementation methodology ensures a smooth and successful Marketing Cloud deployment.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-4 mx-auto"
        >
          {[
            { number: '01', title: 'Discovery', description: 'We analyze your business needs and marketing goals to create a tailored implementation plan.' },
            { number: '02', title: 'Configuration', description: 'Our experts configure Marketing Cloud to align with your specific business requirements.' },
            { number: '03', title: 'Integration', description: 'We integrate Marketing Cloud with your existing systems for seamless data flow.' },
            { number: '04', title: 'Training', description: 'We provide comprehensive training to ensure your team can maximize the platform capabilities.' },
          ].map((step) => (
            <motion.div
              key={step.title}
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#0176D3] to-[#1589EE] opacity-20 blur-sm"></div>
              <div className="relative rounded-lg border border-[#AACBFF] dark:border-[#0176D3] bg-white dark:bg-slate-800 p-6 shadow-md">
                <div className="mb-4 text-4xl font-bold text-[#0176D3] dark:text-[#AACBFF]">{step.number}</div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] py-24 w-full">
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
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Marketing?</h2>
              <p className="mb-8 text-lg text-white/80">
                Contact us today to learn how our Marketing Cloud solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-white text-[#0176D3] hover:bg-white/90 shadow-lg hover:shadow-white/20 transition-all duration-300">
                  <Link href="/marketing/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 transition-all duration-300">
                  <Link href="/marketing/services">Explore Other Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 