
import React from 'react';
import { Home, Castle, Check, ShieldCheck, Clock, Leaf } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}> = ({ title, description, icon, delay = 0 }) => {
  return (
    <ScrollReveal direction="up" delay={delay} duration={800}>
      <div className="bg-dark-secondary p-6 rounded-lg shadow-lg border border-gray-800 hover-scale group hover:border-gold/50 transition-all duration-500">
        <div className="w-14 h-14 bg-dark-bg rounded-full flex items-center justify-center mb-4 text-gold group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gold group-hover:text-gold-secondary transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{description}</p>
      </div>
    </ScrollReveal>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Driveway Cleaning",
      description: "Revitalize your driveway by removing stubborn oil stains, moss, weeds, and dirt. Suitable for concrete, block paving, and tarmac.",
      icon: <Home size={28} />
    },
    {
      title: "Patio & Decking",
      description: "Restore your outdoor living spaces to look brand new again. Eliminate algae, mold, and ingrained dirt from all types of patio and decking materials.",
      icon: <Castle size={28} />
    },
    {
      title: "Brick & Stone Cleaning",
      description: "Rejuvenate brick walls, stone facades, and masonry. Remove years of pollution, grime, and biological growth for a fresh appearance.",
      icon: <Check size={28} />
    },
    {
      title: "Fence & Exterior Wood",
      description: "Clean and prepare wooden fences and structures for refinishing or simply restore their natural appearance with our gentle cleaning process.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "Window Detailing",
      description: "Professional cleaning of windows, frames, and sills to remove dirt, grime, and hard water stains for crystal clear views and enhanced curb appeal.",
      icon: <Home size={28} />
    },
    {
      title: "Commercial Services",
      description: "Specialized cleaning solutions for commercial properties, storefronts, parking lots, and industrial spaces.",
      icon: <Clock size={28} />
    }
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden" id="services">
      <div className="container">
        <ScrollReveal direction="fade" duration={1000}>
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="section-subtitle text-gray-300">
            We offer a comprehensive range of professional pressure washing services for residential
            and commercial properties in London and Manchester.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 150}
            />
          ))}
        </div>

        <ScrollReveal direction="scale" delay={800} duration={1000}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center gap-2 p-4 bg-dark-secondary rounded-lg hover:bg-dark-bg transition-all duration-500 hover:shadow-glow">
              <Leaf className="text-success animate-pulse" size={24} />
              <p className="text-gray-300">
                We use <span className="text-success font-semibold">eco-friendly cleaning solutions</span> that are safe for your family, pets, and garden.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
