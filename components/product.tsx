import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  brand?: string;
  price: number;
  mrp?: number;
  image: string;
  colors: string[];
  rating?: number;
  ratingCount?: number;
  purchaseCount?: number;
  discount?: number;
  deliveryDate?: string;
  fastDeliveryDate?: string;
  isLimitedTime?: boolean;
  category?: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    image,
    brand,
    name,
    price,
    mrp,
    colors,
    rating,
    ratingCount,
    purchaseCount,
    discount,
    deliveryDate,
    fastDeliveryDate,
    isLimitedTime
  } = product;

  return (
    <div className="group cursor-pointer">
      <div className="relative">
        <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Wishlist button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      {brand && <p className="text-sm text-gray-600 mb-1">{brand}</p>}
      <h3 className="text-base font-medium mb-2">{name}</h3>
      
      {/* Rating */}
      {rating && (
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-sm rounded">
            <span>{rating}</span>
            <Star className="w-4 h-4 fill-current" />
          </div>
          {ratingCount && (
            <span className="text-gray-500 text-sm">({ratingCount})</span>
          )}
        </div>
      )}
      
      {/* Price */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-semibold">
          SAR{price.toLocaleString('en-IN')}
        </span>
        {mrp && (
          <>
            <span className="text-gray-500 line-through text-sm">
              SAR{mrp.toLocaleString('en-IN')}
            </span>
            {discount && (
              <span className="text-green-600 text-sm">
                ({discount}% off)
              </span>
            )}
          </>
        )}
      </div>

      {/* Purchase count */}
      {purchaseCount && (
        <p className="text-gray-600 text-sm mb-2">
          {purchaseCount}+ bought in past month
        </p>
      )}

      {/* Limited time deal */}
      {isLimitedTime && (
        <div className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded mb-2">
          Limited time deal
        </div>
      )}

      {/* Delivery info */}
      {deliveryDate && (
        <div className="text-sm mb-2">
          <p className="text-gray-900">FREE delivery {deliveryDate}</p>
          {fastDeliveryDate && (
            <p className="text-gray-600">
              Or fastest delivery {fastDeliveryDate}
            </p>
          )}
        </div>
      )}

      {/* Color variants */}
      <div className="flex gap-2 mb-3">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-6 h-6 rounded-full ${
              color === 'white' 
                ? 'bg-white border border-gray-300' 
                : `bg-${color}-500`
            } cursor-pointer hover:ring-2 ring-offset-2 ring-gray-400 transition`}
            title={color}
          />
        ))}
      </div>

      {/* Add to cart button */}
      <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
        <ShoppingCart className="w-5 h-5" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;