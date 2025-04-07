
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ScheduleForm from '@/components/ScheduleForm';
import BenefitsSection from '@/components/BenefitsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <ScheduleForm />
        <BenefitsSection />
        <WhyChooseUs />
        <ContactSection />
        
        {/* Call to Action */}
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Top-Quality Air Conditioning Services Today
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Our team of certified professionals is ready to help with all your HVAC needs.
              Contact us today for a free consultation.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-accent">
              Schedule An Appointment
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
