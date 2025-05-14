"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedText } from '@/components/ui/animated-text'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-sky-950 via-slate-900 to-slate-900">
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-800/20 via-transparent to-transparent opacity-30"></div>
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-sky-400"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <div className="container relative z-10 py-24 md:py-32 px-4 max-w-[1200px] mx-auto">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <motion.div
                className="inline-block mb-2 bg-sky-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-sky-500/20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <span className="text-sky-300 text-sm font-medium">Our Story & Mission</span>
              </motion.div>
              
              <AnimatedText
                text="About DigiMindsGlobal"
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                type="heading"
              />
            </div>
            
            <AnimatedText
              text="We're a team of digital experts dedicated to transforming businesses through innovative web and marketing solutions."
              className="text-xl md:text-2xl text-white font-medium mb-8 max-w-2xl mx-auto"
              delay={0.1}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/25 transition-all duration-300">
                <Link href="/marketing/contact">
                  Get in Touch
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                  >
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </Link>
              </Button>
            </motion.div>
            
            {/* Hero image below the text on all screen sizes */}
            <motion.div 
              className="relative mt-12 aspect-[16/9] overflow-hidden rounded-lg max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="DigiMindsGlobal team collaboration"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-sky-900/30 to-transparent mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section with Parallax */}
      <section className="py-24 bg-gradient-to-b from-sky-950 to-slate-900 relative">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Story"
              className="text-3xl font-bold mb-6 text-white"
              type="heading"
            />
            <div className="space-y-6 max-w-3xl mx-auto">
              <AnimatedText
                text="Founded in 2022 with a vision to revolutionize digital experiences, we specialize in creating innovative solutions that transform how businesses operate in the digital age."
                className="text-lg text-sky-100/80 leading-relaxed"
                delay={0.1}
              />
              <AnimatedText
                text="Our expertise spans across modern web technologies and digital marketing strategies, focusing on delivering exceptional user experiences and powerful functionality."
                className="text-lg text-sky-100/80 leading-relaxed"
                delay={0.2}
              />
              <AnimatedText
                text="Today, we continue to push boundaries and set new standards in web development and digital innovation."
                className="text-lg text-sky-100/80 leading-relaxed"
                delay={0.3}
              />
            </div>
          </div>
          
          {/* Timeline */}
          <motion.div 
            className="relative mt-20 pl-8 border-l-2 border-sky-500/30 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { year: "2022", title: "Foundation", description: "Founded DigiMindsGlobal to help businesses leverage digital technology for transformation and growth." },
              { year: "2022", title: "First Projects", description: "Successfully delivered our first web development and digital marketing projects, establishing our expertise in the field." },
              { year: "2023", title: "Expansion", description: "Expanded our service offerings to include advanced digital solutions like e-commerce platforms and social media management." },
              { year: "2024", title: "Future Vision", description: "Building next-generation integrated platforms combining web development and digital marketing for comprehensive business solutions." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="absolute -left-[41px] h-6 w-6 rounded-full bg-sky-500 border-4 border-slate-900"
                  whileInView={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 1, repeat: Infinity }
                  }}
                ></motion.div>
                <motion.div 
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-sky-500/20"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(56, 189, 248, 0.4)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-sky-400 font-bold">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-sky-100/70">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values Section with Enhanced Effects */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-sky-950 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent opacity-30"></div>
        </motion.div>
        <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Values"
              className="text-3xl font-bold mb-6 text-white"
              type="heading"
            />
            <AnimatedText
              text="The principles that drive our innovation"
              className="text-xl text-sky-100/80 max-w-2xl mx-auto"
              delay={0.1}
            />
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { 
                title: "Innovation First", 
                description: "We embrace cutting-edge technologies to create exceptional digital experiences.",
                icon: "💡",
                color: "from-blue-500 to-indigo-600"
              },
              { 
                title: "Quality Driven", 
                description: "Every project is crafted with attention to detail and performance in mind.",
                icon: "✨",
                color: "from-sky-500 to-cyan-600"
              },
              { 
                title: "Future Ready", 
                description: "Building solutions that are scalable and prepared for tomorrow's challenges.",
                icon: "🚀",
                color: "from-teal-500 to-emerald-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-sky-500/20 overflow-hidden group">
                  <motion.div 
                    className={`h-2 w-full bg-gradient-to-r ${value.color}`}
                    whileHover={{ scaleX: 1.1 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                  <CardHeader>
                    <motion.div 
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-2xl"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {value.icon}
                      </motion.div>
                      <CardTitle className="text-white group-hover:text-sky-400 transition-colors">{value.title}</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sky-100/70 group-hover:text-sky-100 transition-colors">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Animations */}
      <section className="py-24 bg-sky-950 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support" },
              { value: "5⭐", label: "Average Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-5xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                      delay: 0.1 + index * 0.1
                    }
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-sky-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.3 + index * 0.1
                    }
                  }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-sky-950 to-slate-900">
        <div className="container max-w-[1200px] mx-auto px-4">
          <motion.div 
            className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-12 text-center text-white relative overflow-hidden max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${Math.random() * 300 + 50}px`,
                    height: `${Math.random() * 300 + 50}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: Math.random() * 10 + 10,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <AnimatedText
                text="Ready to Work With Us?"
                className="mb-4 text-3xl font-bold"
                type="heading"
              />
              <AnimatedText
                text="Let's discuss how we can help you achieve your business goals with our digital solutions."
                className="mb-8 text-lg max-w-2xl mx-auto"
                delay={0.1}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/marketing/contact">
                    Contact Our Team
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 