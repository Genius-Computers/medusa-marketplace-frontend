import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { Heart, ShoppingCart } from "lucide-react"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper">
        <div className="relative">
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 ">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
            />
          </div>
          {/* Wishlist button */}
          <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        {product.brand && (
          <p className="text-xs text-gray-400 mb-1">{product.brand?.name}</p>
        )}
        <Text className="text-ui-fg-subtle truncate" data-testid="product-title" title={product.title}>
          {product.title}
        </Text>
        {cheapestPrice && (
          <div className="flex txt-compact-medium my-4 justify-between">
            <div className="flex items-center gap-x-2">
              <PreviewPrice price={cheapestPrice} />
            </div>
          </div>
        )}
        {/* <div className="flex gap-2 mb-3">
          {product.options
            ?.find((option) => option.title === "Color")
            ?.values?.map((color, index) => (
              <button
                key={index}
                className={`w-6 h-6 rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-gray-400 transition`}
                title={color.value}
              />
            ))}
        </div> */}

        <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
          <ShoppingCart className="w-5 h-5" />
          Add to cart
        </button>
      </div>
    </LocalizedClientLink>
  )
}
