
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000" 
          alt="Modern electronics workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      </div>
      
      {/* Content */}
      <div className="container-content relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-slide-in">
          <div className="mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium tracking-wider">
              NEW COLLECTION
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            <span className="block">Cutting-Edge Tech.</span>
            <span className="block">Exceptional Experience.</span>
          </h1>
          
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Discover our curated collection of premium electronics designed to enhance your digital lifestyle with sleek functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 rounded-full px-8"
              asChild
            >
              <Link to="/shop">
                Shop Collection
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 rounded-full px-8"
              asChild
            >
              <Link to="/categories" className="flex items-center">
                Explore Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-[1px] h-8 bg-white/40"></div>
        <div className="w-2 h-2 bg-white rounded-full mt-1"></div>
      </div>
    </section>
  );
};

export default Hero;
