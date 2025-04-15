import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ShowcaseProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
}

const products: ShowcaseProduct[] = [
  {
    id: 1,
    name: "Bluetooth wireless speaker",
    price: 3300.00,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80",
    colors: ["purple", "white", "gray"]
  },
  {
    id: 2,
    name: "Curve screen watch",
    price: 5200.00,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
    colors: ["blue", "black", "white"]
  },
  {
    id: 3,
    name: "Black brown headphone",
    price: 3400.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    colors: ["orange", "black", "white"]
  },
  {
    id: 4,
    name: "Pro max airbuds",
    price: 5100.00,
    image: "https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&w=600&q=80",
    colors: ["black", "white", "pink"]
  }
];

// Side images to match with product transitions
const sideImages = [
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1546435770-a3e736e05ca3?auto=format&fit=crop&w=800&q=80"
];

const ScrollCaseProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (scrollContainerRef.current && currentIndex < products.length - 2) {
      setIsScrolling(true);
      setCurrentIndex(prev => prev + 1);
      setCurrentImageIndex(prev => (prev + 1) % sideImages.length);
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current && currentIndex > 0) {
      setIsScrolling(true);
      setCurrentIndex(prev => prev - 1);
      setCurrentImageIndex(prev => (prev - 1 + sideImages.length) % sideImages.length);
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  // Get only the visible products (2 at a time)
  const visibleProducts = products.slice(currentIndex, currentIndex + 2);

  return (
    <div className="bg-white py-16 text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          {/* Left side - Images */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="aspect-[4/5]">
              <img 
                src={sideImages[currentImageIndex]} 
                alt="Showcase"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                style={{ transform: isScrolling ? 'scale(1.05)' : 'scale(1)' }}
              />
            </div>
          </div>

          {/* Right side - Products */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Premium Sound at Affordable Prices!</h2>
              <p className="text-gray-600">
                Experience crystal-clear audio quality with our premium collection of audio devices. 
                From wireless earbuds to professional headphones, we have everything for every audiophile.
              </p>
            </div>

            <div className="relative">
              {/* Navigation buttons */}
              <button 
                onClick={scrollToPrev}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg 
                  ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={scrollToNext}
                disabled={currentIndex >= products.length - 2}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg
                  ${currentIndex >= products.length - 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Products container - only showing 2 at a time */}
              <div 
                ref={scrollContainerRef}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-4">
                  {visibleProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className={`bg-gray-50 p-4 rounded-xl transition-all duration-300
                        ${isScrolling ? 'opacity-50 transform scale-95' : 'opacity-100 transform scale-100'}`}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden bg-white mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-medium mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">
                          ₹{product.price.toLocaleString('en-IN')}
                        </p>
                        <div className="flex gap-1">
                          {product.colors.map((color, index) => (
                            <button
                              key={index}
                              className={`w-4 h-4 rounded-full ${
                                color === 'white' 
                                  ? 'bg-white border border-gray-300' 
                                  : `bg-${color}-500`
                              }`}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCaseProduct;