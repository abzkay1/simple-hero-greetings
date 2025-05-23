
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center" id="home">
      {/* Background London skyline image with adjusted visibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/65b3758e-d37e-497e-901f-e20167adfc4b.png" 
          alt="London Skyline" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Gradient overlay with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 to-dark-bg/80 z-0"></div>

      <div className="container relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-cinzel-decorative mb-6 text-gold fade-in">
          Prestige Spray
        </h1>
        <h2 className="text-2xl md:text-4xl text-white mb-8 slide-up">Professional Pressure Washing Services</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="btn btn-primary">Our Services</a>
          <a href="#contact" className="btn btn-outline">Get a Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
