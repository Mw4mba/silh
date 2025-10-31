'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#37474F]">
      {/* Full-screen background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
          alt="Modern sustainable architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#2E7D32]/70 via-[#37474F]/60 to-[#2E7D32]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-left lg:text-center py-32">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-8 leading-tight tracking-tight"
        >
          Together, we engineer
          <br />
          <span className="font-semibold">a liveable future</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
        >
          Combining future-focused thinking and technical excellence to create sustainable infrastructure that shapes communities for generations.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center">
          <a
            href="#services"
            className="group px-10 py-5 bg-white text-[#2E7D32] font-medium rounded-sm hover:bg-[#A5D6A7] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3 justify-center"
          >
            <span>What we do</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="group px-10 py-5 bg-transparent text-white font-medium rounded-sm border-2 border-white hover:bg-white hover:text-[#2E7D32] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3 justify-center"
          >
            <span>Our projects</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
