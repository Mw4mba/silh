'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-light text-[#2E7D32] mb-6 leading-tight">
            Careers at <span className="font-semibold">LBYA</span>
          </h1>
          <p className="text-xl text-[#37474F]/80 leading-relaxed">
            Build a career that's as unique as you. Join our team of innovators shaping a sustainable future.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-light text-[#2E7D32] mb-6">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5DC] p-8 rounded-sm">
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-sm mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#2E7D32] mb-3">Impactful Work</h3>
              <p className="text-[#37474F]/80">
                Contribute to projects that make a real difference in creating a sustainable future.
              </p>
            </div>

            <div className="bg-[#F5F5DC] p-8 rounded-sm">
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-sm mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#2E7D32] mb-3">Collaborative Culture</h3>
              <p className="text-[#37474F]/80">
                Work with talented professionals in an environment that values diversity and teamwork.
              </p>
            </div>

            <div className="bg-[#F5F5DC] p-8 rounded-sm">
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-sm mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#2E7D32] mb-3">Growth & Development</h3>
              <p className="text-[#37474F]/80">
                Access continuous learning opportunities and clear career progression paths.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-light text-[#2E7D32] mb-6">Open Positions</h2>
          <p className="text-[#37474F]/80 mb-8">
            Explore current opportunities to join our team. More positions will be added as they become available.
          </p>
          
          <div className="space-y-4">
            {/* Placeholder job listings */}
            {[
              { title: 'Senior Structural Engineer', location: 'Stockholm, Sweden', type: 'Full-time' },
              { title: 'Sustainable Architecture Lead', location: 'Copenhagen, Denmark', type: 'Full-time' },
              { title: 'BIM Specialist', location: 'Paris, France', type: 'Full-time' },
              { title: 'Climate Adaptation Consultant', location: 'Remote', type: 'Full-time' },
            ].map((job, index) => (
              <div key={index} className="border border-[#2E7D32]/20 rounded-sm p-6 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-[#2E7D32]">{job.title}</h3>
                  <span className="px-3 py-1 bg-[#A5D6A7]/30 text-[#2E7D32] text-sm rounded-full font-medium">
                    {job.type}
                  </span>
                </div>
                <p className="text-[#37474F]/60 mb-4">{job.location}</p>
                <div className="flex gap-4">
                  <button className="inline-flex items-center gap-2 text-[#2E7D32] font-medium hover:gap-3 transition-all">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E7D32] text-white text-sm font-medium rounded-sm hover:bg-[#1b5e20] transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#2E7D32] text-white p-12 rounded-sm">
          <h2 className="text-3xl font-light mb-4">Don't see the right position?</h2>
          <p className="text-white/90 mb-6 text-lg">
            We're always looking for talented individuals. Send us your CV and tell us why you'd like to join LBYA.
          </p>
          <button className="px-8 py-4 bg-white text-[#2E7D32] font-medium rounded-sm hover:bg-[#A5D6A7] transition-all shadow-lg hover:shadow-xl">
            Submit Your Application
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
