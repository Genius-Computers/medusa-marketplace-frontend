
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary">
      <div className="container-content py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              GENIUS
            </Link>
            <p className="text-muted-foreground text-sm mt-2 max-w-xs">
              Premium electronics shopping experience with carefully curated products designed to elevate your lifestyle.
            </p>
            <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium mb-4">Shop</h3>
            <ul className="space-y-3">
              {['All Products', 'Featured', 'Latest', 'Bestsellers', 'Discounts'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/shop/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-muted-foreground text-sm hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-muted-foreground text-sm hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for product updates and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="h-9 bg-background/80"
              />
              <Button size="sm" className="h-9">
                Subscribe
              </Button>
            </div>
            
            <div className="mt-6 space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">Riyadh Business District, Kingdom of Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+966 (5) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">admin@gencss.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Genius. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                Terms of Service
              </Button>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                Shipping Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
