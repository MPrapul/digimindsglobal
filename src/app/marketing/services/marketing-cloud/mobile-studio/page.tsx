"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

// Create the Section component inline since there's an issue with the import
const Section = ({ 
  children, 
  className = "", 
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: React.ReactNode | string | undefined;
}) => {
  return (
    <section 
      className={`py-12 md:py-16 w-full ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

const features = [
  {
    title: 'SMS Marketing',
    description: 'Send bulk SMS campaigns, personalized messages, and set up two-way SMS communications.',
    icon: '📱'
  },
  {
    title: 'MMS Marketing',
    description: 'Deliver rich media messages with images, videos, and interactive elements.',
    icon: '🖼️'
  },
  {
    title: 'Push Notifications',
    description: 'Engage app users with targeted notifications based on behavior and location.',
    icon: '🔔'
  },
  {
    title: 'Mobile Analytics',
    description: 'Track campaign performance with detailed engagement metrics and ROI analysis.',
    icon: '📊'
  }
]

const advancedFeatures = [
  {
    title: 'Journey Builder Integration',
    description: 'Incorporate mobile touchpoints in cross-channel customer journeys.',
    icon: '🛤️'
  },
  {
    title: 'Automated Responses',
    description: 'Set up auto-replies and drip campaigns for incoming messages.',
    icon: '⚙️'
  },
  {
    title: 'Time-Based Triggers',
    description: 'Schedule mobile messages based on specific times and dates.',
    icon: '⏰'
  },
  {
    title: 'Event-Triggered Messages',
    description: 'Send mobile communications based on real-time customer events.',
    icon: '🎯'
  }
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function MobileStudioPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <Section className="py-20 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Mobile Studio
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Powerful mobile marketing solutions to engage your audience with personalized SMS, MMS, and push notifications using Salesforce Marketing Cloud.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Button size="lg" asChild>
                <Link href="/marketing/contact">Request a Demo</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative h-[400px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/mobile-studio.jpg"
              alt="Mobile Studio Marketing"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </Section>

      {/* Overview Section */}
      <Section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile Studio Overview</h2>
          <p className="text-lg text-gray-600 mb-10">
            Mobile Studio, a key component of Salesforce Marketing Cloud, empowers businesses to create, manage, and automate 
            sophisticated mobile marketing campaigns. Our comprehensive solution enables marketers to deliver personalized, 
            targeted, and timely communications across various mobile channels, enhancing customer engagement and driving results.
          </p>
        </motion.div>
      </Section>

      {/* Features Section */}
      <Section className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features of Mobile Studio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create engaging mobile marketing campaigns that drive results.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={fadeIn}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Advanced Features Section */}
      <Section className="py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Mobile Automation Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take your mobile marketing to the next level with powerful automation features.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advancedFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={fadeIn}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started with Mobile Studio</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact Red Hibbert Group to learn how our Mobile Studio expertise can help your business thrive in the mobile-first world. 
            Boost engagement, increase conversions, and deliver personalized experiences at scale.
          </p>
          <Button size="lg" asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="/marketing/contact">Request a Consultation</Link>
          </Button>
        </div>
      </Section>
    </div>
  )
} 