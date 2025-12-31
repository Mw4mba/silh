'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../i18n/I18nContext';

export default function ServicesSection() {
  const { t, language } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Image mapping for services
  const serviceImages: Record<keyof typeof t.services.items, string> = {
    sustainable: '/images/services/sustainable.jpg',
    structural: '/Website/STRUCTURAL.png',
    bim: '/images/services/bim.jpg',
    it: '/images/insights/digital-twin.jpg',
    mining: '/Website/MINING.jpg',
  };

  // Slug mapping for service detail pages
  const serviceSlugs: Record<keyof typeof t.services.items, string> = {
    sustainable: 'sustainable-architecture',
    structural: 'structural-engineering',
    bim: 'building-information-modelling',
    it: 'it-solutions',
    mining: 'mining-consulting',
  };

  // We need to access keys safely
  const serviceKeys = Object.keys(t.services.items) as Array<keyof typeof t.services.items>;
  const [activeKey, setActiveKey] = useState<keyof typeof t.services.items>(serviceKeys[0]);

  // Update active key if language changes or keys change
  useEffect(() => {
    setActiveKey(serviceKeys[0]);
  }, [language]);

  // Navigate to previous/next slide with looping
  const goToSlide = (direction: 'prev' | 'next') => {
    const currentIndex = serviceKeys.indexOf(activeKey);
    let newIndex: number;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % serviceKeys.length; // Loop to first
    } else {
      newIndex = (currentIndex - 1 + serviceKeys.length) % serviceKeys.length; // Loop to last
    }

    setActiveKey(serviceKeys[newIndex]);
  };

  // Scroll active slide into center view
  useEffect(() => {
    if (carouselRef.current) {
      const activeIndex = serviceKeys.indexOf(activeKey);
      const cards = carouselRef.current.children;
      if (cards[activeIndex]) {
        const card = cards[activeIndex] as HTMLElement;
        const containerWidth = carouselRef.current.offsetWidth;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [activeKey, serviceKeys]);

  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header - Aligned Center */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E7D32] mb-6">
            {t.services.title}
          </h2>
          <p className="text-[#37474F]/70 text-lg max-w-xl font-light mb-8">
            {t.services.subtitle}
          </p>

          {/* Controls - Centered below subtitle */}
          <div className="flex justify-center gap-2 pb-2">
            <button
              onClick={() => goToSlide('prev')}
              className="p-3 rounded-full hover:bg-black/5 transition-colors bg-transparent border-none"
              aria-label="Previous slide"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => goToSlide('next')}
              className="p-3 rounded-full hover:bg-black/5 transition-colors bg-transparent border-none"
              aria-label="Next slide"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel / Tabs Container */}
        <div className="flex flex-col gap-12">

          {/* The Strip of Cards */}
          <div className="w-full">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-6 pb-2 snap-x scrollbar-hide px-2 scroll-smooth"
            >
              {serviceKeys.map((key) => {
                const item = t.services.items[key];
                const isActive = activeKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveKey(key)}
                    className={`
                      relative group flex-none flex flex-col text-left rounded-sm transition-all duration-500 ease-in-out snap-center
                      ${isActive
                        ? 'w-96 opacity-100 scale-100'
                        : 'w-72 opacity-70 hover:opacity-100 scale-95 hover:scale-95'
                      }
                    `}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-56 mb-4 overflow-hidden rounded-sm bg-gray-200">
                      <Image
                        src={serviceImages[key]}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay for inactive state if needed, or visual cue */}
                      {!isActive && <div className="absolute inset-0 bg-white/10" />}
                    </div>

                    {/* Content */}
                    <div className={`pt-2 transition-colors duration-300`}>
                      <h3 className={`text-xl font-bold mb-2 text-black hover:text-[#2E7D32] transition-colors`}>
                        <Link href={`/services/${serviceSlugs[key]}`}>
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Display with Sandy Brown Background */}
            <div className="mt-8 bg-[#F5F5DC] p-8 rounded-sm">
              <div className="max-w-4xl">
                {/* Description Text */}
                <p className="text-[#37474F] font-light text-lg leading-relaxed mb-6">
                  {t.services.items[activeKey].description}
                </p>

                {/* Tags - Pill-shaped buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {t.services.items[activeKey].subtext.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 border border-[#2E7D32] text-[#2E7D32] text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More link to service detail page */}
                <div className="pt-2">
                  <Link
                    href={`/services/${serviceSlugs[activeKey]}`}
                    className="inline-flex items-center gap-2 text-[#2E7D32] text-sm font-medium hover:gap-3 transition-all"
                  >
                    <span>{t.services.learnMore}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
