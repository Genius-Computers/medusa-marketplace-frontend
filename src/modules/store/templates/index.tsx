import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"
import RefinementVerticalList from "../components/refinement-vertical-list"
import MobileFilters from "../components/mobile-filters"
import { listCategories } from "@lib/data/categories"

const StoreTemplate = async ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  const categories = await listCategories()

  return (
    <div
      className="flex flex-col py-6 content-container"
      data-testid="category-container"
    >
      {/* Mobile Filters Button */}
      <MobileFilters sortBy={sort} categories={categories} />
      
      <div className="flex flex-col lg:flex-row mt-4 lg:mt-0">
        {/* Desktop Filters - Only visible on large screens */}
        <div className="hidden lg:block">
          <RefinementVerticalList categories={categories}/>
        </div>
        
        <div className="w-full">
          <div className="mb-2 text-2xl-semi">
            <h1 data-testid="store-page-title">All products</h1>
          </div>
          {/* Desktop Sort Controls - Only visible on large screens */}
          <div className="hidden lg:block">
            <RefinementList sortBy={sort} />
          </div>
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              page={pageNumber}
              countryCode={countryCode}
              sortBy={sort}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
