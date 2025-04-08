import { Camera, ChevronDown, Instagram, Laptop, Linkedin, Search, ShoppingBag, User, Watch } from "lucide-react";
import { Facebook, Twitter } from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <>
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span>EN</span>
              <ChevronDown size={16} />
            </div>
            <div className="flex items-center gap-2">
              <span>🇸🇦</span>
              <span>SAR</span>
              <ChevronDown size={16} />
            </div>
          </div>

          <div className="text-center">Up to 50% OFF on Cyber Monday Deals</div>

          <div className="flex items-center gap-4">
            <Facebook size={16} className="cursor-pointer hover:text-gray-300" />
            <Twitter size={16} className="cursor-pointer hover:text-gray-300" />
            <Linkedin size={16} className="cursor-pointer hover:text-gray-300" />
            <Instagram size={16} className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md text-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6">
                <Camera className="w-6 h-6" />
                <Laptop className="w-6 h-6" />
                <Watch className="w-6 h-6" />
              </div>
            </div>

            <div className="text-2xl font-bold">GENIUS</div>

            <div className="flex items-center gap-6">
              <Search className="w-6 h-6 cursor-pointer" />
              <User className="w-6 h-6 cursor-pointer" />
              <div className="relative">
                <ShoppingBag className="w-6 h-6 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t text-black">
        <div className="container mx-auto px-4 whitespace-nowrap">
          <div className="flex md:overflow-hidden overflow-x-auto items-center justify-between h-12">
            <nav className="flex items-center gap-8">
              <a href="#" className="text-sm hover:text-gray-600">
                Home
              </a>
              <div className="relative group">
                <a href="#" className="text-sm hover:text-gray-600 flex items-center gap-1">
                  Catalog
                  <ChevronDown size={16} />
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-sm hover:text-gray-600 flex items-center gap-1">
                  New arrivals
                  <ChevronDown size={16} />
                </a>
              </div>
              <a href="#" className="text-sm hover:text-gray-600">
                About
              </a>
              <a href="#" className="text-sm hover:text-gray-600">
                Contact
              </a>
              <a href="#" className="text-sm hover:text-gray-600">
                Blogs
              </a>
              <div className="relative group">
                <a href="#" className="text-sm hover:text-gray-600 flex items-center gap-1">
                  Shop
                  <ChevronDown size={16} />
                </a>
              </div>
              <a href="#" className="text-sm hover:text-gray-600">
                Smart Watches
              </a>
              <a href="#" className="text-sm hover:text-gray-600">
                New products
              </a>
            </nav>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <span>🌍</span>
                <span>Shipping & Return</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>All categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
