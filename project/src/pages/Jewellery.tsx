import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const Jewellery = () => {
  const filters = [
    {
      title: 'Price',
      options: [
        { name: 'Under ₹500', count: 189 },
        { name: '₹500 - ₹1500', count: 156 },
        { name: '₹1500 - ₹5000', count: 123 },
        { name: 'Above ₹5000', count: 67 }
      ]
    },
    {
      title: 'Category',
      options: [
        { name: 'Earrings', count: 156 },
        { name: 'Necklaces', count: 134 },
        { name: 'Rings', count: 123 },
        { name: 'Bracelets', count: 89 }
      ]
    },
    {
      title: 'Material',
      options: [
        { name: 'Gold Plated', count: 123 },
        { name: 'Silver', count: 156 },
        { name: 'Artificial', count: 189 },
        { name: 'Kundan', count: 89 }
      ]
    },
    {
      title: 'Occasion',
      options: [
        { name: 'Daily Wear', count: 189 },
        { name: 'Party', count: 134 },
        { name: 'Wedding', count: 89 },
        { name: 'Festival', count: 67 }
      ]
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Gold Plated Kundan Earrings',
      image: '/src/images/j1.jpg',
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.3,
      reviews: 567,
      freeDelivery: true,
      badge: 'Trending'
    },
    {
      id: 2,
      title: 'Silver Chain Necklace',
      image: '/src/images/j2.jpg',
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      rating: 4.2,
      reviews: 892,
      freeDelivery: true
    },
    {
      id: 3,
      title: 'Designer Ring Set (3 Pieces)',
      image: '/src/images/j3.jpg',
      price: 599,
      originalPrice: 899,
      discount: 33,
      rating: 4.0,
      reviews: 445,
      freeDelivery: true
    },
    {
      id: 4,
      title: 'Pearl Bracelet',
      image: '/src/images/j4.jpg',
      price: 799,
      originalPrice: 1199,
      discount: 33,
      rating: 4.4,
      reviews: 334,
      freeDelivery: true
    },
    {
      id: 5,
      title: 'Traditional Jhumka Earrings',
      image: '/src/images/j5.jpg',
      price: 699,
      originalPrice: 999,
      discount: 30,
      rating: 4.1,
      reviews: 678,
      freeDelivery: true,
      badge: 'Bestseller'
    },
    {
      id: 6,
      title: 'Choker Necklace Set',
      image: '/src/images/j6.jpg',
      price: 1099,
      originalPrice: 1599,
      discount: 31,
      rating: 4.5,
      reviews: 267,
      freeDelivery: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        title="Jewellery"
        subtitle="Adorn yourself with our exquisite collection of jewelry"
        backgroundImage="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        gradient="from-yellow-500 via-amber-500 to-orange-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} />
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Jewellery Collection</h2>
                <p className="text-gray-600">{products.length * 30}+ Products</p>
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

export default Jewellery;