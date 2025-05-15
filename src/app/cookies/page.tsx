'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cookie, Settings, Bell } from 'lucide-react'

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

export default function CookiePolicy() {
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
              Legal Information
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight bg-clip-text">
              Cookie Policy
            </h1>
            <p className="text-xl text-[#b4c8e1] mb-8 max-w-2xl mx-auto leading-relaxed">
              Learn about how we use cookies and similar technologies on our website.
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
                <Cookie className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Essential Cookies</h3>
              <p className="text-gray-600">Required for basic website functionality</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0176D3]/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                <Settings className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Preference Cookies</h3>
              <p className="text-gray-600">Remember your settings and preferences</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0176D3]/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                <Bell className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Analytics Cookies</h3>
              <p className="text-gray-600">Help us improve our website</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
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
                {/* Overview */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Cookie Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This Cookie Policy explains how Digiminds Global uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                  </p>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">What Are Cookies?</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                  </p>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">How We Use Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li className="mb-2">Essential cookies: These are necessary for the website to function properly.</li>
                    <li className="mb-2">Analytical/performance cookies: These allow us to recognize and count the number of visitors and to see how visitors move around our website.</li>
                    <li className="mb-2">Functionality cookies: These are used to recognize you when you return to our website.</li>
                    <li className="mb-2">Targeting cookies: These record your visit to our website, the pages you have visited and the links you have followed.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Your Cookie Choices</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li className="mb-2"><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#0176D3] hover:text-[#032D60] transition-colors">Chrome</a></li>
                    <li className="mb-2"><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#0176D3] hover:text-[#032D60] transition-colors">Firefox</a></li>
                    <li className="mb-2"><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#0176D3] hover:text-[#032D60] transition-colors">Edge</a></li>
                    <li className="mb-2"><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#0176D3] hover:text-[#032D60] transition-colors">Safari</a></li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Changes to This Cookie Policy</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal or regulatory reasons. Please visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Contact Us</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our use of cookies or other technologies, please contact us at:
                  </p>
                  <p className="text-gray-700 mb-2">
                    Email: <a href="mailto:info@digimindsglobal.tech" className="text-[#0176D3] hover:text-[#032D60] transition-colors">info@digimindsglobal.tech</a>
                  </p>
                  <p className="text-gray-700 mb-6">
                    Phone: <a href="tel:+916304647593" className="text-[#0176D3] hover:text-[#032D60] transition-colors">+91 6304647593</a>
                  </p>

                  <p className="text-sm text-gray-500 mt-8">Last updated: May 15, 2024</p>
                </motion.div>

                {/* Types of Cookies */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Types of Cookies We Use</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#032D60] mb-3">Essential Cookies</h3>
                      <p className="text-gray-700 leading-relaxed">
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#032D60] mb-3">Preference Cookies</h3>
                      <p className="text-gray-700 leading-relaxed">
                        These cookies remember your settings and preferences to enhance your browsing experience.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#032D60] mb-3">Analytics Cookies</h3>
                      <p className="text-gray-700 leading-relaxed">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Managing Cookies */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Managing Your Cookie Preferences</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    To modify your cookie preferences, you can use your browser settings or contact us for assistance with cookie management.
                  </p>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Questions About Cookies?</h2>
                  <p className="text-gray-700 mb-6">
                    If you have any questions about our Cookie Policy, please contact us at{' '}
                    <a href="mailto:privacy@redhibbert.com" className="text-[#0176D3] hover:text-[#032D60] transition-colors">
                      privacy@redhibbert.com
                    </a>
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#0176D3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#032D60] transition-colors"
                  >
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-6 lg:self-start">
              {/* Quick Links */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#what-are-cookies" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>What Are Cookies?</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#types-of-cookies" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Types of Cookies</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#managing-cookies" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Managing Cookies</span>
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Related Resources */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Related Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/privacy" className="text-gray-600 hover:text-[#0176D3] transition-colors flex items-center">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-600 hover:text-[#0176D3] transition-colors flex items-center">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/accessibility" className="text-gray-600 hover:text-[#0176D3] transition-colors flex items-center">
                      Accessibility Statement
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