import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Smart Shopping
              <br />
              <span className="text-yellow-300">Trusted by Millions</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-md">
              Discover amazing products at unbeatable prices. Shop from thousands of trusted sellers.
            </p>
            <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Shop Now
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="flex space-x-6">
                <div className="bg-yellow-400 rounded-2xl p-6 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className="w-32 h-40 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Fashion</span>
                  </div>
                </div>
                <div className="bg-pink-400 rounded-2xl p-6 transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                  <div className="w-32 h-40 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Electronics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center lg:justify-between items-center space-y-2 lg:space-y-0">
            <div className="flex items-center text-white">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-bold">✓</span>
              </div>
              <span className="text-sm font-medium">7 Days Easy Return</span>
            </div>
            <div className="flex items-center text-white">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-bold">₹</span>
              </div>
              <span className="text-sm font-medium">Cash on Delivery</span>
            </div>
            <div className="flex items-center text-white">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-bold">⚡</span>
              </div>
              <span className="text-sm font-medium">Lowest Prices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;