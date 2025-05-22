import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center" id="home">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/6307439/pexels-photo-6307439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Pressure washing transformation" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl fade-in">
          <p className="text-gold uppercase tracking-widest mb-2">London & Manchester</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-cinzel-decorative">
            <span className="text-white">TRANSFORM YOUR PROPERTY</span>
            <br />
            <span className="text-gold">IN ONE SPRAY</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Professional pressure washing services for driveways, patios, 
            brick walls, fences, and more. Trusted by homeowners and businesses 
            throughout London and Manchester.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/447835296159?text=I'm%20interested%20in%20a%20quote%20for%20pressure%20washing%20services" 
              className="btn btn-primary flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a Quote <ArrowRight size={18} />
            </a>
            <a 
              href="#gallery" 
              className="btn btn-outline flex items-center justify-center gap-2"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;