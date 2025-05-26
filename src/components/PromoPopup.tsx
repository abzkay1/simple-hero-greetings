
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-gray-600 rounded-lg max-w-md w-full relative shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-gray-900 p-4 text-center border-b border-gray-700">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="text-white" size={20} />
            <h2 className="text-lg font-bold text-white">London Expansion</h2>
          </div>
          <div className="bg-gray-800 text-white px-3 py-1 rounded text-sm font-semibold">
            20% OFF
          </div>
        </div>

        {/* Main content */}
        <div className="p-4 space-y-4">
          {/* London Deal */}
          <div className="text-center">
            <h3 className="text-base font-bold text-white mb-2">Welcome London Customers!</h3>
            <p className="text-gray-300 text-sm mb-3">
              We've expanded to London and we're celebrating with an exclusive 
              <span className="text-white font-semibold"> 20% discount </span>
              for all new London customers.
            </p>
            <div className="bg-gray-800 p-3 rounded border border-gray-600">
              <p className="text-xs text-gray-400 mb-1">Promo code:</p>
              <div className="bg-white text-black font-bold text-sm px-3 py-1 rounded">
                LONDON20
              </div>
            </div>
          </div>

          {/* Company strengths */}
          <div className="border-t border-gray-700 pt-3">
            <h4 className="text-sm font-bold text-white mb-3 text-center">Why Choose Us?</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <Clock className="text-gray-400 flex-shrink-0" size={14} />
                <span className="text-gray-300">12-hour response guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Users className="text-gray-400 flex-shrink-0" size={14} />
                <span className="text-gray-300">500+ satisfied customers</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Award className="text-gray-400 flex-shrink-0" size={14} />
                <span className="text-gray-300">Professional equipment</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Star className="text-gray-400 flex-shrink-0" size={14} />
                <span className="text-gray-300">100% satisfaction guarantee</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-2">
            <a
              href="https://wa.me/447835296159?text=I'm%20interested%20in%20the%20London%2020%25%20discount%20offer!"
              className="bg-white text-black px-4 py-2 rounded text-sm font-semibold hover:bg-gray-200 transition-colors w-full block mb-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsVisible(false)}
            >
              Claim 20% Discount Now
            </a>
            <p className="text-xs text-gray-500">
              *Only company with 12-hour response guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
