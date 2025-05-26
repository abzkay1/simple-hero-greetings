
import React, { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 3500); // Show for 3.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-dark-bg transition-all duration-800 ${
      !isVisible ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gold-secondary rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gold rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-gold-secondary rounded-full animate-pulse opacity-30 animation-delay-1500"></div>
      </div>

      {/* Main logo container */}
      <div className="relative flex flex-col items-center">
        {/* Logo with sophisticated animations */}
        <div className="relative mb-8 animate-logo-entrance">
          <img 
            src="/lovable-uploads/e21b92a2-7799-4a6c-9206-7de4c90dbf31.png" 
            alt="Prestige Spray Solutions" 
            className="h-32 md:h-40 w-auto max-w-[400px] filter brightness-110 animate-logo-glow"
          />
          
          {/* Elegant circular glow effect */}
          <div className="absolute inset-0 -z-10 animate-ring-expand">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-gold/20 to-gold-secondary/20 blur-xl animate-pulse-slow"></div>
          </div>
        </div>

        {/* Animated text */}
        <div className="text-center animate-text-reveal">
          <h2 className="text-2xl md:text-3xl font-cinzel-decorative text-gold mb-2 animate-shimmer-text">
            Professional Pressure Washing
          </h2>
          <p className="text-lg text-white/80 font-cinzel animate-fade-in-delayed">
            Excellence in Every Detail
          </p>
        </div>

        {/* Loading bar */}
        <div className="mt-8 w-64 h-1 bg-dark-secondary rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-gold-secondary to-gold rounded-full animate-loading-bar"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-12 -left-12 w-24 h-24 border border-gold/30 rounded-full animate-float-1"></div>
        <div className="absolute -bottom-12 -right-12 w-16 h-16 border border-gold-secondary/20 rounded-full animate-float-2"></div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gold-secondary rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
