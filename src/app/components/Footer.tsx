'use client';

import React from 'react';
import Logo from './Logo';
import { useTranslation } from '../i18n/I18nContext';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative w-full bg-[#37474F] text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
              LBYA
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-2xl mb-6">Shortcuts</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-[#A5D6A7] hover:text-white transition-colors uppercase">
                  {t.footer.company.about}
                </a>
              </li>
              <li>
                <a href="/careers" className="text-[#A5D6A7] hover:text-white transition-colors uppercase">
                  {t.footer.company.careers}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A5D6A7] hover:text-white transition-colors uppercase">
                  {t.footer.company.news}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors uppercase">
                  {t.footer.services.sustainable}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors uppercase">
                  {t.footer.services.structural}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors uppercase">
                  {t.footer.services.bim}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A5D6A7] hover:text-white transition-colors uppercase">
                  {t.footer.services.climate}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.company.contact}</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@lbya.se" className="text-[#A5D6A7] hover:text-white transition-colors uppercase">
                  info@lbya.se
                </a>
              </li>
              <li>
                <a href="tel:+46765960161" className="text-[#A5D6A7] hover:text-white transition-colors uppercase">
                  +46 76 596 01 61
                </a>
              </li>
              <li className="text-[#A5D6A7] uppercase">Gamla Enköpingsvägen 150, 174 64 Sundbyberg, Sweden</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#A5D6A7] text-sm">
              2025 <span style={{ fontFamily: "'Ruslan Display', serif", fontSize: '1.3em', lineHeight: '1' }}>LBYA</span> AB. {t.footer.copyright.replace('2025 LBYA AB. ', '')}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/privacy" className="text-[#A5D6A7] hover:text-white transition-colors">
                Data Privacy
              </a>
              <a href="/privacy#cookies" className="text-[#A5D6A7] hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="/privacy" className="text-[#A5D6A7] hover:text-white transition-colors">
                Data protection commitment
              </a>
              <a href="/consent" className="text-[#A5D6A7] hover:text-white transition-colors">
                Manage consent
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
