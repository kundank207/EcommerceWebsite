import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  freeDelivery: boolean;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add to cart logic
    console.log('Added to cart:', product.id);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add to wishlist logic
    console.log('Added to wishlist:', product.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative cursor-pointer" onClick={handleImageClick}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        <button 
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        >
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>

        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}

        {product.badge && (
          <div className="absolute bottom-3 left-3 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 
          className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10 cursor-pointer hover:text-purple-600 transition-colors duration-200"
          onClick={handleImageClick}
        >
          {product.title}
        </h3>

        <div className="flex items-center mb-2">
          <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
          )}
        </div>

        {product.freeDelivery && (
          <p className="text-xs text-green-600 font-medium mb-2">Free Delivery</p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              <span>{product.rating}</span>
              <Star className="h-3 w-3 ml-1 fill-current" />
            </div>
            <span className="text-xs text-gray-500 ml-2">
              ({product.reviews.toLocaleString()})
            </span>
          </div>

          <button 
            onClick={handleAddToCart}
            className="p-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors duration-200"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;