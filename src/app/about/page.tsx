'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-[#1b5e20] mb-8 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-light text-[#2E7D32] mb-6 leading-tight">
            About <span className="font-semibold">LBYA</span>
          </h1>
          <p className="text-xl text-[#37474F]/80 leading-relaxed">
            Rooted in Nature, Built for the Future
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-light text-[#2E7D32] mb-4">Our Mission</h2>
              <p className="text-[#37474F]/80 leading-relaxed">
                We are dedicated to creating sustainable infrastructure that harmonizes with nature 
                while meeting the demands of modern society. Our approach combines cutting-edge 
                technology with time-tested principles of environmental stewardship.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light text-[#2E7D32] mb-4">Our Vision</h2>
              <p className="text-[#37474F]/80 leading-relaxed">
                To be the leading sustainable engineering firm that shapes a livable future through 
                innovation, collaboration, and unwavering commitment to environmental responsibility.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F5DC] p-12 rounded-sm mb-16">
            <h2 className="text-3xl font-light text-[#2E7D32] mb-6">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#37474F]/80"><strong>Sustainability:</strong> Every project prioritizes environmental impact and long-term viability.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#37474F]/80"><strong>Innovation:</strong> We continuously explore new technologies and methodologies.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#37474F]/80"><strong>Collaboration:</strong> Success comes from working together with clients, communities, and partners.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#37474F]/80"><strong>Excellence:</strong> We maintain the highest standards in every aspect of our work.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-light text-[#2E7D32] mb-6">Our Story</h2>
          <p className="text-[#37474F]/80 leading-relaxed mb-4">
            Founded with a vision to transform the engineering industry, LBYA has grown from a small 
            team of passionate engineers to a global organization serving clients across continents. 
            Our journey has been marked by groundbreaking projects and innovative solutions that push 
            the boundaries of sustainable design.
          </p>
          <p className="text-[#37474F]/80 leading-relaxed mb-4">
            Content will be developed further to showcase company history, achievements, and milestones.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2E7D32]/20">
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#2E7D32] text-white font-medium rounded-sm hover:bg-[#1b5e20] transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
