"use client"

import { Loader2 } from "lucide-react"
import { Search } from "lucide-react"
import { Input } from "@medusajs/ui"
import { X } from "lucide-react"
import SearchResults from "./search-results"
import { useSearch } from "../hooks/use-search"

function SearchFormMobile({
  regionId,
  searchAction,
}: {
  regionId: string
  searchAction: (regionId: string, searchTerm: string) => Promise<any[]>
}) {
  const { searchTerm, products, showResults, isPending, clearSearch, handleInputChange, handleSearch } = useSearch(regionId, searchAction)

  return (
    <div className="search-container">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for products"
            className="w-full h-10 pr-8"
          />
          {searchTerm && (
            <X
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600"
              onClick={clearSearch}
            />
          )}
        </div>
        <div className="flex items-center justify-center w-10 h-10">
          {isPending ? (
            <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
          ) : (
            <Search
              className="w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={handleSearch}
            />
          )}
        </div>
      </div>
      {showResults && (
        <SearchResults products={products} searchTerm={searchTerm} isPending={isPending} />
      )}
    </div>
  )
}

export default SearchFormMobile
