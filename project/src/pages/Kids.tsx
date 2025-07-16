import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const Kids = () => {
  const filters = [
    {
      title: 'Price',
      options: [
        { name: 'Under ₹300', count: 234 },
        { name: '₹300 - ₹600', count: 189 },
        { name: '₹600 - ₹1000', count: 123 },
        { name: 'Above ₹1000', count: 67 }
      ]
    },
    {
      title: 'Age Group',
      options: [
        { name: '0-2 Years', count: 89 },
        { name: '3-5 Years', count: 134 },
        { name: '6-8 Years', count: 156 },
        { name: '9-12 Years', count: 123 }
      ]
    },
    {
      title: 'Gender',
      options: [
        { name: 'Boys', count: 267 },
        { name: 'Girls', count: 234 },
        { name: 'Unisex', count: 156 }
      ]
    },
    {
      title: 'Category',
      options: [
        { name: 'T-Shirts', count: 189 },
        { name: 'Dresses', count: 145 },
        { name: 'Shorts', count: 123 },
        { name: 'Shoes', count: 89 }
      ]
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Cute Cartoon Print T-Shirt for Boys',
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 399,
      originalPrice: 599,
      discount: 33,
      rating: 4.3,
      reviews: 567,
      freeDelivery: true,
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'Princess Dress for Girls',
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 699,
      originalPrice: 999,
      discount: 30,
      rating: 4.5,
      reviews: 892,
      freeDelivery: true,
      badge: 'Bestseller'
    },
    {
      id: 3,
      title: 'Comfortable Cotton Shorts',
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 299,
      originalPrice: 449,
      discount: 33,
      rating: 4.1,
      reviews: 334,
      freeDelivery: true
    },
    {
      id: 4,
      title: 'Colorful Sneakers for Kids',
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.2,
      reviews: 445,
      freeDelivery: true
    },
    {
      id: 5,
      title: 'Denim Jacket for Kids',
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 799,
      originalPrice: 1199,
      discount: 33,
      rating: 4.0,
      reviews: 267,
      freeDelivery: true
    },
    {
      id: 6,
      title: 'Floral Print Frock',
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 549,
      originalPrice: 799,
      discount: 31,
      rating: 4.4,
      reviews: 678,
      freeDelivery: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        title="Kids Fashion"
        subtitle="Adorable and comfortable clothing for your little ones"
        backgroundImage="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        gradient="from-yellow-400 via-orange-500 to-red-500"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} />
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Kids Collection</h2>
                <p className="text-gray-600">{products.length * 40}+ Products</p>
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

export default Kids;