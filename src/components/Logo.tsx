import React from 'react';

export interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'auto' | 'marathi' | 'empty';
  title?: string;
}

/**
 * Official Lokshahi Patrakar Mahasangh Logo component.
 * Renders the high-resolution official emblem with fallback protection.
 */
export function Logo({
  className = 'h-10 w-10',
  size,
  variant = 'auto',
  title,
}: LogoProps) {
  if (variant === 'empty') {
    return (
      <div
        style={size ? { width: size, height: size } : undefined}
        className={`rounded-full border-2 border-dashed border-current/40 bg-current/5 shrink-0 transition-all ${className}`}
        aria-label={title || 'Logo placeholder (empty circle)'}
        role="img"
      />
    );
  }

  const logoAlt = title || 'लोकशाही पत्रकार महासंघ भारत Logo';

  return (
    <img
      src="/logo-transparent.png"
      onError={(e) => {
        // Fallback safely to cropped-logo or SVG without infinite loop
        if (e.currentTarget.src.includes('logo-transparent.png')) {
          e.currentTarget.src = '/cropped-logo.png';
        } else if (e.currentTarget.src.includes('cropped-logo.png')) {
          e.currentTarget.src = '/logo-official-mr.svg';
        }
      }}
      alt={logoAlt}
      title={logoAlt}
      style={size ? { width: size, height: size } : undefined}
      className={`shrink-0 object-contain rounded-full select-none ${className}`}
    />
  );
}

export function MarathiLogoGraphic(props: LogoProps) {
  return <Logo {...props} />;
}
