import React from 'react';

// Types
export interface Category {
  name: string;
  count: number;
}

export interface PriceRange {
  range: string;
  count: number;
}

interface ProductFiltersProps {
  categories: Category[];
  priceRanges: PriceRange[];
  selectedCategories: string[];
  selectedPriceRanges: string[];
  stockFilter: 'all' | 'inStock' | 'outOfStock';
  toggleCategory: (category: string) => void;
  togglePriceRange: (range: string) => void;
  setStockFilter: (filter: 'all' | 'inStock' | 'outOfStock') => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  priceRanges,
  selectedCategories,
  selectedPriceRanges,
  stockFilter,
  toggleCategory,
  togglePriceRange,
  setStockFilter
}) => {
  return (
    <>
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
    </>
  );
};

export default ProductFilters; 