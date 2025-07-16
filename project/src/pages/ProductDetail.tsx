import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  // Mock product data - in real app, fetch based on ID
  const product = {
    id: parseInt(id || '1'),
    title: 'Beautiful Floral Print Kurti with Palazzo Set',
    images: [
      '/src/images/w2.jpg',
      '/src/images/w3.jpg',
      '/src/images/w4.jpg', // Add more images as needed
      '/src/images/w5.jpg',
      
      
    ],
    price: 899,
    originalPrice: 1299,
    discount: 31,
    rating: 4.2,
    reviews: 1234,
    freeDelivery: true,
    description: 'Elegant and comfortable kurti set perfect for casual and festive occasions. Made from premium cotton fabric with beautiful floral prints.',
    features: [
      'Premium Cotton Fabric',
      'Machine Washable',
      'Comfortable Fit',
      'Beautiful Floral Print',
      'Includes Palazzo Pants'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Blue', 'Red', 'Green', 'Pink'],
    inStock: true,
    deliveryDate: '2025-01-25'
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { productId: id, quantity, size: selectedSize, color: selectedColor });
  };

  const handleBuyNow = () => {
    console.log('Buy now:', { productId: id, quantity, size: selectedSize, color: selectedColor });
    // Navigate to checkout
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === index ? 'border-purple-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded">
                  <span>{product.rating}</span>
                  <Star className="h-4 w-4 ml-1 fill-current" />
                </div>
                <span className="text-gray-600">({product.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-colors duration-200 ${
                      selectedSize === size
                        ? 'border-purple-500 bg-purple-50 text-purple-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-colors duration-200 ${
                      selectedColor === color
                        ? 'border-purple-500 bg-purple-50 text-purple-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <button
                onClick={handleBuyNow}
                className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200"
              >
                Buy Now
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-sm text-gray-700">
                  Free delivery by {product.deliveryDate}
                </span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-sm text-gray-700">7 days easy return</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-sm text-gray-700">1 year warranty</span>
              </div>
            </div>

            {/* Product Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;