import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Catalog', path: '/products' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  const collections = [
    { name: 'Airpods buds', path: '/collections/airpods' },
    { name: 'Camera', path: '/collections/camera' },
    { name: 'Laptop', path: '/collections/laptop' },
    { name: 'Luxury Watches', path: '/collections/watches' },
    { name: 'Smart Watches', path: '/collections/smart-watches' },
    { name: 'Timeless Style', path: '/collections/style' }
  ];

  const mostPurchase = [
    { name: 'Phone 64GB Storage', path: '/products/phone' },
    { name: 'Smart Watch', path: '/products/smart-watch' },
    { name: 'Speakers Bass Tube', path: '/products/speakers' },
    { name: 'Travel Backpack', path: '/products/backpack' },
    { name: 'VR Headsets', path: '/products/vr' },
    { name: 'Black Headphone', path: '/products/headphone' }
  ];

  const topSelling = [
    { name: 'Digital Camera', path: '/products/camera' },
    { name: 'VR Headsets', path: '/products/vr' },
    { name: 'Black Earbuds', path: '/products/earbuds' },
    { name: 'Lightweight Laptop', path: '/products/laptop' },
    { name: 'Travel Backpack', path: '/products/backpack' }
  ];

  const saleCollection = [
    { name: 'Black Earbuds', path: '/sale/earbuds' },
    { name: 'Black Headphone', path: '/sale/headphone' },
    { name: 'Brown Alarm Clock', path: '/sale/clock' },
    { name: 'Digital Camera', path: '/sale/camera' },
    { name: 'Lightweight Laptop', path: '/sale/laptop' }
  ];

  const support = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Refund Policy', path: '/refund' },
    { name: 'Terms of Service', path: '/terms' },
    { name: "FAQ's", path: '/faqs' }
  ];

  const paymentMethods = [
    { name: 'Visa', image: 'https://cdn-icons-png.flaticon.com/64/349/349221.png' },
    { name: 'Mastercard', image: 'https://cdn-icons-png.flaticon.com/64/349/349228.png' },
    { name: 'American Express', image: 'https://cdn-icons-png.flaticon.com/64/349/349230.png' },
    { name: 'PayPal', image: 'https://cdn-icons-png.flaticon.com/64/349/349238.png' },
    { name: 'Diners Club', image: 'https://cdn-icons-png.flaticon.com/64/349/349241.png' },
    { name: 'Discover', image: 'https://cdn-icons-png.flaticon.com/64/349/349242.png' }
  ];

  return (
    <footer className="bg-[#1C1C1C] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Store description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
          <span className="font-['Biduan']">GENCSS</span>
          </h2>
          <p className="text-gray-400 max-w-3xl">
          Discover premium tech products with our sleek, modern e-commerce experience. Our carefully curated collection of electronics and gadgets combines quality with style, offering you the latest innovations to enhance your digital lifestyle.
          </p>
        </div>

        {/* Footer links grid */}
        <div className="grid grid-cols-6 gap-8 mb-12">
          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-semibold mb-4">Collections</h3>
            <ul className="space-y-2">
              {collections.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Most Purchase */}
          <div>
            <h3 className="font-semibold mb-4">Most Purchase</h3>
            <ul className="space-y-2">
              {mostPurchase.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Selling */}
          <div>
            <h3 className="font-semibold mb-4">Top Selling</h3>
            <ul className="space-y-2">
              {topSelling.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sale Collection */}
          <div>
            <h3 className="font-semibold mb-4">Sale Collection</h3>
            <ul className="space-y-2">
              {saleCollection.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-800">
          <p className="text-gray-400">
          Copyright© {currentYear} GENCSS
          </p>

          <div className="flex items-center gap-8">
            {/* Language selector */}
            <div className="flex items-center gap-2 bg-[#252525] px-3 py-2 rounded cursor-pointer">
              <span>EN</span>
              <span className="text-xs">▼</span>
            </div>

            {/* Currency selector */}
            <div className="flex items-center gap-2 bg-[#252525] px-3 py-2 rounded cursor-pointer">
              <span>��</span>
              <span>SAR</span>
              <span className="text-xs">▼</span>
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-2">
              {paymentMethods.map((method) => (
                <img 
                  key={method.name}
                  src={method.image}
                  alt={method.name}
                  className="h-8 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;