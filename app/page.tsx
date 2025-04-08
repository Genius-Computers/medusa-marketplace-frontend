'use client'
import React from 'react';
import Categories from '@/components/Categories';
import ProductListing from '@/components/ProductListing';
import Featured from '@/components/Featured';
import Nav from '@/components/nav';
import Hero from '@/components/hero';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top bar */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Product Listing Section */}
      <ProductListing />

      {/* Featured Section */}
      <Featured />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;