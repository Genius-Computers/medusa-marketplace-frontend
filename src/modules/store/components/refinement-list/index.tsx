"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  gridView: number
  search?: boolean
  "data-testid"?: string
}

const RefinementList = ({
  sortBy,
  "data-testid": dataTestId,
  gridView,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
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
    <SortProducts
      sortBy={sortBy}
      setQueryParams={setQueryParams}
      data-testid={dataTestId}
      gridView={gridView}
      setGridView={(value: number) =>
        setQueryParams("gridView", value.toString())
      }
    />
  )
}

export default RefinementList
