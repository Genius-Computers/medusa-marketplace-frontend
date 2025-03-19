
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { getAllCategories } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import BlurImage from '@/components/ui/BlurImage';
import { ArrowRight } from 'lucide-react';

const categoryImages: Record<string, string> = {
  electronics: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000',
  accessories: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000',
  homeware: 'https://images.unsplash.com/photo-1551907234-fb773fb08a8a?q=80&w=1000',
};

const categoryDescriptions: Record<string, string> = {
  electronics: 'Premium audio, smart devices, and tech accessories for modern living.',
  accessories: 'Watches, wallets, and everyday essentials defined by minimalist design.',
  homeware: 'Thoughtfully crafted objects that bring beauty and function to your home.',
};

const Categories: React.FC = () => {
  const categories = getAllCategories();

  return (
    <MainLayout>
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary/30">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Product Categories</h1>
            <p className="text-muted-foreground">
              Browse our collections by category to find the perfect pieces for your needs.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-content py-16">
        {categories.map((category, index) => (
          <div key={category}>
            {index > 0 && <Separator className="my-16" />}
            
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden aspect-[4/3]">
                  <BlurImage
                    src={categoryImages[category] || 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000'}
                    alt={category}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-light tracking-tight capitalize">{category}</h2>
                <p className="text-muted-foreground">
                  {categoryDescriptions[category] || 'Explore our collection of premium products in this category.'}
                </p>
                <Link 
                  to={`/categories/${category}`} 
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Categories;
