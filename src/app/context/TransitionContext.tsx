'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigate: () => { },
});

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (href: string) => {
    if (isTransitioning) return;
    if (href === pathname) return;

    setIsTransitioning(true);

    // Animate Overlay In
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.inOut',
        onStart: () => {
          if (overlayRef.current) overlayRef.current.style.pointerEvents = 'auto';
        },
        onComplete: () => {
          router.push(href);
        }
      });
    }
  };

  // Listen for pathname changes to animate out
  useEffect(() => {
    if (isTransitioning && overlayRef.current) {
      // We have arrived at the new page
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 0.1, // Slight delay to allow page to render
        ease: 'power2.inOut',
        onComplete: () => {
          setIsTransitioning(false);
          if (overlayRef.current) overlayRef.current.style.pointerEvents = 'none';
        }
      });
    }
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-[#F5F5DC] z-30 opacity-0 pointer-events-none"
        aria-hidden="true"
      />
    </TransitionContext.Provider>
  );
};
