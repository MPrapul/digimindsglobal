'use client';

import { useState } from "react";

export default function TrainingPage() {
  const [expandedTopics, setExpandedTopics] = useState<number[]>([]);

  const toggleTopic = (index: number) => {
    setExpandedTopics(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const courseTopics = [
    {
      title: "Introduction to Salesforce Data Cloud",
      duration: "45 min",
      description: "Foundation course covering core concepts and capabilities",
      details: [
        "Define Salesforce Data Cloud",
        "Explore Core Capabilities and Benefits",
        "Navigate Key Features and Functionality",
        "Examine Data Cloud Use Cases",
        "Review Provisioning and Configuration Options",
        "Identify Roles and Permissions"
      ]
    },
    {
      title: "Data Modeling Overview",
      duration: "30 min",
      description: "Essential concepts of data modeling and structure",
      details: [
        "Define Key Data Modeling Terminology",
        "Identify Data Modeling Objects, Fields, and Relationships",
        "Compare Normalized and Denormalized Data Structures",
        "Define Primary and Foreign Keys"
      ]
    },
    {
      title: "Data Preparation",
      duration: "20 min",
      description: "Best practices for data preparation and ethics",
      details: [
        "Review Data Usage Ethics",
        "Identify Data Sources",
        "Log Data Using a Data Dictionary"
      ]
    },
    {
      title: "Data Harmonization",
      duration: "25 min",
      description: "Techniques for data harmonization and mapping",
      details: [
        "Define Key Data Harmonization Concepts",
        "Understand the Value of Data Harmonization",
        "Explore Data Cloud Mapping Capabilities"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section with Dynamic Gradient */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-teal-700 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-teal-500/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Salesforce Data Cloud: Expert Training
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Master data modeling, ingestion, harmonization, and actionable insights for data-driven success
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/20">
                Start Training
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all border border-teal-400/30 hover:border-teal-400/50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Course Topics Section */}
      <section className="py-16 bg-gradient-to-b from-slate-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Detailed Course Topics</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {courseTopics.map((topic, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-teal-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleTopic(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm border border-teal-100">
                        {topic.duration}
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-purple-900">{topic.title}</h3>
                      <p className="text-slate-600 text-sm">{topic.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-slate-400 transform transition-transform ${
                        expandedTopics.includes(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {expandedTopics.includes(index) && (
                  <div className="px-6 py-4 bg-slate-50 border-t border-teal-100">
                    <ul className="space-y-3">
                      {topic.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-slate-700">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">What You&apos;ll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Modeling & Preparation",
                duration: "75 min",
                topics: [
                  "Customer 360 Data Model",
                  "Data Usage Ethics",
                  "Normalized vs Denormalized Structures",
                  "Data Dictionary Management"
                ]
              },
              {
                title: "Data Ingestion & Harmonization",
                duration: "60 min",
                topics: [
                  "Data Space Use Cases",
                  "Cloud Connectors",
                  "Batch & Streaming Transforms",
                  "Data Mapping Capabilities"
                ]
              },
              {
                title: "Unified Profiles & Insights",
                duration: "75 min",
                topics: [
                  "Identity Resolution",
                  "Profile Unification",
                  "Calculated Insights",
                  "Data-Driven Segmentation"
                ]
              }
            ].map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-teal-100 hover:border-teal-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-purple-900">{module.title}</h3>
                  <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm border border-teal-100">
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Your Instructor</h2>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-teal-400/20">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-500 to-teal-500 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden">
                    {/* Add instructor image here if available */}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Kruthik A</h3>
                <p className="text-teal-200 mb-4">Salesforce Data Cloud Expert</p>
                <p className="text-slate-200 max-w-2xl">
                  Leading expert in Salesforce Data Cloud implementation and training with extensive experience in data modeling and customer success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-900">Ready to Transform Your Data Skills?</h2>
            <p className="text-slate-600 mb-8">
              Join our comprehensive Salesforce Data Cloud training program and become a data-driven expert.
            </p>
            <div className="flex justify-center gap-4">
              <a
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/20"
              >
                Enroll Now
              </a>
              <a
                className="bg-teal-50 text-teal-700 px-8 py-3 rounded-full hover:bg-teal-100 transition-all border border-teal-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 