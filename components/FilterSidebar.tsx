import React from 'react';
import ProductFilters, { Category, PriceRange } from './ProductFilters';

interface FilterSidebarProps {
  categories: Category[];
  priceRanges: PriceRange[];
  selectedCategories: string[];
  selectedPriceRanges: string[];
  stockFilter: 'all' | 'inStock' | 'outOfStock';
  toggleCategory: (category: string) => void;
  togglePriceRange: (range: string) => void;
  setStockFilter: (filter: 'all' | 'inStock' | 'outOfStock') => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = (props) => {
  return (
    <div className="hidden md:block w-64 flex-shrink-0">
      <ProductFilters {...props} />
    </div>
  );
};

export default FilterSidebar; 