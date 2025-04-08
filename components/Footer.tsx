import React from 'react';
import Link from 'next/link';
import { Headphones } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full text-black">
      {/* Benefits Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M3 8l1 13h16l1-13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Fast & Free Shipping</h3>
              <p className="text-sm">Free delivery on $99+ purchases.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">100% Secure Checkout</h3>
              <p className="text-sm">All transactions are securely handled.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"></circle>
                <path d="M12 8v4l3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Easy 30-days Returns</h3>
              <p className="text-sm">30-day trial, then make the best choice.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <Headphones className="w-full h-full" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Premium Support</h3>
              <p className="text-sm">We have a support staff on duty.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-2xl font-bold text-white flex items-center">
                GENIUS
                <span className="ml-1">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 1a4 4 0 014 4v6h1a3 3 0 010 6h-1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2H7a3 3 0 010-6h1V5a4 4 0 014-4z"></path>
                  </svg>
                </span>
              </h2>
              <p className="text-gray-400">
                Discover premium tech products with our sleek, modern e-commerce experience. Our carefully curated collection of electronics and gadgets combines quality with style, offering you the latest innovations to enhance your digital lifestyle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Quick links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/catalog" className="hover:text-white">Catalog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Collections</h3>
              <ul className="space-y-2">
                <li><Link href="/collections/airpods" className="hover:text-white">Airpods buds</Link></li>
                <li><Link href="/collections/camera" className="hover:text-white">Camera</Link></li>
                <li><Link href="/collections/laptop" className="hover:text-white">Laptop</Link></li>
                <li><Link href="/collections/watches" className="hover:text-white">Luxury Watches</Link></li>
                <li><Link href="/collections/smart-watches" className="hover:text-white">Smart Watches</Link></li>
                <li><Link href="/collections/timeless-style" className="hover:text-white">Timeless Style</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Most Purchase</h3>
              <ul className="space-y-2">
                <li><Link href="/products/phone-64gb" className="hover:text-white">Phone 64GB Storage</Link></li>
                <li><Link href="/products/smart-watch" className="hover:text-white">Smart Watch</Link></li>
                <li><Link href="/products/speakers" className="hover:text-white">Speakers Bass Tube</Link></li>
                <li><Link href="/products/backpack" className="hover:text-white">Travel Backpack</Link></li>
                <li><Link href="/products/vr-headsets" className="hover:text-white">VR Headsets</Link></li>
                <li><Link href="/products/headphone" className="hover:text-white">Black Headphone</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Top Selling</h3>
              <ul className="space-y-2">
                <li><Link href="/products/digital-camera" className="hover:text-white">Digital Camera</Link></li>
                <li><Link href="/products/vr-headsets" className="hover:text-white">VR Headsets</Link></li>
                <li><Link href="/products/earbuds" className="hover:text-white">Black Earbuds</Link></li>
                <li><Link href="/products/lightweight-laptop" className="hover:text-white">Lightweight Laptop</Link></li>
                <li><Link href="/products/backpack" className="hover:text-white">Travel Backpack</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Sale Collection</h3>
              <ul className="space-y-2">
                <li><Link href="/sale/earbuds" className="hover:text-white">Black Earbuds</Link></li>
                <li><Link href="/sale/headphone" className="hover:text-white">Black Headphone</Link></li>
                <li><Link href="/sale/alarm-clock" className="hover:text-white">Brown Alarm Clock</Link></li>
                <li><Link href="/sale/digital-camera" className="hover:text-white">Digital Camera</Link></li>
                <li><Link href="/sale/lightweight-laptop" className="hover:text-white">Lightweight Laptop</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ&apos;s</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 border-t border-gray-800 py-6 text-gray-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p>Copyright© 2025 Genius Company</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center border border-gray-700 rounded px-2 py-1">
              <span className="mr-1">EN</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            
            <div className="inline-flex items-center border border-gray-700 rounded px-2 py-1">
              <span className="mr-1">
                <span className="inline-block w-5 h-3 bg-orange-500 relative overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-5 h-0.5 bg-white"></span>
                    <span className="w-5 h-0.5 bg-white absolute mt-1"></span>
                    <span className="w-0.5 h-3 bg-green-600 absolute left-1/2 transform -translate-x-1/2"></span>
                  </span>
                </span>
              </span>
              <span className="mr-1">SAR</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" width="38" height="24" className="w-8 h-5">
                <rect width="38" height="24" fill="#fff" rx="3" />
                <path d="M13 10h12v4H13z" fill="#191F5B" />
              </svg>
            </div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" width="38" height="24" className="w-8 h-5">
                <rect width="38" height="24" fill="#fff" rx="3" />
                <circle cx="15" cy="12" r="5" fill="#EB001B" fillOpacity=".8" />
                <circle cx="23" cy="12" r="5" fill="#F79E1B" fillOpacity=".8" />
                <path d="M19 8.5a7.5 7.5 0 000 7" fill="#FF5F00" />
              </svg>
            </div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" width="38" height="24" className="w-8 h-5">
                <rect width="38" height="24" fill="#fff" rx="3" />
                <path d="M2 9h34v6H2z" fill="#016FD0" />
              </svg>
            </div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" width="38" height="24" className="w-8 h-5">
                <rect width="38" height="24" fill="#fff" rx="3" />
                <path d="M22 6h-6a4 4 0 00-4 4v4a4 4 0 004 4h6a4 4 0 004-4v-4a4 4 0 00-4-4zm-3 9a3 3 0 110-6 3 3 0 010 6z" fill="#003087" />
              </svg>
            </div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" width="38" height="24" className="w-8 h-5">
                <rect width="38" height="24" fill="#fff" rx="3" />
                <path d="M26 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="#0CAFE4" />
                <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="#003087" />
              </svg>
            </div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" width="38" height="24" className="w-8 h-5">
                <rect width="38" height="24" fill="#fff" rx="3" />
                <path d="M7 6h24a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1z" fill="#FF6C00" fillOpacity=".8" />
                <path d="M25 10h-3.5l-2 4h-1l-2-4H13l2.5 8h2l7.5-8z" fill="#111" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 