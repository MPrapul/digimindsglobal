"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function UXDesignPage() {
  return (
    <div className="flex flex-col items-center w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] w-full overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="UI/UX Design Services"
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
              UI/UX Design Services
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 max-w-2xl text-lg sm:text-xl text-white/90 text-center mx-auto leading-relaxed"
          >
            Create intuitive and engaging user experiences that delight your customers and increase conversion rates.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16 sm:py-24 mx-auto">
        {/* Overview */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Design that Makes a Difference</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In today's competitive digital landscape, exceptional user experience is what separates successful products from the rest. 
              Our UI/UX design services focus on creating intuitive, engaging interfaces that not only look beautiful but also drive 
              conversions and build customer loyalty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M17 3a2.85 2.85 0 1 1 0 5.7"></path>
                  <path d="M10 3a2.85 2.85 0 1 1 0 5.7"></path>
                  <path d="M3 3a2.85 2.85 0 1 1 0 5.7"></path>
                  <path d="M17 16a2.85 2.85 0 1 1 0 5.7"></path>
                  <path d="M10 16a2.85 2.85 0 1 1 0 5.7"></path>
                  <path d="M3 16a2.85 2.85 0 1 1 0 5.7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Centered Design</h3>
              <p className="text-gray-600">Designs that focus on the needs, preferences, and behaviors of your target users.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conversion-Driven</h3>
              <p className="text-gray-600">Designs crafted to guide users toward desired actions and improve conversion rates.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intuitive Interaction</h3>
              <p className="text-gray-600">Interfaces that feel natural and intuitive, reducing learning curves and user friction.</p>
            </motion.div>
          </div>
        </div>
        
        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our UI/UX Design Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">User Experience Research</h3>
              <p className="text-gray-700 mb-4">
                Gain deep insights into your users' needs, behaviors, and pain points to create experiences that truly resonate.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>User interviews and surveys</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Persona development</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>User journey mapping</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/services-hero.jpg" 
                alt="User Experience Research" 
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
                alt="Interface Design" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">Interface Design</h3>
              <p className="text-gray-700 mb-4">
                Create visually stunning and highly functional interfaces that engage users and align with your brand identity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Web and mobile UI design</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Responsive design</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Design systems</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Prototyping & Testing</h3>
              <p className="text-gray-700 mb-4">
                Validate design concepts with interactive prototypes and user testing to ensure your digital products meet user needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Interactive prototyping</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Usability testing</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Iteration based on feedback</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/services-hero.jpg" 
                alt="Prototyping & Testing" 
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
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your User Experience?</h2>
            <p className="text-lg mb-8">
              Let's create intuitive, engaging interfaces that delight your users and drive conversions.
            </p>
            <Button size="lg" className="bg-white text-[#032D60] hover:bg-gray-100">
              <Link href="/contact">Start Your UX Design Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 