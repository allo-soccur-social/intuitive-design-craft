
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
            Let's get you back to our cooling services.
          </p>
          <Button asChild className="bg-primary">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
