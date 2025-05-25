import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Catalog", path: "/products" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
]

const support = [
  { name: "Contact Us", path: "/contact" },
  { name: "Refund Policy", path: "/refund" },
  { name: "Terms of Service", path: "/terms" },
  { name: "FAQ's", path: "/faqs" },
]

export default async function Footer() {
  const collections = await listCollections({
    fields: "id, handle, title, products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="bg-[#1C1C1C] text-white py-16">
      <div className="md:container mx-auto px-4">
        {/* Store description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            <span className="font-['Biduan']">GENCSS</span>
          </h2>
          <p className="text-gray-400 max-w-3xl">
            Discover premium tech products with our sleek, modern e-commerce
            experience. Our carefully curated collection of electronics and
            gadgets combines quality with style, offering you the latest
            innovations to enhance your digital lifestyle.
          </p>
        </div>

        {/* Footer links grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <LocalizedClientLink
                    href={link.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-semibold mb-4">Collections</h3>
            <ul className="space-y-2">
              {collections.collections.map((collection) => (
                <li key={collection.id}>
                  <LocalizedClientLink
                    href={`/collections/${collection.handle}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {collection.title}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Most Purchase */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {productCategories.map((link) => (
                <li key={link.id}>
                  <LocalizedClientLink
                    href={`/categories/${link.handle}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.name}>
                  <LocalizedClientLink
                    href={link.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-800">
          <p className="text-gray-400">Copyright© {currentYear} GENCSS</p>

          <div className="flex items-center gap-8">
            {/* Language selector */}
            <div className="flex items-center gap-2 bg-[#252525] px-3 py-2 rounded cursor-pointer">
              <span>EN</span>
              <span className="text-xs">▼</span>
            </div>

            {/* Currency selector */}
            <div className="flex items-center gap-2 bg-[#252525] px-3 py-2 rounded cursor-pointer">
              <span>🇸🇦</span>
              <span>SAR</span>
              <span className="text-xs">▼</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
