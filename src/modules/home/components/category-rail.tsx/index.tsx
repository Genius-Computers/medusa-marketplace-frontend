import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const categories = [
  {
    name: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/categories/smart-phones",
  },
  {
    name: "Medical Equipment",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/categories/biomedical-equipment",
  },
  {
    name: "Network",
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/categories/network-infrastructure",
  },
  {
    name: "Security",
    image:
      "https://images.unsplash.com/photo-1730967693281-c114d9930860?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/categories/security-&-surveillance-equipment",
  },
  {
    name: "Accessories",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/categories/accessories",
  },
]

const CategoryRail = () => {
  return (
    <div className="bg-pink-50 bg-opacity-50 py-8">
      <Text className="text-2xl font-bold text-center pb-12">
        Shop Category
      </Text>
      <div className="md:container md:px-32 md:mx-auto">
        <div 
          className="flex items-center justify-between gap-4 px-2 text-black overflow-x-auto shrink-0 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* Internet Explorer 10+ */
          }}
        >
          {categories.map((category, index) => (
            <LocalizedClientLink href={category.link} key={index}>
              <div className="group cursor-pointer">
                <div
                  className="relative w-24 h-24 rounded-full overflow-hidden bg-white shadow-md mb-3 
                              transition-transform group-hover:scale-105"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-center text-sm font-medium">
                  {category.name}
                </p>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryRail
