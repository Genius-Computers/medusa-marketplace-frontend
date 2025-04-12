'use client'

import React, { useState } from 'react';
import { Filter, Grid2X2, Grid3X3, LayoutGrid, LayoutList, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product';
import { PRODUCTS } from '@/components/ProductListing';

const categories = [
  { name: "Bags", count: 4 },
  { name: "Electronics", count: 18 },
  { name: "Jacket", count: 1 },
  { name: "Mens", count: 1 },
  { name: "Wearable", count: 7 }
];

const priceRanges = [
  { range: "500-1000", count: 2 },
  { range: "1000-1200", count: 2 }
];

const Products = () => {
  const [gridView, setGridView] = useState<number>(4); // 2, 3, 4, or 5 columns
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [stockFilter, setStockFilter] = useState<'all' | 'inStock' | 'outOfStock'>('all');

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges(prev =>
      prev.includes(range)
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
  };

  return (
    <div className="bg-white text-black">
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          <Filter className="w-5 h-5" />
          Filter
        </button>

        <div className="flex items-center gap-4">
          <span className="text-gray-600">37 Products</span>
          
          <div className="flex items-center gap-2 border-l pl-4">
            <button 
              onClick={() => setGridView(2)}
              className={`p-2 rounded-lg hover:bg-gray-100 ${gridView === 2 ? 'bg-gray-100' : ''}`}
            >
              <Grid2X2 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setGridView(3)}
              className={`p-2 rounded-lg hover:bg-gray-100 ${gridView === 3 ? 'bg-gray-100' : ''}`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setGridView(4)}
              className={`p-2 rounded-lg hover:bg-gray-100 ${gridView === 4 ? 'bg-gray-100' : ''}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setGridView(5)}
              className={`p-2 rounded-lg hover:bg-gray-100 ${gridView === 5 ? 'bg-gray-100' : ''}`}
            >
              <LayoutList className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 border-l pl-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              Sort by
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className={`w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'}`}>
          {/* Availability Filter */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input 
                  type="radio" 
                  name="stock" 
                  checked={stockFilter === 'inStock'}
                  onChange={() => setStockFilter('inStock')}
                  className="rounded border-gray-300"
                />
                <span>In Stock</span>
                <span className="text-gray-500 ml-auto">(37)</span>
              </label>
              <label className="flex items-center gap-2">
                <input 
                  type="radio" 
                  name="stock" 
                  checked={stockFilter === 'outOfStock'}
                  onChange={() => setStockFilter('outOfStock')}
                  className="rounded border-gray-300"
                />
                <span>Out Of Stock</span>
                <span className="text-gray-500 ml-auto">(5)</span>
              </label>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Product type</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.name} className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={selectedCategories.includes(category.name)}
                    onChange={() => toggleCategory(category.name)}
                    className="rounded border-gray-300"
                  />
                  <span>{category.name}</span>
                  <span className="text-gray-500 ml-auto">({category.count})</span>
                </label>
              ))}
            </div>
            <button className="text-sm text-gray-600 mt-2">Show More</button>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4">More filters</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label key={range.range} className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={selectedPriceRanges.includes(range.range)}
                    onChange={() => togglePriceRange(range.range)}
                    className="rounded border-gray-300"
                  />
                  <span>{range.range}</span>
                  <span className="text-gray-500 ml-auto">({range.count})</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid grid-cols-${gridView} gap-6 flex-grow`}>
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Products;