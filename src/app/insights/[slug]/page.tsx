'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { I18nProvider } from '../../i18n/I18nContext';
import { ThemeProvider } from '../../context/ThemeContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  // Placeholder article data - will be populated with real content later
  const articleTitle = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          
          <main className="w-full">
            <div className="max-w-4xl mx-auto px-6 py-24">
              <Link 
                href="/insights" 
                className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-[#1b5e20] mb-8 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Insights
              </Link>

        <div className="mb-8">
          <span className="px-4 py-2 bg-[#2E7D32] text-white text-xs font-semibold uppercase tracking-wider">
            Category
          </span>
          <p className="text-sm text-[#37474F]/60 mt-6 font-medium">Publication Date</p>
        </div>

        <h1 className="text-4xl md:text-5xl font-light text-[#2E7D32] mb-8 leading-tight">
          {articleTitle}
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[#37474F]/80 leading-relaxed mb-6">
            This is a placeholder article page. Content will be added later.
          </p>
          
          <p className="text-[#37474F]/80 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2 className="text-2xl font-light text-[#2E7D32] mt-12 mb-4">
            Section Heading
          </h2>

          <p className="text-[#37474F]/80 leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="bg-[#F5F5DC] p-8 rounded-sm my-8">
            <p className="text-[#2E7D32] font-medium italic">
              "This is a placeholder quote or callout. Real content will be added when the article is complete."
            </p>
          </div>

          <p className="text-[#37474F]/80 leading-relaxed mb-4">
            Additional article content will be developed and added here. This page structure 
            is ready to receive full article content including images, diagrams, and detailed analysis.
          </p>
        </div>

              <div className="mt-16 pt-8 border-t border-[#2E7D32]/20">
                <Link 
                  href="/insights" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#2E7D32] text-white font-medium rounded-sm hover:bg-[#1b5e20] transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to All Insights
                </Link>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
