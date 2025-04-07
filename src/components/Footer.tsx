
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="bg-white inline-block p-1 rounded-md">
              <Logo />
            </div>
            <p className="text-sm text-white/80 mt-4">
              Get Cooling is your trusted HVAC solution provider, offering reliable air conditioning and heating services to homes and businesses since 1998.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-white/80 hover:text-white">AC Installation</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">AC Repair</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Heating Systems</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Maintenance Plans</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-white">Our Company</Link></li>
              <li><Link to="/team" className="text-white/80 hover:text-white">Our Team</Link></li>
              <li><Link to="/testimonials" className="text-white/80 hover:text-white">Testimonials</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-white/80 hover:text-white">Get In Touch</Link></li>
              <li><Link to="/emergency" className="text-white/80 hover:text-white">Emergency Service</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-white">FAQ</Link></li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="hover:text-accent/90" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-accent/90" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-accent/90" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-white/60 flex flex-col md:flex-row justify-between">
          <p>© {currentYear} Get Cooling. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
