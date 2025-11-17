'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ITServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="it-services" ref={sectionRef} className="py-24 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2E7D32] mb-6 text-center"
        >
          IT <span className="font-semibold">Services</span>
        </h2>
        <p className="text-center text-[#37474F]/70 text-lg mb-16 max-w-3xl mx-auto font-light">
          Innovative technology solutions to power your engineering projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder Cards */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-sm mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#2E7D32] mb-4">
                Service {item}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed mb-4 font-light">
                Content to be added. This section will showcase our IT services and technology solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#A5D6A7]/30 text-[#2E7D32] text-sm rounded-full font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
