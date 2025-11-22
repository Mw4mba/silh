'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from '../i18n/I18nContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function SolutionsPageContent() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      if (heroRef.current && textRef.current) {
        gsap.from(textRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
        });
      }

      // Section Animations
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-24 px-6 bg-[#2E7D32]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1
              ref={textRef}
              className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none"
            >
              {t.solutions.hero}
            </h1>
          </div>
          <div className="flex justify-start md:justify-end">
            <p className="text-xl md:text-2xl text-white font-medium leading-snug max-w-md">
              {t.solutions.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Architecture Section */}
      <div
        id="sustainable"
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#2E7D32] mb-6">
              {t.solutions.sustainable.title}
            </h2>
            <p className="text-lg text-[#37474F]/70 font-light leading-relaxed mb-8">
              {t.solutions.sustainable.description}
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.sustainable.insights[0].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.sustainable.insights[0].description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.sustainable.insights[1].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.sustainable.insights[1].description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.sustainable.insights[2].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.sustainable.insights[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-[#2E7D32]/20" />
      </div>

      {/* Structural Engineering Section */}
      <div
        id="structural"
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#2E7D32] mb-6">
              {t.solutions.structural.title}
            </h2>
            <p className="text-lg text-[#37474F]/70 font-light leading-relaxed mb-8">
              {t.solutions.structural.description}
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.structural.insights[0].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.structural.insights[0].description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.structural.insights[1].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.structural.insights[1].description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.structural.insights[2].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.structural.insights[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-[#2E7D32]/20" />
      </div>

      {/* BIM-Based Workflow Section */}
      <div
        id="bim"
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#2E7D32] mb-6">
              {t.solutions.bim.title}
            </h2>
            <p className="text-lg text-[#37474F]/70 font-light leading-relaxed mb-8">
              {t.solutions.bim.description}
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.bim.insights[0].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.bim.insights[0].description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.bim.insights[1].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.bim.insights[1].description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.bim.insights[2].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.bim.insights[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-[#2E7D32]/20" />
      </div>

      {/* IT Solutions Section */}
      <div
        id="it"
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#2E7D32] mb-6">
              {t.solutions.it.title}
            </h2>
            <p className="text-lg text-[#37474F]/70 font-light leading-relaxed mb-8">
              {t.solutions.it.description}
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.it.insights[0].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.it.insights[0].description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.it.insights[1].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.it.insights[1].description}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#37474F] mb-3">
                {t.solutions.it.insights[2].title}
              </h3>
              <p className="text-[#37474F]/70 leading-relaxed">
                {t.solutions.it.insights[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}
