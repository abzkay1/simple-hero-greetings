
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface TestimonialProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, location, rating, text, delay = 0 }) => {
  return (
    <ScrollReveal direction="up" delay={delay} duration={800}>
      <div className="bg-dark-secondary p-6 rounded-lg shadow-lg border border-gray-800 h-full flex flex-col hover-scale group hover:border-gold/50 transition-all duration-500">
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={20} 
              className={`transition-all duration-300 ${
                i < rating 
                  ? "text-gold fill-gold group-hover:scale-110" 
                  : "text-gray-400"
              }`} 
            />
          ))}
        </div>
        <p className="text-gray-300 flex-grow mb-4 italic group-hover:text-white transition-colors duration-300">"{text}"</p>
        <div>
          <p className="font-bold text-gold group-hover:text-gold-secondary transition-colors duration-300">{name}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Kensington, London",
      rating: 5,
      text: "Absolutely amazing results! My driveway looks brand new again. The team was professional, arrived on time, and worked efficiently. I'll definitely be using Prestige Spray Solutions again."
    },
    {
      id: 2,
      name: "James Wilson",
      location: "Didsbury, Manchester",
      rating: 5,
      text: "I was shocked at how much of a difference their cleaning made to my patio. Years of grime gone in just a few hours. Great service and great value for money."
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Richmond, London",
      rating: 4,
      text: "Very pleased with the service. My brick wall was covered in moss and looking very tired. Now it looks freshly laid! Friendly team and reasonable prices too."
    },
    {
      id: 4,
      name: "Michael Roberts",
      location: "Chorlton, Manchester",
      rating: 5,
      text: "Excellent job cleaning our commercial storefront. The difference is night and day! Professional service from start to finish. Highly recommended."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const itemsPerPage = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % pageCount);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + pageCount) % pageCount);
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex * itemsPerPage,
    activeIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-16 md:py-24 bg-dark-secondary overflow-hidden">
      <div className="container">
        <ScrollReveal direction="fade" duration={1000}>
          <h2 className="section-title">TESTIMONIALS</h2>
          <p className="section-subtitle text-gray-300">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </ScrollReveal>

        <div className="relative mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Testimonial
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                text={testimonial.text}
                delay={index * 200}
              />
            ))}
          </div>

          {pageCount > 1 && (
            <ScrollReveal direction="scale" delay={600}>
              <div className="flex justify-center mt-8 gap-2">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-dark-bg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: pageCount }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                        index === activeIndex ? 'bg-gold' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-dark-bg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
