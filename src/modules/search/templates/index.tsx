"use server"

import { getRegion } from "@lib/data/regions"
import SearchForm from "../components/search-form"
import { searchProducts } from "@lib/data/products"

async function findProducts(regionId: string, searchTerm: string) {
  "use server"

  if (!searchTerm.trim()) {
    return []
  }

  try {
    const {
      response: { products: pricedProducts },
    } = await searchProducts({
      regionId,
      queryParams: {
        q: searchTerm,
        limit: 10,
      },
    })

    return pricedProducts || []
  } catch (error) {
    console.error("Search failed:", error)
    return []
  }
}

export default async function SearchProduct(props: {
  params: { countryCode: string }
  searchParams?: { q?: string }
}) {
  const params = await props.params
  const region = await getRegion(params.countryCode)

  if (!region) {
    return null
  }

  return (
    <div className="relative">
      <SearchForm regionId={region.id} searchAction={findProducts} />
    </div>
  )
}
