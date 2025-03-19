
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/shop/ProductCard';
import { Product } from '@/lib/types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl">
              Handpicked selections that embody our commitment to exceptional design and functionality.
            </p>
          </div>
          
          <Button 
            variant="link" 
            className="flex items-center mt-4 md:mt-0 text-primary"
            asChild
          >
            <Link to="/shop" className="group">
              View all products
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id}
              product={product}
              featured={index === 0}
              className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
