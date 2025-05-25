"use client"
import { HttpTypes } from "@medusajs/types"
import CategoryList from "./category-list"

type RefinementListProps = {
  "data-testid"?: string
  categories?: HttpTypes.StoreProductCategory[]
  currentCategory?: HttpTypes.StoreProductCategory
}

const RefinementList = ({
  "data-testid": dataTestId,
  categories,
  currentCategory,
}: RefinementListProps) => {

  return (
    <div className="flex flex-col gap-4 p-6 pl-0 small:min-w-[250px]">
      {categories && (
        <CategoryList
          categories={categories}
          currentCategory={currentCategory}
        />
      )}
    </div>
  )
}

export default RefinementList
