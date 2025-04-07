
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 md:px-8 lg:px-12 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-primary font-medium">Air Conditioning Repair</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          <Button variant="default" className="bg-secondary hover:bg-secondary/90">
            Schedule Appointment
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 shadow-md p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium p-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium p-2" onClick={() => setIsOpen(false)}>Air Conditioning Repair</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium p-2" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium p-2" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button variant="default" className="bg-secondary hover:bg-secondary/90" onClick={() => setIsOpen(false)}>
              Schedule Appointment
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
