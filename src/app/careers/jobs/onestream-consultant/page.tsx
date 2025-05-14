import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OneStream Technical Consultant - Red Hibbert Group',
  description: 'Apply for our OneStream Technical Consultant position and join our team of experts.',
  keywords: ['OneStream Technical Consultant', 'Finance Technology', 'OneStream Jobs', 'Finance Consultant'],
};

export default function OneStreamConsultantJobPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0176D3] to-[#1589EE] py-16">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/careers" 
            className="inline-flex items-center text-white hover:text-white/80 mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Careers
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              OneStream Technical Consultant
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Remote (US)
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Full-time
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
                Finance Solutions
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                3 Openings
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 mb-6">
                  We are seeking a talented OneStream Technical Consultant to join our growing team. In this role, you&apos;ll help design and implement OneStream solutions that will transform our clients&apos; financial consolidation, planning, and reporting processes.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Responsibilities:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Building metadata, business rules, forms, and designing cube views</li>
                    <li>Implementing workflow solutions and performing data reconciliation</li>
                    <li>Building custom rules and reports to meet specific client requirements</li>
                    <li>Supporting Finance business processes, specifically around close, consolidation, and Financial Planning and Analysis</li>
                    <li>Working with programming in VB.Net and/or Python and RDBMS systems such as SQL Server</li>
                    <li>Implementing cloud-based SaaS and PaaS solutions</li>
                    <li>Managing multiple task assignments and working independently</li>
                    <li>Developing end-to-end implementations in OneStream</li>
                    <li>Creating complex workflow solutions to address our clients&apos; specific requirements</li>
                    <li>Troubleshooting and resolving implementation issues</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>6 years of relevant OneStream solution implementation experience</li>
                    <li>Experience in building metadata, business rules, forms, and designing cube views</li>
                    <li>Understanding of Finance business processes, particularly close and consolidation</li>
                    <li>Experience with programming in VB.Net and/or Python and knowledge of SQL Server</li>
                    <li>Understanding of cloud-based SaaS and PaaS offerings</li>
                    <li>Ability to create business rules, custom consolidations, and intercompany eliminations</li>
                    <li>Experience preparing documentation, training materials, and administration guides</li>
                    <li>Strong problem-solving skills and attention to detail</li>
                    <li>Excellent communication and collaboration skills</li>
                    <li>Bachelor&apos;s degree in Finance, Accounting, Computer Science, or related field (or equivalent experience)</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Offer:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Competitive salary and benefits package</li>
                    <li>Remote work flexibility</li>
                    <li>Professional development opportunities</li>
                    <li>Collaborative and innovative work environment</li>
                    <li>Opportunity to work with leading brands in the Banking and Finance industries</li>
                    <li>Training and certification support</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">About Red Hibbert Group:</h3>
                  <p className="text-gray-700">
                    Red Hibbert Group is a leading consultancy specializing in Salesforce and Financial Technology solutions for Banking and Healthcare industries. We help organizations leverage modern technologies to create streamlined business processes, drive efficiency, and achieve business growth.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="mailto:hr@redhibbert.com?subject=Application for OneStream Technical Consultant Position&body=Dear Hiring Manager,%0D%0A%0D%0AI am writing to apply for the OneStream Technical Consultant position at Red Hibbert Group.%0D%0A%0D%0A[Please include your experience, why you&apos;re interested, and attach your resume]%0D%0A%0D%0AThank you for considering my application.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]"
                  className="inline-flex items-center bg-[#0176D3] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#0165b8] transition-all"
                >
                  Apply Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/careers" 
                className="inline-flex items-center text-[#0176D3] hover:text-[#0165b8]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to All Openings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 