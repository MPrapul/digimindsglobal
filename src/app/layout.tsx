import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import WhatsAppChat from '@/components/WhatsAppChat'
import { metadata } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="-a3TLmcreS5WNqaQXsrvLpvQGTS2KOZ9ZIIAU6pMSV4" />
        <link rel="icon" href="/images/DigimindglobalFav.png" />
        <link rel="shortcut icon" href="/images/DigimindglobalFav.png" />
        <link rel="apple-touch-icon" href="/images/DigimindglobalFav.png" />
      </head>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.className
      )}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppChat />
        <Analytics />
      </body>
    </html>
  )
}
