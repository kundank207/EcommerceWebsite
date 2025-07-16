import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const BeautyHealth = () => {
  const filters = [
    {
      title: 'Price',
      options: [
        { name: 'Under ₹500', count: 267 },
        { name: '₹500 - ₹1000', count: 189 },
        { name: '₹1000 - ₹2000', count: 123 },
        { name: 'Above ₹2000', count: 67 }
      ]
    },
    {
      title: 'Category',
      options: [
        { name: 'Skincare', count: 189 },
        { name: 'Makeup', count: 156 },
        { name: 'Hair Care', count: 134 },
        { name: 'Fragrance', count: 89 }
      ]
    },
    {
      title: 'Brand',
      options: [
        { name: 'Lakme', count: 89 },
        { name: 'Maybelline', count: 76 },
        { name: 'L\'Oreal', count: 65 },
        { name: 'Nivea', count: 54 }
      ]
    },
    {
      title: 'Skin Type',
      options: [
        { name: 'All Skin Types', count: 156 },
        { name: 'Oily Skin', count: 123 },
        { name: 'Dry Skin', count: 89 },
        { name: 'Sensitive Skin', count: 67 }
      ]
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Vitamin C Face Serum',
      image: '/src/images/B1.jpg',
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.4,
      reviews: 1567,
      freeDelivery: true,
      badge: 'Bestseller'
    },
    {
      id: 2,
      title: 'Matte Lipstick Set (6 Shades)',
      image: '/src/images/B2.jpg',
      price: 699,
      originalPrice: 999,
      discount: 30,
      rating: 4.2,
      reviews: 892,
      freeDelivery: true
    },
    {
      id: 3,
      title: 'Anti-Aging Night Cream',
      image: '/src/images/B3.jpg',
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      rating: 4.3,
      reviews: 567,
      freeDelivery: true,
      badge: 'Premium'
    },
    {
      id: 4,
      title: 'Hair Growth Oil',
      image: '/src/images/B4.jpg',
      price: 549,
      originalPrice: 799,
      discount: 31,
      rating: 4.1,
      reviews: 445,
      freeDelivery: true
    },
    {
      id: 5,
      title: 'Perfume for Women 100ml',
      image: '/src/images/B5.jpg',
      price: 1599,
      originalPrice: 2299,
      discount: 30,
      rating: 4.5,
      reviews: 678,
      freeDelivery: true
    },
    {
      id: 6,
      title: 'Sunscreen SPF 50+',
      image: '/src/images/B6.jpg',
      price: 399,
      originalPrice: 599,
      discount: 33,
      rating: 4.0,
      reviews: 334,
      freeDelivery: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        title="Beauty & Health"
        subtitle="Enhance your natural beauty with our premium beauty products"
        backgroundImage="https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        gradient="from-pink-500 via-rose-500 to-red-500"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} />
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Beauty & Health Products</h2>
                <p className="text-gray-600">{products.length * 55}+ Products</p>
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

export default BeautyHealth;