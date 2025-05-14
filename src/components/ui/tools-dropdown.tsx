'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const tools = [
  {
    id: 'hubspot-sfmc-migrator',
    name: 'HubSpot to SFMC Migration Tool',
    description: 'Seamlessly migrate your campaigns and assets',
    icon: '/images/tools/migration.svg',
    href: '/tools#hubspot-sfmc-migrator',
    status: 'live'
  },
  {
    id: 'sfmc-braze-migrator',
    name: 'SFMC to Braze Migration Tool',
    description: 'Migrate your SFMC content to Braze seamlessly',
    icon: '/images/tools/migration.svg',
    href: '/tools#sfmc-braze-migrator',
    status: 'live'
  },
  {
    id: 'segment-publisher',
    name: 'SFMC Segment Publisher',
    description: 'Unify segments across business units',
    icon: '/images/tools/segments.svg',
    href: '/tools#segment-publisher',
    status: 'coming-soon'
  }
]

export function ToolsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link 
        href="/tools"
        className={`text-gray-700 hover:text-primary font-medium py-2 ${isOpen ? 'text-primary' : ''}`}
      >
        Tools
        <div className={`h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`} />
      </Link>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
              
              {/* Content */}
              <div className="relative p-4">
                <div className="grid gap-2">
                  {tools.map((tool) => (
                    <Link
                      key={tool.id}
                      href={tool.href}
                      className="group relative p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                          <Image
                            src={tool.icon}
                            alt=""
                            width={20}
                            height={20}
                            className="text-blue-600"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                              {tool.name}
                            </h3>
                            {tool.status === 'coming-soon' && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                            {tool.description}
                          </p>
                        </div>
                        <div className="ml-auto flex items-center self-center">
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/tools"
                    className="block text-center text-sm text-[#0A2D69] hover:text-primary font-medium"
                  >
                    View All Tools
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 