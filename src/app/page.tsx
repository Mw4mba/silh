'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import InsightsSection from './components/InsightsSection';
import ProjectsSection from './components/ProjectsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

type Language = 'EN' | 'FR' | 'SV';

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('EN');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    // Here you can add i18n logic later
  };

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar currentLang={currentLanguage} onLanguageChange={handleLanguageChange} />
      <HeroSection />
      <ServicesSection />
      <InsightsSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
