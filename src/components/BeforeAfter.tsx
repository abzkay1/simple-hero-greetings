import React, { useState, useRef } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    const clampedPosition = Math.max(0, Math.min(100, position));
    setSliderPosition(clampedPosition);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleMove(e.clientX);
    
    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <h3 className="absolute top-4 left-4 z-10 bg-dark-bg/80 px-4 py-2 rounded-lg text-gold font-semibold">{title}</h3>
      
      <div 
        ref={containerRef} 
        className="relative w-full h-[300px] md:h-[400px] cursor-col-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (Full width) */}
        <div className="absolute inset-0">
          <img 
            src={beforeImage} 
            alt="Before cleaning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-dark-bg/80 px-3 py-1 rounded text-sm">Before</div>
        </div>
        
        {/* After Image (Partial width based on slider) */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={afterImage} 
            alt="After cleaning" 
            className="w-full h-full object-cover"
            style={{ 
              width: `${100 / sliderPosition * 100}%`, 
              maxWidth: sliderPosition > 0 ? 'none' : '100%'
            }}
          />
          <div className="absolute bottom-4 right-4 bg-dark-bg/80 px-3 py-1 rounded text-sm">After</div>
        </div>
        
        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-gold"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-dark-bg rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfter: React.FC = () => {
  const examples = [
    {
      id: 1,
      title: "Window Cleaning",
      before: "/lovable-uploads/2d60f0ce-fa58-4864-851d-71a1c5c7255b.png",
      after: "/lovable-uploads/d4596d64-5b91-45df-9a45-96f520d751a4.png"
    },
    {
      id: 2,
      title: "Driveway Transformation",
      before: "/lovable-uploads/f8815598-4c0c-4282-8289-dd0c434ef644.png",
      after: "/lovable-uploads/0ae7d8c3-45c6-4e44-94af-0993491d61c0.png"
    },
    {
      id: 3,
      title: "Patio Revival",
      before: "/lovable-uploads/c269f172-1527-483a-a216-59d900c41c8d.png",
      after: "/lovable-uploads/68651c4e-0f11-4a95-88fb-7ed56333d7f6.png"
    },
    {
      id: 4,
      title: "Brick Wall Cleaning",
      before: "/lovable-uploads/c6ed05fd-13a2-4627-bbca-f84e26dffbba.png",
      after: "/lovable-uploads/461f9db9-e40d-4b56-8937-d367ddbac3a1.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-secondary" id="gallery">
      <div className="container">
        <h2 className="section-title">BEFORE & AFTER</h2>
        <p className="section-subtitle text-gray-300">
          See the dramatic difference our professional cleaning services can make.
          Slide to reveal the transformation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {examples.map(example => (
            <BeforeAfterSlider
              key={example.id}
              beforeImage={example.before}
              afterImage={example.after}
              title={example.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
