
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SimplePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-30"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Popup */}
      <div className="relative bg-black bg-opacity-70 border border-white border-opacity-30 rounded-lg p-6 max-w-sm mx-4 backdrop-blur-sm">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-white text-center">
          <h3 className="text-lg font-semibold mb-2">Special Offer</h3>
          <p className="text-sm opacity-90 mb-4">
            Get 20% off your first pressure washing service in London or Manchester.
          </p>
          <button 
            onClick={() => setIsVisible(false)}
            className="px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 text-white rounded hover:bg-opacity-30 transition-all"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimplePopup;
