
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center" id="home">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg z-0"></div>

      <div className="container relative z-10 text-center">
        <div className="mb-6 fade-in">
          <img 
            src="/lovable-uploads/e21b92a2-7799-4a6c-9206-7de4c90dbf31.png" 
            alt="Prestige Spray" 
            className="h-auto w-4/5 md:w-3/4 lg:w-2/3 mx-auto"
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
