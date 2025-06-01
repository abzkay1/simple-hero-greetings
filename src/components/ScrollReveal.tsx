
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 800,
  className = '' 
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const getAnimationClass = () => {
    const baseClass = `transition-all duration-${duration} ease-out`;
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClass} opacity-0 translate-y-12`;
        case 'down':
          return `${baseClass} opacity-0 -translate-y-12`;
        case 'left':
          return `${baseClass} opacity-0 translate-x-12`;
        case 'right':
          return `${baseClass} opacity-0 -translate-x-12`;
        case 'scale':
          return `${baseClass} opacity-0 scale-75`;
        case 'fade':
          return `${baseClass} opacity-0`;
        default:
          return `${baseClass} opacity-0 translate-y-12`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
