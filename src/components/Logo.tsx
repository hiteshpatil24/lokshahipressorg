import React from 'react';

export interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'auto' | 'marathi' | 'empty';
  title?: string;
}

/**
 * Universal Empty Circle Logo placeholder.
 * Replaces the logo graphic with a clean circular placeholder.
 */
export function Logo({
  className = 'h-10 w-10',
  size,
  title,
}: LogoProps) {
  return (
    <img
      src="/favicon.svg"
      alt={title || 'Lokshahi Patrakar Mahasangh Bharat Logo'}
      style={size ? { width: size, height: size } : undefined}
      className={`rounded-full object-contain shrink-0 transition-all ${className}`}
    />
  );
}

export function MarathiLogoGraphic(props: LogoProps) {
  return <Logo {...props} />;
}
