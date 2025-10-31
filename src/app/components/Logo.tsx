'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  rotate?: boolean;
}

export default function Logo({ variant = 'dark', size = 'md', rotate = false }: LogoProps) {
  const sizes = {
    sm: { width: 48, height: 48 },
    md: { width: 64, height: 64 },
    lg: { width: 96, height: 96 },
  };

  return (
    <div 
      className={`relative ${rotate ? 'rotate-90' : ''}`}
      style={{
        width: sizes[size].width,
        height: sizes[size].height,
      }}
    >
      <Image
        src="/silh.png"
        alt="Silh Engineering"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
