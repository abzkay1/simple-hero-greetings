
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center" id="home">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg z-0"></div>

      <div className="container relative z-10 text-center">
        <h1 className="text-7xl md:text-9xl font-cinzel-decorative mb-6 text-gold">
          hi
        </h1>
      </div>
    </section>
  );
};

export default Hero;
