import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const categories = [
    { name: 'Women Ethnic', path: '/women-ethnic' },
    { name: 'Women Western', path: '/women-western' },
    { name: 'Men', path: '/men' },
    { name: 'Kids', path: '/kids' },
    { name: 'Home & Kitchen', path: '/home-kitchen' },
    { name: 'Beauty & Health', path: '/beauty-health' },
    { name: 'Jewellery', path: '/jewellery' },
    { name: 'Bags & Footwear', path: '/bags-footwear' },
    { name: 'Electronics', path: '/electronics' },
  ];

  return (
    <nav className="border-t border-gray-200 bg-white sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 py-3 overflow-x-auto">
          <Link
            to="/"
            className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              location.pathname === '/' 
                ? 'text-purple-600 border-b-2 border-purple-600 pb-3' 
                : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            Home
          </Link>
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                location.pathname === category.path 
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-3' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;