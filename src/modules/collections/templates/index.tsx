import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import RefinementVerticalList from "@modules/store/components/refinement-vertical-list"
import MobileFilters from "@modules/store/components/mobile-filters"
import { listCategories } from "@lib/data/categories"
import CollectionBreadcrumb from "../components/collection-breadcrumb"

export default async function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"
  const categories = await listCategories()

  return (
    <div className="flex flex-col py-6 content-container">
      {/* Mobile Filters Button */}
      <CollectionBreadcrumb collection={collection} />
      <MobileFilters  sortBy={sort} categories={categories} />
      
      <div className="flex flex-col lg:flex-row mt-4 lg:mt-0">
        {/* Desktop Filters - Only visible on large screens */}
        <div className="hidden lg:block">
          <RefinementVerticalList categories={categories} />
        </div>
        
        <div className="w-full">
          <div className="mb-2 text-2xl-semi">
            <h1 data-testid="store-page-title">{collection.title}</h1>
          </div>
          {/* Desktop Sort Controls - Only visible on large screens */}
          <div className="hidden lg:block">
            <RefinementList sortBy={sort} />
          </div>
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={collection.products?.length}
            />
          }
        >
          <PaginatedProducts
            page={pageNumber}
            countryCode={countryCode}
            collectionId={collection.id}
            sortBy={sort}
          />
        </Suspense>
      </div>
    </div>
    </div>
  )
}
