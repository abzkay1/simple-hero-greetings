
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center" id="home">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg z-0"></div>

      <div className="container relative z-10 text-center">
        {/* Logo image */}
        <div className="w-full flex justify-center mb-8">
          <img 
            src="/lovable-uploads/581d0133-4e23-4ac6-a7f5-340422708da4.png" 
            alt="Prestige Spray Solutions" 
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
        
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
