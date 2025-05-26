
import React, { useState, useEffect } from 'react';
import { X, MapPin, Clock, Star, Users, Award } from 'lucide-react';

const PromoPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-dark-bg border-2 border-gold rounded-2xl max-w-lg w-full relative overflow-hidden animate-scale-in">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-gold-secondary to-gold p-6 text-center relative">
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="text-dark-bg animate-bounce" size={24} />
              <h2 className="text-2xl font-bold text-dark-bg font-cinzel-decorative">LONDON EXPANSION</h2>
            </div>
            <div className="bg-error text-white px-4 py-2 rounded-full inline-block font-bold text-lg animate-pulse">
              20% OFF
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-6 space-y-6">
          {/* London Deal */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gold mb-3">🎉 Welcome London!</h3>
            <p className="text-gray-300 mb-4">
              We've just expanded to serve London and we're celebrating with an exclusive 
              <span className="text-gold font-bold"> 20% discount </span>
              for all our new London customers!
            </p>
            <div className="bg-dark-secondary p-4 rounded-lg border border-gold/30">
              <p className="text-sm text-gray-400 mb-2">Use code:</p>
              <div className="bg-gold text-dark-bg font-bold text-lg px-4 py-2 rounded font-mono">
                LONDON20
              </div>
            </div>
          </div>

          {/* Company strengths */}
          <div className="border-t border-gray-700 pt-6">
            <h4 className="text-lg font-bold text-gold mb-4 text-center">Why Choose Prestige Spray?</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="text-success flex-shrink-0" size={16} />
                <span className="text-gray-300">12hr Response Guarantee*</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="text-gold flex-shrink-0" size={16} />
                <span className="text-gray-300">500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="text-gold flex-shrink-0" size={16} />
                <span className="text-gray-300">Professional Grade Equipment</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="text-success flex-shrink-0" size={16} />
                <span className="text-gray-300">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/447835296159?text=I'm%20interested%20in%20the%20London%2020%25%20discount%20offer!"
              className="btn btn-primary w-full mb-3 hover-glow animate-shimmer"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsVisible(false)}
            >
              Claim Your 20% Discount Now!
            </a>
            <p className="text-xs text-gray-500">
              *We're the only company guaranteeing responses within 12 hours
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-2 bg-gradient-to-r from-gold-secondary via-gold to-gold-secondary animate-shimmer"></div>
      </div>
    </div>
  );
};

export default PromoPopup;
