'use client';

import React from 'react';
import Logo from './Logo';
import { useTranslation } from '../i18n/I18nContext';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative w-full bg-[#37474F] text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-4 text-[#A5D6A7] leading-relaxed font-light">
              {t.footer.tagline}
            </p>
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
                <a href="#about" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.company.about}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#A5D6A7] hover:text-white transition-colors">
                  {t.footer.resources.projects}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A5D6A7] hover:text-white transition-colors">
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
