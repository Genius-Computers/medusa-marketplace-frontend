'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, X, ArrowRight } from 'lucide-react';
import { Product } from '@/components/product';

interface CartItem extends Product {
  quantity: number;
}

const Cart = () => {
  const [note, setNote] = useState('');
  const [country, setCountry] = useState('India');
  const [province, setProvince] = useState('');
  const [pinCode, setPinCode] = useState('');

  const cartItems: CartItem[] = [
    {
      id: 3,
      name: "Projector",
      brand: "LG",
      price: 123000.00,
      mrp: 149999.00,
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&w=600&q=80",
      colors: ["orange", "black", "white"],
      rating: 4.8,
      ratingCount: 320,
      purchaseCount: 100,
      discount: 18,
      deliveryDate: "Mon, 14 Apr",
      category: "Electronics",
      inStock: true,
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your cart</h1>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">In your bag {cartItems.length} items</span>
            <Link 
              href="/"
              className="flex items-center gap-2 px-6 py-2 rounded-full border hover:bg-gray-50 transition"
            >
              Continue shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2 space-y-6">
            {/* Free shipping notice */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span role="img" aria-label="party" className="text-xl">🎉</span>
                <p>Yay! You have got free shipping.</p>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-red-500" />
              </div>
            </div>

            {/* Cart items */}
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-6">
                  <div className="w-32 h-32 bg-gray-100 rounded-xl overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        {item.brand && (
                          <p className="text-gray-600">{item.brand}</p>
                        )}
                        <h3 className="text-xl font-medium">{item.name}</h3>
                        <p className="text-gray-600">
                          {item.colors[0]} / {item.category}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-3 border rounded-lg">
                        <button className="p-2 hover:bg-gray-50">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button className="p-2 hover:bg-gray-50">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xl font-semibold">
                        SAR{item.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Shipping estimate */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Get estimate shipping for your order</h3>
              <div className="flex gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    COUNTRY
                  </label>
                  <select 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    <option>Saudi Arabia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PROVINCE
                  </label>
                  <select 
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    <option>Riyadh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP CODE
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                      placeholder="Zip Code"
                      className="flex-1 border rounded-lg px-3 py-2"
                    />
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                      GET ESTIMATES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Price Details</h3>
              
              {/* Note input */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-gray-700 mb-2">
                  <span className="text-xl">📝</span>
                  Leave A Note With Order
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Special instructions for seller"
                  className="w-full border rounded-lg p-3 h-32 resize-none"
                />
              </div>

              {/* Price breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span>Subtotal</span>
                  <span className="font-semibold">
                    SAR{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Taxes and shipping calculated at checkout
                </p>
              </div>

              {/* Checkout button */}
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 mb-2">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;