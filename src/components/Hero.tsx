
import React from 'react';

const Hero: React.FC = () => {
  return <section className="relative h-screen flex items-center justify-center" id="home">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg z-0"></div>

      <div className="container relative z-10 text-center">
        <div className="py-0 fade-in px-4 md:px-8 lg:px-16 mx-auto max-w-4xl">
          <img 
            src="/lovable-uploads/e21b92a2-7799-4a6c-9206-7de4c90dbf31.png" 
            alt="Prestige Spray" 
            className="h-auto w-2/3 md:w-1/2 lg:w-2/5 mx-auto object-contain"
          />
        </div>
        <h2 className="text-2xl md:text-4xl text-white mb-8 slide-up">Professional Pressure Washing Services</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="btn btn-primary">Our Services</a>
          <a href="#contact" className="btn btn-outline">Get a Quote</a>
        </div>
      </div>
    </section>;
};

export default Hero;
