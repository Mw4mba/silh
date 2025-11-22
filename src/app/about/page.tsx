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
        {/* Hero Section */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light text-[#2E7D32] mb-8 leading-tight tracking-tight">
            Rooted in Nature.<br />
            <span className="font-semibold">Built for the Future.</span>
          </h1>
          <p className="text-2xl text-[#37474F]/80 leading-relaxed font-light">
            We are <span style={{ fontFamily: "'Ruslan Display', serif" }}>LBYA</span>. We are redefining the relationship between the built environment and the natural world.
          </p>
        </div>

        {/* Mission Section - Inspired by Jeton's "Money, but better" */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#2E7D32] mb-6">
              Engineering, <span className="font-semibold">but better.</span>
            </h2>
            <p className="text-xl text-[#37474F]/80 leading-relaxed mb-8">
              Our goal is to make infrastructure sustainable by default. Whether we're designing a high-rise or a bridge, we make it better for the planet and for you.
            </p>
            <div className="relative h-80 w-full bg-[#F5F5DC] rounded-sm overflow-hidden">
               {/* Placeholder for Mission Image */}
               <div className="absolute inset-0 flex items-center justify-center text-[#2E7D32]/20">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
               </div>
            </div>
          </div>
          <div className="space-y-12">
             <div>
                <h3 className="text-2xl font-medium text-[#2E7D32] mb-4">We love to solve complex problems.</h3>
                <p className="text-[#37474F]/80 leading-relaxed">
                  No hidden costs to the environment, no complex jargon. We make sustainable engineering relatable, effortless to implement, and easy to understand. Our goal is for every project to be a net positive for its community.
                </p>
             </div>
             <div>
                <h3 className="text-2xl font-medium text-[#2E7D32] mb-4">Innovation at our core.</h3>
                <p className="text-[#37474F]/80 leading-relaxed">
                  We continuously explore new technologies and methodologies to push the boundaries of what is possible in sustainable construction.
                </p>
             </div>
          </div>
        </div>

        {/* Values Section - Inspired by Jeton's "01. For you" */}
        <div className="mb-32">
          <h2 className="text-4xl font-light text-[#2E7D32] mb-16 text-center">Working for a sustainable future</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border-t border-[#2E7D32]/20 pt-8">
              <span className="text-6xl font-light text-[#A5D6A7]/50 mb-6 block">01.</span>
              <h3 className="text-2xl font-medium text-[#2E7D32] mb-4">Sustainable</h3>
              <p className="text-[#37474F]/80 leading-relaxed">
                Every project prioritizes environmental impact and long-term viability. We design with the lifecycle in mind.
              </p>
            </div>
            <div className="border-t border-[#2E7D32]/20 pt-8">
              <span className="text-6xl font-light text-[#A5D6A7]/50 mb-6 block">02.</span>
              <h3 className="text-2xl font-medium text-[#2E7D32] mb-4">Accessible</h3>
              <p className="text-[#37474F]/80 leading-relaxed">
                We try to make sustainable solutions accessible for everyone. Green building shouldn't be a luxury, but a standard.
              </p>
            </div>
            <div className="border-t border-[#2E7D32]/20 pt-8">
              <span className="text-6xl font-light text-[#A5D6A7]/50 mb-6 block">03.</span>
              <h3 className="text-2xl font-medium text-[#2E7D32] mb-4">Transparent</h3>
              <p className="text-[#37474F]/80 leading-relaxed">
                We believe in transparency. No greenwashing. Just measurable, verifiable impact data for every project we undertake.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-[#F5F5DC] p-12 md:p-24 rounded-sm mb-32 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-[#2E7D32] leading-relaxed mb-8">
            "We observed how the construction industry was drifting away from nature. Even the simplest projects ignored their environmental context. The fact that today's infrastructure was not resilient enough for tomorrow's climate ignited our desire to create <span style={{ fontFamily: "'Ruslan Display', serif" }}>LBYA</span>."
          </blockquote>
          <cite className="text-[#37474F] font-medium not-italic block">
            — Sarah Chen, CEO of <span style={{ fontFamily: "'Ruslan Display', serif" }}>LBYA</span>
          </cite>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#37474F]/40 uppercase tracking-widest mb-12">Recognized for Excellence</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for Logos */}
             <div className="h-12 w-32 bg-[#2E7D32]/20 flex items-center justify-center text-xs font-bold text-[#2E7D32]">LEED Platinum</div>
             <div className="h-12 w-32 bg-[#2E7D32]/20 flex items-center justify-center text-xs font-bold text-[#2E7D32]">BREEAM</div>
             <div className="h-12 w-32 bg-[#2E7D32]/20 flex items-center justify-center text-xs font-bold text-[#2E7D32]">ISO 14001</div>
             <div className="h-12 w-32 bg-[#2E7D32]/20 flex items-center justify-center text-xs font-bold text-[#2E7D32]">Living Building</div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2E7D32]/20 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#2E7D32] text-white font-medium rounded-sm hover:bg-[#1b5e20] transition-all shadow-lg hover:shadow-xl"
          >
            Join Our Journey
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
