import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const BagsFootwear = () => {
  const filters = [
    {
      title: 'Price',
      options: [
        { name: 'Under ₹500', count: 156 },
        { name: '₹500 - ₹1500', count: 234 },
        { name: '₹1500 - ₹3000', count: 189 },
        { name: 'Above ₹3000', count: 89 }
      ]
    },
    {
      title: 'Category',
      options: [
        { name: 'Handbags', count: 156 },
        { name: 'Shoes', count: 189 },
        { name: 'Sandals', count: 134 },
        { name: 'Backpacks', count: 123 }
      ]
    },
    {
      title: 'Brand',
      options: [
        { name: 'Nike', count: 89 },
        { name: 'Adidas', count: 76 },
        { name: 'Puma', count: 65 },
        { name: 'Bata', count: 54 }
      ]
    },
    {
      title: 'Size',
      options: [
        { name: '6', count: 67 },
        { name: '7', count: 89 },
        { name: '8', count: 123 },
        { name: '9', count: 134 },
        { name: '10', count: 89 }
      ]
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Stylish Women Handbag',
      image: 'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      rating: 4.2,
      reviews: 892,
      freeDelivery: true,
      badge: 'Trending'
    },
    {
      id: 2,
      title: 'Comfortable Running Shoes',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 1899,
      originalPrice: 2799,
      discount: 32,
      rating: 4.4,
      reviews: 1234,
      freeDelivery: true,
      badge: 'Bestseller'
    },
    {
      id: 3,
      title: 'Casual Flip Flops',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 399,
      originalPrice: 599,
      discount: 33,
      rating: 4.0,
      reviews: 567,
      freeDelivery: true
    },
    {
      id: 4,
      title: 'Travel Backpack 30L',
      image: 'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 1599,
      originalPrice: 2299,
      discount: 30,
      rating: 4.3,
      reviews: 445,
      freeDelivery: true
    },
    {
      id: 5,
      title: 'Formal Leather Shoes',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 2299,
      originalPrice: 3299,
      discount: 30,
      rating: 4.1,
      reviews: 334,
      freeDelivery: true
    },
    {
      id: 6,
      title: 'Designer Clutch Bag',
      image: 'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.2,
      reviews: 678,
      freeDelivery: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        title="Bags & Footwear"
        subtitle="Step out in style with our premium collection of bags and footwear"
        backgroundImage="https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        gradient="from-indigo-500 via-purple-500 to-pink-500"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} />
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Bags & Footwear Collection</h2>
                <p className="text-gray-600">{products.length * 42}+ Products</p>
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

export default BagsFootwear;