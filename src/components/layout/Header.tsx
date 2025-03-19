
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import MiniCart from '@/components/shop/MiniCart';
import { useIsMobile } from '@/hooks/use-mobile';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
];

const Header: React.FC = () => {
  const { state, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Handle scroll state to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container-content py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-xl font-semibold tracking-tight"
            >
              GENIUS
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className={cn(
            'hidden md:flex items-center space-x-8',
            searchFocused ? 'flex-grow mx-8' : ''
          )}>
            {!searchFocused && navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === item.href 
                    ? 'text-primary font-semibold' 
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <div className={cn(
              'relative transition-all duration-300 ease-in-out',
              searchFocused ? 'w-full' : 'w-40'
            )}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-secondary/70 pl-10 py-2 pr-3 rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <button className="md:hidden text-foreground">
              <Search className="h-5 w-5" />
            </button>
            
            {/* Cart Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => toggleCart(true)}
              className="relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary rounded-full animate-fade-in">
                  {totalItems}
                </span>
              )}
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="space-y-4 pt-2 pb-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md',
                    location.pathname === item.href 
                      ? 'text-primary bg-secondary/70' 
                      : 'text-foreground hover:bg-secondary/50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Mini Cart */}
      <MiniCart />
    </header>
  );
};

export default Header;
