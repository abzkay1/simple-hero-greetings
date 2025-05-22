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
              Prestige Spray Solutions is a youth-led professional pressure washing company serving London and Manchester. 
              We're passionate about transforming outdoor spaces and restoring properties to their former glory.
            </p>
            <p className="text-gray-300 mb-6">
              Using professional-grade equipment and environmentally friendly cleaning solutions, we ensure remarkable results
              every time - revealing the hidden beauty beneath years of dirt, grime, and weathering.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Professional Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Fast Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Eco-Friendly Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Free Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold" size={20} />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional pressure washing" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark-bg p-4 rounded shadow-lg border border-gold">
                <p className="text-gold font-bold text-xl">5+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;