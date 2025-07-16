import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: 'Attractive Traditional Kurti',
      image: '/src/images/w5.jpg',
      price: 184,
      originalPrice: null,
      discount: null,
      rating: 4.0,
      reviews: 87816,
      freeDelivery: true,
      moreImages: 3
    },
    {
      id: 2,
      title: 'Trendy Girls Top & Bottom Set',
      image: '/src/images/w6.jpg',
      price: 107,
      originalPrice: 109,
      discount: 22,
      rating: 3.9,
      reviews: 34909,
      freeDelivery: true,
      moreImages: 1
    },
    {
      id: 3,
      title: 'Sensational Sarees Collection',
      image: '/src/images/w7.jpg',
      price: 404,
      originalPrice: null,
      discount: null,
      rating: 4.0,
      reviews: 8282,
      freeDelivery: true,
      moreImages: 4
    },
    {
      id: 4,
      title: 'Modern Attractive Men Flip Flops',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 180,
      originalPrice: null,
      discount: null,
      rating: 3.9,
      reviews: 2889,
      freeDelivery: true,
      moreImages: 0
    },
    {
      id: 5,
      title: 'Elegant Women Handbag',
      image: 'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.2,
      reviews: 1543,
      freeDelivery: true,
      moreImages: 2
    },
    {
      id: 6,
      title: 'Premium Cotton T-Shirt',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      price: 245,
      originalPrice: 350,
      discount: 30,
      rating: 4.1,
      reviews: 967,
      freeDelivery: true,
      moreImages: 3
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Products For You</h2>
            <p className="text-gray-600">1000+ Products</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  className="absolute top-2 right-2 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => e.preventDefault()}
                >
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                </button>
                {product.moreImages > 0 && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    +{product.moreImages} More
                  </div>
                )}
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>

                {product.freeDelivery && (
                  <p className="text-xs text-green-600 font-medium mb-2">Free Delivery</p>
                )}

                <div className="flex items-center">
                  <div className="flex items-center bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    <span>{product.rating}</span>
                    <Star className="h-3 w-3 ml-1 fill-current" />
                  </div>
                  <span className="text-xs text-gray-500 ml-2">
                    {product.reviews.toLocaleString()} Reviews
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
