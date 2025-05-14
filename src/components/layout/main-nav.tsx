'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const mainNavItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Tools',
    href: '/tools',
  },
  {
    title: 'Industries',
    href: '/industries',
  },
  {
    title: 'Case Studies',
    href: '/case-studies',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-center w-full">
      <div className="flex items-center space-x-2">
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group',
              pathname === item.href || pathname.startsWith(`${item.href}/`)
                ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                : 'text-muted-foreground hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-primary/40'
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
} 