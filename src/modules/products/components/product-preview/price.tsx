import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }
  const discount = price.original_price_number - price.calculated_price_number
  const discountPercentage = (discount / price.original_price_number) * 100
  return (
    <>
      {price.price_type === "sale" && (
        <Text
          className="line-through text-ui-fg-muted"
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-ui-fg-muted", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
        {discountPercentage > 0 && (
          <span className="text-green-600 text-sm">
            ({discountPercentage.toFixed(0)}% off)
          </span>
        )}
      </Text>
    </>
  )
}
