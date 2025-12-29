'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import ServicesSection from './components/ServicesSection';
import InsightsSection from './components/InsightsSection';
import ProjectsSection from './components/ProjectsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <ServicesSection />
      <InsightsSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
