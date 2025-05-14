import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedText } from '@/components/ui/animated-text'

const industries = [
  {
    title: 'Banking',
    description: 'Transform your banking operations with Salesforce solutions designed for the financial sector.',
    features: [
      'Personalized Customer Experience',
      'Digital Banking Solutions',
      'Compliance & Security',
      'Data Analytics & Insights',
    ],
    image: '/images/banking.jpg',
    href: '/industries/banking',
    color: 'from-[#0176D3] to-[#014486]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9-4 9 4m-9-4v20m-9-4h18" />
      </svg>
    )
  },
  {
    title: 'Healthcare',
    description: 'Enhance patient care and streamline healthcare operations with Salesforce healthcare solutions.',
    features: [
      'Patient Engagement',
      'Care Coordination',
      'HIPAA Compliance',
      'Healthcare Analytics',
    ],
    image: '/images/healthcare.jpg',
    href: '/industries/healthcare',
    color: 'from-[#1589EE] to-[#0B5CAB]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
]

export default function IndustriesPage() {
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
            text="Industry-Specific Solutions"
            className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl"
            type="heading"
          />
          <AnimatedText
            text="Tailored Salesforce solutions designed to meet the unique needs of your industry and drive business growth."
            className="mb-8 max-w-2xl text-lg text-gray-100"
            delay={0.2}
          />
          <Button asChild size="lg" className="bg-[#0176D3] hover:bg-[#014486] text-white shadow-lg transition-all duration-300">
            <Link href="/marketing/contact">Find Solutions for Your Industry</Link>
          </Button>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F4F6F9] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#032D60]">Specialized Industry Solutions</h2>
            <p className="text-[#444444] max-w-2xl mx-auto">
              We understand that each industry has unique challenges and requirements. Our specialized Salesforce solutions are designed to address these specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry) => (
              <div key={industry.title} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#032D60]/80 to-[#032D60]/60 opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                  <div className="flex items-center">
                    <div className={`bg-gradient-to-r ${industry.color} p-3 rounded-full text-white mr-4`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  </div>
                  <div>
                    <p className="text-gray-100 mb-6">{industry.description}</p>
                    <ul className="mb-6 space-y-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-white">
                          <span className="mr-2 text-[#91D2FF]">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`bg-gradient-to-r ${industry.color} hover:opacity-90 text-white shadow-lg transition-all duration-300 w-full`}>
                      <Link href={`/marketing/${industry.href}`}>Explore {industry.title} Solutions</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Industry Solutions */}
      <section className="py-20 bg-white relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F6F9] transform skew-x-12 translate-x-1/3 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#032D60]">Why Choose Our Industry Solutions</h2>
            <p className="text-[#444444] max-w-2xl mx-auto">
              Our industry-specific Salesforce solutions are built on years of experience and deep domain knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5]">
              <div className="w-12 h-12 bg-[#0176D3]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0176D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#032D60] text-center">Industry Expertise</h3>
              <p className="text-[#444444] text-center">
                Our team has deep domain knowledge and years of experience in implementing Salesforce solutions across various industries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5]">
              <div className="w-12 h-12 bg-[#0176D3]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0176D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#032D60] text-center">Customized Solutions</h3>
              <p className="text-[#444444] text-center">
                We tailor our solutions to meet the specific needs and challenges of your industry, ensuring maximum value and ROI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5]">
              <div className="w-12 h-12 bg-[#0176D3]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0176D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#032D60] text-center">Rapid Implementation</h3>
              <p className="text-[#444444] text-center">
                Our industry-specific templates and accelerators enable faster implementation and quicker time-to-value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-20 bg-[#F4F6F9] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#032D60]">Industry Insights</h2>
            <p className="text-[#444444] max-w-2xl mx-auto">
              Stay up-to-date with the latest trends and best practices in your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation in Banking",
                excerpt: "How leading banks are leveraging Salesforce to drive digital transformation and enhance customer experiences.",
                image: "/images/banking-insight.jpg"
              },
              {
                title: "Patient-Centric Healthcare",
                excerpt: "Discover how healthcare providers are using Salesforce to create more personalized and effective patient experiences.",
                image: "/images/healthcare-insight.jpg"
              },
              {
                title: "Future of Industry Solutions",
                excerpt: "Explore emerging trends and technologies that are shaping the future of industry-specific Salesforce solutions.",
                image: "/images/future-insight.jpg"
              }
            ].map((insight, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032D60]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 text-[#032D60]">{insight.title}</h3>
                  <p className="text-[#444444] mb-4">{insight.excerpt}</p>
                  <Link href="/blog" className="text-[#0176D3] font-medium hover:underline flex items-center justify-center">
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="rounded-xl bg-gradient-to-r from-[#032D60] via-[#054FB6] to-[#0A2D69] p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: 'url("/images/salesforce-pattern.png")',
                  backgroundSize: '200px',
                  backgroundRepeat: 'repeat'
                }}></div>
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Industry?</h2>
              <p className="mb-8 text-xl max-w-2xl mx-auto">
                Let&apos;s discuss how our industry-specific solutions can help you achieve your goals and drive business growth.
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