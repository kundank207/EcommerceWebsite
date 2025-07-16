import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const WomenWestern = () => {
  const filters = [
    {
      title: 'Price',
      options: [
        { name: 'Under ₹500', count: 189 },
        { name: '₹500 - ₹1000', count: 267 },
        { name: '₹1000 - ₹2000', count: 145 },
        { name: 'Above ₹2000', count: 89 }
      ]
    },
    {
      title: 'Brand',
      options: [
        { name: 'H&M', count: 76 },
        { name: 'Zara', count: 65 },
        { name: 'Forever 21', count: 54 },
        { name: 'Vero Moda', count: 43 }
      ]
    },
    {
      title: 'Size',
      options: [
        { name: 'XS', count: 45 },
        { name: 'S', count: 89 },
        { name: 'M', count: 123 },
        { name: 'L', count: 98 },
        { name: 'XL', count: 67 }
      ]
    },
    {
      title: 'Category',
      options: [
        { name: 'Dresses', count: 156 },
        { name: 'Tops', count: 134 },
        { name: 'Jeans', count: 89 },
        { name: 'Skirts', count: 67 }
      ]
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Floral Summer Dress with Belt',
      image: '/src/images/w11.jpg',
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      rating: 4.3,
      reviews: 892,
      freeDelivery: true,
      badge: 'Trending'
    },
    {
      id: 2,
      title: 'Casual Denim Jacket',
      image: '/src/images/w12.jpg',
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.1,
      reviews: 567,
      freeDelivery: true
    },
    {
      id: 3,
      title: 'Elegant Maxi Dress',
      image: '/src/images/w13.jpg',
      price: 1599,
      originalPrice: 2299,
      discount: 30,
      rating: 4.4,
      reviews: 723,
      freeDelivery: true,
      badge: 'New Arrival'
    },
    {
      id: 4,
      title: 'High-Waisted Skinny Jeans',
      image: '/src/images/w14.jpg',
      price: 799,
      originalPrice: 1199,
      discount: 33,
      rating: 4.0,
      reviews: 445,
      freeDelivery: true
    },
    {
      id: 5,
      title: 'Chiffon Blouse with Lace Details',
      image: '/src/images/w15.jpg',
      price: 649,
      originalPrice: 999,
      discount: 35,
      rating: 4.2,
      reviews: 334,
      freeDelivery: true
    },
    {
      id: 6,
      title: 'A-Line Mini Skirt',
      image: '/src/images/w16.jpg',
      price: 549,
      originalPrice: 799,
      discount: 31,
      rating: 3.9,
      reviews: 267,
      freeDelivery: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        title="Women Western"
        subtitle="Stay trendy with our latest collection of western wear"
        backgroundImage="/src/images/w4.jpg"
        gradient="from-blue-500 via-indigo-500 to-purple-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} />
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Women Western Wear</h2>
                <p className="text-gray-600">{products.length * 45}+ Products</p>
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

export default WomenWestern;