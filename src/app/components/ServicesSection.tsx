'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  insights: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Sustainable Architecture',
    description: 'We design buildings that harmonize with their environment, integrating passive strategies, renewable energy, and biophilic principles to create spaces that nurture well-being while minimizing ecological impact.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop',
    insights: ['LEED & BREEAM', 'Net-Zero Design', 'Circular Economy'],
  },
  {
    id: 2,
    title: 'Structural Engineering',
    description: 'Our engineering teams deliver innovative structural solutions that balance safety, efficiency, and sustainability. From seismic resilience to lightweight materials, we push the boundaries of what is possible.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    insights: ['Advanced Analysis', 'Seismic Design', 'Innovation'],
  },
  {
    id: 3,
    title: 'BIM-Based Workflow',
    description: 'Leveraging Building Information Modeling, we streamline collaboration across disciplines, reduce errors, and optimize project outcomes from concept through construction and beyond.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    insights: ['Digital Twins', 'Clash Detection', 'Lifecycle Mgmt'],
  },
  {
    id: 4,
    title: 'Climate Adaptation',
    description: 'We help clients prepare for a changing climate through infrastructure resilience, flood mitigation, heat island reduction, and nature-based solutions that protect communities.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070&auto=format&fit=crop',
    insights: ['Flood Resilience', 'Heat Mitigation', 'Green Infrastructure'],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2E7D32] mb-6 text-center"
        >
          Shaping the <span className="font-semibold">future</span>
        </h2>
        <p className="text-center text-[#37474F]/70 text-lg mb-16 max-w-3xl mx-auto font-light">
          We combine future-focused thinking and technical know-how to power local impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative overflow-hidden bg-[#F5F5DC] rounded-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#2E7D32]/20 to-[#2E7D32]/90" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-light text-white">
                  {service.title}
                </h3>
              </div>

              <div className="p-8">
                <p className="text-[#37474F] leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.insights.map((insight) => (
                    <span
                      key={insight}
                      className="px-3 py-1 bg-[#A5D6A7]/30 text-[#2E7D32] text-sm rounded-full font-medium"
                    >
                      {insight}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#2E7D32] font-medium group-hover:gap-4 transition-all"
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
