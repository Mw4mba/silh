'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark' | 'sidebar';
  size?: 'sm' | 'md' | 'lg';
  rotate?: boolean;
}

export default function Logo({ variant = 'dark', size = 'md', rotate = false }: LogoProps) {
  const sizes = {
    sm: { width: 48, height: 48 },
    md: { width: 64, height: 64 },
    lg: { width: 96, height: 96 },
  };

  const logoSrc = variant === 'sidebar' ? '/logoB.svg' : '/logoA.svg';
  const filterClass = variant === 'sidebar' ? 'invert brightness-0 saturate-100' : '';

  return (
    <div
      className={`relative ${rotate ? 'rotate-90' : ''}`}
      style={{
        width: sizes[size].width,
        height: sizes[size].height,
      }}
    >
      <Image
        src={logoSrc}
        alt="LBYA AB"
        fill
        sizes="96px"
        className={`object-contain ${filterClass}`}
        style={variant === 'sidebar' ? { filter: 'invert(1) brightness(2)' } : undefined}
        priority
      />
    </div>
  );
}
