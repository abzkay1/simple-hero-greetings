
import React from 'react';
import { CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useParallax } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const offsetY = useParallax();

  return (
    <section className="py-16 md:py-24 bg-dark-secondary overflow-hidden" id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" duration={1000}>
            <div>
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
                {[
                  "500+ Completed Projects",
                  "12hr Response Guarantee", 
                  "Multi-City Operations",
                  "Commercial Grade Equipment",
                  "Eco-Friendly Solutions",
                  "Fully Insured & Bonded"
                ].map((feature, index) => (
                  <ScrollReveal key={feature} direction="up" delay={100 * index} duration={600}>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-gold" size={20} />
                      <span>{feature}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={1000} delay={200}>
            <div className="relative">
              <div 
                className="transform transition-transform duration-1000 ease-out"
                style={{ transform: `translateY(${offsetY * 0.1}px)` }}
              >
                <img 
                  src="/lovable-uploads/3fffa385-b2d4-479d-8b26-65c702e76571.png" 
                  alt="Professional pressure washing in action cleaning patio tiles" 
                  className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <ScrollReveal direction="scale" delay={800}>
                <div className="absolute -bottom-6 -left-6 bg-dark-bg p-4 rounded shadow-lg border border-gold hover:shadow-glow transition-all duration-300">
                  <p className="text-gold font-bold text-xl">500+</p>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="scale" delay={1000}>
                <div className="absolute -top-6 -right-6 bg-success p-4 rounded shadow-lg hover:shadow-glow transition-all duration-300">
                  <p className="text-white font-bold text-lg">12hr</p>
                  <p className="text-white text-xs">Response Time</p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
