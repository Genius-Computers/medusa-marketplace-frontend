"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import {
  ArrowDownNarrowWide,
  Grid2X2,
  Grid3X3,
  LayoutGrid,
  LayoutList,
  Check,
} from "lucide-react"
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import { Fragment } from "react"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions = [
  {
    value: "created_at",
    label: "Latest Arrivals",
  },
  {
    value: "price_asc",
    label: "Price: Low to High",
  },
  {
    value: "price_desc",
    label: "Price: High to Low",
  },
]

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const handleSort = (value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  const getSortLabel = (value: SortOptions) => {
    return sortOptions.find(option => option.value === value)?.label || "Sort by"
  }

  return (
    <>
      <div className="flex items-center justify-end mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 pl-4">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    <span className="hidden sm:inline">{getSortLabel(sortBy)}</span>
                    <ArrowDownNarrowWide className="w-4 h-4" />
                  </PopoverButton>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleSort(option.value as SortOptions)}
                            className="flex w-full items-center justify-between px-4 py-2 text-left text-sm hover:bg-gray-50"
                          >
                            {option.label}
                            {sortBy === option.value && (
                              <Check className="h-4 w-4" />
                            )}
                          </button>
                        ))}
                      </div>
                    </PopoverPanel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </>
  )
}

export default SortProducts
