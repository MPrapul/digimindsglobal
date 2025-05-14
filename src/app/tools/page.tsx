'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const tools = [
  {
    id: 'hubspot-sfmc-migrator',
    name: 'HubSpot to SFMC Migration Tool',
    tagline: 'Migrate with confidence, launch with speed',
    description: 'Seamlessly move your campaigns, assets, and lists from HubSpot to SFMC. Our intelligent migration tool handles complex data mappings, preserves your campaign structure, and ensures zero data loss during transfer.',
    features: [
      'Automated contact & list migration',
      'Email template conversion',
      'Journey mapping & recreation',
      'Asset relationship preservation'
    ],
    benefits: [
      'Reduce migration time by 80%',
      'Zero data loss guarantee',
      'Maintain campaign integrity',
      'Automated validation checks'
    ],
    icon: '/images/tools/migration.svg',
    image: '/images/hubspot.png',
    link: 'https://hub-spot-sfmc-migrator-nu.vercel.app/',
    status: 'live',
    tags: ['Migration', 'HubSpot', 'SFMC']
  },
  {
    id: 'sfmc-braze-migrator',
    name: 'SFMC to Braze Migration Tool',
    tagline: 'Seamlessly migrate from SFMC to Braze',
    description: 'DataBridge provides a seamless, reliable way to migrate your marketing content, templates, user data, segments, and campaigns from Salesforce Marketing Cloud to Braze.',
    features: [
      'HTML Content Blocks migration',
      'Email Templates transfer',
      'Data Extension mapping',
      'Journey Builder to Canvas conversion'
    ],
    benefits: [
      'Cut migration time by 70%',
      '100% satisfaction guarantee',
      'Preserve campaign integrity',
      'Expert documentation'
    ],
    icon: '/images/tools/migration.svg',
    image: '/images/braze.png',
    link: 'https://braze-migration.vercel.app/',
    status: 'live',
    tags: ['Migration', 'SFMC', 'Braze']
  },
  {
    id: 'segment-publisher',
    name: 'SFMC Segment Publisher',
    tagline: 'Unify your segments across business units',
    description: 'Move segments between SFMC Business Units with unprecedented ease. Our intelligent publisher maintains data relationships, handles permissions, and ensures consistency across your Marketing Cloud organization.',
    features: [
      'Cross-BU segment synchronization',
      'Automated permission handling',
      'Real-time sync monitoring',
      'Conflict resolution'
    ],
    benefits: [
      'Centralized segment management',
      'Automated compliance checks',
      'Real-time sync status',
      'Error-free transfers'
    ],
    icon: '/images/tools/segments.svg',
    image: null,
    link: '#',
    status: 'coming-soon',
    tags: ['DataSync', 'JourneyBuilder', 'Efficiency']
  },
  {
    id: 'automation-health',
    name: 'Automation Health Check',
    tagline: 'Keep your automations running flawlessly',
    description: 'Keep your automation studio running at peak performance. Our comprehensive health check tool monitors your automations, identifies potential issues, and provides actionable insights for optimization.',
    features: [
      'Real-time performance monitoring',
      'Error prediction & prevention',
      'Resource usage optimization',
      'Automated health reports'
    ],
    benefits: [
      'Prevent automation failures',
      'Optimize resource usage',
      'Reduce maintenance time',
      'Proactive issue resolution'
    ],
    icon: '/images/tools/automation.svg',
    image: null,
    link: '#',
    status: 'coming-soon',
    tags: ['Automation', 'Monitoring']
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
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

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.2]" />
        </motion.div>
        
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                We Build What We Wish We Had
              </h1>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Red Hibbert&apos;s growing library of no-nonsense apps and tools designed to supercharge your Salesforce Marketing Cloud and HubSpot stack.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="#explore-tools"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-[#0A2D69] text-white hover:bg-[#0A2D69]/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Our Tools
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="marketing/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border-2 border-[#0A2D69] text-[#0A2D69] hover:bg-[#0A2D69] hover:text-white transition-colors duration-300"
              >
                Request Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-[#0A2D69] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12"
            >
              Transforming Complex Workflows into Simple Solutions
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Simplifying Complexity</h3>
                <p className="text-blue-100">
                  We transform time-consuming tasks into streamlined processes, making the complex simple and the impossible possible.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Boosting Productivity</h3>
                <p className="text-blue-100">
                  Our tools automate repetitive tasks, letting your team focus on strategy and creativity rather than manual operations.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Ensuring Quality</h3>
                <p className="text-blue-100">
                  Built with enterprise-grade security and reliability, our tools maintain data integrity while maximizing efficiency.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual Tool Sections */}
      <div id="explore-tools">
        {tools.map((tool, index) => (
          <section 
            key={tool.id}
            className={`py-24 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div 
                    variants={fadeInUp} 
                    className={`${index % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}`}
                  >
                    <div className="space-y-6">
                      {tool.status === 'coming-soon' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                          Coming Soon
                        </span>
                      )}
                      <h2 className="text-4xl font-bold text-gray-900">{tool.name}</h2>
                      <p className="text-xl text-blue-600 font-medium">{tool.tagline}</p>
                      <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {tool.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-4">Benefits</h4>
                          <ul className="space-y-3">
                            {tool.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-6">
                        <Link
                          href={tool.link}
                          className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                            tool.status === 'live' 
                              ? 'bg-[#0A2D69] hover:bg-[#0A2D69]/90' 
                              : 'bg-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {tool.status === 'live' ? 'Try Tool' : 'Coming Soon'}
                          {tool.status === 'live' && (
                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          )}
                        </Link>
                        <Link
                          href="/marketing/contact"
                          className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium border-2 border-[#0A2D69] text-[#0A2D69] hover:bg-[#0A2D69] hover:text-white transition-colors duration-300"
                        >
                          Request Demo
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={fadeInUp}
                    className={`${index % 2 === 0 ? 'order-1 md:order-2' : 'order-1'}`}
                  >
                    {tool.image ? (
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={tool.image}
                          alt={`${tool.name} Dashboard`}
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                      </div>
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-[3/2] flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 mx-auto mb-4 bg-white/80 rounded-xl flex items-center justify-center">
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              width={32}
                              height={32}
                              className="text-[#0A2D69]"
                            />
                          </div>
                          <p className="text-gray-500 font-medium">Coming Soon</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent" />
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Enhanced Call to Action */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-[#0A2D69]" />
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-12 md:p-16"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Have an Idea for a Tool?
                </h2>
                <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
                  We&apos;re always looking to expand our toolkit. Share your ideas and help us build the next game-changing solution for the Salesforce Marketing Cloud ecosystem.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/marketing/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-[#0A2D69] bg-white hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit Your Idea
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 