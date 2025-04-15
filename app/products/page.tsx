"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product";
import { PRODUCTS } from "@/components/ProductListing";
import useMobileDetect from "@/hooks/use-mobile-detect";
import ProductToolbar from "@/components/ProductToolbar";
import FilterSidebar from "@/components/FilterSidebar";
import FilterDrawer from "@/components/FilterDrawer";
import { Category, PriceRange } from "@/components/ProductFilters";
import Link from "next/link";

const categories: Category[] = [
  { name: "Bags", count: 4 },
  { name: "Electronics", count: 18 },
  { name: "Jacket", count: 1 },
  { name: "Mens", count: 1 },
  { name: "Wearable", count: 7 },
];

const priceRanges: PriceRange[] = [
  { range: "500-1000", count: 2 },
  { range: "1000-1200", count: 2 },
];

const Products = () => {
  const isMobile = useMobileDetect();
  const [gridView, setGridView] = useState<number>(isMobile ? 2 : 4); // 2, 3, 4, or 5 columns
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [stockFilter, setStockFilter] = useState<"all" | "inStock" | "outOfStock">("all");

  useEffect(() => {
    setGridView(isMobile ? 2 : 4);
  }, [isMobile]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges((prev) => (prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]));
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setStockFilter("all");
  };

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto p-4">
        <ProductToolbar
          onFilterClick={() => setShowFilters(!showFilters)}
          gridView={gridView}
          setGridView={setGridView}
        />

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          {showFilters && (
            <FilterSidebar
              categories={categories}
              priceRanges={priceRanges}
              selectedCategories={selectedCategories}
              selectedPriceRanges={selectedPriceRanges}
              stockFilter={stockFilter}
              toggleCategory={toggleCategory}
              togglePriceRange={togglePriceRange}
              setStockFilter={setStockFilter}
            />
          )}

          {/* Mobile Filter Drawer */}
          <FilterDrawer
            isOpen={showFilters}
            onClose={() => setShowFilters(false)}
            categories={categories}
            priceRanges={priceRanges}
            selectedCategories={selectedCategories}
            selectedPriceRanges={selectedPriceRanges}
            stockFilter={stockFilter}
            toggleCategory={toggleCategory}
            togglePriceRange={togglePriceRange}
            setStockFilter={setStockFilter}
            clearFilters={clearFilters}
          />

          {/* Products Grid */}
          <div className={`grid grid-cols-${gridView} gap-6 flex-grow`}>
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <Link href={`/products/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
