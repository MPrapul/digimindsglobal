'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, Scale, Shield } from 'lucide-react'

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

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-[#b4c8e1] mb-8 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
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
                <FileText className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Agreement</h3>
              <p className="text-gray-600">By using our services, you agree to these terms</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0176D3]/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                <Scale className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Legal Rights</h3>
              <p className="text-gray-600">Understanding your rights and obligations</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0176D3]/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                <Shield className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Protection</h3>
              <p className="text-gray-600">How we protect your information</p>
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
                {/* Introduction */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to Digiminds Global. These terms and conditions outline the rules and regulations for the use of our website.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Digiminds Global's website if you do not accept all of the terms and conditions stated on this page.
                  </p>
                </motion.div>

                {/* Acceptance of Terms */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using our Services on behalf of an organization, you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these Terms.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We may modify these Terms at any time. If we make changes, we will provide notice by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our Services after any changes indicates your acceptance of the modified Terms.
                  </p>
                </motion.div>

                {/* User Responsibilities */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">User Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">When using our Services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account and password</li>
                    <li>Use our Services in compliance with all applicable laws and regulations</li>
                    <li>Not engage in any activity that interferes with or disrupts our Services</li>
                    <li>Not attempt to gain unauthorized access to our Services or other users' accounts</li>
                    <li>Not use our Services for any illegal or unauthorized purpose</li>
                  </ul>
                </motion.div>

                {/* Intellectual Property */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Services and all content, features, and functionality are owned by Red Hibbert Group LLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.
                  </p>
                </motion.div>

                {/* Limitation of Liability */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To the maximum extent permitted by law, Red Hibbert Group LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Your access to or use of or inability to access or use the Services</li>
                    <li>Any conduct or content of any third party on the Services</li>
                    <li>Any content obtained from the Services</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  </ul>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Questions About Our Terms?</h2>
                  <p className="text-gray-700 mb-6">
                    If you have any questions about these Terms, please contact us at{' '}
                    <a href="mailto:info@digimindsglobal.tech" className="text-[#0176D3] hover:text-[#032D60] transition-colors">
                      info@digimindsglobal.tech
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
                    <Link href="#introduction" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Introduction</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#acceptance" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Acceptance of Terms</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#responsibilities" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>User Responsibilities</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#intellectual-property" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Intellectual Property</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#liability" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Limitation of Liability</span>
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
                    <Link href="/cookies" className="text-gray-600 hover:text-[#0176D3] transition-colors flex items-center">
                      Cookie Policy
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