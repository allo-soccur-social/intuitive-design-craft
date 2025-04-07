
import React from 'react';
import { Shield, Clock, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const reasons = [
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Reliable & Trusted",
    description: "We provide a standard of service and quality workmanship with integrity."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "24/7 Emergency Service",
    description: "Emergencies don't keep office hours, so neither do we. Your home comfort is our priority."
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Certified Technicians",
    description: "Our factory-trained and certified repair technicians are standing by, providing the best possible service."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Quality Workmanship",
    description: "We strive to meet service standards to the highest standards and provide premium products."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 mb-6">
              The Best Cooling & Heating Company in Town
            </p>
            <p className="text-gray-700 mb-8">
              Get Cooling is dedicated to providing fantastic HVAC service with proper installations that will ensure complete comfort for your home or business and keep it running perfectly for the full lifetime of your unit.
            </p>
            
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="HVAC Technician Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-accent p-2 rounded-full">{reason.icon}</div>
                    <CardTitle className="text-xl font-semibold">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">{reason.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
