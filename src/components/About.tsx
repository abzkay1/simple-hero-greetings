
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-secondary" id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-cinzel-decorative text-gold">
              ABOUT <span className="text-white">PRESTIGE SPRAY</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Prestige Spray Solutions is a rapidly growing professional pressure washing company with operations 
              across London and Manchester. Since our establishment, we've built a reputation for excellence, 
              serving over 500 satisfied customers with our premium cleaning services.
            </p>
            <p className="text-gray-300 mb-6">
              Our dedicated team uses cutting-edge, commercial-grade equipment and environmentally conscious cleaning 
              solutions to deliver outstanding results. We're proud to be the only company in our service areas 
              offering a guaranteed 12-hour response time to all customer inquiries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>500+ Completed Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>12hr Response Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Multi-City Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Commercial Grade Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Eco-Friendly Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Fully Insured & Bonded</span>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/3fffa385-b2d4-479d-8b26-65c702e76571.png" 
                alt="Professional pressure washing in action cleaning patio tiles" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark-bg p-4 rounded shadow-lg border border-gold">
                <p className="text-gold font-bold text-xl">500+</p>
                <p className="text-sm">Happy Customers</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-success p-4 rounded shadow-lg">
                <p className="text-white font-bold text-lg">12hr</p>
                <p className="text-white text-xs">Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
