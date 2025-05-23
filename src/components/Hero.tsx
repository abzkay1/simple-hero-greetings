
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center" id="home">
      {/* Background city skyline image with heavy dimming */}
      <div className="absolute inset-0 bg-dark-bg/90 z-0">
        <img 
          src="https://images.pexels.com/photos/220147/pexels-photo-220147.jpeg" 
          alt="UK City Skyline" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Additional gradient overlay for more dimming */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg z-0"></div>

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
