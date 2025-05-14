import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedText } from '@/components/ui/animated-text'

const solutions = [
  {
    title: 'Digital Banking Experience',
    description: 'Create seamless, personalized digital banking experiences that delight your customers.',
    features: [
      'Mobile Banking Solutions',
      'Online Account Management',
      'Digital Onboarding',
      'Multi-channel Support',
    ],
    image: '/images/digital-banking.jpg',
  },
  {
    title: 'Customer Engagement',
    description: 'Build stronger relationships with your customers through personalized engagement.',
    features: [
      'Customer Journey Mapping',
      'Personalized Marketing',
      'Proactive Support',
      'Customer Analytics',
    ],
    image: '/images/customer-engagement.jpg',
  },
  {
    title: 'Compliance & Security',
    description: 'Ensure regulatory compliance and maintain the highest security standards.',
    features: [
      'Regulatory Reporting',
      'Fraud Detection',
      'Data Protection',
      'Audit Trail',
    ],
    image: '/images/compliance-security.jpg',
  },
]

const caseStudies = [
  {
    title: "Personalized Marketing Campaign",
    description: "How a regional bank increased customer engagement by 45% through targeted, data-driven marketing campaigns.",
    metrics: [
      { value: "45%", label: "Increase in Engagement" },
      { value: "3.2x", label: "ROI" },
      { value: "28%", label: "New Account Growth" }
    ],
    image: "/images/banking-case-study-1.jpg"
  },
  {
    title: "Digital Transformation Journey",
    description: "A national bank's successful transition to digital-first banking, resulting in improved customer satisfaction and operational efficiency.",
    metrics: [
      { value: "68%", label: "Digital Adoption" },
      { value: "42%", label: "Cost Reduction" },
      { value: "4.8/5", label: "Customer Satisfaction" }
    ],
    image: "/images/banking-case-study-2.jpg"
  }
]

export default function BankingPage() {
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
            text="Banking Solutions"
            className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl"
            type="heading"
          />
          <AnimatedText
            text="Transform your banking operations with Salesforce solutions designed for the modern financial sector."
            className="mb-8 max-w-2xl text-lg text-gray-100"
            delay={0.2}
          />
          <Button asChild size="lg" className="bg-[#0176D3] hover:bg-[#014486] text-white shadow-lg transition-all duration-300">
            <Link href="/contact">Learn how we can help transform your bank</Link>
          </Button>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F4F6F9] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#032D60]">Why Banks Choose Our Solutions</h2>
            <p className="text-[#444444] max-w-2xl mx-auto">
              Our Salesforce solutions are specifically designed to address the unique challenges faced by modern financial institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5] text-center">
              <div className="w-12 h-12 bg-[#0176D3]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0176D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#032D60]">Increased Revenue</h3>
              <p className="text-[#444444]">
                Drive growth through personalized customer experiences and targeted cross-selling opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5] text-center">
              <div className="w-12 h-12 bg-[#0176D3]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0176D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#032D60]">Enhanced Security</h3>
              <p className="text-[#444444]">
                Protect customer data and maintain compliance with the highest security standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5] text-center">
              <div className="w-12 h-12 bg-[#0176D3]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0176D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#032D60]">Customer Satisfaction</h3>
              <p className="text-[#444444]">
                Deliver exceptional customer experiences across all channels and touchpoints.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5] text-center">
              <div className="w-12 h-12 bg-[#0176D3]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0176D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#032D60]">Data-Driven Insights</h3>
              <p className="text-[#444444]">
                Make informed decisions with real-time analytics and comprehensive reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid with Enhanced Cards */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#032D60]">Our Banking Solutions</h2>
            <p className="text-[#444444] max-w-2xl mx-auto">
              Comprehensive solutions designed to meet the unique needs of financial institutions in today&apos;s digital landscape
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Card key={solution.title} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-[#E5E5E5] text-center">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032D60]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#032D60]">{solution.title}</CardTitle>
                  <CardDescription className="text-sm text-[#444444]">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-[#444444]">
                        <span className="mr-2 text-[#0176D3]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-[#F4F6F9] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#032D60]">Success Stories</h2>
            <p className="text-[#444444] max-w-2xl mx-auto">
              See how our banking solutions have helped financial institutions achieve their goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#E5E5E5]">
                <div className="relative h-64 w-full">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032D60]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-gray-100">{study.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-2xl font-bold text-[#0176D3]">{metric.value}</p>
                        <p className="text-sm text-[#444444]">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Infographic Section */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#E5E5E5]">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-[#032D60]">The Digital Banking Journey</h2>
              <div className="relative">
                <div className="hidden md:block h-2 bg-[#F4F6F9] absolute top-1/2 left-0 right-0 transform -translate-y-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {[
                    { 
                      step: 1, 
                      title: "Assess", 
                      description: "Evaluate your current banking systems and identify opportunities for improvement.",
                      icon: "🔍"
                    },
                    { 
                      step: 2, 
                      title: "Transform", 
                      description: "Implement Salesforce solutions tailored to your specific banking needs.",
                      icon: "🚀"
                    },
                    { 
                      step: 3, 
                      title: "Optimize", 
                      description: "Continuously refine your digital banking experience based on data and feedback.",
                      icon: "📈"
                    },
                    { 
                      step: 4, 
                      title: "Scale", 
                      description: "Expand your digital banking capabilities to meet growing customer demands.",
                      icon: "🌐"
                    }
                  ].map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-[#0176D3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <span className="text-xl">{step.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-center text-[#032D60]">{step.title}</h3>
                      <p className="text-[#444444] text-center">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
              <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Banking Operations?</h2>
              <p className="mb-8 text-xl max-w-2xl mx-auto">
                Let&apos;s discuss how our banking solutions can help you achieve your goals and deliver exceptional customer experiences.
              </p>
              <Button asChild size="lg" className="bg-white text-[#032D60] hover:bg-gray-100 px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-300">
                <Link href="/contact">Learn how we can help transform your bank</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 