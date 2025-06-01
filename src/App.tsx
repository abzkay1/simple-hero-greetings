
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Prestige Spray Solutions | Professional Pressure Washing';
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  
  return (
    <div className="min-h-screen bg-dark-bg">
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      <div className={`transition-all duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <Hero />
        <About />
        <BeforeAfter />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
