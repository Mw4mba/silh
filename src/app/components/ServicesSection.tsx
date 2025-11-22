'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../i18n/I18nContext';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      id: 1,
      ...t.services.items.sustainable,
      image: '/images/services/sustainable.jpg',
    },
    {
      id: 2,
      ...t.services.items.structural,
      image: '/images/services/structural.jpg',
    },
    {
      id: 3,
      ...t.services.items.bim,
      image: '/images/services/bim.jpg',
    },
    {
      id: 4,
      title: 'IT solutions',
      description: 'Comprehensive IT solutions to support your engineering projects, from infrastructure to software development.',
      insights: ['Cloud Solutions', 'Cybersecurity', 'Custom Development'],
      image: '/images/services/bim.jpg',
    },
  ];

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
          {t.services.title}
        </h2>
        <p className="text-center text-[#37474F]/70 text-lg mb-16 max-w-3xl mx-auto font-light">
          {t.services.subtitle}
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
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#2E7D32]/20 to-[#2E7D32]/90" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-medium text-white">
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
                  href="#about"
                  className="inline-flex items-center gap-2 text-[#2E7D32] font-medium group-hover:gap-4 transition-all"
                >
                  <span>{t.services.learnMore}</span>
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
