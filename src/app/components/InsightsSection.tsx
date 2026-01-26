'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../i18n/I18nContext';

gsap.registerPlugin(ScrollTrigger);

export default function InsightsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const insights = [
    {
      id: 1,
      ...t.insights.items.aiConstruction,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: 2,
      ...t.insights.items.urbanBiodiversity,
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2565&auto=format&fit=crop',
    },
    {
      id: 3,
      ...t.insights.items.climate,
      image: '/images/insights/climate-resilience.jpg',
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
            y: 40,
            duration: 0.6,
            delay: index * 0.1,
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="insights" ref={sectionRef} className="py-24 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2E7D32] mb-6 text-center"
        >
          {t.insights.title}
        </h2>
        <p className="text-center text-[#37474F]/70 text-lg mb-16 max-w-3xl mx-auto font-light">
          {t.insights.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={insight.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group bg-white hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-[#2E7D32] text-white text-xs font-semibold uppercase tracking-wider">
                    {insight.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm text-[#37474F]/60 mb-3 font-medium">{insight.date}</p>
                <h3 className="text-2xl font-light text-[#2E7D32] mb-4 group-hover:text-[#1b5e20] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-[#37474F]/80 leading-relaxed mb-6 font-light">
                  {insight.excerpt}
                </p>

                <a
                  href={`/insights/${insight.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-[#2E7D32] font-semibold text-sm group-hover:gap-4 transition-all"
                >
                  <span>{t.insights.readArticle}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/insights"
            className="btn-slide-fill-green px-8 py-4 font-medium rounded-sm shadow-lg hover:shadow-xl inline-flex items-center gap-3"
          >
            <span>{t.insights.readAll}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
