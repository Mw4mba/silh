'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Logo from './Logo';
import { useTranslation, type Language } from '../i18n/I18nContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { language, setLanguage, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ['EN', 'FR', 'SV'];
  const menuItems = [
    { label: t.navbar.services, href: '#services' },
    { label: t.navbar.projects, href: '#projects' },
    { label: t.navbar.about, href: '/about' },
    { label: t.navbar.contact, href: '/contact' },
  ];

  useEffect(() => {
    if (isMenuOpen && menuItemsRef.current) {
      gsap.set(menuItemsRef.current, { opacity: 1 });
      
      const items = menuItemsRef.current.querySelectorAll('a');
      gsap.fromTo(items, 
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
          delay: 0.1,
        }
      );
    }
  }, [isMenuOpen]);

  // Scroll effect for logo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageClick = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#2E7D32]/95 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex flex-col h-full justify-center items-center px-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white text-4xl font-light hover:rotate-90 transition-transform duration-300"
            >
              ×
            </button>
            
            <nav ref={menuItemsRef} className="flex flex-col gap-8 text-center">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-light text-white hover:text-[#A5D6A7] transition-colors tracking-tight"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Side Navbar - COWI Style */}
      <nav className="hidden lg:flex fixed right-0 top-0 h-screen w-20 bg-[#2E7D32] z-40 flex-col items-center justify-between py-8">
        {/* Hamburger at Top */}
        <button
          onClick={handleMenuClick}
          className="flex flex-col items-center justify-center w-12 h-12 group"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white mb-1.5 transition-all group-hover:w-7"></span>
          <span className="block h-0.5 w-6 bg-white mb-1.5 transition-all"></span>
          <span className="block h-0.5 w-6 bg-white transition-all group-hover:w-4"></span>
        </button>

        {/* Empty middle space */}
        <div className="flex-1"></div>

        {/* Logo at Bottom */}
        <div className="flex items-center justify-center mb-2">
          <Logo variant="light" size="sm" rotate={true} />
        </div>
      </nav>

      {/* Desktop Slide-out Menu - COWI Style */}
      {isMenuOpen && (
        <div className="hidden lg:block fixed right-20 top-0 h-screen w-80 bg-white shadow-2xl z-30">
          <div className="flex flex-col h-full justify-center px-12">
            <nav className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideInRight 0.3s ease-out forwards'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-0 h-px bg-[#2E7D32] group-hover:w-8 transition-all duration-300"></div>
                    <span className="text-2xl font-light text-[#37474F] group-hover:text-[#2E7D32] transition-colors tracking-tight">
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Top Bar - Language Selector (COWI minimalist style) */}
      <div className="fixed top-0 left-0 right-0 lg:right-20 h-16 bg-white/90 backdrop-blur-md z-50 lg:z-50 flex items-center justify-between px-6 border-b border-[#2E7D32]/10">
        {/* Language Selection (Left) */}
        <div className="flex items-center gap-3">
          {languages.map((lang, index) => (
            <React.Fragment key={lang}>
              <button
                onClick={() => handleLanguageClick(lang)}
                className={`text-sm font-medium tracking-wider transition-colors ${
                  lang === language
                    ? 'text-[#2E7D32]'
                    : 'text-[#37474F]/50 hover:text-[#37474F]'
                }`}
              >
                {lang}
              </button>
              {index < languages.length - 1 && (
                <span className="text-[#37474F]/30 text-sm">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Center - Logo and LBYA Label - Hidden on Mobile */}
        <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 transition-all duration-300 ${isScrolled ? 'gap-1.5' : 'gap-3'}`}>
          <div className={`transition-all duration-300 ${isScrolled ? 'scale-75' : 'scale-110'}`}>
            <Logo variant="dark" size="sm" />
          </div>
          <span 
            className={`font-bold tracking-[0.15em] text-[#2E7D32] leading-none transition-all duration-300 ${isScrolled ? 'text-[24px]' : 'text-[36px]'}`} 
            style={{ fontFamily: "'Ruslan Display', serif" }}
          >
            LBYA
          </span>
        </div>

        {/* Right - Theme Toggle Button - Hidden on Mobile */}
        <button
          onClick={toggleTheme}
          className="hidden lg:block p-2 rounded-full hover:bg-[#2E7D32]/10 transition-all group"
          aria-label="Toggle theme"
          title={theme === 'default' ? 'Switch to monochrome' : 'Switch to color'}
        >
          {theme === 'default' ? (
            <svg className="w-5 h-5 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          )}
        </button>

        {/* Mobile Hamburger (Right) */}
        <button
          onClick={handleMenuClick}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-[#2E7D32] rounded transition-transform origin-center ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#2E7D32] rounded transition-opacity ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#2E7D32] rounded transition-transform origin-center ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}
