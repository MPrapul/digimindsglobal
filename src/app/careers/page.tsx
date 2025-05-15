import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers at DigiMindsGlobal',
  description: 'Join our team of digital marketing and web development experts and help transform digital experiences.',
  keywords: ['Digital Marketing Jobs', 'Web Development Careers', 'UI/UX Design Jobs', 'Tech Careers'],
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
const jobPostings: JobPosting[] = [];

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
              Be part of a team that&apos;s transforming how businesses connect with their customers. At DigiMindsGlobal, we&apos;re always looking for talented individuals who share our passion for digital marketing and web development excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join DigiMindsGlobal?</h2>
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

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're preparing new job opportunities. Please check back later or contact us directly if you're interested in joining our team.
              </p>
              <Link href="/contact" className="inline-flex items-center bg-[#0176D3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0165b8] transition-all">
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
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
            <Link href="/contact" className="inline-flex items-center bg-white text-[#0176D3] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg">
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
