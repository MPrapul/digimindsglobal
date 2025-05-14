"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Audience segmentation',
    description: 'Create targeted audience segments based on customer data and behavior.',
    icon: '👥'
  },
  {
    title: 'Cross-channel ad campaigns',
    description: 'Run coordinated campaigns across multiple advertising platforms.',
    icon: '🎯'
  },
  {
    title: 'Lookalike audience creation',
    description: 'Find new customers similar to your best existing customers.',
    icon: '🔍'
  },
  {
    title: 'Campaign performance tracking',
    description: 'Monitor and optimize campaign performance in real-time.',
    icon: '📊'
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

export default function AdvertisingStudioPage() {
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
            Advertising Studio
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200">
            Create and manage targeted digital advertising campaigns.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container py-24 mx-auto">
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
                Advanced Digital Advertising Tools
              </span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Advertising Studio helps you create, manage, and optimize digital advertising campaigns across multiple channels.
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
                src="/images/email-studio.jpg"
                alt="Advertising Studio Dashboard"
                fill
                className="object-cover"
              />
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
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Maximize Your Ad Performance</h2>
              <p className="mb-8 text-lg text-white/80">
                Take your digital advertising to the next level with data-driven targeting and optimization.
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