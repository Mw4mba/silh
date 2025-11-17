'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { I18nProvider } from '../i18n/I18nContext';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from '../i18n/I18nContext';

function InsightsPageContent() {
  const { t } = useTranslation();

  const insights = [
    {
      id: 1,
      ...t.insights.items.climate,
      image: '/images/insights/climate-resilience.jpg',
      slug: 'designing-for-climate-resilience-in-urban-environments',
    },
    {
      id: 2,
      ...t.insights.items.materials,
      image: '/images/insights/carbon-materials.jpg',
      slug: 'the-future-of-structural-engineering-carbon-negative-materials',
    },
    {
      id: 3,
      ...t.insights.items.digitalTwin,
      image: '/images/insights/digital-twin.jpg',
      slug: 'bim-to-digital-twin-bridging-design-and-operations',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative py-32 bg-[#2E7D32] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Insights & <span className="font-semibold">Innovation</span>
            </h1>
            <p className="text-xl font-light leading-relaxed">
              {t.insights.subtitle}
            </p>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#2E7D32] mb-12 text-center">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight) => (
                <Link
                  key={insight.id}
                  href={`/insights/${insight.slug}`}
                  className="group bg-white hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm border border-[#2E7D32]/10"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
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

                    <span className="inline-flex items-center gap-2 text-[#2E7D32] font-semibold text-sm group-hover:gap-4 transition-all">
                      <span>{t.insights.readArticle}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-[#F5F5DC]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#2E7D32] mb-12 text-center">Explore by Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-sm hover:shadow-lg transition-all cursor-pointer">
                <h3 className="text-xl font-semibold text-[#2E7D32] mb-2">Climate</h3>
                <p className="text-[#37474F]/70 text-sm">3 articles</p>
              </div>
              
              <div className="p-6 bg-white rounded-sm hover:shadow-lg transition-all cursor-pointer">
                <h3 className="text-xl font-semibold text-[#2E7D32] mb-2">Innovation</h3>
                <p className="text-[#37474F]/70 text-sm">5 articles</p>
              </div>
              
              <div className="p-6 bg-white rounded-sm hover:shadow-lg transition-all cursor-pointer">
                <h3 className="text-xl font-semibold text-[#2E7D32] mb-2">Technology</h3>
                <p className="text-[#37474F]/70 text-sm">4 articles</p>
              </div>
              
              <div className="p-6 bg-white rounded-sm hover:shadow-lg transition-all cursor-pointer">
                <h3 className="text-xl font-semibold text-[#2E7D32] mb-2">Sustainability</h3>
                <p className="text-[#37474F]/70 text-sm">6 articles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-[#2E7D32] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-6">Stay Updated</h2>
            <p className="text-xl font-light mb-8">
              Subscribe to receive our latest insights and innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-sm text-[#37474F] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-[#2E7D32] font-medium rounded-sm hover:bg-[#A5D6A7] transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function InsightsPage() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <InsightsPageContent />
      </I18nProvider>
    </ThemeProvider>
  );
}
