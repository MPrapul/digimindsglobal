"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


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

export default function DataIntegrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B5CAB] to-[#1589EE]">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B5CAB]/90 via-[#0176D3]/80 to-[#1589EE]/70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col items-center"
            >
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                Data Cloud Services
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Data Integration
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/80">
                Seamlessly connect and unify your data from multiple sources to create a complete, 360-degree view of your customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Real-time Data Sync",
                description: "Synchronize data across systems in real-time to ensure consistency and accuracy.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                    <path d="M16 16h5v5" />
                  </svg>
                )
              },
              {
                title: "Data Transformation",
                description: "Transform and standardize data from different sources into a unified format.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 2H3v16h18V2Z" />
                    <path d="M21 10H3" />
                    <path d="M12 2v16" />
                  </svg>
                )
              },
              {
                title: "API Integration",
                description: "Connect with external systems and services through robust API integrations.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                )
              },
              {
                title: "Data Quality Management",
                description: "Ensure data accuracy and consistency with automated validation and cleansing.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )
              },
              {
                title: "Custom Workflows",
                description: "Build custom data integration workflows tailored to your business needs.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 6V4H7v2" />
                    <path d="M17 14v-2H7v2" />
                    <path d="M7 22h10" />
                    <path d="M7 10h10" />
                    <path d="M7 18h10" />
                    <path d="M3 6h18" />
                    <path d="M3 14h18" />
                    <path d="M3 22h18" />
                  </svg>
                )
              },
              {
                title: "Monitoring & Alerts",
                description: "Monitor integration health and receive alerts for any issues or anomalies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                )
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeIn}
                className="rounded-xl bg-white p-8 shadow-lg dark:bg-slate-800"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0176D3] text-white">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-16 sm:py-24 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Benefits of Data Integration
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Transform your business with unified data management
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="mb-3 text-lg font-semibold">Enhanced Decision Making</h3>
                <p className="text-muted-foreground">
                  Access comprehensive data insights to make informed business decisions
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="mb-3 text-lg font-semibold">Improved Efficiency</h3>
                <p className="text-muted-foreground">
                  Automate data workflows and reduce manual data entry tasks
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="mb-3 text-lg font-semibold">Better Customer Experience</h3>
                <p className="text-muted-foreground">
                  Deliver personalized experiences with unified customer data
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="mb-3 text-lg font-semibold">Data Accuracy</h3>
                <p className="text-muted-foreground">
                  Maintain consistent and accurate data across all systems
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="mb-3 text-lg font-semibold">Scalability</h3>
                <p className="text-muted-foreground">
                  Easily scale your data integration as your business grows
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="mb-3 text-lg font-semibold">Compliance & Security</h3>
                <p className="text-muted-foreground">
                  Ensure data compliance and security across integrations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-3xl bg-gradient-to-r from-[#0B5CAB] to-[#1589EE] p-8 sm:p-12 text-center text-white"
          >
            <h2 className="mb-4 text-3xl font-bold">Ready to Unify Your Data?</h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg text-white/80">
              Transform your business with our comprehensive data integration solutions.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/marketing/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 