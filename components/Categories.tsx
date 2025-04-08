import React from 'react';
import Link from 'next/link';

const categories = [
  {
    name: 'Earbuds',
    image: 'https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&w=300&h=300&q=80',
    link: '#'
  },
  {
    name: 'Watch',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=300&h=300&q=80',
    link: '#'
  },
  {
    name: 'Vision Pro',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=300&h=300&q=80',
    link: '#'
  },
  {
    name: 'Mouse',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&h=300&q=80',
    link: '#'
  },
  {
    name: 'Mobile',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=300&h=300&q=80',
    link: '#'
  },
  {
    name: 'Homepod',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=300&h=300&q=80',
    link: '#'
  },
  {
    name: 'Camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&h=300&q=80',
    link: '#'
  }
];

const Categories = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 text-black overflow-scroll shrink-0">
          {categories.map((category, index) => (
            <Link href={category.link} key={index}>
              <div className="group cursor-pointer">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white shadow-md mb-3 
                              transition-transform group-hover:scale-105">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-center text-sm font-medium">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;