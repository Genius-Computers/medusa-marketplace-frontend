import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import RefinementVerticalList from "@modules/store/components/refinement-vertical-list"
import MobileFilters from "@modules/store/components/mobile-filters"
import { listProductsWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
}

export default async function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
  gridView,
  categoryId,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
  gridView?: number
  categoryId?: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"
  const gridViewNumber = gridView || 4

  const queryParams: PaginatedProductsParams = {
    limit: 12,
  }

  if (collection.id) {
    queryParams["collection_id"] = [collection.id]
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }

  if (sortBy === "created_at") {
    queryParams["order"] = "created_at"
  }

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  let {
    response: { products, count },
  } = await listProductsWithSort({
    page: pageNumber,
    queryParams,
    sortBy,
    countryCode,
  })

  return (
    <div className="flex flex-col py-6 content-container">
      {/* Mobile Filters Button */}
      <MobileFilters products={products} sortBy={sort} gridView={gridViewNumber} />
      
      <div className="flex flex-col lg:flex-row mt-4 lg:mt-0">
        {/* Desktop Filters - Only visible on large screens */}
        <div className="hidden lg:block">
          <RefinementVerticalList products={products} />
        </div>
        
        <div className="w-full">
          <div className="mb-2 text-2xl-semi">
            <h1 data-testid="store-page-title">{collection.title}</h1>
          </div>
          {/* Desktop Sort Controls - Only visible on large screens */}
          <div className="hidden lg:block">
            <RefinementList sortBy={sort} gridView={gridViewNumber} />
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
            gridView={gridViewNumber}
            products={products}
            count={count}
          />
        </Suspense>
      </div>
    </div>
    </div>
  )
}
