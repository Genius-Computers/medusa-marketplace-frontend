import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"

const PRODUCT_LIMIT = 12

export default async function PaginatedProducts({
  page,
  countryCode,
  gridView,
  products,
  count,
}: {
  page: number
  countryCode: string
  gridView: number
  products: HttpTypes.StoreProduct[]
  count: number
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <>
      <ul
        className={`grid grid-cols-${gridView} gap-6 flex-grow`}
        data-testid="products-list"
      >
        {products.map((p) => {
          return (
            <li key={p.id}>
              <ProductPreview product={p} region={region} />
            </li>
          )
        })}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
