
import React from 'react';
import { CircleCheck, Clock, Thermometer, UserCheck, Banknote, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="text-primary h-5 w-5" />,
    text: '24/7 Emergency Air Conditioning Service',
  },
  {
    icon: <ThumbsUp className="text-primary h-5 w-5" />,
    text: 'Family-Owned Local Business',
  },
  {
    icon: <UserCheck className="text-primary h-5 w-5" />,
    text: 'Highly-Qualified HVAC Systems',
  },
  {
    icon: <Banknote className="text-primary h-5 w-5" />,
    text: 'Affordable Installation & Repairs',
  },
  {
    icon: <ThumbsUp className="text-primary h-5 w-5" />,
    text: 'Trusted Name For Excellence',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get Cooling
          </h2>
          <p className="text-gray-500 italic mb-6">
            "Stay Cool, Stay Comfortable"
          </p>
          <p className="text-gray-700 mb-6">
            Air Get Cooling specializes in servicing air conditioning and heating for those in your home and business! Our expert technicians provide professional service for your system's maintenance, ensuring your installation runs better and longer.
          </p>
          
          <div className="space-y-4 mt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="mr-4">
                  {benefit.icon}
                </div>
                <p className="text-gray-700">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="relative">
            {/* Main image */}
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
              alt="Comfortable living room with air conditioning" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            {/* Blue accent shape */}
            <div className="hidden md:block absolute -bottom-12 -left-12 w-64 h-64 bg-accent rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
