'use client';

import { I18nProvider } from './i18n/I18nContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import InsightsSection from './components/InsightsSection';
import ProjectsSection from './components/ProjectsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <I18nProvider>
      <main className="w-full overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <InsightsSection />
        <ProjectsSection />
        <CTASection />
        <Footer />
      </main>
    </I18nProvider>
  );
}
