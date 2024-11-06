import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function ParallaxSection({ 
  children, 
  className = '', 
  speed = 0.5 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = -(scrolled * speed);
        sectionRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}