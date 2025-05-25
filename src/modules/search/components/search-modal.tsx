import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import SearchFormMobile from "./search-form-mobile"
import { X } from "lucide-react"

function SearchModal({
  state,
  close,
  regionId,
  searchAction,
}: {
  state: boolean
  close: () => void
  regionId: string
  searchAction: (regionId: string, searchTerm: string) => Promise<any[]>
}) {
  return (
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
                    Search products
                  </Dialog.Title>
                  <button
                    onClick={close}
                    className="p-2 rounded-full hover:bg-gray-100"
                    data-testid="close-filter-button"
                  >
                    <X size={20} />
                  </button>
                </div>

                <SearchFormMobile
                  regionId={regionId}
                  searchAction={searchAction}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SearchModal
