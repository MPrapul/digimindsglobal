"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function LeadGenerationPage() {
  return (
    <div className="flex flex-col items-center w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] w-full overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="B2B Lead Generation Services"
            fill
            className="object-cover transition-transform duration-10000 hover:scale-105 brightness-[0.6]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#032D60]/95 via-[#0176D3]/85 to-[#1589EE]/75 backdrop-blur-[2px]" />
        </div>
        
        {/* Content */}
        <div className="container relative z-10 flex min-h-[500px] flex-col items-center justify-center text-center text-white mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center max-w-4xl mx-auto leading-[1.1] drop-shadow-2xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#AACBFF] to-[#1589EE] font-extrabold">
              B2B Lead Generation & Social Media
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 max-w-2xl text-lg sm:text-xl text-white/90 text-center mx-auto leading-relaxed"
          >
            Attract high-quality business leads through targeted marketing campaigns and strategic social media management.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16 sm:py-24 mx-auto">
        {/* Overview */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Fuel Your Business Growth</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In today's competitive B2B landscape, generating high-quality leads is the foundation of sustainable growth. 
              Our strategic approach combines proven lead generation techniques with powerful social media strategies to attract, 
              engage, and convert your ideal business customers.
            </p>
          </div>
        </div>
        
        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Lead Generation & Social Media Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">B2B Lead Generation Campaigns</h3>
              <p className="text-gray-700 mb-4">
                Strategic multi-channel campaigns designed to generate high-quality leads that convert into valuable business relationships.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Account-based marketing (ABM)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Lead scoring and qualification</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Conversion rate optimization</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/services-hero.jpg" 
                alt="B2B Lead Generation" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/services-hero.jpg" 
                alt="Social Media Management" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">Social Media Management</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive social media strategies to build your brand, engage with your audience, and drive valuable business connections.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Platform-specific strategies (LinkedIn, Twitter, etc.)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Content calendars and publishing</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Community engagement and growth</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Content Marketing</h3>
              <p className="text-gray-700 mb-4">
                Strategic content creation and distribution to establish your expertise, attract prospects, and nurture leads through the buyer's journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Thought leadership content</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Lead magnets and gated content</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Content distribution strategies</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/services-hero.jpg" 
                alt="Content Marketing" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#032D60] to-[#0176D3] p-12 rounded-2xl shadow-xl">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Generate More Quality Leads?</h2>
            <p className="text-lg mb-8">
              Let's create a lead generation strategy tailored to your business objectives and target audience.
            </p>
            <Button size="lg" className="bg-white text-[#032D60] hover:bg-gray-100">
              <Link href="/contact">Schedule a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 