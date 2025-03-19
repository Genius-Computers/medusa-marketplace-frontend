
import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Minimalist Watch',
    description: 'Elegant timepiece with a clean, minimalist design. Features a premium leather strap and sapphire crystal face.',
    price: 199.99,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000',
    ],
    tags: ['watches', 'accessories', 'premium'],
    inventory: 15,
    category: 'accessories',
  },
  {
    id: '2',
    title: 'Noise-Canceling Headphones',
    description: 'Premium wireless headphones with active noise cancellation, exceptional sound quality, and 30-hour battery life.',
    price: 349.99,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000',
      'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1000',
    ],
    tags: ['audio', 'electronics', 'premium'],
    inventory: 8,
    category: 'electronics',
  },
  {
    id: '3',
    title: 'Ceramic Mug Set',
    description: 'Handcrafted ceramic mug set with minimalist design. Each piece is unique with slight variations in glaze.',
    price: 68.00,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000',
      'https://images.unsplash.com/photo-1616500458842-27efaf7f50df?q=80&w=1000',
    ],
    tags: ['homeware', 'kitchen', 'ceramic'],
    inventory: 20,
    category: 'homeware',
  },
  {
    id: '4',
    title: 'Leather Wallet',
    description: 'Premium full-grain leather wallet with RFID protection. Features multiple card slots and a coin pocket.',
    price: 89.99,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000',
    ],
    tags: ['accessories', 'leather', 'premium'],
    inventory: 12,
    category: 'accessories',
  },
  {
    id: '5',
    title: 'Portable Bluetooth Speaker',
    description: 'Compact yet powerful Bluetooth speaker with water resistance and 16-hour battery life. Perfect for outdoor adventures.',
    price: 129.99,
    currency: 'USD',
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
    title: 'Smart Plant Pot',
    description: 'Intelligent plant pot that monitors soil moisture, sunlight, and temperature. Connects to your smartphone via Bluetooth.',
    price: 59.99,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1000',
      'https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?q=80&w=1000',
    ],
    tags: ['home', 'smart-home', 'plants'],
    inventory: 7,
    category: 'homeware',
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
