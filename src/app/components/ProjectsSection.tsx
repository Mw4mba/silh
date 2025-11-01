'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../i18n/I18nContext';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      id: 1,
      ...t.projects.items.copenhagen,
      image: '/images/projects/copenhagen.jpg',
    },
    {
      id: 2,
      ...t.projects.items.stockholm,
      image: '/images/projects/stockholm.jpg',
    },
    {
      id: 3,
      ...t.projects.items.greenValley,
      image: '/images/projects/green-valley.jpg',
    },
  ];

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
          {t.projects.title}
        </h2>
        <p className="text-center text-white/80 text-lg mb-16 max-w-3xl mx-auto font-light">
          {t.projects.subtitle}
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
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#2E7D32]/60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-[#A5D6A7] text-sm font-semibold mb-2">{project.location}</p>
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
                  <span>{t.projects.viewProject}</span>
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
