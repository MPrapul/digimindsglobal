"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Real-time personalization',
    description: 'Deliver personalized content, recommendations, and offers based on real-time customer behavior.',
    icon: '⚡'
  },
  {
    title: 'Customer journey visualization',
    description: 'Map and analyze the entire customer journey across all touchpoints for deeper insights.',
    icon: '🗺️'
  },
  {
    title: 'Behavioral analytics',
    description: 'Capture and analyze customer behaviors to understand preferences and predict needs.',
    icon: '📊'
  },
  {
    title: 'Cross-channel orchestration',
    description: 'Create seamless experiences across web, mobile, email, and in-store channels.',
    icon: '🔄'
  }
]

const useCases = [
  {
    title: 'E-commerce personalization',
    description: 'Increase conversion rates with personalized product recommendations, targeted promotions, and tailored messaging.',
    icon: '🛒'
  },
  {
    title: 'Content personalization',
    description: 'Engage visitors with dynamic website content based on their interests, browsing history, and segment.',
    icon: '📝'
  },
  {
    title: 'Email engagement optimization',
    description: 'Improve email marketing with content that reflects the customer\'s latest interactions across channels.',
    icon: '📧'
  },
  {
    title: 'Customer retention',
    description: 'Identify and re-engage at-risk customers with timely and relevant outreach strategies.',
    icon: '🔁'
  }
]

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

export default function InteractionStudioPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B5CAB]/90 via-[#0176D3]/80 to-[#1589EE]/70" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="container relative flex h-full flex-col items-center justify-center text-center text-white mx-auto"
        >
          <div className="mb-4 inline-block rounded-full bg-[#0176D3]/30 px-6 py-2 text-sm font-medium text-white backdrop-blur-md border border-[#1589EE]/20">
            Marketing Cloud
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Interaction Studio
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200">
            Deliver intelligent, real-time personalization to create exceptional customer experiences across all touchpoints.
          </p>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="container py-16 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE]">
              Powerful Real-Time Customer Experience Management
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Interaction Studio enables organizations to understand customer behavior, preferences, and intent in real-time. 
            With this powerful tool, businesses can create personalized experiences that drive engagement, 
            conversions, and customer loyalty across the entire customer journey.
          </p>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container py-16 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE]">
                Key Features & Capabilities
              </span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Interaction Studio provides the tools and technology needed to create personalized, contextually relevant experiences for every customer interaction.
            </p>
            <div className="grid gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeIn}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2F7FF] dark:bg-[#0B5CAB]/20 text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#0176D3] to-[#1589EE] opacity-20 blur-xl"></div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-[#AACBFF] dark:border-[#0176D3] shadow-xl">
              <Image
                src="/images/office-bg.jpg"
                alt="Interaction Studio Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Use Cases Section */}
      <section className="container py-16 mx-auto bg-gray-50 dark:bg-gray-900/30 rounded-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="px-6 md:px-10"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE]">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how Interaction Studio can transform your marketing strategy across multiple business objectives.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2F7FF] dark:bg-[#0B5CAB]/20 text-2xl flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="container py-16 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5CAB] to-[#1589EE]">
              Business Impact
            </span>
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Organizations implementing Interaction Studio experience transformative results across their digital properties.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#0176D3] mb-2">30%</div>
              <p className="text-center text-muted-foreground">Increase in conversion rates</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#0176D3] mb-2">25%</div>
              <p className="text-center text-muted-foreground">Boost in customer engagement</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#0176D3] mb-2">20%</div>
              <p className="text-center text-muted-foreground">Growth in average order value</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#0176D3] mb-2">40%</div>
              <p className="text-center text-muted-foreground">Increase in customer retention</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] py-16 w-full">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-soft-light"></div>
            <div className="relative mx-auto max-w-3xl text-center text-white">
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Transform Your Customer Experiences Today</h2>
              <p className="mb-8 text-lg text-white/80">
                Create meaningful, personalized interactions that drive customer engagement, satisfaction, and loyalty with Interaction Studio.
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
        </div>
      </section>
    </div>
  )
} 