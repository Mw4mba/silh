'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import TransitionLink from './TransitionLink';
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

  const languageOptions = [
    { code: 'EN' as Language, name: 'English (Global)' },
    { code: 'FR' as Language, name: 'Français' },
    { code: 'SV' as Language, name: 'Svenska' },
  ];
  const menuItems = [
    { label: 'Solutions', href: '/solutions' },
    { label: t.navbar.about, href: '/about' },
    { label: t.navbar.insights, href: '/insights' },
    { label: t.navbar.careers, href: '/careers' },
    { label: t.navbar.contact, href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
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
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#2E7D32] z-[61] lg:hidden shadow-2xl flex flex-col justify-center items-center px-8"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white text-4xl font-light hover:rotate-90 transition-transform duration-300"
            >
              ×
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {menuItems.map((item) => (
                <TransitionLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-light text-white hover:text-[#A5D6A7] transition-colors tracking-tight"
                >
                  {item.label}
                </TransitionLink>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Desktop Side Navbar - COWI Style */}
      <nav
        ref={sidebarRef}
        className="hidden lg:flex fixed right-0 top-0 h-screen w-14 bg-[#37474F] z-40 flex-col items-center justify-between py-8"
      >
        {/* Hamburger at Top */}
        <button
          onClick={handleMenuClick}
          className="flex flex-col items-center justify-center w-12 h-12 group"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-7 bg-white mb-1.5 transition-all group-hover:w-8"></span>
          <span className="block h-0.5 w-7 bg-white mb-1.5 transition-all"></span>
          <span className="block h-0.5 w-7 bg-white transition-all group-hover:w-5"></span>
        </button>

        {/* Empty middle space */}
        <div className="flex-1"></div>

        {/* Logo at Bottom */}
        <div className="flex items-center justify-center mb-2">
          <TransitionLink href="/">
            <Logo variant="sidebar" size="sm" rotate={true} />
          </TransitionLink>
        </div>
      </nav>

      {/* Desktop Slide-out Menu - COWI Style */}
      <div
        ref={desktopMenuRef}
        className="hidden lg:block fixed right-14 top-0 h-screen w-80 bg-[#37474F] shadow-2xl z-30"
        style={{ transform: 'translateX(100%)' }}
      >
        <div className="flex flex-col h-full justify-center px-12">
          <nav ref={menuItemsRef} className="flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <TransitionLink
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
              </TransitionLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Top Bar - Language Selector (COWI minimalist style) */}
      <div className="fixed top-0 left-0 right-0 lg:right-14 h-20 bg-[#2E7D32] backdrop-blur-md z-50 lg:z-50 flex items-center justify-between px-6 border-b border-white/10">
        {/* Language Selection (Left) */}
        <div className="flex items-center gap-1">
          {/* Main Language Buttons - Hidden on Mobile */}
          <div className="hidden md:flex items-center">
            {(['EN', 'FR', 'SV'] as Language[]).map((lang, index) => (
              <button
                key={lang}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${lang === language
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
                  } ${index < 2 ? 'border-r border-white/30' : ''}`}
                onClick={() => handleLanguageClick(lang)}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Dropdown for additional languages (desktop) / Main dropdown (mobile) */}
          <div className="relative md:ml-1">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center justify-center gap-1 text-white/80 hover:text-white transition-colors focus:outline-none"
              aria-label="Select language"
            >
              {/* Show current language code on mobile */}
              <span className="md:hidden text-sm font-medium">{language}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsLangMenuOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-sm border border-[#2E7D32]/10 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      className={`text-sm px-4 py-2.5 hover:bg-[#F5F5DC] transition-colors text-left ${lang.code === language
                        ? 'text-[#2E7D32] font-semibold bg-[#F5F5DC]/50'
                        : 'text-[#37474F]/70 font-medium'
                        }`}
                      onClick={() => {
                        handleLanguageClick(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Center - Logo and LBYA Label */}
        <TransitionLink href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4">

          <span
            className="font-bold tracking-[0.15em] text-white leading-none text-2xl md:text-[42px]"
            style={{ fontFamily: "'Ruslan Display', serif" }}
          >
            LBYA
          </span>
        </TransitionLink>

        {/* Mobile Hamburger (Right) */}
        <button
          onClick={handleMenuClick}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white rounded transition-transform origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded transition-opacity ${isMenuOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded transition-transform origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          />
        </button>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
