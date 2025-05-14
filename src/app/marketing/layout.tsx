"use client"

import { usePathname } from 'next/navigation'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  )
} 