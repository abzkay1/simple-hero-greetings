
import React from 'react';
import { ShieldCheck, Timer, Award, Banknote, Sparkles, Users } from 'lucide-react';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 hover-scale">
      <div className="flex-shrink-0 mt-1">
        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">WHY CHOOSE US</h2>
        <p className="section-subtitle text-gray-300">
          At Prestige Spray Solutions, we take pride in our work and are committed to 
          delivering exceptional results that exceed your expectations.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-12">
            <ReasonCard
              icon={<ShieldCheck size={24} />}
              title="Professional Equipment"
              description="We use commercial-grade pressure washing equipment and professional cleaning solutions for superior results."
            />
            
            <ReasonCard
              icon={<Timer size={24} />}
              title="Fast Response Time"
              description="We pride ourselves on quick response times and efficient service, respecting your time and schedule."
            />
            
            <ReasonCard
              icon={<Award size={24} />}
              title="Satisfaction Guaranteed"
              description="Your satisfaction is our priority. We're not happy unless you're completely satisfied with our work."
            />
          </div>
          
          <div className="space-y-12">
            <ReasonCard
              icon={<Banknote size={24} />}
              title="Competitive Pricing"
              description="We offer fair, transparent pricing with no hidden fees. Get excellent value for your investment."
            />
            
            <ReasonCard
              icon={<Sparkles size={24} />}
              title="Attention to Detail"
              description="Our meticulous approach ensures no spot is missed. We take pride in delivering thorough cleaning services."
            />
            
            <ReasonCard
              icon={<Users size={24} />}
              title="Experienced Team"
              description="Our skilled professionals bring expertise and dedication to every project, ensuring exceptional results."
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/447835296159?text=I'm%20interested%20in%20a%20quote%20for%20pressure%20washing%20services" 
            className="btn btn-primary inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
