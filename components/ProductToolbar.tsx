import React from 'react';
import { Filter, Grid2X2, Grid3X3, LayoutGrid, LayoutList, ArrowDownNarrowWide } from 'lucide-react';

interface ProductToolbarProps {
  onFilterClick: () => void;
  gridView: number;
  setGridView: (view: number) => void;
}

const ProductToolbar: React.FC<ProductToolbarProps> = ({
  onFilterClick,
  gridView,
  setGridView
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <button
        onClick={onFilterClick}
        className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
      >
        <Filter className="w-5 h-5" />
        <span className="hidden sm:inline">Filter</span>
      </button>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 whitespace-nowrap">37 Products</span>
        
        <div className="flex items-center gap-2 border-l pl-4">
          <button 
            onClick={() => setGridView(2)}
            className={`p-2 rounded-lg hover:bg-gray-100 ${gridView === 2 ? 'bg-gray-100' : ''}`}
          >
            <Grid2X2 className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setGridView(3)}
            className={`p-2 rounded-lg hidden md:block hover:bg-gray-100 ${gridView === 3 ? 'bg-gray-100' : ''}`}
          >
            <Grid3X3 className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setGridView(4)}
            className={`p-2 rounded-lg hidden md:block hover:bg-gray-100 ${gridView === 4 ? 'bg-gray-100' : ''}`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setGridView(1)}
            className={`p-2 rounded-lg hover:bg-gray-100 ${gridView === 1 ? 'bg-gray-100' : ''}`}
          >
            <LayoutList className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 border-l pl-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <span className="hidden sm:inline">Sort by</span>
            <ArrowDownNarrowWide className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductToolbar; 