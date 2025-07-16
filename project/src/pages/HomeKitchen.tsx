import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const HomeKitchen = () => {
  const filters = [
    {
      title: 'Price',
      options: [
        { name: 'Under ₹500', count: 189 },
        { name: '₹500 - ₹1500', count: 234 },
        { name: '₹1500 - ₹3000', count: 156 },
        { name: 'Above ₹3000', count: 89 }
      ]
    },
    {
      title: 'Category',
      options: [
        { name: 'Kitchen Appliances', count: 123 },
        { name: 'Cookware', count: 156 },
        { name: 'Home Decor', count: 189 },
        { name: 'Storage', count: 134 }
      ]
    },
    {
      title: 'Brand',
      options: [
        { name: 'Prestige', count: 89 },
        { name: 'Hawkins', count: 76 },
        { name: 'Pigeon', count: 65 },
        { name: 'Milton', count: 54 }
      ]
    },
    {
      title: 'Material',
      options: [
        { name: 'Stainless Steel', count: 145 },
        { name: 'Non-Stick', count: 123 },
        { name: 'Ceramic', count: 89 },
        { name: 'Glass', count: 67 }
      ]
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Non-Stick Cookware Set (5 Pieces)',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 2499,
      originalPrice: 3999,
      discount: 38,
      rating: 4.3,
      reviews: 1234,
      freeDelivery: true,
      badge: 'Bestseller'
    },
    {
      id: 2,
      title: 'Electric Rice Cooker',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 1899,
      originalPrice: 2799,
      discount: 32,
      rating: 4.2,
      reviews: 892,
      freeDelivery: true
    },
    {
      id: 3,
      title: 'Decorative Wall Clock',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 799,
      originalPrice: 1199,
      discount: 33,
      rating: 4.0,
      reviews: 567,
      freeDelivery: true
    },
    {
      id: 4,
      title: 'Storage Container Set',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 699,
      originalPrice: 999,
      discount: 30,
      rating: 4.1,
      reviews: 445,
      freeDelivery: true
    },
    {
      id: 5,
      title: 'Pressure Cooker 5L',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      rating: 4.4,
      reviews: 678,
      freeDelivery: true
    },
    {
      id: 6,
      title: 'Ceramic Dinner Set',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 1599,
      originalPrice: 2299,
      discount: 30,
      rating: 4.2,
      reviews: 334,
      freeDelivery: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        title="Home & Kitchen"
        subtitle="Transform your home with our premium collection of home essentials"
        backgroundImage="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        gradient="from-green-500 via-teal-500 to-blue-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} />
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Home & Kitchen Essentials</h2>
                <p className="text-gray-600">{products.length * 35}+ Products</p>
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

export default HomeKitchen;