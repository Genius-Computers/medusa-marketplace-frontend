
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000',
    description: 'Premium audio, smart devices, and tech accessories',
    slug: 'electronics',
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000',
    description: 'Tech peripherals and everyday essentials',
    slug: 'accessories',
  },
  {
    name: 'Homeware',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000',
    description: 'Smart home devices and connected living solutions',
    slug: 'homeware',
  },
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Browse Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection organized by category to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.name}
              to={`/categories/${category.slug}`}
              className={cn(
                "group relative rounded-lg overflow-hidden aspect-square card-hover",
                index === 1 ? "md:translate-y-8" : ""
              )}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10"></div>
              
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-20">
                <h3 className="text-white text-xl font-medium mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
