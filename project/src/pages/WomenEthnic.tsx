import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const WomenEthnic = () => {
  const filters = [
    {
      title: 'Price',
      options: [
        { name: 'Under ₹500', count: 234 },
        { name: '₹500 - ₹1000', count: 456 },
        { name: '₹1000 - ₹2000', count: 123 },
        { name: 'Above ₹2000', count: 67 }
      ]
    },
    {
      title: 'Brand',
      options: [
        { name: 'Libas', count: 89 },
        { name: 'Anouk', count: 76 },
        { name: 'Sangria', count: 54 },
        { name: 'Vishudh', count: 43 }
      ]
    },
    {
      title: 'Fabric',
      options: [
        { name: 'Cotton', count: 156 },
        { name: 'Silk', count: 89 },
        { name: 'Georgette', count: 67 },
        { name: 'Chiffon', count: 45 }
      ]
    },
    {
      title: 'Occasion',
      options: [
        { name: 'Casual', count: 234 },
        { name: 'Festive', count: 123 },
        { name: 'Wedding', count: 89 },
        { name: 'Party', count: 67 }
      ]
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Beautiful Floral Print Kurti with Palazzo Set',
      image: '/src/images/w4.jpg',
      price: 899,
      originalPrice: 1299,
      discount: 31,
      rating: 4.2,
      reviews: 1234,
      freeDelivery: true,
      badge: 'Bestseller'
    },
    {
      id: 2,
      title: 'Elegant Anarkali Dress with Dupatta',
      image: '/src/images/w5.jpg',
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      rating: 4.0,
      reviews: 856,
      freeDelivery: true
    },
    {
      id: 3,
      title: 'Traditional Silk Saree with Blouse',
      image: '/src/images/w6.jpg',
      price: 2499,
      originalPrice: 3999,
      discount: 38,
      rating: 4.5,
      reviews: 567,
      freeDelivery: true,
      badge: 'Premium'
    },
    {
      id: 4,
      title: 'Cotton Straight Kurti with Pants',
      image: '/src/images/w7.jpg',
      price: 649,
      originalPrice: 999,
      discount: 35,
      rating: 3.9,
      reviews: 432,
      freeDelivery: true
    },
    {
      id: 5,
      title: 'Designer Lehenga Choli Set',
      image: '/src/images/w8.jpg',
      price: 3299,
      originalPrice: 4999,
      discount: 34,
      rating: 4.3,
      reviews: 289,
      freeDelivery: true,
      badge: 'Wedding Special'
    },
    {
      id: 6,
      title: 'Printed Palazzo Suit with Dupatta',
      image: '/src/images/w9.jpg',
      price: 799,
      originalPrice: 1199,
      discount: 33,
      rating: 4.1,
      reviews: 678,
      freeDelivery: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        title="Women Ethnic"
        subtitle="Discover traditional elegance with our curated collection of ethnic wear"
        backgroundImage="/src/images/w1.jpg"
        gradient="from-pink-500 via-rose-500 to-purple-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} />
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Women Ethnic Wear</h2>
                <p className="text-gray-600">{products.length * 50}+ Products</p>
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

export default WomenEthnic;