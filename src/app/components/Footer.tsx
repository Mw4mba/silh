'use client';

import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#37474F] text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-4 text-[#A5D6A7] leading-relaxed font-light">
              Sustainable engineering and architecture for a better tomorrow. 
              Creating spaces that breathe with the planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Infrastructure Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Digital Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-[#A5D6A7] hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A5D6A7] hover:text-white transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@company.com" className="text-[#A5D6A7] hover:text-white transition-colors">
                  info@company.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-[#A5D6A7] hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-[#A5D6A7]">123 Engineering St, Tech City, TC 12345</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#A5D6A7]">© 2025 Engineering Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-[#A5D6A7] hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-[#A5D6A7] hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-[#A5D6A7] hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-[#A5D6A7] hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
