'use client'

import { useState, ChangeEvent, FormEvent, useEffect, Suspense, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Send, User, ArrowRight, CheckCircle2, Calendar, MessageSquare, Search, ChevronsUpDown, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { sendContactConfirmationEmail, sendNewsletterWelcomeEmail } from '@/lib/resend'
import { useGlobalChatState } from '@/lib/chat-state'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [newsletterError, setNewsletterError] = useState('')
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)
  const { setIsOpen } = useGlobalChatState()
  const [smsFormData, setSmsFormData] = useState({
    phone: '',
    countryCode: '+1'
  })
  const [isSmsSubmitting, setIsSmsSubmitting] = useState(false)
  const [smsSuccess, setSmsSuccess] = useState(false)
  const [smsError, setSmsError] = useState('')
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isPhoneValid, setIsPhoneValid] = useState(true)
  const [phoneError, setPhoneError] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [showTermsWarning, setShowTermsWarning] = useState(false)
  const [shakeWarning, setShakeWarning] = useState(false)

  // Add country codes data
  const countryCodes = [
    { code: '+1', country: '🇺🇸 United States' },
    { code: '+44', country: '🇬🇧 United Kingdom' },
    { code: '+91', country: '🇮🇳 India' },
    { code: '+61', country: '🇦🇺 Australia' },
    { code: '+86', country: '🇨🇳 China' },
    { code: '+81', country: '🇯🇵 Japan' },
    { code: '+49', country: '🇩🇪 Germany' },
    { code: '+33', country: '🇫🇷 France' },
    { code: '+39', country: '🇮🇹 Italy' },
    { code: '+34', country: '🇪🇸 Spain' },
    { code: '+7', country: '🇷🇺 Russia' },
    { code: '+82', country: '🇰🇷 South Korea' },
    { code: '+55', country: '🇧🇷 Brazil' },
    { code: '+52', country: '🇲🇽 Mexico' },
    { code: '+971', country: '🇦🇪 UAE' },
    { code: '+65', country: '🇸🇬 Singapore' },
    { code: '+31', country: '🇳🇱 Netherlands' },
    { code: '+48', country: '🇵🇱 Poland' },
    { code: '+46', country: '🇸🇪 Sweden' },
    { code: '+41', country: '🇨🇭 Switzerland' }
  ]

  const filteredCountries = searchQuery
    ? countryCodes.filter(country => 
        country.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.includes(searchQuery)
      )
    : countryCodes

  useEffect(() => {
    // Check for URL parameters and pre-fill the form
    const name = searchParams.get('name')
    const email = searchParams.get('email')
    const message = searchParams.get('message')
    const source = searchParams.get('source')

    if (source === 'chatbot' && (name || email || message)) {
      setFormData(prev => ({
        ...prev,
        name: name || prev.name,
        email: email || prev.email,
        message: message || prev.message
      }))
    }
  }, [searchParams])

  // Add click outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
        setSearchQuery('')
      }
    }

    // Add event listener when dropdown is open
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Submit to Supabase
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          status: 'pending',
          is_read: false
        })

      if (submitError) {
        console.error('Supabase error:', submitError)
        throw new Error(submitError.message)
      }

      // Send confirmation email
      const { success: emailSuccess, error: emailError } = await sendContactConfirmationEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })

      if (!emailSuccess && emailError) {
        console.warn('Email sending error:', emailError)
        // Continue with success even if email fails
      }

      setIsSuccess(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.')
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsNewsletterSubmitting(true)
    setNewsletterError('')

    try {
      // Submit to Supabase
      const { error: submitError } = await supabase
        .from('newsletter_subscriptions')
        .insert([
          {
            email: newsletterEmail,
            is_verified: false,
            verification_token: crypto.randomUUID(),
            subscribed_at: new Date().toISOString()
          }
        ])

      if (submitError) {
        // Check if it's a duplicate email error
        if (submitError.code === '23505') {
          throw new Error(
            `You're already subscribed to our newsletter! If you need assistance, try our chatbot or send us a message through the contact form above.`
          )
        }
        console.error('Newsletter subscription error:', submitError)
        throw new Error('Failed to subscribe. Please try again.')
      }

      // Send welcome email
      const { success: emailSuccess, error: emailError } = await sendNewsletterWelcomeEmail({
        email: newsletterEmail
      })

      if (!emailSuccess && emailError) {
        console.warn('Newsletter email sending error:', emailError)
        // Continue with success even if email fails
      }

      setNewsletterSuccess(true)
      setNewsletterEmail('')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setNewsletterSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting newsletter:', error)
      setNewsletterError(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.')
      setNewsletterSuccess(false)
    } finally {
      setIsNewsletterSubmitting(false)
    }
  }

  // Add phone validation rules for different countries
  const phoneValidationRules = {
    '+1': { minLength: 10, maxLength: 10, label: 'US/Canada' },
    '+44': { minLength: 10, maxLength: 10, label: 'UK' },
    '+91': { minLength: 10, maxLength: 10, label: 'India' },
    '+61': { minLength: 9, maxLength: 9, label: 'Australia' },
    '+86': { minLength: 11, maxLength: 11, label: 'China' },
    // Add more country rules as needed
  }

  const validatePhone = (value: string) => {
    const cleanNumber = value.replace(/\D/g, '')
    const countryRule = phoneValidationRules[smsFormData.countryCode as keyof typeof phoneValidationRules]
    
    if (!countryRule) {
      // For countries without specific rules, use default validation
      if (cleanNumber.length < 8) {
        setPhoneError('Phone number is too short')
        setIsPhoneValid(false)
        return false
      }
    } else {
      // Apply country-specific validation
      if (cleanNumber.length !== countryRule.minLength) {
        setPhoneError(`Please enter ${countryRule.minLength} digits for ${countryRule.label} numbers`)
        setIsPhoneValid(false)
        return false
      }
    }

    setPhoneError('')
    setIsPhoneValid(true)
    return true
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    // Only allow numbers, spaces, and common phone number characters
    const sanitizedValue = value.replace(/[^\d\s()\-+]/g, '')
    setSmsFormData(prev => ({
      ...prev,
      phone: sanitizedValue
    }))
    validatePhone(sanitizedValue)
  }

  const handleSmsSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Show both warnings if form is submitted without input
    let hasErrors = false

    // Always validate phone and show error if invalid
    if (!validatePhone(smsFormData.phone)) {
      hasErrors = true
    }

    // Always check terms and show warning if not accepted
    if (!termsAccepted) {
      setShowTermsWarning(true)
      setShakeWarning(true)
      // Reset shake animation after it completes
      setTimeout(() => setShakeWarning(false), 500)
      hasErrors = true
    }

    // Return if there are any errors
    if (hasErrors) {
      return
    }

    setIsSmsSubmitting(true)
    setSmsError('')

    try {
      // Temporarily comment out Supabase connection for testing
      /* const { error: submitError } = await supabase
        .from('sms_subscriptions')
        .insert({
          phone: `${smsFormData.countryCode}${smsFormData.phone.replace(/\D/g, '')}`,
          is_verified: false,
          verification_token: crypto.randomUUID(),
          subscribed_at: new Date().toISOString()
        })

      if (submitError) {
        if (submitError.code === '23505') {
          throw new Error('This phone number is already subscribed to SMS updates.')
        }
        throw new Error('Failed to subscribe. Please try again.')
      } */

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))

      setSmsSuccess(true)
      setSmsFormData({
        phone: '',
        countryCode: '+1'
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSmsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting SMS subscription:', error)
      setSmsError(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.')
      setSmsSuccess(false)
    } finally {
      setIsSmsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative mx-auto flex min-h-[500px] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white backdrop-blur-xl">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Welcome to Red Hibbert Group
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl bg-clip-text">
              Let&apos;s Connect
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300/90 leading-relaxed">
              Transform your business with our expert Salesforce solutions. We&apos;re here to help you succeed and drive your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button variant="default" size="lg" className="group bg-white text-[#0f172a] hover:bg-gray-100 hover:scale-105 transform transition-all duration-200">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg" className="group border-white/20 bg-white/5 text-white hover:bg-white/10 hover:scale-105 transform transition-all duration-200 backdrop-blur-xl">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Contact Form */}
      <section className="container relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl p-8 text-center border border-gray-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50"
                >
                  <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-[#0f172a] mb-2"
                >
                  Thank You!
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-600 mb-6"
                >
                  We have received your message and will get back to you shortly.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button 
                    onClick={() => setIsSuccess(false)} 
                    className="bg-[#0f172a] hover:bg-[#1e293b] hover:scale-105 transform transition-all duration-200"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <Card className="border border-gray-100 shadow-2xl backdrop-blur-xl bg-white/80">
                <CardHeader className="space-y-4 text-center px-6 pt-8 pb-6 border-b border-gray-100">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-br from-[#0f172a] to-[#1e293b] bg-clip-text text-transparent">Get in Touch</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    We&apos;re excited to hear from you. Fill out the form below and we&apos;ll get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 py-8">
                  <form id="contact-form" className="space-y-8" onSubmit={handleSubmit}>
                    {error && (
                      <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">{error}</div>
                    )}
                    <div className="grid gap-6 md:grid-cols-1">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <User className="h-4 w-4 text-[#0f172a]" />
                          Name
                        </Label>
                        <Input 
                          id="name" 
                          placeholder="John Doe" 
                          className="border border-gray-200 bg-white/50 transition-all duration-200 focus:bg-white focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/10" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Mail className="h-4 w-4 text-[#0f172a]" />
                        Email
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="border border-gray-200 bg-white/50 transition-all duration-200 focus:bg-white focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/10" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Send className="h-4 w-4 text-[#0f172a]" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your needs..."
                        className="min-h-[150px] border border-gray-200 bg-white/50 transition-all duration-200 focus:bg-white focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/10"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="group w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-lg font-semibold hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-[1.02]" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info */}
      <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <motion.div 
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-gray-100"
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 transform bg-gradient-to-br from-[#0f172a] to-[#1e293b] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-4 ring-4 ring-blue-50/50 transition-all duration-200 group-hover:bg-blue-100">
                  <Phone className="h-6 w-6 text-[#0f172a]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0f172a]">Phone</h3>
                <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm</p>
                <a href="tel:+1 732-734-8282" className="text-[#0f172a] hover:underline font-medium">
                  +1 732-734-8282
                </a>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-gray-100"
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 transform bg-gradient-to-br from-[#0f172a] to-[#1e293b] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-4 ring-4 ring-blue-50/50 transition-all duration-200 group-hover:bg-blue-100">
                  <Mail className="h-6 w-6 text-[#0f172a]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0f172a]">Email</h3>
                <p className="text-gray-600 mb-2">Our friendly team is here to help.</p>
                <a href="mailto:contact@redhibbert.com" className="text-[#0f172a] hover:underline font-medium">
                  contact@redhibbert.com
                </a>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-gray-100"
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 transform bg-gradient-to-br from-[#0f172a] to-[#1e293b] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-4 ring-4 ring-blue-50/50 transition-all duration-200 group-hover:bg-blue-100">
                  <MapPin className="h-6 w-6 text-[#0f172a]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0f172a]">Office</h3>
                <p className="text-gray-600 mb-2">Come say hello at our office.</p>
                <p className="text-[#0f172a] font-medium">
                3001 Bishop Dr, Suite 300 San Ramon, CA 94583
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SMS Updates Section */}
      <section className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            {smsSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl p-8 text-center border border-gray-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50"
                >
                  <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-[#0f172a] mb-2"
                >
                  Successfully Subscribed!
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-600 mb-6"
                >
                  You will receive a verification message shortly to confirm your subscription.
                </motion.p>
              </motion.div>
            ) : (
              <Card className="border-gray-100 shadow-2xl">
                <CardHeader className="space-y-1 text-center">
                  <CardTitle className="text-3xl font-bold">Sign Up for SMS Updates</CardTitle>
                  <CardDescription className="text-lg">
                    Stay updated with our exclusive SMS notifications directly to your phone.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSmsSubmit} className="space-y-6" noValidate>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        Phone Number {!isPhoneValid && phoneError && (
                          <span className="text-red-500">(Required)</span>
                        )}
                      </Label>
                      <div className="relative">
                        <div className="relative flex items-center">
                          <div className="relative" ref={dropdownRef}>
                            <Button
                              type="button"
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-[90px] justify-between border-r-0 rounded-r-none bg-gray-50/50 px-2 h-12"
                              onClick={() => setOpen(!open)}
                            >
                              <span className="truncate">{smsFormData.countryCode}</span>
                              <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                            {open && (
                              <div className="absolute top-full left-0 z-50 mt-1 w-[240px] rounded-md border border-gray-200 bg-white shadow-lg">
                                <div className="flex items-center border-b p-2">
                                  <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                                  <input
                                    className="flex w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
                                    placeholder="Search countries..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    // Prevent dropdown from closing when clicking the search input
                                    onClick={(e) => e.stopPropagation()}
                                  />
                                </div>
                                <div className="max-h-[300px] overflow-auto p-1">
                                  {filteredCountries.map((country) => (
                                    <button
                                      key={country.code}
                                      onClick={() => {
                                        setSmsFormData(prev => ({
                                          ...prev,
                                          countryCode: country.code
                                        }))
                                        setOpen(false)
                                        setSearchQuery('')
                                      }}
                                      className={cn(
                                        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-gray-100",
                                        smsFormData.countryCode === country.code && "bg-gray-100"
                                      )}
                                    >
                                      <span className="mr-2">{country.country}</span>
                                      <span className="ml-auto text-xs text-gray-500">{country.code}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Phone number"
                            value={smsFormData.phone}
                            onChange={handlePhoneChange}
                            className={cn(
                              "rounded-l-none h-12",
                              !isPhoneValid && "border-red-300 focus:border-red-500 focus:ring-red-500"
                            )}
                          />
                        </div>
                      </div>
                      <div className="min-h-[20px]">
                        {!isPhoneValid && phoneError && (
                          <p className="text-sm text-red-500">{phoneError}</p>
                        )}
                        {isPhoneValid && (
                          <p className="text-xs text-gray-500">Enter your phone number with area code</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          required
                          className="mt-1 h-4 w-4 rounded border-gray-300"
                        />
                        <label className="text-sm text-gray-600">
                          I agree to receive SMS messages from Red Hibbert Group.
                        </label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 rounded border-gray-300"
                        />
                        <label className="text-sm text-gray-600">
                          I agree to receive marketing emails from Red Hibbert Group.
                        </label>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            required
                            checked={termsAccepted}
                            onChange={(e) => {
                              setTermsAccepted(e.target.checked)
                              setShowTermsWarning(!e.target.checked)
                            }}
                            className="mt-1 h-4 w-4 rounded border-gray-300"
                          />
                          <label className="text-sm text-gray-600">
                            I agree to the <a href="/accessibility" target="_blank" className="text-blue-600 hover:underline">Accessibility Statement</a> and <a href="/privacy" target="_blank" className="text-blue-600 hover:underline">Privacy Policy</a>, and understand that I will receive a verification message to confirm my subscription. I consent to the collection and processing of my data as described.
                          </label>
                        </div>
                        {showTermsWarning && (
                          <motion.p
                            initial={{ x: 0 }}
                            animate={shakeWarning ? {
                              x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
                              transition: { duration: 0.5 }
                            } : {}}
                            className="text-sm text-red-500 pl-6"
                          >
                            Please accept the Accessibility Statement and Privacy Policy to continue.
                          </motion.p>
                        )}
                      </div>
                    </div>
                    {smsError && (
                      <p className="text-sm text-red-600 mt-2">{smsError}</p>
                    )}
                    <Button
                      type="submit"
                      className="w-full bg-[#0f172a] hover:bg-[#1e293b] hover:scale-105 transform transition-all duration-200 h-12"
                      disabled={isSmsSubmitting}
                    >
                      {isSmsSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Processing...
                        </div>
                      ) : (
                        'Subscribe Now'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white backdrop-blur-xl mb-8">
              Stay Updated
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8 text-lg text-gray-300/90">
              Stay updated with our latest insights and news about Salesforce solutions.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative mx-auto max-w-md">
              <AnimatePresence mode="wait">
                {newsletterSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-lg bg-emerald-50 border border-emerald-100 p-6 text-center backdrop-blur-xl"
                  >
                    <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-emerald-500" />
                    <p className="text-base font-medium text-emerald-800">
                      Thanks for subscribing! Check your email for updates.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3"
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="flex-1 border border-white/10 bg-white/5 text-white placeholder:text-gray-400 focus:border-white/20 focus:ring-2 focus:ring-white/10 backdrop-blur-xl"
                    />
                    <Button
                      type="submit"
                      disabled={isNewsletterSubmitting}
                      className="bg-white text-[#0f172a] hover:bg-gray-100 hover:scale-105 transform transition-all duration-200"
                    >
                      {isNewsletterSubmitting ? (
                        'Subscribing...'
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              {newsletterError && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-sm bg-white/10 p-4 rounded-lg backdrop-blur-xl border border-white/10"
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <p className="text-red-300">{newsletterError}</p>
                    {newsletterError.includes("already subscribed") && (
                      <div className="flex flex-wrap justify-center gap-3 mt-2">
                        <Button
                          type="button"
                          onClick={() => {
                            const contactForm = document.getElementById('contact-form')
                            if (contactForm) {
                              contactForm.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                          className="bg-white text-[#0f172a] hover:bg-gray-100 hover:scale-105 transform transition-all duration-200"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Contact Us
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setIsOpen(true)}
                          className="bg-gradient-to-r from-[#FF4B6E] to-[#6f42c1] text-white hover:opacity-90 hover:scale-105 transform transition-all duration-200"
                        >
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Open Chatbot
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  )
} 