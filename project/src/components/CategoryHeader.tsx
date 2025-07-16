import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  gradient: string;
}

const CategoryHeader = ({ title, subtitle, backgroundImage, gradient }: CategoryHeaderProps) => {
  return (
    <div className={`relative bg-gradient-to-r ${gradient} overflow-hidden`}>
      <div className="absolute inset-0 opacity-20">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;