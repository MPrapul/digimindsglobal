'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-center">
        <div className="w-full max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logos/Digimindglobal-removebg-preview.png" 
              alt="Digimindsglobal Logo" 
              width={160} 
              height={45} 
              className="h-auto w-auto"
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/marketing/services" className="text-gray-700 hover:text-primary font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
              About Us
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary font-medium">
              Blog
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-primary font-medium">
              Careers
            </Link>
            <Link
              href="/marketing/contact"
              className="bg-[#444a7d] hover:bg-[#363c64] text-white px-6 py-2.5 rounded-md transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/marketing/services" 
              className="text-gray-700 hover:text-primary py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-primary py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/careers" 
              className="text-gray-700 hover:text-primary py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/marketing/contact"
              className="bg-[#444a7d] hover:bg-[#363c64] text-white px-6 py-2.5 rounded-md transition-colors inline-block w-fit font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 