import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Product } from './product';
interface CartItem extends Product {
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
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

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div 
      className={`fixed inset-y-0 right-0 w-[400px] bg-white text-black shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ShoppingBag className="w-5 h-5" />
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-4 py-3 bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <span role="img" aria-label="party" className="text-xl">🎉</span>
            <p className="text-sm">Yay! You have got free shipping.</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-red-500" />
          </div>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 py-4 border-b">
              <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
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
                      <p className="text-sm text-gray-600">{item.brand}</p>
                    )}
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.colors[0]} / {item.category}
                    </p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 border rounded-lg">
                    <button className="p-1 hover:bg-gray-100">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button className="p-1 hover:bg-gray-100">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-semibold">
                    SAR{item.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note input */}
        <div className="p-4 border-t border-b">
          <button className="flex items-center justify-between w-full py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center gap-2">
              <span className="text-xl">📝</span>
              <span>Leave A Note With Order</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">Total</span>
            <div>
              <p className="text-lg font-semibold">
                SAR{total.toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-gray-500">
                Taxes and shipping calculated at checkout
              </p>
            </div>
          </div>
          
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            CHECKOUT
          </button>
          
          <button 
            onClick={onClose}
            className="w-full text-center mt-2 text-gray-600 hover:text-gray-800"
          >
            VIEW CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;