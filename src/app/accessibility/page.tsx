'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Bell, Clock, HelpCircle, BookOpen, MessageSquare, Users, Shield, Check, Monitor } from 'lucide-react'

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

export default function AccessibilityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-32 bg-gradient-to-br from-[#0176D3] via-[#0176D3] to-[#032D60] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-sm text-white/90 mb-8 shadow-lg">
              Important Information
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight bg-clip-text">
              Accessibility Statement
            </h1>
            <p className="text-xl text-[#b4c8e1] mb-8 max-w-2xl mx-auto leading-relaxed">
              Digiminds Global is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </motion.div>
        </div>
        
        {/* Modern geometric separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
            <path 
              fill="#f9fafb"
              fillOpacity="1" 
              d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,101.3C672,107,768,117,864,117.3C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
            />
          </svg>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0176D3]/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                <Shield className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">WCAG 2.1 Compliant</h3>
              <p className="text-gray-600">Following the latest web accessibility guidelines and standards</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0176D3]/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                <Check className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Universal Access</h3>
              <p className="text-gray-600">Designed to work with all assistive technologies</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0176D3]/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                <Monitor className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Responsive Design</h3>
              <p className="text-gray-600">Optimized for all devices and screen sizes</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                {/* Introduction */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Our Commitment</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At Red Hibbert Group, we are committed to making our website accessible to everyone, regardless of their abilities. We believe every user deserves an inclusive, engaging, and functional online experience, and we continuously work to ensure all content is accessible.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This commitment to accessibility for all begins with this site and our efforts to ensure all functionality and all content is accessible to all Americans.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, which provide standards to make web content accessible to individuals with various disabilities, including visual, auditory, cognitive, and motor impairments. These guidelines guide us in creating a more inclusive digital space for all.
                  </p>
                </motion.div>

                {/* Standards We Follow */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Standards We Follow</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our ongoing accessibility effort works towards conforming to the Web Content Accessibility Guidelines (WCAG) version 2.1, level AA criteria. These guidelines not only help make web content accessible to users with sensory, cognitive and mobility disabilities, but ultimately to all users, regardless of ability.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our ongoing accessibility efforts work toward making redhibbert.com as accessible as possible.
                  </p>
                </motion.div>

                {/* Ongoing Efforts */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Ongoing Efforts</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We are constantly reviewing and enhancing our website to ensure it remains user-friendly and accessible. Our team is dedicated to addressing any areas that may require improvements, helping to make sure all users can easily navigate and interact with the site.
                  </p>
                </motion.div>

                {/* Features with enhanced grid layout */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Accessibility Features</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">Our website includes the following accessibility features:</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-[#032D60] mb-4 flex items-center">
                        <ChevronRight className="w-5 h-5 mr-2 text-[#0176D3]" />
                        Navigation
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          Consistent navigation structure
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          Skip to main content link
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          Logical tab order
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          Clear focus indicators
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          Descriptive page titles
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-[#032D60] mb-4 flex items-center">
                        <ChevronRight className="w-5 h-5 mr-2 text-[#0176D3]" />
                        Content
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          Alternative text for images
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          Proper heading structure
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          Descriptive link text
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          High contrast text
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-[#0176D3] rounded-full mr-3"></span>
                          Resizable text support
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Need Assistance?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you face any issues accessing our content or have suggestions for improving accessibility, we welcome your feedback. We&apos;re here to help and will do everything possible to provide you with the information, service, or feature you need.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The Red Hibbert welcomes comments on how to improve the site's accessibility for users with disabilities.
                  </p>
                  <div className="flex items-center gap-2 text-gray-700 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0176D3]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="font-medium">Phone:</span>
                    <a href="tel:+17327348282" className="text-[#0176D3] hover:text-[#032D60] transition-colors">
                      (+1) 732-734-8282
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0176D3]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="font-medium">Email:</span>
                    <a href="mailto:contact@redhibbert.com" className="text-[#0176D3] hover:text-[#032D60] transition-colors">
                      contact@redhibbert.com
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#0176D3] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#032D60] transition-colors shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Accessibility Statement</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Digiminds Global is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                  </p>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Our Accessibility Goals</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We strive to ensure that our website adheres to level AA of the Web Content Accessibility Guidelines (WCAG) 2.1. These guidelines explain how to make web content more accessible for people with disabilities.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We're working to ensure that our website is:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li className="mb-2">Keyboard navigable</li>
                    <li className="mb-2">Screen reader friendly</li>
                    <li className="mb-2">Organized with clear heading structure</li>
                    <li className="mb-2">Designed with adequate color contrast</li>
                    <li className="mb-2">Usable with magnification and zooming</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Compatible Technologies</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We aim to support the following:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li className="mb-2">Recent versions of major browsers including Chrome, Firefox, Safari, and Edge</li>
                    <li className="mb-2">Common screen readers including JAWS, NVDA, and VoiceOver</li>
                    <li className="mb-2">Operating system accessibility features</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Ongoing Improvements</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our website is regularly reviewed and updated to ensure continued accessibility. We welcome your feedback as we strive to improve our website accessibility.
                  </p>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Contact Us</h3>
                  <p className="text-gray-700 mb-4">
                    If you encounter any accessibility barriers or have suggestions for improvement, please contact us at:
                  </p>
                  <p className="text-gray-700 mb-2">
                    Email: <a href="mailto:info@digimindsglobal.tech" className="text-[#0176D3] hover:text-[#032D60] transition-colors">info@digimindsglobal.tech</a>
                  </p>
                  <p className="text-gray-700 mb-6">
                    Phone: <a href="tel:+916304647593" className="text-[#0176D3] hover:text-[#032D60] transition-colors">+91 6304647593</a>
                  </p>

                  <p className="text-sm text-gray-500 mt-8">Last updated: May 15, 2024</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar with updated styling */}
            <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-6 lg:self-start">
              {/* Quick Navigation */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Quick Navigation</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#commitment" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Our Commitment</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#standards" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Standards We Follow</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#efforts" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Ongoing Efforts</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#assistance" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Need Assistance</span>
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Latest Improvements */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Latest Improvements</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#0176D3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0176D3]/20 transition-colors">
                      <Clock className="w-5 h-5 text-[#0176D3]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">March 2024</p>
                      <p className="text-sm text-gray-600">Enhanced keyboard navigation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#0176D3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0176D3]/20 transition-colors">
                      <Bell className="w-5 h-5 text-[#0176D3]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Coming Soon</p>
                      <p className="text-sm text-gray-600">Screen reader optimizations</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Support Section */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Need Assistance?</h3>
                <p className="text-gray-600 mb-6">Our accessibility team is here to help you navigate our website.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#0176D3] text-white px-4 py-3 rounded-xl font-medium hover:bg-[#032D60] transition-colors text-sm w-full justify-center shadow-md hover:shadow-lg"
                >
                  Get Support
                </Link>
              </motion.div>

              {/* Resources with updated styling */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Helpful Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="https://www.w3.org/WAI/WCAG21/quickref/" className="flex items-center text-gray-600 hover:text-[#0176D3] transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-[#0176D3]/10 flex items-center justify-center mr-3 group-hover:bg-[#0176D3]/20 transition-colors">
                        <BookOpen className="w-4 h-4 text-[#0176D3]" />
                      </div>
                      <span>WCAG 2.1 Guidelines</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/feedback" className="flex items-center text-gray-600 hover:text-[#0176D3] transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-[#0176D3]/10 flex items-center justify-center mr-3 group-hover:bg-[#0176D3]/20 transition-colors">
                        <MessageSquare className="w-4 h-4 text-[#0176D3]" />
                      </div>
                      <span>Submit Feedback</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="flex items-center text-gray-600 hover:text-[#0176D3] transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-[#0176D3]/10 flex items-center justify-center mr-3 group-hover:bg-[#0176D3]/20 transition-colors">
                        <Users className="w-4 h-4 text-[#0176D3]" />
                      </div>
                      <span>Community Support</span>
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 