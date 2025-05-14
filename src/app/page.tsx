'use client'

import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import type { ImageLoaderProps } from 'next/image'
import ChatBot from '@/components/ChatBot'

// Remove static imports and use only dynamic imports
const TrustSignalsComponent = dynamic(() => 
  import("@/components/ui/trust-signals").then(mod => mod.TrustSignals), 
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-40"></div>,
    ssr: false
  }
)

const AnimatedHeroComponent = dynamic(() => 
  import("@/components/ui/animated-hero").then(mod => mod.AnimatedHero), 
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-96"></div>,
    ssr: false
  }
)

// Image loading configuration
const imageLoader = ({ src, width, quality = 75 }: ImageLoaderProps): string => {
  return `${src}?w=${width}&q=${quality}`
}

// Add priority loading for above-the-fold images
const PRIORITY_IMAGES = ['/images/team-collaboration.jpg']

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("web");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Image loading handler
  const handleImageLoad = () => {
    setImagesLoaded(true);
  }

  // Handle manual tab selection
  const handleCategoryChange = (category: string, index: number) => {
    setActiveCategory(category);
    setActiveSlide(index);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col bg-white">
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96"></div>}>
          <AnimatedHeroComponent />
        </Suspense>

        {/* Services Showcase with Grid Layout - Completely Redesigned */}
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden isolation">
          {/* Enhanced background with better performance */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#032D60] to-[#16325c] z-0"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 z-0 pointer-events-none"></div>
          
          {/* Refined blur elements for visual interest */}
          <div 
            className="absolute top-0 left-0 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] 
            bg-gradient-to-r from-blue-600/15 to-cyan-400/15 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            aria-hidden="true"
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] 
            bg-gradient-to-l from-blue-600/15 to-cyan-400/15 rounded-full blur-2xl translate-x-1/2 translate-y-1/2 z-0 pointer-events-none"
            aria-hidden="true"
          ></div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-8 md:mb-12">
              <h2 className="mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">DigiMindsGlobal Services</h2>
              <p className="text-base md:text-lg leading-relaxed text-white/90 px-2 max-w-2xl mx-auto">
                Expert marketing and web solutions to grow your business
              </p>
            </div>
            
            {/* Category tabs - Enhanced with automatic slideshow indicator */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="flex overflow-x-auto md:overflow-visible pb-2 md:pb-0 bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20 no-scrollbar">
                <button
                  onClick={() => handleCategoryChange("web", 0)}
                  className={`whitespace-nowrap min-w-[100px] md:flex-1 py-2.5 px-3 md:px-4 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
                    activeCategory === "web"
                      ? "bg-white text-[#032D60] shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Web Design
                </button>
                <button
                  onClick={() => handleCategoryChange("lead", 1)}
                  className={`whitespace-nowrap min-w-[140px] md:flex-1 py-2.5 px-3 md:px-4 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
                    activeCategory === "lead"
                      ? "bg-white text-[#032D60] shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  B2B Lead Generation
                </button>
                <button
                  onClick={() => handleCategoryChange("software", 2)}
                  className={`whitespace-nowrap min-w-[170px] md:flex-1 py-2.5 px-3 md:px-4 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
                    activeCategory === "software"
                      ? "bg-white text-[#032D60] shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Software Development
                </button>
                <button
                  onClick={() => handleCategoryChange("ux", 3)}
                  className={`whitespace-nowrap min-w-[100px] md:flex-1 py-2.5 px-3 md:px-4 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
                    activeCategory === "ux"
                      ? "bg-white text-[#032D60] shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  UI/UX Design
                </button>
                <button
                  onClick={() => handleCategoryChange("social", 4)}
                  className={`whitespace-nowrap min-w-[100px] md:flex-1 py-2.5 px-3 md:px-4 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
                    activeCategory === "social"
                      ? "bg-white text-[#032D60] shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Social Media
                </button>
              </div>
              
              {/* Slideshow indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {["web", "lead", "software", "ux", "social"].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSlide === index 
                        ? 'bg-white w-6' 
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Web Design Services */}
            {activeCategory === "web" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Service Card - Responsive Design */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.384 1.651 1.459 1.651 2.906 0 1.805-1.456 3.269-3.15 3.269-1.696 0-3.152-1.464-3.152-3.269 0-1.447 1.134-2.522 1.651-2.906V1.875Z" />
                      <path d="M10.369 10.5H1.127c-.62 0-1.127.509-1.127 1.133v.617c0 .624.507 1.134 1.127 1.134h.094l1.312 7.925C2.546 22.295 3.413 23 4.42 23h3.884c.927 0 1.743-.588 2.039-1.47a2.236 2.236 0 0 0-.469-2.19 2.25 2.25 0 0 0-2.904-.375l-1.412-7.465h4.81Z" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0176D3] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M8 16l2-4 2 4"></path>
                        <path d="M16 16h.01"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Web Design</h3>
                    <p className="text-white/80 mb-6">Modern, responsive websites that boost your online presence and convert visitors into customers.</p>
                    <Link href="/marketing/services/web-design" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - E-commerce Websites */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25Z" />
                      <path d="M3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0176D3] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="8" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                        <path d="M2 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">E-commerce Websites</h3>
                    <p className="text-white/80 mb-6">Turn your website into a powerful sales channel with our custom e-commerce solutions.</p>
                    <Link href="/marketing/services/web-design" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - WordPress Development */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0176D3] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                        <path d="M2 2l7.586 7.586"></path>
                        <circle cx="11" cy="11" r="2"></circle>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">WordPress Development</h3>
                    <p className="text-white/80 mb-6">Harness the power of WordPress with custom themes and plugins tailored to your business needs.</p>
                    <Link href="/marketing/services/web-design" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* B2B Lead Generation Services */}
            {activeCategory === "lead" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Service Card - Lead Generation Campaigns */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#032D60] to-[#0176D3] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        <path d="M21 15l-2-2"></path>
                        <path d="M19 13v4h4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">B2B Lead Generation</h3>
                    <p className="text-white/80 mb-6">Attract high-quality business leads through targeted marketing campaigns and strategic outreach.</p>
                    <Link href="/marketing/services/lead-generation" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Social Media Management */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#032D60] to-[#0176D3] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Social Media Management</h3>
                    <p className="text-white/80 mb-6">Build brand awareness and engagement through strategic social media presence and content.</p>
                    <Link href="/marketing/services/social-media" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Content Marketing */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#032D60] to-[#0176D3] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <line x1="10" y1="9" x2="8" y2="9"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Content Marketing</h3>
                    <p className="text-white/80 mb-6">Create valuable content that attracts prospects and nurtures leads through the buyer's journey.</p>
                    <Link href="/marketing/services/lead-generation" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Data Cloud Services */}
            {activeCategory === "data" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Service Card - Data Cloud Implementation */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                      <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                      <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                      <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0176D3] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M2 15h10" />
                        <path d="M9 18l3-3-3-3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Data Cloud Implementation</h3>
                    <p className="text-white/80 mb-6">Unify, analyze, and activate your customer data across all touchpoints for personalized experiences at scale.</p>
                    <Link href="marketing/services/data-cloud/services/data-cloud-implementation" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Data Integration */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06Zm4.28 4.28a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0176D3] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                        <path d="M19 19H5V5h14v14z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Data Integration</h3>
                    <p className="text-white/80 mb-6">Seamlessly connect data sources across your organization to build a unified customer data platform.</p>
                    <Link href="/services/data-integration" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Analytics & Segmentation */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0176D3] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Analytics & Segmentation</h3>
                    <p className="text-white/80 mb-6">Create targeted audience segments based on real-time analytics and behavioral patterns.</p>
                    <Link href="/services/analytics-segmentation" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* AI Services */}
            {activeCategory === "ai" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Service Card - AI Marketing Automation */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.129 56.129 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.71 47.878 47.878 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.877 47.877 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 0 1 6 13.18v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 0 0 .551-1.608 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.668 2.25 2.25 0 0 0 2.12 0Z" />
                      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0176D3] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4H8" />
                        <rect width="16" height="12" x="4" y="8" rx="2" />
                        <path d="M20 21a8 8 0 1 0-16 0" />
                        <path d="M12 15v6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">AI Marketing Automation</h3>
                    <p className="text-white/80 mb-6">Leverage AI to automate marketing workflows, content generation, and campaign optimization.</p>
                    <Link href="/services/ai-marketing-automation" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Predictive Analytics */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.5a3 3 0 0 0 3 3h4.5a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-4.5Zm0 9.75a3 3 0 0 0-3 3v4.5a3 3 0 0 0 3 3h4.5a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-4.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0176D3] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="M7 12v5" />
                        <path d="M11 6v11" />
                        <path d="M15 10v7" />
                        <path d="M19 5v13" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
                    <p className="text-white/80 mb-6">Forecast customer behavior, identify trends, and anticipate needs using AI-powered predictive models.</p>
                    <Link href="/services/predictive-analytics" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Personalization Engine */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0176D3] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="5" />
                        <path d="M20 21a8 8 0 1 0-16 0" />
                        <path d="M12 15v6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Personalization Engine</h3>
                    <p className="text-white/80 mb-6">Deliver hyper-personalized content, recommendations, and experiences to every customer at scale.</p>
                    <Link href="/services/personalization-engine" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Software Development Services */}
            {activeCategory === "software" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Service Card - Custom Software Development */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#1589ee] to-[#0176D3] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Software Development</h3>
                    <p className="text-white/80 mb-6">Custom software solutions and mobile apps built with quality assurance and testing for reliable results.</p>
                    <Link href="/marketing/services/software-development" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Mobile App Development */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                      <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#1589ee] to-[#0176D3] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                        <path d="M12 18h.01"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Mobile App Development</h3>
                    <p className="text-white/80 mb-6">Create powerful, user-friendly mobile applications that extend your business reach and enhance engagement.</p>
                    <Link href="/marketing/services/software-development" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Quality Assurance Testing */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#1589ee] to-[#0176D3] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 7h-9"></path>
                        <path d="M14 17H5"></path>
                        <circle cx="17" cy="17" r="3"></circle>
                        <circle cx="7" cy="7" r="3"></circle>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Software Testing & QA</h3>
                    <p className="text-white/80 mb-6">Ensure your software meets the highest standards with our comprehensive testing and QA services.</p>
                    <Link href="/marketing/services/software-development" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* UX Design Services */}
            {activeCategory === "ux" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Service Card - User Experience Design */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path d="M9.97 2.28a1.5 1.5 0 0 1 1.06 0l9.5 3.5A1.5 1.5 0 0 1 21.5 7.16v9.68a1.5 1.5 0 0 1-.97 1.38l-9.5 3.5a1.5 1.5 0 0 1-1.06 0l-9.5-3.5a1.5 1.5 0 0 1-.97-1.38V7.16a1.5 1.5 0 0 1 .97-1.38l9.5-3.5ZM10.5 5.15 4.89 7.4l5.61 2.25 5.61-2.25L10.5 5.15Zm-7 5.17v5.34l7 2.58v-5.34l-7-2.58Zm9 7.92 7-2.58V10.32l-7 2.58v5.34Z" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#032D60] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 3a2.85 2.85 0 1 1 0 5.7"></path>
                        <path d="M10 3a2.85 2.85 0 1 1 0 5.7"></path>
                        <path d="M3 3a2.85 2.85 0 1 1 0 5.7"></path>
                        <path d="M17 16a2.85 2.85 0 1 1 0 5.7"></path>
                        <path d="M10 16a2.85 2.85 0 1 1 0 5.7"></path>
                        <path d="M3 16a2.85 2.85 0 1 1 0 5.7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">User Experience Design</h3>
                    <p className="text-white/80 mb-6">Create intuitive interfaces that enhance user satisfaction by improving usability and accessibility.</p>
                    <Link href="/marketing/services/ux-design" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Interface Design */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#032D60] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="21" x2="4" y2="14"></line>
                        <line x1="4" y1="10" x2="4" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="3"></line>
                        <line x1="20" y1="21" x2="20" y2="16"></line>
                        <line x1="20" y1="12" x2="20" y2="3"></line>
                        <line x1="1" y1="14" x2="7" y2="14"></line>
                        <line x1="9" y1="8" x2="15" y2="8"></line>
                        <line x1="17" y1="16" x2="23" y2="16"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Interface Design</h3>
                    <p className="text-white/80 mb-6">Create visually stunning and functional interfaces that engage users and align with your brand identity.</p>
                    <Link href="/marketing/services/ux-design" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Prototyping & Testing */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#032D60] to-[#1589ee] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Prototyping & Testing</h3>
                    <p className="text-white/80 mb-6">Validate design concepts with interactive prototypes and user testing to ensure your digital products succeed.</p>
                    <Link href="/marketing/services/ux-design" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Social Media Management Services */}
            {activeCategory === "social" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Service Card - Social Media Strategy */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Social Media Strategy</h3>
                    <p className="text-white/80 mb-6">Build a strategic social media plan to boost your brand's online presence and engagement.</p>
                    <Link href="/marketing/services/lead-generation" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Content Creation */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                        <path d="M2 2l7.586 7.586"></path>
                        <circle cx="11" cy="11" r="2"></circle>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Content Creation</h3>
                    <p className="text-white/80 mb-6">Develop engaging, high-quality content that resonates with your audience and drives engagement.</p>
                    <Link href="/marketing/services/lead-generation" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Service Card - Social Media Advertising */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                      <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white rounded-lg mb-5 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Social Media Ads</h3>
                    <p className="text-white/80 mb-6">Reach your target audience and drive conversions with targeted social media advertising campaigns.</p>
                    <Link href="/marketing/services/lead-generation" className="inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* View All Services Button */}
            <div className="mt-12 text-center">
              <Link href="/marketing/services" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 group">
                View All Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section with Enhanced Background */}
        <section className="relative py-24 overflow-hidden">
          {/* Enhanced layered background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Base background image with better opacity and blur */}
            <Image
              src="/images/office-bg.jpg"
              alt="Office Environment"
              fill
              className="object-cover opacity-10 scale-110 filter blur-[2px]"
              sizes="100vw"
              priority
            />
            
            {/* Refined gradient overlay with better color transitions */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#f8fbff]/95 to-white/90"></div>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
            
            {/* Accent color elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#0176D3]/5 to-transparent transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-[#0176D3]/5 to-transparent transform -translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#0176D3]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#1589ee]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 bg-white/5 backdrop-blur-lg p-2 rounded-2xl overflow-hidden border border-[#0176D3]/20 shadow-xl transition-all duration-300 hover:shadow-[#0176D3]/10 hover:shadow-2xl group">
                  <Image
                    src="/images/team-collaboration.jpg"
                    alt="Team Collaboration"
                    width={600}
                    height={400}
                    className={`w-full h-auto rounded-xl transform transition-transform duration-700 group-hover:scale-105 ${
                      imagesLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={PRIORITY_IMAGES.includes('/images/team-collaboration.jpg')}
                    onLoad={handleImageLoad}
                    loader={imageLoader}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEkKSQ7Oy0tLTstO0RBPUE0QTtBOz1FSUlFPU5VUVVOSkVJSUj/2wBDAR"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0176D3]/0 via-transparent to-[#0176D3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#032D60]/95 to-[#0176D3]/95 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-[#0176D3]/30 hover:shadow-[#0176D3]/20 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-4xl font-bold mb-6 text-white">About DigiMindsGlobal</h2>
                <p className="text-xl text-white mb-6 leading-relaxed">
                  We are a full-service digital agency dedicated to elevating your online presence and driving business growth through innovative solutions.
                </p>
                <p className="text-lg text-[#b4c8e1] mb-8 leading-relaxed">
                  At DigiMindsGlobal, we combine creativity with technical expertise to deliver exceptional web design, lead generation, software development, and UI/UX design services. Our team of professionals is committed to creating custom solutions that help businesses thrive in the digital landscape.
                </p>
                <Link href="/about" className="inline-flex items-center bg-white text-[#0176D3] px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 border border-transparent shadow-md hover:shadow-lg group">
                  Learn More About Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="mt-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Link href="/marketing/services/web-design" className="block">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-[#b4c8e1] hover:shadow-lg hover:border-[#0176D3]/30 transition-all duration-300 group h-full">
                    <div className="text-[#0176D3] text-4xl mb-4 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300">
                        <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#032D60] text-center mb-2 group-hover:text-[#0176D3] transition-colors duration-300">Web Design</h3>
                    <p className="text-gray-600 text-center">Modern, responsive websites that boost your online presence</p>
                  </div>
                </Link>

                <Link href="/marketing/services/digital-marketing" className="block">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-[#b4c8e1] hover:shadow-lg hover:border-[#0176D3]/30 transition-all duration-300 group h-full">
                    <div className="text-[#0176D3] text-4xl mb-4 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300">
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#032D60] text-center mb-2 group-hover:text-[#0176D3] transition-colors duration-300">Digital Marketing</h3>
                    <p className="text-gray-600 text-center">Strategic digital campaigns that drive traffic and increase conversions</p>
                  </div>
                </Link>

                <Link href="/marketing/services/social-media" className="block">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-[#b4c8e1] hover:shadow-lg hover:border-[#0176D3]/30 transition-all duration-300 group h-full">
                    <div className="text-[#0176D3] text-4xl mb-4 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300">
                        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#032D60] text-center mb-2 group-hover:text-[#0176D3] transition-colors duration-300">Social Media Management</h3>
                    <p className="text-gray-600 text-center">Build brand awareness and engagement through strategic social media presence</p>
                  </div>
                </Link>

                <Link href="/marketing/services/ux-design" className="block">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-[#b4c8e1] hover:shadow-lg hover:border-[#0176D3]/30 transition-all duration-300 group h-full">
                    <div className="text-[#0176D3] text-4xl mb-4 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300">
                        <path d="M9.97 2.28a1.5 1.5 0 0 1 1.06 0l9.5 3.5A1.5 1.5 0 0 1 21.5 7.16v9.68a1.5 1.5 0 0 1-.97 1.38l-9.5 3.5a1.5 1.5 0 0 1-1.06 0l-9.5-3.5a1.5 1.5 0 0 1-.97-1.38V7.16a1.5 1.5 0 0 1 .97-1.38l9.5-3.5ZM10.5 5.15 4.89 7.4l5.61 2.25 5.61-2.25L10.5 5.15Zm-7 5.17v5.34l7 2.58v-5.34l-7-2.58Zm9 7.92 7-2.58V10.32l-7 2.58v5.34Z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#032D60] text-center mb-2 group-hover:text-[#0176D3] transition-colors duration-300">UI/UX Design</h3>
                    <p className="text-gray-600 text-center">User-centered design that enhances experience and drives conversion</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="bg-gradient-to-b from-white to-[#f8fbff] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#333]">Industries We Serve</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Banking & Finance */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#0176D3]/30">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 text-[#444a7d]">
                    <path fill="currentColor" d="M12 3L4 9v12h16V9l-8-6zm0 2.25L17 9v10H7V9l5-3.75zM6 14h2v4H6v-4zm5 0h2v4h-2v-4zm5 0h2v4h-2v-4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#444a7d] text-center">Banking & Finance</h3>
              </div>

              {/* Food and Beverage */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#0176D3]/30">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 text-[#444a7d]">
                    <path fill="currentColor" d="M2 19h20l-2-8H4l-2 8zm18-10H4c0-4.42 3.58-8 8-8s8 3.58 8 8z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#444a7d] text-center">Food and Beverage</h3>
              </div>

              {/* E-Commerce */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#0176D3]/30">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 text-[#444a7d]">
                    <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21 4H5.5L4.5 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#444a7d] text-center">E-Commerce</h3>
              </div>

              {/* Real Estate */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#0176D3]/30">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 text-[#444a7d]">
                    <path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3 10.53v5.96l9 5.48 9-4.93v-5.96L12 16z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#444a7d] text-center">Real Estate</h3>
              </div>

              {/* Fashion & Lifestyle */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#0176D3]/30">
                <div className="w-20 h-20 mb-4 text-[#444a7d]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#444a7d] text-center">Fashion & Lifestyle</h3>
              </div>

              {/* Logistic Transport */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#0176D3]/30">
                <div className="w-20 h-20 mb-4 text-[#444a7d]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#444a7d] text-center">Logistic Transport</h3>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#0176D3]/30">
                <div className="w-20 h-20 mb-4 text-[#444a7d]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 01-1.06-1.06Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#444a7d] text-center">Education</h3>
              </div>

              {/* Healthcare */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#0176D3]/30">
                <div className="w-20 h-20 mb-4 text-[#444a7d]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#444a7d] text-center">Healthcare</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0176D3] to-[#032D60]"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Digital Experience?</h2>
              <p className="text-xl text-[#b4c8e1] mb-10 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s discuss how our Salesforce Marketing Cloud and Data Cloud expertise can help you achieve your business goals.
              </p>
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1589ee] to-white opacity-70 rounded-full blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link href="/marketing/contact" className="relative inline-flex items-center bg-white text-[#0176D3] hover:text-[#032D60] transition-colors px-8 py-4 rounded-full font-bold text-lg border border-transparent shadow-md hover:shadow-lg group-hover:shadow-xl">
                  Get Started Today
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals with Suspense */}
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-40"></div>}>
          <TrustSignalsComponent />
        </Suspense>
      </main>
      <ChatBot />
    </>
  );
}
