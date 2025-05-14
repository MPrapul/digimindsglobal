"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Brain, Workflow, LineChart, Zap } from 'lucide-react'

export default function AiCrmPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/images/ai-crm.jpg"
          alt="AI & CRM Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white mx-auto">
          <div className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            Salesforce Solution
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            AI & CRM Solutions
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200">
            Leverage AI to automate processes and enhance customer engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              <Link href="/marketing/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-white/10 backdrop-blur-sm">
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="features" className="container py-24 mx-auto w-full">
        <div className="mb-16 text-center mx-auto">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">AI & CRM Features</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover how our AI-powered CRM solutions can help you automate processes and enhance customer engagement.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mx-auto">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mr-4">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
            </div>
            <p className="text-muted-foreground">
              Gain valuable insights from your customer data with AI-powered analytics and recommendations.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mr-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold">Process Automation</h3>
            </div>
            <p className="text-muted-foreground">
              Automate routine tasks and workflows to improve efficiency and reduce manual effort.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mr-4">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-semibold">Predictive Analytics</h3>
            </div>
            <p className="text-muted-foreground">
              Anticipate customer needs and behaviors with predictive analytics and machine learning.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mr-4">
                <Workflow size={24} />
              </div>
              <h3 className="text-xl font-semibold">Smart Workflows</h3>
            </div>
            <p className="text-muted-foreground">
              Create intelligent workflows that adapt to changing customer and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/50 w-full">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contact us today to learn how our AI & CRM solutions can help you achieve your business goals.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/marketing/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 