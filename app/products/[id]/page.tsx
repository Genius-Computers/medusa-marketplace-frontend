'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';
import ProductListing, { PRODUCTS } from '@/components/ProductListing';
import { useParams } from 'next/navigation';

export default function ProAirbudsPage() {
  const params = useParams();
  const productId = params.id;
  const product = PRODUCTS.find(product => product.id === parseInt(productId as string));
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white text-black">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span>{product?.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
            <div className="relative w-full aspect-video md:h-[500px]">
              <Image 
                src={product?.image || ''} 
                alt={product?.name || ''} 
                fill 
                className="object-contain" 
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
            
            <p className="text-gray-700 mb-6">
              This is a demonstration store. This demo product is not available for purchase. 
              The product images have been taken from freepik.
            </p>

            {/* Price */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold">SAR {product?.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="mb-2">Select color : {selectedColor}</p>
              <div className="flex gap-2">
                {product?.colors.map((color, index) => (
                  <button 
                    key={index}
                    className={`w-8 h-8 rounded-full bg-black ${selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="mb-2">Quantity</p>
              <div className="flex border border-gray-300 rounded w-max">
                <button 
                  className="px-3 py-2 border-r border-gray-300"
                  onClick={decrementQuantity}
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="px-4 py-2 min-w-[40px] text-center">{quantity}</span>
                <button 
                  className="px-3 py-2 border-l border-gray-300"
                  onClick={incrementQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                className="w-full py-3 bg-black text-white rounded-md font-medium"
              >
                ADD TO CART
              </button>
              <button 
                className="w-full py-3 bg-black text-white rounded-md font-medium"
              >
                BUY IT NOW
              </button>
            </div>
          </div>
        </div>

        {/* Product Short Videos Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Product Short Videos</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Product videos would appear here</p>
          </div>
        </div>
      </main>
      <ProductListing />
    </div>
  );
} 