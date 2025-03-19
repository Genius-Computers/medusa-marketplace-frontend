
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartState, CartAction, CartItem } from '@/lib/types';
import { toast } from 'sonner';

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity
        };
        
        toast.success('Item quantity updated in cart');
        return { 
          ...state, 
          items: updatedItems, 
          total: calculateTotal(updatedItems) 
        };
      }
      
      toast.success('Item added to cart');
      const newItems = [...state.items, action.payload];
      return { 
        ...state, 
        items: newItems, 
        total: calculateTotal(newItems) 
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      toast.info('Item removed from cart');
      return { 
        ...state, 
        items: newItems, 
        total: calculateTotal(newItems) 
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const updatedItems = state.items.map(item => 
        item.id === id ? { ...item, quantity } : item
      );

      if (quantity === 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }

      return { 
        ...state, 
        items: updatedItems, 
        total: calculateTotal(updatedItems) 
      };
    }

    case 'TOGGLE_CART':
      return { ...state, isOpen: action.payload !== undefined ? action.payload : !state.isOpen };

    case 'CLEAR_CART':
      toast.info('Cart cleared');
      return { ...state, items: [], total: 0 };

    default:
      return state;
  }
};

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleCart: (isOpen?: boolean) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const toggleCart = (isOpen?: boolean) => {
    dispatch({ type: 'TOGGLE_CART', payload: isOpen });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, removeFromCart, updateQuantity, toggleCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
