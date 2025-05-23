
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="container">
        <h2 className="section-title">CONTACT US</h2>
        <p className="section-subtitle text-gray-300">
          Ready to transform your property? Get in touch with us today for a free quote or to schedule a service.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-dark-secondary p-8 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-gold">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-white">WhatsApp / Phone</p>
                  <a 
                    href="https://wa.me/447835296159" 
                    className="text-gold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +44 7835 296159
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Fastest way to reach us!</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-white">Email</p>
                  <a 
                    href="mailto:info@prestigespraysolutions.com" 
                    className="text-gold hover:underline"
                  >
                    info@prestigespraysolutions.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-white">Service Areas</p>
                  <p className="text-gray-300">London & Greater London</p>
                  <p className="text-gray-300">Manchester & Greater Manchester</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-white">Operating Hours</p>
                  <p className="text-gray-300">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sunday: By appointment only</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="font-bold text-white mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/prestigespraysolutions" 
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://tiktok.com/@prestige.spray.solutions" 
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={18} />
                </a>
                <a 
                  href="https://www.facebook.com/share/1BiohR1dJv/?mibextid=wwXIfr" 
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-secondary p-8 rounded-lg shadow-lg border border-gray-800 flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-gold">Request a Quote</h3>
            <p className="text-gray-300 mb-6">
              Prefer to message us directly? Click the button below to reach us on WhatsApp for a fast, free quote.
            </p>
            
            <div className="bg-dark-bg p-6 rounded-lg border border-gray-700 mb-6">
              <h4 className="font-bold text-white mb-4">What to Include in Your Message:</h4>
              <ul className="text-gray-300 space-y-2 list-disc pl-5">
                <li>Your name and location</li>
                <li>Type of surface needing cleaning</li>
                <li>Approximate size of the area</li>
                <li>Any specific issues (stains, moss, etc.)</li>
                <li>Preferred timeframe for service</li>
              </ul>
            </div>
            
            <a 
              href="https://wa.me/447835296159?text=I'm%20interested%20in%20a%20quote%20for%20pressure%20washing%20services.%20My%20details%20are:%0A%0AName:%0ALocation:%0ASurface%20type:%0ASize:%0AIssues:%0APreferred%20date:" 
              className="btn btn-primary text-center mt-auto flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={18} />
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
