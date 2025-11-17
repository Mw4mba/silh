'use client';

import { I18nProvider } from './i18n/I18nContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ITServicesSection from './components/ITServicesSection';
import InsightsSection from './components/InsightsSection';
import ProjectsSection from './components/ProjectsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <main className="w-full overflow-x-hidden">
          <Navbar />
          <HeroSection />
          <ServicesSection />
          <ITServicesSection />
          <InsightsSection />
          <ProjectsSection />
          <CTASection />
          <Footer />
        </main>
      </I18nProvider>
    </ThemeProvider>
  );
}
