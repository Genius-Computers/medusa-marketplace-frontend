
import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    description: 'Premium noise-canceling headphones with exceptional sound quality. Features 30-hour battery life and comfortable over-ear design.',
    price: 1125,
    currency: 'SAR',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000',
      'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1000',
    ],
    tags: ['audio', 'electronics', 'premium'],
    inventory: 15,
    category: 'electronics',
  },
  {
    id: '2',
    title: 'Ultra-Thin Laptop',
    description: 'Professional-grade ultrabook with stunning display, all-day battery life, and lightning-fast performance.',
    price: 4875,
    currency: 'SAR',
    images: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000',
    ],
    tags: ['computers', 'electronics', 'premium'],
    inventory: 8,
    category: 'electronics',
  },
  {
    id: '3',
    title: 'Smart Home Hub',
    description: 'Central control system for your entire smart home. Integrates with all major smart device ecosystems.',
    price: 750,
    currency: 'SAR',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000',
    ],
    tags: ['smart-home', 'electronics', 'connected'],
    inventory: 20,
    category: 'homeware',
  },
  {
    id: '4',
    title: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek, minimalist design with LED indicators.',
    price: 225,
    currency: 'SAR',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000',
      'https://images.unsplash.com/photo-1589003511863-695e9076d9c4?q=80&w=1000',
    ],
    tags: ['accessories', 'charging', 'wireless'],
    inventory: 12,
    category: 'accessories',
  },
  {
    id: '5',
    title: 'Portable Bluetooth Speaker',
    description: 'Compact yet powerful Bluetooth speaker with water resistance and 16-hour battery life. Perfect for outdoor adventures.',
    price: 487,
    currency: 'SAR',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000',
      'https://images.unsplash.com/photo-1589003511863-695e9076d9c4?q=80&w=1000',
    ],
    tags: ['audio', 'electronics', 'portable'],
    inventory: 18,
    category: 'electronics',
  },
  {
    id: '6',
    title: 'Smart Watch',
    description: 'Advanced fitness and health tracker with always-on display, heart rate monitoring, and 7-day battery life.',
    price: 937,
    currency: 'SAR',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000',
    ],
    tags: ['wearables', 'smart-tech', 'fitness'],
    inventory: 7,
    category: 'accessories',
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 3);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};
