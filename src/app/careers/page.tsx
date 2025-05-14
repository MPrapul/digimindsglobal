import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers at Red Hibbert Group',
  description: 'Join our team of Salesforce experts and help transform digital experiences for Banking and Healthcare industries.',
  keywords: ['Salesforce Jobs', 'Marketing Cloud Careers', 'Salesforce Consulting Jobs', 'Tech Careers'],
};

interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  openings: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
  visaSponsorship?: string;
}

// Sample job data
const jobPostings: JobPosting[] = [
  {
    id: "sfmc-dev-remote",
    title: "Salesforce Marketing Cloud Developer",
    location: "Remote (US)",
    type: "Full-time",
    department: "Engineering",
    openings: 1,
    description: "We are looking for a skilled Salesforce Marketing Cloud Developer to join our growing team. In this role, you will design, build, and implement solutions using Salesforce Marketing Cloud to help our clients achieve their marketing goals.",
    responsibilities: [
      "Create, test and deploy Marketing Cloud campaigns",
      "Lead technical implementation of cross-channel campaigns in Marketing Cloud",
      "Write AMPscript, SQL, and HTML/CSS code to support marketing campaigns",
      "Build custom solutions within Salesforce Marketing Cloud",
      "Set up complex journeys in Journey Builder"
    ],
    requirements: [
      "6 years of experience as a Marketing Cloud Developer or similar role",
      "Strong knowledge of AMPscript, SQL, HTML, CSS, and JavaScript",
      "Experience with Journey Builder, Automation Studio, and Content Builder",
      "Familiarity with API integrations and data extensions",
      "Salesforce Marketing Cloud Email Specialist certification preferred"
    ],
    visaSponsorship: "Available (OPT, H1B, GC, TN & USC)"
  },
  {
    id: "onestream-tech-consultant",
    title: "OneStream Technical Consultant",
    location: "Remote (US)",
    type: "Full-time",
    department: "Finance Solutions",
    openings: 3,
    description: "We are seeking a talented OneStream Technical Consultant to join our growing team. In this role, you'll help design and implement OneStream solutions that will transform our clients' financial consolidation, planning, and reporting processes.",
    responsibilities: [
      "Building metadata, business rules, forms, and designing cube views",
      "Implementing workflow solutions and performing data reconciliation",
      "Building custom rules and reports to meet specific client requirements",
      "Supporting Finance business processes, specifically around close, consolidation, and Financial Planning and Analysis",
      "Working with programming in VB.Net and/or Python and RDBMS systems such as SQL Server",
      "Implementing cloud-based SaaS and PaaS solutions",
      "Managing multiple task assignments and working independently",
      "Developing end-to-end implementations in OneStream"
    ],
    requirements: [
      "6 years of relevant OneStream solution implementation experience",
      "Experience in building metadata, business rules, forms, and designing cube views",
      "Understanding of Finance business processes, particularly close and consolidation",
      "Experience with programming in VB.Net and/or Python and knowledge of SQL Server",
      "Understanding of cloud-based SaaS and PaaS offerings",
      "Ability to create business rules, custom consolidations, and intercompany eliminations",
      "Experience preparing documentation, training materials, and administration guides"
    ],
    visaSponsorship: "Available (OPT, H1B, GC, TN & USC)"
  },

  {
    id: "bi-developer",
    title: "Business Intelligence Developer",
    location: "Remote (US)",
    type: "Full-time",
    department: "Data Analytics",
    openings: 3,
    description: "Work with Data warehousing – Business Intelligence Analytics projects as a Data Analyst, Data Mapper, development of reports and design of Data visualization & Dashboards.",
    responsibilities: [],
    requirements: []
  },
  {
    id: "sf-business-analyst",
    title: "Salesforce Business Analyst/Product Owner",
    location: "Remote (US)",
    type: "Full-time",
    department: "Salesforce Solutions",
    openings: 3,
    description: "Implement Salesforce and support managing services engagements with a focus on Health Cloud vertical. Define the CRM product roadmap with SMEs and client stakeholders, deploying the solution to end users leveraging Salesforce Health Cloud Patient Services.",
    responsibilities: [],
    requirements: []
  },
  {
    id: "sf-developer-devops",
    title: "Salesforce Developer with DevOps",
    location: "Remote (Dallas, TX preferred)",
    type: "Contract",
    department: "Salesforce Solutions",
    openings: 1,
    description: "We are seeking a Salesforce Developer with DevOps expertise to join our team. The ideal candidate will have strong Salesforce development experience and a deep understanding of DevOps processes, CI/CD pipeline automation, and GitLab.",
    responsibilities: [
      "Develop and maintain Salesforce applications using Apex, Lightning Components, Visualforce, and other platform technologies",
      "Implement and manage CI/CD pipelines for Salesforce deployments using GitLab",
      "Automate release management, code quality checks, and version control strategies",
      "Collaborate with development, QA, and operations teams to ensure smooth deployment cycles",
      "Optimize Salesforce development workflows with DevOps best practices",
      "Troubleshoot and resolve deployment issues efficiently",
      "Maintain security, compliance, and governance best practices within the Salesforce ecosystem"
    ],
    requirements: [
      "8+ years of Salesforce development experience (Apex, Lightning, Visualforce, SOQL)",
      "Strong expertise in Salesforce DevOps with hands-on experience in CI/CD pipeline setup and automation",
      "Proficiency with GitLab for version control, branching strategies, and automated deployments",
      "Experience with Salesforce DX, Copado, AutoRABIT, or other DevOps tools",
      "Knowledge of scripting languages like Python, Shell, or PowerShell for automation",
      "Strong understanding of metadata API, change sets, and Salesforce release management",
      "Salesforce certification is a must (e.g., Salesforce Platform Developer I/II, DevOps Specialist)",
      "LinkedIn profile with certification details required"
    ],
    visaSponsorship: "Available (OPT, H1B, GC, TN & USC)"
  }
];

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0176D3] to-[#1589EE] py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Join Our Team of Innovators
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl">
              Be part of a team that&apos;s transforming how businesses connect with their customers. At Red Hibbert Group, we&apos;re always looking for talented individuals who share our passion for Salesforce excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Red Hibbert Group?</h2>
            <p className="text-lg text-gray-600">We offer more than just a job – we offer a career with growth opportunities, challenging projects, and a supportive team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0176D3]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth & Development</h3>
              <p className="text-gray-600">We invest in your growth with continuous learning opportunities, certification support, and career advancement paths.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0176D3]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">Work with a diverse team of experts who are passionate about delivering exceptional solutions for our clients.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0176D3]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">We believe in balanced lives with flexible work arrangements, competitive benefits, and a supportive environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600">Explore our open positions and find where your skills and passion fit within our team.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {jobPostings.map((job) => (
              <details 
                key={job.id}
                className="group mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-all"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="inline-flex items-center text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        {job.openings} Openings
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0176D3] transform transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  
                  {job.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {job.requirements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {job.requirements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {job.visaSponsorship && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Visa Sponsorship:</h4>
                      <p className="text-blue-700 font-medium">{job.visaSponsorship}</p>
                    </div>
                  )}
                  
                  {job.id === "sfmc-dev-remote" ? (
                    <Link 
                      href="/careers/jobs/sfmc-developer"
                      className="inline-flex items-center bg-[#0176D3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0165b8] transition-all"
                    >
                      View Full Job Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  ) : job.id === "onestream-tech-consultant" ? (
                    <Link 
                      href="/careers/jobs/onestream-consultant"
                      className="inline-flex items-center bg-[#0176D3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0165b8] transition-all"
                    >
                      View Full Job Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  ) : job.id === "sap-tech-architect" ? (
                    <Link 
                      href="/careers/jobs/sap-tech-architect"
                      className="inline-flex items-center bg-[#0176D3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0165b8] transition-all"
                    >
                      View Full Job Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  ) : job.id === "bi-developer" ? (
                    <Link 
                      href="/careers/jobs/bi-developer"
                      className="inline-flex items-center bg-[#0176D3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0165b8] transition-all"
                    >
                      View Full Job Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  ) : job.id === "sf-business-analyst" ? (
                    <Link 
                      href="/careers/jobs/sf-business-analyst"
                      className="inline-flex items-center bg-[#0176D3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0165b8] transition-all"
                    >
                      View Full Job Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  ) : job.id === "sf-developer-devops" ? (
                    <Link 
                      href="/careers/jobs/sf-developer-devops"
                      className="inline-flex items-center bg-[#0176D3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0165b8] transition-all"
                    >
                      View Full Job Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  ) : (
                    <Link 
                      href={`/careers/apply?job=${job.id}`}
                      className="inline-flex items-center bg-[#0176D3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0165b8] transition-all"
                    >
                      Apply Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1589EE] to-[#5EB9FE] opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don&apos;t See the Right Fit?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We&apos;re always looking for talented individuals to join our team. Even if you don&apos;t see a position that matches your skills, we&apos;d love to hear from you.
            </p>
            <Link href="/marketing/contact" className="inline-flex items-center bg-white text-[#0176D3] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 
