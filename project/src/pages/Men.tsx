import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const Men = () => {
  const filters = [
    {
      title: 'Price',
      options: [
        { name: 'Under ₹500', count: 156 },
        { name: '₹500 - ₹1000', count: 234 },
        { name: '₹1000 - ₹2000', count: 189 },
        { name: 'Above ₹2000', count: 123 }
      ]
    },
    {
      title: 'Brand',
      options: [
        { name: 'Nike', count: 89 },
        { name: 'Adidas', count: 76 },
        { name: 'Puma', count: 65 },
        { name: 'Levi\'s', count: 54 }
      ]
    },
    {
      title: 'Size',
      options: [
        { name: 'S', count: 67 },
        { name: 'M', count: 134 },
        { name: 'L', count: 156 },
        { name: 'XL', count: 123 },
        { name: 'XXL', count: 89 }
      ]
    },
    {
      title: 'Category',
      options: [
        { name: 'T-Shirts', count: 189 },
        { name: 'Shirts', count: 145 },
        { name: 'Jeans', count: 123 },
        { name: 'Jackets', count: 89 }
      ]
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Premium Cotton T-Shirt',
      image: '/src/images/m1.jpg',
      price: 599,
      originalPrice: 899,
      discount: 33,
      rating: 4.2,
      reviews: 1456,
      freeDelivery: true,
      badge: 'Bestseller'
    },
    {
      id: 2,
      title: 'Casual Denim Shirt',
      image: '/src/images/m2.jpg',
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.0,
      reviews: 892,
      freeDelivery: true
    },
    {
      id: 3,
      title: 'Slim Fit Chinos',
      image: '/src/images/m3.jpg',
      price: 1199,
      originalPrice: 1699,
      discount: 29,
      rating: 4.3,
      reviews: 567,
      freeDelivery: true
    },
    {
      id: 4,
      title: 'Leather Jacket',
      image: '/src/images/m4.jpg',
      price: 2999,
      originalPrice: 4499,
      discount: 33,
      rating: 4.5,
      reviews: 234,
      freeDelivery: true,
      badge: 'Premium'
    },
    {
      id: 5,
      title: 'Sports Track Pants',
      image: '/src/images/m5.jpg',
      price: 799,
      originalPrice: 1199,
      discount: 33,
      rating: 4.1,
      reviews: 678,
      freeDelivery: true
    },
    {
      id: 6,
      title: 'Formal White Shirt',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 1099,
      originalPrice: 1599,
      discount: 31,
      rating: 4.4,
      reviews: 445,
      freeDelivery: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        title="Men's Fashion"
        subtitle="Discover the latest trends in men's clothing and accessories"
        backgroundImage="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        gradient="from-gray-700 via-gray-800 to-black"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} />
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Men's Collection</h2>
                <p className="text-gray-600">{products.length * 60}+ Products</p>
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

export default Men;