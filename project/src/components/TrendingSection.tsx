import React from 'react';

const TrendingSection = () => {
  const trendingItems = [
    {
      title: 'Summer Dresses',
      image: 'https://images.pexels.com/photos/5698840/pexels-photo-5698840.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Baggy Jeans',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Earrings',
      image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Chic Flats',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-purple-400 to-indigo-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
            <div className="mb-6">
              <span className="text-yellow-400 font-bold text-xl">ShopHub</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">
                #TRENDZ
              </h2>
            </div>
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="relative overflow-hidden rounded-xl h-40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute top-2 right-2 w-3 h-3 bg-gradient-to-br ${item.gradient} rounded-full animate-pulse`}></div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 text-center text-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;