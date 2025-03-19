
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import BlurImage from '@/components/ui/BlurImage';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className, featured = false }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: `${product.id}-default`,
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.images[0],
    });
  };

  return (
    <div 
      className={cn(
        'group relative rounded-lg overflow-hidden card-hover bg-background',
        featured ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]', // Changed from aspect-[3/4] to aspect-[4/5]
        className
      )}
    >
      <Link to={`/product/${product.id}`} className="block w-full h-full">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10"></div>
        
        <BlurImage
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-white font-medium">{product.title}</h3>
              <div className="text-white/90 text-sm mt-1">${product.price.toFixed(2)}</div>
            </div>
            
            <Button
              size="icon"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full h-9 w-9 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
