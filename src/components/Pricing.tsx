
import React from 'react';
import { Check, Star, Sparkles, Clock, Shield } from 'lucide-react';

const PricingCard: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
}> = ({ title, price, description, features, isPopular = false, badge }) => {
  return (
    <div className={`relative bg-dark-secondary p-8 rounded-lg shadow-lg border ${
      isPopular ? 'border-gold scale-105 z-10' : 'border-gray-800'
    } hover-scale animate-fade-in`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse">
          <span className="bg-gold text-dark-bg px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
            <Star size={16} />
            MOST POPULAR
          </span>
        </div>
      )}
      
      {badge && (
        <div className="absolute top-4 right-4 animate-scale-in">
          <span className="bg-gold-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 text-gold animate-slide-up">{title}</h3>
        <div className="mb-3">
          <span className="text-4xl font-bold text-white animate-scale-in">{price}</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check size={12} className="text-gold" />
            </div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="https://wa.me/447835296159?text=I'm%20interested%20in%20the%20Premium%20Package%20for%20£450" 
        className={`btn w-full text-center transition-all duration-300 transform hover:scale-105 ${isPopular ? 'btn-primary' : 'btn-outline'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started Today
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-16 md:py-24" id="pricing">
      <div className="container">
        <h2 className="section-title animate-fade-in">TRANSPARENT PRICING</h2>
        <p className="section-subtitle text-gray-300 animate-slide-up">
          No hidden fees, no surprises. Choose the perfect package for your property 
          and see the transformation for yourself.
        </p>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 mb-16">
          <PricingCard
            title="Driveway Only"
            price="£350"
            description="Perfect for driveway cleaning and restoration"
            features={[
              "Full driveway pressure wash",
              "Deep stain removal",
              "Professional equipment",
              "Eco-friendly solutions",
              "Same-day service available",
              "Long-lasting results"
            ]}
          />
          
          <PricingCard
            title="All-in-One Premium"
            price="£450"
            description="Complete exterior transformation that lasts all year"
            features={[
              "Full driveway/patio clean",
              "All outdoor windows washed",
              "Fence & wall washdown",
              "Complete exterior detail",
              "12-month lasting results",
              "Most comprehensive service"
            ]}
            isPopular={true}
            badge="BEST VALUE"
          />
          
          <PricingCard
            title="Fences & Exterior Walls"
            price="£300"
            description="Specialized cleaning for fences, walls, and exterior surfaces"
            features={[
              "Complete fence cleaning",
              "Exterior wall washing",
              "Mold & algae removal",
              "Professional grade equipment",
              "Weather-resistant treatment",
              "Flexible scheduling"
            ]}
          />
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-dark-secondary p-6 rounded-lg border border-gray-800 text-center hover-scale animate-fade-in">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Sparkles className="text-gold" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gold mb-2">£200 Minimum</h3>
            <p className="text-gray-300 text-sm">Quality guaranteed on every job, no matter the size</p>
          </div>
          
          <div className="bg-dark-secondary p-6 rounded-lg border border-gray-800 text-center hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Clock className="text-gold" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gold mb-2">Lasts All Year</h3>
            <p className="text-gray-300 text-sm">Premium package results that stand the test of time</p>
          </div>
          
          <div className="bg-dark-secondary p-6 rounded-lg border border-gray-800 text-center hover-scale animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Shield className="text-gold" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gold mb-2">Flexible Pricing</h3>
            <p className="text-gray-300 text-sm">Prices negotiable based on your specific requirements</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gold-secondary to-gold p-8 rounded-lg text-center animate-scale-in hover-scale">
          <h3 className="text-2xl font-bold text-dark-bg mb-4 animate-slide-up">Ready to Transform Your Property?</h3>
          <p className="text-dark-bg mb-6 text-lg animate-fade-in">
            Get a personalized quote in minutes. Our team is standing by to help you choose the perfect package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/447835296159?text=I'd%20like%20a%20personalized%20quote%20for%20my%20property" 
              className="btn bg-dark-bg text-gold hover:bg-dark-secondary transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Personalized Quote
            </a>
            <a 
              href="tel:+447835296159" 
              className="btn border-2 border-dark-bg text-dark-bg hover:bg-dark-bg hover:text-gold transition-all duration-300 transform hover:scale-105"
            >
              Call Now: 07835 296159
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
