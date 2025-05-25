"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Button, clx } from "@medusajs/ui"
import { Fragment } from "react"
import { SortOptions } from "../refinement-list/sort-products"
import RefinementVerticalList from "../refinement-vertical-list"
import RefinementList from "../refinement-list"
import { HttpTypes } from "@medusajs/types"
import { Filter, X } from "lucide-react"
import useToggleState from "@lib/hooks/use-toggle-state"

type MobileFiltersProps = {
  products: HttpTypes.StoreProduct[]
  sortBy?: SortOptions
  gridView: number
}

const MobileFilters = ({ products, sortBy = "created_at", gridView }: MobileFiltersProps) => {
  const { state, open, close } = useToggleState()

  return (
    <>
      <div className="lg:hidden flex items-center justify-center w-full">
        <Button 
          onClick={open} 
          variant="secondary" 
          className="flex items-center gap-x-2"
          data-testid="mobile-filter-button"
        >
          <Filter size={16} />
          <span>Filters & Sort</span>
        </Button>
      </div>

      <Transition appear show={state} as={Fragment}>
        <Dialog as="div" className="relative z-[75]" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full"
              >
                <Dialog.Panel className="w-full h-screen transform overflow-y-auto bg-white p-6 text-left flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <Dialog.Title as="h3" className="text-lg font-medium">
                      Filters & Sort
                    </Dialog.Title>
                    <button
                      onClick={close}
                      className="p-2 rounded-full hover:bg-gray-100"
                      data-testid="close-filter-button"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-base font-medium mb-3">Sort</h4>
                    <RefinementList sortBy={sortBy} gridView={gridView} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-base font-medium mb-3">Filter</h4>
                    <RefinementVerticalList products={products} />
                  </div>
                  
                  <div className="mt-6">
                    <Button onClick={close} className="w-full">
                      Apply Filters
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileFilters 