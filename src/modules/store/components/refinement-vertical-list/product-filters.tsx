import React, { useState, useEffect } from "react"
import { Filters, FilterType, SelectedFilters } from "types/global"

const ProductFilters = ({
  filters,
  selectedFilters,
  setQueryParams,
}: {
  filters: Filters
  selectedFilters: SelectedFilters,
  setQueryParams: (name: string, value: string) => void
}) => {
  // State for price range slider
  const [priceRange, setPriceRange] = useState({
    min: selectedFilters[FilterType.PRICE].min || filters[FilterType.PRICE].min,
    max: selectedFilters[FilterType.PRICE].max || filters[FilterType.PRICE].max
  });

  // State to control showing all categories or just 10
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  // State to control showing all brands or just 10
  const [showAllBrands, setShowAllBrands] = useState(false);

  // Update price range when filters or selected filters change
  useEffect(() => {
    setPriceRange({
      min: selectedFilters[FilterType.PRICE].min || filters[FilterType.PRICE].min,
      max: selectedFilters[FilterType.PRICE].max || filters[FilterType.PRICE].max
    });
  }, [filters, selectedFilters]);

  // Handle slider change and apply filters after user stops sliding
  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    console.log(value)
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  // Apply price filter when user stops sliding
  const applyPriceFilter = () => {
    setQueryParams(FilterType.PRICE, `${priceRange.min},${priceRange.max}`);
  };
  
  // Calculate percentage for slider styling
  const minPercentage = ((priceRange.min - filters[FilterType.PRICE].min) / 
    (filters[FilterType.PRICE].max - filters[FilterType.PRICE].min)) * 100;
  
  const maxPercentage = ((priceRange.max - filters[FilterType.PRICE].min) / 
    (filters[FilterType.PRICE].max - filters[FilterType.PRICE].min)) * 100;

  // Get categories to display (all or just 10)
  const displayedCategories = showAllCategories 
    ? filters[FilterType.CATEGORY] 
    : filters[FilterType.CATEGORY].slice(0, 10);
    
  // Get brands to display (all or just 10)
  const displayedBrands = showAllBrands
    ? filters[FilterType.BRAND]
    : filters[FilterType.BRAND].slice(0, 10);

  // Toggle between showing all or limited categories
  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };
  
  // Toggle between showing all or limited brands
  const toggleShowAllBrands = () => {
    setShowAllBrands(!showAllBrands);
  };

  return (
    <>
      {/* Category Filter */}
      <div>
        <h3 className="font-semibold">Categories</h3>
        <div className="space-y-2">
          {displayedCategories.map((category) => (
            <label key={category.name} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedFilters[FilterType.CATEGORY].includes(category.name)}
                onChange={() => setQueryParams(FilterType.CATEGORY, category.name)}
                className="rounded border-gray-300"
              />
              <span>{category.name}</span>
              <span className="text-gray-500 ml-auto">({category.count})</span>
            </label>
          ))}
        </div>
        {filters[FilterType.CATEGORY].length > 10 && (
          <button 
            onClick={toggleShowAllCategories} 
            className="text-sm text-blue-500 hover:text-blue-700 transition-colors mt-2 focus:outline-none"
          >
            {showAllCategories ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold">Brands</h3>
        <div className="space-y-2">
          {displayedBrands.map((brand) => (
            <label key={brand.name} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedFilters[FilterType.BRAND].includes(brand.name)}
                onChange={() => setQueryParams(FilterType.BRAND, brand.name)}
                className="rounded border-gray-300"
              />
              <span>{brand.name}</span>
              <span className="text-gray-500 ml-auto">({brand.count})</span>
            </label>
          ))}
        </div>
        {filters[FilterType.BRAND].length > 10 && (
          <button 
            onClick={toggleShowAllBrands} 
            className="text-sm text-blue-500 hover:text-blue-700 transition-colors mt-2 focus:outline-none"
          >
            {showAllBrands ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      {/* Price Filter - Cool Slider */}
      <div>
        <h3 className="font-semibold">Price Range</h3>
        <div className="">
          {/* Price display */}
          <div className="flex justify-between mb-4">
            <span className="font-medium text-sm">{priceRange.min.toFixed(2)}</span>
            <span className="font-medium text-sm">{priceRange.max.toFixed(2)}</span>
          </div>
          
          {/* Custom slider track */}
          <div className="relative h-2 bg-gray-200 rounded-full mb-6">
            {/* Active track */}
            <div 
              className="absolute h-full bg-blue-500 rounded-full" 
              style={{ 
                left: `${minPercentage}%`, 
                width: `${maxPercentage - minPercentage}%` 
              }}
            ></div>
            
            {/* Min handle */}
            <div 
              className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full -mt-1 -ml-2 cursor-pointer shadow-md transition-transform hover:scale-110"
              style={{ left: `${minPercentage}%` }}
            ></div>
            
            {/* Max handle */}
            <div 
              className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full -mt-1 -ml-2 cursor-pointer shadow-md transition-transform hover:scale-110"
              style={{ left: `${maxPercentage}%` }}
            ></div>
          </div>
          
          {/* Actual range inputs (invisible but functional) */}
          <div className="relative">
            <input
              type="range"
              min={filters[FilterType.PRICE].min}
              max={filters[FilterType.PRICE].max}
              value={priceRange.min}
              onChange={(e) => handlePriceChange('min', Number(e.target.value))}
              onMouseUp={applyPriceFilter}
              onTouchEnd={applyPriceFilter}
              className="absolute w-full h-2 opacity-0 cursor-pointer"
            />
            <input
              type="range"
              min={filters[FilterType.PRICE].min}
              max={filters[FilterType.PRICE].max}
              value={priceRange.max}
              onChange={(e) => handlePriceChange('max', Number(e.target.value))}
              onMouseUp={applyPriceFilter}
              onTouchEnd={applyPriceFilter}
              className="absolute w-full h-2 opacity-0 cursor-pointer"
            />
          </div>
          
          {/* Reset button */}
          <button 
            onClick={() => {
              setPriceRange({
                min: filters[FilterType.PRICE].min,
                max: filters[FilterType.PRICE].max
              });
              setQueryParams(FilterType.PRICE, `${filters[FilterType.PRICE].min},${filters[FilterType.PRICE].max}`);
            }}
            className="mt-4 text-sm text-blue-500 hover:text-blue-700 transition-colors"
          >
            Reset Price
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductFilters
