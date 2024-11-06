import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`backdrop-blur-md bg-cream/30 border border-cream/20 shadow-lg ${className}`}>
      {children}
    </div>
  );
}