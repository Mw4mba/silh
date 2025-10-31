'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Copenhagen Waterfront District',
    location: 'Denmark',
    category: 'Mixed-Use Development',
    description: 'A climate-adaptive waterfront district integrating green roofs, tidal parks, and carbon-neutral buildings that set new standards for urban resilience.',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2069&auto=format&fit=crop',
    year: '2025',
  },
  {
    id: 2,
    title: 'Stockholm Central Station Expansion',
    location: 'Sweden',
    category: 'Transport Infrastructure',
    description: 'Modernizing a heritage structure with seismic retrofitting and energy-efficient systems while preserving its architectural character.',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2073&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: 3,
    title: 'Green Valley Business Park',
    location: 'France',
    description: 'A net-zero office campus featuring biomimetic facades, rainwater harvesting, and integrated biodiversity corridors.',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    year: '2024',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            delay: index * 0.1,
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-[#2E7D32]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 text-center"
        >
          Pioneering <span className="font-semibold">projects</span>
        </h2>
        <p className="text-center text-white/80 text-lg mb-16 max-w-3xl mx-auto font-light">
          Across the globe, we work with clients to dream big, challenge conventions and transform our world for the better.
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`relative h-96 overflow-hidden rounded-sm ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#2E7D32]/60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-[#A5D6A7] text-sm font-semibold mb-2">{project.location} • {project.year}</p>
                <h3 className="text-4xl font-light text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6 text-lg font-light">
                  {project.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white font-medium border-b-2 border-white/40 hover:border-white pb-1 group-hover:gap-4 transition-all"
                >
                  <span>View project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#2E7D32] font-medium rounded-sm hover:bg-[#A5D6A7] transition-all shadow-xl hover:shadow-2xl"
          >
            <span>View all projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
