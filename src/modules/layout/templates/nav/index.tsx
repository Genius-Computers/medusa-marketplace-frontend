import { Suspense } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import {
  BriefcaseMedical,
  Camera,
  ChevronDown,
  Facebook,
  Instagram,
  Laptop,
  Linkedin,
  Network,
  Phone,
  Router,
  Search,
  ShoppingBag,
  Smartphone,
  Twitter,
  User,
  Watch,
} from "lucide-react"
import SearchProduct from "@modules/search/templates"

export default async function Nav(props: { params: { countryCode: string } }) {
  return (
    <>
      <div className="bg-black text-white py-2 px-4">
        <div className="md:container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            {props.params.countryCode === "sa" && (
              <div className="flex items-center gap-2">
                <span>🇸🇦</span>
                <span>Saudi Arabia</span>
              </div>
            )}
          </div>

          <div className="text-center">Up to 50% OFF on Today's Deals</div>

          <div className="flex items-center gap-4">
            <Facebook
              size={16}
              className="cursor-pointer hover:text-gray-300"
            />
            <Twitter size={16} className="cursor-pointer hover:text-gray-300" />
            <Linkedin
              size={16}
              className="cursor-pointer hover:text-gray-300"
            />
            <Instagram
              size={16}
              className="cursor-pointer hover:text-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md text-black">
        <div className="md:container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6">
                <LocalizedClientLink href="/categories/smart-phone">
                  <Smartphone className="w-6 h-6" />
                </LocalizedClientLink>
                <LocalizedClientLink href="/categories/network-infrastructure">
                  <Router className="w-6 h-6" />
                </LocalizedClientLink>
                <LocalizedClientLink href="/categories/biomedical-equipment">
                  <BriefcaseMedical className="w-6 h-6" />
                </LocalizedClientLink>
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
              <LocalizedClientLink href="/" className="text-4xl font-bold">
                <span className="font-['Biduan']">GENCSS</span>
              </LocalizedClientLink>
            </div>

            <div className="flex items-center gap-6">
              <SearchProduct params={props.params} />
              <LocalizedClientLink
                href="/account"
                className="text-sm hover:text-gray-600"
              >
                <User className="w-6 h-6 cursor-pointer" />
              </LocalizedClientLink>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="relative"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    <ShoppingBag className="w-6 h-6 cursor-pointer" />
                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t text-black">
        <div className="md:container mx-auto px-4 whitespace-nowrap">
          <div className="flex md:overflow-hidden overflow-x-auto items-center justify-between h-12">
            <nav className="flex items-center gap-8">
              <LocalizedClientLink
                href="/"
                className="text-sm hover:text-gray-600"
              >
                Home
              </LocalizedClientLink>
              <div className="relative group">
                <LocalizedClientLink
                  href="/collections/featured"
                  className="text-sm hover:text-gray-600 flex items-center gap-1"
                >
                  Featured
                  <ChevronDown size={16} />
                </LocalizedClientLink>
              </div>
              <div className="relative group">
                <LocalizedClientLink
                  href="/store"
                  className="text-sm hover:text-gray-600 flex items-center gap-1"
                >
                  Shop
                  <ChevronDown size={16} />
                </LocalizedClientLink>
              </div>
              <LocalizedClientLink
                href="/about"
                className="text-sm hover:text-gray-600"
              >
                About
              </LocalizedClientLink>
            </nav>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <span>🌍</span>
                <span>Shipping & Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
