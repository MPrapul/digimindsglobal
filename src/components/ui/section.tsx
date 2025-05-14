import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Section({ 
  children, 
  className, 
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn("py-12 md:py-16 w-full", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
} 