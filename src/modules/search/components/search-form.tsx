"use client"

import { Loader2 } from "lucide-react"
import { Search } from "lucide-react"
import { Input, useToggleState } from "@medusajs/ui"
import { X } from "lucide-react"
import SearchResults from "./search-results"
import { useSearch } from "../hooks/use-search"
import SearchModal from "./search-modal"

function SearchForm({
  regionId,
  searchAction,
}: {
  regionId: string
  searchAction: (regionId: string, searchTerm: string) => Promise<any[]>
}) {
  const {
    searchTerm,
    products,
    showResults,
    isPending,
    clearSearch,
    handleInputChange,
    handleSearch,
  } = useSearch(regionId, searchAction)
  const { state, open, close } = useToggleState()
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
            className="min-w-96 h-10 pr-8 md:block hidden"
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
            <>
              <Search
                className="w-6 h-6 cursor-pointer lg:block hidden text-gray-600 hover:text-gray-800"
                onClick={handleSearch}
              />
              <Search
                className="w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-800 lg:hidden"
                onClick={open}
              />
            </>
          )}
        </div>
      </div>

      {/* Search Results Dropdown */}
      {showResults && (
        <div className="sm:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
          <SearchResults
            products={products}
            searchTerm={searchTerm}
            isPending={isPending}
          />
        </div>
      )}
      <SearchModal state={state} close={close} regionId={regionId} searchAction={searchAction} />
    </div>
  )
}

export default SearchForm

