'use client'
import React from 'react';
import Categories from '@/components/Categories';
import ProductListing from '@/components/ProductListing';
import Featured from '@/components/Featured';
import Hero from '@/components/hero';
import ProductLaunchTimer from '@/components/product-launch-timer';
import ScrollCaseProduct from '@/components/scroll-case-product';
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

      <ProductLaunchTimer />
      <ScrollCaseProduct />
      {/* Featured Section */}
      <Featured />
    </div>
  );
}

export default App;