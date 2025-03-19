
import React, { useState } from 'react';
import { Filter, ChevronDown, X } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import ProductCard from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { products, getAllCategories } from '@/lib/data';
import { cn } from '@/lib/utils';

const Shop: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const allCategories = getAllCategories();
  
  const filteredProducts = selectedCategories.length > 0
    ? products.filter(product => selectedCategories.includes(product.category))
    : products;
    
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <MainLayout>
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary/30">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Shop All Products</h1>
            <p className="text-muted-foreground">
              Explore our complete collection of thoughtfully designed products for modern living.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-content py-12">
        <div className="flex justify-between items-center mb-8">
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className={cn("h-4 w-4 transition-transform", showFilters && "rotate-180")} />
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
        
        {/* Filter panel */}
        {showFilters && (
          <div className="mb-8 p-4 border rounded-lg animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Filter Products</h3>
              
              {selectedCategories.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                  Clear All
                </Button>
              )}
            </div>
            
            <Separator className="mb-4" />
            
            <div>
              <h4 className="text-sm font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {allCategories.map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${category}`} 
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <label 
                      htmlFor={`category-${category}`} 
                      className="text-sm capitalize cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Selected filters pills */}
            {selectedCategories.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Active Filters:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map(category => (
                    <div 
                      key={`pill-${category}`} 
                      className="flex items-center bg-secondary px-2 py-1 rounded-full text-xs"
                    >
                      <span className="capitalize">{category}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-4 w-4 ml-1" 
                        onClick={() => toggleCategory(category)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No products match your filters.</p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Shop;
