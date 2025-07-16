import React from 'react';
import { ChevronRight } from 'lucide-react';

const BrandsSection = () => {
  const brands = [
    {
      title: 'Personal Care',
      image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Electronics',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Makeup',
      image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Smart Phones',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-gray-700 to-gray-800'
    },
    {
      title: 'Men Perfume',
      image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Bags',
      image: 'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold text-gray-900 mr-3">Original Brands</h2>
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold">✓</span>
            </div>
          </div>
          <button className="flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200">
            VIEW ALL
            <ChevronRight className="ml-1 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-purple-50 rounded-2xl p-4 group-hover:bg-purple-100 transition-colors duration-300">
                <div className="relative overflow-hidden rounded-xl h-32 mb-4">
                  <img
                    src={brand.image}
                    alt={brand.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className={`bg-gradient-to-r ${brand.color} text-white font-semibold text-center py-2 rounded-lg text-sm`}>
                  {brand.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;