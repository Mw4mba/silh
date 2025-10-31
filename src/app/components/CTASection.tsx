﻿'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power2.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="careers"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2074&auto=format&fit=crop"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#37474F]/80 via-[#2E7D32]/70 to-[#37474F]/80" />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
          Lead and <span className="font-semibold">grow</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          What if you could build a career that's as unique as you? With us you can.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#"
            className="group px-10 py-5 bg-white text-[#2E7D32] font-medium rounded-sm hover:bg-[#A5D6A7] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3 justify-center"
          >
            <span>Search and apply</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#"
            className="group px-10 py-5 bg-transparent text-white font-medium rounded-sm border-2 border-white hover:bg-white hover:text-[#2E7D32] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3 justify-center"
          >
            <span>Life at Silh</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/30">
          <div>
            <p className="text-5xl font-light text-white mb-2">12,000+</p>
            <p className="text-white/80 font-light">Employees worldwide</p>
          </div>
          <div>
            <p className="text-5xl font-light text-white mb-2">45+</p>
            <p className="text-white/80 font-light">Countries</p>
          </div>
          <div>
            <p className="text-5xl font-light text-white mb-2">1,200+</p>
            <p className="text-white/80 font-light">Active projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
