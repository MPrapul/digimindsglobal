"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const serviceLinks = [
  { name: 'Marketing Cloud', href: '/marketing/services/marketing-cloud' },
  { name: 'Data Cloud', href: '/marketing/services/data-cloud' },
  { name: 'AI/CRM Solutions', href: '/marketing/services/ai-crm' },
]

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen">
      {/* Service Navigation */}
      <nav className="sticky top-20 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-1 h-14">
            {serviceLinks.map((link) => {
              const isActive = pathname === link.href
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-[#0176D3]' 
                      : 'text-gray-600 hover:text-[#0176D3]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0176D3]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  )
} 