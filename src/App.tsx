
import { useEffect } from 'react';
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
import SimplePopup from './components/SimplePopup';

function App() {
  useEffect(() => {
    document.title = 'Prestige Spray Solutions | Professional Pressure Washing';
  }, []);
  
  return (
    <div className="min-h-screen bg-dark-bg">
      <SimplePopup />
      <Header />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
