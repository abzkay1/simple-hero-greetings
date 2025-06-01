
import React from 'react';
import { ShieldCheck, Timer, Award, Banknote, Sparkles, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useParallax } from '../hooks/useScrollAnimation';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <ScrollReveal direction="left" delay={delay} duration={800}>
      <div className="flex gap-4 hover-scale group">
        <div className="flex-shrink-0 mt-1">
          <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gold group-hover:text-gold-secondary transition-colors duration-300">{title}</h3>
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
};

const WhyChooseUs: React.FC = () => {
  const offsetY = useParallax();
  
  const leftReasons = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Professional Equipment",
      description: "We use commercial-grade pressure washing equipment and professional cleaning solutions for superior results."
    },
    {
      icon: <Timer size={24} />,
      title: "Fast Response Time",
      description: "We pride ourselves on quick response times and efficient service, respecting your time and schedule."
    },
    {
      icon: <Award size={24} />,
      title: "Satisfaction Guaranteed",
      description: "Your satisfaction is our priority. We're not happy unless you're completely satisfied with our work."
    }
  ];

  const rightReasons = [
    {
      icon: <Banknote size={24} />,
      title: "Competitive Pricing",
      description: "We offer fair, transparent pricing with no hidden fees. Get excellent value for your investment."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Attention to Detail",
      description: "Our meticulous approach ensures no spot is missed. We take pride in delivering thorough cleaning services."
    },
    {
      icon: <Users size={24} />,
      title: "Experienced Team",
      description: "Our skilled professionals bring expertise and dedication to every project, ensuring exceptional results."
    }
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <ScrollReveal direction="fade" duration={1000}>
          <h2 className="section-title">WHY CHOOSE US</h2>
          <p className="section-subtitle text-gray-300">
            At Prestige Spray Solutions, we take pride in our work and are committed to 
            delivering exceptional results that exceed your expectations.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-12">
            {leftReasons.map((reason, index) => (
              <ReasonCard
                key={reason.title}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
                delay={index * 200}
              />
            ))}
          </div>
          
          <div className="space-y-12">
            {rightReasons.map((reason, index) => (
              <ReasonCard
                key={reason.title}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
                delay={(index + 3) * 200}
              />
            ))}
          </div>
        </div>
        
        <ScrollReveal direction="scale" delay={1200} duration={1000}>
          <div className="mt-16 text-center">
            <div 
              className="transform transition-transform duration-1000 ease-out"
              style={{ transform: `translateY(${offsetY * 0.05}px)` }}
            >
              <a 
                href="https://wa.me/447835296159?text=I'm%20interested%20in%20a%20quote%20for%20pressure%20washing%20services" 
                className="btn btn-primary inline-flex items-center gap-2 hover:shadow-glow transition-all duration-500 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Your Free Quote Today
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
