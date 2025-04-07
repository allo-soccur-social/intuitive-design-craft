
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <div className="border-2 border-secondary rounded-md p-1 bg-white">
          <div className="text-primary font-bold">
            <span className="text-xl">Get</span>
            <span className="text-2xl block -mt-1">Cooling</span>
            <span className="text-xs">.com</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
