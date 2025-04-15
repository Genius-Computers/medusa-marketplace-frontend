import React from 'react';
import { X } from 'lucide-react';
import ProductFilters, { Category, PriceRange } from './ProductFilters';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  priceRanges: PriceRange[];
  selectedCategories: string[];
  selectedPriceRanges: string[];
  stockFilter: 'all' | 'inStock' | 'outOfStock';
  toggleCategory: (category: string) => void;
  togglePriceRange: (range: string) => void;
  setStockFilter: (filter: 'all' | 'inStock' | 'outOfStock') => void;
  clearFilters: () => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  categories,
  priceRanges,
  selectedCategories,
  selectedPriceRanges,
  stockFilter,
  toggleCategory,
  togglePriceRange,
  setStockFilter,
  clearFilters
}) => {
  return (
    <>
      {/* Mobile Filter Drawer */}
      <div 
        className={`fixed inset-y-0 left-0 w-[300px] bg-white text-black shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter content */}
          <div className="flex-1 overflow-y-auto p-4">
            <ProductFilters
              categories={categories}
              priceRanges={priceRanges}
              selectedCategories={selectedCategories}
              selectedPriceRanges={selectedPriceRanges}
              stockFilter={stockFilter}
              toggleCategory={toggleCategory}
              togglePriceRange={togglePriceRange}
              setStockFilter={setStockFilter}
            />
          </div>

          {/* Footer */}
          <div className="p-4 bg-white border-t">
            <button 
              onClick={onClose}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              APPLY FILTERS
            </button>
            
            <button 
              onClick={clearFilters}
              className="w-full text-center mt-2 text-gray-600 hover:text-gray-800"
            >
              CLEAR ALL
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default FilterDrawer; 