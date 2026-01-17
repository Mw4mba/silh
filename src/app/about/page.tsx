'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // LBYA Animation
      if (wrapperRef.current && textRef.current) {
        gsap.fromTo(textRef.current,
          { y: '100%' },
          {
            y: '0%',
            ease: 'none',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top top',
              end: '+=100%',
              scrub: true,
              pin: true,
            }
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-[#2E7D32] mb-8 leading-tight tracking-tight">
            Sustainable design isn’t a feature,<br />
            <span className="font-semibold">it’s a performance standard.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#37474F]/80 leading-relaxed font-light">
            We help clients reduce operational energy, embodied carbon, and future risk while delivering high-quality architecture that stands out.
          </p>
        </div>

        {/* Mission Section - Inspired by Jeton's "Money, but better" */}
        {/* What We Do Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1920&auto=format&fit=crop"
              alt="Sustainable architecture integrating nature and concrete"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#2E7D32] mb-8">
              What we do
            </h2>
            <p className="text-xl text-[#37474F]/80 leading-relaxed mb-6">
              We create sustainable architectural solutions that balance design quality, functionality, and environmental performance. Our approach integrates climate-responsive design, energy efficiency, and responsible material selection to reduce environmental impact while enhancing comfort and long-term value.
            </p>
            <p className="text-xl text-[#37474F]/80 leading-relaxed">
              By combining architectural expertise with engineering insight and BIM-based workflows, we deliver resilient, future-ready buildings tailored to their context and users.
            </p>
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
            — Silhady T Luboya, CEO of <span style={{ fontFamily: "'Ruslan Display', serif" }}>LBYA</span>
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
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* LBYA Animation Section */}
      <div ref={heroRef}>
        <section ref={wrapperRef} className="relative h-screen w-full bg-[#F5F5DC] overflow-hidden flex flex-col justify-between py-32 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-medium text-[#2E7D32] tracking-wide uppercase">
              Our Philosophy
            </h2>
          </div>

          <div className="w-full overflow-hidden">
            <h2
              ref={textRef}
              className="text-[25vw] leading-[0.8] font-bold text-[#2E7D32] tracking-tighter text-center"
              style={{ fontFamily: "'Ruslan Display', serif" }}
            >
              LBYA
            </h2>
          </div>
        </section>
      </div>

      <Footer />
    </div >
  );
}
