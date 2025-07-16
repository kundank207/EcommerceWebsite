import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();
  const categories = [
    {
      name: 'Ethnic Wear',
      image: '/src/images/w4.jpg',
      path: '/women-ethnic'
      
    },
    {
      name: 'Western Dresses',
      image: '/src/images/w3.jpg',
      path: '/women-western'
    
    },
    {
      name: 'Menswear',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      path: '/men'
      
    },
    {
      name: 'Footwear',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      path:'/bags-footwear'
    },
    {
      name: 'Home Decor',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      Path: '/home-kitchen'
    },
    {
      name: 'Beauty',
      image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      path: '/beauty-health'
    },
    {
      name: 'Accessories',
      image: 'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      path:'/jewellery'
    },
    {
      name: 'Grocery',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      path:'/electronics'
    }
  ];
  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600">Explore our wide range of products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => handleCategoryClick(category.path)}
            >
              <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-sm font-medium text-gray-900 text-center group-hover:text-purple-600 transition-colors duration-200">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;