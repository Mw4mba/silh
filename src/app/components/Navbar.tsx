'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import Logo from './Logo';
import { useTranslation, type Language } from '../i18n/I18nContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { language, setLanguage, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ['EN', 'FR', 'SV'];
  const moreLanguages = ['DE', 'ES', 'IT', 'PT', 'NL'];
  const menuItems = [
    { label: t.navbar.services, href: '/#services' },
    { label: t.navbar.projects, href: '/#projects' },
    { label: t.navbar.about, href: '/about' },
    { label: t.navbar.insights, href: '/insights' },
    { label: t.navbar.careers, href: '/careers' },
    { label: t.navbar.contact, href: '/contact' },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    if (isMenuOpen) {
      // Desktop Animation
      if (desktopMenuRef.current) {
        tl.to(desktopMenuRef.current, {
          x: 0,
          duration: 0.5,
          ease: 'power3.out'
        });
      }
      
      if (sidebarRef.current) {
        gsap.to(sidebarRef.current, {
          borderLeftColor: 'transparent',
          duration: 0.3
        });
      }

      if (menuItemsRef.current) {
        const items = menuItemsRef.current.querySelectorAll('a');
        gsap.fromTo(items, 
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
        );
      }
    } else {
      // Close Animation
      if (desktopMenuRef.current) {
        tl.to(desktopMenuRef.current, {
          x: '100%',
          duration: 0.5,
          ease: 'power3.inOut'
        });
      }
      
      if (sidebarRef.current) {
        gsap.to(sidebarRef.current, {
          borderLeftColor: 'white',
          duration: 0.3
        });
      }
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
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#2E7D32] z-[61] lg:hidden border-l border-white shadow-2xl flex flex-col justify-center items-center px-8"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white text-4xl font-light hover:rotate-90 transition-transform duration-300"
            >
              ×
            </button>
            
            <nav className="flex flex-col gap-8 text-center">
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
        </>
      )}

      {/* Desktop Side Navbar - COWI Style */}
      <nav 
        ref={sidebarRef}
        className="hidden lg:flex fixed right-0 top-0 h-screen w-20 bg-[#2E7D32] z-40 flex-col items-center justify-between py-8 border-l border-white"
      >
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
          <Link href="/">
            <Logo variant="light" size="sm" rotate={true} />
          </Link>
        </div>
      </nav>

      {/* Desktop Slide-out Menu - COWI Style */}
      <div 
        ref={desktopMenuRef}
        className="hidden lg:block fixed right-20 top-0 h-screen w-80 bg-[#2E7D32] shadow-2xl z-30 border-l border-white"
        style={{ transform: 'translateX(100%)' }}
      >
        <div className="flex flex-col h-full justify-center px-12">
          <nav ref={menuItemsRef} className="flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-0 h-px bg-white group-hover:w-8 transition-all duration-300"></div>
                  <span className="text-2xl font-light text-white/80 group-hover:text-white transition-colors tracking-tight">
                    {item.label}
                  </span>
                </div>
              </a>
            ))}
          </nav>
        </div>
      </div>

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
          
          {/* More Languages Dropdown */}
          <div className="relative ml-1">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center justify-center w-4 h-4 text-[#37474F]/50 hover:text-[#2E7D32] transition-colors focus:outline-none"
              aria-label="More languages"
            >
              <svg 
                className={`w-3 h-3 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangMenuOpen && (
              <div className="absolute top-full left-0 mt-2 py-2 w-16 bg-white shadow-lg rounded-sm border border-[#2E7D32]/10 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {moreLanguages.map((lang) => (
                  <button
                    key={lang}
                    className="text-sm font-medium text-[#37474F]/50 hover:text-[#2E7D32] hover:bg-[#F5F5DC] py-1.5 transition-colors w-full text-center"
                    onClick={() => setIsLangMenuOpen(false)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center - Logo and LBYA Label - Hidden on Mobile */}
        <Link href="/" className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 transition-all duration-300 ${isScrolled ? 'gap-1.5' : 'gap-3'}`}>
          <div className={`transition-all duration-300 ${isScrolled ? 'scale-75' : 'scale-110'}`}>
            <Logo variant="dark" size="sm" />
          </div>
          <span 
            className={`font-bold tracking-[0.15em] text-[#2E7D32] leading-none transition-all duration-300 ${isScrolled ? 'text-[24px]' : 'text-[36px]'}`} 
            style={{ fontFamily: "'Ruslan Display', serif" }}
          >
            LBYA
          </span>
        </Link>

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
