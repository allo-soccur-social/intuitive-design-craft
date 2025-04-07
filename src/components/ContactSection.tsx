
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          We're here to help with your<br />
          Air Conditioning needs!
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We Provide Expert Cooling & Heating Services Near You
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          {/* Map placeholder - In a real implementation, you'd use Google Maps or another map API */}
          <div className="bg-gray-200 rounded-lg h-[400px] overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1617913712294!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Location Map"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">New York</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-700">1234 Main Street</p>
                    <p className="text-gray-700">New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-700">Mon - Fri: 8AM - 8PM</p>
                    <p className="text-gray-700">Sat: 9AM - 5PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-700">(239) 249-2352</p>
                    <p className="text-gray-700">info@getcooling.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                24/7 Emergency Service Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
