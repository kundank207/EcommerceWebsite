import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const Electronics = () => {
  const filters = [
    {
      title: 'Price',
      options: [
        { name: 'Under ₹5000', count: 156 },
        { name: '₹5000 - ₹15000', count: 234 },
        { name: '₹15000 - ₹30000', count: 189 },
        { name: 'Above ₹30000', count: 89 }
      ]
    },
    {
      title: 'Category',
      options: [
        { name: 'Smartphones', count: 189 },
        { name: 'Laptops', count: 123 },
        { name: 'Headphones', count: 156 },
        { name: 'Accessories', count: 134 }
      ]
    },
    {
      title: 'Brand',
      options: [
        { name: 'Samsung', count: 89 },
        { name: 'Apple', count: 76 },
        { name: 'OnePlus', count: 65 },
        { name: 'Xiaomi', count: 54 }
      ]
    },
    {
      title: 'Features',
      options: [
        { name: '5G Ready', count: 123 },
        { name: 'Fast Charging', count: 156 },
        { name: 'Wireless', count: 89 },
        { name: 'Water Resistant', count: 67 }
      ]
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Smartphone 128GB (Latest Model)',
      image: '/src/images/E1.jpg',
      price: 15999,
      originalPrice: 19999,
      discount: 20,
      rating: 4.3,
      reviews: 2134,
      freeDelivery: true,
      badge: 'Bestseller'
    },
    {
      id: 2,
      title: 'Wireless Bluetooth Headphones',
      image: '/src/images/E2.jpg',
      price: 2999,
      originalPrice: 4999,
      discount: 40,
      rating: 4.2,
      reviews: 1567,
      freeDelivery: true
    },
    {
      id: 3,
      title: 'Gaming Laptop 16GB RAM',
      image: '/src/images/E3.jpg',
      price: 45999,
      originalPrice: 59999,
      discount: 23,
      rating: 4.5,
      reviews: 892,
      freeDelivery: true,
      badge: 'Premium'
    },
    {
      id: 4,
      title: 'Smartwatch with Health Tracking',
      image: '/src/images/E4.jpg',
      price: 3999,
      originalPrice: 5999,
      discount: 33,
      rating: 4.1,
      reviews: 567,
      freeDelivery: true
    },
    {
      id: 5,
      title: 'Wireless Charging Pad',
      image: '/src/images/E5.jpg',
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      rating: 4.0,
      reviews: 445,
      freeDelivery: true
    },
    {
      id: 6,
      title: 'Bluetooth Speaker Portable',
      image: '/src/images/E6.jpg',
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      rating: 4.4,
      reviews: 678,
      freeDelivery: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        title="Electronics"
        subtitle="Discover the latest in technology and electronics"
        backgroundImage="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        gradient="from-blue-600 via-cyan-500 to-teal-500"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} />
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Electronics Collection</h2>
                <p className="text-gray-600">{products.length * 25}+ Products</p>
              </div>
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Sort by: Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;