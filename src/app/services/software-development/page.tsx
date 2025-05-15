"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function SoftwareDevelopmentPage() {
  return (
    <div className="flex flex-col items-center w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] w-full overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Software Development Services"
            fill
            className="object-cover transition-transform duration-10000 hover:scale-105 brightness-[0.6]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1589ee]/95 via-[#0176D3]/85 to-[#0B5CAB]/75 backdrop-blur-[2px]" />
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
              Software Development & Testing
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 max-w-2xl text-lg sm:text-xl text-white/90 text-center mx-auto leading-relaxed"
          >
            Build custom software solutions with comprehensive testing and quality assurance for reliable results.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16 sm:py-24 mx-auto">
        {/* Overview */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Elevate Your Business with Custom Software</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In today's digital landscape, the right software can transform your business operations and create 
              competitive advantages. Our software development and testing services deliver custom solutions tailored 
              to your specific needs with rigorous quality assurance at every step.
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
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Development</h3>
              <p className="text-gray-600">Tailor-made software solutions designed to address your unique business challenges and requirements.</p>
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
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                  <path d="M12 20h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">Software that grows with your business, handling increased loads and adapting to evolving needs.</p>
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
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing methodologies to ensure reliability, performance, and security in every product we deliver.</p>
            </motion.div>
          </div>
        </div>
        
        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Software Development Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Custom Software Development</h3>
              <p className="text-gray-700 mb-4">
                Build tailored software solutions that address your specific business needs and provide a competitive edge in your industry.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Enterprise application development</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Process automation solutions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Integration with existing systems</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/services-hero.jpg" 
                alt="Custom Software Development" 
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
                alt="Mobile App Development" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">Mobile App Development</h3>
              <p className="text-gray-700 mb-4">
                Create powerful, user-friendly mobile applications that extend your business reach and enhance customer engagement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Native iOS and Android apps</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cross-platform solutions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Progressive web applications</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quality Assurance & Testing</h3>
              <p className="text-gray-700 mb-4">
                Ensure your software meets the highest standards of quality through our comprehensive testing and quality assurance services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Automated testing frameworks</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Performance and load testing</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Security vulnerability testing</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/services-hero.jpg" 
                alt="Quality Assurance & Testing" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1589ee] to-[#0176D3] p-12 rounded-2xl shadow-xl">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with Custom Software?</h2>
            <p className="text-lg mb-8">
              Let's build reliable, scalable software solutions that drive efficiency and growth for your business.
            </p>
            <Button size="lg" className="bg-white text-[#0176D3] hover:bg-gray-100">
              <Link href="/contact">Request a Development Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 