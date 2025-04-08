import React from 'react';

interface ColorVariant {
  color: string;
  class: string;
}

interface Product {
  name: string;
  price: number;
  image: string;
  colors: ColorVariant[];
}

const products: Product[] = [
  {
    name: "Round box speaker",
    price: 4000.00,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Black", class: "bg-black" },
      { color: "Orange", class: "bg-orange-400" },
      { color: "White", class: "bg-white border border-gray-300" }
    ]
  },
  {
    name: "Quietcomfort Headphone",
    price: 2400.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Black", class: "bg-black" },
      { color: "Gray", class: "bg-gray-500" }
    ]
  },
  {
    name: "Projector",
    price: 1230000.00,
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Orange", class: "bg-orange-400" },
      { color: "Black", class: "bg-black" },
      { color: "White", class: "bg-white border border-gray-300" }
    ]
  },
  {
    name: "Pro max airbuds",
    price: 5100.00,
    image: "https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Gray", class: "bg-gray-500" },
      { color: "Black", class: "bg-black" }
    ]
  },
  {
    name: "Pro airbuds",
    price: 3600.00,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Black", class: "bg-black" },
      { color: "Gray", class: "bg-gray-500" }
    ]
  },
  {
    name: "Pro airbuds",
    price: 3600.00,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Black", class: "bg-black" },
      { color: "Gray", class: "bg-gray-500" }
    ]
  },
  {
    name: "Pro max airbuds",
    price: 5100.00,
    image: "https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Gray", class: "bg-gray-500" },
      { color: "Black", class: "bg-black" }
    ]
  },
  {
    name: "Projector",
    price: 1230000.00,
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Orange", class: "bg-orange-400" },
      { color: "Black", class: "bg-black" },
      { color: "White", class: "bg-white border border-gray-300" }
    ]
  },
  {
    name: "Quietcomfort Headphone",
    price: 2400.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Black", class: "bg-black" },
      { color: "Gray", class: "bg-gray-500" }
    ]
  },
  {
    name: "Round box speaker",
    price: 4000.00,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80",
    colors: [
      { color: "Black", class: "bg-black" },
      { color: "Orange", class: "bg-orange-400" },
      { color: "White", class: "bg-white border border-gray-300" }
    ]
  },
];

const ProductListing = () => {
  return (
    <div className="bg-white py-12 text-black">
      <div className="md:px-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Top Selling Products</h2>
          <button className="text-sm text-gray-600 hover:text-black transition">View All Products</button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-base font-medium mb-2">{product.name}</h3>
              <div className="text-lg font-semibold mb-3">
                SAR {product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </div>
              
              <div className="flex gap-2">
                {product.colors.map((color, colorIndex) => (
                  <button
                    key={colorIndex}
                    className={`w-6 h-6 rounded-full ${color.class} cursor-pointer hover:ring-2 ring-offset-2 ring-gray-400 transition`}
                    title={color.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;