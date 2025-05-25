import { StorePrice } from "@medusajs/types"

export type FeaturedProduct = {
  id: string
  title: string
  handle: string
  thumbnail?: string
}

export type VariantPrice = {
  calculated_price_number: number
  calculated_price: string
  original_price_number: number
  original_price: string
  currency_code: string
  price_type: string
  percentage_diff: string
}

export type StoreFreeShippingPrice = StorePrice & {
  target_reached: boolean
  target_remaining: number
  remaining_percentage: number
}

// Search Filters
export enum FilterType {
  CATEGORY = "category",
  BRAND = "brand",
  PRICE = "price",
}

export type Filters = {
  [FilterType.CATEGORY]: {
    name: string
    count: number
  }[]
  [FilterType.BRAND]: {
    name: string
    count: number
  }[]
  [FilterType.PRICE]: {
    min: number
    max: number
  }
}

export type SelectedFilters = {
  [FilterType.CATEGORY]: string[]
  [FilterType.BRAND]: string[]
  [FilterType.PRICE]: {
    min: number
    max: number
  }
}