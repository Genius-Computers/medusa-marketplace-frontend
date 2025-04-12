import Link from 'next/link';
import React from 'react';
import ProductCard, { Product } from './product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Black brown headphone",
    brand: "Sony",
    price: 3400.00,
    mrp: 4999.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    colors: ["orange", "white"],
    rating: 4.3,
    ratingCount: 950,
    purchaseCount: 400,
    discount: 32,
    deliveryDate: "Sun, 13 Apr",
    fastDeliveryDate: "Tomorrow, 12 Apr",
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Black Earbuds",
    brand: "Apple",
    price: 1000.00,
    mrp: 1999.00,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=80",
    colors: ["black", "white", "orange", "pink"],
    rating: 4.1,
    ratingCount: 1200,
    purchaseCount: 600,
    discount: 50,
    deliveryDate: "Sun, 13 Apr",
    fastDeliveryDate: "Tomorrow, 12 Apr",
    isLimitedTime: true,
    category: "Electronics",
    inStock: true
  },
  {
    id: 3,
    name: "Bluetooth wireless headphone",
    brand: "Bose",
    price: 4200.00,
    mrp: 5999.00,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
    colors: ["orange", "black"],
    rating: 4.7,
    ratingCount: 750,
    purchaseCount: 300,
    discount: 30,
    deliveryDate: "Mon, 14 Apr",
    category: "Electronics",
    inStock: true
  },
  {
    id: 4,
    name: "Bluetooth wireless speaker",
    brand: "JBL",
    price: 3300.00,
    mrp: 4499.00,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80",
    colors: ["purple", "white", "gray"],
    rating: 4.4,
    ratingCount: 550,
    purchaseCount: 200,
    discount: 27,
    deliveryDate: "Sun, 13 Apr",
    fastDeliveryDate: "Tomorrow, 12 Apr",
    category: "Electronics",
    inStock: true
  }
];


const ProductListing = () => {
  return (
    <div className="py-12 bg-white text-black">
      <div className="md:px-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Top Selling Products</h2>
          <button className="text-sm text-gray-600 hover:text-black transition">View All Products</button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {PRODUCTS.map((product, index) => (
            <Link key={index} href={`/products/${product.id}`} className="group cursor-pointer">
              <ProductCard product={product}  />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;