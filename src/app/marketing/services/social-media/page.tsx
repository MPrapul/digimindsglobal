'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SocialMediaPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#032D60]">Social Media Management</h1>
        <h2 className="text-2xl font-medium mb-8 text-[#0176D3]">
          Build brand awareness and engagement through strategic social media presence
        </h2>
        
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#0176D3]/10 to-white p-6 rounded-xl">
            <p className="text-lg mb-4">
              DigiMindsGlobal offers comprehensive social media management services to help businesses 
              establish a strong presence on social platforms, engage with their audience, and drive meaningful 
              results. Our expert team creates and implements customized strategies across all major platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-2 text-[#032D60]">Platform Expertise</h3>
                <p className="text-gray-700">Specialized knowledge of each social platform's unique features and audience</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-2 text-[#032D60]">Data-Driven Approach</h3>
                <p className="text-gray-700">Analytics-based strategies that deliver measurable results</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-2 text-[#032D60]">Engaging Content</h3>
                <p className="text-gray-700">Creative and compelling content that resonates with your target audience</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/services-hero.jpg" 
              alt="Social Media Strategy" 
              width={600} 
              height={400} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-4">Social Media Strategy</h3>
            <p className="text-gray-700 mb-4">
              Develop a comprehensive social media strategy that aligns with your business goals and connects with your target audience.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Platform selection and audience analysis</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Competitor research and benchmarking</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Content strategy and calendar planning</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Goal setting and KPI development</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/services-hero.jpg" 
              alt="Content Creation & Management" 
              width={600} 
              height={400} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Content Creation & Management</h3>
            <p className="text-gray-700 mb-4">
              Develop engaging, platform-specific content that resonates with your audience and drives engagement.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom content creation for each platform</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Visual content design (graphics, videos, animations)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Content calendar management</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Scheduling and automatic posting</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/services-hero.jpg" 
              alt="Social Media Advertising" 
              width={600} 
              height={400} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-4">Social Media Advertising</h3>
            <p className="text-gray-700 mb-4">
              Reach your target audience more effectively with strategic paid social media campaigns across platforms.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Platform-specific ad campaigns (Facebook, Instagram, LinkedIn, Twitter)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Audience targeting and segmentation</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ad creative development and testing</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Performance monitoring and budget optimization</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-20">
          <Separator className="mb-12 mt-4" />
          
          <h2 className="text-3xl font-bold mb-8 text-center text-[#032D60]">
            Ready to Improve Your Social Media Presence?
          </h2>
          
          <div className="text-center">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#0176D3] to-[#1589EE] hover:from-[#0B5CAB] hover:to-[#0176D3] shadow-md">
              <Link href="/marketing/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 