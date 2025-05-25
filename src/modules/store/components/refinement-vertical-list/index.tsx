"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import ProductFilters from "./product-filters"
import { HttpTypes } from "@medusajs/types"
import { Filters, FilterType, SelectedFilters } from "types/global"
import CategoryList from "./category-list"

type RefinementListProps = {
  search?: boolean
  products: HttpTypes.StoreProduct[]
  "data-testid"?: string
  categories?: HttpTypes.StoreProductCategory[]
  currentCategory?: HttpTypes.StoreProductCategory
}

const RefinementList = ({
  "data-testid": dataTestId,
  products,
  categories,
  currentCategory,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      console.log('params', params.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.replace(`${pathname}?${query}`)
  }

  return (
    <div className="flex flex-col gap-4 p-6 small:min-w-[250px]">
      {categories && (
        <CategoryList
          categories={categories}
          currentCategory={currentCategory}
        />
      )}
      {/* <ProductFilters

        setQueryParams={setQueryParams}
      /> */}
    </div>
  )
}

export default RefinementList
