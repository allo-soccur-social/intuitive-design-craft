
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const serviceTypes = [
  { id: 'ac-install', label: 'AC Installation' },
  { id: 'ac-repair', label: 'AC Repair/Service' },
  { id: 'heat-repair', label: 'Heat Repair/Service' },
  { id: 'other', label: 'Other' },
];

const propertyTypes = [
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'multi-family', label: 'Multi-Family' },
];

const ScheduleForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: [] as string[],
    propertyType: [] as string[],
    message: '',
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (id: string, category: 'serviceType' | 'propertyType') => {
    setFormData(prev => {
      const currentValues = [...prev[category]];
      
      if (currentValues.includes(id)) {
        return { ...prev, [category]: currentValues.filter(item => item !== id) };
      } else {
        return { ...prev, [category]: [...currentValues, id] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Appointment Scheduled",
      description: "We'll contact you shortly to confirm your appointment",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceType: [],
      propertyType: [],
      message: '',
    });
  };

  return (
    <div className="bg-accent py-8 mx-4 lg:mx-auto rounded-xl max-w-4xl -mt-10 relative z-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">Schedule a Service</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          
          <Input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-medium mb-3">Select Services</h3>
              <div className="space-y-2">
                {serviceTypes.map(service => (
                  <div key={service.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={service.id}
                      checked={formData.serviceType.includes(service.id)}
                      onCheckedChange={() => handleCheckboxChange(service.id, 'serviceType')}
                    />
                    <label htmlFor={service.id} className="text-sm cursor-pointer">
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Property Type</h3>
              <div className="space-y-2">
                {propertyTypes.map(property => (
                  <div key={property.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={property.id}
                      checked={formData.propertyType.includes(property.id)}
                      onCheckedChange={() => handleCheckboxChange(property.id, 'propertyType')}
                    />
                    <label htmlFor={property.id} className="text-sm cursor-pointer">
                      {property.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Textarea
            name="message"
            placeholder="Additional Information"
            value={formData.message}
            onChange={handleInputChange}
            className="min-h-[100px]"
          />
          
          <Button type="submit" className="w-full bg-primary">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;
