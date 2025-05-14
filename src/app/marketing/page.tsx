import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CookieConsent from './CookieConsent'
import ChatBot from '@/components/ChatBot'

const services = [
  {
    title: 'Marketing Cloud',
    description: 'Create personalized customer experiences with AI-powered marketing automation.',
    href: '/services/marketing-cloud',
  },
  {
    title: 'Data Cloud',
    description: 'Unify customer data across systems for a complete view of your customers.',
    href: '/services/data-cloud',
  },
  {
    title: 'AI & CRM Solutions',
    description: 'Leverage AI to automate processes and enhance customer engagement.',
    href: '/services/ai-crm',
  },
]

export default function MarketingPage() {
  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt="Banking and Healthcare Technology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Personalized Digital Experiences for Banking & Healthcare
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-200">
              Transforming customer engagement with Salesforce solutions. We help organizations
              deliver exceptional experiences through innovative technology.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/services">Explore Our Solutions</Link>
            </Button>
          </div>
        </section>

        {/* Services Overview */}
        <section className="container py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Core Services</h2>
            <p className="text-muted-foreground">
              Comprehensive Salesforce solutions tailored for your industry needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
              >
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <Button asChild variant="link" className="p-0">
                  <Link href={service.href}>Learn more →</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Signals */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-2xl font-semibold">
              Trusted by Leading Organizations
            </h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {/* Add client logos here */}
              <div className="flex items-center justify-center">
                <span className="text-muted-foreground">Client Logo 1</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-muted-foreground">Client Logo 2</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-muted-foreground">Client Logo 3</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-muted-foreground">Client Logo 4</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground">
            <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
            <p className="mb-8 text-lg">
              Let&apos;s discuss how we can help you achieve your digital transformation goals.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>

        <CookieConsent />
      </div>
      <ChatBot />
    </>
  )
} 