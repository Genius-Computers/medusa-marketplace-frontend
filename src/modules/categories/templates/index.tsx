import { ArrowUturnLeft } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import { Button, Container, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import CategoryBreadcrumb from "../components/category-breadcrumb"
import RefinementVerticalList from "@modules/store/components/refinement-vertical-list"
import MobileFilters from "@modules/store/components/mobile-filters"
import RefinementList from "@modules/store/components/refinement-list"

export default function CategoryTemplate({
  categories,
  currentCategory,
  sortBy,
  page,
  countryCode,
}: {
  categories: HttpTypes.StoreProductCategory[]
  currentCategory: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!currentCategory || !countryCode) notFound()

  return (
    <div className="bg-neutral-100">
      <div
        className="flex flex-col py-6 content-container gap-4"
        data-testid="category-container"
      >
        <CategoryBreadcrumb
          categories={categories}
          category={currentCategory}
        />
        <MobileFilters sortBy={sort} categories={categories} />
        <div className="flex flex-col small:flex-row small:items-start gap-3">
        <div className="hidden lg:block">
          <RefinementVerticalList categories={categories}/>
        </div>
          <div className="w-full">
          <div className="mb-2 text-2xl-semi">
            <h1 data-testid="store-page-title">{currentCategory.name}</h1>
          </div>
          <div className="hidden lg:block">
            <RefinementList sortBy={sort} />
          </div>
            {currentCategory.products?.length === 0 ? (
              <Container className="flex flex-col gap-2 justify-center text-center items-center text-sm text-neutral-500">
                <Text className="font-medium">
                  No products found for this category.
                </Text>
                <LocalizedClientLink
                  href="/store"
                  className="flex gap-2 items-center"
                >
                  <Button variant="secondary">
                    Back to all products
                    <ArrowUturnLeft className="w-4 h-4" />
                  </Button>
                </LocalizedClientLink>
              </Container>
            ) : (
              <Suspense
                fallback={
                  <SkeletonProductGrid
                    numberOfProducts={currentCategory.products?.length}
                  />
                }
              >
                <PaginatedProducts
                  sortBy={sort}
                  page={pageNumber}
                  categoryId={currentCategory.id}
                  countryCode={countryCode}
                />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}