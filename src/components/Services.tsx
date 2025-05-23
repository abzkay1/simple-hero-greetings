
import React from 'react';
import { Home, Castle, Check, ShieldCheck, Clock, Leaf } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="bg-dark-secondary p-6 rounded-lg shadow-lg border border-gray-800 hover-scale">
      <div className="w-14 h-14 bg-dark-bg rounded-full flex items-center justify-center mb-4 text-gold">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="container">
        <h2 className="section-title">OUR SERVICES</h2>
        <p className="section-subtitle text-gray-300">
          We offer a comprehensive range of professional pressure washing services for residential
          and commercial properties in London and Manchester.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            title="Driveway Cleaning"
            description="Revitalize your driveway by removing stubborn oil stains, moss, weeds, and dirt. Suitable for concrete, block paving, and tarmac."
            icon={<Home size={28} />}
          />
          <ServiceCard
            title="Patio & Decking"
            description="Restore your outdoor living spaces to look brand new again. Eliminate algae, mold, and ingrained dirt from all types of patio and decking materials."
            icon={<Castle size={28} />}
          />
          <ServiceCard
            title="Brick & Stone Cleaning"
            description="Rejuvenate brick walls, stone facades, and masonry. Remove years of pollution, grime, and biological growth for a fresh appearance."
            icon={<Check size={28} />}
          />
          <ServiceCard
            title="Fence & Exterior Wood"
            description="Clean and prepare wooden fences and structures for refinishing or simply restore their natural appearance with our gentle cleaning process."
            icon={<ShieldCheck size={28} />}
          />
          <ServiceCard
            title="Window Detailing"
            description="Professional cleaning of windows, frames, and sills to remove dirt, grime, and hard water stains for crystal clear views and enhanced curb appeal."
            icon={<Home size={28} />}
          />
          <ServiceCard
            title="Commercial Services"
            description="Specialized cleaning solutions for commercial properties, storefronts, parking lots, and industrial spaces."
            icon={<Clock size={28} />}
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 p-4 bg-dark-secondary rounded-lg">
            <Leaf className="text-success" size={24} />
            <p className="text-gray-300">
              We use <span className="text-success font-semibold">eco-friendly cleaning solutions</span> that are safe for your family, pets, and garden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
