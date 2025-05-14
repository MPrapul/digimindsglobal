'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, X, Send, ChevronRight, Mail } from 'lucide-react'
import Image from 'next/image'
import { useGlobalChatState } from '@/lib/chat-state'
import Link from 'next/link'

// Initial greeting messages
const greetingMessages = [
  "Hello! I'm your DigiMindsGlobal assistant. 👋",
  "I can help you learn more about our digital services and solutions.",
  "What would you like to know about?"
]

// Quick initial questions
const initialQuestions = [
  "Tell me about your Web Design services",
  "What solutions do you offer?",
  "How can you help my business?"
]

// Predefined Q&A pairs with categories
const predefinedQuestions = [
  {
    category: "Initial Questions",
    questions: [
      {
        question: "Tell me about your Web Design services",
        answer: `We offer a comprehensive suite of Web Design services designed to transform your online presence:

• Responsive Design:
  - Mobile-first approach
  - Cross-device compatibility
  - Intuitive user interfaces
  - Performance optimization

• E-commerce Solutions:
  - Secure payment gateways
  - Inventory management
  - Customer account portals
  - Order processing automation

• Custom Development:
  - Tailored functionality
  - Third-party integrations
  - CMS implementation
  - Scalable architecture

• Ongoing Support:
  - Performance monitoring
  - Security updates
  - Content management
  - Technical maintenance

Would you like to learn more about any specific web design service?`
      },
      {
        question: "What solutions do you offer?",
        answer: `We provide a comprehensive range of digital solutions tailored to your business needs:

• Web Design & Development:
  - Custom websites
  - E-commerce platforms
  - Web applications
  - Content management systems

• Digital Marketing:
  - SEO optimization
  - Social media management
  - Email marketing
  - Content creation

• Software Development:
  - Custom applications
  - API integrations
  - Mobile app development
  - Database solutions

• Professional Services:
  - Strategy consulting
  - Implementation support
  - Training programs
  - Ongoing maintenance

Would you like to explore any of these solutions in detail?`
      },
      {
        question: "How can you help my business?",
        answer: `We can help transform your business in multiple ways:

• Digital Transformation:
  - Modernize your online presence
  - Automate customer interactions
  - Implement data-driven strategies
  - Enable digital innovation

• Customer Experience Enhancement:
  - Intuitive website navigation
  - Omni-channel engagement
  - Customer insight generation
  - Experience optimization

• Operational Efficiency:
  - Process automation
  - Workflow optimization
  - Resource utilization
  - Cost optimization

• Growth Acceleration:
  - Lead generation
  - Customer retention
  - Revenue optimization
  - Market expansion

Let's discuss your specific business goals and how we can help you achieve them!`
      }
    ]
  },
  {
    category: "Web Design",
    questions: [
      {
        question: 'What web design services do you offer?',
        answer: `Our comprehensive web design services include:

• Custom Website Design:
  - Brand-aligned aesthetics
  - User experience optimization
  - Responsive frameworks
  - Modern visual elements

• E-commerce Development:
  - Product catalog management
  - Secure checkout processes
  - Customer account systems
  - Order management tools

• CMS Implementation:
  - WordPress expertise
  - Custom CMS development
  - Content workflows
  - Administrator training

• User Experience Design:
  - Intuitive navigation
  - Call-to-action optimization
  - Conversion path design
  - Accessibility compliance

Would you like to learn more about any specific service or schedule a consultation?`
      },
      {
        question: 'How can a new website benefit my business?',
        answer: `A professionally designed website can transform your business in several powerful ways:

• Enhanced Brand Perception:
  - Professional online presence
  - Trust-building design elements
  - Consistent brand messaging
  - Competitive positioning

• Improved Customer Acquisition:
  - Search engine visibility
  - Lead generation tools
  - Contact conversion points
  - Analytics implementation

• Operational Efficiency:
  - Automated information delivery
  - Self-service capabilities
  - Reduced manual inquiries
  - Content management systems

• Business Growth:
  - Expanded market reach
  - 24/7 business presence
  - Scalable digital foundation
  - Data-driven insights

Would you like to discuss how we can create a website specifically designed to meet your business goals?`
      }
    ]
  }
]

// Interface definitions
interface Message {
  text: string
  isUser: boolean
  isGreeting?: boolean
}

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ChatState {
  isCollectingContactInfo: boolean
  contactFormData: ContactFormData
  showContactPageCTA: boolean
  wantsToContact: boolean | null
}

export default function ChatBot() {
  const { isOpen, setIsOpen } = useGlobalChatState()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [showQuestions, setShowQuestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [chatState, setChatState] = useState<ChatState>({
    isCollectingContactInfo: false,
    contactFormData: { name: '', email: '', message: '' },
    showContactPageCTA: false,
    wantsToContact: null
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Initialize with greeting messages
  useEffect(() => {
    if (messages.length === 0) {
      const initialMessages = greetingMessages.map(text => ({
        text,
        isUser: false,
        isGreeting: true
      }))
      setMessages(initialMessages)
    }
  }, [messages.length])

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, chatState.isCollectingContactInfo])

  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current && !chatState.isCollectingContactInfo) {
      inputRef.current.focus()
    }
  }, [isOpen, chatState.isCollectingContactInfo])

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const submitContactForm = async () => {
    // Instead of sending to database, just show a thank you message
    setFormSubmitted(true)
    
    // Reset the form
    setChatState({
      ...chatState,
      isCollectingContactInfo: false
    })
    
    // Add a confirmation message
    setMessages(prev => [
      ...prev,
      {
        text: `Thanks for your message, ${chatState.contactFormData.name}! We'll get back to you soon.`,
        isUser: false
      }
    ])
  }

  const handleSendMessage = (text: string, isUserMessage = true) => {
    if (!text.trim()) return

    // Add user message
    if (isUserMessage) {
      setMessages(prev => [...prev, { text, isUser: true }])
      setInputValue('')
      setShowQuestions(false)
    }

    // Check for contact intent
    const contactKeywords = ['contact', 'email', 'talk', 'call', 'reach', 'connect', 'speak']
    const hasContactIntent = contactKeywords.some(keyword => text.toLowerCase().includes(keyword))

    if (hasContactIntent && chatState.wantsToContact === null) {
      // Ask if they want to be contacted
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            text: "Would you like to leave your contact information so we can get in touch with you?",
            isUser: false
          }
        ])
        setChatState({
          ...chatState,
          wantsToContact: true,
          showContactPageCTA: true
        })
      }, 500)
      return
    }

    // If in contact info collection mode
    if (chatState.isCollectingContactInfo) {
      return
    }

    // If showing contact page CTA
    if (chatState.showContactPageCTA) {
      const positiveResponses = ['yes', 'yeah', 'sure', 'okay', 'ok', 'yep', 'please', 'contact']
      const negativeResponses = ['no', 'nope', 'later', 'not now', 'don\'t', 'dont']

      if (positiveResponses.some(resp => text.toLowerCase().includes(resp))) {
        setTimeout(() => {
          setChatState({
            ...chatState,
            isCollectingContactInfo: true,
            showContactPageCTA: false
          })
        }, 500)
        return
      } else if (negativeResponses.some(resp => text.toLowerCase().includes(resp))) {
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              text: "No problem! If you have any other questions, feel free to ask.",
              isUser: false
            }
          ])
          setChatState({
            ...chatState,
            showContactPageCTA: false
          })
        }, 500)
        return
      }
    }

    // Check for matching predefined answers
    const findAnswer = (): string | null => {
      for (const category of predefinedQuestions) {
        for (const qa of category.questions) {
          if (qa.question.toLowerCase() === text.toLowerCase()) {
            return qa.answer
          }
        }
      }
      
      // Fallback response if no match found
      return "I don't have specific information about that. Would you like to know about our web design services, digital marketing, or software development solutions? Or would you prefer to speak with our team directly?"
    }

    // Send bot response after a delay
    setTimeout(() => {
      const answer = findAnswer()
      if (answer) {
        setMessages(prev => [...prev, { text: answer, isUser: false }])
      }
    }, 500)
  }

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question, true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (inputValue.trim()) {
        handleSendMessage(inputValue)
      }
    }
  }

  const handleContactInputChange = (field: keyof ContactFormData, value: string) => {
    setChatState({
      ...chatState,
      contactFormData: {
        ...chatState.contactFormData,
        [field]: value
      }
    })
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 bg-primary hover:bg-primary-dark text-white shadow-lg flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 w-[350px] sm:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-200 z-50">
      {/* Chat header */}
      <div className="bg-primary px-4 py-3 text-white flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/images/logos/Digimindglobal-removebg-preview.png"
            alt="DigiMindsGlobal Logo"
            width={40}
            height={40}
            className="mr-3 rounded-full bg-white p-1"
          />
          <div>
            <h3 className="font-semibold">DigiMindsGlobal Support</h3>
            <p className="text-xs opacity-80">Ask us anything about our services</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-primary-dark rounded-full h-8 w-8 p-0"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.isUser
                  ? 'bg-primary text-white rounded-tr-none'
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
              } ${message.isGreeting ? 'animate-fadeIn' : ''}`}
            >
              {message.text.split('\n').map((line, i) => (
                <p key={i} className={i > 0 ? 'mt-2' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />

        {/* Contact form */}
        {chatState.isCollectingContactInfo && !formSubmitted && (
          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 mt-4">
            <h3 className="font-medium text-gray-900 mb-3">Please provide your contact details:</h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  value={chatState.contactFormData.name}
                  onChange={(e) => handleContactInputChange('name', e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  value={chatState.contactFormData.email}
                  onChange={(e) => handleContactInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  value={chatState.contactFormData.message}
                  onChange={(e) => handleContactInputChange('message', e.target.value)}
                  placeholder="How can we help you?"
                  rows={3}
                />
              </div>
              <div className="pt-2">
                <Button
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                  onClick={submitContactForm}
                  disabled={
                    !chatState.contactFormData.name ||
                    !chatState.contactFormData.email ||
                    !validateEmail(chatState.contactFormData.email) ||
                    !chatState.contactFormData.message
                  }
                >
                  Submit
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Contact page CTA */}
        {chatState.showContactPageCTA && !chatState.isCollectingContactInfo && (
          <div className="flex justify-center mt-4">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
              >
                Visit our contact page
                <ChevronRight className="ml-2 -mr-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Suggested questions */}
        {showQuestions && messages.length <= greetingMessages.length + 1 && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Here are some questions to get started:</p>
            <div className="flex flex-wrap gap-2">
              {initialQuestions.map((question, index) => (
                <button
                  key={index}
                  className="bg-white text-primary text-sm py-1.5 px-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      {!chatState.isCollectingContactInfo && (
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-end">
            <textarea
              ref={inputRef}
              className="flex-1 border border-gray-300 rounded-lg resize-none p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Type your message..."
              rows={1}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <Button
              className="ml-2 bg-primary hover:bg-primary-dark text-white h-10 w-10 rounded-full p-0 flex items-center justify-center"
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            <Link href="/privacy" className="underline hover:text-primary">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms" className="underline hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 