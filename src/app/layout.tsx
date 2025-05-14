import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import ChatBotWrapper from '@/components/ChatBotWrapper'
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
        <link rel="icon" href="/images/logos/Digimindglobal-removebg-preview.png" />
        <link rel="shortcut icon" href="/images/logos/Digimindglobal-removebg-preview.png" />
        <link rel="apple-touch-icon" href="/images/logos/Digimindglobal-removebg-preview.png" />
      </head>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.className
      )}>
        <Navbar />
        {children}
        <Footer />
        <ChatBotWrapper />
        <Analytics />
      </body>
    </html>
  )
}
