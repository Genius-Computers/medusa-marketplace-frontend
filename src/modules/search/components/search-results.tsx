import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const SearchResults = ({
  products,
  searchTerm,
  isPending,
}: {
  products: HttpTypes.StoreProduct[]
  searchTerm: string
  isPending: boolean
}) => {
  return (
    
      products.length > 0 ? (
        <div className="p-2">
          {products.map((product) => (
            <LocalizedClientLink
              key={product.id}
              href={`/products/${product.handle}`}
              className="group"
            >
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-150">
                {/* Product Thumbnail */}
                <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  {product.thumbnail && (
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 text-sm line-clamp-1">
                    {product.title}
                  </div>

                  {/* Brand/Collection */}
                  {((product as any).brand?.name ||
                    product.collection?.title) && (
                    <div className="text-xs text-blue-600 font-medium mt-0.5">
                      {(product as any).brand?.name ||
                        product.collection?.title}
                    </div>
                  )}
                </div>

                {/* Arrow icon */}
                <div className="flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      ) : searchTerm && !isPending ? (
        <div className="px-6 py-8 text-center">
          <div className="text-gray-400 mb-2">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="text-gray-500 font-medium">No products found</div>
          <div className="text-gray-400 text-sm mt-1">
            Try searching for something else
          </div>
        </div>
      ) : null
  )
}

export default SearchResults
