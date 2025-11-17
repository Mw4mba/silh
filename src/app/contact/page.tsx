'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-[#1b5e20] mb-8 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-light text-[#2E7D32] mb-6 leading-tight">
            Get in <span className="font-semibold">Touch</span>
          </h1>
          <p className="text-xl text-[#37474F]/80 leading-relaxed">
            Let's discuss how we can bring your sustainable engineering vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#F5F5DC] p-8 rounded-sm">
            <h2 className="text-2xl font-light text-[#2E7D32] mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#37474F] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-[#2E7D32]/20 rounded-sm focus:outline-none focus:border-[#2E7D32] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#37474F] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-[#2E7D32]/20 rounded-sm focus:outline-none focus:border-[#2E7D32] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#37474F] mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-[#2E7D32]/20 rounded-sm focus:outline-none focus:border-[#2E7D32] transition-colors"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#37474F] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-[#2E7D32]/20 rounded-sm focus:outline-none focus:border-[#2E7D32] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#2E7D32] text-white font-medium rounded-sm hover:bg-[#1b5e20] transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light text-[#2E7D32] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A5D6A7] rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#37474F]">Email</p>
                    <a href="mailto:info@lbya.com" className="text-[#2E7D32] hover:text-[#1b5e20]">
                      info@lbya.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A5D6A7] rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#37474F]">Phone</p>
                    <a href="tel:+1234567890" className="text-[#2E7D32] hover:text-[#1b5e20]">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A5D6A7] rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#37474F]">Address</p>
                    <p className="text-[#37474F]/80">
                      123 Engineering Street<br />
                      Tech City, TC 12345<br />
                      Country
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5DC] p-8 rounded-sm">
              <h3 className="text-xl font-light text-[#2E7D32] mb-4">Office Hours</h3>
              <div className="space-y-2 text-[#37474F]/80">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
