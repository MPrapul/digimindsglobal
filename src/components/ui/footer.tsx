'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Facebook, Instagram, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalChatState } from "@/lib/chat-state";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { setIsOpen } = useGlobalChatState();

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Instead of sending to a database, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting newsletter:", error);
      setError(error instanceof Error ? error.message : "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1e2938] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image 
                src="/images/logos/Digimindglobal-removebg-preview.png" 
                alt="DigiMindsGlobal Logo" 
                width={180} 
                height={50} 
                className="h-auto w-auto brightness-200"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with innovative digital strategies.
            </p>
            <div className="flex space-x-4">
              {/* Styled social media icons */}
              <a 
                href="https://facebook.com/digimindsglobal" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="bg-[#444a7d]/20 hover:bg-[#444a7d]/40 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://instagram.com/digimindsglobal" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="bg-[#444a7d]/20 hover:bg-[#444a7d]/40 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://x.com/digimindsglobal" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (Twitter)"
                className="bg-[#444a7d]/20 hover:bg-[#444a7d]/40 p-2 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="text-gray-400 space-y-2">
              <p>India: 6304647593 (Call and Whatsapp)</p>
              <p>Email: info@digimindsglobal.tech</p>
              <p>Office Address: Turabnagar, Amberpet, Hyderabad, India</p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full rounded-lg px-4 py-3 bg-[#1a232e] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#444a7d]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
              {success && (
                <p className="text-green-500 mt-2">Thank you for subscribing!</p>
              )}
              {error && (
                <p className="text-red-500 mt-2">{error}</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DigiMindsGlobal. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 