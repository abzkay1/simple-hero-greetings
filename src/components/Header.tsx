
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark-bg shadow-lg py-2 backdrop-blur-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 hover-scale">
          <img 
            src="/lovable-uploads/e21b92a2-7799-4a6c-9206-7de4c90dbf31.png" 
            alt="Prestige Spray Solutions" 
            className="h-24 md:h-28 w-auto max-w-[280px] md:max-w-[350px] transition-all duration-300 hover:brightness-110"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#services" className="text-white hover:text-gold transition-all duration-300 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#pricing" className="text-white hover:text-gold transition-all duration-300 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#gallery" className="text-white hover:text-gold transition-all duration-300 relative group">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-white hover:text-gold transition-all duration-300 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <a 
          href="https://wa.me/447835296159?text=I'm%20interested%20in%20a%20quote%20for%20pressure%20washing%20services" 
          className="hidden md:block btn btn-primary hover-glow transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a Quote
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover-scale"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} className="rotate-in" /> : <Menu size={24} className="fade-in" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-secondary absolute w-full animate-fade-in backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-4">
            <a 
              href="#services" 
              className="text-white hover:text-gold transition-all duration-300 py-2 border-b border-gray-800 hover-lift"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#pricing" 
              className="text-white hover:text-gold transition-all duration-300 py-2 border-b border-gray-800 hover-lift"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#gallery" 
              className="text-white hover:text-gold transition-all duration-300 py-2 border-b border-gray-800 hover-lift"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-gold transition-all duration-300 py-2 border-b border-gray-800 hover-lift"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="https://wa.me/447835296159?text=I'm%20interested%20in%20a%20quote%20for%20pressure%20washing%20services" 
              className="btn btn-primary text-center hover-glow transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
