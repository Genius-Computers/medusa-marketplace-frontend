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
  gridView: number
  setGridView: (value: number) => void
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
  gridView,
  setGridView,
}: SortProductsProps) => {
  const handleSort = (value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  const getSortLabel = (value: SortOptions) => {
    return sortOptions.find(option => option.value === value)?.label || "Sort by"
  }

  return (
    <>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setGridView(2)}
              className={`p-2 rounded-lg hover:bg-gray-100 ${
                gridView === 2 ? "bg-gray-100" : ""
              }`}
            >
              <Grid2X2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setGridView(3)}
              className={`p-2 rounded-lg hidden md:block hover:bg-gray-100 ${
                gridView === 3 ? "bg-gray-100" : ""
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setGridView(4)}
              className={`p-2 rounded-lg hidden md:block hover:bg-gray-100 ${
                gridView === 4 ? "bg-gray-100" : ""
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setGridView(1)}
              className={`p-2 rounded-lg hover:bg-gray-100 ${
                gridView === 1 ? "bg-gray-100" : ""
              }`}
            >
              <LayoutList className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 border-l pl-4">
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
