'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck, Bell, Users, Clock } from 'lucide-react'

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

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-[#b4c8e1] mb-8 max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we protect and manage your personal information.
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
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Data Protection</h3>
              <p className="text-gray-600">Industry-leading security measures to protect your information</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0176D3]/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                <Lock className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Privacy First</h3>
              <p className="text-gray-600">Your data privacy is our top priority</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0176D3]/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
                <FileCheck className="w-8 h-8 text-[#0176D3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#032D60] mb-4">Compliance</h3>
              <p className="text-gray-600">Fully compliant with global privacy regulations</p>
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
                {/* Original content sections with enhanced styling */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At Digiminds Global, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                  </p>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Information We Collect</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect information about you in a variety of ways. The information we may collect includes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li className="mb-2">Personal Data: Name, email address, phone number, and other contact information you provide.</li>
                    <li className="mb-2">Usage Data: Information about how you use our website and services.</li>
                    <li className="mb-2">Cookies and Tracking Data: Information collected through cookies and similar technologies.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">How We Use Your Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may use the information we collect about you for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li className="mb-2">To provide and maintain our services</li>
                    <li className="mb-2">To notify you about changes to our services</li>
                    <li className="mb-2">To provide customer support</li>
                    <li className="mb-2">To gather analysis or valuable information so that we can improve our services</li>
                    <li className="mb-2">To monitor the usage of our services</li>
                    <li className="mb-2">To detect, prevent, and address technical issues</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Disclosure of Your Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your information in the following situations:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li className="mb-2">With service providers to monitor and analyze the use of our services</li>
                    <li className="mb-2">For business transfers, in connection with any merger, sale of company assets, financing, or acquisition</li>
                    <li className="mb-2">With your consent, when you have given us permission to do so</li>
                    <li className="mb-2">If required by law, such as in response to a subpoena or court order</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Your Privacy Rights</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You have certain rights regarding your personal information. These may include the right to access, correct, delete, or restrict the use of your personal information.
                  </p>

                  <h3 className="text-xl font-semibold text-[#032D60] mt-8 mb-4">Contact Us</h3>
                  <p className="text-gray-700 mb-2">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-gray-700 mb-2">
                    Email: <a href="mailto:info@digimindsglobal.tech" className="text-[#0176D3] hover:text-[#032D60] transition-colors">info@digimindsglobal.tech</a>
                  </p>
                  <p className="text-gray-700 mb-6">
                    Phone: <a href="tel:+916304647593" className="text-[#0176D3] hover:text-[#032D60] transition-colors">+91 6304647593</a>
                  </p>

                  <p className="text-sm text-gray-500 mt-8">Last updated: May 15, 2024</p>
                </motion.div>

                {/* Information Collection */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By providing us with your contact and personal details, you consent to receive messages from Red Hibbert Group LLC related to order updates, service alerts, or account notifications. Your information will only be used to send you relevant information and will never be shared with a third party without your consent.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Name and contact information</li>
                    <li>Company details and business information</li>
                    <li>Website usage data and analytics</li>
                    <li>Communication preferences</li>
                    <li>Technical information about your device and browser</li>
                    <li>Mobile phone number (if SMS services are opted into)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We collect this information through direct interactions, automated technologies, and third-party sources.
                  </p>
                </motion.div>

                {/* Messaging Services */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Messaging Services</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#032D60] mb-3">Message Frequency & Rates</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Message frequency may vary. Message and data rates may apply.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#032D60] mb-3">Opting Out</h3>
                      <p className="text-gray-700 leading-relaxed">
                        You may opt out of receiving SMS messages at any time by replying with "STOP" to any SMS message you receive from us. After opting out, you will receive a confirmation message, and we will cease sending SMS messages to your number.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#032D60] mb-3">Need Help?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        If you need assistance or have questions about our SMS service, reply with "HELP" to any SMS message you receive, or contact our customer support team at{' '}
                        <a href="mailto:contact@redhibbert.com" className="text-[#0176D3] hover:text-[#032D60] transition-colors">
                          contact@redhibbert.com
                        </a>.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-[#b4c8e1]/20">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        <strong>Note:</strong> No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Use of Information */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide and improve our services</li>
                    <li>Communicate important updates and notifications</li>
                    <li>Process transactions and manage your account</li>
                    <li>Analyze and enhance our website performance</li>
                    <li>Comply with legal obligations</li>
                    <li>Detect and prevent fraud</li>
                  </ul>
                </motion.div>

                {/* Data Protection */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Data Protection</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement robust security measures to protect your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and penetration testing</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>24/7 system monitoring</li>
                    <li>Regular backups and disaster recovery planning</li>
                  </ul>
                </motion.div>

                {/* Your Rights */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Your Privacy Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw consent at any time</li>
                    <li>Object to data processing</li>
                    <li>Request data portability</li>
                  </ul>
                </motion.div>

                {/* Cookie Policy */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Cookie Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For more information about our use of cookies, please visit our <Link href="/cookies" className="text-[#0176D3] hover:text-[#032D60] transition-colors">Cookie Policy</Link>.
                  </p>
                </motion.div>

                {/* Updates */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Policy Updates</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
                >
                  <h2 className="text-2xl font-bold text-[#032D60] mb-6">Questions or Concerns?</h2>
                  <p className="text-gray-700 mb-6">
                    If you have any questions about our Privacy Policy or how we handle your data, please contact our Data Protection Officer at{' '}
                    <a href="mailto:contact@redhibbert.com" className="text-[#0176D3] hover:text-[#032D60] transition-colors">
                      contact@redhibbert.com
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

            {/* Sidebar with updated styling */}
            <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-6 lg:self-start">
              {/* Quick Links */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#overview" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Overview</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#data-collection" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Data Collection</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#messaging" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Messaging Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#your-rights" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Your Rights</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#security" className="flex items-center text-[#0176D3] hover:text-[#032D60] transition-colors group">
                      <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0176D3]/10 group-hover:bg-[#0176D3]/20 transition-colors">→</span>
                      <span>Security Measures</span>
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Latest Updates */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Latest Updates</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#0176D3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0176D3]/20 transition-colors">
                      <Clock className="w-5 h-5 text-[#0176D3]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Last updated: March 2024</p>
                      <p className="text-sm text-gray-600">Enhanced data protection measures</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#0176D3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0176D3]/20 transition-colors">
                      <Bell className="w-5 h-5 text-[#0176D3]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Coming Soon</p>
                      <p className="text-sm text-gray-600">Updated cookie preferences center</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Need Help */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Need Help?</h3>
                <p className="text-gray-600 mb-4">Our privacy team is here to help you with any questions or concerns.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#0176D3] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#032D60] transition-colors text-sm w-full justify-center"
                >
                  Contact Privacy Team
                </Link>
              </motion.div>

              {/* Resources */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#b4c8e1]/30"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-6">Related Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/cookies" className="text-gray-600 hover:text-[#0176D3] transition-colors flex items-center">
                      Cookie Policy
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