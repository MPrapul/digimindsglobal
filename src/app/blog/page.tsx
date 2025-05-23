'use client';

import Image from "next/image";
import { TrustSignals } from "@/components/ui/trust-signals";

// Add proper typing for the data structures
interface Post {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  authorImage: string;
  readTime: string;
}

interface Category {
  name: string;
  count: number;
  icon: string;
}

const categories: Category[] = [
  { name: "Web Development", count: 12, icon: "/images/icons/banking.svg" },
  { name: "Digital Marketing", count: 15, icon: "/images/icons/marketing-cloud.svg" },
  { name: "UI/UX Design", count: 8, icon: "/images/icons/healthcare.svg" },
  { name: "E-Commerce", count: 10, icon: "/images/icons/data-cloud.svg" },
  { name: "SEO & Analytics", count: 9, icon: "/images/icons/email-studio.svg" },
  { name: "Social Media", count: 7, icon: "/images/icons/journey-builder.svg" },
];

const featuredPosts: Post[] = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development and how modern frameworks and technologies are driving innovation in user experience and performance.",
    image: "/blog/digital-banking.jpg",
    date: "March 1, 2024",
    category: "Web Development",
    author: "Sarah Johnson",
    authorImage: "/images/team/sarah.jpg",
    readTime: "5 min read",
  },
  {
    title: "How to Create a Successful Digital Marketing Strategy in 2024",
    excerpt: "Learn how businesses are leveraging digital marketing strategies to improve brand awareness, reach new customers, and create more personalized marketing campaigns.",
    image: "/blog/health-cloud.jpg",
    date: "February 28, 2024",
    category: "Digital Marketing",
    author: "Michael Chen",
    authorImage: "/images/team/michael.jpg",
    readTime: "7 min read",
  },
  {
    title: "5 Key Benefits of Responsive Design for E-Commerce Websites",
    excerpt: "Discover how e-commerce businesses are using responsive design to create better shopping experiences, drive growth, and stay ahead in a competitive market.",
    image: "/blog/marketing-cloud.jpg",
    date: "February 25, 2024",
    category: "UI/UX Design",
    author: "Emily Rodriguez",
    authorImage: "/images/team/emily.jpg",
    readTime: "6 min read",
  },
];

const recentPosts: Post[] = [
  {
    title: "How Data Analytics is Revolutionizing Digital Marketing",
    excerpt: "Discover how data analytics is helping businesses understand customer behavior and derive actionable insights for more effective marketing campaigns.",
    image: "/blog/data-insights.jpg",
    date: "February 20, 2024",
    category: "Digital Marketing",
    author: "David Wilson",
    authorImage: "/images/team/david.jpg",
    readTime: "4 min read",
  },
  {
    title: "Building Effective User Experiences for Healthcare Websites",
    excerpt: "Learn best practices for creating intuitive healthcare website designs that improve patient engagement and satisfaction throughout their digital journey.",
    image: "/blog/healthcare-journeys.jpg",
    date: "February 18, 2024",
    category: "UI/UX Design",
    author: "Lisa Thompson",
    authorImage: "/images/team/lisa.jpg",
    readTime: "8 min read",
  },
  {
    title: "Maximizing ROI with Social Media Marketing Automation",
    excerpt: "Explore strategies to optimize your social media marketing workflows and measure the impact on your business objectives.",
    image: "/blog/journey-automation.jpg",
    date: "February 15, 2024",
    category: "Social Media",
    author: "James Parker",
    authorImage: "/images/team/james.jpg",
    readTime: "5 min read",
  },
  {
    title: "SEO Strategies That Drive Organic Traffic Growth",
    excerpt: "Discover advanced SEO techniques that can significantly improve your website rankings, organic traffic, and conversion rates.",
    image: "/blog/email-personalization.jpg",
    date: "February 12, 2024",
    category: "SEO & Analytics",
    author: "Sophia Martinez",
    authorImage: "/images/team/sophia.jpg",
    readTime: "6 min read",
  },
];

// Move the styles to a separate component
const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .animate-gradient {
      animation: gradient 15s ease infinite;
      background-size: 400% 400%;
    }

    @supports (backdrop-filter: blur(12px)) {
      .backdrop-blur-xl {
        backdrop-filter: blur(12px);
      }
    }

    @supports not (backdrop-filter: blur(12px)) {
      .backdrop-blur-xl {
        background-color: rgba(15, 23, 42, 0.9);
      }
    }
  `}</style>
);

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
          </div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-500/10 text-blue-300 backdrop-blur-xl border border-blue-400/20">
            Our Blog & Resources
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-100">
            Insights & Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Stay informed about the latest trends, best practices, and success stories in web development and digital marketing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="px-6 py-3 pr-12 rounded-full w-full md:w-80 bg-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 backdrop-blur-xl border border-white/10"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Articles</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Dive into our most popular insights on web development and digital marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={index} className="group perspective">
                <div className="relative h-[500px] w-full rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-400/5 p-1 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-sm p-6 text-white [backface-visibility:hidden] border border-blue-400/10">
                    <div className="flex h-full flex-col">
                      <div className="relative h-48 w-full overflow-hidden rounded-xl">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-900 opacity-60"></div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-center text-sm text-blue-200 mt-6 mb-2">
                            <span className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full border border-blue-400/20">
                              {post.category}
                            </span>
                            <span className="mx-2">•</span>
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                          <p className="text-blue-100">{post.excerpt.substring(0, 100)}...</p>
                        </div>
                        <div className="flex items-center mt-6">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm text-blue-300">{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-sm p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] border border-blue-400/10">
                    <div className="flex h-full flex-col justify-center items-center text-center">
                      <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                      <p className="mb-8">{post.excerpt}</p>
                      <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 border border-blue-400/20">
                        Read Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-gray-950">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Browse by Category</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find insights specific to your industry or area of interest
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-blue-900/20 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl hover:from-blue-800/30 hover:to-slate-800/40 border border-blue-400/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:from-blue-400 group-hover:to-blue-500 transition-colors border border-blue-400/20">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={32}
                      height={32}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-blue-200">{category.count} articles</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Recent Articles</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Stay up to date with our latest insights and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentPosts.map((post, index) => (
              <article 
                key={index} 
                className="bg-gradient-to-br from-blue-900/20 to-slate-900/30 backdrop-blur-sm rounded-xl overflow-hidden hover:from-blue-800/30 hover:to-slate-800/40 border border-blue-400/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm border border-blue-400/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-300 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    <div className="hover:text-blue-300 transition-colors cursor-pointer">
                      {post.title}
                    </div>
                  </h3>
                  <p className="text-blue-200 mb-4">{post.excerpt.substring(0, 100)}...</p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm text-blue-300">{post.author}</span>
                    </div>
                    <button
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Read more →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors text-lg font-medium">
              View All Articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 my-12 relative overflow-hidden">
        {/* Use gradient background instead of image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900"></div>
        
        {/* Add some subtle patterns for texture */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        
        {/* Shape decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/80 to-blue-900/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-blue-400/10">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-300 backdrop-blur-xl border border-blue-400/20 text-sm">
                  Stay Updated
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-100">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Get the latest insights, tips, and updates on web development and digital marketing delivered directly to your inbox.
                </p>
              </div>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-6 py-3 rounded-full bg-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 backdrop-blur-xl border border-blue-400/20"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-6 py-3 rounded-full bg-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 backdrop-blur-xl border border-blue-400/20"
                    required
                  />
                  <div className="flex items-center gap-3 ml-2 mb-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-100">
                      I agree to receive marketing communications from DigiMindsGlobal
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 border border-blue-400/20"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Add GlobalStyles component before TrustSignals */}
      <GlobalStyles />
      <TrustSignals />
    </main>
  );
} 