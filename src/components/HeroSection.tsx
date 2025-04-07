
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-primary transform -skew-x-12 origin-top-right" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column - Text content */}
          <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Air Conditioning<br />Repair
            </h1>
            <p className="text-gray-600 mb-6">
              American Standard Heating & Air Conditioning
            </p>
            
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 rounded-full">
              <Phone size={20} className="mr-2" />
              <span>Call Now</span>
              <span className="ml-2 font-medium">239-249-2352</span>
            </Button>
          </div>

          {/* Right column - Image */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <img 
              src="/lovable-uploads/ea004e76-6017-4f6c-8436-30883e7e547a.png" 
              alt="Get Cooling Service Van" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
