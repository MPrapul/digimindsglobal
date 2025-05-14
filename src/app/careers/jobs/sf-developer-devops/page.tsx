import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Salesforce Developer with DevOps - Red Hibbert Group',
  description: 'Join our team as a Salesforce Developer with DevOps expertise to help transform development workflows with CI/CD pipeline automation and GitLab.',
  keywords: ['Salesforce Developer', 'DevOps', 'CI/CD', 'GitLab', 'Salesforce Jobs', 'Salesforce DX'],
};

export default function SFDeveloperDevOpsPage() {
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
              Salesforce Developer with DevOps
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Remote (Dallas, TX preferred)
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
                Salesforce Solutions
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                1 Openings
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Position Details</h2>
                <div className="mb-6">
                  <p className="text-gray-700">
                    <strong>Title:</strong> Salesforce Developer with DevOps<br />
                    <strong>Type:</strong> Contract<br />
                    <strong>Salary:</strong> Competitive<br />
                    <strong>Openings:</strong> 1<br />
                    <strong>Location:</strong> Remote (Dallas, TX preferred)<br />
                    <strong>Posting Date:</strong> 05/15/2024
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Duties</h2>
                <p className="text-gray-700 mb-6">
                  We are seeking a Salesforce Developer with DevOps expertise to join our team. The ideal candidate will have strong Salesforce development experience and a deep understanding of DevOps processes, CI/CD pipeline automation, and GitLab. This role requires hands-on experience in building and optimizing deployment pipelines and ensuring seamless development and release cycles.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                <p className="text-gray-700 mb-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Develop and maintain Salesforce applications using Apex, Lightning Components, Visualforce, and other platform technologies.</li>
                    <li>Implement and manage CI/CD pipelines for Salesforce deployments using GitLab.</li>
                    <li>Automate release management, code quality checks, and version control strategies.</li>
                    <li>Collaborate with development, QA, and operations teams to ensure smooth deployment cycles.</li>
                    <li>Optimize Salesforce development workflows with DevOps best practices.</li>
                    <li>Troubleshoot and resolve deployment issues efficiently.</li>
                    <li>Maintain security, compliance, and governance best practices within the Salesforce ecosystem.</li>
                  </ul>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Required Skills & Experience</h3>
                <p className="text-gray-700 mb-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>8+ years of Salesforce development experience (Apex, Lightning, Visualforce, SOQL).</li>
                    <li>Strong expertise in Salesforce DevOps with hands-on experience in CI/CD pipeline setup and automation.</li>
                    <li>Proficiency with GitLab for version control, branching strategies, and automated deployments.</li>
                    <li>Experience with Salesforce DX, Copado, AutoRABIT, or other DevOps tools.</li>
                    <li>Knowledge of scripting languages like Python, Shell, or PowerShell for automation.</li>
                    <li>Strong understanding of metadata API, change sets, and Salesforce release management.</li>
                    <li>Salesforce certification is a must (e.g., Salesforce Platform Developer I/II, DevOps Specialist).</li>
                    <li>LinkedIn profile with certification details required.</li>
                  </ul>
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Preferred Qualifications</h3>
                <p className="text-gray-700 mb-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Experience with containerization (Docker, Kubernetes) and cloud platforms (AWS, Azure, or GCP).</li>
                    <li>Familiarity with APEX testing, LWC testing frameworks, and static code analysis tools.</li>
                    <li>Strong problem-solving skills and the ability to work independently in a remote environment.</li>
                  </ul>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Employee Referral Program</h2>
                <p className="text-gray-700 mb-6">
                Red Hibbert Group LLC, Employee Referral Program is a recruiting tool designed to encourage Red
                Hibbert employees to refer qualified candidates to fill open positions at Red Hibbert Group LLC.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility</h3>
                <p className="text-gray-700 mb-4">
                  Current employees of Red Hibbert are eligible to make referrals through this program. In case of multiple referrals, the first employee to submit the referral will be recognized as the referring employee. The candidate who is referred to the open job position should not be a current employee of the company.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Incentives Offered</h3>
                <p className="text-gray-700 mb-4">
                  If the new employee, who was hired through employee referral program, stays with the company for at least 90 days or more, then the referring employee receives a special bonus in the amount of $1000. There is no limit to the number of referrals an employee can make or the number of referrals bonuses an employee may receive.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Referral Procedure</h3>
                <p className="text-gray-700 mb-6">
                  Candidates can be referred to any open position by contacting the HR directly. If the candidate referred by the employee is offered and accepts the position, HR will contact the employee who made the referral directly. Upon meeting the requirements, the candidate must apply with the HR Department for the referral fees by providing the candidate&apos;s name.
                </p>

                <p className="text-gray-700 mb-6">
                  <strong>Note:</strong> Current Job Postings and Openings can be obtained by contacting HR directly or by going to the website https://redhibbert.com/ under the &quot;Careers&quot; section. Please contact the HR directly regarding any questions at hr@redhibbert.com.
                </p>

              </div>

              <div className="mt-10">
                <a 
                  href="mailto:hr@redhibbert.com?subject=Application for Salesforce Developer with DevOps Position&body=Dear Hiring Manager,%0D%0A%0D%0AI am writing to apply for the Salesforce Developer with DevOps position at Red Hibbert Group.%0D%0A%0D%0A[Please include your experience, why you&apos;re interested, and attach your resume]%0D%0A%0D%0AThank you for considering my application.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]"
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