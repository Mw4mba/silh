'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useTranslation } from '../i18n/I18nContext';

export default function HeroSection() {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  const carouselItems = [
    t.hero.subtitle,
    "Our vision is inspired by nature and shaping a sustainable future.",
    "We design with purpose, precision, and long-term resilience in mind.",
    "Every solution we create reflects harmony between innovation and the environment.",
    "Together, we build spaces that endure, inspire, and respect the world around us."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      if (textRef.current) {
        gsap.to(textRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          onComplete: () => {
            setCurrentTextIndex((prev) => (prev + 1) % carouselItems.length);
            // Fade in
            if (textRef.current) {
              gsap.fromTo(textRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 }
              );
            }
          }
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
      });

      gsap.from(bottomContentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden bg-[#37474F]">
      {/* Full-screen background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/new-hero.jpg"
          alt="Modern sustainable architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(55,71,79,0.5)_60%,_rgba(46,125,50,0.8)_100%)]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        {/* Bottom Left Content - Title */}
        <div className="flex flex-col justify-end">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-tight max-w-2xl"
          >
            <span className="font-semibold">{t.hero.title}</span>
            <br />
            <span className="font-semibold">{t.hero.titleBold}</span>
          </h1>
        </div>

        {/* Bottom Right Content - Text Carousel & Buttons */}
        <div className="flex justify-end items-end w-full pr-0 lg:pr-16 xl:pr-24">
          <div ref={bottomContentRef} className="max-w-xl text-right flex flex-col items-end">
            <div className="h-24 md:h-28 mb-8 flex items-end justify-end">
              <p
                ref={textRef}
                className="text-lg md:text-xl lg:text-2xl text-white/95 font-light leading-relaxed drop-shadow-md"
              >
                {carouselItems[currentTextIndex]}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href="#services"
                className="btn-slide-fill group px-8 py-4 font-medium rounded-sm shadow-xl hover:shadow-2xl inline-flex items-center gap-3 justify-center"
              >
                <span>{t.hero.ctaWhatWeDo}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="btn-slide-fill group px-8 py-4 font-medium rounded-sm shadow-xl hover:shadow-2xl inline-flex items-center gap-3 justify-center"
              >
                <span>{t.hero.ctaProjects}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-float z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
