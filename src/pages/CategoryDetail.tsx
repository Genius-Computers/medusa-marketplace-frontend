
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import ProductCard from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { getProductsByCategory } from '@/lib/data';

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

const CategoryDetail: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  const products = getProductsByCategory(category || '');
  
  if (!category || products.length === 0) {
    return (
      <MainLayout>
        <div className="container-content py-24 text-center">
          <h2 className="text-2xl font-medium mb-4">Category Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The category you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate('/categories')}>View All Categories</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="relative h-[50vh] max-h-[500px] w-full overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <img 
            src={categoryImages[category] || 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000'} 
            alt={category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
        </div>
        
        {/* Hero Content */}
        <div className="container-content relative z-10 h-full flex flex-col justify-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="mb-6 -ml-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 self-start"
            onClick={() => navigate('/categories')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Categories
          </Button>
          
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4 capitalize">
            {category}
          </h1>
          <p className="text-white/80 max-w-2xl">
            {categoryDescriptions[category] || 'Explore our collection of premium products in this category.'}
          </p>
        </div>
      </div>
      
      <div className="container-content py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-light tracking-tight mb-2">
            {products.length} Products
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoryDetail;
