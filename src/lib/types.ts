
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  tags: string[];
  variants?: ProductVariant[];
  inventory: number;
  category: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  options: {
    [key: string]: string;
  };
  inventory: number;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId?: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  options?: {
    [key: string]: string;
  };
}

export type CartState = {
  items: CartItem[];
  isOpen: boolean;
  total: number;
};

export type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_CART'; payload?: boolean }
  | { type: 'CLEAR_CART' };
