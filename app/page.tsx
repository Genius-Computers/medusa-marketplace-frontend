'use client'
import React from 'react';
import Categories from '@/components/Categories';
import ProductListing from '@/components/ProductListing';
import Featured from '@/components/Featured';
import Hero from '@/components/hero';

function App() {
  return (
    <div className="bg-gray-100">
      {/* Top bar */}

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Product Listing Section */}
      <ProductListing />

      {/* Featured Section */}
      <Featured />
    </div>
  );
}

export default App;