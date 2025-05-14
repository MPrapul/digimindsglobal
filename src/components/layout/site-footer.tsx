import Link from 'next/link'
import Image from 'next/image'
import { useState, FormEvent } from 'react'
import { Facebook, Instagram, X } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
}

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/digimindsglobal',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/digimindsglobal',
    icon: Instagram,
  },
  {
    name: 'X',
    href: 'https://x.com/digimindsglobal',
    icon: X,
  },
]

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setEmail("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1e2938] text-white w-full">
      <div className="container py-12 md:py-16 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="bg-[#444a7d]/20 hover:bg-[#444a7d]/40 p-2 rounded-full transition-colors"
                >
                  <link.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <div className="text-gray-400 space-y-2">
              <p>India: 6304647593 (Call and Whatsapp)</p>
              <p>Email: info@digimindsglobal.tech</p>
              <p>Office Address: Turabnagar, Amberpet, Hyderabad, India</p>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} DigiMindsGlobal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 