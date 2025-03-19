
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart, Share2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BlurImage from '@/components/ui/BlurImage';
import MainLayout from '@/components/layout/MainLayout';
import { getProductById } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id || '');
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  if (!product) {
    return (
      <MainLayout>
        <div className="container-content py-24 text-center">
          <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
      </MainLayout>
    );
  }
  
  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-default`,
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity,
      image: product.images[0],
    });
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > product.inventory) {
      toast.error(`Sorry, we only have ${product.inventory} items in stock`);
      return;
    }
    setQuantity(newQuantity);
  };
  
  return (
    <MainLayout>
      <div className="container-content py-12 pt-28 md:pt-36">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6 -ml-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary/30">
              <BlurImage
                src={product.images[activeImage]}
                alt={product.title}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      activeImage === index 
                        ? 'border-primary ring-2 ring-primary/20' 
                        : 'border-transparent hover:border-muted'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <Link 
                to={`/categories/${product.category}`} 
                className="text-xs font-medium uppercase tracking-wider text-primary"
              >
                {product.category}
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-light mb-4">{product.title}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">128 reviews</span>
            </div>
            
            <div className="text-2xl font-medium mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <p className="text-muted-foreground mb-8">
              {product.description}
            </p>
            
            <div className="space-y-6 mb-8">
              {/* Quantity selector */}
              <div>
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <span className="sr-only">Decrease quantity</span>
                    <span>−</span>
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.inventory}
                  >
                    <span className="sr-only">Increase quantity</span>
                    <span>+</span>
                  </Button>
                </div>
              </div>
              
              {/* Stock indicator */}
              <div className="text-sm">
                <span className="font-medium">Availability:</span>{' '}
                {product.inventory > 10 ? (
                  <span className="text-green-600">In Stock</span>
                ) : product.inventory > 0 ? (
                  <span className="text-amber-600">Low Stock ({product.inventory} left)</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
                disabled={product.inventory === 0}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1"
              >
                <Heart className="mr-2 h-5 w-5" />
                Save
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="flex-shrink-0"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Additional product information */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger 
                value="description" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary pb-2 pt-0 px-4 -mb-px data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="details" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary pb-2 pt-0 px-4 -mb-px data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Product Details
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary pb-2 pt-0 px-4 -mb-px data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="pt-6">
              <div className="max-w-3xl">
                <p className="text-muted-foreground">
                  {product.description}
                </p>
                <p className="mt-4 text-muted-foreground">
                  Designed with meticulous attention to both form and function, this product exemplifies 
                  our commitment to creating beautiful, useful objects that enhance everyday life.
                  Each detail has been carefully considered to ensure a premium experience and lasting quality.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="pt-6">
              <div className="max-w-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border-b pb-3">
                    <h4 className="text-sm font-medium">Material</h4>
                    <p className="text-sm text-muted-foreground">Premium quality materials</p>
                  </div>
                  <div className="border-b pb-3">
                    <h4 className="text-sm font-medium">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">Varies by product</p>
                  </div>
                  <div className="border-b pb-3">
                    <h4 className="text-sm font-medium">Care</h4>
                    <p className="text-sm text-muted-foreground">See product manual</p>
                  </div>
                  <div className="border-b pb-3">
                    <h4 className="text-sm font-medium">Warranty</h4>
                    <p className="text-sm text-muted-foreground">1 year limited warranty</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="pt-6">
              <div className="text-center py-8">
                <h3 className="text-lg font-medium mb-2">Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  Reviews will be available soon.
                </p>
                <Button>Be the first to review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
