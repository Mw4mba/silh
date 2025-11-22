'use client';

import React from 'react';
import Logo from './Logo';
import { useTranslation } from '../i18n/I18nContext';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative w-full bg-[#37474F] text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="relative w-32 h-32 mb-4">
              <img
                src="/logoA.svg"
                alt="LBYA AB"
                className="w-full h-full object-contain"
                style={{ filter: 'invert(1) brightness(2)' }}
              />
            </div>
            <p className="text-white text-3xl font-['Ruslan_Display'] mb-4 text-center" style={{ width: '128px' }}>
              LBYA AB
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-bold text-lg mb-6">Pages</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-[#A5D6A7] hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/insights" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="/careers" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-[#A5D6A7] hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.services.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.services.sustainable}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.services.structural}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.services.bim}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.services.climate}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.company.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.company.about}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.resources.projects}
                </a>
              </li>
              <li>
                <a href="/careers" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.company.careers}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.company.news}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.company.contact}</h4>
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
            <p className="text-[#A5D6A7]">{t.footer.copyright}</p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-[#A5D6A7] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="https://www.linkedin.com/company/lbya/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[#A5D6A7] hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
