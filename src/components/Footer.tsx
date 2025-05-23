import React from 'react';
import { Droplet } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-dark-secondary border-t border-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img 
              src="/lovable-uploads/c0bd17a7-2770-4419-994c-ea146646ed39.png" 
              alt="Prestige Spray Solutions" 
              className="h-14 md:h-16 w-auto"
            />
          </div>
          
          <div>
            <p className="text-gray-400 text-center md:text-right">
              © {currentYear} Prestige Spray Solutions. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Professional Pressure Washing Services in London & Manchester
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-gold transition-colors">About</a>
            <a href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</a>
            <a href="#gallery" className="text-gray-400 hover:text-gold transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a>
          </nav>
          
          <a 
            href="https://wa.me/447835296159?text=I'm%20interested%20in%20your%20pressure%20washing%20services" 
            className="btn btn-outline inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
