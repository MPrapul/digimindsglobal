'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MainNav } from '@/components/layout/main-nav'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/layout/mobile-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center max-w-[1920px] mx-auto">
        <div className="mr-4 flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Red Hibbert Group Logo" 
              width={160} 
              height={45} 
              className="h-auto w-auto"
              priority
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <MainNav />
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <div className="hidden md:block">
            <Button asChild className="rounded-md px-6 py-2 font-medium bg-[#444a7d] hover:bg-[#363c64] text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
} 