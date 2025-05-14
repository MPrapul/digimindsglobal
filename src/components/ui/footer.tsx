'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="block">
              <Image 
                src="/images/logos/Digimindglobal-removebg-preview.png" 
                alt="Digimindsglobal Logo" 
                width={160} 
                height={45} 
                className="h-auto w-auto brightness-200"
              />
            </Link>
            <p className="mt-4 text-gray-400">
              We are a leading digital solutions company specializing in web design, digital marketing, and custom software development for businesses of all sizes.
            </p>
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
                <Link href="/training" className="text-gray-400 hover:text-white">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-white">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
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
                <Link href="/marketing/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">3001 Bishop Dr, Suite 300</p>
              <p className="mb-4">San Ramon, CA 94583</p>
              <p className="mb-2">
                <a href="tel:7327348282" className="hover:text-white">732-734-8282</a>
              </p>
              <p>
                <a href="mailto:contact@digimindsglobal.com" className="hover:text-white">contact@digimindsglobal.com</a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-emerald-300 text-sm"
                >
                  Thanks for subscribing! Check your email for updates.
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                  onSubmit={handleNewsletterSubmit}
                >
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 rounded-lg backdrop-blur-xl"
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <p className="text-red-400 text-sm">{error}</p>
                  {error.includes("already subscribed") && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      <Button
                        type="button"
                        onClick={() => {
                          window.location.href = "/marketing/contact#contact-form";
                        }}
                        size="sm"
                        variant="outline"
                        className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Us
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          setIsOpen(true);
                        }}
                        size="sm"
                        variant="outline"
                        className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Open Chatbot
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Digimindsglobal. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="text-gray-500 hover:text-white text-sm">
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 