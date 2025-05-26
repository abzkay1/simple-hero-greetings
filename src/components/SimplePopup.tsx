
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SimplePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Calculate countdown from 7 days
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  // Prevent body scroll when popup is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('Closing popup'); // Debug log
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      {/* Backdrop to prevent scrolling and interaction */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative bg-black bg-opacity-90 border border-white border-opacity-20 rounded-lg p-4 max-w-md mx-4 backdrop-blur-sm shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors z-50 p-1 rounded-full hover:bg-white hover:bg-opacity-10"
          type="button"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="text-white text-center">
          <h3 className="text-lg font-semibold mb-2">🎉 London Expansion Special!</h3>
          
          {/* 20% Off Highlight */}
          <div className="bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg p-3 mb-3">
            <div className="text-2xl font-bold text-gold mb-1">20% OFF</div>
            <p className="text-sm">For London clients only!</p>
          </div>

          <p className="text-xs opacity-90 mb-3">
            We've expanded to London and are celebrating with an exclusive discount for our new London customers.
          </p>

          {/* Countdown */}
          <div className="mb-3">
            <p className="text-xs opacity-80 mb-1">Offer ends in:</p>
            <div className="flex justify-center gap-2 text-xs">
              <div className="bg-white bg-opacity-10 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.days}</span>
                <div className="text-xs opacity-70">days</div>
              </div>
              <div className="bg-white bg-opacity-10 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.hours}</span>
                <div className="text-xs opacity-70">hrs</div>
              </div>
              <div className="bg-white bg-opacity-10 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.minutes}</span>
                <div className="text-xs opacity-70">min</div>
              </div>
              <div className="bg-white bg-opacity-10 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.seconds}</span>
                <div className="text-xs opacity-70">sec</div>
              </div>
            </div>
          </div>

          <p className="text-xs opacity-80 mb-3">
            As London's premier high-quality exterior detailing company, we deliver exceptional results that transform your property.
          </p>

          <div className="flex gap-2 justify-center">
            <button 
              onClick={handleClose}
              className="px-4 py-2 bg-white bg-opacity-15 border border-white border-opacity-20 text-white rounded text-sm hover:bg-opacity-25 transition-all"
              type="button"
            >
              Claim Offer
            </button>
            <button 
              onClick={handleClose}
              className="px-4 py-2 bg-transparent border border-white border-opacity-40 text-white rounded text-sm hover:bg-white hover:bg-opacity-10 transition-all"
              type="button"
            >
              Not Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePopup;
