import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedText } from '@/components/ui/animated-text'

const healthcareSolutions = [
  {
    title: 'Patient Engagement Platform',
    description: 'Connect with patients through personalized digital experiences that improve outcomes and satisfaction.',
    features: [
      'Patient Portal Integration',
      'Appointment Management',
      'Medication Reminders',
      'Health Education Resources',
    ],
    icon: '/images/patient-engagement.svg',
  },
  {
    title: 'Healthcare Provider CRM',
    description: 'Streamline provider operations and enhance patient relationships with our comprehensive CRM solution.',
    features: [
      'Provider Relationship Management',
      'Referral Tracking',
      'Care Coordination',
      'Provider Analytics',
    ],
    icon: '/images/provider-crm.svg',
  },
  {
    title: 'Healthcare Analytics',
    description: 'Transform healthcare data into actionable insights that improve clinical outcomes and operational efficiency.',
    features: [
      'Clinical Analytics',
      'Population Health Management',
      'Operational Dashboards',
      'Predictive Analytics',
    ],
    icon: '/images/healthcare-analytics.svg',
  },
]

const successMetrics = [
  { value: '32%', label: 'Increase in Patient Satisfaction' },
  { value: '45%', label: 'Reduction in Administrative Tasks' },
  { value: '28%', label: 'Improvement in Care Coordination' },
  { value: '3.5x', label: 'ROI on Digital Transformation' },
]

export default function HealthcarePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Animated Text */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#032D60] via-[#054FB6] to-[#0A2D69] z-0"></div>
        <div className="absolute inset-0 opacity-20 z-10" 
             style={{
               backgroundImage: 'url("/images/salesforce-pattern.png")',
               backgroundSize: '300px',
               backgroundRepeat: 'repeat'
             }}></div>
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText
            text="Healthcare Solutions"
            className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl"
            type="heading"
          />
          <AnimatedText
            text="Transform patient care with Salesforce solutions designed for the modern healthcare industry."
            className="mb-8 max-w-2xl text-lg text-gray-100"
            delay={0.2}
          />
          <Button asChild size="lg" className="bg-[#0176D3] hover:bg-[#014486] text-white shadow-lg transition-all duration-300">
            <Link href="/marketing/contact">Discover how we can transform your healthcare system</Link>
          </Button>
        </div>
      </section>

      {/* HIPAA Compliance Banner */}
      <section className="w-full bg-[#F4F6F9] py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="rounded-lg bg-white p-6 shadow-md border border-[#E5E5E5]">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0176D3]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0176D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#032D60]">HIPAA Compliant Solutions</h3>
                  <p className="text-sm text-[#444444]">Our healthcare solutions are designed with privacy and security at their core</p>
                </div>
              </div>
              <Button asChild variant="outline" className="border-[#0176D3] text-[#0176D3] hover:bg-[#0176D3] hover:text-white transition-colors duration-300">
                <Link href="">Learn About Our Compliance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Patient Profile Section */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#032D60]">Unified Patient Profiles</h2>
              <p className="mb-6 text-[#444444]">
                Create a complete view of each patient by integrating data from multiple sources, enabling personalized care and improved outcomes.
              </p>
              <ul className="mb-8 space-y-4">
                {[
                  'Comprehensive patient history in one place',
                  'Real-time updates across all departments',
                  'Secure sharing with authorized providers',
                  'Personalized care recommendations',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-[#0176D3]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-[#0176D3] hover:bg-[#014486] text-white shadow-md transition-all duration-300">
                <Link href="">Learn More About Unified Profiles</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/patient-profile.jpg"
                alt="Unified Patient Profile Dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032D60]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">360° Patient View</h3>
                <p className="text-white/90">Comprehensive insights for better care decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-[#F4F6F9] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#032D60]">Our Healthcare Solutions</h2>
            <p className="text-[#444444] max-w-2xl mx-auto">
              Comprehensive solutions designed to address the unique challenges of modern healthcare providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthcareSolutions.map((solution, index) => (
              <Card key={index} className="bg-white border border-[#E5E5E5] hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-4 h-16 w-16 bg-[#0176D3]/10 rounded-full flex items-center justify-center">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={32}
                      height={32}
                      className="text-[#0176D3]"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#032D60]">{solution.title}</CardTitle>
                  <CardDescription className="text-[#444444]">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[#444444]">
                        <span className="mr-2 text-[#0176D3]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-[#0176D3] text-[#0176D3] hover:bg-[#0176D3] hover:text-white transition-colors duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="rounded-xl bg-white shadow-lg border border-[#E5E5E5] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-[#032D60]">The Impact of Our Healthcare Solutions</h2>
                <p className="mb-8 text-[#444444]">
                  Our solutions have helped healthcare providers across the country improve patient care, streamline operations, and drive better outcomes.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-[#F4F6F9] rounded-lg">
                      <p className="text-3xl font-bold text-[#0176D3] mb-2">{metric.value}</p>
                      <p className="text-sm text-[#444444]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[400px]">
                <Image
                  src="/images/healthcare-success.jpg"
                  alt="Healthcare Success Story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#032D60]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <blockquote className="text-white text-lg italic mb-4">
                    &ldquo;The Salesforce solutions implemented by this team have transformed how we deliver care to our patients.&rdquo;
                  </blockquote>
                  <p className="text-white font-semibold">- Dr. Sarah Johnson, Chief Medical Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="rounded-xl bg-gradient-to-r from-[#032D60] via-[#054FB6] to-[#0A2D69] p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: 'url("/images/salesforce-pattern.png")',
                  backgroundSize: '200px',
                  backgroundRepeat: 'repeat'
                }}></div>
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Healthcare System?</h2>
              <p className="mb-8 text-xl max-w-2xl mx-auto">
                Let&apos;s discuss how our healthcare solutions can help you improve patient care and operational efficiency.
              </p>
              <Button asChild size="lg" className="bg-white text-[#032D60] hover:bg-gray-100 px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-300">
                <Link href="/marketing/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 