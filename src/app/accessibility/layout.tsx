import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Our commitment to digital accessibility for all users',
}

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 